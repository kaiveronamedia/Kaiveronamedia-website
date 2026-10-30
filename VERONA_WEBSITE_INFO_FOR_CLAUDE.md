# Verona Media website: everything I know, for Claude

Paste this whole file into Claude. It is the full set of facts, copy and rules for the Verona Media website (veronamedia.co.uk). Treat it as the source of truth. If something isn't here, leave a [[PLACEHOLDER: ...]] rather than inventing it.

## Quick facts

- Business: Verona Media, run by Kai Verona, based in Nottingham.
- What it is: a content conversion agency that builds video funnels (anchor video, short-form clips, lead form, route to a booked call). Framed as a video partner, never a freelance videographer.
- Strapline: Video funnels that convert.
- Supporting line: We build the system that turns your best service into booked enquiries. Not just content, a funnel that actually converts.
- Primary CTA: "Map my funnel for free", always to /book (Cal.com event kai-verona-pkvqef/video-roadmap).
- CTA microcopy: 30 minutes. No pitch. You keep the plan either way.
- Email: media@kaiverona.co.uk
- Domains: veronamedia.co.uk is the main site; kaiverona.co.uk 301-redirects to it. Both owned at Namecheap.
- Sectors, in order: architects, construction, mortgage and finance. No accountancy, legal, recruitment agencies or HR anywhere.
- Ideal customer: owner-led firms of 5 to 15 staff where one new client is worth £5k or more (that figure on sector pages only, never the homepage).
- Areas: Nottingham, Sheffield, Derby, Leeds, Mansfield (core). Manchester, Leicester, Birmingham (batched filming days). Phrase: "across the Midlands and the North".
- Allowed facts: 1 filming day, 4 weeks to live, 8 to 12 vertical captioned clips, one long-form anchor video.
- Existing ROI calculator: https://roi.kaiverona.co.uk (embed it, don't rebuild it).
- Brand colours: teal and navy (teal #3D9494, navy #0E1E4E). Current redesign direction "The Drawing Set" is in DESIGN_BRIEF.md if you have it.
- Hosting plan: Astro + Tailwind static site on Cloudflare Pages, Web3Forms for the contact form, Cal.com for booking.
- Existing build: private repo verona-media-site (Astro). Pages: /, /how-it-works, /video-for-architects, /video-for-construction, /video-for-mortgage-brokers, /work, /roi-calculator, /about, /pricing, /contact, /book, /privacy-policy, /thanks, /404.

## Hard rules

- Never name any client, and never show client footage unless Kai has cleared it.
- Never invent figures, results, testimonials, logos or prices.
- No prices on the homepage, and no £ sign in homepage copy.
- Never advertise the founding-client offer or any discount.
- Only a delivery guarantee, never a guarantee of a number of leads.
- No "going full time" content.
- UK English. No em dashes. Never use the words "quietly" or "genuinely".
- Banned words in site copy: content creator, videographer, day rate, shoot/shoots/shooting, filmmaker, cinematic, storytelling, passionate, creative journey, elevate, brands, businesses, clients. Say "filming day", "firms" or "practices".
- No carousels, sliders or autoplay video. One primary button per screen. Homepage 8 sections max.

## Still needed from Kai (leave as placeholders)

- Logo and favicon, headshot (original of KAI_HEADSHOT_TEAL_LINKEDIN.png), cleared client clips (YouTube ID, hook, job each).
- Retainer plan names, contents and the price list.
- Public wording of the delivery guarantee; approval of the architects "£2,000 planning application" line; sector FAQ answers; 2 to 3 lines of personal background for About.
- Web3Forms access key, Cloudflare Web Analytics token, review of the privacy policy.

---

# Full detail

# Brand, copy and site rules


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


# Decisions, pages and final copy

## 1. Decisions already made (don't reopen)

| Decision | Value |
|---|---|
| Brand | **Verona Media** (not "Media Verona" or "Kai Verona Media") |
| Primary domain | **https://veronamedia.co.uk** (apex). `www.veronamedia.co.uk`, `kaiverona.co.uk` and `www.kaiverona.co.uk` all 301 to it, path preserved. See §13. |
| Sectors | Architects and construction lead; mortgage & finance third. **No accountancy.** |
| Free-call CTA | **Map my funnel for free** → `/book` |
| Homepage pricing | None. `/pricing` is a placeholder page until Kai confirms a price list. |
| Client clips | Placeholders until Kai lists cleared videos |
| Hosting | Cloudflare Pages, static, deployed via Git integration. Kai already runs a Pages project, `kvm-roi-calculator`. |
| Stack | Astro (static) + Tailwind + TypeScript; Web3Forms; Cal.com; YouTube click-to-play; Cloudflare Web Analytics; Pages CMS |

---

## 6. Pages and copy

### 6.1 Sitemap (routes)

| Route | Purpose | Ships in | Notes |
|---|---|---|---|
| `/` | Homepage (§6.2) | Phase 1 | |
| `/how-it-works` | Full Video Lead Engine breakdown + full FAQ | Phase 1 | |
| `/video-for-architects` | Lead sector page | Phase 1 | |
| `/video-for-construction` | Lead sector page: winning work + recruitment | Phase 1 | |
| `/video-for-mortgage-brokers` | Sector page with a compliance-aware section | Phase 2 (build now, can ship at launch) | |
| `/work` | Grid of cleared clips | Phase 1 | Placeholder grid in preview; in production shows "Selected work coming soon" + CTA until ≥1 cleared item exists |
| `/work/[slug]` | Watch page: video, summary, transcript, VideoObject | As clips are cleared | Generated from `src/content/work` |
| `/about` | Kai, Nottingham | Phase 1 | Replaces `/new-page-2` |
| `/pricing` | Price list | Phase 1 as placeholder | Replaces `/add-ons`. **No figures until Kai confirms.** In production: "Pricing is shared on the funnel-mapping call" + CTA, `status: placeholder` block hidden |
| `/roi-calculator` | Embeds the existing calculator (§7) | Phase 1 | |
| `/book` | Cal.com embed (§5) | Phase 1 | Receives `/appointments` |
| `/contact` | Form + email (§3) | Phase 1 | Same slug as old site |
| `/thanks` | Form success | Phase 1 | `noindex`, excluded from sitemap |
| `/insights`, `/insights/[slug]` | Articles (video breakdowns written up) | Phase 2 | Index hidden from nav until ≥1 post |
| `/video-production-nottingham` | Local page | Month 3, **not now** | Only once there's genuinely local work to show |
| `/video-for-law-firms` | Niche legal | Later, **not now** | |
| `/privacy-policy` | Privacy | Phase 1 | Same slug as old site |
| `/404` | Helpful 404 | Phase 1 | Links: home, how it works, book |

**Header nav:** How it works · Who it's for (dropdown, or anchor links to the three sector pages) · Work · ROI calculator · About · [Map my funnel for free] (the one primary button).

**Footer:**
- "Verona Media · Video funnels that convert."
- "Based in Nottingham. Filming across Nottingham, Sheffield, Derby, Leeds and Mansfield."
- media@kaiverona.co.uk
- Links: Pricing · Contact · Privacy policy
- Social icons from `settings.json` (§10)
- © {year} Verona Media

### 6.2 Homepage: section order and final copy

Eight sections, in this order: Hero (testimonials inside the hero band) → Problem → Process → What you get → Who it's for → Work → Retainers → FAQ + closing CTA. Copy in quotes is final; use it verbatim.

**1. Hero** (navy band; two columns on desktop: copy left, one 9:16 clip right; stacked on mobile)
- Eyebrow: "Video funnels that convert."
- H1: **"Your videos get views. Do they get enquiries?"**
- Sub: "We build the system that turns your best service into booked enquiries. Not just content, a funnel that actually converts."
- Who-line (small, muted): "For architects, contractors and brokers across the Midlands and the North."
- Primary button: **"Map my funnel for free"** → `/book`
- Microcopy under the button: "30 minutes. No pitch. You keep the plan either way."
- Fact chips (allowed facts only): "1 filming day" · "4 weeks to live"
- Clip: `<YouTubeFacade aspect="9/16">` → `[[PLACEHOLDER: one cleared 9:16 clip, YouTube ID + poster]]`
- **Testimonials** (inside the bottom of the hero band, directly under the hero content). Three-up quote cards with a teal left border, real and verbatim from the live site:
  - "I know you care, and will work hard for my business." – Founder, Derby
  - "Kai gave us the time and ran through the whole day properly." – Business Consultant
  - "You make me feel comfortable on camera. I'd rather work with you." – Business Owner

  Mark them up as `<blockquote data-testimonial>`. They are exempt from the banned-word scan; don't edit their wording. No star ratings, logos or photos.
- **Don't** reuse the live site's stat bar ("3× ROI", "£3 back for every £1", "10+ enquiries"). Those are targets, not results.

**2. Problem** (deep band)
- Eyebrow: "The problem"
- H2: "You're posting content. So why is nothing landing in your inbox?"
- Two side-by-side blocks:
  - **What you have:** views · likes · a folder of videos
  - **What you need:** enquiries · booked calls · pipeline
- Body: "Your video got views. People watched it, some of them liked it, and then they left and you never found out who they were. That's not a content problem. It's a funnel problem, and it's what almost every firm gets wrong."

**3. Process: "The Video Lead Engine"**
- Eyebrow: "How it works"
- H2: "Three parts. One route to an enquiry."
- A horizontal flow of four stops with arrows (vertical on mobile). Each stop has a hover/tap reveal; reveals are always open below 900px.
  - **01 · Attention: Short-form clips.** "Focused clips stop the scroll with problems and ideas your buyers already care about." Reveal: "Campaign angles and hook development · 8–12 vertical, captioned clips · Platform-ready edits for LinkedIn, Instagram, YouTube Shorts and TikTok"
  - **02 · Trust: Long-form anchor video.** "Deeper content explains your offer, proves your expertise and handles objections properly." Reveal: "One authority-led anchor video · Structure, talking points and direction · Full edit with a conversion-focused CTA"
  - **03 · Conversion: Lead form.** "A focused landing page and form capture, qualify and route every enquiry." Reveal: "Conversion landing page or lead magnet · Lead form and qualification questions · Thank-you page, booking route and tracking"
  - **→ Booked call:** "In your diary."
- Text link under the flow: "See the full process →" `/how-it-works`

**4. What you get**
- Eyebrow: "What's included"
- H2: "One connected campaign, built around the service you most want to sell."
- Six tiles. Four are solid ("Included"):
  - **Short-form clips:** hook-led, for attention
  - **Long-form anchor video:** builds trust
  - **Lead form + landing page:** turns viewers into enquiries
  - **One filming day:** planned around you
- Two are dashed ("Add-on"):
  - **Lead follow-up:** an email sequence that keeps the conversation moving toward a booked call
  - **Paid ads:** puts the proven system in front of more buyers, once it converts
- No prices, and no `£` anywhere on this page.

**5. Who it's for**
- Eyebrow: "Who it's for"
- H2: "Built for firms where one client is worth thousands."
- Three cards with a teal top border, in this order, each linking to its sector page:
  - **Architects:** "One extra client pays for the whole build." → `/video-for-architects`
  - **Construction:** "Two funnels available to you: winning work, and recruitment." → `/video-for-construction`
  - **Mortgage & finance:** "Trust is the entire decision. Video does in 90 seconds what three phone calls do." → `/video-for-mortgage-brokers`

**6. Work**
- Eyebrow: "Work"
- H2: "Clips that did a job."
- Four 9:16 `YouTubeFacade` tiles. Each shows its hook line and "the job it did" (e.g. "Attention: LinkedIn"). All four are `[[PLACEHOLDER: cleared clip N: YouTube ID, hook, job]]`. They come from `src/content/work` entries flagged `featured: true`.
- One case-study card: `[[PLACEHOLDER: case study, only once a customer signs off real numbers]]`. Until then, swap in a "How we built it" card that describes the process with no numbers.
- Production behaviour when no cleared work exists: hide the clip grid and keep the H2 with the line "Selected work is being cleared for publication." plus a link to `/how-it-works`. Never show stock or uncleared footage.

**7. Retainers**
- Eyebrow: "After launch"
- H2: "Keep the funnel running."
- Three plan cards: `[[PLACEHOLDER: plan name 1–3]]` and `[[PLACEHOLDER: what's included, per plan]]`. No prices.
- Link: "See plans and prices →" `/pricing`
- This whole section is `status: placeholder`, so it is hidden in production until Kai confirms plan names and contents. The homepage then has 7 sections, which is fine.

**8. FAQ + closing CTA** (one section: FAQ on top, then a navy CTA band)
- FAQ (`<details>`):
  - **"How much of my time does it take?"** "Most of your input happens during one strategy session and one directed filming day. We handle the editing, the lead-capture build, delivery and reporting."
  - **"Do you guarantee leads?"** "No credible agency can guarantee demand without understanding your offer and sales process. We set a commercial target, track the journey and improve the campaign using real conversion data. What we do guarantee is delivery: [[PLACEHOLDER: Kai to confirm public wording of the delivery guarantee, e.g. 'if your funnel isn't live and capturing enquiries within 30 days of your filming day, the second instalment isn't due']]."
  - **"What if I hate being on camera?"** "Hooks, talking points and direction are prepared before filming. You're guided through every take so you sound like yourself rather than reading a generic script."
- CTA band:
  - H2: "Want to see what your funnel would look like?"
  - Body: "I'll map it with you in 30 minutes. We'll pick your highest-value service and map out exactly what we'd build. You keep the plan whether or not you work with us."
  - Button: **"Map my funnel for free"** → `/book`

### 6.3 `/how-it-works`

- H1: "How the Video Lead Engine works"
- Lead: "One long-form video that explains your highest-value service, cut into short-form clips, sitting on top of a lead form that captures details, with follow-up that turns interest into a booked call. Not content. A system."
- **Step 0: the free funnel map** (30 minutes):
  1. Identify your highest-margin, highest-demand service.
  2. Map how your buyers actually decide on it.
  3. Sketch the funnel live: anchor video, clips, lead magnet, follow-up.
  4. Show what the first 90 days would produce.

  Close with "You keep the one-page plan whether or not you buy."
- **The five parts** (longer descriptions):
  - **01 Long-form video:** "Educational, trust-building content that explains your core service. The anchor everything else is cut from."
  - **02 Short-form clips:** "Chopped highlights, captioned and hook-led, distributed across LinkedIn, Instagram, YouTube Shorts and TikTok."
  - **03 Lead magnet:** "A quiz or landing page that captures email addresses and qualifies prospects before they ever speak to you."
  - **04 Email nurture (add-on):** "A sequence that turns warm leads into booked calls, and wakes up the ones who went quiet."
  - **05 Ads (optional add-on):** "Paid amplification layered on top once the organic funnel is proven and converting. Never before."
- **Timeline facts (allowed):** 1 filming day · 4 weeks to live · 8–12 vertical, captioned clips · one long-form anchor video.
- **Full FAQ:** the homepage's three questions, plus:
  - **"What happens on the free call?"** "We choose the service worth promoting and outline the short-form content, long-form anchor video and lead form needed to support it. If follow-up or ads make commercial sense, we'll show where they plug in as add-ons. You keep the plan whether or not we work together."
- Breadcrumbs, CTA band.

### 6.4 Sector pages (shared template `SectorPage.astro`; content in `src/content/sectors/*.md`)

Shape, in order: Hero (H1 + sub + primary CTA + one 9:16 clip placeholder) → The problem for this sector → How the funnel works for them (3 stops) → Who exactly (sub-sectors) → Proof (placeholder) → Sector FAQ (3 questions) → CTA band. Each page:
- carries the qualifier line (allowed on sector pages only): "For firms where one new instruction is worth £5k or more";
- has its own unique title, description and H1;
- has FAQPage schema only if the FAQ is visible on the page.

**`/video-for-architects`**
- H1: "One extra project pays for the whole build."
- Sub: "Video funnels for architecture practices across the Midlands and the North. Your portfolio shows what you built. Video shows how you think, and how you think is the decision."
- Problem: "When someone is choosing an architect for a major project, how you think *is* the decision. That's a video problem, not a photography problem, and almost every practice is solving it with photographs. You already believe in showing work. You're fighting the format, not the premise."
- Who exactly: architecture practices (RIBA chartered, 5–15 staff, residential and commercial); planning consultants; structural engineers; building surveyors; commercial interior designers.
- Optional ROI line: `[[PLACEHOLDER: Kai to approve: "You earn around £2,000 for a planning application alone. One extra client pays for the build, before the project fee." It is an industry estimate from Notion's ICP, not a result. Hide unless approved.]]`
- Link to `/roi-calculator` as a text link (not a second primary button).
- FAQ:
  - "Will it work if we're mostly residential?"
  - "What do you film at a practice?"
  - "How long until it's live?" (4 weeks to live, 1 filming day)

  Answers for the first two are `[[PLACEHOLDER: Kai to write]]`; the third uses the allowed facts.

**`/video-for-construction`**
- H1: "Video funnels for contractors: win work and win people."
- Sub: "For specialist subcontractors, developers and building product suppliers across the Midlands and the North."
- Two-funnel section (the core of the page):
  - **Funnel 1, Winning work:** "Case-study films, capability videos and project walk-throughs that sit behind your tender submissions and PQQs, where a video is a genuine differentiator."
  - **Funnel 2, Recruitment:** "Day-in-the-life content, site culture, apprenticeship stories and 'why work here'. It feeds a talent pipeline instead of a recruitment agency invoice."
  - Line: "For most firms, finding trades is harder right now than finding work. That's often the faster place to start."
- Who exactly: specialist subcontractors (M&E, groundworks, fit-out, civils, specialist installers); property developers; building product suppliers and manufacturers; main contractors and commercial builders (5–25 staff).
- **Not** domestic builders. Don't mention them at all.
- FAQ answers: `[[PLACEHOLDER]]`, apart from timeline facts.

**`/video-for-mortgage-brokers`**
- H1: "Video for mortgage brokers and financial advisers: trust before the first call."
- Sub: "Right now prospects choose a broker from a Google review and a headshot. Video does in 90 seconds what three phone calls do."
- Who exactly: mortgage brokers and protection advisers; independent financial advisers and wealth planners; commercial and asset finance brokers. **No accountancy.**
- **Compliance-aware section** (H2 "Built around your compliance sign-off"): "Everything I produce goes through your compliance sign-off before anything gets scheduled. I build the approval step into the workflow rather than bolting it on afterwards."
  - Don't claim FCA expertise, regulatory status or approval.
  - Don't publish any example financial promotions, rates or product claims.
- FAQ answers: `[[PLACEHOLDER]]`.

### 6.5 `/about`

- H1: "Hi, I'm Kai."
- Body, first person:
  - "I'm based in Nottingham and I build video funnels for architects, contractors and brokers across the Midlands and the North."
  - "Most firms I speak to are already doing video. Almost none of them are getting enquiries from it. The reason is nearly always the same: there's nothing behind the content. I build the bit behind it: an anchor video, clips cut from it, a lead form and a route to a booked call."
  - "I work with a small number of firms at a time and come to you for every filming day."
  - Finish with `[[PLACEHOLDER: Kai to add 2–3 lines of personal background he wants public]]`.
- Headshot: `[[PLACEHOLDER: headshot]]`. The live site has `KAI_HEADSHOT_TEAL_LINKEDIN.png` on Squarespace; Kai to supply the original file.
- **Don't** reuse the old /appointments copy ("6 to 7 figures" etc.). It is unevidenced.
- Person schema (`name`, `jobTitle` "Founder", `worksFor` Verona Media, `sameAs` LinkedIn).

### 6.6 `/pricing`

- H1: "Plans and pricing".
- In production, the price table is a `status: placeholder` block and is hidden. Visible copy: "Every build starts with a free funnel map, and pricing is shared there once we know what you need." Then the CTA.
- Preview shows the `[[PLACEHOLDER: confirmed price list: Funnel Build + 3 retainer plans + add-ons]]` table. Do not fill it from anywhere.
- The founding-client offer never appears.

### 6.7 `/privacy-policy`

- Port the current text from https://www.kaiverona.co.uk/privacy-policy. Fetch it during the build and keep its substance.
- Update it to name the new processors:
  - Web3Forms (form delivery to email)
  - Cal.com (booking)
  - Cloudflare (hosting and cookieless Web Analytics)
  - YouTube via youtube-nocookie.com (loaded only on click)
  - the ROI calculator at roi.kaiverona.co.uk, which collects details and passes them to Brevo
- Replace "Kai Verona Media" with "Verona Media".
- Add `[[PLACEHOLDER: Kai to review the updated policy before launch]]` as a visible preview-only note.

### 6.8 `/work/[slug]` (watch page template)

- **Front matter:**
  - `title`, `slug`, `youtubeId`, `aspect`, `poster`, `sector`, `hook`, `job`, `summary`, `uploadDate`, `duration` (ISO 8601), `transcript` (Markdown body)
  - `cleared: true|false`, `featured`, `status`
- Only `cleared: true` entries are built.
- **Page layout:** H1 = title; facade video; summary; "What this clip did"; a full **transcript** as visible text below the video; CTA band.
- **Schema:** VideoObject (§10) + BreadcrumbList.

---

## 7. ROI calculator page (`/roi-calculator`)

A calculator already exists. It is **live at https://roi.kaiverona.co.uk**: a separate Cloudflare Pages project `kvm-roi-calculator` with a `_worker.js` that posts leads to Brevo. It reports its height to a parent page with `postMessage({ kvmRoiHeight })` and sends no frame-blocking headers. **Embed it; don't rebuild it in this repo.**

- H1: "See how many enquiries your video should be bringing you"
- Lead (adapted from the live site): "Tell us what a client is worth to you and how you win them today. The calculator estimates the enquiries, new work won and revenue a funnel could produce over twelve months, using your own numbers."
- `RoiEmbed.astro`:
  - `<iframe src={PUBLIC_ROI_CALCULATOR_URL} title="Content ROI calculator" loading="lazy" style="width:100%;border:0;min-height:900px">`
  - A `message` listener that accepts only `event.origin === new URL(PUBLIC_ROI_CALCULATOR_URL).origin` and sets the iframe height from `event.data.kvmRoiHeight`.
  - Fallback link: "Open the calculator in a new tab".
- Disclaimer under it (verbatim from the live site): "Estimates based on typical conversion assumptions. Real results depend on your offer, your market and how consistently the funnel runs."
- Then the CTA band.
- **List in the PR as manual follow-ups for Kai** (they belong to the other project; don't change them from here):
  1. In the calculator's `CONFIG`, change `bookingUrl` and `roadmapUrl` from `https://www.kaiverona.co.uk/#discovery-call` to `https://veronamedia.co.uk/book`, and `privacyUrl` to `https://veronamedia.co.uk/privacy-policy`.
  2. Rebrand its `<title>`/OG ("Kai Verona Media" → "Verona Media"). Its fonts (Barlow) and teal (#007B7A) differ from the site's.
  3. Remove "Accountancy" from the B2B option's subtitle.
  4. Optionally add the custom domain `roi.veronamedia.co.uk`.
  5. The `roi.kaiverona.co.uk` CNAME → `kvm-roi-calculator.pages.dev` must survive the DNS move (§13).
- A reference copy of the live calculator HTML is saved alongside this brief (`reference/roi-calculator-live.html`). Use it to read only; don't copy it into this repo.

---

## 10. SEO

**Per-page titles and descriptions:**
- Set in front matter and rendered by `SEO.astro`.
- Titles ≤ 60 characters, in the form "{Page} | Verona Media". Descriptions are 120–155 characters.
- `check-copy.mjs` warns on overlength and fails on duplicates.

| Route | Title | Meta description |
|---|---|---|
| `/` | Video Funnels for Architects & Contractors \| Verona Media | Video funnels that convert. Short-form clips, an anchor video and a lead form that turn views into booked enquiries for architects, contractors and brokers. |
| `/how-it-works` | How the Video Lead Engine Works \| Verona Media | Short-form clips for attention, a long-form anchor video for trust and a lead form for conversion: one connected route from first view to booked call. |
| `/video-for-architects` | Video Marketing for Architects \| Verona Media | Video funnels for architecture practices in the Midlands and the North. Show how you think, not just what you built, and turn it into enquiries. |
| `/video-for-construction` | Construction Video Marketing \| Verona Media | Video funnels for contractors and developers: case-study and capability films for winning work, and recruitment content that brings in trades. |
| `/video-for-mortgage-brokers` | Video for Mortgage Brokers & Advisers \| Verona Media | Video funnels for mortgage brokers and financial advisers, built around your compliance sign-off. Build trust before the first call. |
| `/work` | Work \| Verona Media | Clips built to do a job: attention, trust and enquiries for architects, contractors and brokers across the Midlands and the North. |
| `/about` | About Kai Verona \| Verona Media | I'm Kai, based in Nottingham. I build video funnels that turn content into booked enquiries for architects, contractors and brokers. |
| `/pricing` | Plans and Pricing \| Verona Media | How a Verona Media video funnel build and ongoing plans work. Pricing is confirmed on a free 30-minute funnel-mapping call. |
| `/roi-calculator` | Video ROI Calculator \| Verona Media | Estimate the enquiries, new work won and revenue a video funnel could bring your firm over twelve months, using your own numbers. |
| `/book` | Map My Funnel for Free \| Verona Media | Book a free 30-minute call. We pick your highest-value service and map exactly what the funnel would be. No pitch; you keep the plan. |
| `/contact` | Contact \| Verona Media | Get in touch with Verona Media about a video funnel for your firm. Email media@kaiverona.co.uk or send an enquiry here. |
| `/privacy-policy` | Privacy Policy \| Verona Media | How Verona Media collects, uses and protects personal data from enquiries, bookings and website analytics. |

**Head tags on every page:**
- `<link rel="canonical">`, built from `PUBLIC_SITE_URL` + path.
- `<meta name="robots">`: `noindex` on `/thanks`, `/404` and any page whose main content is a placeholder.
- Open Graph: `og:site_name` "Verona Media", `og:type`, `og:title`, `og:description`, `og:url`, `og:image` (1200×630, default `/og-default.png`), `og:locale` `en_GB`.
- `twitter:card` `summary_large_image`.
- `<html lang="en-GB">`.

**Sitemap:**
- Use `@astrojs/sitemap`, which produces `/sitemap-index.xml`.
- Exclude `/thanks`, `/404`, drafts and placeholder-only routes.
- Keep the `/sitemap.xml` → `/sitemap-index.xml` 301 from §8, because the old site's sitemap lived at `/sitemap.xml`.

**`public/robots.txt`:**
```
User-agent: *
Allow: /

Sitemap: https://veronamedia.co.uk/sitemap-index.xml
```
The old Squarespace robots.txt blocked AI crawlers (GPTBot, ClaudeBot, Google-Extended, etc.). Allowing everything helps visibility in AI search tools. This is a choice for Kai; note it in the PR. To restore the block, add `Disallow: /` groups for those user agents.

**JSON-LD:**
- `Schema.astro` renders one `<script type="application/ld+json">` with an `@graph`.
- **Sitewide:**
  - `ProfessionalService` (`@id` `{site}/#org`):
    - `name` "Verona Media"; `alternateName` ["Kai Verona Media", "Kai Verona"]; `url`; `email` "media@kaiverona.co.uk"
    - `logo` `[[PLACEHOLDER: logo URL]]` (omit the property until it exists)
    - `slogan` "Video funnels that convert."; `description` (the hero sub)
    - `founder` → Person "Kai Verona"
    - `address`: `PostalAddress` with `addressLocality` "Nottingham" and `addressCountry` "GB" only. It is a service-area business, so no street address.
    - `areaServed`: City objects for Nottingham, Sheffield, Derby, Leeds and Mansfield
    - `sameAs` from `settings.json`. Current links on the live site, which Kai should confirm:
      - https://www.linkedin.com/in/kai-verona-103141249/
      - https://www.instagram.com/kaiveronamedia/
      - https://x.com/KaiVeronaMedia
  - `WebSite` (`@id` `{site}/#website`, `publisher` → `#org`).
- **Inner pages:** `BreadcrumbList`.
- **Watch pages:** `VideoObject`:
  - `name`, `description`, `thumbnailUrl` (array), `uploadDate` (ISO with timezone), `duration`
  - `embedUrl` `https://www.youtube-nocookie.com/embed/{id}`, `contentUrl` `https://www.youtube.com/watch?v={id}`
  - `transcript` (plain text), `publisher` → `#org`
- **FAQ:** `FAQPage` only where the Q&As are visible. Google limits FAQ rich results, but the markup is harmless and helps other parsers.
- Validate all of it (Rich Results Test / schema.org validator) and list the results in the PR.

**Video SEO:**
- Every cleared clip gets its own watch page with a unique title, a visible transcript, a stable custom thumbnail and VideoObject markup.
- Note in the PR for Kai: YouTube titles should be hook-first, with chapters/timestamps, and the description should link back to the watch page.

**Images:**
- Use `astro:assets` `<Image>` (AVIF/WebP, explicit dimensions, lazy except the LCP image) and descriptive `alt`.
- Decorative images get `alt=""`.

---

## 11. Placeholder rules

- **Token:** `[[PLACEHOLDER: what's needed]]`. Use it in content or props, never as styled fake text.
- **`<Placeholder>` component:**
  - Dashed 2px amber (`#F5B942`) border, label "PLACEHOLDER", and the description.
  - Keeps the intended aspect ratio, so the layout doesn't shift when real content arrives.
- **Visibility:**
  - When `PUBLIC_SHOW_PLACEHOLDERS=true` (preview), placeholders render visibly.
  - When it is `false` (production), the section is omitted (`status: placeholder`), or the page shows the documented production fallback copy from §6.
- **CI:** `check-copy.mjs` fails the production build if the string `[[PLACEHOLDER` or the upper-case word `PLACEHOLDER` (case-sensitive, so HTML `placeholder=` attributes are fine) appears in `dist/**/*.html`.
- **Never** replace a placeholder with invented copy, numbers, names, logos, reviews, star ratings, "trusted by" bars or stock "client" footage.

**Current placeholders:**
- hero clip
- 4 work clips
- case study
- retainer plan names and inclusions
- the `/pricing` table
- delivery-guarantee wording
- architects £2,000 line (needs approval)
- sector FAQ answers
- headshot
- logo/favicon
- about-page background lines
- reply-time promise on `/thanks`
- `PUBLIC_WEB3FORMS_KEY`
- `PUBLIC_CF_BEACON_TOKEN`
- privacy-policy review

---
