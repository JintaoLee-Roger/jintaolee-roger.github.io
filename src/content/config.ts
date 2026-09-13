import { defineCollection, z } from "astro:content";

const localizedText = z.object({
  zh: z.string(),
  en: z.string(),
});

const link = z.object({
  label: z.string(),
  href: z.string(),
});

const publicationAuthor = z.object({
  person: z.string().optional(),
  name: z.string().optional(),
  citationName: z.string().optional(),
  self: z.boolean().default(false),
  equal: z.boolean().default(false),
  corresponding: z.boolean().default(false),
});

const publicationHighlight = z.object({
  label: localizedText,
  tone: z.enum(["impact", "award", "index", "note"]).default("note"),
});

const settings = defineCollection({
  type: "content",
  schema: z.object({
    name: localizedText,
    tagline: localizedText,
    description: localizedText,
    role: localizedText,
    affiliation: localizedText,
    field: localizedText,
    location: localizedText,
    lastUpdated: z.string(),
    email: z.string().email(),
    portrait: z.string(),
    links: z.array(link),
    keywords: z.array(localizedText),
    milestones: z.array(
      z.object({
        value: z.string(),
        label: localizedText,
      }),
    ),
  }),
});

const research = defineCollection({
  type: "content",
  schema: z.object({
    title: localizedText,
    summary: localizedText,
    progress: localizedText.optional(),
    order: z.number(),
    visible: z.boolean().default(true),
    image: z.string().optional(),
    imageAlt: localizedText.optional(),
    tags: z.array(localizedText).default([]),
    links: z.array(link).default([]),
  }),
});

const publications = defineCollection({
  type: "data",
  schema: z.object({
    publications: z.array(z.object({
    slug: z.string(),
    title: z.string(),
    authors: z.array(publicationAuthor),
    venue: z.string(),
    shortVenue: z.string().optional(),
    year: z.number(),
    volume: z.string().optional(),
    issue: z.string().optional(),
    pages: z.string().optional(),
    articleNumber: z.string().optional(),
    citation: z.string().optional(),
    type: z.enum(["journal", "conference", "preprint", "book", "patent"]).default("journal"),
    status: z.enum(["published", "under-review", "preprint"]).optional(),
    featured: z.boolean().default(false),
    visible: z.boolean().default(true),
    highlights: z.array(publicationHighlight).default([]),
    abstract: localizedText.optional(),
    links: z.array(link).default([]),
    })),
  }),
});

export const collections = {
  settings,
  research,
  publications,
};
