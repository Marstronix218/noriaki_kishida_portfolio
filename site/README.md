# Noriaki Kishida — Portfolio

A responsive portfolio for Noriaki's AI, full-stack, and automation work. Built with React, TypeScript, and the Sites/Vinext scaffold. The only client component handles copying the public contact email; project content renders on the server.

## Local development

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

The development server prints its local URL. Use `npm run lint`, `npm run typecheck`, and `npm run build` to verify changes. `npm start` serves the production build.

## Editing

- `app/page.tsx`: project stories, experience, about, and contact links.
- `app/globals.css`: colors, typography, responsive layouts, and motion preferences.
- `app/email-contact.tsx`: clipboard behavior and accessible status messages.
- `app/layout.tsx`: title, description, icons, canonical origin, and social metadata.
- `public/noriaki_kishida_resume.pdf`: byte-identical copy of the supplied resume.
- `public/og.png`: original generated social-preview artwork.
- `.openai/hosting.json`: Sites project identity. Keep the opaque identifier unchanged.

The portable design brief is in `DESIGN.md`; the parent workspace also keeps its original copy. An original resume remains at the repository root. No analytics, tracking, database, forms, or runtime profile scraping are included. Contact links open the visitor's email application. Project demos open external applications; their uptime and authentication are controlled by their owners.

## Content sources and scope

Experience, education, metrics, and the HookLoop award come from the supplied `noriaki_kishida_resume.pdf`. Project descriptions are also grounded in public READMEs:

- [GitHub profile](https://github.com/Marstronix218)
- [LinkedIn profile](https://www.linkedin.com/in/noriaki-kishida/) — direct retrieval was rate-limited; public indexed content corroborated the SOLID award.
- [knov](https://github.com/Marstronix218/knov) — technical alpha, local-first context storage with user-controlled AI integrations.
- [HookLoop](https://github.com/syang0624/hookloop) — collaborative hackathon project.
- [SOLID Marketplace](https://github.com/syang0624/fb_stripe_marketplace) — collaborative hackathon demo with simulated seller negotiations.

Decorative project panels are labeled concept views, not product screenshots. No project is represented as independently authored when the public repository belongs to a collaborator. Review current roles and resume dates when updating the site.

## Accessibility and validation

Semantic sections, skip navigation, native expandable experience details, visible keyboard focus, a live copy-status message, and reduced-motion styling are included. Layout adapts for phones, tablets, and desktops. Build, lint, TypeScript, HTTP/asset, anchor, and metadata checks are recorded during delivery. Browser interaction and screenshot tests were not run; the Sites workflow limits them to explicit requests.

## Hosting

The public site is deployed on Vercel from the `site/` root directory. Vercel uses `npm run vercel-build`, which runs the standard Next.js production build. The private Sites preview uses the Cloudflare-compatible `npm run build` output. When changing the public domain, update `metadataBase` to the new trusted origin.
