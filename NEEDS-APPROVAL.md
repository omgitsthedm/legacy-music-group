# Release scope and remaining external actions

The owner approved updating and publishing this project, then clarified that real and prospective clients retain their own brands. The approved release is Legacy Music Group on the exact existing Netlify site, not an LFNYC rebrand. No further approval is needed for this corrected merge and production upload.

## Approved release sequence

After local and CI checks, merge the corrected audit branch with an exact-head guard, build the merged source, verify it locally, and upload once:

```sh
gh pr merge audit/2026-10-09 --repo omgitsthedm/legacy-music-group --squash --match-head-commit '<verified corrected branch SHA>' --subject 'Release Legacy studio modernization [skip netlify]'
RELEASE_MODE=production APPROVED_SITE_ID=d04515bf-0eb2-45ae-b71b-2a08dc92391a SITE_ORIGIN=https://legacy-music-group.netlify.app ASTRO_TELEMETRY_DISABLED=1 npm run verify
npm run test:browser
netlify deploy --prod --no-build --dir=dist --site=d04515bf-0eb2-45ae-b71b-2a08dc92391a --message='Approved Legacy Music Group modernization' --json
```

This section becomes an execution record once the release is verified. Do not repeat a completed upload for documentation changes.

## Separate domain and indexing migration

No change to `legacymusicgroup.com`, DNS, WordPress or Bookly is included. This duplicate Netlify property stays noindex. A future cutover needs a defined host and booking continuity plan, validated canonical redirects, removal of noindex only on the intended public destination, a real sitemap and authorized search-property submission. No DNS values or credentials were invented.

## Conflicting studio payment copy

Observed remedy: opened both the live booking page and recording terms. The booking instructions say payment in full; the terms describe a 50% deposit. The rebuilt Netlify site repeats neither figure and links the current terms plus direct studio contact.

Remaining blocker: the studio must establish its actual policy before changing its separate WordPress pages. Exact queued edit: make the payment step on `https://legacymusicgroup.com/service-plus/` and the Booking/Payment sections of `https://legacymusicgroup.com/terms-and-conditions/` state the same owner-confirmed policy, then verify checkout configuration against it. No WordPress or payment-system edits were attempted without that policy and scope.

## Marketing publication and optional services

The complete static social batch is delivered in `../social/BATCH.md`. Nothing is posted, scheduled or sent. Publishing requires the intended accounts and timing. No analytics, managed intake, paid monitoring, billing or auto-recharge changes are part of this release. Field performance and business outcomes are unmeasured; lab tests do not stand in for them.
