# Legacy Music Group source of truth

Verified 2026-08-15.

## Canonical source

- Local: `/Users/davidmarsh/Code/LiFi NYC/Clients/Legacy Music Group/legacy-music-group`
- GitHub: `https://github.com/omgitsthedm/legacy-music-group`
- Production branch: `master`
- Deployed application UI change: `72a0770df34c917ba9b9c9b87280216d21dae9d8` (PR #4, session-video delivery and controls)
- Current production build source: `fee216e9410d1b10ef9b6ca6d78aff1917018c18` (PR #11, final deep-route static URL guard). The release chain also includes PR #8 (`6430af4`, canonical Netlify host), PR #9 (`47ffbea` and `364a573`, deep-route assets and sitemap coverage), and PR #10 (`d57697e`, legacy engineer aliases).
- Historical product work: draft PR #1 was closed without merge on 2026-08-12, and its remote branch is absent. This predates the current release work; do not describe it as an open or preserved draft.

## Production

- Netlify site: `legacy-music-group`
- Site ID: `d04515bf-0eb2-45ae-b71b-2a08dc92391a`
- URL: `https://legacy-music-group.netlify.app`
- Current production deploy: `6a806b00ea98cbe871dc3d67`, published 2026-08-15T13:35:21.094Z
- Immutable URL: `https://6a806b00ea98cbe871dc3d67--legacy-music-group.netlify.app`
- Immediate rollback deploy: `6a80691e4c35c4d6f3a379bb`
- Release workflow: GitHub Actions run `31887566800`; Netlify's manual upload record omits `commit_ref`, so the workflow head `fee216e...`, deploy title, immutable URL, and live route/dependency evidence bind the release.
- Publishing is a CLI upload to a GitHub-configured site. The repository workflow deploys pushes to `master`; a non-production branch does not intentionally publish.
- Markdown-only pushes are excluded from the production deploy workflow. Deployment uses Node 24, `actions/checkout@v7.0.1`, and `actions/setup-node@v7.0.0`.

## Operation

- Stack: Vite, React, TypeScript; output: `dist`.
- Commands: `npm run dev`, `npm run lint`, `npm run build`.
- The metadata generator emits all 34 non-root sitemap documents plus the branded 404, rejects sitemap/static-route mismatches and relative deep-route asset, favicon, or manifest URLs, and verifies referenced output files exist.
- Production verification confirms all 35 sitemap URLs and their static dependencies return 200, canonical and immutable representative routes agree on `legacy-music-group.netlify.app` metadata, legacy `/engineers/1`–`/4` aliases return 301 to named profiles, and an absent route returns 404. Direct deep-link browser checks pass at desktop and 390-pixel mobile widths with no console or overflow errors.
- The four homepage session clips use lossless MP4 fast-start layout. Production browser checks prove hover, keyboard, and touch play/pause behavior, visible keyboard focus, reduced-motion-safe hover behavior, and no hard video request failures at desktop and 390-pixel mobile widths.
- `BRIEF.md` retains client and product doctrine for on-demand use.
- Do not expose secrets or exercise real booking/lead flows. Reverify Netlify and live state before any release.
