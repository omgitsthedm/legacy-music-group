# Needs approval — unexecuted actions

The preview mission is complete without these actions. None of the commands below was run.

## 1. Replace the existing Netlify presentation and merge master

Consequence: replace the studio presentation on `legacy-music-group.netlify.app` with the reviewed LFNYC site. This does not change `legacymusicgroup.com` or `littlefightnyc.com`. Production remains noindex. The candidate removes automatic production-on-push and automatic paid AI reviews after merge.

After explicit approval of this preview and its replacement scope, run this sequence from the isolated checkout. First compare the branch with the reviewed report; stop if its code changed. The `--match-head-commit` guard prevents merging a different branch head after that check.

```sh
bash <<'LFNYC_APPROVED_RELEASE'
set -euo pipefail
cd '/Users/davidmarsh/Desktop/Project Upgrades/legacy-music-group/rebuild'
git fetch origin audit/2026-10-09 master
LFNYC_REVIEWED_HEAD=$(git rev-parse origin/audit/2026-10-09)
gh pr create --repo omgitsthedm/legacy-music-group --base master --head audit/2026-10-09 --title 'Rebuild Legacy Netlify property for Little Fight NYC' --body-file AUDIT-REPORT.md
gh pr checks audit/2026-10-09 --repo omgitsthedm/legacy-music-group --watch
gh pr merge audit/2026-10-09 --repo omgitsthedm/legacy-music-group --squash --match-head-commit "$LFNYC_REVIEWED_HEAD" --subject 'Release reviewed LFNYC rebuild [skip netlify]'
git fetch origin master
git switch --detach origin/master
export PATH='/Users/davidmarsh/Desktop/Project Upgrades/legacy-music-group/tools/runtime/node-v24.21.0-darwin-arm64/bin:'"$PATH"
npm ci --cache=../.npm-cache
RELEASE_MODE=production LFNYC_APPROVED_SITE_ID=d04515bf-0eb2-45ae-b71b-2a08dc92391a SITE_ORIGIN=https://legacy-music-group.netlify.app ASTRO_TELEMETRY_DISABLED=1 npm run verify
npm run test:browser
netlify deploy --prod --no-build --dir=dist --site=d04515bf-0eb2-45ae-b71b-2a08dc92391a --message='Approved LFNYC replacement of Legacy Netlify presentation' --json
LFNYC_APPROVED_RELEASE
```

This is a future gated sequence, not an instruction to publish now. It requires fresh provider identity, branch, clean-worktree and reviewed-artifact checks immediately before execution. Stop on any failed command. The production build uses its real host for canonical/OG URLs and removes the review footer; verify that generated artifact locally before the final upload. No `--admin`, force push, branch deletion, rollback or credential change is included.

After an approved upload: verify `release.json`, all critical routes and contact behavior on both immutable and published origins; record exact site ID, source revision, artifact hash, deploy ID/URL and provider credit effect. One production deploy is a release unit; do not republish for documentation. Existing live Git CD must be rechecked so a later push cannot silently replace the approved artifact.

## 2. Domain, indexing and search-property changes

Exact queued change: choose the approved public LFNYC destination and redirect map; update the build host allowlist and canonical origin, remove `noindex, nofollow, noarchive` from HTML and `_headers`, generate a sitemap containing only canonical public routes with accurate modification dates, add its URL to robots.txt, then verify and submit through the authorized Google/Bing properties. Choose crawler training permissions independently from search access. IndexNow requires an approved host key and URL set. No made-up DNS record or search-property credential is supplied.

Remaining required input: the owner's intended public domain and migration scope. The actual site has no custom-domain alias. No DNS, domain, account, Search Console, Bing Webmaster Tools, business-profile or production crawler-policy change was made during the mission.

## 3. Marketing publication

Exact queued change: publish the complete three-post static batch in `../social/BATCH.md` with its matching numbered PNGs, after reviewing the factual captions and target accounts. Nothing is posted, scheduled or sent. Publication targets and timing have not been authorized.

## 4. External intake, analytics or field monitoring

The current contact helper needs no secret, account or server and sends nothing. Exact queued change if managed delivery is later wanted: select the receiving mailbox/service, authorize its credentials and retention policy, replace the local draft handoff with verified delivery, test one explicitly approved recipient, and update the privacy notice. Do not claim a message was sent before a real delivery receipt.

The public PageSpeed endpoint returned HTTP 429 (shared quota unavailable). Installed Lighthouse supplied reproducible lab measurements instead. Field LCP/INP/CLS and business results require approved production traffic and first-party measurement. No analytics account, paid monitoring service, quota purchase or recurring charge was created.
