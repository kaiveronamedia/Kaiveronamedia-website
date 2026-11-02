// Every internal link and asset in dist/ must resolve to a built file or a
// redirect source, and every same-page anchor must exist.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { dist, root, walk, read, routeOf, report } from './lib.mjs';

const redirects = new Set(
  readFileSync(join(root, 'public/_redirects'), 'utf8')
    .split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#')).map((l) => l.split(/\s+/)[0]),
);
const pages = new Map(walk(dist, '.html').map((f) => [routeOf(f), read(f)]));

function resolves(path) {
  if (redirects.has(path)) return true;
  const clean = path.replace(/\/$/, '') || '/';
  if (pages.has(clean)) return true;
  return existsSync(join(dist, decodeURIComponent(path)));
}

const ids = (html) => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
const errors = [];
for (const [route, html] of pages) {
  for (const m of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const url = m[1];
    if (/^(https?:|mailto:|tel:|data:|\/\/)/.test(url)) continue;
    const [pathPart, hash] = url.split('#');
    const path = pathPart.split('?')[0];
    const target = path === '' ? route : path;
    if (path && !path.startsWith('/')) { errors.push(`${route}: relative link "${url}"`); continue; }
    if (!resolves(target)) { errors.push(`${route}: broken link "${url}"`); continue; }
    if (hash) {
      const html2 = pages.get(target.replace(/\/$/, '') || '/');
      if (html2 && !ids(html2).has(hash)) errors.push(`${route}: missing anchor "${url}"`);
    }
  }
}
if (!report(`links (${pages.size} pages)`, errors)) process.exitCode = 1;
