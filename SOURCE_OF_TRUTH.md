# Legacy Music Group source of truth

Verified 2026-07-31.

## Canonical source

- Local: `/Users/davidmarsh/Code/LiFi NYC/Clients/Legacy Music Group/legacy-music-group`
- GitHub: `https://github.com/omgitsthedm/legacy-music-group`
- Production branch: `master`
- Preserved product work: draft PR #1 from `chore/plain-language-live-confirmation-20260711`; do not discard or merge it as housekeeping.

## Production

- Netlify site: `legacy-music-group`
- Site ID: `d04515bf-0eb2-45ae-b71b-2a08dc92391a`
- URL: `https://legacy-music-group.netlify.app`
- Baseline production deploy: `6a64401a836413008772eb1e`
- Publishing is a CLI upload to a GitHub-configured site. The repository workflow deploys pushes to `master`; a non-production branch does not intentionally publish.

## Operation

- Stack: Vite, React, TypeScript; output: `dist`.
- Commands: `npm run dev`, `npm run lint`, `npm run build`.
- `BRIEF.md` retains client and product doctrine for on-demand use.
- Do not expose secrets or exercise real booking/lead flows. Reverify Netlify and live state before any release.
