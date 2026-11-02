# DESIGN BRIEF: Verona Media redesign ("The Drawing Set")

**For:** the coding agent (Claude) restyling the existing Astro 7 + Tailwind v4 site in `kai-verona/verona-media-site`.
**Prepared:** 26 Oct 2026, from `AGENTS.md`, `BUILD_BRIEF.md`, the current `src/styles/global.css` and `src/pages/index.astro`, and twelve reference sites captured at 1440×900 in `design-refs/`.
**Goal:** make the site look like a £5k+ specialist that an architecture practice or a main contractor would trust on sight. Calm, editorial and exact, not "agency-flashy".

---

## 0. Read this first: scope and precedence

1. **This is a visual redesign only.** Don't change copy, routes, slugs, SEO titles/descriptions, schema, redirects, the content collections, the form, the Cal embed, the ROI embed or the check scripts. Every word on the page stays exactly as it is in `src/content/**`.
2. **`AGENTS.md` still wins on everything except §5 (Design tokens).** This brief replaces §5. In the same PR, rewrite `AGENTS.md` §5 to match §4 of this brief (the replacement text is in §11). Flag that change at the top of the PR description, because Kai has to approve it.
3. **All hard rules stay**, including the ones that tempt a "premium" design to break them:
   - No prices and no `£` on the homepage. No invented results, logos, client names, "trusted by" bars, star ratings or stock "client" footage.
   - No accountancy, anywhere.
   - Testimonials sit directly under the hero, verbatim, inside `<blockquote data-testimonial>`.
   - **One primary (teal, solid) button per screen.** The header CTA therefore becomes an *outline* button (§5.2).
   - At most 8 homepage sections.
   - **No carousels, sliders, marquees or autoplaying video.** Several references autoplay showreels; we borrow their framing, never their autoplay.
   - The banned-word list applies to any new visible text, `aria-label`s and `alt` text included. Watch especially for "cinematic", "storytelling", "elevate", "shoot" and "filmmaker". This brief uses some of those words to describe the *design*; none of them may reach the site.
4. **Performance and accessibility bar** (unchanged from `BUILD_BRIEF.md` §12): mobile Lighthouse Performance ≥ 95 (never below 90), Accessibility 100, Best Practices ≥ 95, SEO 100. WCAG 2.2 AA. Homepage JS < 20 KB; this redesign should *add* under 2 KB.

---

## 1. Why it looks amateur now (what to fix)

From `global.css` and the spec:

- **One saturated royal navy (`#0E1E4E`) everywhere.** Every band is dark and the same blue, so nothing has hierarchy and the page reads like a template. Premium sites in this space alternate a near-black ink with a warm paper.
- **Uppercase Space Grotesk 700 on headings, buttons and eyebrows**, plus Raleway body. Two geometric "techy" faces and shouted caps read "start-up", not "trusted specialist". Raleway's quirky numerals and *w* cheapen body copy.
- **A glowing teal button** and **cards with coloured left/top borders.** Both are SaaS-template tells.
- **A narrow 1080px column with uniform section padding.** There's no scale contrast between a huge headline and small annotation, which is the main thing that separates "designed" from "assembled".
- **Video tiles with no framing or captions** that look like embedded YouTube.

---

## 2. The references (screenshots in `design-refs/`)

All captured headless at 1440×900 on 26 Oct 2026. Some heroes are video, so a still can catch a mid-transition frame. `design-refs/_contact-sheet.png` shows all twelve on one sheet. Recognition is noted only where I verified it.

| # | Site | File | Why it's here | Borrow | Don't borrow |
|---|---|---|---|---|---|
| 1 | **Studio RHE**, London architects. https://www.studiorhe.com | `studio-rhe.png` | Awwwards SOTD (14 Dec 2022), built by Outpost (Cheshire). Shows what an architecture-practice audience reads as premium. | A huge light serif headline ("Building Beyond", ~187px, weight 300, −0.025em) set over the image, with a small serif intro paragraph top-right. A minimal monogram logo. A thin vertical rail on the right with tiny rotated labels. Serif + sans pairing (The Serif / The Sans). | Full-bleed photography that we don't have yet; horizontal scroll. |
| 2 | **Stanton Williams**, London, Stirling Prize winners. https://stantonwilliams.com | `stanton-williams.png` | The register our buyers live in: quiet, white, exact. | Lyon-style text serif for pull quotes at ~32px with a hanging opening quote mark. Small light sans nav (Studio · Works · Contact). Lots of white space. An image with a small caption directly under it (caption-under-plate). | The very thin AvantGarde nav is too faint for AA. |
| 3 | **Pulse Films**, London. https://pulsefilms.com | `pulse-films.png` | The closest palette precedent: a deep green-black ground (`#14241F`) with cream type, and the video **inset with a margin, like a framed plate**. | Video framed inside the page margin rather than full-bleed. Four-corner nav (Directors / Work / About / Contact) in small spaced mono caps (GT Pressura Mono). Cream-on-ink contrast. | The condensed display logo; the autoplay. |
| 4 | **Academy Films**, London. https://www.academyfilms.com | `academy-films.png` | Classic UK production-house restraint. | Widely tracked small caps for nav (Futura PT, +0.2em). A centred wordmark. One project title centred over the frame (tracking 4px). Baskerville as the serif voice. | The slider arrows (carousels are banned). |
| 5 | **October Films**, London. https://octoberfilms.co.uk | `october-films.png` | Listed on SiteInspire; Web Awards UK Website of the Day (19 Apr 2026). | A **giant wordmark bleeding off the bottom edge** (we use this for the footer). A desaturated, almost monochrome hero image. Three small spaced-caps nav links top-right. | Red body text. |
| 6 | **Exo Ape**, studio. https://www.exoape.com | `exo-ape.png` | Awwwards SOTD (23 May 2022). The benchmark for scale contrast. | Display type at ~250px with negative tracking (−0.046em) next to a 20px intro paragraph. A text-only nav of four words. A "Scroll to explore" micro-label bottom-right. Lausanne-style neutral grotesk. | Page-load reveal of the giant type; WebGL. |
| 7 | **Partizan**. https://partizan.com | `partizan.png` | Awwwards SOTD (26 Jul 2026). The best "work grid" in the category. | Mixed-ratio tiles (tall 9:16 next to wide 16:9) so the grid reads like a contact sheet. Category filters as a plain text row, not pills. GT America with a Teodor serif for the "About" voice. | An autoplaying video wall (36 `<video>` elements: banned and heavy). |
| 8 | **Warm & Fuzzy**. https://www.warmnfuzzy.tv | `warm-and-fuzzy.png` | Awwwards SOTD (12 Sep 2026). | Broadcast **"lower third"** captions: title large on the left, metadata stacked small on the right. We use this for video captions. Suisse Intl. | The ticker (it's a marquee); the low-contrast play label over footage that reviewers criticised. |
| 9 | **Naked City Films**. https://www.nakedcityfilms.com | `naked-city.png` | Awwwards SOTD (23 Jan 2026), "raw energy with editorial restraint". | A single strong brand colour used as solid blocks, never as a gradient. Nav evenly distributed across the top edge. Haas Grotesk. | Electric blue; the scrolling "scroll down" strip. |
| 10 | **Ragged Edge**, London brand agency. https://raggededge.com | `ragged-edge.png` | Lovie Gold for its own site; listed on SiteInspire. | A confident serif + grotesk mix (Grit serif, ABC Diatype). Small pill nav sitting low on the screen. Hairline-light UI. | The gradient blur hero. |
| 11 | **Pentagram**. https://www.pentagram.com | `pentagram.png` | Awwwards SOTD for its 2017 build; the current site keeps the same discipline. | A serif wordmark next to a plain sans UI. A tiny, black, right-aligned nav. Strict left alignment. Captions as two lines (bold name / regular description). | The dot-pager slider. |
| 12 | **Box to Box Films**, London (Emmy-winning documentaries). https://www.boxtoboxfilms.com | `box-to-box.png` (partial: the hero is a Vimeo background, and Vimeo refused the headless browser, so the frame shows Vimeo's "couldn't verify" notice; the header, corner labels and frame chrome are accurate) | Built by KOTA (UK). | Telegraf grotesk. Viewfinder-style corner brackets around the nav buttons. A "SOUND OFF" toggle and "// RECENT PRODUCTIONS" mono-style labels in the corners. The idea of annotation-as-UI. | A Vimeo background autoplay. |

