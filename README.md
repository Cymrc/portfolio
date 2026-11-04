# Alex John L. Tulen | Portfolio

A professional developer portfolio built to showcase my projects, technical stack, and software engineering progress as an IT student and aspiring full-stack developer.

## 🌐 Live Website

**[Visit my portfolio](https://portfolio-bice-gamma-22.vercel.app/)**

---

## 🖥️ Previews

### Desktop View
<img width="1576" height="900" alt="{3BE85A10-9E3A-473E-8C4D-C2167433B5F9}" src="https://github.com/user-attachments/assets/0015eb4a-c522-425b-9492-1925793d0296" />

### Mobile View
<img width="1170" height="2145" alt="image" src="https://github.com/user-attachments/assets/e12f959d-eb80-4455-ac90-0f6fefc2b581" />

---

## 🎨 Design System & Aesthetic

* **Color Palette**: Clean, minimal **Stone** neutral backgrounds with high-contrast **Stone-900** typography and warm **Amber** accent styling (`bg-amber-700`, hover states, and focus rings).
* **Typography & Layout**: Fully responsive single-page architecture optimized for smooth navigation, distinct visual hierarchy, and accessible component states.

---

## 🛠️ Tech Stack

* **Core Framework**: React, Vite
* **Styling**: Tailwind CSS
* **Deployment & Hosting**: Vercel
* **Form Handling & Validation**: Web3Forms API
* **Version Control**: Git & GitHub (`Cymrc`)

---

## ✨ Key Features

* **Interactive Navigation & Routing**: Sticky blurred header with smooth-scrolling anchor links and an adaptive mobile drawer menu.
* **Data-Driven Architecture**: Modular data structures (`projects.js`, `skills.js`) powering reusable UI components (`ProjectCard`, `Badge`).
* **Advanced Accessibility & Motion**: 
  * Custom `IntersectionObserver` scroll-reveal hooks with `motion-reduce` fallbacks.
  * Explicit `aria-label` attributes and visible keyboard focus states (`focus-visible:outline-2`).
* **Functional Contact Form**: Direct client-side submission integrated via Web3Forms with success states, error handling, and direct social links (Email, GitHub, LinkedIn).

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── images/              # Project screenshots & media assets
│   └── Tulen_AlexJohn.pdf   # Resume PDF document
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   ├── sections/        # Hero, About, Skills, TechStack, Projects, GetInTouch
│   │   └── ui/              # ProjectCard, Badge, shared elements
│   ├── data/                # Static data arrays (projects.js, skills.js)
│   ├── hooks/               # Custom hooks (useScrollReveal.js)
│   ├── App.jsx              # Main application entry component
│   ├── index.css            # Tailwind & global styles
│   └── main.jsx             # React root DOM renderer
├── docs/
│   ├── decisions.md         # Architecture & tooling choices
│   └── progress.md          # Development milestones & changelog
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
