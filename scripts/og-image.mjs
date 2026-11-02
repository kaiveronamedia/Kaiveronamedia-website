// Regenerates public/og-default.png (1200×630) from settings.json.
// Manual step (needs Playwright + Chromium installed locally): npm run og
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { root } from './lib.mjs';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const settings = JSON.parse(readFileSync(join(root, 'src/content/settings.json'), 'utf8'));
const domain = new URL(process.env.PUBLIC_SITE_URL || 'https://veronamedia.co.uk').host;

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  html, body { margin: 0; }
  body { width: 1200px; height: 630px; box-sizing: border-box; padding: 64px 72px; background: #0b1322; color: #ece9e3;
    font-family: ui-sans-serif, system-ui, sans-serif; display: flex; flex-direction: column; justify-content: space-between; }
  .name { font-size: 34px; font-weight: 600; }
  .strap { font-size: 84px; line-height: 1; letter-spacing: -0.02em; max-width: 14ch; }
  .domain { font: 500 20px ui-monospace, monospace; letter-spacing: 0.08em; text-transform: uppercase; color: #a7adb8; }
</style></head><body>
  <div class="name">${settings.siteName}</div>
  <div class="strap">${settings.strapline}</div>
  <div class="domain">${domain}</div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'load' });
await page.screenshot({ path: join(root, 'public/og-default.png') });
await browser.close();
console.log('✓ public/og-default.png');