**Captured but not used** (in `design-refs/_extras/`): Crosscut Pictures (CSSDA Innovation Award; too "tech" and dark), Koto (black loader frame), Locomotive, Rogue, Somesuch, Blinkink, OH Architecture.

**What the twelve have in common, and so what we do:**
- One expressive face (usually a serif, or a very large grotesk) with a quiet neutral partner.
- A tiny nav.
- Huge scale contrast.
- Hairlines, not boxes.
- Captions under frames.
- Almost no colour: one accent, used rarely.
- Nobody uses glow, gradient buttons, drop shadows or icon grids.

---

## 3. Art direction: "The Drawing Set"

> The site should feel like a beautifully produced set of architectural drawings for a marketing system: a serif voice that sounds senior, a measured grid with hairline rules, small mono annotations like a drawing's title block, and video presented as framed plates with captions. Ink and warm paper, with teal used sparingly as the "redline".

Why this direction, for this audience:
- **Architects** spend their days in drawing sets, title blocks, sheet numbers and hairlines. That language signals "they understand how we think", which is literally the architects page's argument.
- **Contractors** respond to schedules, specifications and numbered stages. The "What you get" schedule and the numbered process speak their language.
- **It's honest.** It doesn't need stock footage or invented proof to look premium. Typography, grid and restraint carry it until real filming-day stills and cleared clips arrive.

### Principles
1. **Type does the work.** A large serif headline and plenty of air beat any decoration.
2. **Hairlines, not boxes.** Separate with 1px rules and space. No drop shadows, no glows, no gradients.
3. **Ink and paper bands.** Alternate dark Ink and light Stone sections for rhythm, as a print magazine does.
4. **Teal is the redline.** Use it for the one primary button, focus rings, the emphasised word and active states. Nothing else.
5. **Annotate.** Every section and every video gets a small mono label, like "02 — The problem" or "Attention · LinkedIn".
6. **Frame the video.** 9:16 clips are plates inside the grid, with a caption beneath them. Never full-bleed, never autoplaying.

---

## 4. Design tokens

### 4.1 Colour

| Token | Hex | Role |
|---|---|---|
| `ink` | `#0B1322` | Primary dark ground: hero, What you get, Work, the closing CTA, the footer. An evolution of the brand navy toward near-black, keeping a blue cast. |
| `ink-2` | `#121C2E` | Raised dark surface: the FAQ on dark, the mobile menu sheet, cards on Ink. |
| `ink-3` | `#1A263C` | Dark hover/selected surface. |
| `stone` | `#F3F0EA` | Primary light ground: warm "drawing paper". Problem, Process, Who it's for, the FAQ. |
| `stone-2` | `#E8E3D9` | Light raised surface: schedule rows, poster backgrounds. |
| `graphite` | `#16191F` | Body and heading text on Stone. |
| `slate` | `#585E68` | Secondary text on Stone. |
| `mist` | `#ECE9E3` | Body and heading text on Ink. |
| `fog` | `#A7ADB8` | Secondary text on Ink. |
| `teal` | `#3D9494` | **Brand teal, unchanged.** Primary button fill on Ink (label in `ink`); decorative rules and diagram strokes. |
| `teal-deep` | `#1F5C59` | Primary button fill on Stone (label in `stone`); text links and emphasis on Stone. |
| `teal-light` | `#7CC4BE` | Emphasis, links, small accent text and focus rings on Ink. |
| `rule-dark` | `rgba(236,233,227,.14)` | Hairlines on Ink (decorative only). |
| `rule-light` | `rgba(22,25,31,.14)` | Hairlines on Stone (decorative only). |
| `field-dark` | `#6B7280` | Form input borders on Ink (3.84:1). |
| `field-light` | `#7D7E80` | Form input borders on Stone (3.57:1). |
| `amber` | `#F5B942` | Placeholder boxes only (preview builds), unchanged. |

**Contrast (WCAG 2.x, computed):**

