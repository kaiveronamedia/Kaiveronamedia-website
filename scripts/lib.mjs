import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

export const root = new URL('..', import.meta.url).pathname;
export const dist = join(root, 'dist');

export function walk(dir, ext) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full, ext));
    else if (!ext || name.endsWith(ext)) out.push(full);
  }
  return out;
}

export const read = (f) => readFileSync(f, 'utf8');
export const rel = (f) => relative(root, f);

/** Route path for a built HTML file, e.g. dist/about.html -> /about */
export function routeOf(file) {
  const r = '/' + relative(dist, file).replace(/\\/g, '/').replace(/\.html$/, '').replace(/(^|\/)index$/, '');
  return r === '/' ? '/' : r.replace(/\/$/, '');
}

export function report(name, errors, warnings = []) {
  for (const w of warnings) console.warn(`  warn  ${w}`);
  for (const e of errors) console.error(`  FAIL  ${e}`);
  console.log(errors.length ? `✗ ${name}: ${errors.length} problem(s)` : `✓ ${name}`);
  return errors.length === 0;
}
