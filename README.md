# personal-portfolio

Source for my personal site: [personal-portfolio-nvipero1.vercel.app](https://personal-portfolio-nvipero1.vercel.app)

A small static site — home, project history, contact — built with Astro and
deliberately kept dependency-light. No UI framework, no CSS framework, no image
pipeline: the whole thing is a handful of `.astro` files, hand-written CSS and
Markdown.

## Tech

- **[Astro 7](https://astro.build)** — static output, zero client-side JavaScript
- **TypeScript** — strict, via Astro's `astro/tsconfigs/strict`
- **Content collections** — project history as Markdown with a Zod-validated schema
- **Plain CSS** — custom properties in `src/styles/global.css`, no preprocessor
- **pnpm** — Node 22.12+
- **Vercel** — deploys on push to `main`

## Development

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # static build to ./dist
pnpm preview  # serve the build locally
```

## Structure

```
src/
├── content/projects/   # one Markdown file per project
├── content.config.ts   # schema the project files are validated against
├── data/
│   ├── site.ts         # language-independent data (name, links)
│   └── ui.ts           # translatable UI strings, keyed by language
├── layouts/            # BaseLayout: head, nav, skip link, footer
├── components/         # ProjectCard
├── pages/              # index, projects, contact
└── styles/global.css
```

## Adding a project

Drop a Markdown file into `src/content/projects/`. The frontmatter is validated
at build time by the schema in `src/content.config.ts`, so a typo or a missing
field fails the build rather than the page:

```yaml
---
title: Project name — what it was
client: Client Oy, via Consultancy Oy # omit when the client cannot be named
role: Senior Software Developer
startDate: 2019-05-01
endDate: 2026-04-30 # omit when ongoing
tech: ["React", "TypeScript"]
summary: One or two sentences, used in listings.
featured: true # show on the front page
---

Body copy in Markdown.
```

Projects are sorted by `startDate`, newest first.

## A couple of deliberate choices

- **No email address on the site.** Contact goes through LinkedIn, which keeps the
  address out of scrapers. `site.contact` is the single place that decides this.
- **No Sharp.** The only image is a profile photo already exported at display
  size, so `astro.config.mjs` uses `passthroughImageService()` and skips a ~30 MB
  native dependency. Worth revisiting if the site ever gets real image content.
- **Translation-ready, not translated.** `ui.ts` is keyed by language and typed so
  that TypeScript complains about any key a translation forgets. Adding Finnish
  means adding an `fi` block, not restructuring the site.
- **Dark first, light for real.** `color-scheme: dark light` gives a visitor with
  no stated preference the dark version, and the light palette is a designed
  alternative rather than an inverted afterthought.
