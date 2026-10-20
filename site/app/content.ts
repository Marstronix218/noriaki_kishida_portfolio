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
  /** Real product screenshot shown on a tinted frame; cards without one fall back to illustrated art. */
  screenshot?: { src: string; alt: string; width: number; height: number; tint: string };
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'knov',
    name: 'knov',
    category: 'PERSONAL PROJECT · TECHNICAL ALPHA',
    summary:
      'A local-first macOS app that finds revenue a small service business is about to miss. It cross-checks contracts, email, Slack, and work activity to catch unbilled extra work, missing invoices, and overdue promises, shows the evidence behind each one, and recommends the next step without ever acting on its own.',
    buildLabel: 'Built',
    build:
      'A Tauri 2 and Rust core with a React front end over a local SQLite store. Detection is a deterministic rule engine, not a model: every finding needs source evidence, unknown amounts stay unknown, and money is tracked in integer cents. It sits on a local context layer that groups app, browser, and editor activity into work threads, with read-only Gmail and Slack connectors, Keychain-held credentials, and a local model or your own API key for the optional AI features.',
    tags: ['Tauri 2', 'Rust', 'React', 'SQLite'],
    caseStudy: true,
    links: [
      { label: 'Read the case study', href: '#case-study' },
      { label: 'Source code', href: 'https://github.com/Marstronix218/knov', external: true },
    ],
    primary: { href: 'https://github.com/Marstronix218/knov', label: 'Explore knov on GitHub' },
    screenshot: { src: '/projects/knov.webp', alt: 'knov Home page in simulation mode, listing an uninvoiced milestone and an overdue promise with the evidence behind each and a recommended action', width: 1600, height: 1000, tint: '#dce4d5' },
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
      'Three specialized agents (Strategist, Generator, Analyst) around a simulator that allocates budget with Thompson sampling. Structured OpenAI outputs tag the creative DNA of every reel so results can be attributed, and Convex reactive queries stream the run live.',
    tags: ['Next.js', 'Convex', 'OpenAI', 'Sora 2'],
    links: [
      { label: 'Live demo', href: 'https://hookloop-ruddy.vercel.app', external: true },
      { label: 'Source code', href: 'https://github.com/syang0624/hookloop', external: true },
    ],
    primary: { href: 'https://hookloop-ruddy.vercel.app', label: 'Open the HookLoop demo' },
    screenshot: { src: '/projects/hookloop.webp', alt: 'HookLoop week-two results: ad variants marked winning or killed, a creative-DNA cost heatmap, and a seven-day CAC chart', width: 1106, height: 694, tint: '#c7b8d9' },
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
    id: 'confidential-llm',
    name: 'Confidential LLM',
    category: 'CONFIDENTIAL COMPUTING · OPEN SOURCE',
    summary:
      'A chat app whose language model runs inside an AWS Nitro Enclave. Prompts and answers are encrypted end to end, so the server hosting the model only ever relays ciphertext, and not even its administrator can read what you asked.',
    buildLabel: 'Built',
    build:
      'Three parts with a hard trust boundary: a Flask control plane that holds the keys and drives EC2, SSM, and KMS through boto3; a data-plane host that only bridges HTTP to vsock; and the enclave, which decrypts, runs Qwen2.5-0.5B, and re-encrypts the answer. The React UI shows every encryption step live, a Docker Compose mock mode runs the full pipeline without AWS, and the README is explicit about what comes next: attestation verification and in-browser encryption.',
    tags: ['AWS Nitro Enclaves', 'Flask', 'React', 'Docker Compose'],
    links: [
      {
        label: 'Source code',
        href: 'https://github.com/Marstronix218/confidential-llm-on-nitro-enclaves',
        external: true,
      },
    ],
    primary: {
      href: 'https://github.com/Marstronix218/confidential-llm-on-nitro-enclaves',
      label: 'Explore Confidential LLM on GitHub',
    },
    screenshot: { src: '/projects/confidential-llm.webp', alt: 'Confidential LLM chat showing an encrypted response, the decrypted answer, and the seven-step message flow', width: 1020, height: 440, tint: '#c9cfd6' },
  },
  {
    id: 'indobiz',
    name: 'IndoBiz Japan',
    category: 'PRODUCTION PLATFORM · GLOBAL LAUNCHERS INC.',
    summary:
      'An India business-intelligence platform for Japanese companies: news, regulation, market signals, and investment activity, each summary published with its evidence attached.',
    buildLabel: 'Built',
    build:
      'Next.js 16 and Supabase over a Python scraping layer, feeding a Claude synthesis pipeline that deduplicates, classifies, and quality-gates every story before it publishes, keeping provenance snippets attached to each summary. Memberships run on Stripe, and LINE Login is wired in as a custom OIDC provider.',
    tags: ['Next.js 16', 'Supabase', 'Claude SDK', 'Stripe'],
    links: [
      { label: 'Live site', href: 'https://indobiz-japan.launchers-g.com/', external: true },
      { label: 'Source code', href: 'https://github.com/Marstronix218/indobiz_japan', external: true },
    ],
    primary: { href: 'https://indobiz-japan.launchers-g.com/', label: 'Open the IndoBiz Japan platform' },
    screenshot: { src: '/projects/indobiz.webp', alt: 'IndoBiz Japan home page with a live market ticker and Japanese-language India business headlines', width: 1440, height: 900, tint: '#dcc4ae' },
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
    screenshot: { src: '/projects/idobata.webp', alt: 'idobataAI landing page with a sample thread where a person shares a finished task and gets replies', width: 1600, height: 1157, tint: '#e0cbc9' },
  },
  {
    id: 'research-copilot',
    name: 'Research Copilot',
    category: 'BROWSER-NATIVE AI · PERSONAL PROJECT',
    summary:
      'A goal-oriented research assistant that lives in the browser. You give it a research goal; it generates the questions worth answering, reads the pages you actually visit, keeps only the goal-relevant insights, and tells you when you have drifted off topic.',
    buildLabel: 'Built',
    build:
      'A Chrome extension (popup for setup, side panel for the workspace) over a FastAPI backend that handles goal clarification, question generation, and page analysis. Insights cluster by topic or timeline, drift detection watches the session, and heuristic fallbacks keep the extension useful when no model key is configured.',
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
    { label: 'TYPICAL AI ASSISTANT', steps: ['Hand over your inbox', 'Get a confident guess'] },
    {
      label: 'KNOV',
      steps: ['Import locally', 'Link evidence', 'Apply rules', 'Ask when unsure', 'Draft, never send'],
    },
  ],
  problem:
    'Small service businesses lose money in the gaps between their tools. A client asks for a third dashboard in Slack when the contract covered two. A milestone is signed off over email and never invoiced. A promised proposal slips past its date. The evidence exists, split across contracts, inboxes, chat, and the work itself, and nobody is paid to cross-reference it. The tools that could do it are the ones you would have to hand all of it to.',
  insight:
    'So knov does the cross-referencing where the data already lives, and holds every finding to an evidence bar. A scope candidate needs an explicit request and the work that answered it. An overdue promise needs a reliable due date. A missing invoice is flagged for billing verification, not claimed as lost revenue. Where the evidence runs out, knov asks the owner instead of guessing.',
  approach: [
    'Build a local context layer from foreground apps, window titles, chosen browser history, and metadata-only editor signals, grouped into work threads.',
    'Import contracts on the Mac (plain text, Word, and text PDFs through macOS tools) and extract scope, dates, and amounts as a proposal the owner corrects.',
    'Pull selected Gmail and Slack messages through read-only, scoped connectors, with tokens in the macOS Keychain.',
    'Link requests, approvals, and work threads to the agreement they belong to.',
    'Run deterministic rules for unbilled scope changes, uninvoiced milestones, and overdue commitments, deduplicated and tied to their source evidence.',
    'Ask a targeted clarification when approval or billing is unknown, and treat the answer as authoritative for that project.',
    'Prepare an editable internal draft, such as a change order, and record any payment separately from the value at stake.',
  ],
  architecture: [
    {
      title: 'Desktop app',
      body: 'A Tauri 2 shell with a Rust core for collection, detection, and connectors, and a React and TypeScript surface for Home, Opportunities, Sources, and the activity timeline.',
    },
    {
      title: 'Store',
      body: 'Local SQLite for activity, agreements, evidence, findings, drafts, and outcomes. Raw activity and synced message excerpts expire after 30 days; agreements you import deliberately stay until you delete them.',
    },
    {
      title: 'Simulation',
      body: 'Ten fictional businesses, from a web agency to a translation studio, whose sources you connect one at a time to watch the findings change. The fixtures are isolated from real data and run on a fixed clock, so every result reproduces.',
    },
    {
      title: 'AI, optional',
      body: 'A local model through Ollama or LM Studio keeps everything on the Mac; OpenAI, Anthropic, or Amazon Bedrock keys live in the Keychain. Revenue detection itself never calls a model.',
    },
  ],
  decision: {
    title: 'The decision I would defend',
    body: 'Findings come from deterministic rules in the Rust core, not from a model. Pointing an LLM at a business’s contracts and inbox and asking what it is owed would have been faster to build and better in a demo. But a model that confidently invents an unbilled $5,000 costs the owner a client relationship, and a model that reads client email can be steered by it. Rules that demand evidence keep unknown amounts unknown, treat source text strictly as data, and send no contract or message anywhere, so every finding traces back to the lines that produced it.',
  },
  takeaway:
    'Money raises the bar on honesty. knov keeps what it saw apart from what it inferred, the value at stake apart from money actually received, and an approved draft apart from an action taken: approval never sends an email, posts a message, or issues an invoice. Local-first decides what knov can collect and where it can compute; the evidence bar decides what it is allowed to claim.',
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
    company: 'Global Launchers Inc.',
    role: 'Tech Lead / CTO',
    dates: 'MAY 2025 – PRESENT',
    place: 'Nagoya, Japan',
    text: 'Built an India business-news platform for Japanese executives: 45+ RSS feeds ingested, deduplicated, and synthesised into quality-gated articles with generated imagery, reducing manual curation to effectively zero. Automated social distribution with n8n and platform APIs, cutting posting work from roughly 2 hours to 15 minutes, and analyzed 300+ companies with Python, the OpenAI API, and Tavily to identify 130 potential GP/CVC partners.',
    tags: 'Next.js · Supabase · Claude · OpenAI · Python · Tavily · n8n',
    link: { label: 'Visit the platform', href: 'https://indobiz-japan.launchers-g.com/', external: true },
  },
  {
    company: 'EAGLYS',
    role: 'Software Engineer Intern',
    dates: 'JUL 2024 – APR 2026',
    place: 'Tokyo, Japan',
    text: 'Built a GPT-2 chatbot system running inside AWS Nitro Enclaves for confidential inference, with RSA-encrypted client-server communication over vsock. Shipped a Flask and boto3 control plane that automates EC2 and enclave management, key handling, and IAM-based access control, taking environment setup from about an hour to 5 minutes. Presented the system to 40+ professionals.',
    tags: 'Python · Flask · boto3 · React · AWS Nitro Enclaves · vsock',
    link: {
      label: 'Open-source version',
      href: 'https://github.com/Marstronix218/confidential-llm-on-nitro-enclaves',
      external: true,
    },
  },
  {
    company: 'GSP Cloud',
    role: 'Frontend & Platform Developer Intern',
    dates: 'JAN 2025 – APR 2025',
    place: 'Seoul, South Korea',
    text: 'Built the console dashboard managing 50+ AI-agent workflows, plus REST APIs behind file-transfer, billing, and data-download flows and a customer-support integration. Tested with 20 pilot users, contributing to a 30% improvement in onboarding satisfaction.',
    tags: 'TypeScript · React · Supabase · REST APIs',
  },
  {
    company: 'BearVFX',
    role: 'Software Engineer Intern',
    dates: 'SEP 2024 – DEC 2024',
    place: 'Taipei, Taiwan',
    text: 'Automated an educational avatar-video pipeline end to end: transcript generation with GPT-3.5, narration with SpeechT5, and Wav2Lip lip-sync composited through OpenCV and FFmpeg, reaching 91%+ lip-sync accuracy.',
    tags: 'Python · PyTorch · OpenAI · SpeechT5 · Wav2Lip · FFmpeg',
    link: { label: 'Source code', href: 'https://github.com/Marstronix218/BearEd', external: true },
  },
];

