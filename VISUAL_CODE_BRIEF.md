# VISUAL CODE BRIEF: Verona Media ("The Drawing Set", code-level techniques)

**For:** Claude, restyling the Astro 7 + Tailwind v4 site in `verona-media-site`.
**Prepared:** 29 Oct 2026, from live HTML and CSS fetched that morning from the twelve reference sites listed in `DESIGN_BRIEF.md` §2, plus the screenshots in `design-refs/`.
**Companion files:** `DESIGN_BRIEF.md` (art direction, tokens, components, acceptance criteria), `CLAUDE_PROMPT.md` (the short prompt), `design-refs/*.png` (screenshots at 1440×900).

---

## 1. How to use this file

Claude, this file sits underneath `DESIGN_BRIEF.md`: the brief says *what* each Verona Media component should look like, and this file shows *how* the reference sites build the effects we are borrowing, with measured values, then gives you original, ready-to-paste snippets that recreate each effect in our own tokens. Read §2 only when you want the evidence behind a choice; work mainly from §3, where every technique is mapped to a Verona Media page area (hero, nav, sector cards, process flow, work grid, testimonials, FAQ, footer). If anything here conflicts with `AGENTS.md` hard rules or `DESIGN_BRIEF.md`, those win. None of the reference sites' code, font files or images are reproduced here; the snippets are written from scratch, so you can use them freely. Keep all visible copy coming from `src/content/**`; any text in the snippets below is a placeholder prop, not new copy.

> **One rule clash to resolve first.** `DESIGN_BRIEF.md` §5.3 shows section labels with an em dash between the number and the eyebrow, but the site's hard rules ban em dashes. Use a middle dot instead: `02 · The problem`. Every snippet below does this.

---

## 2. Per-site findings (measured, not guessed)

**Method.** Each homepage was fetched on 29 Oct 2026 with `curl` and a desktop Chrome user agent. Every linked stylesheet and every inline `<style>` block was then downloaded and parsed for `@font-face`, `font-size`, `line-height`, `letter-spacing`, `clamp()`, colour values, transitions, easing curves, container widths, grid templates and aspect ratios. Where a site builds its type from `vw` or a scaled root, the pixel value at 1440px wide is given in brackets. "Fetched" means the values come from the live CSS. "Fallback" means the site blocked fetching and the notes come from `DESIGN_BRIEF.md` and the screenshot only.

**Summary**

| # | Site | Status | Source fetched |
|---|---|---|---|
| 1 | Studio RHE | Fetched | `https://www.studiorhe.com/` (HTML + inline Nuxt CSS) |
| 2 | Stanton Williams | Fetched (CSS only; the page is a Vue app with an empty server-rendered shell) | `https://stantonwilliams.com/en` + `/css/app.css` |
| 3 | Pulse Films | Fetched | `https://pulsefilms.com/` + `/assets/index-*.css` |
| 4 | Academy Films | Fetched | `https://www.academyfilms.com/` + Fabrik `theme.css` |
| 5 | October Films | Fetched | `https://octoberfilms.co.uk/` + `/src/css/site.css` |
| 6 | Exo Ape | Fetched | `https://www.exoape.com/` (HTML + inline Nuxt CSS) |
| 7 | Partizan | Fetched | `https://partizan.com/` + `/wp-content/themes/beaucoup/public/css/app.*.css` |
| 8 | Warm & Fuzzy | Fetched | `https://www.warmnfuzzy.tv/` + six Next.js CSS chunks |
| 9 | Naked City Films | **Fallback** (blocked) | `https://www.nakedcityfilms.com/` returned HTTP 429 with a Vercel Security Checkpoint page to curl, and HTTP 403 to WebFetch |
| 10 | Ragged Edge | Fetched | `https://raggededge.com/` + `/vite/assets/app-*.css` |
| 11 | Pentagram | Fetched | `https://www.pentagram.com/` + `/build/main/assets/index-*.css` |
| 12 | Box to Box Films | Fetched | `https://www.boxtoboxfilms.com/` + `/app/themes/box2box/dist/styles/main.css` |

Eleven fetched live, one fallback.

### 2.1 Studio RHE (architects, London). Fetched.
Source: https://www.studiorhe.com/ (Nuxt; CSS inlined in the HTML).

- **Fonts.** Self-hosted woff2 under `/_nuxt/fonts/`, aliased to generic names: `the-serif` is **Reckless Light** (300) plus Reckless Regular Italic; `the-sans` is **Suisse Intl** Regular and SemiBold. (`DESIGN_BRIEF.md` calls them "The Serif / The Sans"; those are just the alias names.) Both are paid. Free stand-ins: Instrument Serif for Reckless, Instrument Sans for Suisse.
- **Root scaling.** `html { font-size: calc(100vw / var(--size) * 10) }` with `--size: 375` on mobile and `1920` from 769px. So 1rem = 7.5px at 1440.
- **Type scale.** Hero H1 `font-size: 13vw` (187px at 1440), `line-height: 1.1`, `white-space: nowrap`, `overflow: hidden`. Serif tracking `-0.025em` everywhere (`.font-serif, .title`); `-0.04em` and `-0.02em` utilities also present. `.title` is serif 300 at 2.8rem (21px at 1440). `.title-big` is 8rem mobile, 27rem desktop. The intro paragraph beside the H1 is serif at 2.8rem (21px at 1440), width 45rem.
- **Body.** `font-size: clamp(12px, 18px, 1.4rem)` (effectively 18px).
- **Colour.** Tailwind tokens: coral `rgb(240,100,70)` and `rgb(255,127,100)`, greys `#3D4442`, `#545D5A`, `#383838`, `#262626`, white.
- **Motion.** Underline links use a 1px `border-top` pseudo-element, `transform-origin: left; transform: scaleX(0)`, `transition: transform .75s cubic-bezier(.19,1,.22,1)`. Other: `cubic-bezier(.23,1,.32,1)`, opacity `.25s ease` / `.35s ease-out`.
- **Notable pattern.** Rotated labels via `-rotate-90` / `rotate-90` utilities (the thin right-hand rail), `object-fit: cover` media fills.

### 2.2 Stanton Williams (architects, London). Fetched (CSS only).
Source: https://stantonwilliams.com/en + `/css/app.css` (410 KB, Bulma-based).

- **Fonts.** Self-hosted: **ITC Avant Garde Pro XLight** (`ITCAvantGardeProXLt.woff2`) for body, nav and UI; **Lyon Text** Regular and Italic for quotes. Both paid. Free stand-ins: Instrument Sans (at 400, not a hairline weight) and Instrument Serif or Newsreader for Lyon.
- **Quote module.** `font-family: Lyon; font-size: 27px; line-height: 33px; letter-spacing: .01em; text-indent: -.5em` on mobile, rising to `40px / 44px` on desktop. The negative `text-indent` is how the opening quote mark hangs into the margin.
- **Headings.** Standfirsts and titles at `30px / 38px`, `letter-spacing: .02em`. Most common tracking in the file: `.03em` (107 uses), then `.02em` and `.06em`. Positive tracking on a thin sans is part of the "exact" feel, but the XLight weight is too faint for AA at small sizes.
- **Colour.** `#202020` text, `#585858` and `#909090` secondary, `#E8E8E8` rules, white ground.
- **Layout.** Column gaps of 4%; content widths of 728, 976 and 1050px. Transitions are short: `opacity .3s`, `all .3s`.

### 2.3 Pulse Films (production company, London). Fetched.
Source: https://pulsefilms.com/ + `/assets/index-D_k6fPbw.css` (Tailwind v4 build).

- **Fonts.** Self-hosted, both mono: `--font-primary: "Aether AMono"` (loaded from `/fonts/AetherTRIAL-AMono.otf`, a trial file) for headings, and `--font-secondary: "GT Pressura Mono"` (ttf) for body and UI. Both paid. Free stand-in: Geist Mono for both roles.
- **Theme.** `--color-racing-green: #14241F`, `--color-oyster: #EBEADB`, `--color-midnight: #000705`. Light body is oyster ground with racing-green text; `body.theme-dark` swaps them. Rules and muted text are oyster at alpha: `#EBEADB0D` (5%), `1A` (10%), `33`, `4D` (30%), `66`, `80`, `99`, `B3`, `CC`.
- **Type.** `.text-display`: primary mono, `8rem`, `line-height: 1`, `letter-spacing: .03em`. `.text-headline`: secondary mono, uppercase, `1.5rem`, `.06em`. `.text-body`: `1rem / 1.5`, `.04em`. All headings uppercase, weight 400. Buttons uppercase, `.06em`. Tracking utilities in use: `.03, .04, .06, .07, .1, .15, .2, .25em`. Nav text uses `clamp(14px, .6vw + 1.35vh, 19px)` and nav height `clamp(30px, 4.2vh, 44px)` (viewport-height-aware sizing).
- **Layout.** `lg:grid-cols-[340px_1fr]` (a fixed 340px column beside a fluid one), `max-w-[90vw]` on the framed video, `--aspect-video: 16 / 9`.
- **Motion.** Tailwind defaults: `.15s cubic-bezier(.4,0,.2,1)`.

