# Legacy Music Group

A static studio website for Legacy Music Group in Deep Ellum, Dallas. The client keeps its own name, logo, studio photography, services and contact details. Little Fight NYC appears only as the agency footer credit.

## Run and verify

Use Node 24.21.0 from `.nvmrc`, then `npm ci`.

```sh
npm run dev          # 127.0.0.1:52761
npm run verify       # lint, types, build, ten unit/artifact tests
npm run preview      # strict artifact server, port 52762
npm run test:browser # installed Google Chrome
npm audit
```

Playwright owns its strict-port local server. Use `QA_BASE_URL` for hosted checks and `QA_SCREENSHOTS` for screenshots. Preserve other projects’ browser profiles and servers.

## Architecture

Astro 7.3.8 produces eighteen complete HTML documents. TypeScript 6.0.3 is pinned to the supported checker/linter range. Inter and DM Serif Display are hosted locally with their licenses. Actual photographs from Legacy’s published website use responsive, content-hashed variants.

Business facts and service content live in `src/data/site.ts`; shared metadata and navigation in `src/layouts/Layout.astro`; styling in `src/styles/global.css`; the local email-draft helper in `src/lib/contact.ts`. Explicit redirects and real 404 behavior are in `public/_redirects`.

Booking and payment stay on `https://legacymusicgroup.com/service-plus/`. The app does not reserve sessions, send email, collect forms, track visitors, embed third-party scripts or operate a database. Contact prepares an unsent email to `info@legacymusicgroup.com`; ordinary phone and email links work independently.

## Exact host and release path

GitHub: `omgitsthedm/legacy-music-group`, production branch `master`. Exact Netlify site: `d04515bf-0eb2-45ae-b71b-2a08dc92391a`. Production: `https://legacy-music-group.netlify.app`. Publish `dist/` only.

Git pushes run quality checks. Netlify Git builds are ignored in `netlify.toml`; hosting releases explicitly upload locally verified artifacts. The manual GitHub workflow creates drafts only. Documentation changes do not need another deploy.

After scoped release authorization:

```sh
RELEASE_MODE=production APPROVED_SITE_ID=d04515bf-0eb2-45ae-b71b-2a08dc92391a SITE_ORIGIN=https://legacy-music-group.netlify.app ASTRO_TELEMETRY_DISABLED=1 npm run verify
npm run test:browser
netlify deploy --prod --no-build --dir=dist --site=d04515bf-0eb2-45ae-b71b-2a08dc92391a --message='Approved Legacy Music Group modernization' --json
```

Default builds use the Legacy audit origin and a review label. `release.json` records source revision, branch, site ID, mode and the publish-tree SHA-256 excluding itself. Verify both immutable and primary hosts after release.

The duplicate Netlify property remains noindex with an empty sitemap. The separate `legacymusicgroup.com` domain and its WordPress booking system are unchanged. A domain/search migration requires its own defined scope.

## Source custody

Work in `/Users/davidmarsh/Desktop/Project Upgrades/legacy-music-group/rebuild`. Preserve the dirty canonical client checkout. Historical React source and the superseded LFNYC direction are in `archive/`, never `dist/`. The owner corrected the original rebrand before any LFNYC production upload.

See AUDIT-PLAN.md, AUDIT-REPORT.md, SOURCE_OF_TRUTH.md and DECISIONS.md for scope and evidence. The complete unpublished marketing package is one directory above this checkout.
