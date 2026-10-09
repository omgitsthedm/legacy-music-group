export const business = {
  name: 'Little Fight NYC',
  email: 'hello@littlefightnyc.com',
  phone: '+16463600318',
  displayPhone: '(646) 360-0318',
  officialUrl: 'https://littlefightnyc.com',
  verified: '2026-10-09',
};

export const services = [
  {
    slug: 'websites', number: '01', short: 'Websites', title: 'A website that earns its place.',
    description: 'Custom websites for small businesses. Clear service pages, a useful mobile experience, and a direct path from interest to inquiry.',
    lead: 'Your next customer should know what you do, see why it matters, and find their next step. We build the website around that.',
    action: 'Talk about my website', image: 'storefront-beauty-supply.webp', alt: 'A neighborhood beauty supply storefront from the LFNYC brand collection',
    intro: 'Built around how customers choose.',
    body: 'A restaurant, a salon, a film, and a contractor need different things from a website. We start with your customers, your existing tools, and the work you want the site to do.',
    includes: ['Design and copy built around your business', 'Mobile layouts and accessible navigation', 'Fast pages, clear search metadata and useful answers', 'Booking, payment or contact paths that fit your existing tools', 'Your code, domain and hosting in your control'],
    fit: 'For a first website, an outgrown template, or a site that makes customers work too hard.',
    next: 'We review what exists, agree on the work, and put a working version in front of you before launch.',
    question: 'How much does a website cost?', answer: 'The price follows the scope. We start with a free conversation, then give you a written proposal that names the pages, connections, responsibilities and price. No made-up starting price or surprise package.',
  },
  {
    slug: 'it-support', number: '02', short: 'Tech support', title: 'Get back to your actual work.',
    description: 'Hands-on technology support for small businesses in New York City. Help with websites, email, Wi-Fi, devices and the tools your day depends on.',
    lead: 'The card reader drops out. Email stops arriving. The website breaks. Tell us what is happening and we will work out the next useful step.',
    action: 'Get help with a problem', image: 'counter-pos.webp', alt: 'An independent business counter from the LFNYC brand collection',
    intro: 'Start with the problem, not a replacement.',
    body: 'We check the basics, find where the failure starts, and explain the fix in plain English. Keep useful equipment and accounts. Replace something only when it makes sense.',
    includes: ['Website and account troubleshooting', 'Email, Wi-Fi and everyday device help', 'Booking and payment connection checks', 'Remote help or on-site support across all five NYC boroughs', 'A clear explanation of what changed and what to do next'],
    fit: 'For owners and small teams who need someone to untangle a problem and explain what happened.',
    next: 'Share the affected tool, what changed, and what you can see. Do not send passwords or payment information.',
    question: 'Can you come to my business?', answer: 'On-site support covers all five NYC boroughs. We first check whether the problem can be handled remotely and agree on the scope and timing with you.',
  },
  {
    slug: 'consulting', number: '03', short: 'Free consulting', title: 'Make the next move clear.',
    description: 'Free technology consulting for small business owners. An honest second opinion on websites, software and the tools you already use.',
    lead: 'Before you buy another tool or rebuild everything, get a second opinion. Consulting is always free.',
    action: 'Get a free second opinion', image: 'retail-rack.webp', alt: 'Clothing organized on an independent shop rack from the LFNYC brand collection',
    intro: 'A clear recommendation. Room to decide.',
    body: 'Show us what is slowing the business down. We look at the current setup, explain the options and tell you what we would fix first. You decide what happens next.',
    includes: ['A review of the problem you want to solve', 'A plain-language look at the available options', 'Advice on what to keep, connect, fix or replace', 'A useful first step and an explanation of the tradeoffs', 'A written scope before any paid work begins'],
    fit: 'For an owner weighing a quote, planning a change, or trying to understand what their business actually needs.',
    next: 'Tell us the decision in front of you and what a better day would look like.',
    question: 'Is consulting really free?', answer: 'Yes. Consulting is always free. Implementation is separate, and any paid work begins with an agreed scope and price.',
  },
  {
    slug: 'business-systems', number: '04', short: 'Software you own', title: 'Stop renting the workaround.',
    description: 'Focused custom software for small businesses. Connect existing tools, reduce repeat work and own the system that fits the way you operate.',
    lead: 'When the same workaround eats into every day, it may be time for a tool built around your business.',
    action: 'Talk about a better system', image: 'shop-systems-hero.webp', alt: 'Shop shelves and a working counter from the LFNYC brand collection',
    intro: 'Keep the useful tools. Connect the gaps.',
    body: 'We map the workflow before writing code. Sometimes the answer is a small connection. Sometimes it is a focused app. The job is to make the work easier and leave you in control.',
    includes: ['A map of the current process and its friction', 'A focused first version you can actually try', 'Connections to the tools worth keeping', 'Clear access, permissions and handover', 'Ownership of your code, data and documentation'],
    fit: 'For a small team doing the same manual entry, approval, follow-up or report over and over.',
    next: 'Bring one recurring task. We will work through the current steps and decide whether custom software is the right answer.',
    question: 'Do I need to replace all my existing software?', answer: 'No. We keep tools that work and connect what should talk. Custom software makes sense when a focused change solves a real problem; it is not the starting assumption.',
  },
] as const;

export const work = [
  { name: 'The Tarot Hotline', category: 'Personal services', image: 'work-tarot.webp', description: 'Reading choices, clear next steps, and a visual identity with a point of view.', source: '/case-studies/the-tarot-hotline/', url: 'https://thetarothotline.com/' },
  { name: 'Hair By Rachel', category: 'Salon & beauty', image: 'work-rachel.webp', description: 'Service guidance and a straightforward path to an appointment.', source: '/case-studies/hair-by-rachel-charles/', url: 'https://hairbyrachelcharles.com/' },
  { name: 'CC Films', category: 'Film & culture', image: 'work-films.webp', description: 'One film home with clear routes for viewers, press, and premiere guests.', source: '/case-studies/cc-films/', url: 'https://ccfilms.net/' },
] as const;

export const faqs = [
  { question: 'What does Little Fight NYC do?', answer: 'We build custom websites, fix everyday business technology, offer free consulting, and create focused software that clients own.' },
  { question: 'Who do you work with?', answer: 'Owner-operated businesses and small teams: shops, salons, hospitality, creative businesses, trades and independent services. We begin with what your business needs to do.' },
  { question: 'Do you work outside New York?', answer: 'Yes. Website work is available nationwide. On-site technology support covers all five New York City boroughs.' },
  { question: 'Is the first conversation free?', answer: 'Yes. Consulting is always free. We agree on the scope and price before paid implementation begins.' },
  { question: 'Will I own the finished work?', answer: 'Yes. You own your code, data, domain, hosting and documentation. The handover is part of the work.' },
  { question: 'Can you work with my current website or tools?', answer: 'Yes. We check what you have first. If a repair or a small connection solves the problem, that is a valid outcome.' },
  { question: 'Do you guarantee search rankings or AI mentions?', answer: 'No. We build clear, accessible pages with sound search foundations. Search engines and AI services decide what they show, and no honest builder can guarantee a ranking or citation.' },
  { question: 'How do I start?', answer: 'Email hello@littlefightnyc.com, call (646) 360-0318, or use the contact brief to prepare an email. Describe what you need, and leave passwords and sensitive data out.' },
] as const;