### 2.4 Academy Films (production company, London). Fetched.
Source: https://www.academyfilms.com/ + `blob.fabrik.io/.../academy2018/theme.css`.

- **Fonts.** Adobe Fonts (Typekit) kit: `futura-pt` for UI and labels, `baskerville-display-pt` for body (`body { font-family: baskerville-display-pt, serif }`). Both paid. Free stand-ins: Jost for Futura PT, Libre Baskerville or Instrument Serif for Baskerville.
- **Tracked caps.** `.text-title`: `.9375rem`, weight 500, `letter-spacing: 3px` (0.2em). `.text-subtitle`: `.75rem`, weight 200, `2px`. Mobile menu links `1.2rem`, `3px`. Slide title `3rem`, weight 500, `line-height: .8`, `letter-spacing: 4px`.
- **Grid.** 12 columns, `--editor-gap: 24px`, outsets 24 and 32px.
- **Colour.** `#000`, `#FFF`, `#6A6A6A` secondary.
- **Motion.** `opacity 350ms ease`, `color .3s ease .2s`. Note: `body` starts at `opacity: 0` with `transition: opacity ease .5s`, a page-load fade we must not copy (it hides content without JS).

### 2.5 October Films (documentary producers, London). Fetched.
Source: https://octoberfilms.co.uk/ + `/src/css/site.css`.

- **Fonts.** Self-hosted: a custom face named `"october"` (sans, used for nearly everything) and `"alpina"` (serif). Both proprietary. Free stand-ins: Instrument Sans and Instrument Serif.
- **Giant wordmark.** The logo is not text: it is a CSS mask. `mask-image: url(../gfx/brand/logo.svg); mask-size: contain; mask-position: center; mask-repeat: no-repeat` on an element with a background colour. One SVG can then be painted any colour by changing `background-color`.
- **Type.** Titles `clamp(28px, 5vw, 50px)`; sub-titles `clamp(24px, 3.5vw, 32px)`; menu overlay links `clamp(40px, calc(3 / 28 * 100vw), 72px)`; labels `.875rem`, uppercase, `letter-spacing: .15em`.
- **Layout.** `header, main, footer { width: calc(100% - var(--space_x) * 4); max-width: 1680px; margin: 0 auto }`. `--space_x` is 16px on desktop, interpolates to 9px between 672 and 480px wide; `--space_y` 24px → 16px. Logo width interpolated the same way (144px → 96px).
- **Colour.** Red `#EB3729` for nav and labels, `#1A1A1A` text, `#D3D2D2` rules.
- **Motion.** Everything is `200ms`, often linear, with staggered delays of 200 and 400ms. Hover rules wrapped in `@media (pointer: fine)`.

### 2.6 Exo Ape (digital studio). Fetched.
Source: https://www.exoape.com/ (Nuxt; CSS inlined).

- **Fonts.** Self-hosted **TWK Lausanne** 300, 400 and 500, each declared as its own family (`Lausanne-300` etc.). Paid. Free stand-in: Instrument Sans (or Inter Tight for a tighter grotesk).
- **Type scale (all `vw`, designed at 1440).** `--font-s-h0: 17.36vw` (250px), `line-height 15.69vw` (0.90), `letter-spacing -0.7986vw` (-0.046em). `h1 10vw` (144px), tracking `-0.0347em`. `h2 3.61vw` (52px). `h3 2.22vw` (32px). `h4 1.67vw` (24px). Body `p 1.11vw` (16px) on `1.67vw` (24px). Labels `0.97vw` (14px). Weight 300 dominates. That is a 15:1 ratio between the largest and body sizes.
- **Colour.** `#0D0E13` dark grey, `#E4E0DB` light grey, `#E0CCBB` sand, `#F8F8F8` off-white, `#070707`, plus alpha steps `.2/.4/.6/.8` of each.
- **Grid.** 12 and 10 columns, `gap: 2.22vw` (32px).
- **Motion.** Link underline: 1px `::after`, `transform: scaleX(0); transform-origin: right center; transition: transform .5s cubic-bezier(1,0,0,1)`. The curve is a hard ease-in-out, so the line snaps.
- **Do not borrow.** `vw`-only type (it ignores browser text zoom) and the WebGL/JS page reveal.

### 2.7 Partizan (production company). Fetched.
Source: https://partizan.com/ + `/wp-content/themes/beaucoup/public/css/app.a215b9.css`.

- **Fonts.** Self-hosted woff2 with `font-display: swap`: **GT America Standard** 400, 500 and 700 (plus italics), and **Teodor Thin** (100) for headings (`.font-heading`). A `GTAmericaMono` variable is also set. All paid. Free stand-ins: Instrument Sans, Geist Mono, and Instrument Serif (do not fake a thin weight).
- **Root scaling.** `html { font-size: calc((100vw / var(--size)) * 10); line-height: 1.3 }` with `--size` of 375, 768, 1024 and 1440.
- **Type.** Teodor `h2`: `2.3rem`, weight 100, `letter-spacing: -1px`, `line-height: 100%`. Panel titles `--panel-title-size: 2rem`.
- **Grid.** `grid-cols-2` on mobile, **`xl:grid-cols-16`** on desktop, `gap: var(--gap)` = `0.5rem`. Work blocks split unevenly: `xl:col-span-9` beside `xl:col-span-7`, `10` beside `6`, `8` beside `8`, each a nested `flex-col` stack. This uneven split is what makes the grid feel like a contact sheet.
- **Video.** The homepage HTML contains **36 `<video>` elements**. `.player-video { object-fit: contain }` below 1200px, `cover` above.
- **Motion.** `--ease-out: cubic-bezier(.23,1,.32,1)`, `--ease-in-out: cubic-bezier(.86,0,.07,1)`, `--ease-in: cubic-bezier(.12,0,.39,0)`. Transitions `opacity .5s var(--ease-out)`. `--panel-border: 1px solid black`.

### 2.8 Warm & Fuzzy (production company). Fetched.
Source: https://www.warmnfuzzy.tv/ + six `/_next/static/chunks/*.css` files.

- **Fonts.** **Suisse Intl** self-hosted, the woff2 preloaded in `<head>`. Paid. Free stand-in: Instrument Sans.
- **Fluid sizing formula.** Every size is `max(Npx - Npx * m + 100vw * N / W * m, Npx)` with `--scale-modifier (m): .2` and `--target-window-width (W)` of 375, 768, 1280 and 1600. In words: each value equals its design size at the target width, grows at 20% of the viewport's rate above it, and never drops below the design size. Sizes used: 12, 13, 14, 16 (body), 21, 24, 32, 46, 48, 64, 96, 132, 164 and 320px.
- **Tracking and leading.** Body and UI `letter-spacing: -.027em` (73 uses); display `-.045em`. Line heights in `em`: `1em`, `1.22em`, display `.98em`, `.91em`, `.85em`. Hero title 64px mobile, 164px tablet, 320px desktop.
- **`text-box: trim-both cap alphabetic`** on titles and card labels: trims the font's built-in space above cap height and below the baseline, so type aligns exactly to rules and frames.
- **Grid.** `--columns` 8, 16, 24; `--gutter-inner` 10px then 16px; `--gutter-outer` 16px.
- **Lower third.** Case-study cards use `grid-template-columns: 1fr min-content`: title fills the left, metadata hugs the right.
- **Rules.** `--color-border: #0000001A` on light and `#FFFFFF1A` on dark (10% alpha hairlines).
- **Motion.** `cubic-bezier(.26,1,.48,1)` at `.5s` for transforms and clip-paths (17 uses); linear `.1–.2s` for opacity. The mobile nav reveals with `clip-path: inset(0 0 100%)` and is wrapped in `@media (prefers-reduced-motion: no-preference)`.

### 2.9 Naked City Films. **Fallback** (fetch blocked).
Source attempted: https://www.nakedcityfilms.com/. curl received HTTP 429 and a "Vercel Security Checkpoint" JavaScript challenge; WebFetch received HTTP 403. No CSS could be read, so nothing below is measured.

