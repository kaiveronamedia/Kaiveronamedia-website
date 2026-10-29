# AGENTS.md: brand, copy and site rules

> Created on 29 Oct 2026 from the "Full detail" section of `VERONA_WEBSITE_INFO_FOR_CLAUDE.md`, because the original `AGENTS.md` was not in the repo. The wording below is unchanged. `BUILD_BRIEF.md` is not in this repo either: where it is referenced, read `VERONA_WEBSITE_INFO_FOR_CLAUDE.md` ("Decisions, pages and final copy") instead.

Every coding agent working in this repo reads this file first. It holds the brand, copy and site rules. They come from Kai's Notion pages (*Brand & Copy*, *Build or update a website page* SOP, *ICP*, *Offer & Pricing*) and from Kai's decisions on 25 Oct 2026. The full build spec is `BUILD_BRIEF.md`.

When this file and any other text disagree, this file wins. When you are unsure, add a `[[PLACEHOLDER: question]]` and say so in the PR description. Never guess.

---

## 1. Identity

| Item | Value |
|---|---|
| Brand name | **Verona Media**. Kai's decision on 25 Oct 2026 overrides Notion, which says "Media Verona". Never write "Media Verona", "Kai Verona Media" or "KVM" in site copy. |
| Descriptor | A content conversion agency. Never a "video agency" or "videography company". |
| Strapline | **Video funnels that convert.** |
| Supporting line | "We build the system that turns your best service into booked enquiries. Not just content, a funnel that actually converts." |
| Founder | Kai Verona, based in Nottingham |
| Canonical site | `https://veronamedia.co.uk`. kaiverona.co.uk 301s here at the Cloudflare level. |
| Contact email | `media@kaiverona.co.uk`. This is the live Google Workspace inbox. Don't invent `@veronamedia.co.uk` addresses. |
| Primary CTA label | **Map my funnel for free**. It always goes to `/book`. |
| CTA microcopy | "30 minutes. No pitch. You keep the plan either way." |
| Core ring (full service) | Nottingham, Sheffield, Derby, Leeds, Mansfield |
| Extended (batched filming days) | Manchester, Leicester, Birmingham |
| Region phrase | "across the Midlands and the North" |

## 2. Who the site is for

- **Sectors, in this order:** architects, then construction, then mortgage & finance.
  - Nothing else gets a card, a page or a mention.
  - **Accountancy is excluded everywhere.** No pages, examples, logos, clients or form options. This includes the subtitle in the ROI calculator's sector picker.
- **Ideal customer:** owner-led firms of 5–15 staff, where one new client is worth £5k or more.
  - The £5k figure may appear on sector pages only, as a qualifier. It must never appear on the homepage.

## 3. Voice

- Speak to the visitor, not about us.
  - Any skill we mention must read as reassurance for them, never as a credential for us.
- Name who it's for within the first screen.
- Lead with the problem, then the fix. This applies to the hero subline and to the order of every page.
- **Sell enquiries, not video.** The video is the vehicle; enquiries are the product.
- Never hedge a capability. Avoid lines like "growing experience in…". List the skill, or leave it out.
- Who speaks:
  - Body copy uses **"we"**.
  - The About page, the closing CTA line and anything signed by Kai use **"I"**.
  - Buttons speak as the visitor, in the first person: "Map my funnel for free", not "Book a call".
- British English: enquiry, colour, optimise, organisation.
- Plain, short sentences. Use the en dash (–) for ranges.

### Words

**Use:** funnel, convert, enquiries, booked calls, pipeline, system, ROI, anchor video, lead magnet, nurture; architects, contractors, brokers, firms, practices.

**Banned in site copy.** The build check enforces this list (case-insensitive, whole words, plurals included):

```
content creator, videographer, day rate, shoot, shoots, shooting, filmmaker,
cinematic, storytelling, passionate, creative journey, elevate,
brands, businesses, clients
```

- Say "filming day", not "shoot".
- Say "firms" or "practices", not "businesses" or "clients".
- The singular "client" is allowed when it means one specific customer, e.g. "one new client is worth £5k".
- **Exception:** real testimonial quotes are reproduced verbatim and never edited. The checker skips `<blockquote data-testimonial>`.

## 4. Hard rules (never break)

1. **No invented facts, figures, results, testimonials, client names, logos or prices.**
   - Never publish an outcome figure that isn't evidenced (e.g. "average 4x return", "£12 cost per lead", "£3 back for every £1", "5–10x").
   - Facts we control are allowed: "1 filming day", "4 weeks to live", "8–12 vertical, captioned clips", "one long-form anchor video".
   - ROI calculator outputs are always labelled as **estimates from your own numbers**.