| Pair | Ratio | Allowed use |
|---|---|---|
| mist on ink | 15.33 | All text |
| mist on ink-2 / ink-3 | 14.08 / 12.50 | All text |
| fog on ink / ink-2 / ink-3 | 8.24 / 7.56 / 6.72 | Secondary text, captions |
| teal-light on ink / ink-2 | 9.29 / 8.52 | Links, emphasis, small labels |
| teal on ink | 5.19 | Large text and UI only (it passes 4.5, but keep it for strokes and fills) |
| ink label on teal button | 5.19 | Primary button on Ink |
| graphite on stone / stone-2 | 15.48 / 13.76 | All text |
| slate on stone / stone-2 | 5.74 / 5.11 | Secondary text, captions |
| teal-deep on stone / stone-2 | 6.75 / 6.01 | Links, emphasis, labels |
| stone label on teal-deep button | 6.75 | Primary button on Stone |
| teal on stone | **3.15** | **Never for text.** Decorative strokes only. |
| Hover: ink on `#4FA8A6` / stone on `#184B49` | 6.62 / 8.62 | Button hover fills |

The old `paper` (`#F2F2F2`) on old `navy` was 14.27:1. The new pairs are equal or better.

### 4.2 Typography

All three families are OFL Google fonts, self-hosted through Fontsource. Remove `@fontsource/space-grotesk` and `@fontsource/raleway`.

| Role | Family | Package | Files to load (latin only) |
|---|---|---|---|
| Display / headings / quotes | **Instrument Serif** 400 + 400 italic | `@fontsource/instrument-serif` | `instrument-serif-latin-400-normal.woff2` (21 KB, **preload**), `…-400-italic.woff2` (22 KB) |
| Body / UI / buttons | **Instrument Sans** variable (wght 400–700) | `@fontsource-variable/instrument-sans` | `instrument-sans-latin-wght-normal.woff2` (30 KB). Use the `wght` file, not the 57 KB `standard`/`wdth` one. |
| Annotations / eyebrows / captions / numbers | **Geist Mono** 500 | `@fontsource/geist-mono` | `geist-mono-latin-500-normal.woff2` (10 KB) |

- **Budget:** about 83 KB of woff2 in total, in 4 files. Add `latin-ext` only if a real name needs it.
- **Why this pairing:** Instrument Serif is a condensed, high-contrast display serif. It carries the Studio RHE / Stanton Williams / Pentagram register, and its narrow set fits long H1s like ours. Instrument Sans is from the same designer, so the proportions match, and it's neutral and very legible at 16–18px. Geist Mono gives the drawing-annotation voice, as on Pulse Films and Box to Box.
- **Fallback CLS guard:** declare metric-matched fallback faces (`size-adjust` / `ascent-override` on local Georgia and Arial; the `fontaine` Vite plugin is fine) so the swap moves layout < 0.02. Use `font-display: swap` everywhere.
- **Rules:**
  - The serif is only ever weight 400. **Never use faux bold or uppercase serif.**
  - Headings are sentence case.
  - Uppercase is used **only** in mono labels, which always get tracking +0.08em.
  - Italic serif marks the **one** emphasised phrase per heading, in the accent colour (§6, hero). Use it no more than once per screen.
  - Body measure is 60–70ch. Numerals: `font-variant-numeric: tabular-nums` in mono.

**Type scale.** Fluid, one formula per step; the ratio is about 1.2 at 375px and about 1.33 at 1440px.

| Token | Font | Size (`clamp`) | Line height | Tracking | Use |
|---|---|---|---|---|---|
| `display` | Serif 400 | `clamp(2.75rem, 1.6rem + 4.9vw, 6rem)` (44 → 96px) | 0.98 | −0.02em | H1 on home and sector heroes |
| `h1` | Serif 400 | `clamp(2.5rem, 1.7rem + 3.4vw, 4.5rem)` (40 → 72) | 1.02 | −0.015em | H1 on inner pages |
| `h2` | Serif 400 | `clamp(2rem, 1.45rem + 2.3vw, 3.5rem)` (32 → 56) | 1.05 | −0.01em | Section headings |
| `h3` | Sans 600 | `clamp(1.125rem, 1.05rem + .35vw, 1.375rem)` (18 → 22) | 1.3 | −0.005em | Card and stop titles |
| `quote` | Serif 400 italic | `clamp(1.375rem, 1.2rem + .8vw, 1.875rem)` (22 → 30) | 1.25 | 0 | Testimonials, pull lines |
| `lead` | Sans 400 | `clamp(1.125rem, 1.05rem + .4vw, 1.375rem)` (18 → 22) | 1.5 | 0 | Hero sub, page leads |
| `body` | Sans 400 | `1.0625rem` (17px) | 1.6 | 0 | Body |
| `small` | Sans 400 | `0.9375rem` (15px) | 1.5 | 0 | Microcopy, who-line, consent |
| `label` | Mono 500 | `0.75rem` (12px), uppercase | 1.4 | +0.08em | Eyebrows, section numbers, captions, chips, nav (desktop) |
| `button` | Sans 600 | `1rem` (16px), sentence case | 1 | 0 | All buttons |

### 4.3 Spacing, grid, shape

- **Spacing scale (px, 4-based):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160. Expose them as `--space-1…11`.
- **Section padding:** `padding-block: clamp(5rem, 3rem + 8vw, 10rem)` (80 → 160px). Hero top: `clamp(7rem, 5rem + 6vw, 11rem)`, to clear the header.
- **Container:** `max-width: 1320px`, with side gutters of `clamp(20px, 4vw, 56px)`.
- **Grid:** 12 columns with a 24px gap at ≥ 900px; a single column below. Text blocks span at most 7 columns, about 65ch.
- **Breakpoint: keep the single 900px breakpoint** from `AGENTS.md`. Everything else is fluid with `clamp()`.
- **Radius:** 2px on buttons, inputs and frames. Square edges are part of the drawing-set look. Pills are allowed only for the tiny fact chips (999px).
- **Borders:** 1px hairlines (`rule-*`). Dashed 1px for add-on items.
- **Shadows:** none. **Glows:** none. **Gradients:** none, except the 0→60% Ink scrim under video captions where it's needed for contrast.

