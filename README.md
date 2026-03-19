# GejorDev Portfolio

Portfolio profesional de desarrollador Full Stack.

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)

## 🌐 Demo

[gejordev.com](https://gejordev.com)

## ✨ Features

- **Multilanguage** - Spanish/English support with react-i18next
- **Language Detection** - Automatic language detection from browser
- **Persistent Preferences** - Language selection saved in localStorage
- **Responsive Design** - Mobile-first approach
- **Accessibility** - Focus states and ARIA labels
- **Dark Theme** - Modern dark UI

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 19, TypeScript, Tailwind CSS |
| **Build** | Vite 8 |
| **i18n** | react-i18next, i18next-browser-languagedetector |
| **Testing** | Vitest, Playwright |

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/GejorDev/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# E2E tests
npx playwright test

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/     # React components
│   ├── ui/        # Reusable UI components
│   └── *.tsx      # Page sections
├── hooks/         # Custom React hooks
├── i18n/         # Internationalization
│   └── locales/  # Translation files
├── config/       # Site configuration
├── constants/    # Site constants
├── types/         # TypeScript types
├── utils/         # Utility functions
└── data/         # Static data (person, skills)
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run unit tests |
| `npm run test:ui` | Run tests with UI |

## 📝 License

MIT

---

Built with ⚛️ by [GejorDev](https://gejordev.com)