From `DESIGN_BRIEF.md` and `design-refs/naked-city.png` only (marked fallback): Haas Grotesk type (paid; free stand-in Instrument Sans or Inter); one strong brand colour used as solid flat blocks, never as a gradient; nav links spread evenly across the top edge. Avoid: the electric blue and the scrolling "scroll down" strip.

### 2.10 Ragged Edge (brand agency, London). Fetched.
Source: https://raggededge.com/ + `/vite/assets/app-CWVMov8N.css`.

- **Fonts.** Self-hosted: **Grit** Regular (serif) is the *body* face (`body { font-family: Grit-Regular, serif }`), with **ABC Diatype** Regular and **ABC Diatype Expanded** Bold as the sans. All paid. Free stand-ins: Instrument Serif and Instrument Sans.
- **Type.** Fixed sizes 12, 16, 18, 20, 24, 26, 30, 40, 48, 54, 88px; tracking `-.01em` (14 uses). Fluid inputs and buttons: `calc(16px + 14 * ((100vw - 420px) / 860))`, i.e. 16px at 420 wide to 30px at 1280, the pre-`clamp()` way of writing a fluid size.
- **Pill nav.** `.c-nav__link`: `border-radius: 54px; padding: 24.5px 34px; background-color: rgba(220,242,235,.6); backdrop-filter: blur(40px)`; `.15s cubic-bezier(.4,0,.2,1)`. Buttons the same at `font-size: 20px; padding: 18px 24px`.
- **Colour.** Ink `#181F1F`, mint `#96EBEB`, pale mint `#EBF7F3`, `rgba(24,31,31,.4)` muted.
- **Motion.** `cubic-bezier(.4,0,.2,1)` (52 uses), `all .5s cubic-bezier(.65,.05,0,1)` for larger moves, `opacity .25s cubic-bezier(.77,0,.175,1)`.

### 2.11 Pentagram (design partnership). Fetched.
Source: https://www.pentagram.com/ + `/build/main/assets/index-Bex603M2.css`.

- **Fonts.** Self-hosted **Plain** (Optimo) Thin, Light and Regular as woff2, used for everything through `--plain: Plain, Arial, Sans-Serif`, with `font-feature-settings: "case" on` (case-sensitive punctuation). Paid. Free stand-in: Instrument Sans.
- **Type tokens** (one set of CSS variables per style, changing at breakpoints): `display-1` 58 → 73 → 92 → 131px, weight 350/375, tracking `-.02em` to `-.04em`, line height 1 to 1.1. `heading-1` 36 → 41 → 46 → 52px, `-.01` to `-.02em`, 1.05. `heading-2` 32 → 65px. `heading-3` 28 → 41px. `body-1` 16px / 1.25. `caption` 13px / 1.25.
- **Grid.** 6 columns on mobile, 12 from `sm`; `--inner-gutter` 12px then 16px at `xl`; `--outer-gutter` 12, 16, 24, then 32px; `--container-width: 1792px` at `xl`. Aspect ratios in use: `3/2`, `4/5`, `16/10`, `5/7`, `3/4`, `1/1`.
- **Colour.** `#1A1A1A` text, `#767676` secondary (exactly 4.54:1 on white, the AA floor), `#E3E4E5` rules, red `#E61428` used sparingly.
- **Motion.** House curve `cubic-bezier(.59,.01,.28,1)` (26 uses) at `.25–.4s` for opacity; `transform .3s ease` for menus.
- **Nav.** `<nav class="f-body-1">`: the nav is set at plain body size, not a special small style.

### 2.12 Box to Box Films (documentary producers, London). Fetched.
Source: https://www.boxtoboxfilms.com/ + `/app/themes/box2box/dist/styles/main.css`.

- **Fonts.** Self-hosted **Telegraf** 400 and 500 (Pangram Pangram; commercial licence). Free stand-in: Instrument Sans, or Geist for a squarer feel.
- **Root.** `html { font-size: 10px }`, so `1.8rem` = 18px. UI 16–18px, headings 50, 90 and 115px (`5rem`, `9rem`, `11.5rem`). Tracking `-.05rem`, `-.005em`, `.05rem`.
- **Corner brackets.** `.button::before` draws four L-shaped corners using eight 1px `linear-gradient` strips with `background-size: 10px 10px`, inset 5px (`left: 5px; top: 5px; width/height: calc(100% - 10px)`). On hover it grows to `inset: 0` with `transition: all .3s ease-in-out`. Buttons: uppercase, 18px, `letter-spacing: .05rem`, `padding: 1.75rem 3.8rem`.
- **Annotation UI.** The hero has a button made of an 8×8px red square SVG plus the text `// Recent Productions` (16px, uppercase, `.01rem`), and a `SOUND OFF` toggle with a line-drawn speaker icon in the corner.
- **Colour.** Red `#E6332A` (37 uses), ink `#080808`, slate `#4A5464`, white.
- **Layout.** Container `max-width: 125.4rem` (1254px) and `calc(100% - 7rem)`; four-column grids with `2.3rem` gaps. Hero background video is a Vimeo player (autoplay); we take only the chrome.

### 2.13 What the measurements say, in one table

| Measure | Range across the eleven fetched sites | What Verona Media uses (from `DESIGN_BRIEF.md`) |
|---|---|---|
| Largest display size at 1440 | 131px (Pentagram) to 250px (Exo Ape); 187px at Studio RHE | 96px H1, plus a ~200px footer wordmark |
| Display tracking | -0.02em to -0.046em | -0.02em |
| Display line height | 0.85 to 1.1 | 0.98 |
| Body size | 16 to 18px | 17px |
| Tracked caps labels | +0.06em (Pulse) to +0.2em (Academy) | +0.08em mono, 12px |
| Rules | 1px at 10% (W&F), 5 to 30% (Pulse) | 1px at 14% |
| Hover timing | 150ms (Pulse, Ragged Edge) to 750ms (Studio RHE underline) | 160ms buttons, 240ms underlines, 700ms poster zoom |
| Favourite curves | `(.19,1,.22,1)`, `(.23,1,.32,1)`, `(.26,1,.48,1)` (all strong ease-outs) | add one strong ease-out token (below) |
| Container | 1254 to 1792px max | 1320px |
| Grid | 12 (most), 16 (Partizan), 24 (W&F desktop) | 12 |

Every site with a typeface we like pays for it, and none of them loads from Google Fonts. Ten of the eleven self-host their files (Academy Films uses an Adobe Fonts kit). Fontsource gives us the same self-hosted setup with free OFL fonts.

---

## 3. Technique library (original snippets in Verona Media tokens)

Each technique lists: where we saw it (with the measured values from §2), what we change, the snippet, and where it goes. All snippets assume the `@theme` block in `DESIGN_BRIEF.md` §4.4 is in `src/styles/global.css`. Tailwind v4 exposes every `@theme` token as a CSS custom property on `:root`, so plain CSS inside Astro `<style>` blocks can read `var(--color-ink)` and friends without `@apply`.

**Map of techniques to pages**

| Page area | Techniques |
|---|---|
| Global | T1 tokens and surfaces, T2 fluid type in `rem`, T3 trimmed type, T4 motion tokens and the reduced-motion switch, T5 section header |
| Nav (`Header.astro`) | T6 draw-in underline, T7 scroll-aware header, T8 corner brackets, T9 mobile sheet |
| Hero | T10 scale contrast and the italic redline, T11 inset plate on a fixed column, T12 annotation marks |
| Sector cards (`SectorCards.astro`) | T13 editorial index rows |
| Process flow (`ProcessFlow.astro`) | T14 dimension-line flow with CSS-only reveal |
| Work grid | T15 mixed-ratio contact sheet, T16 video plate skin, T17 lower-third caption |
| Testimonials | T18 hanging quote mark and hairline columns |
| FAQ | T19 hairline `<details>` rows with a plus that turns to a cross |
| Footer | T20 cropped giant wordmark, T21 mask-painted logo (for when the logo exists) |
| Optional | T22 scroll-driven fade-up |

### Fonts: paid faces at the references, and what we use instead

