export const PROFILE = {
  name: 'Noriaki Kishida',
  email: 'noriaki@uni.minerva.edu',
  github: 'https://github.com/Marstronix218',
  linkedin: 'https://www.linkedin.com/in/noriaki-kishida/',
  resume: '/noriaki_kishida_resume.pdf',
  booking: 'https://calendar.app.google/HjcaG9E9GjMQDQ3B7',
};

export type ProjectLink = { label: string; href: string; external?: boolean };

export type Project = {
  id: string;
  name: string;
  category: string;
  award?: string;
  summary: string;
  /** Label for the ownership line: "Built" for solo work, "Under the hood" for team builds. */
  buildLabel: string;
  build: string;
  tags: string[];
  links: ProjectLink[];
  /** Renders a prominent badge linking down to the featured case study. */
  caseStudy?: boolean;
  /** Destination for the circular arrow in the card heading. */
  primary: { href: string; label: string };
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'knov',
    name: 'knov',
    category: 'PERSONAL PROJECT · TECHNICAL ALPHA',
    summary:
      'A local-first macOS assistant that turns app, browser, and editor activity into semantic work threads and useful next steps — so you can pick up where your mind left off.',
    buildLabel: 'Built',
    build:
      'A Tauri 2 and Rust core with a React front end over a local SQLite store. Activity is packed into sanitized, token-budgeted context — full URLs, absolute paths, and credential-like fields stripped before anything reaches a provider — with 30-day retention, pause and delete controls, and Keychain-secured credentials.',
    tags: ['Tauri 2', 'Rust', 'React', 'SQLite'],
    caseStudy: true,
    links: [
      { label: 'Read the case study', href: '#case-study' },
      { label: 'Source code', href: 'https://github.com/Marstronix218/knov', external: true },
    ],
    primary: { href: 'https://github.com/Marstronix218/knov', label: 'Explore knov on GitHub' },
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'hookloop',
    name: 'HookLoop',
    category: 'AI AGENTS · TEAM HACKATHON BUILD',
    award: '2nd prize · Convex track, YC Growth Hackathon',
    summary:
      'An autonomous paid-ad experimentation agent. It forms a creative hypothesis, generates ad reels, simulates a week of spend, and folds what it learned into the next cycle.',
    buildLabel: 'Under the hood',
    build:
      'Three specialized agents — Strategist, Generator, Analyst — around a simulator that allocates budget with Thompson sampling. Structured OpenAI outputs tag the creative DNA of every reel so results can be attributed, and Convex reactive queries stream the run live.',
    tags: ['Next.js', 'Convex', 'OpenAI', 'Sora 2'],
    links: [
      { label: 'Live demo', href: 'https://hookloop-ruddy.vercel.app', external: true },
      { label: 'Source code', href: 'https://github.com/syang0624/hookloop', external: true },
    ],
    primary: { href: 'https://hookloop-ruddy.vercel.app', label: 'Open the HookLoop demo' },
  },
  {
    id: 'solid',
    name: 'SOLID Marketplace',
    category: 'AGENTIC COMMERCE · TEAM HACKATHON BUILD',
    award: '3rd place · Auth0 × Stripe Hackathon',
    summary:
      'A buying agent for Facebook Marketplace. It searches and ranks nearby listings, runs parallel simulated negotiations, and carries the deal through to a protected meetup payment.',
    buildLabel: 'Under the hood',
    build:
      'The interesting part is stacking safety on top of autonomy: vision-based condition analysis with Qwen2.5-VL, scam detection that combines pattern matching with a model check and halts high-risk negotiations, and Stripe Connect escrow that releases funds only after both sides confirm the meetup.',
    tags: ['Next.js', 'OpenAI', 'Auth0', 'Stripe Connect'],
    links: [
      { label: 'Live demo', href: 'https://fb-stripe-marketplace.vercel.app', external: true },
      { label: 'Source code', href: 'https://github.com/syang0624/fb_stripe_marketplace', external: true },
    ],
    primary: {
      href: 'https://fb-stripe-marketplace.vercel.app',
      label: 'Open the SOLID Marketplace demo',
    },
  },
  {
    id: 'indobiz',
    name: 'IndoBiz Japan',
    category: 'PRODUCTION PLATFORM · CAPITAL LAUNCHERS',
    summary:
      'An India business-intelligence platform for Japanese companies — news, regulation, market signals, and investment activity, each summary published with its evidence attached.',
    buildLabel: 'Built',
    build:
      'Next.js 16 and Supabase over a Python scraping layer, feeding a Claude synthesis pipeline that deduplicates, classifies, and quality-gates every story before it publishes, keeping provenance snippets attached to each summary. Memberships run on Stripe, and LINE Login is wired in as a custom OIDC provider.',
    tags: ['Next.js 16', 'Supabase', 'Claude SDK', 'Stripe'],
    links: [
      { label: 'Live site', href: 'https://indobiz-japan.launchers-g.com/', external: true },
      { label: 'Source code', href: 'https://github.com/Marstronix218/indobiz_japan', external: true },
    ],
    primary: { href: 'https://indobiz-japan.launchers-g.com/', label: 'Open the IndoBiz Japan platform' },
  },
  {
    id: 'idobata',
    name: 'idobataAI',
    category: 'PERSONAL PROJECT · DEPLOYED',
    summary:
      'A privacy-first productivity network. Tasks stay private by default, you choose what to post when you finish one, and encouragement comes back from real people and clearly labelled AI personas.',
    buildLabel: 'Built',
    build:
      'Next.js 16 and React 19 on Supabase, with privacy enforced by PostgreSQL row-level security rather than trusted to application code. Cursor-paginated feeds, one-to-one chat, scheduled persona engagement, account deletion that purges media, and an interface built to WCAG 2.1 AA.',
    tags: ['Next.js 16', 'React 19', 'Supabase', 'PostgreSQL RLS'],
    links: [
      { label: 'Live site', href: 'https://idobata-ai.com', external: true },
      { label: 'Source code', href: 'https://github.com/Marstronix218/idobataAI', external: true },
    ],
    primary: { href: 'https://idobata-ai.com', label: 'Open idobataAI' },
  },
  {
    id: 'research-copilot',
    name: 'Research Copilot',
    category: 'BROWSER-NATIVE AI · PERSONAL PROJECT',
    summary:
      'A goal-oriented research assistant that lives in the browser. You give it a research goal; it generates the questions worth answering, reads the pages you actually visit, keeps only the goal-relevant insights, and tells you when you have drifted off topic.',
    buildLabel: 'Built',
    build:
      'A Chrome extension — popup for setup, side panel for the workspace — over a FastAPI backend that handles goal clarification, question generation, and page analysis. Insights cluster by topic or timeline, drift detection watches the session, and heuristic fallbacks keep the extension useful when no model key is configured.',
    tags: ['JavaScript', 'FastAPI', 'OpenAI', 'Chrome Extension'],
    links: [
      { label: 'Source code', href: 'https://github.com/Marstronix218/Research-Copilot', external: true },
    ],
    primary: {
      href: 'https://github.com/Marstronix218/Research-Copilot',
      label: 'Explore Research Copilot on GitHub',
    },
  },
];

