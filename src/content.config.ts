import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    githubUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    featured: z.boolean().default(false),
    year: z.number(),
  }),
});

export const collections = { projects };