# LFNYC candidate source of truth — 2026-10-09

## Exact identity

- Candidate checkout: `/Users/davidmarsh/Desktop/Project Upgrades/legacy-music-group/rebuild`.
- Preserved canonical checkout: `/Users/davidmarsh/Code/LiFi NYC/Clients/Legacy Music Group/legacy-music-group`.
- GitHub: `https://github.com/omgitsthedm/legacy-music-group`; base `b04c5e3e2a64e0ef0f7faf98ec451c5d45af61ef`; branch `audit/2026-10-09`; production branch `master`.
- Netlify property: `legacy-music-group`, site ID `d04515bf-0eb2-45ae-b71b-2a08dc92391a`.
- Published deploy observed at audit start: `6ac795afb6dbbe1ac131f88c`. Old September release claims in archived docs are stale.
- Existing public host: `https://legacy-music-group.netlify.app`. No custom-domain aliases were returned by the provider.
- Candidate alias: `https://lfnyc-audit-2026-10-09--legacy-music-group.netlify.app`.
- The candidate does not modify `legacymusicgroup.com` or the canonical LFNYC site.

## Branch behavior

Static Astro 7.3.8, pinned Node 24.21.0, compatible TypeScript 6.0.3. Thirteen HTML documents. `dist/` is the complete publish tree. Release marker hashes the publish tree excluding itself and records its Git source revision. No functions, database or browser analytics.

The old production push workflow is archived in this candidate. The new workflow has manual draft deployment only, with the exact site ID. The unchanged master branch still retains its existing workflow until a future approved merge. No paid AI workflow runs automatically on this branch.

Preview builds use the explicit alias. A production-mode build is rejected unless `RELEASE_MODE=production`, the exact `LFNYC_APPROVED_SITE_ID`, and the existing production `SITE_ORIGIN` are supplied together. This preparation does not authorize its use. Noindex and the empty sitemap remain until a separately approved indexing plan exists.

## Facts and assets

Brand Kit read in full before design. Supplied exact tugboat, fonts, palette and four business images are retained. LFNYC owns the business identity; studio people, rates, Dallas claims and refund policies are not reassigned to LFNYC.

Email `hello@littlefightnyc.com` is in the brand source; phone `(646) 360-0318` is verified on LFNYC's public case-study pages. Three real work examples are backed by those case studies and fresh captures of the named client sites. No traffic, revenue, ranking or conversion results are invented.

## Evidence and scope

`../evidence/` contains baseline/after audits, browser results, full-read inventories and deployment evidence. `../screenshots/` and the marketing folders contain the requested review package. Provider private settings are permission-restricted outside this public repository. `AUDIT-REPORT.md` records the final preview ID, source/hash chain and measured results.
