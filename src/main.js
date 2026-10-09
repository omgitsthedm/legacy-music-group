import './style.css'

const phases = [
  {
    title: 'Phase 1: Story Mining',
    detail: 'Capture founding story, studio milestones, client breakthroughs, and neighborhood roots.',
    owner: 'Brand + Founder',
  },
  {
    title: 'Phase 2: Proof Stack',
    detail: 'Collect audio snippets, before/after mixes, artist clips, reviews, and press mentions.',
    owner: 'Production + Ops',
  },
  {
    title: 'Phase 3: Offer Clarity',
    detail: 'Define service menu, turnaround times, pricing ranges, and booking handoff path.',
    owner: 'Sales + Studio Manager',
  },
  {
    title: 'Phase 4: Build Sprint',
    detail: 'Translate content into conversion pages, historical timeline modules, and booking flow.',
    owner: 'Design + Dev',
  },
]

const buckets = [
  {
    name: 'Studio History',
    path: 'content/history/studio-timeline-template.csv',
    note: 'Year-by-year milestones, room upgrades, notable sessions.',
  },
  {
    name: 'Signature Sessions',
    path: 'content/history/signature-session-template.md',
    note: 'Story framework for iconic recording sessions.',
  },
  {
    name: 'Service Copy',
    path: 'content/copy/service-pages-template.md',
    note: 'Message structure for tracking, mixing, mastering, production.',
  },
  {
    name: 'Media Manifest',
    path: 'content/media/asset-manifest.csv',
    note: 'Source of truth for photos, reels, clips, and rights status.',
  },
  {
    name: 'Interview Intake',
    path: 'content/intake/client-interview-template.md',
    note: 'Question set for founders, engineers, and artists.',
  },
  {
    name: 'SEO + Local',
    path: 'content/seo/keyword-clusters.md',
    note: 'Cluster map for Dallas recording intent and service intent.',
  },
]

document.querySelector('#app').innerHTML = `
  <main class="workspace">
    <section class="hero reveal-1">
      <p class="eyebrow">Legacy Music Group</p>
      <h1>Studio Legacy Site<br />Content Collection Mode</h1>
      <p class="subhead">This workspace is optimized to gather story-first material before design lock. Start with history, sessions, and proof assets.</p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="./content/intake/client-interview-template.md">Open Intake Template</a>
        <a class="btn btn-secondary" href="./content/history/studio-timeline-template.csv">Open Timeline Sheet</a>
      </div>
    </section>

    <section class="panel reveal-2">
      <div class="panel-head">
        <h2>Build Phases</h2>
        <p>Sequential handoff from raw content to production website.</p>
      </div>
      <ol class="phase-list">
        ${phases
          .map(
            (phase) => `
              <li>
                <h3>${phase.title}</h3>
                <p>${phase.detail}</p>
                <span>${phase.owner}</span>
              </li>
            `,
          )
          .join('')}
      </ol>
    </section>

    <section class="panel reveal-3">
      <div class="panel-head">
        <h2>Content Buckets</h2>
        <p>Drop files into these templates first. Build starts after this grid is complete.</p>
      </div>
      <div class="bucket-grid">
        ${buckets
          .map(
            (bucket) => `
              <article>
                <h3>${bucket.name}</h3>
                <p>${bucket.note}</p>
                <a href="./${bucket.path}">${bucket.path}</a>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="panel tape reveal-4">
      <h2>Recording-History Angle To Capture</h2>
      <ul>
        <li>How the room evolved: acoustic treatment, console upgrades, outboard additions.</li>
        <li>Neighborhood context: Deep Ellum heritage, artist traffic, community impact.</li>
        <li>Craft process: tracking to master chain, analog versus digital choices, engineer philosophy.</li>
        <li>Legacy proof: returning artists, release outcomes, long-term collaborations.</li>
      </ul>
    </section>
  </main>
`