| Reference face (site) | Licence | Free alternative we use | Notes |
|---|---|---|---|
| Reckless Light (Studio RHE), Lyon Text (Stanton Williams), Baskerville Display PT (Academy), Alpina (October), Teodor Thin (Partizan), Grit (Ragged Edge) | Paid | **Instrument Serif** 400 + italic | Single weight. Never fake a light or bold. If a second, bookish serif is ever needed for long quotes, Newsreader (OFL) is the closest to Lyon. |
| Suisse Intl (Studio RHE, Warm & Fuzzy), TWK Lausanne (Exo Ape), GT America (Partizan), Plain (Pentagram), Telegraf (Box to Box), ABC Diatype (Ragged Edge), Neue Haas Grotesk (Naked City, fallback), ITC Avant Garde (Stanton Williams), the custom "october" face | Paid | **Instrument Sans** (variable, 400 to 700) | For Futura PT's tracked caps (Academy), Jost is the free geometric match, but our caps are mono, so we don't need it. |
| Aether AMono, GT Pressura Mono (Pulse), GT America Mono (Partizan) | Paid | **Geist Mono** 500 | Uppercase labels only. |

Loading (in `BaseLayout.astro` front matter; the package paths below were checked against the published Fontsource packages):

```astro
---
import '@fontsource/instrument-serif/latin-400.css';
import '@fontsource/instrument-serif/latin-400-italic.css';
import '@fontsource-variable/instrument-sans/wght.css';
import '@fontsource/geist-mono/latin-500.css';
import serif400 from '@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2?url';
---
<link rel="preload" href={serif400} as="font" type="font/woff2" crossorigin />
```

---

### T1. Tokens and surface classes (global)
**Seen at:** Pulse Films (one theme switch on `body.theme-dark`, every rule and muted colour expressed as an alpha of the text colour: `#EBEADB1A`, `#EBEADB4D`); Warm & Fuzzy (`--color-border` flips between `#0000001A` and `#FFFFFF1A`).
**Ours:** components read semantic variables only, and the band sets them. Values are from `DESIGN_BRIEF.md` §4.1.

```css
/* src/styles/global.css, after @import "tailwindcss" and the @theme block */
@layer base {
  .surface-ink {
    --bg: var(--color-ink);   --raised: var(--color-ink-2); --hover: var(--color-ink-3);
    --fg: var(--color-mist);  --fg-muted: var(--color-fog);
    --accent: var(--color-teal-light);          /* 9.29:1 on ink */
    --stroke: var(--color-teal);                /* diagrams only */
    --rule: rgb(236 233 227 / .14);
    --field: #6b7280;
    --btn-bg: var(--color-teal); --btn-fg: var(--color-ink); --btn-bg-hover: #4fa8a6;
    background-color: var(--bg); color: var(--fg);
  }
  .surface-stone {
    --bg: var(--color-stone); --raised: var(--color-stone-2); --hover: var(--color-stone-2);
    --fg: var(--color-graphite); --fg-muted: var(--color-slate);
    --accent: var(--color-teal-deep);           /* 6.75:1 on stone */
    --stroke: var(--color-teal);
    --rule: rgb(22 25 31 / .14);
    --field: #7d7e80;
    --btn-bg: var(--color-teal-deep); --btn-fg: var(--color-stone); --btn-bg-hover: #184b49;
    background-color: var(--bg); color: var(--fg);
  }
}

@utility container-drawing {
  /* October Films' idea (width = 100% minus gutters, capped), in our numbers */
  width: min(100% - 2 * clamp(20px, 4vw, 56px), 1320px);
  margin-inline: auto;
}
```

### T2. Fluid type that still respects browser zoom (global)
**Seen at:** Exo Ape sets every size in `vw` (H0 `17.36vw`, 250px at 1440). Studio RHE and Partizan scale the root: `html { font-size: calc(100vw / var(--size) * 10) }`. Ragged Edge writes `calc(16px + 14 * ((100vw - 420px) / 860))`. Warm & Fuzzy uses `max(N - N*.2 + 100vw*N/W*.2, N)`.
**Ours:** the same fluid feel, but always `clamp()` with a `rem` floor and ceiling, so text zoom still works (pure `vw` type fails WCAG 1.4.4 Resize Text). To make a new step from two measured points (size A at 375px, size B at 1440px):

- slope (in `vw`) = (B − A) / (1440 − 375) × 100
- intercept (in `rem`) = (A − slope × 3.75) / 16
- result: `clamp(A/16 rem, intercept rem + slope vw, B/16 rem)`

```css
@utility t-display { font-family: var(--font-serif); font-weight: 400;
  font-size: clamp(2.75rem, 1.6rem + 4.9vw, 6rem); line-height: .98; letter-spacing: -.02em; text-wrap: balance; }
@utility t-h1 { font-family: var(--font-serif); font-weight: 400;
  font-size: clamp(2.5rem, 1.7rem + 3.4vw, 4.5rem); line-height: 1.02; letter-spacing: -.015em; text-wrap: balance; }
@utility t-h2 { font-family: var(--font-serif); font-weight: 400;
  font-size: clamp(2rem, 1.45rem + 2.3vw, 3.5rem); line-height: 1.05; letter-spacing: -.01em; text-wrap: balance; }
@utility t-quote { font-family: var(--font-serif); font-style: italic;
  font-size: clamp(1.375rem, 1.2rem + .8vw, 1.875rem); line-height: 1.25; text-wrap: pretty; }
@utility t-lead { font-size: clamp(1.125rem, 1.05rem + .4vw, 1.375rem); line-height: 1.5; text-wrap: pretty; }
@utility t-label { font-family: var(--font-mono); font-weight: 500; font-size: .75rem; line-height: 1.4;
  letter-spacing: .08em; text-transform: uppercase; font-variant-numeric: tabular-nums; }
```

### T3. Type trimmed to the cap height (global: labels, H1, footer wordmark)
**Seen at:** Warm & Fuzzy, `text-box: trim-both cap alphabetic` on titles and card labels.
**Why:** fonts carry empty space above the capitals and below the baseline. Trimming it makes a mono label sit exactly on a hairline and lets the giant wordmark touch the edge it is cropped by. Browsers without support ignore it, so it is safe progressive enhancement (Chrome 133+, Safari 18.2+).

```css
@utility trim-cap { text-box: trim-both cap alphabetic; }
/* use on: .t-label in section headers, the hero H1, the footer wordmark */
```

### T4. Motion tokens and the reduced-motion switch (global)
**Seen at:** the curves the references reach for are all strong ease-outs: Studio RHE `cubic-bezier(.19,1,.22,1)` at 750ms, Partizan `(.23,1,.32,1)` at 500ms, Warm & Fuzzy `(.26,1,.48,1)` at 500ms. Exo Ape uses a hard in-out `(1,0,0,1)` at 500ms for underlines. Pulse and Ragged Edge use Tailwind's `(.4,0,.2,1)` at 150ms for colour changes. Warm & Fuzzy wraps its menu animation in `prefers-reduced-motion: no-preference`.
**Ours:** one strong ease-out for anything that draws or moves, short linear-ish colour changes, and **all movement opted in**, never opted out.

```css
@theme {
  --ease-drawn: cubic-bezier(.16, 1, .3, 1);   /* lines, frames, arrows */
  --ease-out-soft: cubic-bezier(.2, .7, .2, 1); /* already in DESIGN_BRIEF §4.4 */
  --ease-colour: cubic-bezier(.4, 0, .2, 1);    /* fills and colours */
}
:root { --t-fast: 160ms; --t-line: 240ms; --t-frame: 320ms; --t-slow: 700ms; }

/* Pattern: write the end state plainly; add transitions and transforms only here. */
@media (prefers-reduced-motion: no-preference) {
  :root { interpolate-size: allow-keywords; }  /* lets T19 animate to height:auto */
}
/* Belt and braces for anything that slips through */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition-duration: 1ms !important; animation: none !important; }
  ::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*) { animation: none !important; }
}
```

### T5. Section header: hairline, mono number, total (every homepage section)
**Seen at:** Box to Box's `// Recent Productions` corner label (16px uppercase), Pulse's spaced mono caps (`.06em`), Academy's tracked caps (`3px` ≈ `.2em`).
**Ours:** `DESIGN_BRIEF.md` §5.3, with a middle dot instead of the em dash.

```astro
---
// src/components/SectionHeader.astro
interface Props { index: number; total: number; eyebrow: string; headingId: string }
const { index, total, eyebrow, headingId } = Astro.props;
const pad = (n: number) => String(n).padStart(2, '0');
---
<div class="section-head">
  <p class="t-label trim-cap"><span aria-hidden="true">{pad(index)} · </span>{eyebrow}</p>
  <p class="t-label trim-cap section-total" aria-hidden="true">/ {pad(total)}</p>
</div>
<h2 id={headingId} class="t-h2 section-title"><slot /></h2>

<style>
  .section-head { display: flex; justify-content: space-between; align-items: baseline;
    border-top: 1px solid var(--rule); padding-top: 16px; color: var(--fg-muted); }
  .section-head p { margin: 0; }
  .section-total { display: none; }
  @media (min-width: 900px) { .section-total { display: block; } }
  .section-title { margin-block: clamp(24px, 2vw, 32px) 0; max-width: 18ch; }
</style>
```
Compute `index` and `total` from the sections actually rendered (so a hidden Retainers section leaves no gap), and pass `eyebrow` from content.

