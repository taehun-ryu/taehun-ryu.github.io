# Taehun Ryu — Research Website

A fully static personal research website built with Astro and TypeScript. The
site is independent of Hugo and HugoBlox and deploys to GitHub Pages.

Taehun Ryu is a Ph.D. student at UNIST researching event-based robot vision,
sensor calibration, and geometric perception for robotics.

## Development

```bash
npm install
npm run dev
```

The development server is available at <http://localhost:4321> by default.

## Verification

```bash
npm run check
npm run build
npm run preview
```

The production output is written to `dist/`.

## Add a publication

1. Add one Markdown file under `src/data/publications/`.
2. Add its thumbnail under `public/images/publications/`.
3. Fill the validated frontmatter fields and optional links.

The homepage automatically sorts publications newest-first. The schema in
`src/content.config.ts` makes malformed entries fail during validation.

## Add a project

1. Add one Markdown file under `src/data/projects/`.
2. Add its teaser under `public/images/projects/`.
3. Fill the validated frontmatter and write the detail-page body in Markdown.

The homepage card and `/projects/<file-name>/` detail route are generated
automatically. Set `featured: false` to keep a project detail page off the
homepage.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the Astro
site and publishes it through GitHub Pages. There are no scheduled workflows.
