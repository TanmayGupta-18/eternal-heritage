# GitHub Pages Deployment

This repository is a **React 19 + Vite** project. Its standalone GitHub Pages artifact is generated directly in `dist/` by `pnpm build:github`.

## Diagnosis

At the time of repair, GitHub Pages was configured with the legacy source `main` branch at `/`. Because the repository root does not contain the Vite production `index.html`, GitHub Pages returned a 404 at the project URL.

## Included repair

The `build:github` command creates a Vite bundle with a project-site base path and adds `dist/404.html`. The workflow in `.github/workflows/deploy-pages.yml` installs dependencies, runs that command, uploads `dist/`, and deploys the artifact through GitHub Pages Actions. It does not invoke `server/index.ts` or build the Express server.

The client switches to hash routing in a GitHub Pages build. The canonical Meenakshi URL is therefore `https://tanmaygupta-18.github.io/eternal-heritage/#/temples/meenakshi-amman`. The fallback document redirects legacy direct paths such as `/eternal-heritage/temples/meenakshi-amman` to that canonical URL.

## Required GitHub Pages source

In **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**. The repository token available during repair could not change this user-owned setting and GitHub returned a 403 response, but the required workflow is committed with the project and runs on every push to `main` once the source is selected.

## Verification

The static `dist/` artifact has been verified to contain `index.html`, `404.html`, and the Vite `assets/` directory, with no Express bundle, Manus runtime, managed storage path, or managed preview files. The application has also been served from `/eternal-heritage/` using a static preview, where the home page, the direct Meenakshi hash URL, link navigation, browser back, and browser forward all rendered correctly.