---

### T6. Draw-in underline (nav, text links, footer links)
**Seen at:** Studio RHE (1px line, `scaleX(0)` from `transform-origin: left`, `.75s cubic-bezier(.19,1,.22,1)`); Exo Ape (1px `::after` at `bottom: -2px`, `transform-origin: right`, `.5s cubic-bezier(1,0,0,1)`).
**Ours:** enter from the left, leave to the right (both references in one), at the brief's 240ms. The current page keeps the line.

```css
.draw-line { position: relative; text-decoration: none; color: var(--fg-muted); }
.draw-line:hover, .draw-line:focus-visible, .draw-line[aria-current="page"] { color: var(--fg); }
.draw-line::after {
  content: ""; position: absolute; inset-inline: 0; bottom: -.3em; height: 1px;
  background: currentColor; transform: scaleX(0); transform-origin: right;
}
.draw-line:hover::after, .draw-line:focus-visible::after, .draw-line[aria-current="page"]::after {
  transform: scaleX(1); transform-origin: left;
}
@media (prefers-reduced-motion: no-preference) {
  .draw-line { transition: color var(--t-fast) var(--ease-colour); }
  .draw-line::after { transition: transform var(--t-line) var(--ease-drawn); }
}
```
Under reduced motion the line still appears; it just doesn't travel.

### T7. Scroll-aware sticky header, no JavaScript (nav)
**Seen at:** Ragged Edge (`backdrop-filter: blur(40px)` over a 60% tint); Pentagram (`data-behavior="stickyHeader"`, done in JS). `DESIGN_BRIEF.md` §5.1 asks for this without JS.
**Ours:** a scroll-driven animation that only runs where supported; everywhere else the header is solid ink.

