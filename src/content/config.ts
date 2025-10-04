import { defineCollection, z } from 'astro:content';

const productsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    price: z.number().positive(),
    category: z.enum(['ceramica', 'hierro', 'aromaterapia']),
    subcategory: z.string(),
    images: z.array(z.string()),
    featured: z.boolean().default(false),
    inStock: z.boolean().default(true),
    tags: z.array(z.string()).optional(),
    dimensions: z.object({
      height: z.number().optional(),
      width: z.number().optional(),
      depth: z.number().optional(),
      weight: z.number().optional(),
    }).optional(),
  }),
});

const categoriesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    image: z.string(),
    subcategories: z.array(z.object({
      name: z.string(),
      slug: z.string(),
      description: z.string().optional(),
    })),
  }),
});

export const collections = {
  products: productsCollection,
  categories: categoriesCollection,
};