export const CASE_STUDY = {
  contrast: [
    { label: 'TYPICAL AI ASSISTANT', steps: ['Hand over your activity', 'Get context'] },
    {
      label: 'KNOV',
      steps: ['Collect locally', 'Build work threads', 'Sanitize', 'Budget tokens', 'Send only that'],
    },
  ],
  problem:
    'Your working context is real but scattered — across app windows, browser tabs, editors, and documents — and it evaporates the moment you switch tasks. The assistants that could rebuild it are the ones you have to hand your activity to first. The tool that would know the most about your day is the one you trust least.',
  insight:
    'So the context gets assembled where the data already lives. Everything is collected and stored on the machine, and the only thing that reaches a model is a small, sanitized, token-budgeted packet — assembled by code the user can inspect rather than by a prompt.',
  approach: [
    'Collect foreground app activity and window titles through native macOS APIs.',
    'Bootstrap up to 90 days of history from an explicitly chosen Chrome profile.',
    'Take metadata-only Local History and Git-path signals from editors — never file contents.',
    'Write it all to a local SQLite store with 30-day detailed-activity retention.',
    'Assemble semantic work threads across app, browser, document, and editor evidence.',
    'Pack context deterministically, dropping full URLs, absolute paths, and credential-like fields.',
    'Send only that token-budgeted packet to the provider the user brought a key for.',
  ],
  architecture: [
    {
      title: 'Desktop app',
      body: 'A Tauri 2 shell with a Rust core for collection and packing, and a React and TypeScript surface for the dashboard, activity inspection, and profile corrections.',
    },
    {
      title: 'Store',
      body: 'Local SQLite, and nothing else. Detailed activity is kept 30 days; imported history past that window is cleaned up automatically.',
    },
    {
      title: 'Companion',
      body: 'An optional Chrome MV3 extension adds active-tab timing. It is a post-MVP experiment, not a dependency — the desktop app works without it.',
    },
    {
      title: 'Providers',
      body: 'OpenAI, Anthropic, or Amazon Bedrock on bring-your-own-key credentials, held in the macOS Keychain. Exclusion lists drop named apps and domains locally, before they can reach a profile at all.',
    },
  ],
  decision: {
    title: 'The decision I would defend',
    body: 'Sanitization is deterministic and happens in the Rust core before any model call — stripping full URLs, absolute paths, credential-like fields, and unrelated raw activity, then enforcing a token budget. Handing the model everything and instructing it to be careful would have been far less work. But a privacy guarantee that depends on a model behaving is not a guarantee. Putting it in the packer makes it a property of the system.',
  },
  takeaway:
    'Local-first is a constraint rather than a marketing line: it decides what you can collect, where you can compute, and how much you are ever allowed to send. It also forces honesty about inference — knov presents work threads as inferences rather than confirmed intent and lets you correct them, because a system that quietly guesses at your day and sounds certain is worse than one that asks.',
};

