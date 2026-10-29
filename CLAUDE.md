# CLAUDE.md

Read these before changing anything, in this order:

1. `AGENTS.md`: the hard rules (brand, copy, banned words, engineering, scope). They win over everything except design tokens.
2. `VERONA_WEBSITE_INFO_FOR_CLAUDE.md`: every fact, the final copy and the page specs. The source of truth for **what** the site says.
3. `DESIGN_BRIEF.md`: "The Drawing Set". The source of truth for **how** the site looks. It replaces §5 (design tokens) of `AGENTS.md` and of the info file.
4. `VISUAL_CODE_BRIEF.md`: how each effect is built. It sits under `DESIGN_BRIEF.md`.
5. `CLAUDE_PROMPT.md`: the short version of the design pass.
6. `design-refs/`: reference screenshots. Ignore `box-to-box.png` (it captured an error page); use `VISUAL_CODE_BRIEF.md` §2.12 instead.

Quick rules:

- Section labels use a middle dot, never an em dash: `02 · The problem`. Em dashes are banned everywhere.
- Never invent copy, figures, testimonials, client names, logos or prices. If something isn't covered, add `[[PLACEHOLDER: question]]` and say so in the PR.
- Copy lives in `src/content/**` (edited through Pages CMS, see `.pages.yml`), never hard-coded in components.
- `npm run check` must pass before any PR. It runs `astro check`, a production build, the copy scan (banned words, homepage `£`, placeholders, em dashes, SEO lengths), the link check and the redirect test.
- Node 24 (see `.node-version`). Astro 7 needs Node ≥ 22.23.4.
- Don't touch DNS, Cloudflare dashboard settings, Namecheap, Squarespace, Cal.com, Web3Forms or the `kvm-roi-calculator` project. Put anything needed there on Kai's checklist in the PR.
