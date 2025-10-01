# ⚛️ web

This project was created with `pnpm create vite` and enhances [the official Vite template](https://vitejs.dev/) for React with TypeScript with additional tools and configurations.

## 📜 Available Scripts

In the project directory, you can run:

### `pnpm dev`

Starts the development server with hot module replacement.

### `pnpm build`

Type-checks the project and builds the app for production.

### `pnpm preview`

Previews the production build locally.

### `pnpm lint`

Runs ESLint to check code quality.

### `pnpm type-check`

Checks TypeScript types without emitting build output.

### `pnpm test`

Runs the test suite once with Vitest.

### `pnpm test:watch`

Runs the tests in watch mode.

### `pnpm test:ui`

Runs tests with the Vitest UI.

### `pnpm test:coverage`

Runs tests with coverage reporting.

## 🐳 Dockerizing

You can build and run this app in a Docker container from the **repo root**:

### `docker build -t web-app -f apps/web/Dockerfile .`

Builds the Docker image for the web app using the Dockerfile in `apps/web`.

### `docker run --name web-app -p 8080:80 -d web-app`

Runs the container, mapping port 8080 on your machine to port 80 inside the container.`

Once running, the app will be available at [http://localhost:8080](http://localhost:8080).
