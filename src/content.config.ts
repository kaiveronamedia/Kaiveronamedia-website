import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Pages CMS can write null or "" for empty fields; treat both as "not set".
const str = z.preprocess((v) => v ?? '', z.string());
const empty = (v: unknown) => (v === '' || v === null ? undefined : v);

const link = z.object({ text: z.string(), href: z.string() });
const faqItem = z.object({ question: z.string(), answer: z.string() });
const clip = z.object({
  youtubeId: str,
  poster: str,
  title: str,
  placeholder: z.string(),
});
const seo = {
  seoTitle: z.string(),
  description: z.string(),
};

const home = defineCollection({
  loader: glob({ pattern: 'index.md', base: './src/content/home' }),
  schema: z.object({
    ...seo,
    hero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      heroEmphasis: z.string().optional(),
      sub: z.string(),
      who: z.string(),
      chips: z.array(z.string()),
      clip,
    }),
    testimonials: z.array(z.object({ quote: z.string(), attribution: z.string() })),
    problem: z.object({
      eyebrow: z.string(),
      title: z.string(),
      haveLabel: z.string(),
      have: z.array(z.string()),
      needLabel: z.string(),
      need: z.array(z.string()),
      body: z.string(),
    }),
    process: z.object({
      eyebrow: z.string(),
      title: z.string(),
      stops: z.array(
        z.object({
          no: z.string(),
          stage: z.string(),
          title: z.string(),
          body: z.string(),
          reveal: z.array(z.string()),
        }),
      ),
      end: z.object({ label: z.string(), body: z.string() }),
      link,
    }),
    included: z.object({
      eyebrow: z.string(),
      title: z.string(),
      includedLabel: z.string(),
      addonLabel: z.string(),
      items: z.array(
        z.object({ title: z.string(), body: z.string(), type: z.enum(['included', 'addon']) }),
      ),
    }),
    who: z.object({
      eyebrow: z.string(),
      title: z.string(),
      sectors: z.array(z.object({ name: z.string(), pitch: z.string(), href: z.string() })),
    }),
    work: z.object({
      eyebrow: z.string(),
      title: z.string(),
      emptyLine: z.string(),
      emptyLink: link,
      caseStudy: z.string(),
      howWeBuiltIt: z.string(),
    }),
    retainers: z.object({
      status: z.enum(['live', 'placeholder']),
      eyebrow: z.string(),
      title: z.string(),
      plans: z.array(z.object({ name: z.string(), includes: z.string() })),
      link,
    }),
    faq: z.array(faqItem),
  }),
});

// Inner pages. Each file uses the fields its page needs; all share the SEO fields.
const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: z.object({
    ...seo,
    h1: z.string(),
    label: z.string().optional(),
    lead: z.string().optional(),
    // how-it-works
    step0: z
      .object({ title: z.string(), label: z.string(), intro: z.string().optional(), items: z.array(z.string()), close: z.string() })
      .optional(),
    parts: z
      .object({
        title: z.string(),
        items: z.array(z.object({ no: z.string(), title: z.string(), body: z.string() })),
      })
      .optional(),
    facts: z.array(z.string()).optional(),
    faqTitle: z.string().optional(),
    faqExtra: z.array(faqItem).optional(),
    // about
    paragraphs: z.array(z.string()).optional(),
    background: z.string().optional(),
    headshot: z.string().optional(),
    headshotAlt: z.string().optional(),
    headshotPlaceholder: z.string().optional(),
    // pricing
    table: z.string().optional(),
    // roi-calculator, book
    iframeTitle: z.string().optional(),
    fallbackText: z.string().optional(),
    disclaimer: z.string().optional(),
    // contact
    form: z
      .object({
        nameLabel: z.string(),
        emailLabel: z.string(),
        firmLabel: z.string(),
        messageLabel: z.string(),
        submitLabel: z.string(),
        subject: z.string(),
        keyPlaceholder: z.string(),
      })
      .optional(),
    // thanks
    replyTime: z.string().optional(),
    // 404
    links: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
    // work
    emptyLine: z.string().optional(),
    whatItDidTitle: z.string().optional(),
    transcriptTitle: z.string().optional(),
    // insights
    draftLabel: z.string().optional(),
    // privacy-policy
    portedText: z.string().optional(),
    reviewNote: z.string().optional(),
  }),
});

const sectors = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/sectors' }),
  schema: z.object({
    ...seo,
    slug: z.string(),
    order: z.number(),
    name: z.string(),
    qualifier: z.string(),
    h1: z.string(),
    heroEmphasis: z.string().optional(),
    sub: z.string(),
    clip,
    problem: z.object({ title: z.string(), body: z.string() }),
    roiLine: z.string().optional(),
    roiLink: link.optional(),
    funnels: z
      .object({
        title: z.string(),
        items: z.array(z.object({ label: z.string(), title: z.string(), body: z.string() })),
        note: z.string(),
      })
      .optional(),
    compliance: z.object({ label: z.string(), title: z.string(), body: z.string() }).optional(),
    howTitle: z.string(),
    whoTitle: z.string(),
    who: z.array(z.string()),
    proofTitle: z.string(),
    proof: z.string(),
    faqTitle: z.string(),
    faq: z.array(faqItem),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    youtubeId: str,
    aspect: z.preprocess(empty, z.enum(['9/16', '16/9']).default('9/16')),
    poster: str,
    sector: str,
    hook: str,
    job: str,
    summary: str,
    uploadDate: str,
    duration: str,
    cleared: z.boolean().default(false),
    featured: z.boolean().default(false),
    status: z.preprocess(empty, z.enum(['live', 'placeholder']).default('placeholder')),
  }),
});

const insights = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/insights' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      sector: z.preprocess(empty, z.enum(['architects', 'construction', 'mortgage-and-finance']).optional()),
      heroImage: z.preprocess(empty, image().optional()),
      heroImageAlt: z.preprocess(empty, z.string().optional()),
      draft: z.boolean().default(false),
    }),
});

export const collections = { home, pages, sectors, work, insights };
