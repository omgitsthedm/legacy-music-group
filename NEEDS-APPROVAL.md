# Release record and remaining external actions

The owner approved updating and publishing this project, then clarified that real and prospective clients retain their own brands. Legacy Music Group is the client identity. The corrected source merge and production release are complete; no further approval or repeated upload is needed.

## Completed merge and live release

The following release commands were executed against the verified candidate. This is an execution record, not a pending request or an instruction to redeploy unchanged files.

```sh
gh pr merge 17 --repo omgitsthedm/legacy-music-group --squash --match-head-commit 12f30ff5902d692408f44b77f46997c6e75e4762 --subject 'Release Legacy studio modernization [skip netlify]'
RELEASE_MODE=production APPROVED_SITE_ID=d04515bf-0eb2-45ae-b71b-2a08dc92391a SITE_ORIGIN=https://legacy-music-group.netlify.app ASTRO_TELEMETRY_DISABLED=1 npm run verify
npm run test:browser
netlify deploy --prod --no-build --dir=dist --site=d04515bf-0eb2-45ae-b71b-2a08dc92391a --message='Approved Legacy Music Group modernization; client identity preserved' --json
```

Merged source: `d58e09eff71904941b42c5a429ff08170a4046de`. Published production: `6ac8b098350fdec4e6b7db41`. Exact site ID: `d04515bf-0eb2-45ae-b71b-2a08dc92391a`. No LFNYC rebrand was deployed to production.

The previously shared review alias was corrected with the same verified production artifact, without a second production deploy:

```sh
netlify deploy --no-build --dir=dist --alias=lfnyc-audit-2026-10-09 --site=d04515bf-0eb2-45ae-b71b-2a08dc92391a --message='Correct existing review link to verified Legacy production artifact' --json
```

Review deploy: `6ac8b2255315a423c592a924`; provider context `branch-deploy`, not published production. Its historical URL label does not describe the current brand. It now serves Legacy. Its release marker describes the identical production artifact; Netlify's record establishes that the review deployment is unpromoted.

## Separate domain and indexing migration

Observed remedy: verified the Netlify provider has no custom-domain aliases, opened the existing official studio site and rendered its booking selectors, and preserved that destination in every booking handoff. This duplicate Netlify property remains noindex.

Remaining gate: a separate authorized migration of `legacymusicgroup.com` and its WordPress/Bookly booking system. Exact queued change: establish the intended public host and booking continuity plan, configure its verified domain mapping and redirects, change canonical URLs to that destination, remove noindex only there, emit the real indexable sitemap, and submit the authorized search property. No DNS records or account credentials are guessed. No such migration was part of this Netlify release.

## Conflicting studio payment copy

Observed remedy: opened both the current booking instructions and recording terms. Booking says payment in full; terms describe a 50% deposit. The rebuilt Netlify site repeats neither percentage and links the current terms plus direct studio contact.

Remaining blocker: the studio's actual payment policy is not established by the conflicting sources. Exact queued edit: make the payment step on `https://legacymusicgroup.com/service-plus/` and the Booking/Payment sections of `https://legacymusicgroup.com/terms-and-conditions/` state the same owner-confirmed policy, then verify the Bookly checkout configuration against it. No WordPress or payment-system changes were made.

## Marketing publication and optional services

The complete static batch is in `social/BATCH.md` in the delivery folder. All copy and images are ready together; none has been posted, scheduled or sent. Publication needs the intended accounts and timing. Analytics, managed intake, paid monitoring, billing and auto-recharge were not added. No production release work remains blocked by these separate actions.
