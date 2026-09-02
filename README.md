# GejorDev Portfolio

Portfolio profesional de [GejorDev](https://gejor.dev) — AI Engineer & Full Stack Developer.

![Astro](https://img.shields.io/badge/Astro-7-FF5D01?style=flat-square&logo=astro)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)

## 🌐 Demo

[gejordev-portfolio.vercel.app](https://gejordev-portfolio.vercel.app/es/)

## ✨ Features

- **URL-based i18n** — Spanish/English via `/{lang}/` routing with automatic detection (cookie → Accept-Language → default `es`)
- **Dark elegant design** — Emerald accent palette, glassmorphism cards, subtle animations
- **Server-rendered** — Zero client JS except hamburger menu and language toggle
- **Responsive** — Mobile-first, glass header with sticky nav, hamburger on mobile
- **Scroll-reveal** — IntersectionObserver entrance animations with staggered card cascade
- **Accessible** — `:focus-visible` outlines, ARIA labels, reduced-motion support
- **Fully tested** — Unit tests (Vitest) + E2E (Playwright)

## 🛠️ Tech Stack

| Category          | Technology                          |
|-------------------|-------------------------------------|
| **Framework**     | Astro 7                             |
| **Styling**       | Tailwind CSS 4 (CSS-first config)   |
| **Typography**    | Inter + JetBrains Mono (Google Fonts) |
| **Deploy**        | Vercel (server runtime)             |
| **Testing**       | Vitest, Playwright                  |

## 🚀 Getting Started

```bash
git clone https://github.com/GejorDev/portfolio.git
cd portfolio
npm install
npm run dev       # → localhost:4321
npm test          # unit tests
npm run test:e2e  # e2e tests (requires Playwright browsers)
npm run build     # production build
```

## 📁 Project Structure

```
src/
├── components/        # Server components (Header, Hero, About, Skills, Projects, Footer)
├── data/              # Static JSON (person, skills, projects)
├── i18n/              # Internationalization
│   └── locales/       # Translation files (es, en)
├── layouts/           # HTML shell with meta/OG/hreflang
├── pages/             # Astro routes with [lang] param
├── scripts/           # Client JS extracted from components
├── styles/            # globals.css (Tailwind config + theme + utilities)
└── types/             # TypeScript interfaces
```

## 🔧 Available Scripts

| Command             | Description               |
|---------------------|---------------------------|
| `npm run dev`       | Start dev server          |
| `npm run build`     | Production build          |
| `npm run preview`   | Preview production build  |
| `npm test`          | Run unit tests            |
| `npm run test:e2e`  | Run E2E tests             |

---
