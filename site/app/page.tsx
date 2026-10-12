import Image from "next/image";
import EmailContact from "./email-contact";
import {
  CASE_STUDY,
  EXPERIENCE,
  FEATURED_PROJECTS,
  PROFILE,
  PROJECTS,
  RECOGNITION,
  type Project,
} from "./content";

const Arrow = () => <span aria-hidden="true">↗</span>;
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

const GitHubMark = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.3v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
  </svg>
);

const LinkedInMark = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

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
        <Image className="orbit-photo" src="/noriaki-profile.png" alt="" width={320} height={320} sizes="(max-width: 640px) 140px, 210px" priority />
      </div>
      <div className="art-bottom"><span>CURIOUS BY DEFAULT.<br />BUILDER BY CHOICE.</span><span className="coordinates">37.77° N<br />122.42° W</span></div>
    </div>
  );
}

function ResearchCopilotArt() {
  return (
    <div className="project-art rc-art" aria-hidden="true">
      <div className="rc-copy">
        <span className="art-kicker">OBSERVE → TRACK → GUIDE</span>
        <span className="rc-logo">research<span>copilot</span></span>
        <span className="rc-tagline">Know what you’ve learned.<br />And what you haven’t.</span>
        <span className="art-caption">CONCEPT VIEW / CHROME SIDE PANEL</span>
      </div>
      <div className="rc-panel">
        <div className="window-top"><span className="window-dots"><i /><i /><i /></span><span>research session</span><span>◑</span></div>
        <div className="rc-panel-body">
          <div className="rc-goal"><span className="rc-goal-label">GOAL</span><b>Understand poverty in Japan</b></div>
          <ul className="rc-questions">
            <li><i className="done">✓</i> Which regions are most affected?</li>
            <li><i className="done">✓</i> How is the poverty line defined?</li>
            <li><i className="open">○</i> Which policies have been tried?</li>
          </ul>
          <div className="rc-gap"><span className="rc-gap-icon">⌁</span><div><b>Gap detected</b><p>One question still open</p></div><span>↗</span></div>
          <div className="window-foot"><span>SOURCES TRACKED · INSIGHTS SAVED</span><span>◉</span></div>
        </div>
      </div>
    </div>
  );
}

function KnovArt() {
  return (
    <div className="project-art knov-art" aria-hidden="true">
      <div className="knov-art-copy"><span className="art-kicker">PERSONAL CONTEXT, CONNECTED</span><span className="knov-logo">knov</span><span className="knov-tagline">A little context.<br />A lot of possibility.</span><span className="art-caption">CONCEPT VIEW / MACOS</span></div>
      <div className="knov-window"><div className="window-top"><span className="window-dots"><i /><i /><i /></span><span>your working memory</span><span>⌘ K</span></div><div className="window-content"><div className="memory-label"><span className="memory-dot" /> LOCAL MEMORY</div><strong>Pick up where<br />your mind left off.</strong><div className="context-line"><span>Code</span><i /><span>Browser</span><i /><span>Notes</span></div><div className="memory-thread"><span className="thread-icon">⌁</span><div><b>Connect the dots</b><p>Activity → work threads → next steps</p></div><span>↗</span></div><div className="window-foot"><span>YOUR CONTEXT. YOUR CONTROL.</span><span>◉</span></div></div></div>
    </div>
  );
}

function HookLoopArt() {
  return (
    <div className="project-art hook-art" aria-hidden="true"><div className="art-topline"><span>HOOKLOOP</span><span>↗</span></div><div className="hook-composition"><div className="hook-headline">Create.<br />Test.<br /><em>Repeat.</em></div><div className="agent-flow"><div><span>01</span> Strategist <i /></div><b>↓</b><div><span>02</span> Generator <i /></div><b>↓</b><div><span>03</span> Analyst <i /></div></div></div><span className="art-caption">CONCEPT VIEW / AUTONOMOUS AD EXPERIMENTS</span></div>
  );
}

function SolidArt() {
  return (
    <div className="project-art solid-art" aria-hidden="true"><div className="art-topline"><span>BUY WITH CONFIDENCE</span><span>↗</span></div><div className="solid-composition"><span className="solid-logo">SOLID</span><div className="solid-card"><span className="solid-check">✓</span><div><b>Two confirmations.<br />One confident handoff.</b><span>BUYER + SELLER → PAYMENT RELEASE</span></div></div></div><span className="art-caption">CONCEPT VIEW / MARKETPLACE BUYING AGENT</span></div>
  );
}