```css
.site-header { position: sticky; top: 0; z-index: 50; height: 72px;
  background-color: var(--color-ink); border-bottom: 1px solid transparent; }
@supports (animation-timeline: scroll()) {
  .site-header {
    background-color: transparent;
    animation: header-settle linear both;
    animation-timeline: scroll(root block);
    animation-range: 0 96px;
  }
}
@keyframes header-settle {
  to { background-color: color-mix(in srgb, var(--color-ink) 88%, transparent);
       border-bottom-color: rgb(236 233 227 / .14);
       backdrop-filter: blur(12px); }
}
@media (prefers-reduced-motion: reduce) { .site-header { background-color: var(--color-ink); } }
```
The header sits over the Ink hero, so "transparent" still reads as ink and contrast never changes. For that to hold, either give `body` the ink background or pull the hero up under the header (`margin-top: -72px`, which the hero's top padding already allows for).

### T8. Corner brackets, the viewfinder mark (header CTA, video plates on hover and focus)
**Seen at:** Box to Box Films. Their `.button::before` paints four 10px corners with eight 1px gradient strips, inset 5px, and grows them to the full button on hover (`.3s ease-in-out`).
**Ours:** a different, shorter technique: one 1px border, masked so only the four corners show. Inset 4px at rest, 0 on hover and focus. Colour is `--accent`.

```css
.brackets { position: relative; isolation: isolate; }
.brackets::before {
  --arm: 8px;
  content: ""; position: absolute; inset: 4px; z-index: 1; pointer-events: none;
  border: 1px solid var(--accent);
  -webkit-mask: conic-gradient(at var(--arm) var(--arm), #0000 75%, #000 0)
                0 0 / calc(100% - var(--arm)) calc(100% - var(--arm));
          mask: conic-gradient(at var(--arm) var(--arm), #0000 75%, #000 0)
                0 0 / calc(100% - var(--arm)) calc(100% - var(--arm));
}
.brackets:hover::before, .brackets:focus-visible::before { inset: 0; }
@media (prefers-reduced-motion: no-preference) {
  .brackets::before { transition: inset var(--t-frame) var(--ease-drawn); }
}
```
How it works: the conic gradient is opaque only in its top-left quarter; tiling it at `100% − arm` repeats that quarter into the other three corners. Use it on the **outline** header button and on video plates, never on the solid primary button (that button stays plain, so it is always the loudest thing on screen).

The outline button it sits on (from `DESIGN_BRIEF.md` §5.2):

```css
.btn-outline { display: inline-flex; align-items: center; gap: .5em; height: 52px; padding-inline: 28px;
  border: 1px solid color-mix(in srgb, var(--fg) 40%, transparent); border-radius: 2px;
  color: var(--fg); font: 600 1rem/1 var(--font-sans); text-decoration: none; }
.btn-outline:hover { border-color: var(--fg); background: color-mix(in srgb, var(--fg) 6%, transparent); }
.btn-outline:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
@media (max-width: 899px) { .site-header .btn-outline { height: 44px; padding-inline: 16px; } }
```

### T9. Mobile menu sheet that wipes down (nav below 900px)
**Seen at:** Warm & Fuzzy: the mobile nav opens with `clip-path: inset(0 0 100%)` to `inset(0)` at `.5s cubic-bezier(.26,1,.48,1)`, only under `no-preference`. October Films sets overlay links at `clamp(40px, 3/28 × 100vw, 72px)`.
**Ours:** a native `<details>` (works with no JS), the same wipe through `@starting-style`, serif links at 36px.

```astro
<details class="menu-sheet">
  <summary class="t-label">Menu</summary>
  <nav class="sheet surface-ink" aria-label="Main">
    <ul role="list">
      {nav.map((item) => <li><a href={item.href} aria-current={current === item.href ? 'page' : undefined}>{item.label}</a></li>)}
    </ul>
    <a class="btn-outline" href={cta.href}>{cta.label}</a>
  </nav>
</details>

<style>
  .menu-sheet > summary { list-style: none; cursor: pointer; padding: 12px 0; }
  .menu-sheet > summary::-webkit-details-marker { display: none; }
  .sheet { position: fixed; inset: 72px 0 0; background: var(--color-ink-2); padding: 24px clamp(20px, 4vw, 56px); overflow-y: auto; }
  .sheet ul { margin: 0 0 32px; padding: 0; list-style: none; }
  .sheet li { border-bottom: 1px solid var(--rule); }
  .sheet li a { display: block; padding-block: 16px; font: 400 2.25rem/1.1 var(--font-serif); color: var(--fg); text-decoration: none; }
  .sheet li a[aria-current="page"] { color: var(--accent); }
  @media (prefers-reduced-motion: no-preference) {
    .menu-sheet[open] .sheet {
      clip-path: inset(0); transition: clip-path 400ms var(--ease-drawn);
      @starting-style { clip-path: inset(0 0 100%); }
    }
  }
  :global(html:has(.menu-sheet[open])) { overflow: hidden; }
  @media (min-width: 900px) { .menu-sheet { display: none; } }
</style>
```
"Menu" is the label `DESIGN_BRIEF.md` §5.1 already specifies.

---

### T10. Scale contrast and the italic redline (hero)
**Seen at:** Exo Ape (250px display next to a 16px body: about 15:1). Studio RHE (187px serif H1 at weight 300, `-0.025em`, with a 21px serif intro set to one side). Warm & Fuzzy and Pentagram track display type at `-0.02` to `-0.045em`.
**Ours:** our 96px H1 against a 12px mono label is 8:1, and the 22px lead sits between them. The one emphasised phrase is serif italic in `--accent` (teal-light on ink, 9.29:1). The text itself comes from content; this only wraps it.

```astro
---
// inside Hero.astro
interface Props { title: string; emphasis?: string }
const { title, emphasis } = Astro.props;
const at = emphasis ? title.indexOf(emphasis) : -1;
---
<h1 class="t-display trim-cap hero-title">
  {at < 0 ? title : (
    <>{title.slice(0, at)}<em>{emphasis}</em>{title.slice(at + emphasis!.length)}</>
  )}
</h1>

<style>
  .hero-title { margin: 24px 0 0; max-width: 13ch; }
  .hero-title em { font-style: italic; color: var(--accent); }
</style>
```
Keep the H1 out of any reveal animation: it should be the LCP element and paint immediately.

### T11. Inset plate on a fixed column (hero layout)
**Seen at:** Pulse Films: `lg:grid-cols-[340px_1fr]` and `max-w-[90vw]` on the framed video, which sits inside the page margin like a mounted plate instead of bleeding to the edge.
**Ours:** copy in columns 1 to 7, plate in 9 to 12 and capped at Pulse's 340px, top-aligned with the H1 (`DESIGN_BRIEF.md` §6.1).

```css
.hero { padding-block: clamp(7rem, 5rem + 6vw, 11rem) clamp(3rem, 2rem + 3vw, 5rem); }
.hero-grid { display: grid; gap: 48px; }
.hero-plate { inline-size: min(100%, 320px); margin-inline: auto; }
@media (min-width: 900px) {
  .hero-grid { grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: 24px; align-items: start; }
  .hero-copy  { grid-column: 1 / span 7; }
  .hero-plate { grid-column: 9 / -1; justify-self: end; inline-size: min(100%, 340px); margin: 0; }
}
.hero-lead { max-width: 34ch; margin-top: 24px; color: var(--fg); }
.hero-who  { font-size: .9375rem; color: var(--fg-muted); margin-top: 16px; }
```

### T12. Annotation marks (hero plate, FunnelPlate, video plates)
**Seen at:** Box to Box (an 8px solid square plus `// Recent Productions`, a `SOUND OFF` corner toggle); Studio RHE (a thin rail with labels rotated 90°).
**Ours:** small, decorative, `aria-hidden` marks that only restate facts already on the page: the aspect ratio, the plate number. A square "datum" mark uses `--stroke` (teal) and is decorative only, so the 3.15:1 teal-on-stone limit does not apply.

```astro
<div class="plate-annot" aria-hidden="true">
  <span class="datum"></span><span class="t-label">{String(n).padStart(2, '0')} · {ratioLabel}</span>
</div>

<style>
  .plate-annot { display: flex; align-items: center; gap: 8px; color: var(--fg-muted); margin-bottom: 12px; }
  .datum { inline-size: 8px; block-size: 8px; background: var(--stroke); }
  /* Studio RHE-style rail, if you want one on the hero's right edge (desktop only) */
  .rail { writing-mode: vertical-rl; rotate: 180deg; position: absolute; inset-block: 0; inset-inline-end: 0;
          display: none; color: var(--fg-muted); }
  @media (min-width: 1200px) { .rail { display: flex; justify-content: space-between; } }
</style>
```
`writing-mode: vertical-rl` keeps the label in normal layout (a `rotate(-90deg)` transform, as Studio RHE uses, leaves the box unrotated and needs manual offsets). `ratioLabel` is a prop such as `9:16`. Rail text must come from an existing content field or be numbers only; don't invent words for it.

---

### T13. Editorial index rows (sector cards on the homepage, "Who exactly" lists)
**Seen at:** Partizan's category filters as a plain text row, not pills; Academy's tracked uppercase titles (`.9375rem`, weight 500, `3px`); Pentagram's strict left alignment and two-line captions.
**Ours:** three full-width rows (`DESIGN_BRIEF.md` §5.9): number, serif name, muted pitch, arrow. The whole row is the link; its accessible name is the sector name, and the pitch is attached as a description.

```astro
---
// src/components/SectorCards.astro
interface Sector { slug: string; name: string; pitch: string; href: string }
const { sectors } = Astro.props as { sectors: Sector[] };
---
<ol class="index" role="list">
  {sectors.map((s, i) => (
    <li>
      <a class="index-row" href={s.href} aria-labelledby={`sec-${s.slug}`} aria-describedby={`sec-${s.slug}-p`}>
        <span class="t-label index-no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
        <span class="index-name" id={`sec-${s.slug}`}>{s.name}</span>
        <span class="index-pitch" id={`sec-${s.slug}-p`}>{s.pitch}</span>
        <span class="index-arrow" aria-hidden="true">→</span>
      </a>
    </li>
  ))}
</ol>

<style>
  .index { list-style: none; margin: 48px 0 0; padding: 0; border-bottom: 1px solid var(--rule); }
  .index-row { display: grid; gap: 8px 24px; position: relative; color: inherit; text-decoration: none;
    padding: clamp(24px, 3vw, 40px) clamp(0px, 1vw, 16px); border-top: 1px solid var(--rule); }
  .index-no { color: var(--fg-muted); }
  .index-name { font: 400 clamp(2rem, 1.6rem + 1.6vw, 2.5rem)/1.05 var(--font-serif); letter-spacing: -.01em; }
  .index-pitch { color: var(--fg-muted); max-width: 48ch; }
  .index-arrow { font-size: 2.5rem; line-height: 1; color: var(--accent); }
  @media (min-width: 900px) {
    .index-row { grid-template-columns: 6ch minmax(0, 5fr) minmax(0, 6fr) 48px; align-items: baseline; }
    .index-arrow { justify-self: end; }
  }
  .index-row:hover, .index-row:focus-visible { background: var(--hover); border-top-color: var(--accent); }
  .index-row:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
  @media (prefers-reduced-motion: no-preference) {
    .index-row { transition: background-color var(--t-line) var(--ease-colour), border-color var(--t-line) var(--ease-colour); }
    .index-arrow { transition: transform var(--t-line) var(--ease-drawn); }
    .index-row:hover .index-arrow, .index-row:focus-visible .index-arrow { transform: translateX(8px); }
  }
</style>
```
Order stays Architects, Construction, Mortgage & finance, as in content.

---

### T14. Dimension-line process flow with a CSS-only reveal (process section)
**Seen at:** Pulse and Box to Box's mono annotation; architectural drawings' dimension lines (the line breaks around its number). The reveal technique (`grid-template-rows: 0fr` to `1fr`) is standard CSS, not from a reference.
**Ours:** `DESIGN_BRIEF.md` §5.7. Desktop: four columns on one hairline with arrowheads. Mobile: a vertical rule with the stops hanging off it. The reveal is open by default, collapses only on hover-capable screens at 900px and up, and opens on hover or keyboard focus.

```astro
---
// src/components/ProcessFlow.astro (stops come from home.md processStops)
interface Stop { no: string; stage: string; title: string; body: string; reveal: string[] }
const { stops, end } = Astro.props as { stops: Stop[]; end: { label: string; body: string } };
---
<ol class="flow" role="list">
  {stops.map((s) => (
    <li class="stop" tabindex="0">
      <p class="t-label stop-no"><span>{s.no}</span></p>
      <p class="t-label stop-stage">{s.stage}</p>
      <h3 class="stop-title">{s.title}</h3>
      <p class="stop-body">{s.body}</p>
      <div class="stop-reveal"><ul class="t-label" role="list">{s.reveal.map((r) => <li>{r}</li>)}</ul></div>
    </li>
  ))}
  <li class="stop stop-end">
    <p class="t-label stop-no"><span>→</span></p>
    <h3 class="stop-title">{end.label}</h3>
    <p class="stop-body">{end.body}</p>
  </li>
</ol>

<style>
  .flow { list-style: none; margin: 48px 0 0; padding: 0 0 0 24px; position: relative;
    border-inline-start: 1px solid var(--rule); display: grid; gap: 40px; }
  .stop { position: relative; }
  .stop:focus-visible { outline: 2px solid var(--accent); outline-offset: 8px; }
  .stop-no { margin: 0 0 8px; color: var(--fg-muted); }
  .stop-stage { margin: 0 0 12px; color: var(--fg-muted); }
  .stop-title { font: 600 clamp(1.125rem, 1.05rem + .35vw, 1.375rem)/1.3 var(--font-sans); margin: 0 0 8px; }
  .stop-body { margin: 0; max-width: 32ch; }
  .stop-end .stop-title, .stop-end .stop-no { color: var(--accent); }
  .stop-reveal { display: grid; grid-template-rows: 1fr; }
  .stop-reveal > ul { overflow: hidden; margin: 0; padding: 12px 0 0; list-style: none; color: var(--fg-muted); }
  .stop-reveal li + li::before { content: "· "; }
  .stop-reveal li { display: inline; }

  @media (min-width: 900px) {
    .flow { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px; padding: 0; border: 0; }
    /* the dimension line, drawn once behind all the numbers */
    .flow::before { content: ""; position: absolute; inset-inline: 0; top: .55rem; height: 1px; background: var(--fg-muted); }
    .stop-no span { position: relative; background: var(--bg); padding-inline-end: 12px; }
    /* arrowhead at the end of each segment */
    .stop:not(:last-child)::after { content: ""; position: absolute; top: calc(.55rem - 3.5px); right: 12px;
      inline-size: 7px; block-size: 7px; border-top: 1px solid var(--fg-muted); border-right: 1px solid var(--fg-muted); rotate: 45deg; }
  }
  @media (hover: hover) and (min-width: 900px) {
    .stop-reveal { grid-template-rows: 0fr; }
    .stop:hover .stop-reveal, .stop:focus-within .stop-reveal, .stop:focus .stop-reveal { grid-template-rows: 1fr; }
  }
  @media (hover: hover) and (min-width: 900px) and (prefers-reduced-motion: no-preference) {
    .stop-reveal { transition: grid-template-rows 320ms var(--ease-drawn); }
  }
</style>
```
`tabindex="0"` on each stop is what lets keyboard users open the reveal; the collapsed text stays in the accessibility tree, so screen readers always get it. The flow hairline uses `--fg-muted` (5.74:1 on stone) rather than `--rule`, because it carries meaning (it shows the route).

---

### T15. Mixed-ratio contact-sheet grid (work section, `/work`)
**Seen at:** Partizan: a 16-column grid at `xl` with a `0.5rem` gap, work split unevenly as 9 + 7, 10 + 6 and 8 + 8 columns, tall and wide frames side by side. Pentagram mixes `3/2`, `4/5`, `16/10` and `5/7` frames.
**Ours:** our 12 columns with 24px gaps. A 9:16 plate spans 3 columns, a 16:9 plate spans 6; `dense` packing fills holes. Today, with only 9:16 clips, four plates sit in a row (2 × 2 on mobile); the grid is ready for 16:9 work later. No autoplay, ever: every tile is a facade (T16).

```css
.work-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 40px 16px; align-items: start; }
@media (min-width: 900px) {
  .work-grid { grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 56px 24px; grid-auto-flow: row dense; }
  .work-grid > .is-tall { grid-column: span 3; }
  .work-grid > .is-wide { grid-column: span 6; }
  /* Partizan-style unevenness: every third wide plate gives a column to its neighbour */
  .work-grid > .is-wide:nth-of-type(3n) { grid-column: span 5; }
}
@media (max-width: 899px) { .work-grid > .is-wide { grid-column: 1 / -1; } }
```
```astro
<div class="work-grid">
  {clips.map((c, i) => (
    <VideoPlate class={c.aspect === '16/9' ? 'is-wide' : 'is-tall'} n={i + 1} {...c} />
  ))}
</div>
```

### T16. Video plate skin for `YouTubeFacade.astro` (hero, work, sector pages)
**Seen at:** Pulse (video framed inside the margin); Studio RHE (`object-fit: cover` media fills); Partizan (`object-fit: contain` on small screens, `cover` above 1200px); Box to Box (corner brackets, sound toggle in the corner).
**Ours:** keep the existing facade's behaviour exactly (no YouTube request before click, youtube-nocookie, focus moves to the iframe, the no-JS link, the Placeholder when there's no ID). Swap only the markup classes and CSS. The poster zooms 3% over 700ms inside the frame; the play disc fills teal; brackets close in.

