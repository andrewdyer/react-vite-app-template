# React + Vite App Template

A template for building browser-based applications using the [React](https://react.dev/) framework and the [Vite](https://vitejs.dev/) build tool, and written in [TypeScript](https://www.typescriptlang.org/).

## Introduction

This template provides a focused foundation for building, testing and shipping a single React application. It is designed to support consistent tooling, reliable builds, and automated releases, so effort goes into the application rather than the setup. Its linting, testing, Storybook and commit conventions match the web app in the [React + Vite + Turborepo Template](https://github.com/andrewdyer/react-vite-turborepo-template), so applications built here follow the same standards and can move into the monorepo later.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **[Node.js](https://nodejs.org/)**: Version 24.19.0 or later is required (as specified in [.nvmrc](.nvmrc)).
- **[pnpm](https://pnpm.io/)**: Dependency management tool for Node.js, version 10.17.1 (as specified in [package.json](package.json)).
- **[Docker](https://www.docker.com/)** (optional): For containerising the application.

## App

The repository follows a clear structure, organising components by atomic design level and keeping routes, pages and templates in separate layers with their tests and stories, alongside the end-to-end tests and the build, deployment and tooling configuration.

```plaintext
repo/
├── .github/
│   └── workflows/             # Test, PR title, release, publish, deploy and rollback workflows
│
├── .husky/                    # Git hooks for lint-staged and commitlint
├── .storybook/                # Storybook configuration and decorators
│
├── docker/                    # Container startup script that writes the runtime config
│
├── e2e/
│   └── tests/                 # Playwright end-to-end and accessibility tests
│
├── public/                    # Static assets copied into the build
│
├── src/
│   ├── components/
│   │   ├── organisms/         # Interface sections that receive data through props
│   │   ├── pages/             # Screens that own data and business logic
│   │   └── templates/         # Presentational screen layouts with stories
│   ├── config/                # Validated application config from environment variables
│   ├── hooks/                 # Hooks, including TanStack Query hooks used by pages
│   ├── layouts/               # Route layouts that wrap routes in a template
│   ├── mocks/                 # MSW handlers and fixtures for tests and local development
│   ├── providers/             # Providers composed at the application root
│   ├── routes/                # Routes that handle the URL and render pages
│   ├── services/              # API client, request functions and response schemas
│   ├── types/                 # Global type declarations, including environment variables
│   ├── utilities/             # Shared helpers, including test utilities
│   ├── App.tsx                # Application route table
│   ├── main.tsx               # Application entry point
│   └── setupTests.ts          # Vitest setup
│
├── .env.example               # Example environment variables
├── Dockerfile                 # Production image build
├── eslint.config.js           # ESLint configuration
├── nginx.conf                 # Nginx configuration for serving the app
├── package.json               # App manifest and scripts
├── playwright.config.ts       # Playwright configuration
├── tsconfig.json              # TypeScript project references
└── vite.config.ts             # App build and Vitest configuration
```

The app is built with Vite and TypeScript, providing a fast development experience and optimised production builds. Key features include:

- [SWC (Speedy Web Compiler)](https://swc.rs/) for faster builds and development.
- [React Router](https://reactrouter.com/) data router for client-side routing, with routes, pages and templates kept in separate layers, shared layouts, lazy-loaded screens split into their own chunks, route error boundaries, and a not-found screen.
- Runtime configuration from `VITE_` environment variables, validated with [Zod](https://zod.dev/) at startup, so one Docker image can run in every environment.
- [TanStack Query](https://tanstack.com/query) for fetching and caching server data, with responses validated against Zod schemas and an example that loads the signed-in user into a shared header, with loading, error and retry states.
- [Mock Service Worker](https://mswjs.io/) for mocking the API in unit tests and, optionally, during local development.
- [Vite PWA](https://vite-pwa-org.netlify.app/) for a web app manifest and a service worker that caches the production build.
- [Vitest](https://vitest.dev/) for unit and component testing, along with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing React components, [Vitest UI](https://vitest.dev/guide/ui.html), [jsdom](https://github.com/jsdom/jsdom) environment, and [V8 coverage reports](https://vitest.dev/guide/coverage.html) with enforced thresholds.
- [Playwright](https://playwright.dev/) for cross-browser end-to-end and accessibility testing against the production build.
- [Storybook](https://storybook.js.org/) for developing and documenting templates and components in isolation.
- [ESLint](https://eslint.org/) for linting TypeScript, React and hooks usage, accessibility, import ordering, Storybook stories, and Playwright tests.
- Pre-commit checks with [lint-staged](https://github.com/lint-staged/lint-staged) to maintain code quality.

## Tooling

Essential development tools configured for consistency and automation across the app, including:

- [Husky](https://typicode.github.io/husky) for Git hooks that automate development workflows, including staged file checks and commit message validation.
- [Commitlint](https://commitlint.js.org/) for enforcing a consistent commit message convention on commits and pull request titles.
- [Prettier](https://prettier.io/) for maintaining consistent code formatting.
- [Docker](https://www.docker.com/) for containerising the app with a multi-stage build served by Nginx.
- [Release Please](https://github.com/googleapis/release-please) for automated versioning and changelogs based on commit messages.
- [GitHub Actions](https://github.com/features/actions) for CI/CD, covering testing and pull request title checks, automated releasing, publishing the Docker image to [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry), and deployment and rollback workflow templates that require project-specific configuration.

Together, these tools create a fast, reliable, and maintainable developer experience from the first page to the first release.

## Getting Started

If you like what you've seen so far and think this setup fits your needs, you can quickly get started by clicking the **Use this template** button at the top of the repository on GitHub.

## License

This template is licensed under the [MIT license](https://opensource.org/licenses/MIT) and is free for private or commercial projects.
