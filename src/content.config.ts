import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({
  label: z.string(),
  url: z.string(),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).min(1),
    venue: z.string(),
    venueShort: z.string(),
    publicationType: z.enum(['conference', 'journal']),
    date: z.coerce.date(),
    badge: z.string().optional(),
    thumbnail: z.string(),
    thumbnailAlt: z.string(),
    links: z.array(link).min(1),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/projects' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    affiliation: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    code: z.url(),
    featured: z.boolean().default(true),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/education' }),
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    detail: z.string().optional(),
    lab: z.string().optional(),
    advisor: z.string().optional(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/experience' }),
  schema: z.object({
    role: z.string(),
    organization: z.string(),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    lab: z.string().optional(),
    lab_link: link.optional(),
    advisor: z.string().optional(),
    advisor_link: link.optional(),
    project: link.optional(),
  }),
});

export const collections = { publications, projects, education, experience };