export type Award = {
  year: string;
  result: string;
  event: string;
  detail: string;
  links?: ProjectLink[];
};

export const RECOGNITION: Award[] = [
  {
    year: '2026',
    result: 'Audience Favorite Prize',
    event: 'AI Supply Chain Hackathon',
    detail: 'RxKitchen, multi-agent clinical meal planning',
    links: [
      {
        label: 'Announcement',
        href: 'https://www.linkedin.com/feed/update/urn:li:activity:7488728229093220352/',
        external: true,
      },
    ],
  },
  {
    year: '2026',
    result: '3rd Place',
    event: 'Auth0 × Stripe Hackathon',
    detail: '50+ teams',
    links: [
      { label: 'SOLID Marketplace', href: 'https://fb-stripe-marketplace.vercel.app', external: true },
      {
        label: 'Announcement',
        href: 'https://www.linkedin.com/feed/update/urn:li:activity:7490104225042051072/',
        external: true,
      },
    ],
  },
  {
    year: '2026',
    result: '2nd Prize, Convex Track',
    event: 'YC Growth Hackathon',
    detail: '50+ teams',
    links: [
      { label: 'HookLoop', href: 'https://hookloop-ruddy.vercel.app', external: true },
      { label: 'Demo video', href: 'https://www.youtube.com/watch?v=RyWogQuJ2y4', external: true },
      { label: 'Post on X', href: 'https://x.com/darthdebater218/status/2074287531194253730', external: true },
    ],
  },
  {
    year: '2026',
    result: '3rd Place',
    event: 'Beta Fund AI Agents Hackathon',
    detail: '30+ teams',
  },
  {
    year: '2026',
    result: '2nd Place',
    event: 'Kane CLI Hack Day (TestMu AI × AWS)',
    detail: '20+ teams',
  },
  {
    year: '2025',
    result: 'Japan Champion, 5th worldwide',
    event: 'Fact-check World Competition (GenAsia Challenge)',
    detail: '1st of 70+ teams in Japan · 5th of 25 at the world finals · featured on TV Asahi',
    links: [
      {
        label: 'About the finals',
        href: 'https://en.tfc-taiwan.org.tw/youth-fact-checkers-from-five-countries-compete-in-2025-genasia-challenge-japan-takes-top-prize/',
        external: true,
      },
    ],
  },
  {
    year: '2025',
    result: 'Winner, 1st of 200 teams',
    event: 'Students@AI Seoul Hackathon',
    detail: 'Researcher Connecting Platform',
    links: [{ label: 'View the platform', href: 'https://research-nexus-sphere.vercel.app/', external: true }],
  },
  {
    year: '2024',
    result: 'Winner, 1st of 150 teams',
    event: 'Minerva Hiring Hackathon',
    detail: 'Minerva University',
  },
];
