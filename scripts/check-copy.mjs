// Copy rules from AGENTS.md, checked against the production build in dist/:
// banned words (incl. alt text and aria-labels), "quietly"/"genuinely", em dashes,
// accountancy, homepage £, placeholder tokens, one <h1> per page, homepage
// section count, autoplay, and SEO title/description lengths and duplicates.
import { join } from 'node:path';
import { dist, root, walk, read, rel, routeOf, report } from './lib.mjs';

const BANNED = [
  'content creators?', 'videographers?', 'day rates?', 'shoot', 'shoots', 'shooting',
  'filmmakers?', 'cinematic', 'storytelling', 'passionate', 'creative journeys?',
  'elevate', 'elevates', 'elevated', 'elevating', 'brands', 'businesses', 'clients',
  'quietly', 'genuinely',
];
const bannedRe = new RegExp(`\\b(${BANNED.join('|')})\\b`, 'gi');

const decode = (s) =>
  s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#39;|&#x27;|&apos;/g, "'").replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));

/** Visible copy plus the attribute text people and machines read. */
function copyOf(html) {
  const cleaned = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    // Real testimonials are reproduced verbatim and are exempt (AGENTS.md §3).
    .replace(/<blockquote[^>]*data-testimonial[^>]*>[\s\S]*?<\/blockquote>/gi, ' ');
  const attrs = [...cleaned.matchAll(/\s(?:alt|aria-label|title|content|placeholder)="([^"]*)"/gi)].map((m) => m[1]);
  const text = cleaned.replace(/<[^>]+>/g, ' ');
  return decode([text, ...attrs].join(' ')).replace(/\s+/g, ' ');
}

const production = process.env.PUBLIC_SHOW_PLACEHOLDERS !== 'true';
const errors = [];
const warnings = [];
const titles = new Map();
const descriptions = new Map();

for (const file of walk(dist, '.html')) {
  const html = read(file);
  const route = routeOf(file);
  const copy = copyOf(html);

  for (const m of copy.matchAll(bannedRe)) {
    const at = m.index ?? 0;
    errors.push(`${route}: banned word "${m[0]}" in "…${copy.slice(Math.max(0, at - 40), at + 40).trim()}…"`);
  }
  if (/—|&mdash;|&#8212;|&#x2014;/i.test(html)) errors.push(`${route}: em dash found (use a comma, colon, full stop or middle dot)`);
  if (/accountan/i.test(copy)) errors.push(`${route}: mentions accountancy`);
  if (production && (html.includes('[[PLACEHOLDER') || /PLACEHOLDER/.test(html))) {
    errors.push(`${route}: placeholder token in production HTML`);
  }
  const h1s = (html.match(/<h1[\s>]/gi) || []).length;
  if (h1s !== 1) errors.push(`${route}: ${h1s} <h1> elements (needs exactly one)`);
  if (/<video[^>]*\sautoplay/i.test(html) || /<iframe[^>]*src="[^"]*autoplay=1/i.test(html)) {
    errors.push(`${route}: autoplaying media in the initial HTML`);
  }

  if (route === '/') {
    if (/£|&pound;|&#163;|&#xa3;/i.test(html)) errors.push('/: "£" on the homepage');
    const sections = (html.match(/data-section=/g) || []).length;
    if (sections > 8) errors.push(`/: ${sections} homepage sections (max 8)`);
  }

  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '');
  const description = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  if (!title) errors.push(`${route}: missing <title>`);
  if (!description) errors.push(`${route}: missing meta description`);
  if (title.length > 60) warnings.push(`${route}: title is ${title.length} characters (aim for ≤ 60)`);
  if (description && (description.length < 120 || description.length > 155)) {
    warnings.push(`${route}: description is ${description.length} characters (aim for 120–155)`);
  }
  if (titles.has(title)) errors.push(`${route}: duplicate title (also on ${titles.get(title)})`);
  else titles.set(title, route);
  if (descriptions.has(description)) errors.push(`${route}: duplicate description (also on ${descriptions.get(description)})`);
  else descriptions.set(description, route);
}

// Source content too, so drafts and hidden blocks are clean before they go live.
for (const file of [...walk(join(root, 'src/content')), ...walk(join(root, 'src/components')), ...walk(join(root, 'src/pages'))]) {
  const text = read(file);
  if (/—/.test(text)) errors.push(`${rel(file)}: em dash`);
  const lines = text.split('\n').filter((l) => !/^\s*-?\s*quote:/.test(l));
  for (const line of lines) {
    for (const m of line.matchAll(bannedRe)) errors.push(`${rel(file)}: banned word "${m[0]}"`);
    if (/accountan/i.test(line)) errors.push(`${rel(file)}: mentions accountancy`);
  }
}

// Voice (AGENTS.md §3): copy leads with "you", never "we". Checks every quoted
// content string and every Markdown paragraph. Testimonials never start with "We"
// and legal text doesn't either, so there are no exemptions to manage yet.
const leadsWithWe = /^(We|We'(?:ll|re|ve|d)|Our)\b/;
for (const file of walk(join(root, 'src/content'))) {
  if (!/\.(md|json)$/.test(file)) continue;
  const text = read(file);
  const strings = [...text.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);
  const body = text.replace(/^---[\s\S]*?---/, '').split(/\n{2,}/).map((p) => p.trim().replace(/^[-*>#\s]+/, ''));
  for (const s of [...strings, ...body]) {
    if (leadsWithWe.test(s)) errors.push(`${rel(file)}: leads with "we" (start from the visitor: "You…"): "${s.slice(0, 60)}…"`);
  }
}

if (!report('copy rules', errors, warnings)) process.exitCode = 1;
