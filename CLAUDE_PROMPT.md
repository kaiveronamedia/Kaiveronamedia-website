# Prompt to paste into Claude (with the repo open)

You're redesigning the **visual layer** of my Astro 7 + Tailwind v4 site, Verona Media (repo `verona-media-site`). It currently looks amateur. I want it to look like a specialist that architects and construction firms would trust with a £5k+ project: calm, editorial and exact.

**Read first:** `AGENTS.md` (the hard rules), then `DESIGN_BRIEF.md` (the full spec; the screenshots it references are in `design-refs/`). If this prompt and `DESIGN_BRIEF.md` differ, follow `DESIGN_BRIEF.md`.

## Don't change
- Any visible copy, routes, SEO titles/descriptions, schema, redirects, the form logic, the Cal.com embed or the ROI embed.
- The hard rules: no prices or "£" on the homepage; no invented results, logos, testimonials or client names; no accountancy; testimonials verbatim, directly under the hero; max 8 homepage sections; **no autoplay, carousels or marquees**; one solid teal button per screen; banned words stay banned, including "cinematic", "storytelling", "elevate" and "shoot".

## The direction: "The Drawing Set"
The site should feel like a beautifully produced set of architectural drawings: a serif voice, a 12-column grid with hairline rules, small mono annotations, and video shown as framed plates with captions underneath. Ink and warm paper, with teal used sparingly as the "redline".

- **Fonts** (self-host via Fontsource; remove Space Grotesk and Raleway):
  - **Instrument Serif** 400 + italic for headings and quotes. Preload the 400 latin file.
  - **Instrument Sans** variable for body, UI and buttons.
  - **Geist Mono** 500 for small uppercase labels only.
  - Headings are sentence case, never bold, never uppercase.
- **Palette:**

  | Token | Hex |
  |---|---|
  | ink | `#0B1322` |
  | ink-2 | `#121C2E` |
  | stone | `#F3F0EA` |
  | stone-2 | `#E8E3D9` |
  | graphite | `#16191F` |
  | slate | `#585E68` |
  | mist | `#ECE9E3` |
  | fog | `#A7ADB8` |
  | teal | `#3D9494` (brand, unchanged) |
  | teal-deep | `#1F5C59` |
  | teal-light | `#7CC4BE` |

  - The primary button is teal with an ink label on dark sections, and teal-deep with a stone label on light ones.
  - Never put teal text on stone (3.15:1).
- **Type scale:** H1 is `clamp(2.75rem, 1.6rem + 4.9vw, 6rem)`, line height 0.98, tracking −0.02em. H2 is `clamp(2rem, 1.45rem + 2.3vw, 3.5rem)`. Body is 17px / 1.6. Labels are 12px mono uppercase, +0.08em.
- **Layout:**
  - Container 1320px, 12 columns, 24px gap.
  - Keep the single 900px breakpoint and make everything else fluid with `clamp()`.
  - Section padding is 80–160px.
  - Radius 2px. Hairlines instead of boxes. No shadows, glows or gradients.
- **Components:**
  - **Header:** a small sticky header with an outline CTA.
  - **Section headers:** a hairline plus a mono number, e.g. `02 — The problem`.
  - **Testimonials:** serif italic quotes in columns divided by hairlines.
  - **Video plates:** framed YouTube facades with a lower-third caption below (hook, then the job in mono). A CSS-only hover.
  - **"What you get":** a specification schedule with INCLUDED / ADD-ON tags.
  - **"Who it's for":** an editorial index list with big serif names and arrows.
  - **FAQ:** `<details>` rows with a + that becomes ×.
  - **Footer:** a giant faint "Verona Media" wordmark.
  - **Hero fallback:** when no cleared hero clip exists, production shows an SVG "funnel drawing" plate (Attention → Trust → Conversion → Booked call), using only facts already in the content.
- **Motion:**
  - CSS only: scroll-driven fade-ups, underline draws, arrow nudges and a cross-document view transition.
  - Everything is off under `prefers-reduced-motion`.
  - Content is visible without JS.
  - No GSAP, Lenis, WebGL, parallax or preloaders.
  - Add ≤ 2 KB of JS in total.
- **Homepage surfaces:** Ink hero (with testimonials) → Stone problem → Stone process → Ink what-you-get → Stone who → Ink work → Stone FAQ → Ink CTA and footer.
- **AGENTS.md:** rewrite its §5 to the new tokens, using the text in `DESIGN_BRIEF.md` §11, and flag it in the PR for my approval.

## Done means
- `npm run check` is green, and there are no copy changes (apart from an optional `heroEmphasis` field that italicises "Do they get enquiries?").
- Mobile Lighthouse: Performance ≥ 95 (never below 90), Accessibility 100, Best Practices ≥ 95, SEO 100. CLS < 0.05. Fonts ≤ 100 KB in total.
- axe shows zero serious or critical violations. Everything works by keyboard and with reduced motion.
- One PR, on branch `design/drawing-set`. Include screenshots of `/`, `/video-for-architects` and `/how-it-works` at 375px and 1440px, plus a list of the assets I still need to supply (posters, headshot, logo).
