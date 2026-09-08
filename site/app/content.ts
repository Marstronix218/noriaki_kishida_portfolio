export const PROFILE = {
  name: 'Noriaki Kishida',
  email: 'noriaki@uni.minerva.edu',
  github: 'https://github.com/Marstronix218',
  linkedin: 'https://www.linkedin.com/in/noriaki-kishida/',
  resume: '/noriaki_kishida_resume.pdf',
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
  /** Destination for the circular arrow in the card heading. */
  primary: { href: string; label: string };
};

export const FEATURED_PROJECTS: Project[] = [
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
      { label: 'Case study', href: '#case-study' },
      { label: 'Source code', href: 'https://github.com/Marstronix218/Research-Copilot', external: true },
    ],
    primary: {
      href: 'https://github.com/Marstronix218/Research-Copilot',
      label: 'Explore Research Copilot on GitHub',
    },
  },
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
    links: [
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
];

export const CASE_STUDY = {
  contrast: [
    { label: 'TRADITIONAL AI', steps: ['Ask', 'Answer'] },
    {
      label: 'RESEARCH COPILOT',
      steps: ['Observe', 'Understand context', 'Track knowledge', 'Find gaps', 'Guide next steps'],
    },
  ],
  problem:
    'Web research falls apart in the open tabs. You lose track of sources, read without synthesizing, re-cover ground you already covered, and drift away from the question you started with. None of that is a knowledge problem — it is a process problem.',
  insight:
    'So I did not build another chatbot. I built a layer that watches the research process itself: it holds the goal, follows what you actually read, and stays useful precisely because it is not waiting to be prompted.',
  approach: [
    'Clarify a vague goal through a short multi-step exchange.',
    'Generate four to six concrete research questions to structure the session.',
    'Analyze pages automatically as they are visited.',
    'Extract only the insights that serve the stated goal.',
    'Keep structured session state — sources, insights, and questions answered.',
    'Detect drift and surface the gaps that are still open.',
    'Leave the user to accept or reject every insight.',
  ],
  architecture: [
    {
      title: 'Frontend',
      body: 'Chrome extension: a popup for session setup and settings, a side panel workspace for insights, questions, and source review.',
    },
    {
      title: 'Backend',
      body: 'A FastAPI service owning goal refinement, model interaction, page analysis, and session organization — kept thin enough to run locally.',
    },
    {
      title: 'Storage',
      body: 'Browser-local session state via chrome.storage.local, with the boundary drawn so cloud persistence can be added later without touching the extension.',
    },
    {
      title: 'Degradation',
      body: 'The OpenAI key is optional. Without one, heuristic fallbacks keep clarification and analysis working instead of failing shut.',
    },
  ],
  decision: {
    title: 'The decision I would defend',
    body: 'Showing an AI-generated insight and saving one are separate operations. It would have been easier to persist everything the model produced, but a research tool that quietly fills your notes with its own guesses is worse than no tool. The human stays the one who commits.',
  },
  takeaway:
    'The shift that matters here is from prompt-based AI to context-aware, process-oriented AI — a system that earns its place by understanding what you are already doing, not by waiting for a better prompt.',
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
