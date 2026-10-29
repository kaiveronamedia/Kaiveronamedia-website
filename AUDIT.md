# Audit: Verona Media site (Pass 1, step 1)

Date: 29 Oct 2026. Branch: `content/launch`.

## Summary

**There is no existing build to audit.** The brief describes a private Astro repo, `verona-media-site`, but:

- the only repository this session can reach is `kaiveronamedia/Kaiveronamedia-website`;
- at audit time it held one commit ("Initial commit") with a one-line `README.md`;
- neither upload (`verona-website-pack.zip`, `verona-visual-brief-for-claude.zip`) contains site code.

So every route below is **missing**, and the setup checks all fail. Nothing existing has to be deleted or rewritten, so I carried on and built the site from scratch in this repo, to the spec.

## Documents

| Document | Status | Notes |
|---|---|---|
| `VERONA_WEBSITE_INFO_FOR_CLAUDE.md` | Present | Source of truth for copy and rules. |
| `DESIGN_BRIEF.md`, `VISUAL_CODE_BRIEF.md`, `CLAUDE_PROMPT.md`, `design-refs/` | Present | Used in Pass 2. `box-to-box.png` is ignored, as instructed. |
| `AGENTS.md` | **Missing** | Its text is the "Full detail" part of the info file ("Every coding agent working in this repo reads this file first..."). I created `AGENTS.md` from that text, unchanged apart from a header note. |
| `BUILD_BRIEF.md` | **Missing** | It's referenced for §3 (contact), §5 (book), §8 (redirects), §12 (performance bar) and §13 (DNS). Where those sections would have supplied copy or config, I used what the info file says and left placeholders or checklist items. |
| `reference/roi-calculator-live.html` | **Missing** | Not needed: the calculator is embedded, not rebuilt. |
| `CLAUDE.md` | **Missing** | Created. It points future sessions at `AGENTS.md` first, then the briefs. |

## Routes (info file §6.1)

| Route | Status | What's wrong |
|---|---|---|
| `/` | Missing | Not built. |
| `/how-it-works` | Missing | Not built. |
| `/video-for-architects` | Missing | Not built. |
| `/video-for-construction` | Missing | Not built. |
| `/video-for-mortgage-brokers` | Missing | Not built. |
| `/work` | Missing | Not built. |
| `/work/[slug]` | Missing | Not built. No cleared clips exist yet, so no pages are generated. |
| `/about` | Missing | Not built. |
| `/pricing` | Missing | Not built. |
| `/roi-calculator` | Missing | Not built. |
| `/book` | Missing | Not built. |
| `/contact` | Missing | Not built. |
| `/thanks` | Missing | Not built. |
| `/privacy-policy` | Missing | Not built. The live policy at kaiverona.co.uk couldn't be fetched from this session (the network policy blocks the host), so the ported text is a placeholder. |
| `/404` | Missing | Not built. |
| `/insights`, `/insights/[slug]` | Missing | Not built (Pass 1 step 3). |

## Setup

| Check | Status |
|---|---|
| Astro 7 + Tailwind v4 project | Missing |
| Static output | Missing |
| Content in `src/content/**` | Missing |
| `BaseLayout` | Missing |
| `Placeholder` | Missing |
| `YouTubeFacade` | Missing |
| `RoiEmbed` | Missing |
| `npm run check` | Missing |
| `public/_redirects`, `robots.txt`, sitemap | Missing |
| Pages CMS config (`.pages.yml`) | Missing |

## Environment notes

- Astro 7.4 needs Node ≥ 22.23.4. The repo pins Node 24 in `.node-version`, so Cloudflare Pages builds use it too.
- This session couldn't reach `kaiverona.co.uk` or `roi.kaiverona.co.uk`, so the ROI embed is unverified here. It's wired to spec (origin-checked `postMessage`, fallback link).

## Plan

I built everything in the order the brief gives (homepage, core pages, sector pages, ROI, about/work/pricing/privacy, SEO, then insights). The PR description lists the results page by page.