function IndoBizArt() {
  return (
    <div className="project-art indo-art" aria-hidden="true">
      <div className="art-topline"><span>INDOBIZ JAPAN</span><span>↗</span></div>
      <div className="indo-composition">
        <div className="indo-headline">India.<br />Decoded<br /><em>for Japan.</em></div>
        <div className="indo-stack">
          <div className="indo-card">
            <span className="indo-tag">REGULATION</span>
            <b>Summary with the<br />evidence attached.</b>
            <span className="indo-src">SOURCES VERIFIED</span>
          </div>
          <div className="indo-ticker"><span>USD/INR</span><i /><span>NIFTY</span><i /><span>CRUDE</span></div>
        </div>
      </div>
      <span className="art-caption">CONCEPT VIEW / INDIA BUSINESS INTELLIGENCE</span>
    </div>
  );
}

function IdobataArt() {
  return (
    <div className="project-art idobata-art" aria-hidden="true">
      <div className="art-topline"><span>IDOBATA AI</span><span>↗</span></div>
      <div className="idobata-composition">
        <div className="idobata-headline">Private<br />by default.<br /><em>Shared by choice.</em></div>
        <div className="idobata-stack">
          <div className="idobata-task"><span className="idobata-check">✓</span><div><b>Finish the draft</b><span>PRIVATE</span></div></div>
          <div className="idobata-reply"><span className="idobata-avatar">◕</span><div><b>Nice work.</b><span className="idobata-ai-tag">AI PERSONA</span></div></div>
        </div>
      </div>
      <span className="art-caption">CONCEPT VIEW / PRIVACY-FIRST PRODUCTIVITY NETWORK</span>
    </div>
  );
}