### 4.4 Tailwind v4 `@theme` (replace the current block in `src/styles/global.css`)

```css
@theme {
  --color-ink: #0b1322;   --color-ink-2: #121c2e;   --color-ink-3: #1a263c;
  --color-stone: #f3f0ea; --color-stone-2: #e8e3d9;
  --color-graphite: #16191f; --color-slate: #585e68;
  --color-mist: #ece9e3;  --color-fog: #a7adb8;
  --color-teal: #3d9494;  --color-teal-deep: #1f5c59; --color-teal-light: #7cc4be;
  --color-amber: #f5b942;
  --font-serif: "Instrument Serif", "Instrument Serif Fallback", Georgia, serif;
  --font-sans: "Instrument Sans Variable", "Instrument Sans Fallback", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "Geist Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --ease-out-soft: cubic-bezier(.2,.7,.2,1);
}
```

Use **semantic surface classes** so components don't hard-code colours: `.surface-ink` and `.surface-stone`. Each sets `--bg`, `--fg`, `--fg-muted`, `--accent`, `--rule`, `--field`, `--btn-bg`, `--btn-fg` and `--btn-bg-hover`. Components read only those variables, so a component works on either band unchanged.

---

## 5. Components

### 5.1 Header (`Header.astro`)
- **Height and position:** 72px; `position: sticky; top: 0`.
- **Background:** transparent over the hero. When the page has scrolled, switch to `color-mix(in srgb, var(--color-ink) 88%, transparent)` with `backdrop-filter: blur(12px)` and a bottom `rule-dark`. Detect the scroll with a CSS scroll-driven animation (`animation-timeline: scroll()`) inside `@supports`; otherwise keep it solid Ink. **No JS.**
- **Layout:** wordmark left, nav centre-right, CTA far right.
  - **Wordmark:** "Verona Media" in Instrument Serif at 26px, mist. This is a typeset name, not a logo. The logo/favicon stays `[[PLACEHOLDER]]`.
  - **Nav links:** Instrument Sans 500 at 15px, fog → mist on hover, with an underline that draws in from the left (1px, 240ms). The current page gets `aria-current="page"` and a permanent underline.
  - **"Who it's for":** a native `<details>` dropdown listing the three sector pages on an ink-2 panel with hairline separators. It closes on outside click with ≤ 10 lines of vanilla JS (optional).
  - **CTA:** "Map my funnel for free" as an **outline button** (1px `mist` at 40%, mist label), *not* the solid teal. That keeps one primary per screen, the hero's.
- **Below 900px:** wordmark plus a "Menu" text button (mono label). This opens a full-screen ink-2 sheet built on `<details>`, with links in Instrument Serif at 36px separated by hairlines, and the outline CTA at the bottom. No JS is required. Lock body scroll with `:has(details[open])` in CSS.

### 5.2 Buttons (`Button.astro`: keep the `primary | pill | link` variants so call sites don't change)
- **primary:**
  - 52px tall, horizontal padding 28px, radius 2px, Instrument Sans 600 at 16px, sentence case.
  - A trailing `→` in its own `<span aria-hidden="true">` that moves 4px right on hover.
  - Fill `--btn-bg`: `teal` on Ink with an `ink` label; `teal-deep` on Stone with a `stone` label. Hover darkens or lightens the fill (`#4FA8A6` / `#184B49`) over 160ms.
  - No glow, no shadow, no uppercase.
- **pill** (rename it visually to "outline"; keep the prop name): same metrics, transparent background, 1px border in `--fg` at 40%, label in `--fg`. Hover: the border goes to 100% and the background to `--fg` at 6%.
- **link:** text in `--accent`, with a 1px underline at 0.2em offset that thickens to 2px on hover, plus a trailing `→`.
- **Microcopy** under a primary button: `small`, in `--fg-muted`, 12px below the button.
- **Focus (all interactive elements):** `outline: 2px solid var(--accent); outline-offset: 3px`. Never remove it.

### 5.3 Section header (new partial, or a pattern inside each section)
- **Top rule:** a hairline across the full container width.
- **Under it, one row:**
  - Left: a mono `label` with the section number and eyebrow, e.g. `02 — The problem`.
    - The number is decorative (`aria-hidden="true"`) and is **computed from visible sections**, so hiding Retainers doesn't leave a gap.
    - The eyebrow text stays exactly as it is in the content.
  - Right, on desktop only: `/ 08`-style total, mono, muted, also `aria-hidden`.
- **Then the H2:** serif, spanning at most 9 columns, with 24–32px between the label row and the H2.
- **This replaces the current teal eyebrow.**

### 5.4 Testimonials (`Testimonials.astro`)
- **Layout:** three columns on desktop, divided by **vertical hairlines**, not boxed cards; stacked with horizontal hairlines on mobile. No left teal border.
- **Each quote:**
  - The text in `quote` style (serif italic) in `--fg`.
  - A hanging opening "“" in `--accent`, added with CSS `::before` so the verbatim text inside `<blockquote data-testimonial>` is untouched.
  - The attribution in mono `label` style, muted, prefixed by an en dash.
  - Keep the markup `<figure><blockquote data-testimonial>…</blockquote><figcaption>…</figcaption></figure>`.
