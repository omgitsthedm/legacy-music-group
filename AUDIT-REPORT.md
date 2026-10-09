# LFNYC rebuild audit report — 2026-10-09

## Result

**All five phases are complete.** The Legacy Netlify project has a fully rebuilt Little Fight NYC review candidate, a pushed audit branch, a verified hosted draft, and the complete local marketing package. The existing production release and dirty canonical checkout are preserved.

The old application was the wrong product for this brief: contradictory studio claims, client-only content, unnecessary runtime weight and stale operating notes. It was replaced with a focused static service site. The new candidate is ready for owner review. It is not an indexed public launch.

**Preview:** [https://lfnyc-audit-2026-10-09--legacy-music-group.netlify.app](https://lfnyc-audit-2026-10-09--legacy-music-group.netlify.app)  
**Branch:** [audit/2026-10-09](https://github.com/omgitsthedm/legacy-music-group/tree/audit/2026-10-09)  
**Compare:** [master → audit branch](https://github.com/omgitsthedm/legacy-music-group/compare/master...audit/2026-10-09)  
**Package:** `/Users/davidmarsh/Desktop/Project Upgrades/legacy-music-group/`

## Source, artifact and host proof

- Date command at start: `Fri Oct 9 00:24:30 MST 2026`.
- Canonical repo was resolved through the recovery index and fleet manifest, then its Git root verified. It retained the same 15 existing modified/untracked status entries at final inspection. No file in that checkout was edited by this mission.
- Work happened only in the isolated output checkout: `/Users/davidmarsh/Desktop/Project Upgrades/legacy-music-group/rebuild`.
- The full-read inventory covers 85 original text files and 193 unique brand-source files; 172 brand images were inspected on five contact sheets. Generated/vendor code was not treated as authored source. Archive and complete evidence remain outside `dist/`.
- Exact Netlify site: `d04515bf-0eb2-45ae-b71b-2a08dc92391a` (`legacy-music-group`). No ambient `.netlify` link was trusted.
- Application source: `3dcdd70f4ad324ca8b87f9e528dea34c72ff4ecf`.
- Publish-tree SHA-256, excluding `release.json`: `93c4c96162299bf8b0f2101860391cf14c956be2fe19ecaa85868286775d7cb2`.
- Draft ID: `6ac8a1e332aee7dc3ba22f9c`; provider state `ready`, context `branch-deploy` for the CLI alias, `published_at: null`, no functions.
- [Immutable draft](https://6ac8a1e332aee7dc3ba22f9c--legacy-music-group.netlify.app) and alias both return the same release marker. Every one of the 77 publicly served files matches the local artifact byte for byte. `_headers` and `_redirects` are deployment directives, checked through their behavior rather than as public files.
- Production remained `6ac795afb6dbbe1ac131f88c` before and after the upload. No master merge, production publish, custom domain, DNS, account or billing change occurred.
- One successful draft upload. The rejected `--context`/`--no-build` invocation uploaded nothing. Drafts have no deployment-credit charge under the applicable policy; bandwidth/requests can still consume credits. No account credit total is claimed.
- Later test/documentation commits do not change the deployed application. They are intentionally not redeployed.

## Before and after scores

These are explicit engineering/design judgments against the LFNYC brief, not Lighthouse scores or claims of business growth. Overall: **3.5/10 → 8.8/10**. Search scores assess readiness; indexation is deliberately gated.

| Area | Before /10 | After /10 | Final basis |
|---|---:|---:|---|
| Stack & dependencies | 4 | 9 | Pinned Astro 7.3.8, compatible TypeScript 6.0.3 and Node 24.21.0; audit is clean. |
| Architecture & quality | 4 | 9 | Focused static routes, centralized facts, shared layout, meaningful unit/artifact/browser checks. |
| UI & accessibility | 4 | 9 | Actual Brand Kit, 16px floor, 44px+ targets, focus states, reduced motion and narrow-screen fixes. |
| User experience | 4 | 9 | Direct service choices, genuine work examples, clear unsent email draft, useful fallbacks and 404. |
| Performance | 5 | 9 | 98 mobile lab score, 1.6s lab LCP, 304 decoded homepage script bytes, responsive images. |
| SEO readiness | 3 | 8 | Complete HTML, unique metadata/canonicals, internal links and real 404; deliberately noindex. |
| AI-search readiness | 3 | 8 | Explicit entities and visible answers; no fake rich-result or llms.txt promises; deliberately noindex. |
| Content & context | 2 | 9 | Conflicting studio claims retired; verified LFNYC facts and portfolio sources; current instructions. |
| Security & operations | 5 | 9 | Strict CSP, no third-party scripts or data collection, exact-site draft, CI and artifact recovery ZIP. |
| LFNYC brand | 1 | 9 | Supplied tugboat, palette, fonts, voice, service hierarchy, favicon, OG and branded graphics. |

## What changed

| Before | After |
|---|---|
| React/Vite/GSAP/Tailwind presentation; unused scaffolding | Static Astro HTML and two small progressive-enhancement modules; previous source preserved in `archive/legacy-2026-10-09/` |
| Studio rates, gear, people, policy and location claims | LFNYC websites, tech support, free consulting and owned software; no reassigned studio testimonials or fabricated business results |
| Gold, Inter/DM Serif and studio imagery | Midnight `#050507`, orange `#F97316`, blue support signal, supplied tugboat, Oswald/Barlow/JetBrains Mono and LFNYC business imagery |
| Scroll-gated content and pinned presentation | Full first paint, ordinary scrolling, small CSS feedback, reduced-motion support |
| 10px visible text and cramped narrow layouts | 16px minimum, readable body copy, large controls, checked 320–1440px layouts and 200% magnification |
| Dead audio controls, mismatched engineer identifiers and ineffective preview consent UI | Studio-specific interactions retired from the active build; no tracking banner; tested menu, FAQs and contact flow |
| Ambiguous handoff behavior | Direct email/phone/text plus a local brief that prepares an unsent email, with review/copy/error states and no-JavaScript fallback |
| Loading-only HTML body | Thirteen complete HTML documents: home, service overview, four services, work, FAQ, contact, privacy, terms, studio handoff and 404 |
| Client-injected entities and nonexistent site search | Static Organization, WebSite, WebPage, Service and BreadcrumbList data that matches visible content; no fake SearchAction, ratings or unsupported rich-result claims |
| Original images and fonts requested by unversioned paths | Responsive WebP variants and hashed font URLs, correct intrinsic dimensions, preload for critical fonts, immutable hashed-asset caching |
| Competing route policies | Real static routes, real 404 and temporary, clearly labeled studio handoffs; no permanent migration assumed |
| Broad historical integration permissions | Self-only CSP with external scripts, no unsafe-inline/eval, anti-framing, nosniff, referrer and permissions policies |
| Floating deploy CLI, ambient site secret, incomplete QA | Exact site ID, pinned tools/action SHAs, Node 24, quality workflow and manual draft-only deploy on this candidate branch |
| Stale README, AGENTS, CLAUDE and release truth | Active instructions rewritten for the current architecture and preview boundary; prior instructions preserved as history |
| No complete handoff batch | Before/after and flow screenshots, four branded graphics, three matching social images/captions, one measured case study, links, decisions and this report |

Three genuine LFNYC projects anchor the work page: The Tarot Hotline, Hair By Rachel and CC Films. Their public LFNYC case-study pages and current client sites were opened before using them. Captures are dated October 9. The supplied shop images are brand imagery, not fabricated client proof.

## Measured results

| Measure | Before | Hosted LFNYC preview |
|---|---:|---:|
| Lighthouse mobile performance | 87 | 98 |
| Lighthouse accessibility | 100 | 100 |
| Lighthouse best practices | 100 | 100 |
| Lighthouse SEO | 69 | 69 |
| Lab LCP | 3.6 s | 1.6 s |
| Lab CLS | 0.000095 (displayed 0) | 0 |
| Lab TBT | 8 ms (displayed 10 ms) | 0 ms |
| Total homepage transfer | 908,992 bytes | 260,781 bytes |
| Decoded homepage JavaScript | 460,757 bytes | 304 bytes |
| npm-audit vulnerable packages | 13 (10 high, 3 moderate) | 0 |
| Minimum observed visible type | 10 px | 16 px |
| Automated axe violations | 0 across 12 baseline page/device scans | 0 across 24 preview page/device scans |

**71.3% less homepage transfer; 99.9% less decoded homepage JavaScript.** The hosted page requests no third-party resources in the measured desktop and mobile sessions. The contact page loads its additional small draft-helper module only there.

Method: Lighthouse 13.5.0, installed Google Chrome, default simulated mobile profile, one hosted sample before and one after on October 9. The same test settings were used; real visits vary. A separate local smoke test scored 99. The dependency baseline is the original cloned lockfile; the browser baseline is the currently published October release, which differed from the clone. The dependency graph is not claimed to have fewer total packages: the gain is a clean supported build and far less browser runtime.

The unchanged SEO score is intentional: noindex is the failing Lighthouse SEO gate. Removing it to inflate a score would violate the review boundary. Neither TBT nor these lab timings prove real-user INP. No traffic, leads, revenue, ranking, conversion or AI-citation result is invented.

## Current search and AI-search decisions

- Complete server-built HTML, descriptive titles, visible answers, stable internal links and truthful entity data are the foundation. No special “AI schema” was invented. Google's current guidance does not require a separate AI optimization layer, and says llms.txt is not a Google ranking shortcut. [Google AI guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- Visible FAQs answer scope, service area, ownership, pricing process and contact questions. FAQ rich results were retired in May 2026; HowTo rich results were retired in 2023. Neither is sold as a search feature. [Google updates](https://developers.google.com/search/updates)
- The maintained `llms.txt` is an optional factual guide. It duplicates no unsupported claims and does not override robots directives. Search eligibility and training permission are separate: OAI-SearchBot/GPTBot, Perplexity search/user fetches, Claude-SearchBot/Claude-User/ClaudeBot and Google-Extended have different purposes. [OpenAI](https://developers.openai.com/api/docs/bots), [Perplexity](https://docs.perplexity.ai/guides/bots), [Anthropic](https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), [Google crawlers](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers)
- Bing's rendered guidelines confirm that crawlability, canonical consolidation, clear entities and independently verifiable content support both search and grounding. Noindex excludes a preview from those experiences; noarchive restricts grounding use. Future production discovery can use a real sitemap and authorized IndexNow submissions. [Bing guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)
- Bing's first-party AI visibility reporting can later measure actual citations; citation share is observational, not a quality score. No preview “AI visibility score” is claimed here. [Bing AI reporting](https://blogs.bing.com/search/2026/6/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare/)
- The field targets remain LCP ≤2.5s, INP ≤200ms and CLS ≤0.1 at the 75th percentile. The lab result is not a field pass. [Core Web Vitals](https://web.dev/articles/vitals)

The preview deliberately allows crawlers to see the noindex headers, uses an empty sitemap and does not submit URLs to search engines. It is shareable, not access-controlled. The site has public brand/service material and no private client data.

## Validation and remedies

- **Passed locally on Node 24.21.0:** lint, Astro/TypeScript check (zero diagnostics), 13-page build, eight unit/artifact tests, npm audit (zero vulnerabilities), Git diff whitespace check.
- **Passed in installed Chrome locally and on the hosted preview:** 13 browser tests. All 12 normal routes at 320, 390, 768, 1024 and 1440 pixels; 24 axe scans; no overflow, broken assets or console errors; menu keyboard/Escape behavior; FAQ disclosure; contact validation and unsent draft; clipboard-denied fallback; no-JavaScript content/contact; real 404; old-route handoff; preview headers; 200% magnification.
- Skip-link focus and successful copy feedback were additionally checked. Clipboard success used a browser-local mock, so the user's actual clipboard was not changed. No email app was opened and no test message was sent.
- **Passed GitHub CI for the application source:** [run 37903235830](https://github.com/omgitsthedm/legacy-music-group/actions/runs/37903235830), including a fresh install, audit, full verify and Chrome suite on the pinned runtime.
- **Passed CI after the stronger hosted-image check:** [run 37904410273](https://github.com/omgitsthedm/legacy-music-group/actions/runs/37904410273), source `1aaa8d08bfedbf9231e5bf5b3b61f22bccaeeccd`. This test-only commit does not alter the hosted artifact.
- **Passed artifact identity:** 77/77 served file hashes match; immutable release marker matches; published production deploy unchanged. `evidence/release-artifact.zip` is a recoverable copy of all 79 deploy files, including Netlify directives.
- **Secret check:** four high-signal credential patterns scanned 117 candidate/archive text files and found no matches. This is a bounded check, not a claim of exhaustive secret detection. No secret was added to source or deployed output. Private provider evidence stays outside the public repo with restricted permissions.
- Initial port collision: rejected the wrong local response, moved to verified free ports 52761/52762/52763, and used a strict project-bound artifact server. Other projects' servers were left alone.
- Initial CSP failure: Astro inlined the small scripts; disabled asset inlining and verified that both behavior modules load as permitted same-origin files. No unsafe-inline bypass.
- Narrow-screen failure: corrected the 320px header and headline sizing, then passed all five widths.
- Hosted image-check race: image dimensions appeared before download completion. The check now awaits both completion and valid dimensions; the entire hosted suite passed against the unchanged artifact. No extra deployment was made for the test fix.
- Tooling/research workarounds: mixed old/new npm peers resolved with a fresh isolated install; TypeScript 7 was rejected in favor of the checker-supported TypeScript 6; Bing content was retrieved through rendered Chrome; Anthropic's current official privacy URL was opened after the old endpoint failed.
- PageSpeed's public API returned HTTP 429 with unavailable shared quota. Installed Lighthouse completed the lab comparison. Field INP and business outcomes remain unmeasured until an approved public rollout has real traffic.

No database, authentication or server/edge query layer is needed by this static preview. Backup/recovery is the pushed source history, preserved prior application and verified artifact ZIP. CI and release/browser checks provide preview health evidence; no paid monitoring or analytics account was created.

## Delivered package

- `screenshots/`: 17 before captures and 33 hosted-preview captures (50 total), plus 26 retained local captures. Before desktop/mobile key pages include old menu/FAQ flows; `after-preview/` contains every normal page at desktop/mobile, open-menu/open-FAQ/email-ready/404 flows. `after-local/` retains local review evidence.
- `graphics/`: desktop comparison, mobile comparison, ten-area scorecard and LFNYC brand card.
- `social/`: one complete three-post batch with matching 1080×1350 PNGs, captions, alt text and measurement context. Nothing posted or scheduled.
- `case-study/CASE-STUDY.md`: problem, findings, implementation, actual numbers and measurement boundaries.
- `links/LINKS.md`: preview, immutable draft, GitHub branch/compare, application source, CI, report and artifact links.
- `AUDIT-REPORT.md` and `DECISIONS.md`: copied into the package root. Full implementation remains in `rebuild/`; audit evidence and reproducible tools remain in their own folders.

## Still open

Only the deliberately gated actions remain: owner review and production replacement, master merge, intended public domain/indexing plan, marketing publication and any future external intake/analytics/field measurement. The remedies and exact future release sequence are prepared below. There is no unresolved preview implementation blocker.

## Complete NEEDS-APPROVAL.md

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