function ProjectInfo({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <div className="project-info">
      {project.caseStudy && <a className="case-badge" href="#case-study"><span aria-hidden="true">✦</span> Featured case study <span aria-hidden="true">↓</span></a>}
      {project.award && <span className="award"><span aria-hidden="true">✦</span> {project.award}</span>}
      <div className="project-heading">
        <div>
          <span className="project-category">{project.category}</span>
          <h3>{project.name}</h3>
        </div>
        <a className="project-go" href={project.primary.href} {...ext} aria-label={project.primary.label}><Arrow /></a>
      </div>
      <div className={featured ? "featured-description" : undefined}>
        <div className="project-body">
          <p>{project.summary}</p>
          <dl className="project-build">
            <dt>{project.buildLabel}</dt>
            <dd>{project.build}</dd>
          </dl>
        </div>
        <div className="project-footer">
          <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <div className="project-links">
            {project.links.map((link) => (
              <a
                key={link.label}
                className="text-link"
                href={link.href}
                {...(link.external ? ext : {})}
              >
                {link.label} {link.external ? <Arrow /> : <span aria-hidden="true">↓</span>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const PROJECT_ART: Record<string, () => React.JSX.Element> = {
  "research-copilot": ResearchCopilotArt,
  knov: KnovArt,
  hookloop: HookLoopArt,
  solid: SolidArt,
  indobiz: IndoBizArt,
  idobata: IdobataArt,
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header wrap">
        <a className="wordmark" href="#" aria-label="Noriaki Kishida, home">N<span>/</span>K</a>
        <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#recognition">Recognition</a></nav>
        <a className="header-contact" href={`mailto:${PROFILE.email}`}>Let’s talk <Arrow /></a>
      </header>
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-intro"><span className="eyebrow"><span className="status-dot" /> NORIAKI KISHIDA</span><span className="eyebrow location">BASED IN SAN FRANCISCO</span></div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title">Ideas are easy.<br />I build the<br /><em>real thing.</em></h1>
              <p>I’m Noriaki, a software engineer building AI agents, secure infrastructure, and end-to-end products that solve real problems.</p>
              <div className="hero-actions">
                <a className="button button-lime" href="#work">View my work <span aria-hidden="true">↓</span></a>
                <a className="button button-ghost" href={PROFILE.resume} {...ext}>Resume <Arrow /></a>
                <span className="hero-socials">
                  <a href={PROFILE.github} {...ext} aria-label="GitHub profile (opens in a new tab)" title="GitHub"><GitHubMark /></a>
                  <a href={PROFILE.linkedin} {...ext} aria-label="LinkedIn profile (opens in a new tab)" title="LinkedIn"><LinkedInMark /></a>
                </span>
              </div>
            </div>
            <Orbit />
          </div>
          <div className="hero-footer"><span>AI AGENTS · SECURE INFRASTRUCTURE · FULL-STACK PRODUCTS</span><span>SCROLL TO EXPLORE <span aria-hidden="true">↓</span></span></div>
        </section>

        <section id="work" className="work-section wrap section" aria-labelledby="work-title">
          <div className="section-label"><span>01 / SELECTED WORK</span><span>IDEAS, SHIPPED.</span></div>
          <div className="section-heading"><h2 id="work-title">Built with intent.</h2><p>Research tooling, a local-first desktop assistant, deployed platforms, and agents that carry a task from start to finish. Each one solved a problem I actually had.</p></div>
          <div className="project-grid">
            {FEATURED_PROJECTS.map((project) => {
              const Art = PROJECT_ART[project.id];
              return (
                <article className="project project-featured" key={project.id}>
                  <Art />
                  <ProjectInfo project={project} featured />
                </article>
              );
            })}
            {PROJECTS.map((project) => {
              const Art = PROJECT_ART[project.id];
              return (
                <article className="project" key={project.id}>
                  <Art />
                  <ProjectInfo project={project} />
                </article>
              );
            })}
          </div>
          <a className="all-work" href={PROFILE.github} {...ext}><span>There’s more where that came from.</span><span>Explore my GitHub <Arrow /></span></a>
        </section>

        <section id="case-study" className="case-section" aria-labelledby="case-title">
          <div className="wrap section">
            <div className="section-label"><span>02 / FEATURED CASE STUDY</span><span>LOCAL-FIRST · MACOS</span></div>
            <div className="section-heading"><div className="case-title-block"><span className="case-project">knov</span><h2 id="case-title">Local by architecture,<br />not by promise.</h2></div><p>A closer look at <strong>knov</strong>, the local-first macOS assistant from the work above — how it rebuilds your working context on your own machine, and why so little of it ever leaves. Technical alpha, Apple Silicon.</p></div>

            <div className="contrast">
              {CASE_STUDY.contrast.map((row) => (
                <div className="contrast-row" key={row.label}>
                  <span className="contrast-label">{row.label}</span>
                  <ol className="contrast-steps">
                    {row.steps.map((step) => <li key={step}>{step}</li>)}
                  </ol>
                </div>
              ))}
            </div>

            <div className="case-grid">
              <div className="case-block">
                <h3>The problem</h3>
                <p>{CASE_STUDY.problem}</p>
              </div>
              <div className="case-block">
                <h3>The product insight</h3>
                <p>{CASE_STUDY.insight}</p>
              </div>
            </div>

            <details className="case-details">
              <summary><span>Read the engineering breakdown</span><span className="expand-icon" aria-hidden="true">+</span></summary>
              <div className="case-body">
                <div className="case-block">
                  <h3>Approach</h3>
                  <ol className="case-steps">
                    {CASE_STUDY.approach.map((step) => <li key={step}>{step}</li>)}
                  </ol>
                </div>
                <div className="case-block">
                  <h3>Architecture</h3>
                  <dl className="case-arch">
                    {CASE_STUDY.architecture.map((part) => (
                      <div key={part.title}>
                        <dt>{part.title}</dt>
                        <dd>{part.body}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="case-block case-decision">
                  <h3>{CASE_STUDY.decision.title}</h3>
                  <p>{CASE_STUDY.decision.body}</p>
                </div>
                <div className="case-block">
                  <h3>Why it matters</h3>
                  <p>{CASE_STUDY.takeaway}</p>
                </div>
              </div>
            </details>

            <div className="case-links">
              <a className="text-link" href="https://github.com/Marstronix218/knov" {...ext}>Read the source on GitHub <Arrow /></a>
            </div>
          </div>
        </section>
        <section id="about" className="about-section wrap section" aria-labelledby="about-title"><div className="section-label"><span>03 / A LITTLE ABOUT ME</span><span>ALWAYS A WORK IN PROGRESS</span></div><div className="about-grid"><div><h2 id="about-title">A global perspective.<br />A builder’s mindset.</h2><div className="profile-intro"><Image className="profile-photo" src="/noriaki-profile.png" alt="Noriaki Kishida in front of the Golden Gate Bridge" width={320} height={320} sizes="(max-width: 640px) 112px, 156px" /><p className="about-lead">I’m studying Computer Science and Artificial Intelligence at Minerva University.</p></div><p>I’m most interested in AI systems that get past the isolated prompt — tools that hold context, work across a whole workflow, and help people make better decisions. That interest has taken me from confidential inference on AWS Nitro Enclaves to autonomous agents, browser-native research tooling, and local-first desktop software.</p><p>Minerva moved me through teams in Japan, South Korea, and Taiwan, and I’m now based in San Francisco. Wherever a project starts, I care about taking it all the way to something people can actually use.</p><div className="education"><span className="education-mark" aria-hidden="true">M</span><div><strong>Minerva University</strong><span>B.Sc. Computer Science &amp; AI · Expected May 2027</span></div></div></div><div className="toolkit"><span className="toolkit-title">TOOLS I REACH FOR</span><div><h3>Languages</h3><p>Python <span>/</span> TypeScript <span>/</span> JavaScript<br />Rust <span>/</span> SQL</p></div><div><h3>Products &amp; interfaces</h3><p>React <span>/</span> Next.js <span>/</span> Tauri<br />Flask <span>/</span> FastAPI <span>/</span> Node.js</p></div><div><h3>AI &amp; infrastructure</h3><p>OpenAI <span>/</span> Claude <span>/</span> PyTorch <span>/</span> AWS<br />Supabase <span>/</span> Convex <span>/</span> Docker <span>/</span> n8n</p></div><div className="toolkit-note"><span aria-hidden="true">↳</span> The right tool for the problem.<br />Always learning the next one.</div></div></div></section>


        <section id="experience" className="experience-section" aria-labelledby="experience-title"><div className="wrap section">
          <div className="section-label"><span>04 / EXPERIENCE</span><span>BEYOND THE SIDE PROJECTS</span></div>
          <div className="impact-stats"><div><strong>60<span>→</span>5<small>min</small></strong><span>Secure AI setup time<br />EAGLYS</span></div><div><strong>45<span>+</span></strong><span>RSS feeds automated<br />Capital Launchers</span></div><div><strong>50<span>+</span></strong><span>AI agent workflows managed<br />GSP Cloud</span></div></div>
          <div className="experience-grid">
            <div className="experience-intro"><h2 id="experience-title">Real teams.<br />Real impact.</h2><p>Four internships and a tech lead role across Japan, South Korea, and Taiwan — building where engineering meets a real constraint: security, cost, or time.</p><a className="text-link" href={PROFILE.resume} download>Download my resume <span aria-hidden="true">↓</span></a></div>
            <div className="timeline">
              {EXPERIENCE.map((job, index) => (
                <details className="experience-item" key={job.company} open={index === 0}>
                  <summary>
                    <span className="experience-date">{job.dates}</span>
                    <span className="experience-job"><strong>{job.company}</strong><span>{job.role}</span></span>
                    <span className="expand-icon" aria-hidden="true">+</span>
                  </summary>
                  <div className="experience-detail">
                    <span className="job-location">{job.place}</span>
                    <p>{job.text}</p>
                    <span className="job-stack">{job.tags}</span>
                    {job.link && <a className="text-link job-link" href={job.link.href} {...ext}>{job.link.label} <Arrow /></a>}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div></section>

        <section id="recognition" className="recognition-section wrap section" aria-labelledby="recognition-title">
          <div className="section-label"><span>05 / SELECTED RECOGNITION</span><span>BUILT UNDER PRESSURE</span></div>
          <div className="section-heading"><h2 id="recognition-title">Shipped on the clock.</h2><p>Four podium finishes at hackathons between 2024 and 2026, each one a working product by the deadline.</p></div>
          <ul className="award-list">
            {RECOGNITION.map((award) => (
              <li className="award-row" key={`${award.year}-${award.event}`}>
                <span className="award-year">{award.year}</span>
                <span className="award-body">
                  <strong>{award.result}</strong>
                  <span className="award-event">{award.event}</span>
                </span>
                <span className="award-detail">{award.detail}</span>
                {award.link
                  ? <a className="text-link award-link" href={award.link.href} {...ext}>{award.link.label} <Arrow /></a>
                  : <span className="award-link" />}
              </li>
            ))}
          </ul>
          <div className="beyond">
            <span className="beyond-label">BEYOND ENGINEERING</span>
            <p>I came to software from competitive English debate — winner of the Make Friends Cup national tournament as Defense Speaker, arguing a ~40-page case built over months of research. More recently: Japan champion and 5th worldwide in the 2025 Youth Fact-Checking Competition. Research a space, build the argument, defend it live — the engineering habits came from there.</p>
          </div>
        </section>

        <section id="contact" className="contact-section wrap" aria-labelledby="contact-title"><div className="section-label"><span>06 / WHAT’S NEXT?</span><span><span className="status-dot" /> START WITH A CONVERSATION</span></div><div className="contact-heading"><h2 id="contact-title">Let’s build<br /><em>something good.</em></h2><a className="contact-arrow" href={`mailto:${PROFILE.email}`} aria-label="Email Noriaki Kishida"><Arrow /></a></div><div className="contact-bottom"><EmailContact /><div className="social-links"><a href={PROFILE.github} {...ext}><GitHubMark /> GitHub <Arrow /></a><a href={PROFILE.linkedin} {...ext}><LinkedInMark /> LinkedIn <Arrow /></a><a href={PROFILE.resume} {...ext}>Resume <Arrow /></a></div></div></section>
      </main>
      <footer className="site-footer wrap"><a className="wordmark" href="#" aria-label="Back to top">N<span>/</span>K</a><span>© 2026 NORIAKI KISHIDA</span><a href="#">BACK TO TOP <span aria-hidden="true">↑</span></a></footer>
    </>
  );
}
