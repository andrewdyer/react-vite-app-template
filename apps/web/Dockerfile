# =============================
# Stage 1 — Base image
# Provides Node.js, pnpm, and Turbo for all later stages
# =============================
FROM node:22-alpine AS base

# Set the working directory inside the container
WORKDIR /app

# Enable corepack so pnpm can be used
RUN corepack enable

# Install Turbo globally for monorepo tasks
RUN npm install -g turbo


# =============================
# Stage 2 — Prune
# Reduces the monorepo down to only the web app and its dependencies
# =============================
FROM base AS prune

# Set the working directory
WORKDIR /app

# Copy the entire repo (required for Turbo prune)
COPY ../.. .

# Prune the repo for the "web" app
RUN turbo prune --scope=web --docker


# =============================
# Stage 3 — Build
# Installs dependencies and builds the web app for production
# =============================
FROM base AS build

# Set the working directory
WORKDIR /app

# Copy pruned package.json files
COPY --from=prune /app/out/json/ ./

# Copy pruned pnpm lockfile
COPY --from=prune /app/out/pnpm-lock.yaml ./

# Copy pruned full source code
COPY --from=prune /app/out/full/ ./

# Install only the necessary dependencies
RUN pnpm install --frozen-lockfile

# Build the web app with Turbo
RUN pnpm turbo run build --filter=web...


# =============================
# Stage 4 — Runtime
# Serves the built app using Nginx
# =============================
FROM nginx:alpine AS runtime

# Copy built static files from the build stage
COPY --from=build /app/apps/web/dist /usr/share/nginx/html

# Copy the custom Nginx configuration for SPA routing
COPY apps/web/nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]