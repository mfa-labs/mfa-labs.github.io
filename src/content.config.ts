import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const meeting = z.object({
  week: z.number(),
  date: z.coerce.date().optional(),
  topic: z.string(),
  note: z.string().optional(),
  file: z.string().optional(),
});

const kuliah = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    code: z.string(),
    credits: z.number(),
    program: z.string().default('Program Studi Informatika (S1)'),
    description: z.string(),
    // Semester terbaru di posisi pertama — itulah yang dirender penuh.
    terms: z
      .array(
        z.object({
          label: z.string(),
          meetings: z.array(meeting).default([]),
        })
      )
      .default([]),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const catatan = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    course: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, kuliah, catatan };
