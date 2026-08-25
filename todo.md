# Repair Checklist

- [x] Correct the Meenakshi detail-page effect so it returns no value.
- [x] Verify `/temples/meenakshi-amman` renders without the reported console error.
- [x] Create the dedicated Mandapas route from the supplied reference.
- [x] Create the dedicated Garbhagrihas route from the supplied reference.
- [x] Connect desktop and mobile navigation to the new routes.
- [x] Verify new routes on desktop and mobile.
- [x] Inspect the Vite build and current GitHub repository Pages configuration.
- [x] Add a project-subpath-aware Vite base configuration and GitHub Pages workflow.
- [x] Add a static route fallback for deep links on GitHub Pages.
- [x] Build and verify the deploy output under the repository subpath.
- [x] Audit the current Pages artifact path and workflow against the supplied `dist/` static-output requirement.
- [x] Configure a standalone `build:github` command that emits the complete frontend directly into `dist/`.
- [x] Update the GitHub Actions artifact path to use the standalone static output.
- [x] Test homepage, hash route, deep-link fallback, and assets under `/eternal-heritage/`.
