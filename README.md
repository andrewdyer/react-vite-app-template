![React + Vite + Turborepo Template](https://raw.githubusercontent.com/andrewdyer/public-assets/refs/heads/main/images/covers/react-vite-turborepo-template.png)

# React + Vite + Turborepo Template

A template for building modern frontend applications using the [React](https://react.dev/) framework and the [Vite](https://vitejs.dev/) build tool, managed in a [Turborepo](https://turborepo.com/) monorepo, and written in the [TypeScript](https://www.typescriptlang.org/) language.

## ⚖️ License

Licensed under the [MIT license](https://opensource.org/licenses/MIT) and is free for private or commercial projects.

## ✨ Introduction

This project is a Turborepo-based monorepo template for building scalable frontend applications. It provides a modular workspace with centralized tooling and configurations, allowing multiple apps and packages to live together in a single repository. It serves the purpose of providing a solid foundation to help you hit the ground running and save valuable time when starting a new project.

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:

- **[Node.js](https://nodejs.org/)**: Version 22.12 or higher is required (as specified in [.nvmrc](.nvmrc)).
- **[pnpm](https://pnpm.io/)**: Dependency management tool for Node.js.
- **[Docker](https://www.docker.com/)** (optional): For containerizing the application.

## 🏗️ Workspace

This section provides an overview of the apps and packages included in the monorepo, along with their purpose and key tooling.

### ⚛️ apps/web

A React application that enhances the official Vite template for React with TypeScript and SWC (Speedy Web Compiler). It integrates additional tools and configurations while implementing an architecture that emphasizes clarity, modularity, and maintainability.

- [React Router](https://reactrouter.com/) for client-side routing
- [Vite PWA](https://vite-pwa-org.netlify.app/) for offline and mobile performance
- [Vitest](https://vitest.dev/) for unit/component testing (with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [Vitest UI](https://vitest.dev/guide/ui.html), [coverage reports](https://vitest.dev/guide/coverage.html))
- Centralized [ESLint](https://eslint.org/) and [TypeScript](https://www.typescriptlang.org/) configs

### 🎭 apps/web-e2e

An end-to-end testing suite that validates real user flows and ensures the web application behaves as expected. It is designed to catch integration issues early and provide confidence in deployment.

- [Playwright](https://playwright.dev/) for browser automation and testing (with [UI](https://playwright.dev/docs/test-ui-mode) and [coverage support](https://playwright.dev/docs/test-coverage))
- Centralized [ESLint](https://eslint.org/) and [TypeScript](https://www.typescriptlang.org/) configs

### 📦 packages/react-shared

A shared React component library that promotes reuse across multiple applications in the workspace. It enables teams to build, document, and test UI components in isolation before integrating them into apps.

- [Vitest](https://vitest.dev/) for unit/component testing
- Centralized [ESLint](https://eslint.org/) and [TypeScript](https://www.typescriptlang.org/) configs

## 🧰 Tooling

- Prettier for consistent code formatting
- Husky for Git hooks (linting, formatting, type-checking, testing before commits)
- CI setup with GitHub Actions (automated testing, building, type-checking)
- Docker support for containerization
- Workspace-based monorepo (Turborepo)
- Centralized ESLint and TypeScript configurations

## 🚀 Getting Started

If you like what you've seen so far and think this setup fits your needs, you can quickly get started by clicking the **Use this template** button at the top of the repository on GitHub.

## 🤝 Contributing

Before contributing to this project, please refer to the [contributing](./CONTRIBUTING.md) documentation for a more in-depth setup guide, including details on running tests, coding standards, and the pull request process.
