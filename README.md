# Personal Site Guide

This repository is a Hugo (Hugo Blox) based personal site.

## 1) Run Locally (localhost)

### Requirements
- Node.js 20 or later
- pnpm 10.14.0
- Hugo Extended 0.154.5

Project scripts:
- Development server: `pnpm dev`
- Production build: `pnpm build`

### Steps
```bash
pnpm install
pnpm dev
```

Open this URL in your browser:
- `http://localhost:1313`

## 2) Deploy

Current setting in `hugoblox.yaml`:
- `deploy.host: github-pages`

So the default deployment target is GitHub Pages.

### A. Deploy to GitHub Pages (default)

1. Push this repository to GitHub
2. Push a commit to the `main` branch to trigger `.github/workflows/deploy.yml`
3. GitHub Actions builds and deploys the site to GitHub Pages

Required GitHub setting:
- Repository `Settings > Pages`
- Set Source to `GitHub Actions`

Deployment triggers:
- Push to `main`
- Manual run from the Actions tab (`workflow_dispatch`)

### B. Deploy to Netlify (optional)

This repository includes `netlify.toml`, so it can also build on Netlify.

1. Connect this repository in Netlify
2. Build command and publish directory are picked from `netlify.toml`
3. Check the deployed URL provided by Netlify

## 3) Common Commands

```bash
# Development server
pnpm dev

# Production build (+search index)
pnpm build
```

## 4) Reference Files

- Local/build scripts: `package.json`
- GitHub Pages deployment: `.github/workflows/deploy.yml`
- Build workflow: `.github/workflows/build.yml`
- Netlify deployment config: `netlify.toml`
- Deployment target setting: `hugoblox.yaml`

## 5) Edit Main Page

Main page content and section order are controlled in:
- `content/_index.md`

Examples:
- Reorder sections (`Papers`, `Experience`, `Projects`, `Courses`) by moving blocks in `sections:`
- Change how many items appear in each block with `count`

Project cards shown on the main page come from:
- `content/projects/<project-slug>/index.md`

Project tag sources:
- `tags:` in each project file above

Notes about project tags on the main page:
- The default card renderer shows one tag chip.
- This repo includes a homepage hook to show at least two tags:
  - `layouts/_partials/hooks/head-end/show-two-project-tags-on-home.html`
