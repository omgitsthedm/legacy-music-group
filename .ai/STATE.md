# Legacy Music Group AI-Ops State

## Identity

- Project Code: LFNYC-LMG
- Name: Legacy Music Group
- Tier: Tier 2 · Risk: Medium (Vite/React site + booking/lead flow)
- Canonical Path: /Users/davidmarsh/Desktop/LiFi NYC/Clients/Legacy Music Group/legacy-music-group
- Git-backed: yes · Remote: https://github.com/omgitsthedm/legacy-music-group.git · Default branch: `master`

## Current Stamp

- Updated: 2026-06-28
- Updated By: Claude
- Basis: AI-Ops onboarding ON TOP of an in-progress dirty tree (handoff-ready). Read-only scope; no source/content change.
- Git HEAD at onboarding: e93d756 ("100/100 ship score — flip launch toggles + final dead-code purge", 2026-05-07)

## Rules Version

- 2026-06-27-aiops-foundation-v1

## State Confidence

- High for path/repo/branch/remote/stack/commands. High that git ≠ live (deploy metadata + HEAD mismatch + dirty tree).

## Current Live Truth

- Live URL: `https://legacy-music-group.netlify.app` (Netlify site `legacy-music-group`, id `d04515bf-0eb2-45ae-b71b-2a08dc92391a`).
- Host: Netlify, Vite build (`command = npm run build`, `publish = dist`).
- Deploy model: **CLI/MANUAL** — `published_deploy.commit_ref = null`. Last published 2026-06-12 ("Remove public placeholders and audit clean build"), branch `master`.
- ⚠️ git ≠ live: live deploy (2026-06-12) does NOT match local HEAD (`e93d756`, 2026-05-07), and the working tree has 25 uncommitted changes → git is **divergent and stale** vs live.
- A `.github/workflows/netlify-deploy.yml` exists (token-based CLI deploy on push). The existing repo `CLAUDE.md` (line ~43) claims GitHub-Actions auto-deploy; per Stale State Protocol, the live evidence (commit_ref null + HEAD mismatch) is the higher truth — do not trust the auto-deploy claim, and NEVER push.
- Second Netlify site `legacy-music-group-preview` (id `4b9b9dd6-346e-4e8c-8365-7ddf83f8d3c0`, last 2026-04-17, no repo) = SUPERSEDED older Next.js artifact; do not touch.
- `publish = "dist"` → `.ai/`, `CLAUDE.md`, `AGENTS.md` repo-only; no public-exclude redirect needed.
- Production QA status: not run by AI-Ops.

## Repo State — 25 Pre-existing Dirty Files (PRESERVED, do NOT clean/stage/commit)

Modified (21):
- PLACEHOLDERS.md, index.html, package-lock.json
- src/App.tsx
- src/components/BookingModal.tsx, CalendlyPicker.tsx, Footer.tsx, Navbar.tsx, Quickbook.tsx
- src/lib/data.ts
- src/pages/BlogPost.tsx, EngineerProfile.tsx, Events.tsx, Gear.tsx, Home.tsx, NeighborhoodPage.tsx, Pricing.tsx, Reviews.tsx, ServicePage.tsx, Services.tsx, Studio.tsx

Untracked (4):
- content/, src/lib/booking-context.ts, src/main.js, src/style.css

These represent in-progress work (booking/Calendly/quickbook + new pages). Onboarding did NOT touch them. Only the new `.ai/`, `AGENTS.md`, and the appended CLAUDE.md Commands/AI-Ops section are staged.

## Risk / Compliance

- Booking / Calendly / lead-capture on live = transactional. No real test bookings/leads against production.
- `BRIEF.md` is master doctrine.

## QA-PENDING

- The 25 dirty files are uncommitted and divergent from live — what is the intended disposition (commit? discard? finish feature)? Owner: David. Observational until decided.
- Confirm whether GH-Action-on-push is actually active (and whether it should be), given live commit_ref is null and HEAD ≠ live. Owner: David. Observational.

## Do Not Touch

- `.env`/secrets.
- The 25 pre-existing dirty files (no clean/stage/commit).
- The `legacy-music-group-preview` Netlify site.
- Any push to `master` / deploy without clear, scoped confirmation from David.

## Proposed Changes / Inbox

- Proposal: Reconcile the existing CLAUDE.md "auto-deploy" claim with live reality (manual/CLI, git divergent). · Reason: prevents an agent from assuming push is safe. · Risk: low (doc only). · Evidence: commit_ref null + HEAD/deploy mismatch. · Owner: David.

## Next Steps Queue

- Decide disposition of the 25 dirty files.
- Decide deploy model going forward (keep manual, or fix true Git-integration).

## Recent Session History

- 2026-06-28: Claude onboarded Legacy Music Group to AI-Ops (handoff-ready) ON TOP of a 25-file dirty tree. Created `.ai/{LOCK,RULES_HEADER,RULES,STATE}.md` + AGENTS pointer; appended Commands + AI-Ops pointer + deploy-model correction to existing CLAUDE.md. Recorded (did not touch) the 25 dirty files. Recorded git-divergent/stale-vs-live deploy reality. Vite site, branch `master`, repo-only `.ai/`.

## Next Agent Directive

Read `.ai/RULES.md` + `.ai/STATE.md` + `BRIEF.md` + `CLAUDE.md` first. Vite/React site on `master`, live at legacy-music-group.netlify.app. git is DIVERGENT/STALE vs live and the tree has 25 uncommitted changes — **NEVER push**, do not clean/commit those files. Deploys are gated (David-run). Booking/Calendly/lead actions are transactional. Don't read `.env`/secrets.

## Emergency / Bypass Notes

- No bypass for deploy/push/booking/production mutations.
- Bypass/YOLO is only an execution accelerator for approved local setup and read-only verification.
- Emergency mode: stop, preserve evidence, smallest reversible action.
