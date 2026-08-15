# Legacy Music Group source of truth

Verified 2026-08-15.

## Canonical source

- Local: `/Users/davidmarsh/Code/LiFi NYC/Clients/Legacy Music Group/legacy-music-group`
- GitHub: `https://github.com/omgitsthedm/legacy-music-group`
- Production branch: `master`
- Deployed application change: `72a0770df34c917ba9b9c9b87280216d21dae9d8` (PR #4, session-video delivery and controls)
- Current production build source: `47e2a4ca5b6bfd2ddd7e3df384ac145f7e12a1c9` (PR #5, release documentation and workflow hardening; no later application change)
- Preserved product work: draft PR #1 from `chore/plain-language-live-confirmation-20260711`; do not discard or merge it as housekeeping.

## Production

- Netlify site: `legacy-music-group`
- Site ID: `d04515bf-0eb2-45ae-b71b-2a08dc92391a`
- URL: `https://legacy-music-group.netlify.app`
- Current production deploy: `6a80580c94af08bccbac98ea`, published 2026-08-15T12:14:29.190Z
- Immutable URL: `https://6a80580c94af08bccbac98ea--legacy-music-group.netlify.app`
- Immediate rollback deploy: `6a8055cb46b72cce9d4edcc5`
- Release workflow: GitHub Actions run `31884063358`; Netlify's manual upload record omits `commit_ref`, so PR #5, workflow head `47e2a4c...`, the deploy title, immutable URL, and exact deployed-asset hashes bind the release.
- Publishing is a CLI upload to a GitHub-configured site. The repository workflow deploys pushes to `master`; a non-production branch does not intentionally publish.
- Markdown-only pushes are excluded from the production deploy workflow. Deployment uses Node 24, `actions/checkout@v7.0.1`, and `actions/setup-node@v7.0.0`.

## Operation

- Stack: Vite, React, TypeScript; output: `dist`.
- Commands: `npm run dev`, `npm run lint`, `npm run build`.
- The four homepage session clips use lossless MP4 fast-start layout. Production browser checks prove hover, keyboard, and touch play/pause behavior, visible keyboard focus, reduced-motion-safe hover behavior, and no hard video request failures at desktop and 390-pixel mobile widths.
- `BRIEF.md` retains client and product doctrine for on-demand use.
- Do not expose secrets or exercise real booking/lead flows. Reverify Netlify and live state before any release.
