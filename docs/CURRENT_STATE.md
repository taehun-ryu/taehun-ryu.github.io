# Current Website State

## Stack

- Astro 7 with strict TypeScript
- Static output only
- Markdown content collections validated with Zod
- GitHub Pages deployment through the official Astro action
- No Hugo, HugoBlox, Go, React, Tailwind, or scheduled workflow dependency

## Current Profile

- Ph.D. student in Artificial Intelligence at UNIST
- 3D Vision & Robotics Lab, advised by Kyungdon Joo
- Research focus: event-based robot vision, sensor calibration, and geometric perception for robotics

## Routes

- `/` — research identity, publications, projects, and about
- `/projects/<id>/` — generated project detail pages
- `/experience/` — compatibility redirect to the homepage About section
- Previous project routes — static redirects to the new project IDs

## Content

- Publications: `src/data/publications/`
- Projects: `src/data/projects/`
- Education: `src/data/education/`
- Experience: `src/data/experience/`
- Hero organization logos: `src/data/affiliations.ts`
- Public images and documents: `public/`
- Validation schemas: `src/content.config.ts`

## Known content limitation

The previous Visual SLAM project body contained only `TBA`. Its new detail page
uses only the confirmed project summary and bibliography from the previous
source; no results or implementation details were invented.
