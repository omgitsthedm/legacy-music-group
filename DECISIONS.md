# Decisions — 2026-10-09

- Interpret the explicit rebrand request as a full LFNYC service-site preview; no studio pricing, testimonials, people or Dallas entity claims become LFNYC claims.
- Isolate work in the requested output folder because the canonical checkout has 15 existing changes; use branch audit/2026-10-09 from b04c5e3.
- Preserve previous source and assets outside the publish tree; no destructive cleanup of canonical files or unrelated projects.
- Use supplied Brand Kit fonts, tugboat and exact color tokens; the canonical DESIGN.md's newer imagery rule governs the guide's older image restrictions.
- Use a static Astro build because the new product is content and contact handoff; avoid React, GSAP, Tailwind and server infrastructure without a user need.
- Use hello@littlefightnyc.com from the Brand Kit; omit unverified phone, street address, rates, testimonials, outcomes and project dates.
- Keep every hosted candidate noindex with an empty sitemap; noindex is index control, not privacy or access control.
- Add llms.txt as a maintained reference only; never claim it boosts Google or guarantees AI citations.
- Use a local email-brief handoff and normal email fallback; no message is sent, stored or falsely confirmed by this website.
- Use ports 4387 and 4388 for this project; package caches and audit tools stay inside this output folder.
- A shell safety hook rejected a dependency command despite its workdir; retry with an explicit cd to the exact isolated project directory.
- Sharp's internal lib path changed; use its public package export for graphics and contact sheets.
- Art-reference records have optional principle fields; use their retained observation field when no principle exists.
