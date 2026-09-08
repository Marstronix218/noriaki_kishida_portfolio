# Design

## Source of truth
- Status: Active
- Last refreshed: 2026-09-07 (recruiter-facing depth pass)
- Primary product surfaces: single-page personal portfolio in `site/`.
- Evidence reviewed: original resume PDF; public GitHub READMEs for Research Copilot, knov, HookLoop, SOLID, BearEd, IndoBiz Japan; indexed LinkedIn. No pre-existing UI or brand assets.

## Brand
- Personality: confident, curious, precise, international, hands-on.
- Trust signals: real projects, source links, exact resume outcomes and awards.
- Avoid: invented endorsements, availability claims, stock portraits, generic gradients.

## Product goals
- Goals: explain Noriaki's engineering strengths; lead to real work, resume, and contact.
- Non-goals: CMS, login, analytics, or contact-form backend.
- Success signals: useful first viewport, differentiated project stories, working links.

## Personas and jobs
- Primary personas: engineering hiring managers, founders, collaborators.
- User jobs: understand the builder, evaluate evidence, get in touch.
- Key contexts: desktop recruitment and mobile link sharing.

## Information architecture
- Primary navigation: Work, Experience, Recognition, About, Let's talk.
- Core routes/screens: `/`; original downloadable resume.
- Content hierarchy: introduction, selected work, featured case study, outcomes/experience, recognition, about/toolkit, contact.

## Design principles
- Evidence before adjectives: show the build and the result.
- Editorial hierarchy: oversized type, broad negative space, subtle rules.
- Tradeoffs: concise project stories over exhaustive resume repetition.

## Visual language
- Color: ink #151715, panel #1d201c (case-study band), paper #f2f2e9, acid lime #d3f78c, muted green-gray. Project artwork tints: green #dce4d5, sand #e0d9c4, violet #c7b8d9, blue #cbdce1.
- Typography: Geist sans and mono; compact uppercase labels and tightly tracked display; `N/K` typographic monogram with a lime slash.
- Spacing/layout rhythm: 8px base, 1320px max width, generous section separation.
- Shape/radius/elevation: fine borders, restrained rounded project artwork, flat surfaces.
- Motion: subtle orbital motion and hover; respect reduced motion.
- Imagery/iconography: CSS orbital sculpture, explicitly illustrative project workflows, and Noriaki's supplied portrait; text arrows plus inline GitHub/LinkedIn brand marks; no invented screenshots or stock portraits.

## Components
- Existing components to reuse: scaffold layout and fonts.
- New/changed components: navigation, hero with CTA cluster, project cards with technical-ownership line, Research Copilot artwork, expandable case study, recognition list, experience details, email-copy contact.
- Variants and states: hover/focus, expanded details, copy success/failure.
- Token/component ownership: site-owning agent; `site/app/globals.css`, `site/app/page.tsx`. Copy and project/experience/award data live in `site/app/content.ts`.

## Accessibility
- Target standard: WCAG 2.2 AA design intent.
- Keyboard/focus behavior: skip link, visible focus, semantic anchors/buttons, native details.
- Contrast/readability: light on ink; dark on lime; readable secondary text.
- Screen-reader semantics: one h1, section headings, hidden decorative art, live copy status.
- Reduced motion and sensory considerations: disable animations and smooth scrolling under prefers-reduced-motion.

## Responsive behavior
- Supported breakpoints/devices: 360px through wide desktop; adaptations at 640px and 1000px.
- Layout adaptations: stacked hero/projects, wrapping navigation/skills, readable timeline.
- Touch/hover differences: no hover-only information; 44px touch controls.

## Interaction states
- Loading: server-rendered content, no required remote data.
- Empty: no dynamic data dependencies.
- Error: copy failure directs to visible email/manual selection.
- Success: accessible inline confirmation.
- Disabled: none required.
- Offline/slow network: system font fallback and CSS artwork.

## Content voice
- Tone: direct, personal, grounded.
- Terminology: AI agents, full-stack engineering, local-first systems.
- Microcopy rules: exact award specificity; knov technical alpha; SOLID demo with simulated negotiations. Ownership labelled "Built" for solo projects and "Under the hood" for team hackathon builds, so shared work is never claimed as individual.

## Implementation constraints
- Framework/styling system: scaffolded Sites/Vinext, React, TypeScript, plain CSS.
- Design-token constraints: CSS custom properties; no added UI dependencies.
- Performance constraints: no backend/live profile fetching; limited client state.
- Compatibility constraints: modern browsers and progressively enhanced details/contact.
- Test/screenshot expectations: build, lint, typecheck, HTTP/link and source checks. Browser QA only if requested under Sites instructions.

## Open questions
- No blocking questions. Assume recruiters/founders are the primary audience.
- Public sharing/custom domain may be configured after the private preview.
