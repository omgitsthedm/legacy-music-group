# Decisions — 2026-10-09

Current rule: client and prospective-client projects retain their own identity; only abstract projects use LFNYC branding. Early LFNYC-specific choices below are superseded history. The final release is Legacy Music Group.

## Chronological decisions

- Interpret the explicit rebrand request as a full LFNYC service-site preview; no studio pricing, testimonials, people or Dallas entity claims become LFNYC claims.
- Isolate work in the requested output folder because the canonical checkout has 15 existing changes; use branch audit/2026-10-09 from b04c5e3.
- Preserve previous source and assets outside the publish tree; no destructive cleanup of canonical files or unrelated projects.
- Use supplied Brand Kit fonts, tugboat and exact color tokens; the canonical DESIGN.md's newer imagery rule governs the guide's older image restrictions.
- Use a static Astro build because the new product is content and contact handoff; avoid React, GSAP, Tailwind and server infrastructure without a user need.
- Use the Brand Kit email and the phone number verified on the public LFNYC case-study pages; omit unverified street address, rates, testimonials, outcomes and project dates.
- Keep every hosted candidate noindex with an empty sitemap; noindex is index control, not privacy or access control.
- Add llms.txt as a maintained reference only; never claim it boosts Google or guarantees AI citations.
- Use a local email-brief handoff and normal email fallback; no message is sent, stored or falsely confirmed by this website.
- Use isolated ports 52761/52762/52763; the initial 4388 probe reached another project, so its screenshots were rejected and a strict project-bound preview server replaced Astro's detached preview command.
- A shell safety hook rejected a dependency command despite its workdir; retry with an explicit cd to the exact isolated project directory.
- Sharp's internal lib path changed; use its public package export for graphics and contact sheets.
- Art-reference records have optional principle fields; use their retained observation field when no principle exists.
- Pin TypeScript 6.0.3 because the current Astro checker and typescript-eslint explicitly exclude TypeScript 7; latest compatible beats an unsupported latest major.
- Fresh installation replaced the old dependency directory after npm rejected mixed ESLint 9/10 peers; no force or legacy-peer-deps bypass.
- Keep provider and public-case-study evidence separate from historic source claims; portfolio screenshots were captured from the three verified client sites on October 9.

- Astro's automatic small-script inlining conflicted with strict CSP; disable asset inlining so behavior stays in same-origin external modules.
- Preserve the old paid AI and automatic production workflows in the archive; this branch gets deterministic QA and manual draft deployment only.
- Validate on a checksum-verified Node 24.21.0 binary inside the project output folder; do not replace the shared Node installation.
- Fix the observed 320px header overflow and validate lazy images after natural scrolling rather than treating off-screen images as failed loads.
- Use responsive, content-hashed image variants and font URLs for smaller transfers and safe immutable caching; retain the supplied originals.
- The public PageSpeed API returned HTTP 429 with zero shared quota; use installed Lighthouse for comparable lab measurements and do not invent field INP or traffic outcomes.
- Recovered Anthropic crawler documentation from its current official privacy domain and Bing guidelines through rendered Chrome; search and training access are separate controls.
- Prepare an explicit production build guard for future approval, but keep every build and deploy in this mission in preview mode; indexing stays a separate decision.
- Netlify CLI rejected --context with --no-build before uploading; remove --context and retain the explicit site, draft alias and no-build flags.
- A hosted lazy image exposed its dimensions before download completion; strengthen the browser check to await complete plus naturalWidth, then rerun against the same unchanged artifact.
- Exported graphics wait for font/image decoding and settled Chrome paint; regenerate and visually verify all branded headers before handoff.

- The October 9 instruction “ok update it all and push it live” approves the reviewed rebuild’s master merge and one production release on the exact Legacy Netlify property; preserve the separate studio and canonical LFNYC domains.
- Keep this duplicate Netlify property noindex and its sitemap empty as reviewed; a public-domain/search migration is separate from the approved hosting release.
- Derive the release marker’s branch from Git, remove obsolete preview language in the production factual guide, and test production notices before publishing.
- Run quality checks on master as well as audit branches; keep deployment manual so source pushes cannot silently publish another artifact.
- Two guessed test filenames did not exist; use the actual tests/static.test.mjs inventory, then extend its production-mode checks.
- Netlify still lists master as a linked branch; add the documented build-ignore command so ordinary Git pushes cannot create competing hosted releases. Explicit verified CLI uploads remain the release path.
- Owner correction: real client and prospective-client projects retain their own identity; LFNYC branding applies only to abstract projects. Legacy Music Group remains Legacy Music Group, regardless of this property's lack of a custom-domain alias.
- PR #16 merged immediately before the correction, but no LFNYC production upload occurred; correct the source before executing the still-authorized live release.
- Use verified official Legacy studio photography and contact information; keep Bookly on legacymusicgroup.com/service-plus/ and omit unverified service guarantees, staff tenures, ratings and policies.
- Keep Little Fight NYC only as a small agency footer credit; the studio name, logo, color, services, structured entities and contact recipient are Legacy’s.
- Official WordPress image requests returned 403 outside Chrome; recovered the same public image response bodies in installed Chrome and retained source URLs and hashes.
- WordPress background activity prevented network-idle completion; use DOM readiness and decoded media instead of waiting for unrelated tracking requests.
- The current booking selector differs from old engineer biographies; link to the live selector instead of claiming an outdated roster, career credits or availability.
- Official booking instructions and recording terms disagree on full payment versus deposit; publish neither figure here and link to the studio’s terms with a direct contact fallback.
- Sharp no longer exposes the old internal lib path; use its public package import for lossless logo sizing and favicon export.
- Local QA caught an engineer wildcard redirect looping on its own destination and 200 percent magnification overflow; replace it with explicit historical profile redirects and use container-width reflow.

- Final release uses the client brief for scoring: preserve Legacy identity; the original LFNYC-alignment score is historical and does not penalize a client for its own brand.
- Build and publish merged source d58e09eff71904941b42c5a429ff08170a4046de once to exact site d04515bf-0eb2-45ae-b71b-2a08dc92391a; verified production deploy 6ac8b098350fdec4e6b7db41 serves the complete expected artifact.
- Replace the previously shared review alias with the exact verified Legacy production artifact so the active review link no longer presents LFNYC; provider context remains an unpromoted branch deployment, with no second production upload.
- Production and review mirrors share the same artifact marker; Netlify deploy records, not a renamed marker, establish each hosting context.
- Report the final production Lighthouse sample, not the superseded LFNYC sample: performance 100, 192,997 transfer bytes, LCP 1.547 seconds; no field or commercial outcome claim.
- The first Lighthouse profile launch failed before measurement; create the task-owned profile directory, stop only its failed Chrome process, and rerun successfully.
- Refresh all current graphics, captions, screenshots, links and case-study copy as Legacy; retain old LFNYC materials only in the labeled superseded archive.
- Commit documentation-only closeout without rebuilding or republishing the unchanged application; preserve the exact deployed source SHA separately from later documentation commits.