```astro
---
// skin for src/components/YouTubeFacade.astro: keep the existing <script> unchanged
interface Props { id?: string; title: string; poster: string; aspect?: '9/16' | '16/9'; hook?: string; job?: string; n?: number; class?: string }
const { id, title, poster, aspect = '9/16', hook, job, n = 1, class: cls } = Astro.props;
const [w, h] = aspect === '9/16' ? [360, 640] : [640, 360];
---
<figure class:list={['plate', cls]}>
  <div class="plate-annot" aria-hidden="true"><span class="datum"></span><span class="t-label">{String(n).padStart(2, '0')} · {aspect.replace('/', ':')}</span></div>
  <button type="button" class="plate-frame brackets" data-yt={id} aria-label={`Play video: ${title}`} style={`aspect-ratio: ${w} / ${h}`}>
    <img src={poster} alt="" width={w} height={h} loading="lazy" decoding="async" />
    <span class="plate-play" aria-hidden="true"><span class="disc"></span><span class="t-label">Play</span></span>
  </button>
  {(hook || job) && (
    <figcaption class="lower-third">
      {hook && <span class="lt-title">{hook}</span>}
      {job && <span class="lt-meta t-label">{job}</span>}
    </figcaption>
  )}
</figure>

<style>
  .plate { margin: 0; container-type: inline-size; }
  .plate-frame { display: block; position: relative; inline-size: 100%; padding: 0; overflow: hidden; cursor: pointer;
    border: 1px solid var(--rule); border-radius: 2px; background: var(--hover); color: var(--color-mist); }
  .plate-frame img { display: block; inline-size: 100%; block-size: 100%; object-fit: cover; }
  /* the one gradient the brief allows: an ink scrim behind the play control */
  .plate-frame::after { content: ""; position: absolute; inset: 0; pointer-events: none;
    background: linear-gradient(to top, rgb(11 19 34 / .6), rgb(11 19 34 / 0) 40%); }
  .plate-play { position: absolute; z-index: 2; left: 16px; bottom: 16px; display: flex; align-items: center; gap: 12px; }
  .disc { inline-size: 48px; block-size: 48px; border-radius: 50%; border: 1px solid var(--color-mist);
    background: rgb(11 19 34 / .6); display: grid; place-items: center; }
  .disc::before { content: ""; inline-size: 14px; block-size: 16px; margin-inline-start: 3px;
    background: var(--color-mist); clip-path: polygon(0 0, 100% 50%, 0 100%); }
  .plate-frame:hover .disc, .plate-frame:focus-visible .disc { background: var(--color-teal); border-color: var(--color-teal); }
  .plate-frame:hover .disc::before, .plate-frame:focus-visible .disc::before { background: var(--color-ink); }
  .plate-frame:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
  @media (prefers-reduced-motion: no-preference) {
    .plate-frame img { transition: transform var(--t-slow) var(--ease-drawn); }
    .plate-frame:hover img, .plate-frame:focus-visible img { transform: scale(1.03); }
    .disc, .disc::before { transition: background-color var(--t-fast) var(--ease-colour), border-color var(--t-fast) var(--ease-colour); }
  }
</style>
```
"Play" is the label `DESIGN_BRIEF.md` §5.5 specifies. The `--color-mist` play label sits on the 60% ink scrim, so it stays above 4.5:1 whatever the poster.

### T17. Lower-third caption under the frame (work, hero plate)
**Seen at:** Warm & Fuzzy: case-study cards use `grid-template-columns: 1fr min-content` (title fills the left, metadata hugs the right), titles trimmed with `text-box`. Pentagram: two-line captions (name, then description) at 13px / 1.25.
**Ours:** never on the picture, always under it. On narrow 9:16 plates the two lines stack (Pentagram); on wide 16:9 plates they split left and right (Warm & Fuzzy). A container query decides, so the same component works in both.

```css
.lower-third { display: grid; gap: 6px; margin-top: 16px; padding-top: 12px; border-top: 1px solid var(--rule); }
.lt-title { font: 500 1.0625rem/1.35 var(--font-sans); color: var(--fg); text-wrap: pretty; }
.lt-meta  { color: var(--fg-muted); }
@container (min-width: 480px) {
  .lower-third { grid-template-columns: 1fr max-content; align-items: baseline; column-gap: 24px; }
  .lt-meta { text-align: end; }
}
```
The hook and the job (e.g. `ATTENTION · LINKEDIN`) come from the work entry. Nothing is overlaid on moving footage.

---

### T18. Hanging quote mark and hairline columns (testimonials, in the hero band)
**Seen at:** Stanton Williams: the quote module is Lyon at `40px / 44px`, `letter-spacing: .01em`, with `text-indent: -.5em` so the opening mark hangs outside the text block and the words align with everything else.
**Ours:** Instrument Serif italic at the `quote` step. The mark is added with `::before` so the verbatim text inside `<blockquote data-testimonial>` is untouched. Three columns split by vertical hairlines on desktop; stacked with horizontal hairlines on mobile.

