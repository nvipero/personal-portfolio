import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		client: z.string().optional(), // omit when the client cannot be named
		role: z.string(),
		startDate: z.date(),
		endDate: z.date().optional(), // missing = ongoing
		tech: z.array(z.string()),
		summary: z.string(), // one or two sentences for listings
		featured: z.boolean().default(false),
	}),
});

export const collections = { projects };
