# Little Fight NYC — Legacy property review candidate

A full LFNYC service-site rebuild on `audit/2026-10-09`. This branch is a review candidate, not the published studio website.

- Static Astro 7, TypeScript 6, local Oswald/Barlow/JetBrains Mono and supplied LFNYC brand assets.
- Thirteen HTML documents; four service detail pages, verified work, FAQs, an email-draft helper, legal information and a useful 404.
- No React runtime, database, server functions, analytics, consent popup or form collection.
- Contact creates an unsent local draft. The visitor opens an email application and sends it there. Normal email, phone and text links work without the helper.

## Run and verify

Use Node `24.21.0` from `.nvmrc` (Node 22.12+ also supported by Astro). Install with `npm ci`.

```sh
npm run dev          # 127.0.0.1:52761
npm run verify       # lint, Astro/TypeScript, build, unit + artifact tests
npm run preview      # strict local artifact server: 127.0.0.1:52762
npm run test:browser # installed Google Chrome; no bundled browser download
npm audit
```

Stop a running local preview before `test:browser`; Playwright owns its own strict-port server. For hosted checks set `QA_BASE_URL` to the exact approved draft. `QA_SCREENSHOTS` chooses the screenshot directory.

## Source and deploy identity

GitHub: `omgitsthedm/legacy-music-group`; default branch: `master`. Exact Netlify site: `d04515bf-0eb2-45ae-b71b-2a08dc92391a`; publish directory: `dist/`.

`npm run build` writes `release.json` with Git revision, site ID and a SHA-256 of every other publish file. `scripts/serve.mjs` is a local QA server only; Netlify serves the actual static production artifact.

This branch has no automatic production deploy. Quality checks run on audit branch changes and pull requests. Manual draft upload is gated to this branch and exact site. Historical paid AI workflows and studio source are preserved under `archive/legacy-2026-10-09/`, outside `dist/`.

Draft command, after checks:

```sh
netlify deploy --no-build --dir=dist --site=d04515bf-0eb2-45ae-b71b-2a08dc92391a --alias=lfnyc-audit-2026-10-09 --message="LFNYC reviewed candidate"
```

The shareable preview is intentionally `noindex`; that does not make it private. The sitemap is empty. No search submission, DNS change or production publish is authorized. See `NEEDS-APPROVAL.md` for the prepared, unexecuted future release steps.

## Editing

Content and verified contacts: `src/data/site.ts`. Shared head, entity JSON-LD, header and footer: `src/layouts/Layout.astro`. Styling: `src/styles/global.css` plus supplied `tokens.css`. Contact logic: `src/lib/contact.ts`. Keep scripts external to satisfy the strict CSP. Do not replace client proof with illustrative imagery.

Read `AUDIT-PLAN.md`, `AUDIT-REPORT.md`, `DECISIONS.md` and `SOURCE_OF_TRUTH.md` for this review. Historical documents inside `archive/` are evidence, not instructions for the candidate.
