import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsEs = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects/es' }),
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

const projectsEn = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects/en' }),
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

export const collections = { projectsEs, projectsEn };