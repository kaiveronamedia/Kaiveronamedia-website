// npm run check: astro check, a production build, then the copy, link and
// redirect checks against dist/. Fails on the first failing step.
import { spawnSync } from 'node:child_process';
import { root } from './lib.mjs';

const env = { ...process.env, PUBLIC_SHOW_PLACEHOLDERS: 'false' };
const steps = [
  ['astro check', ['npx', 'astro', 'check']],
  ['production build', ['npx', 'astro', 'build']],
  ['copy rules', ['node', 'scripts/check-copy.mjs']],
  ['links', ['node', 'scripts/check-links.mjs']],
  ['redirects', ['node', 'scripts/check-redirects.mjs']],
];
for (const [name, [cmd, ...args]] of steps) {
  console.log(`\n▶ ${name}`);
  const res = spawnSync(cmd, args, { cwd: root, env, stdio: 'inherit' });
  if (res.status !== 0) {
    console.error(`\n✗ npm run check failed at: ${name}`);
    process.exit(res.status ?? 1);
  }
}
console.log('\n✓ npm run check passed');
