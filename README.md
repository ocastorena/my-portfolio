# Omar Castorena – Software Developer Portfolio

[![Deploy Pages](https://github.com/ocastorena/my-portfolio/actions/workflows/pages.yml/badge.svg?branch=main)](https://github.com/ocastorena/my-portfolio/actions/workflows/pages.yml)
[![CI](https://github.com/ocastorena/my-portfolio/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ocastorena/my-portfolio/actions/workflows/ci.yml)
[![Code size](https://img.shields.io/github/languages/code-size/ocastorena/my-portfolio)](https://github.com/ocastorena/my-portfolio)
[![Top language](https://img.shields.io/github/languages/top/ocastorena/my-portfolio)](https://github.com/ocastorena/my-portfolio)
[![Last commit](https://img.shields.io/github/last-commit/ocastorena/my-portfolio)](https://github.com/ocastorena/my-portfolio/commits/main)
[![License](https://img.shields.io/github/license/ocastorena/my-portfolio)](https://github.com/ocastorena/my-portfolio/blob/main/LICENSE)

Welcome to my developer portfolio. This site showcases my featured software projects, skills, and experience.

Live site: https://ocastorena.github.io/my-portfolio

## 🚀 About This Project

This portfolio is built with React, Vite, Tailwind CSS, and shadcn/ui components, and deployed using GitHub Pages.

- **Purpose:**
  Display my best projects, technical skills, and background to employers, collaborators, and the tech community.

- **Key Features:**
  - Project gallery with links to code and live demos
  - Responsive, mobile-friendly design
  - About and Contact sections
  - Clean, accessible UI

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [GitHub Pages](https://pages.github.com/)

## 📂 Folder Structure

```
my-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   ├── test/
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🧑‍💻 Getting Started

**Clone the repo:**

```bash
git clone https://github.com/ocastorena/my-portfolio.git
cd my-portfolio
```

**Install dependencies:**

```bash
npm install
```

**Node version:**

This project uses Node.js 22 (see `.nvmrc`).

**Run locally:**

```bash
npm run dev
```

**Build for production:**

```bash
npm run build
```

**Run tests:**

```bash
npm run test
```

**Scripts:**

- `npm run dev` — Start the dev server.
- `npm run build` — Build for production.
- `npm run lint` — Lint the codebase.
- `npm run typecheck` — Type-check TypeScript.
- `npm run test` — Run unit tests.
- `npm run test:watch` — Run tests in watch mode.
- `npm run format` — Format code with Prettier.

## 🌐 Deployment

This site is automatically deployed via GitHub Pages using GitHub Actions on push/merge to `main`.

**GitHub Pages settings:**

In the repo settings, go to `Settings` → `Pages` and set `Source` to `GitHub Actions`.

**Rollback:**

If a deployment is bad, revert the offending commit on `main` and push the revert.
GitHub Actions will redeploy the previous stable build.

## 📫 Contact

- Email: omarcastorena11@gmail.com
- LinkedIn: https://linkedin.com/in/omar-castorena

## 📜 License

This project is licensed under the [MIT License](./LICENSE).
