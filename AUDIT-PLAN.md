# Scope correction — October 9, 2026

The owner superseded the LFNYC rebrand: client and prospective-client projects retain their own identities; only abstract projects use LFNYC branding. Legacy Music Group is a real studio project. Its production host is still the original studio presentation; the LFNYC source merge was never deployed.

Execute before the authorized live release:
1. Preserve the current static stack, security, performance and validation work.
2. Replace every active LFNYC identity, service, asset and contact with Legacy Music Group content verified against its project brief and official website; archive superseded material outside dist.
3. Use Legacy’s carbon, ivory and brass direction, its actual published studio photography and people, and locally hosted Inter/DM Serif Display. Keep booking on the existing official Bookly destination. No placeholder people, invented rates, delivery guarantees, testimonials or new payment system.
4. Restore useful studio/service/pricing/team/FAQ/contact routes; preserve historical URLs through explicit handoffs and actual 404s. Keep noindex on this duplicate Netlify property.
5. Add identity and contact-recipient regression checks, run all local gates, and inspect desktop/mobile flows before publishing exactly once to the approved Netlify site.
6. Update the report, screenshots, comparisons, social batch, case study and links for the Legacy-branded release. Retain superseded LFNYC evidence as history, clearly labeled; publish none of the marketing.

Effort: M for brand/content/route correction, S for metadata/tests/docs, M for refreshed verification and marketing assets. No further owner response is required.

---

## Original audit plan (historical; LFNYC branding superseded)

# LFNYC rebuild audit plan — 2026-10-09

Written before implementation. Date command: Fri Oct 9 00:24:30 MST 2026.

## Verdict

This is a studio website with months of partial repairs, contradictory sales copy, a client-rendered content dependency, and obsolete documentation. It is not an LFNYC website. Replacing its presentation and content is cheaper and safer than carrying the studio's assumptions into a technology-services brand. The existing production release and the dirty canonical checkout remain untouched.

Scores are engineering/design judgments against this LFNYC brief, not Lighthouse scores or business outcomes.

| Area | Before /10 | Basis |
|---|---:|---|
| Stack and dependencies | 4 | Lockfile audit: 13 vulnerabilities (10 high, 3 moderate); retired tooling remains |
| Architecture and quality | 4 | Metadata/content duplicated; dead entry point; no browser regression suite |
| UI and accessibility | 4 | Automated axe passes, but 10px text, old palette/type, scroll-gated content |
| UX | 4 | Nonfunctional audio buttons, distracting inert analytics consent, indirect handoffs |
| Performance | 5 | Mobile Lighthouse 87; lab LCP 3.6s; homepage script 460,757 decoded bytes |
| SEO | 3 | Static HTML contains a loading message; stale metadata; competing route policies |
| AEO/GEO | 3 | Client-injected entities, nonfunctional SearchAction, misleading crawler claims |
| Content and context | 2 | Pricing, refund, gear and booking claims conflict across routes and docs |
| Security and operations | 5 | Headers exist; pipeline uses floating CLI and ambient site secret; no full QA gate |
| LFNYC brand alignment | 1 | Studio identity throughout; LFNYC appears only in a tiny credit |

## Evidence and scope

- Canonical checkout: `/Users/davidmarsh/Code/LiFi NYC/Clients/Legacy Music Group/legacy-music-group`.
- Recovery index and fleet manifest agree on GitHub `omgitsthedm/legacy-music-group`, branch `master`, exact Netlify ID `d04515bf-0eb2-45ae-b71b-2a08dc92391a`.
- Current provider release: `6ac795afb6dbbe1ac131f88c`; documentation still foregrounds September's `6aba04a678dff6a47a043408`. Live evidence wins.
- Canonical worktree has 15 existing status entries. Isolated clone: `../rebuild`, branch `audit/2026-10-09`, base `b04c5e3e2a64e0ef0f7faf98ec451c5d45af61ef`. Existing edits are neither overwritten nor committed as our work.
- Complete source text opened into `../evidence/source-full-read.txt`; 85 text files inventoried with hashes. Dependencies, lockfile, hidden workflows, content templates, source, scripts, docs, and deploy configuration included; credentials and generated/vendor code excluded from semantic review.
- Brand source: supplied Desktop Brand Kit router, current guide, design governance and tokens; 193 unique files read/inventoried, 172 images inspected on five contact sheets. Fonts, logos, usage rules, selected imagery and 51 art references reviewed. Reference art informs composition only; it is not republished.
- Live Chrome baseline: home, services, contact, pricing, engineers and FAQ at 1440×1000 and 390×844; 12 full-page screenshots, 0 axe violations on each, no overflow. No-JS homepage says only “Legacy Music Group studio information is loading.”
- Lighthouse 13.5.0, mobile simulated profile: performance 87, accessibility 100, best practices 100, SEO 69; LCP 3.6s, CLS 0, TBT 10ms. This is one lab sample, not real-user Core Web Vitals.
- Original source baseline and current live release differ. Dependency counts describe the cloned lockfile; browser numbers describe the live October release. Do not conflate them.

