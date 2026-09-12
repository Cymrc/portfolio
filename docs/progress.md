# Progress

Tracks what's actually built, in build order. Update after each feature.

## Roadmap status

- [x] 1. Project setup (Vite + React + Tailwind v4)
- [ ] 2. Hero section
- [ ] 3. About section
- [ ] 4. Skills section
- [ ] 5. Tech Stack section
- [ ] 6. Projects section
- [ ] 7. Contact section
- [ ] 8. Navbar + Footer
- [ ] 9. Scroll reveal animation pass
- [ ] 10. Responsive + accessibility pass
- [ ] 11. SEO basics
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

## Feature #2: Hero Section

- Created responsive Hero section
- Added CTA links
- Added responsive typography and spacing
- Added accessibility focus styles

## Feature #3: Navbar

- Added responsive navigation
- Added mobile menu
- Added anchor links to sections

## Feature #4: About Section

- Added About section
- Added semantic h2 heading
- Added responsive spacing and readable text width

## Feature #5: Skills Section

- Added data-driven skills structure
- Added nested map rendering
- Added reusable SkillBadge component
- Added responsive badge layout
- Added proper heading hierarchy

### Refactor — Rename SkillBadge to Badge

- Renamed `SkillBadge.jsx` → `Badge.jsx` since the component is now shared
  between Skills and Tech Stack, not skill-specific
- No behavior change; component still takes a single `name` prop

### Feature 6 — Tech Stack (done)

- Flat, uncategorized data-driven section (`data/techStack.js`)
- Reuses the shared `Badge` component
- Single-level `.map()`, contrasting with Skills' nested categories

- [x] 7. Projects section

### Feature 7 — Projects (done)

- Added data-driven `projects.js` with two completed school projects
- Created reusable `ProjectCard` component
- Added optional project thumbnails
- Added tech and feature list rendering
- Added conditional GitHub and Live Demo links
- Added secure external-link attributes
- Added responsive card styling and layout
