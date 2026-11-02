# Verona Media website

The site for [veronamedia.co.uk](https://veronamedia.co.uk): Astro 7 (static output), Tailwind v4 and TypeScript, deployed on Cloudflare Pages. Copy lives in `src/content/**` and is editable in [Pages CMS](https://pagescms.org) (see `.pages.yml`).

**Before changing anything, read `CLAUDE.md`, then `AGENTS.md`.**

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies (Node ≥ 22.23.4; the repo pins Node 24 in `.node-version`) |
| `npm run dev` | Local dev server at http://localhost:4321, with placeholders visible |
| `npm run build` | Build to `dist/` |
| `npm run check` | Must pass before every PR: `astro check`, a production build, the copy scan (banned words, homepage `£`, placeholders, em dashes, accountancy, one `<h1>`, SEO lengths and duplicates), the link check and the redirect test |
| `npm run og` | Regenerate `public/og-default.png` (needs Playwright locally) |

## Environment variables

Set these in Cloudflare Pages (Settings → Environment variables). See `.env.example`.

| Variable | Notes |
|---|---|
| `PUBLIC_SITE_URL` | `https://veronamedia.co.uk` (the default) |
| `PUBLIC_SHOW_PLACEHOLDERS` | Leave unset. Builds of `main` hide placeholders; every other branch (PR previews) shows them as dashed amber boxes and is `noindex` |
| `PUBLIC_WEB3FORMS_KEY` | Web3Forms access key. Without it the contact form doesn't render |
| `PUBLIC_CF_BEACON_TOKEN` | Cloudflare Web Analytics token. Without it no beacon loads |
| `PUBLIC_ROI_CALCULATOR_URL` | Defaults to `https://roi.kaiverona.co.uk` |
| `PUBLIC_CAL_LINK` | Defaults to `kai-verona-pkvqef/video-roadmap` |

## Where things live

- `src/content/settings.json`: site name, nav, footer, primary CTA, CTA band (including the ROI calculator text link), socials
- `src/content/home/index.md`: every homepage section
- `src/content/pages/*.md`: inner pages
- `src/content/sectors/*.md`: the three sector pages (shared template `src/components/SectorPage.astro`)
- `src/content/work/*.md`: clips. Only `cleared: true` clips with a YouTube ID are published, each with its own watch page
- `src/content/insights/*.md`: blog posts. `draft: true` posts only appear in preview builds. The footer link and the `/insights` index appear once a post is published
- `public/_redirects`: old Squarespace URLs → new pages

## Placeholders

Anything still to come from Kai is written as `[[PLACEHOLDER: what's needed]]` in content. Preview builds show it; production builds drop the block it's in, and `npm run check` fails if a token ever reaches production HTML.
