# Legacy Music Group source of truth

Verified 2026-08-15.

## Canonical source

- Local: `/Users/davidmarsh/Code/LiFi NYC/Clients/Legacy Music Group/legacy-music-group`
- GitHub: `https://github.com/omgitsthedm/legacy-music-group`
- Production branch: `master`
- Current deployed application source: `646cd0d86b7d23680ade4577ed662873396ce1b7` (PR #13, keyboard skip navigation and durable main landmark). PR #13 contains application commit `12ca1da467cb10d0c520f04cb0473c92cf1e32d7`; the merge commit is the production workflow head.
- The release chain also includes PR #4 (`72a0770`, session-video delivery and controls), PR #8 (`6430af4`, canonical Netlify host), PR #9 (`47ffbea` and `364a573`, deep-route assets and sitemap coverage), PR #10 (`d57697e`, legacy engineer aliases), and PR #11 (`fee216e`, final deep-route static URL guard).
- Historical product work: draft PR #1 was closed without merge on 2026-08-12, and its remote branch is absent. This predates the current release work; do not describe it as an open or preserved draft.

## Production

- Netlify site: `legacy-music-group`
- Site ID: `d04515bf-0eb2-45ae-b71b-2a08dc92391a`
- URL: `https://legacy-music-group.netlify.app`
- Current production deploy: `6a807414bf02e5f3abc87815`, published 2026-08-15T14:14:05.554Z
- Immutable URL: `https://6a807414bf02e5f3abc87815--legacy-music-group.netlify.app`
- Immediate rollback deploy: `6a806b00ea98cbe871dc3d67`
- Release workflow: GitHub Actions run `31889311960`; Netlify's manual upload record omits `commit_ref`, so the workflow merge head `646cd0d...`, deploy title, immutable URL, and live route evidence bind the release.
- Publishing is a CLI upload to a GitHub-configured site. The repository workflow deploys pushes to `master`; a non-production branch does not intentionally publish.
- Markdown-only pushes are excluded from the production deploy workflow. Deployment uses Node 24, `actions/checkout@v7.0.1`, and `actions/setup-node@v7.0.0`.

## Operation

- Stack: Vite, React, TypeScript; output: `dist`.
- Commands: `npm run dev`, `npm run lint`, `npm run build`.
- The metadata generator emits all 34 non-root sitemap documents plus the branded 404, rejects sitemap/static-route mismatches and relative deep-route asset, favicon, or manifest URLs, and verifies referenced output files exist.
- Production verification confirms all 35 sitemap URLs and their static dependencies return 200, canonical and immutable representative routes agree on `legacy-music-group.netlify.app` metadata, legacy `/engineers/1`–`/4` aliases return 301 to named profiles, and an absent route returns 404. Direct deep-link browser checks pass at desktop and 390-pixel mobile widths with no console or overflow errors.
- PR #13 adds a deterministic `npm run test:accessibility-shell` guard: static fallback and hydrated React each contain exactly one `main#main-content`, and the first-source skip link targets it before analytics controls. Fresh canonical and immutable Chromium checks at 1440 × 1000 and 390 × 844 proved the root and a deep article route return 200, first Tab visibly focuses “Skip to main content,” Enter focuses the main landmark, and hydration retains one h1/main with no console, page, asset, or overflow failures.
- The four homepage session clips use lossless MP4 fast-start layout. Production browser checks prove hover, keyboard, and touch play/pause behavior, visible keyboard focus, reduced-motion-safe hover behavior, and no hard video request failures at desktop and 390-pixel mobile widths.
- `BRIEF.md` retains client and product doctrine for on-demand use.
- Do not expose secrets or exercise real booking/lead flows. Reverify Netlify and live state before any release.
