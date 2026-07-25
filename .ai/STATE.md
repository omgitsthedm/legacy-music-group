# Legacy Music Group AI-Ops State

## Identity

- Project Code: LFNYC-LMG
- Name: Legacy Music Group
- Tier: Tier 2 · Risk: Medium (Vite/React site + booking/lead flow)
- Active checkout: `/Users/davidmarsh/Code/LiFi NYC/Clients/Legacy Music Group/legacy-music-group`
- Git remote: `https://github.com/omgitsthedm/legacy-music-group.git`
- Default branch: `master`
- Release branch: `chore/plain-language-live-confirmation-20260711`

## Current Stamp

- Updated: 2026-07-24
- Updated By: Codex
- Basis: David approved the complete redesign/audit worktree for commit, push, and production deployment.
- Rules Version: `2026-06-27-aiops-foundation-v1`
- State confidence: High; repo identity, Netlify linkage, deploy result, live routes, assets, and release gates were verified during this release.

## Current Live Truth

- Live URL: `https://legacy-music-group.netlify.app`
- Netlify project: `legacy-music-group`
- Netlify site ID: `d04515bf-0eb2-45ae-b71b-2a08dc92391a`
- Production deploy ID: `6a64401a836413008772eb1e`
- Deploy state/context: `ready` / `production`
- Published: `2026-07-25T04:48:47.287Z`
- Deploy permalink: `https://6a64401a836413008772eb1e--legacy-music-group.netlify.app`
- Deploy model: Netlify CLI production deploy from the locally verified `dist` artifact.
- Deploy summary: 65 files uploaded, 24 generated pages, 41 assets, one redirect rule, seven header rules, and one Netlify function.
- The superseded `legacy-music-group-preview` project is not part of this release and must not be modified.

## Released Direction

- Visual direction: `Control Room After Dark`.
- Brand accent: original burnished gold `#E8A33D` with `#D4873C` hover/depth.
- Gold artwork:
  - `/images/control-room-signal-gold.webp`
  - `/images/legacy-social-card-gold.jpg`
- Favicon and app-icon set:
  - `/favicon.ico`
  - `/favicon.svg`
  - `/favicon-32.png`
  - `/apple-touch-icon.png`
  - `/icon-192.png`
  - `/icon-512.png`
- The hero and scroll-reveal system now keeps content visible for reduced-motion users and when animation or observer initialization is unavailable.
- React Router was migrated from vulnerable `7.18.1` packages to `react-router@8.3.0`; `react-router-dom` was removed and React/React DOM were raised to the supported `19.2.8` baseline.

## Release Validation

- `npm run lint`: pass
- `npm run build`: pass; metadata-first HTML generated for 22 routes plus 404
- `npm audit --audit-level=high`: pass; zero vulnerabilities
- `git diff --check`: pass
- Local responsive browser crawl: 23/23 routes pass, zero broken images, zero horizontal overflow, zero runtime console errors
- Production responsive browser crawl: 23/23 routes pass, zero broken images, zero horizontal overflow, zero runtime console errors
- Production asset checks: favicon set, manifest, robots, sitemap, `llms.txt`, hero artwork, and social card all return HTTP 200
- Production response includes HSTS, CSP-adjacent permissions hardening, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and strict referrer policy
- Booking modal open/close and client-side route navigation verified in a real browser
- Earlier desktop and mobile Lighthouse passes scored 100 for Accessibility, Best Practices, and SEO

## Known Follow-ups

- Replace branded engineer slates with owner-approved real engineer photography when supplied.
- Confirm and connect the final real Calendly event URI if the current production integration is still a placeholder.
- Do not submit real production bookings or lead forms during automated QA.

## Safety Boundaries

- Never expose or edit `.env` files, credentials, tokens, keychains, or production customer data.
- Do not modify the superseded `legacy-music-group-preview` Netlify project.
- Future pushes and production deploys require a new clear user approval.
- Booking, Calendly, and lead-capture actions are transactional; test without creating real appointments or leads.

## Next Agent Directive

Read `.ai/RULES.md`, this file, `BRIEF.md`, and `CLAUDE.md` before changing the site. Treat the Code checkout and Netlify project/site ID above as the current source of truth, but re-verify time-sensitive Git and deploy state. Preserve the released `Control Room After Dark` gold direction and the image-visibility fallbacks.
