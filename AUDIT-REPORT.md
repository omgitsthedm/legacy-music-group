# Legacy Music Group — final audit and release report

October 9, 2026. All five phases are complete for the corrected client brief. The rebuilt Legacy Music Group site is live at [https://legacy-music-group.netlify.app](https://legacy-music-group.netlify.app). The owner's later “push it live” instruction authorized production; the later brand correction superseded the LFNYC rebrand. Real and prospective clients retain their own brands. Only abstract projects use Little Fight NYC branding.

## Verdict and scores

The old build shipped a client-rendered loading shell, dead controls, contradictory studio claims, small text and a stale dependency tree. The replacement is a static studio website with verified client identity, usable booking and contact handoffs, current compatible tooling and a tested release pipeline.

Engineering/design assessment: **4.0/10 → 8.8/10**. These are judgments, not measured growth. The brand baseline is 6 because the original site already represented Legacy; the historical LFNYC-alignment score is superseded by the corrected brief. SEO and AI-search scores assess technical readiness, not indexation on this intentionally noindex duplicate host.

| Area | Before /10 | After /10 |
|---|---:|---:|
| Stack & dependencies | 4 | 9 |
| Architecture & quality | 4 | 9 |
| UI & accessibility | 4 | 9 |
| User experience | 4 | 9 |
| Performance | 5 | 9 |
| SEO readiness | 3 | 8 |
| AI-search readiness | 3 | 8 |
| Content & context | 2 | 9 |
| Security & operations | 5 | 9 |
| Client brand | 6 | 9 |

## What changed

| Area | Before | After |
|---|---|---|
| Identity and design | Legacy text treatment, generic/placeholder media, small labels; superseded LFNYC review direction | Actual Legacy logo and published studio photographs, carbon/ivory/brass, local Inter and DM Serif Display, readable controls; LFNYC only in the agency footer credit |
| Stack | React/GSAP presentation, unused scaffolding and older dependency graph | Astro 7.3.8 static output; Node 24.21.0; TypeScript 6.0.3; ESLint 10; exact lockfile; no client framework runtime |
| Architecture | Duplicated metadata and content; body content required JavaScript | Shared layout and studio facts; 17 normal routes plus a real 404; 18 complete HTML documents |
| User experience | Inert audio controls, consent interruption, indirect or stale routes | Clear service/rate pages, current studio booking handoff, keyboard menu, native FAQ, unsent email brief with validation and copy fallback |
| Performance | Large homepage script, reveal dependency, remote resources | 304 decoded homepage script bytes, responsive local images, self-hosted fonts, immutable versioned assets, immediate readable HTML |
| SEO and AI-search | Client-injected body/entity data, broken search action, contradictory crawler claims | Unique static titles/descriptions, canonicals, breadcrumbs and truthful LocalBusiness/WebSite/WebPage/Service data; visible answers and consistent optional llms.txt |
| Content | Conflicting rates/policies, stale biographies and equipment claims | Source-checked studio details and clearly labeled published starting rates; current roster selection stays on the booking system; unsupported promises removed |
| Security and operations | Floating/ambient release dependencies; incomplete quality gates | Self-only CSP, no inline/eval scripts, restrictive permissions, real HTTP errors, exact-site production build guard, pinned CI actions and dependency audit |
| Documentation | Stale README, AGENTS, CLAUDE and release references | Current operating instructions, client-brand rule, source/host identity, corrected plan, decisions and release evidence |
| Recovery | Old implementation mixed with active code | Original source and superseded LFNYC candidate archived outside dist; exact production artifact ZIP retained |

Source and configuration were opened before findings were recorded: 85 source text files were inventoried and read; the supplied brand kit was fully inventoried/read before the initial design. The later correction uses Legacy's actual published assets, not the agency kit. The original source, plan and historical direction remain available without entering the publish directory.

No database, authentication or server queries exist in the rebuilt site. No unnecessary server, tracking, email-delivery or payment infrastructure was introduced. Contact drafts target `info@legacymusicgroup.com`; the page neither sends nor stores them. Booking remains on `legacymusicgroup.com/service-plus/`.

## Measured before and after

| Measure | Original live studio site | Final production |
|---|---:|---:|
| Mobile Lighthouse performance | 87/100 | 100/100 |
| Lab Largest Contentful Paint | 3.612 s | 1.547 s |
| Total homepage transfer | 908,992 bytes | 192,997 bytes |
| Decoded homepage JavaScript | 460,757 bytes | 304 bytes |
| Lab total blocking time | 8 ms | 0 ms |
| Lab cumulative layout shift | 0.000095 | 0.000616 |
| Reported vulnerable packages | 13: 10 high, 3 moderate | 0 |
| Observed visible text minimum | 10 px | 16 px |
| Lighthouse accessibility | 100/100 | 100/100 |
| Lighthouse best practices | 100/100 | 100/100 |
| Lighthouse SEO | 69/100 | 69/100 |

Homepage transfer fell **78.8%**; decoded homepage JavaScript fell **99.9%**. CLS remained very low but increased slightly; it is not reported as an improvement. Zero automated accessibility findings existed in the baseline sample as well as the final sample; this is not a claim of complete WCAG conformance.

Method: one Lighthouse 13.5.0 simulated mobile sample per hosted version, same installed Chrome and mobile settings, on October 9. The final run was at `2026-10-09T09:20:06.372Z`. Actual visits vary. Dependency counts describe the cloned Git lockfile, while browser figures describe the deployed October baseline; they are separate evidence sources. The original 13 advisories were largely tooling, not proof of 13 remotely exploitable production flaws.

Field INP, traffic, conversion, revenue, rankings and AI citations were not measured. The PageSpeed API returned a quota error; installed Lighthouse supplied lab evidence. The SEO score remains 69 because this duplicate host deliberately remains noindex. Noindex is not access protection.

## Validation and release proof

- Lint, Astro/TypeScript, build and **10 unit/artifact tests passed** using pinned Node 24.21.0. Type checking returned zero errors and warnings; audit returned zero vulnerabilities.
- **14 installed-Chrome browser tests passed locally and on production**: 17 routes at 320, 390, 768, 1024 and 1440 pixels; 34 desktop/mobile axe scans; keyboard menu/Escape; validation; copy denial fallback; FAQ; no-JavaScript access; 200% magnification; real 404; historical redirects; headers; correct studio recipient and booking destination.
- Additional live desktop/mobile checks verified skip navigation, copied-draft feedback using a clipboard mock, no third-party homepage resource requests, and no review-only banner. No real clipboard change, email, reservation or payment occurred.
- Corrected PR [#17](https://github.com/omgitsthedm/legacy-music-group/pull/17) merged after successful [GitHub quality checks](https://github.com/omgitsthedm/legacy-music-group/actions/runs/37909460220).
- Deployed source: `d58e09eff71904941b42c5a429ff08170a4046de` on `master`.
- Exact site ID: `d04515bf-0eb2-45ae-b71b-2a08dc92391a`.
- Published production deploy: `6ac8b098350fdec4e6b7db41`, ready and published `2026-10-09T09:15:07.783Z`.
- Immutable production: [https://6ac8b098350fdec4e6b7db41--legacy-music-group.netlify.app](https://6ac8b098350fdec4e6b7db41--legacy-music-group.netlify.app).
- Publish-tree SHA-256, excluding release.json: `97a31014a4aab36121685af3448813e979b4e444a473bb330ad5a2d6e7a993b5`.
- **All 49 publicly served files matched local bytes on both the primary and immutable production URLs.** The ZIP contains all 51 publish files, including Netlify headers and redirects.
- Production artifact ZIP SHA-256: `8b59da15cfd15159bc7ff33d74096c4957ba9ef35cfb91a8d9c8bbb4c3f8ece3`.
- Prior production `6ac795afb6dbbe1ac131f88c` remains in provider history. No LFNYC rebrand was ever uploaded to production.

The existing [review link](https://lfnyc-audit-2026-10-09--legacy-music-group.netlify.app) now mirrors the exact Legacy production artifact. Its historical `lfnyc-audit` URL label was retained to correct previously shared links. Review deploy `6ac8b2255315a423c592a924` is an unpromoted branch deployment, verified across all 49 public files at both its alias and immutable URL. Eight additional page/device browser checks passed and ten current preview screenshots were captured. Historic immutable LFNYC drafts remain historical provider records, not the current candidate.

Netlify's current published deploy was rechecked after updating the review alias: it remains `6ac8b098350fdec4e6b7db41`. One production deploy was used for this release; the corrective review upload was non-production. The documented credit-based rate is 15 credits per successful production deploy and zero deploy credits for previews; request/bandwidth charges may also apply. This is the published rate, not a claimed account-ledger delta. No billing or account settings changed.

Git pushes run quality checks but cannot silently create competing Netlify releases: the documented build-ignore command suppresses Git-triggered hosting builds, and deployment uses an explicit site ID. Documentation-only closeout commits do not alter or republish the verified application.

## Problems actually resolved during verification

- A local engineer wildcard redirect loop was replaced with explicit old-profile redirects; the complete browser suite then passed.
- Magnified content overflow was fixed with container-width layout changes; 200% tests passed.
- CSP initially blocked Astro's inline enhancement; asset inlining was disabled and the strict policy retained.
- Direct WordPress media requests returned 403; installed Chrome recovered the actual public image responses, with URL/hash provenance saved.
- WordPress background requests prevented network-idle completion; DOM readiness and decoded-image checks produced usable source evidence.
- The first local Lighthouse launch lacked its owned profile directory; the owned failed process was stopped, the directory was created, and both local and production measurements completed.
- A shell hook rejected a dependency command based on the home directory; an explicit cd to this isolated checkout resolved it.
- The canonical checkout's 15 existing status entries were preserved. Work and commits were made only in this isolated checkout.

## Delivered package

Delivery folder: `/Users/davidmarsh/Desktop/Project Upgrades/legacy-music-group/`.

- `screenshots/`: 17 original captures; 45 current production captures; 10 current review-mirror captures. Local QA captures are separate. Superseded LFNYC preview captures are archived and labeled.
- `graphics/`: desktop comparison, mobile comparison, ten-area scorecard and Legacy brand/OG card. All four were visually checked.
- `social/`: three complete captions, three matching static PNGs and alt text, delivered as one unpublished batch. All three images were visually checked.
- `case-study/CASE-STUDY.md`: problem, findings, implementation and actual lab results.
- `links/LINKS.md`: live/review/deploy/source/compare/CI URLs and local evidence links.
- Root copies of this report and DECISIONS; full plan and release/action record in `rebuild/`; production artifact ZIP and machine-readable evidence in `evidence/`.

## Current sources and search limits

Studio facts and assets were checked against the [official homepage](https://legacymusicgroup.com/), [contact page](https://legacymusicgroup.com/contacts/), [booking page](https://legacymusicgroup.com/service-plus/), [equipment page](https://legacymusicgroup.com/equipment/) and [recording terms](https://legacymusicgroup.com/terms-and-conditions/). Official booking and terms disagree on payment percentage; this site deliberately avoids copying that conflict.

Current technical guidance was checked during the audit: [Astro rendering](https://docs.astro.build/en/guides/on-demand-rendering/), [Node release status](https://nodejs.org/en/about/previous-releases), [Google AI guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), [Google search updates](https://developers.google.com/search/updates), [Core Web Vitals](https://web.dev/articles/vitals), [OpenAI crawlers](https://developers.openai.com/api/docs/bots), [Perplexity bots](https://docs.perplexity.ai/guides/bots), [Netlify build-ignore behavior](https://docs.netlify.com/build/configure-builds/ignore-builds/), and [Netlify credits](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/how-credits-work/). Bing guidance was captured through rendered Chrome and Anthropic crawler guidance through its current official privacy documentation.

Good field thresholds are LCP ≤2.5 seconds, INP ≤200 ms and CLS ≤0.1 at the 75th percentile; lab TBT is not INP. Search and training crawler access are separate controls. llms.txt is a maintained reference, not a ranking/citation guarantee. No fake SearchAction, ratings, FAQPage or HowTo promise was added. This host's noindex status means no search-acquisition claim is made.

## NEEDS-APPROVAL.md — complete contents

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
