import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    theme: z.enum(['impayes', 'efacture']),
    affiliation: z.boolean().default(false),
    priorite: z.number().default(99),
  }),
});

export const collections = { guides };
