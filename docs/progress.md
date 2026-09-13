# Progress

Tracks what's actually built, in build order. Update after each feature.

## Roadmap status

- [x] 1. Project setup (Vite + React + Tailwind v4)
- [x] 2. Hero section
- [x] 3. About section
- [x] 4. Skills section
- [x] 5. Tech Stack section
- [x] 6. Projects section
- [x] 7. Contact section
- [x] 8. Navbar + Footer
- [x] 9. Scroll reveal animation pass
- [x] 10. Responsive + accessibility pass
- [x] 11. SEO basics
- [ ] 12. Deploy

**Future roadmap (post-v1):**

- [ ] Services section
- [ ] Dark mode toggle

## Log

### Feature 1 — Project Setup (done)

- Scaffolded with `npm create vite@latest portfolio -- --template react`
- Installed and wired up Tailwind CSS v4 via `@tailwindcss/vite` plugin
- Removed default Vite/React boilerplate content and unused imports from `App.jsx`
- Git repo initialized, `.gitignore` confirmed, first commit made: `chore: scaffold Vite+React project with Tailwind CSS v4`

### Feature 2 — Hero Section (done)

- Created responsive Hero section
- Added CTA links
- Added responsive typography and spacing
- Added accessibility focus styles

### Feature 3 — Navbar (done)

- Added responsive navigation
- Added mobile menu
- Added anchor links to sections
- Added sticky positioning
- Added keyboard-accessible mobile menu
- Added focus-visible styles

### Feature 4 — About Section (done)

- Added About section
- Added semantic h2 heading
- Added responsive spacing and readable text width

### Feature 5 — Skills Section (done)

- Added data-driven skills structure
- Added nested map rendering
- Added reusable `SkillBadge` component
- Added responsive badge layout
- Added proper heading hierarchy

### Refactor — Rename SkillBadge to Badge

- Renamed `SkillBadge.jsx` → `Badge.jsx` since the component is now shared between Skills and Tech Stack, not skill-specific
- No behavior change; component still takes a single `name` prop

### Feature 6 — Tech Stack (done)

- Added flat, uncategorized data-driven section (`data/techStack.js`)
- Reuses the shared `Badge` component
- Single-level `.map()`, contrasting with Skills' nested categories

### Feature 7 — Projects (done)

- Added data-driven `projects.js` with two completed school projects
- Created reusable `ProjectCard` component
- Added optional project thumbnails
- Added tech and feature list rendering
- Added conditional GitHub and Live Demo links
- Added secure external-link attributes
- Added responsive project card styling and layout

### Feature 8 — Contact (done)

- Added real email, GitHub, and LinkedIn links
- Added `mailto:` email link
- Added secure external links
- Added responsive flex-wrap layout
- Reused established section/container patterns
- Added Web3Forms contact form
- Added loading, success, and error states
- Added native form validation
- Added `.env` configuration for Web3Forms
- Added `autocomplete` attributes to form fields
- Added `aria-live="polite"` for form status messages

### Feature 9 — Navbar + Footer (done)

- Added sticky responsive Navbar
- Added mobile hamburger menu using `useState`
- Added anchor links to all six sections
- Added keyboard-accessible navigation and focus states
- Added `handleLinkClick` to close the mobile menu after navigation
- Added semantic `header` and `nav` structure
- Added dynamic-year Footer
- Added GitHub and LinkedIn Footer links

### Feature 10 — Scroll-reveal animations (done)

- Added custom `useScrollReveal` hook using `IntersectionObserver`
- Implemented one-time reveal behavior by disconnecting the observer after first intersection
- Applied the hook independently to all 6 sections (Hero, About, Skills, Tech Stack, Projects, Contact)
- Added fade/slide reveal transitions
- Added `motion-reduce:` variants to respect `prefers-reduced-motion`

### Feature 11 — Responsive + Accessibility audit (done)

- Completed full manual responsive audit across 320px, 375px, 430px, 768px, 1024px, and 1440px+
- Verified no horizontal overflow across tested breakpoints
- Verified navbar breakpoint behavior
- Verified project image proportions
- Verified badge wrapping
- Verified heading hierarchy and exactly one `h1`
- Completed full-page keyboard navigation audit
- Verified mobile hamburger keyboard interaction
- Verified keyboard-only contact form submission
- Verified color contrast
- Verified image alt text and decorative `aria-hidden` content
- Fixed missing `autocomplete` attributes on contact form fields
- Added `aria-live="polite"` so form status changes are announced to screen readers
- Verified semantic HTML usage
- Lint and production build pass

### Feature 12 — SEO Basics (done)

- Replaced default Vite page title with the real portfolio title
- Added meta description
- Added `og:title`
- Added `og:description`
- Added `og:type`
- Verified SEO metadata directly in the browser and DevTools
- Deferred `og:image` until a dedicated social preview asset is available
- Deferred canonical URL until the portfolio has a real deployed URL

## Current Milestone

Features 1–12 complete.

Next:

- Feature 13 — Deployment
