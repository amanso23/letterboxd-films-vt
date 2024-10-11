import { defineCollection, z } from "astro:content";

const films = defineCollection({
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        poster: z.string().url(),
        director: z.string(),
        year: z.string(),
        duration: z.string(),
        watch: z.object({
            spain: z.string().url(),
            usa: z.string().url()
        }),
        hashtags: z.array(z.string()),
        cast: z.array(z.string()).optional()
    })
});

export const collections = { films }