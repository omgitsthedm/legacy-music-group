# Legacy Music Group source of truth

Verified 2026-08-15.

## Canonical source

- Local: `/Users/davidmarsh/Code/LiFi NYC/Clients/Legacy Music Group/legacy-music-group`
- GitHub: `https://github.com/omgitsthedm/legacy-music-group`
- Production branch: `master`
- Current source head: `72a0770df34c917ba9b9c9b87280216d21dae9d8` (PR #4, session-video delivery and controls)
- Preserved product work: draft PR #1 from `chore/plain-language-live-confirmation-20260711`; do not discard or merge it as housekeeping.

## Production

- Netlify site: `legacy-music-group`
- Site ID: `d04515bf-0eb2-45ae-b71b-2a08dc92391a`
- URL: `https://legacy-music-group.netlify.app`
- Current production deploy: `6a8055cb46b72cce9d4edcc5`, published 2026-08-15T12:04:55.526Z
- Immutable URL: `https://6a8055cb46b72cce9d4edcc5--legacy-music-group.netlify.app`
- Immediate rollback deploy: `6a7cfee58533cdf081044da8`
- Release workflow: GitHub Actions run `31883650559`; Netlify's manual upload record omits `commit_ref`, so PR #4, the workflow head, deploy title, immutable URL, and exact deployed-asset hashes bind the release to source head `72a0770d...`.
- Publishing is a CLI upload to a GitHub-configured site. The repository workflow deploys pushes to `master`; a non-production branch does not intentionally publish.

## Operation

- Stack: Vite, React, TypeScript; output: `dist`.
- Commands: `npm run dev`, `npm run lint`, `npm run build`.
- The four homepage session clips use lossless MP4 fast-start layout. Production browser checks prove hover, keyboard, and touch play/pause behavior, visible keyboard focus, reduced-motion-safe hover behavior, and no hard video request failures at desktop and 390-pixel mobile widths.
- `BRIEF.md` retains client and product doctrine for on-demand use.
- Do not expose secrets or exercise real booking/lead flows. Reverify Netlify and live state before any release.
