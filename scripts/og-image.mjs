// Regenerates public/og-default.png (1200×630) in "The Drawing Set" style:
// an Ink ground, the typeset wordmark, the strapline in the serif and the domain
// as a mono label. Text only, all from settings.json.
// Manual step (needs Playwright + Chromium installed locally): npm run og
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { root } from './lib.mjs';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const settings = JSON.parse(readFileSync(join(root, 'src/content/settings.json'), 'utf8'));
const domain = new URL(process.env.PUBLIC_SITE_URL || 'https://veronamedia.co.uk').host;
const font = (pkg, file) =>
  `url(data:font/woff2;base64,${readFileSync(join(root, 'node_modules', pkg, 'files', file)).toString('base64')}) format('woff2')`;

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  @font-face { font-family: 'OG Serif'; src: ${font('@fontsource/instrument-serif', 'instrument-serif-latin-400-normal.woff2')}; }
  @font-face { font-family: 'OG Mono'; font-weight: 500; src: ${font('@fontsource/geist-mono', 'geist-mono-latin-500-normal.woff2')}; }
  html, body { margin: 0; }
  body { width: 1200px; height: 630px; box-sizing: border-box; padding: 64px 72px 60px; background: #0b1322; color: #ece9e3;
    display: flex; flex-direction: column; justify-content: space-between; }
  .name { font: 400 40px/1 'OG Serif'; letter-spacing: -0.01em; }
  .strap { font: 400 88px/0.98 'OG Serif'; letter-spacing: -0.02em; max-width: 11em; }
  .foot { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgb(236 233 227 / .14); padding-top: 22px;
    font: 500 18px/1 'OG Mono'; letter-spacing: 0.08em; text-transform: uppercase; color: #a7adb8; }
  .datum { display: inline-block; width: 10px; height: 10px; background: #3d9494; margin-right: 14px; }
</style></head><body>
  <div class="name">${settings.siteName}</div>
  <div class="strap">${settings.strapline}</div>
  <div class="foot"><span><span class="datum"></span>${domain}</span><span>${settings.locality}</span></div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: join(root, 'public/og-default.png') });
await browser.close();
console.log('✓ public/og-default.png');
