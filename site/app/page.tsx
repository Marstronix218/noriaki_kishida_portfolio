import EmailContact from "./email-contact";

const Arrow = () => <span aria-hidden="true">↗</span>;

function Orbit() {
  return (
    <div className="orbit-art" aria-hidden="true">
      <div className="art-top"><span>IDEA → SYSTEM</span><span>NK—001</span></div>
      <div className="orbit-scene">
        <div className="orbit-sphere">
          {Array.from({ length: 16 }, (_, i) => <i key={i} style={{ transform: `rotateY(${i * 11.25}deg)` }} />)}
        </div>
        <span className="orbit-axis axis-x" /><span className="orbit-axis axis-y" />
        <span className="orbit-dot dot-one" /><span className="orbit-dot dot-two" />
      </div>
      <div className="art-bottom"><span>CURIOUS BY DEFAULT.<br />BUILDER BY CHOICE.</span><span className="coordinates">37.77° N<br />122.42° W</span></div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header wrap">
        <a className="wordmark" href="#" aria-label="Noriaki Kishida, home">nk<span>.</span></a>
        <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a></nav>
        <a className="header-contact" href="mailto:noriaki@uni.minerva.edu">Let’s talk <Arrow /></a>
      </header>
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-intro"><span className="eyebrow"><span className="status-dot" /> NORIAKI KISHIDA</span><span className="eyebrow location">BASED IN SAN FRANCISCO</span></div>
          <div className="hero-grid">
            <div className="hero-copy"><h1 id="hero-title">Ideas are easy.<br />I build the<br /><em>real thing.</em></h1><p>I’m Noriaki, a software engineer turning AI into products that work in the real world.</p><div className="hero-actions"><a className="button button-lime" href="#work">Explore my work <span aria-hidden="true">↓</span></a><a className="text-link" href="/noriaki_kishida_resume.pdf" target="_blank" rel="noopener noreferrer">View resume <Arrow /></a></div></div>
            <Orbit />
          </div>
          <div className="hero-footer"><span>AI AGENTS · FULL-STACK · AUTOMATION</span><span>SCROLL TO EXPLORE <span aria-hidden="true">↓</span></span></div>
        </section>
        <section id="work" className="work-section wrap section" aria-labelledby="work-title">
          <div className="section-label"><span>01 / SELECTED WORK</span><span>IDEAS, SHIPPED.</span></div>
          <div className="section-heading"><h2 id="work-title">Built with intent.</h2><p>From a personal desktop assistant to agents that get things done. A few things I’ve put into the world.</p></div>
          <div className="project-grid">
            <article className="project project-featured">
              <div className="project-art knov-art" aria-hidden="true">
                <div className="knov-art-copy"><span className="art-kicker">PERSONAL CONTEXT, CONNECTED</span><span className="knov-logo">knov<span>●</span></span><span className="knov-tagline">A little context.<br />A lot of possibility.</span><span className="art-caption">CONCEPT VIEW / MACOS</span></div>
                <div className="knov-window"><div className="window-top"><span className="window-dots"><i /><i /><i /></span><span>your working memory</span><span>⌘ K</span></div><div className="window-content"><div className="memory-label"><span className="memory-dot" /> LOCAL MEMORY</div><strong>Pick up where<br />your mind left off.</strong><div className="context-line"><span>Code</span><i /><span>Browser</span><i /><span>Notes</span></div><div className="memory-thread"><span className="thread-icon">⌁</span><div><b>Connect the dots</b><p>Activity → work threads → next steps</p></div><span>↗</span></div><div className="window-foot"><span>YOUR CONTEXT. YOUR CONTROL.</span><span>◉</span></div></div></div>
              </div>
              <div className="project-info"><div className="project-heading"><div><span className="project-category">PERSONAL PROJECT · TECHNICAL ALPHA</span><h3>knov</h3></div><a className="project-go" href="https://github.com/Marstronix218/knov" target="_blank" rel="noopener noreferrer" aria-label="Explore knov on GitHub"><Arrow /></a></div><div className="featured-description"><p>A local-first macOS assistant that turns your app and browser activity into work threads and useful next steps. Built with local storage, pause and delete controls, and Keychain-secured credentials.</p><div className="project-footer"><div className="tags"><span>Tauri</span><span>Rust</span><span>React</span><span>SQLite</span></div><a className="text-link" href="https://github.com/Marstronix218/knov" target="_blank" rel="noopener noreferrer">Explore the code <Arrow /></a></div></div></div>
            </article>
            <article className="project">
              <div className="project-art hook-art" aria-hidden="true"><div className="art-topline"><span>HOOKLOOP</span><span>↗</span></div><div className="hook-composition"><div className="hook-headline">Create.<br />Test.<br /><em>Repeat.</em></div><div className="agent-flow"><div><span>01</span> Strategist <i /></div><b>↓</b><div><span>02</span> Generator <i /></div><b>↓</b><div><span>03</span> Analyst <i /></div></div></div><span className="art-caption">CONCEPT VIEW / AUTONOMOUS AD EXPERIMENTS</span></div>
              <div className="project-info"><span className="award"><span aria-hidden="true">✳</span> 2nd prize · Convex track, YC Growth Hackathon</span><div className="project-heading"><div><span className="project-category">AI AGENTS · HACKATHON BUILD</span><h3>HookLoop</h3></div><a className="project-go" href="https://hookloop-ruddy.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Open the HookLoop demo"><Arrow /></a></div><p>An autonomous paid-ad agent that creates reels, simulates campaigns, and learns from the results. Three specialized agents close the loop from strategy to analysis.</p><div className="tags"><span>Next.js</span><span>Convex</span><span>OpenAI</span><span>Sora</span></div><div className="project-links"><a className="text-link" href="https://hookloop-ruddy.vercel.app" target="_blank" rel="noopener noreferrer">Live demo <Arrow /></a><a className="text-link" href="https://github.com/syang0624/hookloop" target="_blank" rel="noopener noreferrer">Source code <Arrow /></a></div></div>
            </article>
            <article className="project">
              <div className="project-art solid-art" aria-hidden="true"><div className="art-topline"><span>BUY WITH CONFIDENCE</span><span>↗</span></div><div className="solid-composition"><span className="solid-logo">SOLID<span>.</span></span><div className="solid-card"><span className="solid-check">✓</span><div><b>Two confirmations.<br />One confident handoff.</b><span>BUYER + SELLER → PAYMENT RELEASE</span></div></div></div><span className="art-caption">CONCEPT VIEW / MARKETPLACE BUYING AGENT</span></div>
              <div className="project-info"><span className="award"><span aria-hidden="true">✳</span> 3rd place · Auth0 × Stripe Hackathon</span><div className="project-heading"><div><span className="project-category">AGENTIC COMMERCE · HACKATHON DEMO</span><h3>SOLID Marketplace</h3></div><a className="project-go" href="https://fb-stripe-marketplace.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Open the SOLID Marketplace demo"><Arrow /></a></div><p>A buying-agent demo that finds listings, flags scam signals, and simulates negotiations. Protected meetup payments use Stripe Connect and confirmation from both sides.</p><div className="tags"><span>Next.js</span><span>OpenAI</span><span>Auth0</span><span>Stripe</span></div><div className="project-links"><a className="text-link" href="https://fb-stripe-marketplace.vercel.app" target="_blank" rel="noopener noreferrer">Live demo <Arrow /></a><a className="text-link" href="https://github.com/syang0624/fb_stripe_marketplace" target="_blank" rel="noopener noreferrer">Source code <Arrow /></a></div></div>
            </article>
          </div>
          <a className="all-work" href="https://github.com/Marstronix218" target="_blank" rel="noopener noreferrer"><span>There’s more where that came from.</span><span>Explore my GitHub <Arrow /></span></a>
        </section>

        <section id="experience" className="experience-section" aria-labelledby="experience-title"><div className="wrap section">
          <div className="section-label"><span>02 / EXPERIENCE</span><span>BEYOND THE SIDE PROJECTS</span></div>
          <div className="impact-stats"><div><strong>5<span>+</span></strong><span>Hackathon awards<br />Summer 2026</span></div><div><strong>45<span>+</span></strong><span>RSS feeds automated<br />Capital Launchers</span></div><div><strong>60<span>→</span>5<small>min</small></strong><span>Secure AI setup time<br />EAGLYS</span></div></div>
          <div className="experience-grid"><div className="experience-intro"><h2 id="experience-title">Real teams.<br />Real impact.</h2><p>I like building where engineering meets a real problem — across AI, security, and automation.</p><a className="text-link" href="/noriaki_kishida_resume.pdf" download>Download my resume <span aria-hidden="true">↓</span></a></div><div className="timeline">
          {[
            { company: "Capital Launchers", role: "Tech Lead / CTO", dates: "MAY 2025 — PRESENT", place: "Nagoya, Japan", text: "Built an India business news platform for Japanese executives, automating clustering, article generation, and imagery from 45+ RSS feeds. Reduced social posting from 2 hours to 15 minutes and analyzed 300+ companies to identify 130 potential partners.", tags: "Next.js · OpenAI · Supabase · Python · n8n" },
            { company: "EAGLYS", role: "Software Engineer Intern", dates: "JUL 2024 — APR 2026", place: "Tokyo, Japan", text: "Built privacy-preserving GPT-2 inference with AWS Nitro Enclaves, an EC2/Enclave control plane, and an RSA-encrypted client-server API. Automated deployment and key management to reduce setup from 1 hour to 5 minutes.", tags: "Python · Flask · React · AWS Nitro Enclaves" },
            { company: "GSP Cloud", role: "Frontend & Platform Developer Intern", dates: "JAN 2025 — APR 2025", place: "Seoul, South Korea", text: "Built a console for 50+ AI agent workflows and secure APIs for billing and data transfers. Tested with 20 pilot users, contributing to a 30% improvement in onboarding satisfaction.", tags: "TypeScript · React · Supabase · REST APIs" },
            { company: "BearVFX", role: "Software Engineer Intern", dates: "SEP 2024 — DEC 2024", place: "Taipei, Taiwan", text: "Automated educational avatar videos from transcript generation through speech synthesis and lip-sync. Combined GPT-3.5, SpeechT5, and Wav2Lip in a Python pipeline that achieved 91%+ lip-sync accuracy.", tags: "Python · PyTorch · OpenCV · FFmpeg" },
          ].map((job, index) => <details className="experience-item" key={job.company} open={index === 0}><summary><span className="experience-date">{job.dates}</span><span className="experience-job"><strong>{job.company}</strong><span>{job.role}</span></span><span className="expand-icon" aria-hidden="true">+</span></summary><div className="experience-detail"><span className="job-location">{job.place}</span><p>{job.text}</p><span className="job-stack">{job.tags}</span></div></details>)}
          </div></div>
        </div></section>

        <section id="about" className="about-section wrap section" aria-labelledby="about-title"><div className="section-label"><span>03 / A LITTLE ABOUT ME</span><span>ALWAYS A WORK IN PROGRESS</span></div><div className="about-grid"><div><h2 id="about-title">A global perspective.<br />A builder’s mindset.</h2><p className="about-lead">I’m studying Computer Science and Artificial Intelligence at Minerva University, with a minor in Economics.</p><p>My work has taken me across teams in Japan, South Korea, and Taiwan. Now based in San Francisco, I’m drawn to problems that sit between intelligent software and everyday life.</p><p>Whether it’s a hackathon prototype or a business platform, I care about taking an idea all the way to something people can use.</p><div className="education"><span className="education-mark" aria-hidden="true">M</span><div><strong>Minerva University</strong><span>B.Sc. Computer Science & AI · Expected May 2027</span></div></div></div><div className="toolkit"><span className="toolkit-title">TOOLS I REACH FOR</span><div><h3>Languages</h3><p>Python <span>/</span> TypeScript <span>/</span> JavaScript<br />Rust <span>/</span> SQL</p></div><div><h3>Products & interfaces</h3><p>React <span>/</span> Next.js <span>/</span> Tauri<br />Flask <span>/</span> Node.js</p></div><div><h3>AI & infrastructure</h3><p>OpenAI <span>/</span> PyTorch <span>/</span> AWS<br />Supabase <span>/</span> Docker <span>/</span> n8n</p></div><div className="toolkit-note"><span aria-hidden="true">↳</span> The right tool for the problem.<br />Always learning the next one.</div></div></div></section>

        <section id="contact" className="contact-section wrap" aria-labelledby="contact-title"><div className="section-label"><span>04 / WHAT’S NEXT?</span><span><span className="status-dot" /> START WITH A CONVERSATION</span></div><div className="contact-heading"><h2 id="contact-title">Let’s build<br /><em>something good.</em></h2><a className="contact-arrow" href="mailto:noriaki@uni.minerva.edu" aria-label="Email Noriaki Kishida"><Arrow /></a></div><div className="contact-bottom"><EmailContact /><div className="social-links"><a href="https://github.com/Marstronix218" target="_blank" rel="noopener noreferrer">GitHub <Arrow /></a><a href="https://www.linkedin.com/in/noriaki-kishida/" target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a><a href="/noriaki_kishida_resume.pdf" target="_blank" rel="noopener noreferrer">Resume <Arrow /></a></div></div></section>
      </main>
      <footer className="site-footer wrap"><a className="wordmark" href="#" aria-label="Back to top">nk<span>.</span></a><span>© 2026 NORIAKI KISHIDA</span><a href="#">BACK TO TOP <span aria-hidden="true">↑</span></a></footer>
    </>
  );
}