- **Position:** they sit in the lower part of the hero band, behind a full-width hairline (Studio RHE's intro-paragraph register).

### 5.5 Video plate (`YouTubeFacade.astro`: same API and behaviour, new skin)
- **Frame:**
  - A 9:16 (or 16:9) `--bg`-contrasting frame: 1px `--rule` border, 2px radius, and a `stone-2` / `ink-3` background behind the poster.
  - The poster uses `object-fit: cover` with explicit width and height.
- **Play control** (bottom-left, inside the frame):
  - A 48px circle (1px mist border with an ink scrim behind it) containing a solid triangle, plus the mono label "Play" beside it.
  - Hover/focus: the circle fills `teal` with an `ink` triangle (160ms), and the poster scales to 1.03 over 700ms inside an `overflow: hidden` frame.
  - The whole frame is the `<button>`, with `aria-label="Play video: {title}"` as now.
- **Caption under the frame** (the "lower third", from Warm & Fuzzy and Pentagram):
  - Line 1: the hook in Instrument Sans 500 at 17px.
  - Line 2: the job in a mono `label`, muted, e.g. `ATTENTION · LINKEDIN`.
  - **Never** overlay text on the moving picture.
- **Behaviour, unchanged:** no YouTube requests until click; youtube-nocookie; focus moves to the iframe; the no-JS link fallback; the Placeholder when there's no ID.

### 5.6 Hero "funnel drawing" plate (new: `FunnelPlate.astro`, inline SVG, no JS)
- **Where it's used:** in **production, when no cleared hero clip exists**, in place of the hero video. That's a real case today: the hero clip is a placeholder, and without this the hero's right column would be empty.
- **In preview**, the amber `Placeholder` still shows, as now.
- **Frame:** the same 9:16 frame as the video plate, on `ink-2`.
- **Drawing:** a hairline diagram in `teal` and `rule-dark`.
  - Four stacked stations joined by a vertical dimension line with arrowheads: **01 Attention**, **02 Trust**, **03 Conversion**, **→ Booked call**.
  - Each station has a mono annotation taken **only from allowed facts already in content**: "8–12 vertical, captioned clips", "One long-form anchor video", "Lead form + landing page", "In your diary".
  - A small title block in the bottom corner reads `VERONA MEDIA · VIDEO LEAD ENGINE`.
- **Text source:** pull every label from `home.md` (`processStops`) so no copy is hard-coded.
- **Accessibility:** `role="img"` with an `aria-label` summarising the four stages.
- **Where else:** reuse it as the poster-less fallback on sector heroes.

### 5.7 Process flow (`ProcessFlow.astro`)
- **Desktop:** four columns joined by a single horizontal hairline that runs through the stop numbers, with small arrowheads between them (drawing-style dimension line). The end stop "→ Booked call" sits in `teal-deep` on Stone.
- **Each stop:**
  - A mono number (`01`).
  - A label line in mono (`ATTENTION`).
  - An `h3` (e.g. "Short-form clips").
  - The body text.
  - The reveal list: mono, `·`-separated, muted.
- **Reveal behaviour:** keep it, but make it **CSS-only**.
  - It's visible by default.
  - Only at `(hover: hover) and (min-width: 900px)` does it collapse to `grid-template-rows: 0fr` and open to `1fr` on `:hover, :focus-within` (320ms).
  - The content is always in the DOM, and always open below 900px.
- **Mobile:** a vertical rule on the left with the stops hanging off it.

### 5.8 "What you get" schedule (tiles → a **specification schedule**)
- **Layout:** a two-column table-like grid on desktop and one column on mobile. Each item is a row with a hairline top border and:
  - left: the mono index (`A1`… `A6`, decorative);
  - middle: the title (`h3`) and its description (body, muted);
  - right: a status tag in mono `label` reading `INCLUDED` (in `--accent`) or `ADD-ON` (muted).
- **Add-on rows:** a **dashed** top rule and a `stone-2` background.
- **Copy:** no prices and no `£`, as now.

### 5.9 Sector index (`SectorCards.astro` → an editorial index list)
- **Rows:** three full-width rows (on whichever surface the section uses: Stone on the homepage), each with a hairline top border.
  - Left: the sector name in serif (`h2`-scale minus one step, about 40px on desktop).
  - Centre: the one-line pitch in body text, `--fg-muted`.
  - Right: a 40px arrow `→`.
- **Hover/focus:** the row background goes to `stone-2` (or `ink-3` on Ink), the top rule turns `--accent`, and the arrow moves 8px (240ms).
- **Link target:** the whole row is the link, with the sector name as its accessible name.
- **Mobile:** the name, then the pitch, then the arrow, stacked.
- **Order:** Architects, Construction, Mortgage & finance.

### 5.10 FAQ (`FAQ.astro`)
- Native `<details>`.
- Hairline rows.
- The question in serif at about 26px desktop / 21px mobile.
- A `+` icon that rotates 45° to `×` when open (CSS only).
- The answer in body text, at most 65ch, with 16px top padding.

### 5.11 CTA band (`CtaBand.astro`)
- **Surface:** Ink, full width, generous padding (about 160px desktop).
- **Contents:**
  - No new label text. If you want a mono label above the H2, it must come from an existing content field; otherwise omit it. **Don't invent copy.**
  - The H2 in `display` scale.
  - The body in `lead`.
  - The one primary button, then the microcopy.
- **Signature:** on the closing CTA only, a small mono sign-off made of facts already on the site: `KAI VERONA · NOTTINGHAM`.

### 5.12 Footer (`Footer.astro`)
- **Surface:** Ink, the same as the CTA band. Separate the two with a full-width hairline.
- **Four-column grid:**
  1. "Verona Media · Video funnels that convert."
  2. The area line.
  3. The email.
  4. Pricing · Contact · Privacy policy, plus the socials as text links (LinkedIn, Instagram, X), not icon blobs.
- **Under it:** a **giant "Verona Media" wordmark** in Instrument Serif that spans the container width (`font-size: clamp(4rem, 15vw, 14rem)`, mist at 10% opacity, `aria-hidden="true"`), cropped slightly by the bottom edge, as on October Films.
- **Last:** "© {year} Verona Media", mono label.

### 5.13 Form (`EnquiryForm.astro`)
- **Labels:** mono `label` style above each field.
- **Inputs:** 52px tall, 1px `--field` border, radius 2px, Instrument Sans at 17px, transparent background. Focus: a 2px `--accent` outline.
- **Errors:** `#F2B8B5` on Ink (10.9:1) or `#9B2C2C` on Stone (6.6:1), plus an icon-free text prefix like "Error:" for non-colour signalling. These are the only extra colours allowed.
- **The rest is unchanged:** behaviour, honeypot and copy.

### 5.14 Placeholder (`Placeholder.astro`)
- Unchanged in behaviour.
- Restyle it into the system: a dashed amber 1px frame, the mono label `PLACEHOLDER`, and the description in mono 12px.

### 5.15 Fact chips
- "1 filming day" · "4 weeks to live".
- Mono `label`, 1px `--rule` border, 999px radius, 6px × 12px padding, sitting in a row under the CTA.

---

## 6. Homepage, section by section

Surfaces: **Ink (hero) → Stone (problem) → Stone (process) → Ink (what you get) → Stone (who) → Ink (work) → [Stone (retainers, hidden in prod)] → Stone (FAQ) + Ink (CTA, footer)**. Section numbers are computed (§5.3).

1. **Hero + testimonials (Ink)**
   - **Grid:** 12 columns. The copy takes columns 1–7 and the plate takes 9–12, top-aligned with the H1. *(Hero image ref: `studio-rhe.png` for type scale; `pulse-films.png` for the inset frame.)*
   - **Order:**
     - the mono eyebrow ("Video funnels that convert.");
     - the H1 in `display`, with the phrase "Do they get enquiries?" in **serif italic, `teal-light`**. Implement this with an optional `heroEmphasis` front-matter string that the component wraps in `<em>` when it is a substring of the H1; the visible text is unchanged;
     - the `lead` sub (max 34ch);
     - the who-line, in `small` and fog;
     - the **primary button**, then the microcopy;
     - the fact chips.
   - **Right column:**
     - `YouTubeFacade` 9:16 plate with its caption when a cleared clip exists;
     - otherwise `FunnelPlate` (production) or `Placeholder` (preview).
     - Plate width about 340px at 1440.
   - **Under both columns:** a full-width hairline, then the three testimonials (§5.4), still inside the hero band.
   - **First screen at 1440×900:** the H1, sub, CTA and plate are all visible; the testimonials start just below the fold, or are visible at 1440×900 if they fit.
   - **Mobile:** eyebrow, H1 (44px), sub, who-line, CTA, microcopy, chips, then the plate (max 320px wide, centred), then the testimonials.
2. **Problem (Stone)**
   - The section header, then the H2 (max 10 columns).
   - **The two blocks:** a two-column "comparison drawing" split by a single vertical hairline.
     - The left list, "What you have", is in serif at about 32px in `slate`.
     - The right list, "What you need", is in serif at about 32px in `teal-deep`.
     - Each list item is on its own line with a hairline under it, and the mono labels "WHAT YOU HAVE" / "WHAT YOU NEED" sit above each column.
   - **Body:** columns 1–7 in `lead` size, with generous space above. *(Ref: `stanton-williams.png` for the serif-on-white register.)*
3. **Process: the Video Lead Engine (Stone, separated from Problem by a hairline only, with no colour change)**
   - The section header, the H2, the process flow (§5.7), then the text link "See the full process →". *(Ref: `box-to-box.png` and `pulse-films.png` for mono annotation.)*
4. **What you get (Ink)**
   - The section header, the H2, then the specification schedule (§5.8) adapted to Ink: rows on `ink-2`, add-on rows dashed.
5. **Who it's for (Stone)**
   - The section header, the H2, then the sector index (§5.9) on Stone: hover `stone-2`, arrow `teal-deep`. *(Ref: `partizan.png`'s text-row categories and `academy-films.png`'s tracked caps.)*
   - **Rhythm note:** no two adjacent sections share a ground except Problem → Process (a deliberate "one argument" pair) and, when Retainers goes live, Retainers → FAQ. Separate both pairs with the section-header hairline only.
6. **Work (Ink)**
   - **With cleared clips:**
     - The section header, the H2 "Clips that did a job.", then the four 9:16 plates in a 4-column row (2×2 on mobile), each with a lower-third caption.
     - Then the "How we built it" card as an editorial note: a mono label, an h3, body text, and a hairline frame on the left only.
   - **Production with no clips:**
     - The H2, then the line "Selected work is being cleared for publication." in `lead` and fog, then the text link. Nothing else: **no stock, no fake tiles, no greyed-out frames.**
     - Give this state the same generous padding so it reads as intentional, not empty. *(Ref: `partizan.png` for mixed-ratio tiles once 16:9 clips exist; `warm-and-fuzzy.png` for captions.)*
7. **Retainers (Stone)**
   - Hidden in production (`status: placeholder`).
   - When live: three columns divided by vertical hairlines (no boxes), the plan name in serif, the inclusions in body text, then the text link to `/pricing`. No prices.
8. **FAQ (Stone) + closing CTA (Ink)**
   - The FAQ uses the section header and three `<details>` rows (§5.10), at max 8 columns, left-aligned.
   - Then the CTA band (§5.11) and the footer (§5.12).

**Homepage checks:**
- 8 sections maximum (7 in production).
- Exactly one solid-teal button visible per viewport-height screen: the hero CTA and the closing CTA are far apart, and the header CTA is outline.
- No `£`.

---

## 7. Other pages (same system)

- **Inner page hero (`.page-hero`):**
  - The surface is Ink.
  - Breadcrumbs as a mono label row.
  - The H1 in `h1` scale, spanning 8 columns.
  - The lead in `lead`, then the primary CTA if the page has one.
  - A bottom hairline.
- **Sector pages (`SectorPage.astro`):**
  - The hero follows the homepage pattern, with the H1 at `display` scale and the 9:16 plate or `FunnelPlate`.
  - The £5k qualifier line ("For firms where one new instruction is worth £5k or more") sits as a mono label above the H1. It's allowed here and only here.
  - The sections follow the homepage components:
    - the problem as a serif pull paragraph (`quote` style, not italic);
    - the 3-stop flow;
    - the "Who exactly" list as a hairline index list in two columns;
    - proof as a placeholder;
    - the FAQ;
    - the CTA band.
  - On the construction page, set the **two funnels** side by side, split by a vertical hairline, each with a mono label `FUNNEL 1 · WINNING WORK` / `FUNNEL 2 · RECRUITMENT`.
  - On the mortgage page, set the compliance section as a bordered "note" block (1px rule all round, mono label `COMPLIANCE`), stating nothing beyond the existing copy.
- **`/how-it-works`:**
  - The numbered five parts become a long-form "schedule" with large mono numbers (`01`–`05`) in the left two columns and the content in columns 4–10.
  - The Step 0 list becomes a numbered serif list.
  - The timeline facts appear as chips.
- **`/about`:**
  - A two-column layout: the headshot plate (4:5, 2px radius, hairline frame; Placeholder until supplied) and the body in `lead` for the first paragraph and `body` after it.
  - The H1 "Hi, I'm Kai." in `display`.
- **`/work` and `/work/[slug]`:**
  - On `/work`: the grid of plates with lower-third captions.
  - On watch pages: the plate centred (max 420px for 9:16), the summary, then the **transcript** set as readable body text in an 8-column measure with a mono label `TRANSCRIPT`.
- **`/book`:**
  - The H1 and lead, then the fallback link (text link).
  - The Cal embed sits in a frame with a 1px hairline.
  - Pass Cal's `ui` options the brand colours if supported (`cssVarsPerTheme` with `cal-brand: #3D9494`). Note in the PR whether it worked.
- **`/contact`, `/thanks`, `/pricing`, `/roi-calculator`, `/privacy-policy`, `/404`:**
  - Use the inner hero plus the relevant components.
  - Long text (privacy) uses `.prose` with serif H2s, sans body and a 68ch measure.
- **OG image (`public/og-default.png`, 1200×630):** regenerate it in the new system: an Ink ground, "Verona Media" serif wordmark top-left, the strapline "Video funnels that convert." in serif at about 84px, and a mono `VERONAMEDIA.CO.UK` bottom-left. Text only.

---

## 8. Motion rules

**Philosophy:** motion confirms, it doesn't perform. Nothing moves unless the user scrolls, hovers, focuses or clicks.

| Token | Value |
|---|---|
| `--dur-fast` | 160ms (colour, border, button fill) |
| `--dur-ui` | 240–320ms (underline draw, arrow nudge, details/reveal, menu) |
| `--dur-slow` | 700ms (poster scale, section reveal) |
| `--ease-out-soft` | `cubic-bezier(.2,.7,.2,1)` |

**Allowed:**
1. **Section reveal:** headings and blocks fade from 0 to 1 and rise 16px. Implement it with CSS scroll-driven animations (`animation-timeline: view(); animation-range: entry 0% entry 40%`) inside `@supports (animation-timeline: view())` **and** `@media (prefers-reduced-motion: no-preference)`.
   - Content is **visible by default**; never hide it waiting for JS.
   - Stagger at most 3 children by 60ms.
   - No IntersectionObserver unless it's needed for a browser you have measured.
2. **Link underline draw**, the button arrow nudge (4px), the sector row arrow (8px), the poster scale (1.03) and the play glyph fill.
3. **FAQ `+` rotation** and the process reveal (`grid-template-rows`).
4. **Cross-document page transitions:** `@view-transition { navigation: auto; }` with a 200ms crossfade. Wordmark and header get `view-transition-name` so they stay put. Zero JS.

**Not allowed:**
- Preloaders and loading screens.
- Smooth-scroll libraries (Lenis, Locomotive Scroll).
- GSAP, WebGL, custom cursors, parallax, marquees/tickers, typing effects, counting-up numbers, scroll-jacking, horizontal scroll sections, autoplay video, background video and hover-only content.

**`prefers-reduced-motion: reduce`:**
- All transitions drop to 0.01ms, except colour changes.
- No transforms, no reveals, no view transitions (`@view-transition { navigation: none; }` inside the media query).
- The poster doesn't scale.

**JS budget for this redesign:** at most 2 KB extra in total (the optional dropdown outside-click). Everything above is CSS.

---

## 9. Imagery and video treatment

- **No stock photography, no AI-generated "client" scenes, no stock footage.** Until Kai supplies cleared clips and filming-day stills, the site is typographic, with the `FunnelPlate` drawing. Restraint looks premium; fake footage looks cheap and breaks hard rule 1.
- **Posters (Kai to supply; note in the PR):**
  - A custom 1080×1920 poster per 9:16 clip: a still from the clip, with **no text burned in** (the caption lives under the frame).
  - **Grade:** natural, slightly desaturated (about −10%), lifted shadows, warm-neutral whites. No teal-orange LUT.
  - Export AVIF/WebP through `astro:assets`, with explicit dimensions.
- **Headshot:** 4:5, natural light, neutral background, graded the same way.
- **Ratios:** 9:16 plates for shorts and 16:9 plates for anchor videos. Mixing them in one grid is welcome (Partizan), but alignment is always to the top of the row.
- **Iconography:** none, apart from the arrow `→`, `+`/`×` and the play triangle. All are drawn in 1.5px strokes or as typographic glyphs. No icon sets.
- **Optional texture:** a 2–3 KB tiling noise PNG at 3–4% opacity on Ink bands only, to stop large flat areas from banding. Drop it if LCP or CLS is affected.

---

## 10. Implementation notes (files to touch)

1. **Dependencies:**
   - Add `@fontsource/instrument-serif`, `@fontsource-variable/instrument-sans` and `@fontsource/geist-mono`.
   - Remove `@fontsource/space-grotesk` and `@fontsource/raleway`.
   - Rewrite the `@font-face` blocks at the top of `global.css` to point at the files in §4.2.
   - In `BaseLayout.astro`, swap the preload to `instrument-serif-latin-400-normal.woff2`. Use the Vite `?url` import so the hashed path is right.
2. **`src/styles/global.css`:**
   - Replace `@theme` (§4.4).
   - Add the surface classes, the type-scale utilities (`.t-display`, `.t-h1`, `.t-h2`, `.t-quote`, `.t-lead`, `.t-label`), `.rule`, the motion tokens and the reduced-motion block.
   - Restyle the existing classes (`.btn*`, `.eyebrow`, `.quotes`, `.flow/.stop`, `.tiles/.tile`, `.who-*`, `.yt-*`, `.faq*`, `.cta-band`, `.site-footer`, `.ph*`, `.page-hero`, `.form/.field`) rather than renaming them, where possible.
   - Delete the glow and uppercase rules.
3. **Components:**
   - Restyle `Header`, `Footer`, `Button`, `Testimonials`, `ProcessFlow`, `SectorCards`, `YouTubeFacade` (skin only), `FAQ`, `CtaBand`, `Placeholder`, `EnquiryForm` (skin only) and `SectorPage`.
   - Add `FunnelPlate.astro` and a `SectionHeader.astro` (or an equivalent partial).
4. **Content:**
   - Add the optional `heroEmphasis` to the `home` schema in `content.config.ts` and to `.pages.yml` (label "Hero words in italics").
   - Set it to "Do they get enquiries?".
   - **No other content edits.**
5. **`index.astro`:** apply the surface sequence (§6), the section numbering and the hero right-column logic (clip → FunnelPlate in production → Placeholder in preview).
6. **`AGENTS.md` §5:** replace it with §11 below.
7. **`og-default.png`:** regenerate it (§7).

---

## 11. Replacement text for `AGENTS.md` §5 (paste in this PR)

```md
## 5. Design tokens ("The Drawing Set", Oct 2026; full spec in DESIGN_BRIEF.md)

| Token | Hex | Use |
|---|---|---|
| `ink` | `#0B1322` | Dark ground (hero, What you get, Work, CTA, footer) |
| `ink-2` / `ink-3` | `#121C2E` / `#1A263C` | Raised / hover surfaces on dark |
| `stone` / `stone-2` | `#F3F0EA` / `#E8E3D9` | Light ground / raised light surface |
| `graphite` / `slate` | `#16191F` / `#585E68` | Text / secondary text on stone (15.5:1 / 5.7:1) |
| `mist` / `fog` | `#ECE9E3` / `#A7ADB8` | Text / secondary text on ink (15.3:1 / 8.2:1) |
| `teal` | `#3D9494` | Brand. Primary button on ink (ink label, 5.2:1); strokes. Never text on stone (3.15:1). |
| `teal-deep` | `#1F5C59` | Primary button on stone (stone label, 6.75:1); links and emphasis on stone |
| `teal-light` | `#7CC4BE` | Links, emphasis, focus rings on ink (9.3:1) |

- Fonts (self-hosted via Fontsource): Instrument Serif 400/italic for headings and quotes; Instrument Sans (variable) for body, UI and buttons; Geist Mono 500 for uppercase labels only. Preload Instrument Serif 400 latin.
- Headings are sentence case, serif, weight 400. Uppercase only in mono labels (+0.08em tracking).
- Buttons: 52px, 2px radius, sentence case, no glow. One solid teal button per screen; the header CTA is an outline button.
- Hairlines, not boxes; no shadows, glows or gradients. Container 1320px, 12-column grid, one breakpoint at 900px, fluid type with clamp().
- Motion is CSS-only and respects prefers-reduced-motion. No autoplay, carousels, marquees, parallax or preloaders.
- FAQ: native <details>/<summary>, no JavaScript.
```

---

## 12. Acceptance criteria (all must be true on the PR preview)

**Rules and content**
- [ ] `npm run check` is green: banned words, homepage `£`, placeholders, links and redirects.
- [ ] `git diff` shows **no changes to visible copy** in `src/content/**`, other than the new `heroEmphasis` field. Titles, descriptions, routes, `_redirects`, schema and `robots` are unchanged.
- [ ] `grep -ri accountan dist/` returns nothing. No new visible text, `alt` or `aria-label` contains a banned word.
- [ ] The homepage has ≤ 8 sections in the §6 order, with the testimonials inside the hero band directly under the hero content.
- [ ] Exactly one solid-teal button is visible in any 900px-tall viewport on `/` at 375, 768, 1280 and 1440 widths. The header CTA is the outline variant.
- [ ] No autoplay, no carousel/slider/marquee, no network request to YouTube before click (check DevTools at load).
- [ ] The production build with no cleared clips shows the `FunnelPlate` in the hero and the Work empty state, with no amber placeholders and no empty frames.

**Design fidelity**
- [ ] Fonts: only Instrument Serif, Instrument Sans and Geist Mono load, in ≤ 4 woff2 files totalling ≤ 100 KB. The serif 400 is preloaded. Space Grotesk and Raleway are fully removed.
- [ ] Colours: only the §4.1 tokens appear in the CSS (plus `amber` for placeholders and the form-error colours). No `box-shadow` glows, no gradients except the caption scrim, no uppercase outside `.t-label`.
- [ ] Every homepage section starts with the hairline + mono-number header (§5.3), numbered consecutively over visible sections.
- [ ] Surfaces alternate as specified in §6. The hero H1 renders at 88–96px at 1440 wide and 40–46px at 375 wide.
- [ ] The video plate, the testimonials, the process flow, the schedule, the sector index, the FAQ, the CTA band and the footer giant wordmark match §5.
- [ ] The PR includes screenshots of `/`, `/video-for-architects` and `/how-it-works` at 375px and 1440px, plus a side-by-side of the homepage hero next to `design-refs/studio-rhe.png` and `design-refs/pulse-films.png`.

**Accessibility**
- [ ] All text pairs are from the §4.1 contrast table (AA). Focus rings are visible on every interactive element on both surfaces.
- [ ] axe (Playwright + axe-core) on `/`, `/video-for-architects`, `/contact` and `/book`: zero serious or critical violations.
- [ ] Keyboard-only: the menu, the dropdown, the FAQ, the process reveals and the video plates are all operable. Process reveal text is readable with no hover.
- [ ] With `prefers-reduced-motion: reduce` emulated, there are no transforms, reveals or view transitions, and all content is visible.

**Performance (mobile Lighthouse on the preview URL)**
- [ ] Performance ≥ 95 (hard floor 90), Accessibility 100, Best Practices ≥ 95, SEO 100 on `/` and one sector page.
- [ ] LCP < 2.5s (the LCP element should be the H1 text), CLS < 0.05, INP < 200ms.
- [ ] Homepage JS < 20 KB in total, and the redesign adds ≤ 2 KB.

**PR description**
- [ ] Flags the `AGENTS.md` §5 rewrite for Kai's approval.
- [ ] Lists the asset requests for Kai: posters, headshot and logo (still placeholders).
- [ ] Records whether the Cal.com brand colour applied.

---

## 13. Out of scope
- Copy, IA, SEO, redirects, DNS, Cloudflare, Cal.com account settings, Web3Forms and the ROI-calculator project (its Barlow/#007B7A styling is a separate follow-up; list it for Kai).
- A logo. Use the typeset wordmark until Kai supplies one.
