# Legacy Music Group AI-Ops Rules Header

Project Code:

LFNYC-LMG

Project Name:

Legacy Music Group

Business Line:

Client Projects under Little Fight NYC

Tier:

Tier 2 — live small-business site for a recording studio + artist-development brand, with a booking/lead-capture flow (BookingModal / Calendly / Quickbook)

Risk:

Medium — design-preview site moving toward real booking. Booking modal is currently UI-only (no backend yet per CLAUDE.md), but Calendly/lead capture is wired in places. Treat any real booking/lead action as transactional.

Canonical Path:

/Users/davidmarsh/Desktop/LiFi NYC/Clients/Legacy Music Group/legacy-music-group

Remote:

https://github.com/omgitsthedm/legacy-music-group.git  (default branch: `master`)

Host:

Netlify — **Vite build** (`command = "npm run build"`, `publish = "dist"`). Because `publish = "dist"`, `.ai/`, `CLAUDE.md`, `AGENTS.md` are repo-only and never shipped — no public-exclude redirect needed. Netlify site `legacy-music-group` (id `d04515bf-0eb2-45ae-b71b-2a08dc92391a`). A second site `legacy-music-group-preview` (id `4b9b9dd6-...`) is an older Next.js artifact (superseded).

Live URL:

`https://legacy-music-group.netlify.app`

⚠️ DEPLOY MODEL — git ≠ live: Netlify `published_deploy.commit_ref = null` (the live deploy was a CLI/manual deploy, NOT a Netlify-Git build). The live deploy (2026-06-12, "Remove public placeholders and audit clean build") does NOT match local git HEAD (2026-05-07, `e93d756`), and the working tree has 25 uncommitted changes on top — so git is **divergent and stale** vs live. A `.github/workflows/netlify-deploy.yml` exists that could deploy-on-push via `NETLIFY_AUTH_TOKEN`; the existing `CLAUDE.md` claims auto-deploy, but live evidence shows the running site does not track git HEAD. **NEVER push** — treat push as a production deploy trigger.

Stack:

Vite 7 + React 19 + TypeScript, Tailwind 3.4 + shadcn/ui, react-router-dom v7, GSAP, react-hook-form + zod. `BRIEF.md` is the master doctrine (read first).

## Commands

- Dev server: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Deploy: **DO NOT** — git push to `master` may trigger the GH Action deploy, and live is already divergent/stale. Any deploy is gated by `APPROVE LIVE CHANGE` and should be a deliberate David-run action.

## Locked Rules

- Live client site — treat as production. Branch is `master`.
- **NEVER push.** git is divergent/stale vs live; push may trigger a deploy. Verify live via read-only `netlify api listSiteDeploys`.
- 25 pre-existing dirty files (see STATE) are NOT part of onboarding — do NOT clean, stage, or commit them. Only the new `.ai/` + `AGENTS.md` + CLAUDE.md edit are staged.
- Booking / Calendly / lead-capture actions on live = transactional. No real test bookings/leads against production.
- `BRIEF.md` is doctrine — respect positioning/design/booking strategy.
- `.env`/secrets never read or committed.
- `publish = "dist"`, so `.ai/`, `CLAUDE.md`, `AGENTS.md` are repo-only (never in the bundle).

## Legacy Music Group QA Harness Map

Observational (agent may run): `git status/log`, read source/config, `npm run dev/lint/build` locally, public GET to the live URL, read-only Netlify deploy metadata.

Transactional/gated (David-run / approved): any deploy (incl. push that triggers the GH Action); real booking/Calendly/lead submissions; DNS/domain/env/secret changes.
