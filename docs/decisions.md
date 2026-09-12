# Decisions Log

Each entry records an architectural or technical decision made during the project, and why.

---

## 2026-09-02 — Single-page app, no router

**DECISION:** Build the portfolio as a single-page React app with anchor-link navigation between sections. No React Router.

**WHY:** All 6 v1 sections (Hero, About, Skills, Tech Stack, Projects, Contact) live on one page — there's no need for separate URLs.

**ALTERNATIVES:** React Router (multi-page), Next.js (adds SSR/SEO benefits we don't need yet).

**TRADEOFF:** No per-project detail pages (e.g. `/projects/taskflow`) without adding routing later.

**FUTURE:** Revisit if a blog or per-project case-study pages are added.

---

## 2026-XX-XX — Tailwind CSS v4 for styling

**DECISION:** Use Tailwind CSS v4 (via the official `@tailwindcss/vite` plugin) instead of plain CSS or CSS Modules.

**WHY:** Utility classes keep styling co-located with markup and avoid inventing custom class names across many small components.

**ALTERNATIVES:** Plain CSS, CSS Modules, styled-components.

**TRADEOFF:** More verbose `className` strings in JSX, in exchange for consistent design tokens and no separate stylesheet per component.

**FUTURE:** If highly complex/animated UI grows beyond what utility classes handle cleanly, revisit.

---

## 2026-XX-XX — Custom scroll-reveal hook instead of an animation library

**DECISION:** Implement scroll-triggered reveals with a custom `useScrollReveal` hook (`IntersectionObserver` + CSS transitions), not a library like Framer Motion.

**WHY:** The requirement (fade/slide-in on scroll) is simple enough not to justify a library's bundle size, and it's a good opportunity to learn how scroll-triggering works under the hood.

**ALTERNATIVES:** Framer Motion, AOS.

**TRADEOFF:** More manual work for complex/staggered animation sequences later.

**FUTURE:** Introduce a library if animation needs become significantly more complex.

---

## 2026-XX-XX — Services section deferred to future roadmap

**DECISION:** "Services" section is out of v1 scope. Documented as a future feature, not implemented yet.

**WHY:** v1 focuses on the 6 core sections. Services should reflect realistic skill level and will be designed as its own feature after the core portfolio ships.

**ALTERNATIVES:** Include a placeholder Services section now.

**TRADEOFF:** None significant — deferring costs nothing since it's additive later.

**FUTURE:** Design as a standalone feature once core portfolio (v1) is complete.

## 2026-XX-XX — v1 Projects list changed: Math Adventures replaces TaskFlow

**DECISION:** v1 Projects section showcases Math Adventures and Sari-Sari Store POS.
TaskFlow is no longer part of this portfolio's v1 scope.

**WHY:** Math Adventures and Sari-Sari Store POS are real, completed school projects.
TaskFlow is a separate, ongoing learning project not ready to showcase yet.

**ALTERNATIVES:** Include TaskFlow as a third project, or as a placeholder.

**TRADEOFF:** None — showing only real, complete projects keeps the portfolio honest,
consistent with the project's no-fabrication rule.

**FUTURE:** TaskFlow can be added once it's in a presentable state.

## 2026-XX-XX — Custom useScrollReveal hook, applied per-section (not extracted className helper)

**DECISION:** Each section calls useScrollReveal() independently and duplicates
its own reveal className logic, rather than sharing a helper function.

**WHY:** The pattern is small (3 lines) and different sections may eventually
need different animation behavior. Extracting a helper now would add an
abstraction with little current benefit.

**ALTERNATIVES:** A shared getRevealClasses(isVisible) helper function.

**TRADEOFF:** If reveal styling stays identical across all sections long-term,
this duplication becomes mild maintenance overhead (6 places to update instead
of 1).

**FUTURE:** Revisit if reveal styling needs to change everywhere at once and
editing 6 files becomes genuinely annoying.