## Findings ranked by impact

| Priority | Opened evidence | What is wrong and why it matters | Exact fix | Effort |
|---|---|---|---|---|
| P0 | `src/lib/data.ts`, `src/pages/Pricing.tsx`, `Policies.tsx`, `public/llms.txt` | Rates, refund rules, turnaround and gear statements disagree; stale studio claims cannot become LFNYC claims | Replace active content with approved LFNYC facts; archive old content outside publish tree; no copied reviews, numbers or invented terms | L |
| P0 | `index.html`, `src/main.tsx`, `scripts/prerender-meta.mjs`; live no-JS check | Prerender changes tags but leaves only a loading message in body; content requires React | Rebuild with Astro static documents and minimal progressive enhancement | L |
| P0 | `package-lock.json`; npm audit output | 13 advisories in the original dependency tree, largely tooling; an old clean audit is stale | Replace framework/tooling dependency graph, pin current verified compatible packages, audit resulting tree | M |
| P0 | `AGENTS.md`, workflow, fleet manifest, Netlify API | Production is `master`, not `main`; existing workflow can publish via manual dispatch; site ID is ambient | Keep branch separate; pin exact target; require explicit protected production workflow dispatch with exact confirmation; manual draft only during this task | M |
| P1 | `src/index.css`, `Navbar.tsx`, `Footer.tsx`, screenshots | Inter/DM Serif, gold and studio photos do not match LFNYC; 10px live text violates its type floor | Supplied tugboat, Oswald/Barlow/JetBrains, semantic tokens, 16px minimum, 44px targets, clear focus and reduced motion | L |
| P1 | `Home.tsx`, `ScrollReveal.tsx` | Hero animation delays content; gallery pins scroll; global reveals hide content | Complete first paint; no reveal dependency or scroll pinning; small CSS feedback only | M |
| P1 | `EngineerProfile.tsx`, `data.ts`, `ServicePage.tsx` | Play buttons lack handlers; service recommendations use numeric IDs against named IDs | Retire studio-specific UI from active application; test every new interactive control | M |
| P1 | `AnalyticsConsent.tsx`, `analytics-gate.ts` | Consent UI interrupts even though preview transport is ineligible | Remove tracking code and banner from the rebuilt preview; factual privacy notice | S |
| P1 | `schemas.ts` | SearchAction points to a search that does not exist; entities depend on JavaScript | Static Organization/WebSite/WebPage/Service/Breadcrumb entities; no ratings, fake search or invented address | M |
| P1 | `public/robots.txt`, `llms.txt`, `prerender-meta.mjs` | Training crawlers are described as search eligibility; llms copy contradicts visible content | Explicit preview noindex; concise optional llms guide; accurate search-versus-training notes; same content in HTML and schema | M |
| P1 | `netlify.toml`, `_redirects` | Broad SPA 200 fallback competes with intended 404 behavior | Static route files, single real 404 rule, explicit old-route transition page; verify HTTP statuses | S |
| P2 | `README.md`, `info.md`, `PLACEHOLDERS.md`, `SOURCE_OF_TRUTH.md` | Docs claim removed components, Node 20, old releases and pending Calendly paths | Replace active instructions and source truth; preserve historical doctrine in archive | S |
| P2 | `src/main.js`, `style.css`, `App.css`, shadcn config | Unused planning application and scaffolding inflate maintenance surface | Move historical implementation/config to an excluded archive; keep a focused source tree | S |
| P2 | `_headers`, workflow | Third-party permissions survive unused integrations; CI omits lint, tests and type checks | Restrictive self-only policy, hashed assets, immutable caching, static checks, browser tests and dependency audit | M |