2. **No prices on the homepage**, and no `£` character anywhere in homepage copy. Prices live only on `/pricing`, and only once Kai confirms them.
3. **Testimonials sit directly under the hero.** Use only the three real ones listed in `BUILD_BRIEF.md` §6.2, verbatim, with their exact attributions.
4. **One primary (teal) button per screen.** Secondary actions are text links or outline pills.
5. **The homepage has 8 sections at most.**
6. **No carousels, sliders or autoplaying video.** Video plays only when clicked (`YouTubeFacade`).
7. **Never advertise the founding-client offer** or any discount publicly.
8. **Lead guarantees:** only the *delivery* guarantee may be stated, never a guarantee of a number of leads.
9. **Never name a client** or show their footage unless it is listed as cleared in `src/content/work/`.
   - Mortgage/finance pages must not make financial promotion claims.
10. **Placeholders** use the exact token `[[PLACEHOLDER: description]]`.
    - Preview builds show them as dashed amber boxes.
    - Production builds hide any section whose content has `status: placeholder`.
    - CI fails if the token appears in production HTML.
    - Never "fill in" a placeholder with plausible-sounding copy.

## 5. Design tokens

| Token | Hex | Use |
|---|---|---|
| `navy` | `#0E1E4E` | Page background (dark theme by default) |
| `deep` | `#0A1638` | Alternating section bands, footer |
| `teal` | `#3D9494` | Primary buttons, accents, left borders. **Not** for small text on navy (4.46:1). |
| `teal-light` | `#4FB3B2` | Highlighted words, numbers, links and small accent text on navy (6.41:1) |
| `paper` | `#F2F2F2` | Body text (14.27:1 on navy) |
| `line` | `rgba(242,242,242,.13)` | Decorative dividers and card borders only. Not form inputs (1.44:1). |
| `muted` | `rgba(242,242,242,.66)` | Secondary text (6.88:1 on navy) |

- **Primary button:** teal background with **deep navy `#0A1638` label text** (4.95:1).
  - Paper text on teal is only 3.2:1, so it is allowed only at ≥ 19px bold.
  - Labels are uppercase Space Grotesk 700, with a soft teal glow that lifts on hover.
- **Headings, buttons, numbers and eyebrows:** Space Grotesk 700 (500 allowed for eyebrows).
- **Body:** Raleway 400–600.
- Self-host both fonts with `@fontsource` (no Google Fonts `<link>`). Preload the Space Grotesk 700 woff2 file.
- **Eyebrow:** small uppercase teal-light label above an H2.
- **Layout:**
  - Content width 1080px.
  - One responsive breakpoint at 900px. Below it, everything collapses to one column and horizontal flows become vertical.
  - Hover reveals are always visible on touch and narrow screens.
- **FAQ:** native `<details>/<summary>`, no JavaScript.

## 6. Engineering rules

- Use Astro static output, Tailwind and TypeScript, with no client-side framework.
  - Islands are vanilla `<script>` blocks, used only where needed: the form, the video facade and the Cal embed.
- No third-party script runs before user interaction, with two exceptions:
  - the Cloudflare Web Analytics beacon;
  - the Cal.com embed, which loads only on `/book`.
- Every page sets `title`, `description`, `ogImage` (optional) and `breadcrumbs` through the shared `BaseLayout`. One `<h1>` per page.
- Copy lives in `src/content/**` (Markdown/YAML/JSON) so Pages CMS can edit it. Don't hard-code marketing copy inside components.
- Secrets never go in the repo.
  - The Web3Forms access key is public by design but still comes from `PUBLIC_WEB3FORMS_KEY`.
- Before opening a PR, `npm run check` must pass. It runs:
  - `astro check`
  - the build
  - the banned-word scan
  - the homepage `£` scan
  - the placeholder scan
  - the link check
  - the redirect test

## 7. Scope

- Don't edit DNS, Cloudflare dashboard settings, Namecheap, Squarespace, Cal.com, Web3Forms or the separate ROI-calculator project (`kvm-roi-calculator`) from this repo.
  - Write any change needed there as a checklist item in the PR description, for Kai.
- Don't send email, post anywhere, or submit real enquiries to Kai's inbox.
  - Test form submissions only with a test key or in preview, and say in the PR that you did.