export type Job = {
  company: string;
  role: string;
  dates: string;
  place: string;
  text: string;
  tags: string;
  link?: ProjectLink;
};

export const EXPERIENCE: Job[] = [
  {
    company: 'Capital Launchers',
    role: 'Tech Lead / CTO',
    dates: 'MAY 2025 — PRESENT',
    place: 'Nagoya, Japan',
    text: 'Built an India business-news platform for Japanese executives: 45+ RSS feeds ingested, deduplicated, and synthesised into quality-gated articles with generated imagery, reducing manual curation to effectively zero. Automated social distribution with n8n and platform APIs, cutting posting work from roughly 2 hours to 15 minutes, and analyzed 300+ companies with Python, the OpenAI API, and Tavily to identify 130 potential GP/CVC partners.',
    tags: 'Next.js · Supabase · Claude · OpenAI · Python · Tavily · n8n',
    link: { label: 'Visit the platform', href: 'https://indobiz-japan.launchers-g.com/', external: true },
  },
  {
    company: 'EAGLYS',
    role: 'Software Engineer Intern',
    dates: 'JUL 2024 — APR 2026',
    place: 'Tokyo, Japan',
    text: 'Built a GPT-2 chatbot system running inside AWS Nitro Enclaves for confidential inference, with RSA-encrypted client-server communication over vsock. Shipped a Flask and boto3 control plane that automates EC2 and enclave management, key handling, and IAM-based access control — taking environment setup from about an hour to 5 minutes. Presented the system to 40+ professionals.',
    tags: 'Python · Flask · boto3 · React · AWS Nitro Enclaves · vsock',
  },
  {
    company: 'GSP Cloud',
    role: 'Frontend & Platform Developer Intern',
    dates: 'JAN 2025 — APR 2025',
    place: 'Seoul, South Korea',
    text: 'Built the console dashboard managing 50+ AI-agent workflows, plus REST APIs behind file-transfer, billing, and data-download flows and a customer-support integration. Tested with 20 pilot users, contributing to a 30% improvement in onboarding satisfaction.',
    tags: 'TypeScript · React · Supabase · REST APIs',
  },
  {
    company: 'BearVFX',
    role: 'Software Engineer Intern',
    dates: 'SEP 2024 — DEC 2024',
    place: 'Taipei, Taiwan',
    text: 'Automated an educational avatar-video pipeline end to end: transcript generation with GPT-3.5, narration with SpeechT5, and Wav2Lip lip-sync composited through OpenCV and FFmpeg — reaching 91%+ lip-sync accuracy.',
    tags: 'Python · PyTorch · OpenAI · SpeechT5 · Wav2Lip · FFmpeg',
    link: { label: 'Source code', href: 'https://github.com/Marstronix218/BearEd', external: true },
  },
];

export type Award = {
  year: string;
  result: string;
  event: string;
  detail: string;
  link?: ProjectLink;
};

export const RECOGNITION: Award[] = [
  {
    year: '2026',
    result: '2nd Prize — Convex Track',
    event: 'YC Growth Hackathon',
    detail: '50+ teams',
    link: { label: 'HookLoop', href: 'https://hookloop-ruddy.vercel.app', external: true },
  },
  {
    year: '2026',
    result: '3rd Place',
    event: 'Auth0 × Stripe Hackathon',
    detail: '50+ teams',
    link: {
      label: 'SOLID Marketplace',
      href: 'https://fb-stripe-marketplace.vercel.app',
      external: true,
    },
  },
  {
    year: '2025',
    result: 'Winner — 1st of 200 teams',
    event: 'Students@AI Seoul Hackathon',
    detail: 'Researcher Connecting Platform',
    link: {
      label: 'View the platform',
      href: 'https://research-nexus-sphere.vercel.app/',
      external: true,
    },
  },
  {
    year: '2024',
    result: 'Winner — 1st of 150 teams',
    event: 'Minerva Hiring Hackathon',
    detail: 'Minerva University',
  },
];