## Rebuild, not framework churn

1. Use Astro 7.3.8 (npm verified today), static output and TypeScript. Node 24 LTS is the deployment target; local Node 22.22.3 meets Astro's supported >=22.12 requirement. No server adapter, database or authentication is needed for a public service site.
2. Use the supplied brand's poster typography, midnight ground and orange action signal. Websites lead; urgent support remains direct; consulting is free; software ownership is the continuation.
3. Build home, services, four service detail pages, work, contact, FAQ, privacy, terms, transition and 404 experiences. Avoid fabricated case-study outcomes; link to currently verified public LFNYC work.
4. Use a contact brief that prepares an email locally and plainly says nothing is sent until the visitor sends it. Keep a normal email link available without JavaScript. No paid service, database or unverified form recipient.
5. Keep all preview pages noindex. Produce self-consistent metadata, JSON-LD, OG image, favicons, optional llms guide and deliberately empty preview sitemap. Production indexing is a separate approved release decision.

## Quick wins (each under one hour)

- Remove the inactive consent interruption and all third-party font requests.
- Replace dead audio controls and studio-specific conversion paths in the active build.
- Pin the runtime, packages, deploy target and workflow tools.
- Remove the duplicated SPA fallback and test real 404s.
- Correct active README, AGENTS, CLAUDE and source identity.
- Install the supplied logos, fonts and tokens unchanged.
- Add static-output checks for headings, metadata, links, schemas and preview protection.

## Current guidance checked on 2026-10-09

- [Astro rendering](https://docs.astro.build/en/guides/on-demand-rendering/): static output suits these pages; no browser framework required for static components.
- [Node releases](https://nodejs.org/en/about/previous-releases): Node 24 is LTS; Node 26 is Current; Node 20 is EOL. Do not upgrade to Current just for the highest number.
- [Google AI guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide): ordinary crawlability, indexing and helpful content remain the basis; Google ignores llms.txt for ranking.
- [Google documentation updates](https://developers.google.com/search/updates): FAQ rich results were retired in May 2026; HowTo rich results were retired in 2023. Visible FAQs remain useful; no rich-result promise.
- [Web Vitals](https://web.dev/articles/vitals): good field thresholds at the 75th percentile are LCP ≤2.5s, INP ≤200ms and CLS ≤0.1. Lighthouse TBT is not INP.
- [OpenAI crawlers](https://developers.openai.com/api/docs/bots): OAI-SearchBot is search; GPTBot is training. Separate controls.
- [Perplexity bots](https://docs.perplexity.ai/guides/bots): search crawler and user-directed fetches have separate purposes.
- Bing's guideline endpoint and the initially attempted Anthropic privacy endpoint did not provide usable content through the text tool. Retry official sources before final research closeout; do not manufacture their requirements.

## Execution order and completion gates

1. Commit this plan and decision log. Preserve the old build/source inside the isolated clone only.
2. Implement and validate static foundation, dependencies and build tooling; atomic commit.
3. Implement LFNYC design, content, contact flow and responsive routes; run build, lint, tests and type check; atomic commit.
4. Add metadata, schema, robots, headers, CI and current docs; rerun gates and dependency audit; atomic commit.
5. Chrome: all new routes, desktop/mobile/tablet, keyboard, menu Escape, contact validation, FAQ, reduced motion, 200% zoom and JavaScript disabled. Measure comparable mobile Lighthouse; inspect screenshots and correct defects before hosting.
6. Push only `audit/2026-10-09`. Upload one reviewed static artifact as a draft to exact site `d04515bf-0eb2-45ae-b71b-2a08dc92391a`; never `--prod`. Verify draft routes, headers, release marker and unchanged published deploy.
7. Produce before/after screenshots, branded comparison and score graphics, one complete static social batch with matching copy/images, measured case study, links and report in the requested folder. Nothing is posted.
8. Write and print AUDIT-REPORT in full, including before/after scores, measured results, exact preview URL, remaining gates and complete NEEDS-APPROVAL contents. Finish only after final diff/artifact review.

Queued for approval: replacement of the studio property in production, `master` merge, live promotion, any domain/DNS/indexing change, publication of marketing assets, external delivery tests, and any paid/account integration. Prepare exact commands after the candidate exists; execute none of them.
