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
- The metadata generator emits all 34 non-root static documents plus the branded 404 and verifies their root-absolute static assets. During the current noindex recovery state, the sitemap intentionally contains no URLs.
- Production verification confirms all 35 sitemap URLs and their static dependencies return 200, canonical and immutable representative routes agree on `legacy-music-group.netlify.app` metadata, legacy `/engineers/1`–`/4` aliases return 301 to named profiles, and an absent route returns 404. Direct deep-link browser checks pass at desktop and 390-pixel mobile widths with no console or overflow errors.
- PR #13 adds a deterministic `npm run test:accessibility-shell` guard: static fallback and hydrated React each contain exactly one `main#main-content`, and the first-source skip link targets it before analytics controls. Fresh canonical and immutable Chromium checks at 1440 × 1000 and 390 × 844 proved the root and a deep article route return 200, first Tab visibly focuses “Skip to main content,” Enter focuses the main landmark, and hydration retains one h1/main with no console, page, asset, or overflow failures.
- The four homepage session clips use lossless MP4 fast-start layout. Production browser checks prove hover, keyboard, and touch play/pause behavior, visible keyboard focus, reduced-motion-safe hover behavior, and no hard video request failures at desktop and 390-pixel mobile widths.
- `BRIEF.md` retains client and product doctrine for on-demand use.
- Do not expose secrets or exercise real booking/lead flows. Reverify Netlify and live state before any release.

## 2026-09-27 acquisition recovery status — review candidate

- Receiving owner: David Marsh / Little Fight NYC.
- This source batch has not been released. Its intended release target remains Netlify site legacy-music-group (d04515bf-0eb2-45ae-b71b-2a08dc92391a).
- The Netlify host is deliberately noindex, nofollow while legacymusicgroup.com continues to serve Legacy’s current WordPress site. No DNS, primary-domain, or redirect change is part of this batch.
- The prior in-app Calendly calendar, fake availability, local-only callback/contact/newsletter confirmations, booking HowTo markup, rating markup, and dated review count have been removed from the candidate. Visitor actions hand off to the current Legacy WordPress booking path (/service-plus/), current contact path (/contacts/), or retained phone/email details.
- This is a noindex preview repair: the current Netlify host cannot load GTM at any consent state. Future transport is wired only for the exact custom hosts, indexable approved public paths, a saved explicit grant, and non-QA/non-automation sessions; no GA measurement destination has been validated.
- Redo required before future custom-domain cutover or reindexing: verify current booking recipient and completion behavior; verify current operational facts, terms, rates beyond the current published baseline, team/service/media claims, and Google Business Profile access; verify a GA measurement destination and complete production consent transport tests; then choose the canonical-domain migration and sitemap/indexing plan.

## 2026-09-28 production evidence - acquisition recovery

- Canonical source commit: `c8a97e25c0d77ed785d98844a5b4b2cb2ec35d4b` on `master`; GitHub Actions was intentionally skipped to prevent a duplicate production publish.
- Site ID: `d04515bf-0eb2-45ae-b71b-2a08dc92391a` (`legacy-music-group`). The reviewed candidate was `6aba047f3d88455f0807aad9` at `https://6aba047f3d88455f0807aad9--legacy-music-group.netlify.app`.
- Production deploy: `6aba04a678dff6a47a043408`, published `2026-09-28T06:09:48.944Z`; immutable URL: `https://6aba04a678dff6a47a043408--legacy-music-group.netlify.app`.
- Exact local `dist` tree SHA-256: `0d221d4c6614cbef7c63cd100c8a5618e32fc0f2ed3dedbb36a51353f583ac84`. Production and immutable root responses matched byte-for-byte (`b3be79b8fefd1576b2877dde6a593316899c1c2989322f65395bbaabadcb3204`), as did their intentionally empty sitemap responses.
- Checks passed: analytics consent gate test, lint, production build, accessibility shell, live noindex header and metadata, no deployed functions, and an interactive production QA session. After Allow at `?qa=1`, navigation to `/services#preserve` had zero Google scripts, zero forms, and three handoffs to the current Bookly path.
- Credit record: one reviewed deploy-preview and one production deploy. The production upload reused the reviewed artifact (`0` files and `0` edge functions requested; Netlify reported all files already uploaded); Netlify did not expose a billing-credit amount.
- This markdown record was committed after production and does not change the published artifact. Future custom-domain cutover, GA destination verification, indexing, business-profile access, and operational-fact verification remain redo-required.
