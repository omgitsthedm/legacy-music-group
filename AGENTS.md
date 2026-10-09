# Legacy Music Group operating rules

- Client and prospective-client projects keep their own brand. Only abstract projects use LFNYC branding. Legacy is a real recording studio; never substitute LFNYC business services, logos, contacts or entities.
- Working checkout: `/Users/davidmarsh/Desktop/Project Upgrades/legacy-music-group/rebuild`; preserve the dirty canonical checkout and all unrelated projects.
- GitHub: `omgitsthedm/legacy-music-group`, production branch `master`, audit branch `audit/2026-10-09`.
- Exact Netlify site: `d04515bf-0eb2-45ae-b71b-2a08dc92391a`; publish `dist/` only and always pass the exact `--site`.
- The owner approved this modernization’s merge and live release on October 9, then corrected its brand to Legacy. That authority does not include changing the separate custom domain, DNS, billing, WordPress booking system or publishing marketing.
- Brand contract: original client `archive/legacy-2026-10-09/BRIEF.md`, current Legacy logo and published studio photos, carbon/ivory/brass, Inter/DM Serif Display. LFNYC appears only as a small agency footer credit.
- Business facts and booking: `src/data/site.ts`, verified official sources in the evidence folder. Never invent people, ratings, discounts, payment terms, turnaround or outcomes. The live calendar owns engineer availability.
- Every route must render useful HTML without JavaScript. This duplicate Netlify property remains noindex. Preserve strict CSP and the honest unsent contact draft; email goes only to info@legacymusicgroup.com.
- Use ports 52761/52762/52763 and installed Google Chrome with `channel: chrome`. No global installs or shared configuration.
- Run `npm run verify`, `npm run test:browser` and `npm audit` after substantive changes. Never submit a real booking, payment or test email.
- Production builds require `RELEASE_MODE=production`, `APPROVED_SITE_ID=d04515bf-0eb2-45ae-b71b-2a08dc92391a` and `SITE_ORIGIN=https://legacy-music-group.netlify.app` together. Preview builds default to the Legacy audit alias.
- Git pushes run quality checks. Netlify Git builds are ignored; verified local artifact uploads are the release path. Do not republish documentation-only changes.
- Never publish archive/, tools, evidence, credentials, dependencies or draft marketing. Superseded LFNYC material is historical and must not be restored.
