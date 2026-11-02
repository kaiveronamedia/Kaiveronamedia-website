// public/_redirects must be valid Cloudflare Pages syntax, must not shadow a
// real page, and every internal destination must exist in the build.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { dist, root, walk, routeOf, report } from './lib.mjs';

const routes = new Set(walk(dist, '.html').map(routeOf));
const errors = [];
const seen = new Set();
const lines = readFileSync(join(root, 'public/_redirects'), 'utf8').split('\n');
lines.forEach((raw, i) => {
  const line = raw.trim();
  if (!line || line.startsWith('#')) return;
  const [from, to, status = '302', ...rest] = line.split(/\s+/);
  const where = `_redirects line ${i + 1}`;
  if (rest.length) errors.push(`${where}: too many fields`);
  if (!from?.startsWith('/')) errors.push(`${where}: source must start with "/"`);
  if (!to) errors.push(`${where}: missing destination`);
  if (!['301', '302', '303', '307', '308'].includes(status)) errors.push(`${where}: bad status ${status}`);
  if (status !== '301') errors.push(`${where}: old URLs should be permanent (301)`);
  if (seen.has(from)) errors.push(`${where}: duplicate source ${from}`);
  seen.add(from);
  if (routes.has(from)) errors.push(`${where}: ${from} is also a real page, so the redirect would never run`);
  if (to?.startsWith('/')) {
    const ok = routes.has(to.replace(/\/$/, '') || '/') || existsSync(join(dist, to));
    if (!ok) errors.push(`${where}: destination ${to} doesn't exist in the build`);
  }
});

// The redirects the brief requires (info file §6.1 and §10).
const required = { '/appointments': '/book', '/new-page-2': '/about', '/add-ons': '/pricing', '/sitemap.xml': '/sitemap-index.xml' };
for (const [from, to] of Object.entries(required)) {
  const line = lines.find((l) => l.trim().split(/\s+/)[0] === from);
  if (!line || line.trim().split(/\s+/)[1] !== to) errors.push(`missing required redirect ${from} -> ${to}`);
}
if (!report(`redirects (${seen.size} rules)`, errors)) process.exitCode = 1;
