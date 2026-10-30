// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';
import { contentState } from './scripts/content-state.mjs';

const root = fileURLToPath(new URL('.', import.meta.url));
const env = process.env;

// Placeholders show in preview builds and are hidden in production.
// An explicit PUBLIC_SHOW_PLACEHOLDERS always wins. Otherwise Cloudflare Pages
// builds of any branch except `main` count as previews, and so does `astro dev`.
const isDev = process.argv.includes('dev');
const showPlaceholders =
  env.PUBLIC_SHOW_PLACEHOLDERS !== undefined
    ? env.PUBLIC_SHOW_PLACEHOLDERS === 'true'
    : env.CF_PAGES_BRANCH
      ? env.CF_PAGES_BRANCH !== 'main'
      : isDev;

const site = (env.PUBLIC_SITE_URL || 'https://veronamedia.co.uk').replace(/\/$/, '');
const state = contentState(root);

// Routes kept out of the sitemap: noindex pages, placeholder-only pages, drafts
// and the insights index until at least one post is published.
const excluded = new Set(['/thanks', '/404']);
if (state.clearedWorkSlugs.length === 0) excluded.add('/work');
if (state.publishedInsightSlugs.length === 0) excluded.add('/insights');
for (const slug of state.draftInsightSlugs) excluded.add(`/insights/${slug}`);

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      filter: (page) => !excluded.has(new URL(page).pathname.replace(/\/$/, '') || '/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    define: {
      'import.meta.env.PUBLIC_SHOW_PLACEHOLDERS': JSON.stringify(String(showPlaceholders)),
      // This deployment's own URL (Cloudflare sets CF_PAGES_URL), so a preview's
      // form redirects to the preview's /thanks rather than production's.
      'import.meta.env.PUBLIC_DEPLOY_URL': JSON.stringify(
        env.CF_PAGES_BRANCH && env.CF_PAGES_BRANCH !== 'main' && env.CF_PAGES_URL ? env.CF_PAGES_URL : '',
      ),
    },
  },
});
