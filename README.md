![Vite + React App Template](https://raw.githubusercontent.com/andrewdyer/public-assets/refs/heads/main/images/covers/vite-react-app-template.png)

# Vite + React App Template

A template for building frontend applications using [Vite](https://vitejs.dev/) and [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/).

## ⚖️ License

Licensed under the [MIT license](https://opensource.org/licenses/MIT) and is free for private or commercial projects.

## ✨ Introduction

This template enhances the official Vite template for React with TypeScript and SWC (Speedy Web Compiler) by integrating additional tools and configurations, while implementing an architecture that focuses on clarity, modularity, and maintainability. It serves the purpose of providing a solid foundation to help you hit the ground running and save valuable time when starting a new project.

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:

- **[Node.js](https://nodejs.org/)**: Version 22.12 or higher is required (as specified in [.nvmrc](.nvmrc)).
- **[pnpm](https://pnpm.io/)**: Dependency management tool for Node.js.
- **[Docker](https://www.docker.com/)** (optional): For containerizing the application.

## 🛠️ Features

This template includes the following additional tools and configurations:

- [Vitest](https://vitest.dev/) for unit testing, along with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing React components, Vitest UI, and coverage reports.
- [Playwright](https://playwright.dev/) for end-to-end testing with UI and coverage support.
- [Storybook](https://storybook.js.org/) for building and testing UI components in isolation.
- [React Router](https://reactrouter.com/) for client-side routing.
- [Vite PWA](https://vite-pwa-org.netlify.app/) (Progressive Web App) support for offline capabilities and better performance on mobile devices.
- [Prettier](https://prettier.io/) for consistent code formatting across the codebase.
- [Husky](https://typicode.github.io/husky/#/) for Git hooks to automate tasks such as linting, formatting, type-checking, and testing before commits.
- CI (Continuous Integration) setup with [GitHub Actions](https://github.com/features/actions) for automated testing, building, and type-checking.
- [Docker](https://www.docker.com/) support for containerizing the application.

🏗️ Architecture

The primary source code lives in the `src/` folder, organized into several key directories:

```plaintext
src/
├── assets/
│   └── ...
│
├── layouts/
│   └── ...
│
├── pages/
│   └── ...
│
├── utils/
│   └── ...
│
├── App.tsx
├── index.tsx
├── index.css
├── setupTests.ts
└── vite-env.d.ts
```

The application entry point is `index.tsx`, which renders the `App` component and serves as the central place to wrap it with global providers such as client-side routing, state management, or theming. This way, those providers are available throughout the entire application.

The core `App.tsx` component sets up client-side routing and organizes application pages through layouts. Shared route-aware structures live in `layouts/`, while top-level views are placed in `pages/`. General-purpose helpers reside in `utils/`, global styles are defined in `index.css`, and static assets such as images and icons are stored in `assets/`. Supporting files include `setupTests.ts`, which configures the testing environment, and `vite-env.d.ts`, which defines Vite environment types.

This structure is a starting point that can be extended as the project grows — for example, reusable UI elements could be grouped into a `components/` folder, API logic centralized in a `services/` folder, or application state kept in a `store/` folder. Its modular approach keeps concerns encapsulated and makes the codebase easier to maintain and scale over time.

To simplify imports and keep the codebase organized, path aliases are configured in `vite.config.ts` and `tsconfig.app.json`. By default, the `@` alias points to the `src/` directory, allowing clean, consistent imports as the project grows.

## 🚀 Getting Started

If you like what you've seen so far and think this setup fits your needs, you can quickly get started by clicking the **Use this template** button at the top of the repository on GitHub.

## 🤝 Contributing

Before contributing to this project, please refer to the [contributing](./CONTRIBUTING.md) documentation for a more in-depth setup guide, including details on running tests, Storybook, coding standards, and the pull request process.