```astro
<div class="quotes">
  {items.map((t) => (
    <figure>
      <blockquote data-testimonial set:html={t.quoteHtml} />
      <figcaption class="t-label">{t.attribution}</figcaption>
    </figure>
  ))}
</div>

<style>
  .quotes { display: grid; margin-top: clamp(48px, 6vw, 80px); border-top: 1px solid var(--rule); }
  .quotes figure { margin: 0; padding: 32px 0 32px .6em; }
  .quotes figure + figure { border-top: 1px solid var(--rule); }
  @media (min-width: 900px) {
    .quotes { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .quotes figure { padding: 40px clamp(16px, 2vw, 32px) 8px; }
    .quotes figure + figure { border-top: 0; border-inline-start: 1px solid var(--rule); }
  }
  .quotes blockquote { margin: 0; position: relative;
    font: italic 400 clamp(1.375rem, 1.2rem + .8vw, 1.875rem)/1.25 var(--font-serif); text-wrap: pretty; }
  .quotes blockquote :global(p) { margin: 0; }
  .quotes blockquote::before { content: "\201C"; position: absolute; right: 100%; padding-right: .06em; color: var(--accent); }
  .quotes figcaption { margin-top: 20px; color: var(--fg-muted); }
  .quotes figcaption::before { content: "\2013\00a0"; }   /* en dash + no-break space */
</style>
```
Keep the existing markup contract: `<figure><blockquote data-testimonial>…</blockquote><figcaption>…</figcaption></figure>`. The prefix is an en dash, which the no-em-dash rule allows.

---

### T19. Hairline `<details>` rows, plus turning to a cross (FAQ)
**Seen at:** every reference separates with 1px rules rather than boxes (Pentagram `#E3E4E5`, Warm & Fuzzy 10% alpha, Pulse 10 to 30% alpha). The open/close motion uses new CSS (`::details-content` plus `interpolate-size`), not anything from a reference.
**Ours:** `DESIGN_BRIEF.md` §5.10. Native `<details>`, no JS. Where supported, the answer eases open; elsewhere it opens instantly.

```astro
<div class="faq">
  {items.map((f) => (
    <details class="faq-row">
      <summary><span class="faq-q">{f.question}</span><span class="faq-icon" aria-hidden="true"></span></summary>
      <div class="faq-a" set:html={f.answerHtml} />
    </details>
  ))}
</div>

<style>
  .faq { max-width: calc(8 / 12 * 100%); border-bottom: 1px solid var(--rule); margin-top: 48px; }
  @media (max-width: 899px) { .faq { max-width: none; } }
  .faq-row { border-top: 1px solid var(--rule); }
  .faq-row summary { list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 24px;
    padding-block: 24px; cursor: pointer; }
  .faq-row summary::-webkit-details-marker { display: none; }
  .faq-row summary:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
  .faq-q { font: 400 clamp(1.3125rem, 1.15rem + .7vw, 1.625rem)/1.2 var(--font-serif); }
  .faq-icon { position: relative; flex: none; inline-size: 20px; block-size: 20px; }
  .faq-icon::before, .faq-icon::after { content: ""; position: absolute; inset: 50% 0 auto; height: 1px; background: var(--accent); }
  .faq-icon::after { rotate: 90deg; }
  .faq-row[open] .faq-icon { rotate: 45deg; }
  .faq-a { max-width: 65ch; padding-bottom: 24px; color: var(--fg-muted); }
  .faq-a :global(p) { margin: 16px 0 0; }
  @media (prefers-reduced-motion: no-preference) {
    .faq-icon { transition: rotate var(--t-line) var(--ease-drawn); }
    @supports selector(::details-content) {
      .faq-row::details-content { block-size: 0; overflow: clip;
        transition: block-size 320ms var(--ease-drawn), content-visibility 320ms allow-discrete; }
      .faq-row[open]::details-content { block-size: auto; }
    }
  }
</style>
```
The answer text uses `--fg-muted` (slate on stone, 5.74:1). If the delivery-guarantee answer still contains a `[[PLACEHOLDER]]`, the placeholder component renders inside `.faq-a` as normal.

---

### T20. Cropped giant wordmark (footer)
**Seen at:** October Films: an oversized wordmark bleeding off the bottom of the page; labels at `.875rem`, `.15em`; all transitions 200ms. Warm & Fuzzy's `text-box` trim makes a crop like this exact.
**Ours:** `DESIGN_BRIEF.md` §5.12: the typeset name in Instrument Serif, mist at 10%, `aria-hidden`, cut by a hairline at the bottom of its own box, then the © line beneath.

```astro
<div class="footer-mark" aria-hidden="true"><span>Verona Media</span></div>
<p class="t-label footer-legal">© {new Date().getFullYear()} Verona Media</p>

<style>
  .footer-mark { overflow: clip; border-bottom: 1px solid var(--rule); margin-top: clamp(48px, 8vw, 128px);
    block-size: .74em; font: 400 clamp(4rem, 15vw, 14rem)/1 var(--font-serif); }
  .footer-mark span { display: block; white-space: nowrap; letter-spacing: -.03em;
    color: rgb(236 233 227 / .1); text-box: trim-start cap alphabetic; user-select: none; }
  .footer-legal { color: var(--fg-muted); padding-block: 24px; margin: 0; }
</style>
```
`block-size: .74em` on the wrapper (set in the wordmark's own font size) cuts the letters a little above the baseline, like a drawing sheet trimmed at its border. Tune between `.70em` and `.80em` after checking the real glyphs. At 15vw, "Verona Media" in Instrument Serif runs close to the container width at 1440; if it overflows at a breakpoint, lower the vw value, don't shrink the letter-spacing further.

### T21. Mask-painted logo (header and footer, once Kai supplies a logo)
**Seen at:** October Films paints its logo with `mask-image: url(logo.svg); mask-size: contain; mask-position: center; mask-repeat: no-repeat` on an element whose `background-color` sets the colour.
**Ours:** one monochrome SVG that takes `currentColor`, so it is mist on ink and graphite on stone with no second file. Until the logo exists, keep the typeset wordmark (the logo is a `[[PLACEHOLDER]]`).

```css
.logo-mark { display: block; inline-size: 9rem; aspect-ratio: 5 / 1; background-color: currentColor;
  -webkit-mask: url("/brand/logo.svg") center / contain no-repeat;
          mask: url("/brand/logo.svg") center / contain no-repeat; }
```
```astro
<a href="/" class="logo-link" aria-label="Verona Media"><span class="logo-mark" aria-hidden="true"></span></a>
```
In forced-colours mode (Windows High Contrast) masked backgrounds can vanish; add `@media (forced-colors: active) { .logo-mark { background-color: CanvasText; } }`.

---

### T22. Optional: scroll-driven fade-up (section bodies, never the hero)
**Seen at:** most references reveal on scroll with JS (Exo Ape, Warm & Fuzzy's `--reveal-delay: .2s / .4s`). We do it with CSS only, which `DESIGN_BRIEF.md` allows.

```css
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .reveal { animation: rise linear both; animation-timeline: view(); animation-range: entry 0% entry 35%; }
  }
}
@keyframes rise { from { opacity: 0; translate: 0 16px; } }
```
Content is fully visible where this is unsupported, with JS off, and under reduced motion. Don't put `.reveal` on the H1, the hero plate or anything above the fold (it would delay LCP and fail the first-screen check).

---

## 4. Do and don't

**Do**
- Self-host Instrument Serif, Instrument Sans and Geist Mono through Fontsource, and preload only the serif 400 latin file.
- Use `clamp()` with `rem` ends for every fluid size, so browser text zoom still works.
- Separate with 1px rules; let type size and white space make the hierarchy.
- Keep exactly one solid teal (or teal-deep) button per screen; brackets go on outline buttons and plates only.
- Frame every clip inside the grid with its caption underneath, and load nothing from YouTube until the click.
- Write every transition and transform inside `@media (prefers-reduced-motion: no-preference)`, with the end state already visible without it.
- Keep focus rings (`2px solid var(--accent)`, offset 3px) on everything interactive, on both surfaces.
- Check every new text pair against the contrast table in `DESIGN_BRIEF.md` §4.1. Teal is never text on stone.
- Use a middle dot (`·`) in section labels; en dashes are fine; no em dashes anywhere.

**Don't**
- Don't copy any reference's CSS, class names, font files, SVGs, images or scripts; use the snippets here.
- Don't scale the root font size with `vw` (Studio RHE, Partizan) or set type purely in `vw` (Exo Ape).
- Don't hide the page at load (Academy's `body { opacity: 0 }`), and don't add preloaders, page-load reveals of big type, WebGL, smooth-scroll libraries or parallax.
- Don't autoplay anything: no background showreels (Box to Box, Pulse), no video walls (Partizan's 36 `<video>` elements), no sound toggles.
- Don't use carousels, sliders, dot pagers, tickers or marquees (Academy, Pentagram, October, Warm & Fuzzy all have one).
- Don't use frosted pill navigation (Ragged Edge) or very light weights for small text (Stanton Williams' XLight).
- Don't use gradients except the ink scrim behind a play control, and no shadows or glows.
- Don't add new visible words in rails, annotations or `aria-label`s; reuse content fields or numbers, and run the banned-word check.
- Don't name any customer or show uncleared footage, and keep to the three sectors in content.
