I'm Kai, founder of Verona Media. I want you to finish my agency website, veronamedia.co.uk, and give it a proper visual redesign so it's ready to launch. We'll do it in two passes, each with its own PR.

## The files

These are all in the zip I've given you (`verona-website-pack.zip`). First, clone or open the `verona-media-site` repo, then copy everything from the zip into the repo root and commit it on your first branch so future sessions have it:

- `VERONA_WEBSITE_INFO_FOR_CLAUDE.md`: every fact, all the final copy, page specs and hard rules. The source of truth for **what** the site says.
- `DESIGN_BRIEF.md`: "The Drawing Set" art direction, tokens, components and acceptance criteria. The source of truth for **how** the site looks.
- `VISUAL_CODE_BRIEF.md`: how to build each effect, with ready-to-use snippets. It sits under `DESIGN_BRIEF.md`.
- `CLAUDE_PROMPT.md`: the short version of the design pass.
- `design-refs/`: reference screenshots. Ignore `box-to-box.png`, which captured a security error page rather than the site; use the notes on Box to Box in `VISUAL_CODE_BRIEF.md` §2.12 instead.

Read all of them before you start.

### Which file wins

1. The hard rules (in the repo's `AGENTS.md` and my info file) win over everything, apart from design tokens.
2. On design tokens, fonts, colours and components, `DESIGN_BRIEF.md` replaces §5 of my info file and §5 of `AGENTS.md`. Ignore the old navy/Space Grotesk/Raleway spec.
3. Section labels use a middle dot, not an em dash: `02 · The problem`. Em dashes are banned.
4. If something isn't covered anywhere, add a `[[PLACEHOLDER: question]]` and tell me. Never invent copy, figures, testimonials, client names, logos or prices.

Make sure a `CLAUDE.md` exists in the repo root that tells future sessions to read `AGENTS.md` first, then the briefs.

---

## Pass 1: Content and structure (branch `content/launch`)

### Step 1: Audit first

The repo is `verona-media-site` (Astro 7 + Tailwind v4). Before changing anything:

1. Go through every route in the sitemap (info file §6.1) and compare what's built against the spec. For each page, mark it done, partly done or missing, and list what's wrong.
2. Check the setup: static output, content in `src/content/**`, `BaseLayout`, `Placeholder`, `YouTubeFacade`, `RoiEmbed`, and whether `npm run check` exists and passes.
3. Write the findings to `AUDIT.md` and show me a short summary.

Then carry on without waiting, unless you'd need to delete or rewrite a lot of existing work. In that case, stop and ask me first.

### Step 2: Build to the spec

Fix and finish everything the audit found, in this order:

1. Homepage (§6.2), copy verbatim, 8 sections max
2. `/how-it-works`, `/book`, `/contact`, `/thanks`, `/404`
3. The three sector pages (§6.4)
4. `/roi-calculator` as an embed of the existing calculator (§7). Don't rebuild it
5. `/about`, `/work`, `/pricing`, `/privacy-policy`
6. SEO (§10)

Calls to action: "Map my funnel for free" to `/book` is the one primary button on every screen. The ROI calculator is the lead magnet, so it goes in the header nav, and the closing CTA band on every page gets a text link to it (for example "Not ready to talk? See what your funnel could bring in →"). Keep it a text link, never a second button. Put that line in content, not in the component.

### Step 3: The blog, built but in the background

Build `/insights` and `/insights/[slug]` as a content collection (`src/content/insights/`) so I can start publishing.

- Fields: title, slug, description, publish date, sector (optional), hero image (optional), draft flag, Markdown body
- `BaseLayout`, Article schema, breadcrumbs, standard CTA band
- Not in the header nav. Footer link only, and only once at least one non-draft post exists
- Drafts and the empty index stay out of the sitemap
- One example post with `draft: true` so I can see the format
- Editable in Pages CMS

### Pass 1 done means

`npm run check` passes, and the PR lists what changed page by page, every remaining placeholder and what you need from me, and my manual checklist (ROI calculator config, DNS, redirects, `PUBLIC_WEB3FORMS_KEY`, `PUBLIC_CF_BEACON_TOKEN`, the robots.txt AI-crawler decision).

---

## Pass 2: Visual redesign (branch `design/drawing-set`)

Start this once Pass 1 is merged, or branch from Pass 1 if I haven't merged yet. Follow `CLAUDE_PROMPT.md` and `DESIGN_BRIEF.md` exactly. They cover the fonts, palette, type scale, grid, components, motion, the homepage surface order, the `AGENTS.md` §5 rewrite and the acceptance criteria.

From this point copy is frozen: no visible copy changes apart from the optional `heroEmphasis` field. Style the new blog pages and the ROI text link with the same system, even though the design brief doesn't mention them.

### Pass 2 done means

Everything in `DESIGN_BRIEF.md` §12 is true, including the Lighthouse, axe and reduced-motion checks, and the screenshots at 375px and 1440px.

---

## For both passes

- Never break the hard rules: no prices or £ on the homepage, UK English, no em dashes, never "quietly" or "genuinely", the banned-word list (including `alt` text and `aria-label`s), no carousels or autoplay, no client names or uncleared footage, no accountancy anywhere
- Don't touch DNS, Cloudflare dashboard settings, Namecheap, Squarespace, Cal.com, Web3Forms or the `kvm-roi-calculator` project. Anything needed there goes on my checklist
- Don't send email, post anywhere or submit real enquiries. Test forms with a test key or in preview only
- Don't push to production. Open PRs so they deploy to Cloudflare Pages previews, and give me the preview link with a short list of what to check on my phone
