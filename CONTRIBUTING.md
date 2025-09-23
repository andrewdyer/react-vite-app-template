# Contributing

Thank you for your interest in contributing! We welcome improvements and suggestions to make this project even better. Please follow the guidelines below for a smooth experience.

## Table of Contents

- [Development Setup](#development-setup)
- [Upgrading Dependencies](#upgrading-dependencies)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Testing](#testing)
- [Building](#building)
- [Dockerizing](#dockerizing)
- [Submitting Changes](#submitting-changes)

## Development Setup

To get started with contributing, set up the project by following these steps:

1. Begin by cloning the repository and navigating to its directory.
2. Use the correct Node.js version specified in [.nvmrc](.nvmrc):
   - Install `nvm` if you haven't already. Follow the instructions on the [nvm GitHub repository](https://github.com/nvm-sh/nvm).
   - Run `nvm use` to switch to the required Node.js version.
3. Install all project dependencies to ensure a complete setup with `npm install`.
4. Start the development server using `npm run start` to begin working on the project.
5. Start Storybook using `npm run start:storybook` to develop and test UI components in isolation.
6. Run tests with `npm test` to verify that the environment is working correctly. You can also use `npm run test:watch` to run the tests in watch mode, `npm run test:coverage` to generate a coverage report, and `npm run test:ui` to run the tests with the Vitest UI.

## Upgrading Dependencies

Keeping dependencies up-to-date is crucial for maintaining the security and performance of the project. Follow these steps to upgrade dependencies:

1. Check for outdated dependencies with `npm outdated`.
2. Update dependencies using `npm upgrade` or update a specific package with `npm install <package-name>@latest`.
3. Ensure everything works after the upgrade by running the tests with `npm test`.
4. Make sure the `package-lock.json` file is updated with the latest dependency versions by running `npm install`.
5. Commit the changes to the repository with a clear commit message.
6. Push the changes to your branch and create a pull request for review.

## Coding Standards

To maintain code quality and consistency, please follow these guidelines:

- Run `npm run format` to format code using Prettier and `npm run lint` for linting with ESLint.
- Organize imports into clearly separated groups, following this order: React imports, third-party packages, app-level aliases, and local imports.
- Arrange imports alphabetically by package name within each group to improve readability.

## Commit Guidelines

Use clear, descriptive commit messages following the [Conventional Commits](https://www.conventionalcommits.org/) format. Add emojis to quickly convey the type of change if desired, following [Git Commit Emoji](https://dev.andrewdyer.rocks/git-commit-emoji) conventions.

## Testing

Please write tests for any new features or modifications to the project. Follow these steps to ensure your tests are effective, consistent, and easy to maintain:

### Unit & Component Tests

- Use the `.test.ts(x)` naming convention for unit and component tests.
- Run tests with `npm test`.
- Check code coverage using `npm run test:coverage`.
- For an interactive experience, launch Vitest UI via `npm run test:ui`.
- Ensure that code coverage meets the following thresholds: **Lines**, **Functions**, **Branches**, and **Statements** all at 90%.

### End-to-End (E2E) Tests

- Use the `.spec.ts(x)` naming convention for E2E tests.
- Run E2E tests using `npm run test:e2e`.
- For debugging or exploring flows, use Playwright UI via `npm run test:e2e:ui`.

### Testing Guidelines

When writing tests:

- Mock dependencies or libraries as needed.
- Use helper functions to simplify repetitive logic.
- Define constants for mock data or configurations.
- Use `describe` blocks to structure test suites and keep tests focused.
- Prioritize readability, reusability, and clarity.

Before submitting changes, ensure **all tests pass** and coverage is maintained.

## Building

Use the following commands as needed to build and preview the project:

- Build the project for production using TypeScript and Vite with `npm run build`.
- Generate a static Storybook build with `npm run build:storybook`.
- Preview the production build locally using Vite with `npm run preview`.

## Dockerizing

Use the following commands to containerize your application for consistent deployment across environments:

1. Build the Docker image using:

   `docker build -t <image-name> .`

2. Start the container and map ports:

   `docker run --name <container-name> -p 8080:80 -d <image-name>`

Your application will now be accessible at http://localhost:8080.

## Submitting Changes

Once you've made your changes, follow these steps to submit them for review:

1. Create a feature branch with `git checkout -b feature/your-feature-name`.
2. Commit your changes following the commit guidelines.
3. Push your branch with `git push origin feature/your-feature-name`.
4. Open a pull request with a title and description that clearly explain your changes.
