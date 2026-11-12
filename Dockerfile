# =============================
# Stage 1 — Base image
# Provides Node.js and pnpm for later stages
# =============================
FROM node:24.19.0-alpine AS base

# Set the working directory inside the container
WORKDIR /app

# Enable corepack so pnpm can be used
RUN corepack enable


# =============================
# Stage 2 — Build
# Installs deps and builds the app for production
# =============================
FROM base AS build

# Copy package.json, the pnpm lockfile and registry configuration
COPY package.json pnpm-lock.yaml .npmrc ./

# Install dependencies before copying the full source so this layer remains
# cached when only application code changes. If the npm_token build secret
# is provided, the auth token is appended to .npmrc before install and
# removed immediately after so no credentials are stored in the image.
RUN --mount=type=secret,id=npm_token,required=false \
    if [ -f /run/secrets/npm_token ] && [ -s /run/secrets/npm_token ]; then \
    printf "\n//npm.pkg.github.com/:_authToken=%s\n" "$(cat /run/secrets/npm_token)" >> .npmrc; \
    fi && \
    pnpm install --frozen-lockfile && \
    rm -f .npmrc

# Copy the full source code
COPY . .

# Build the app
RUN pnpm run build


# =============================
# Stage 3 — Runtime
# Serves the built app using Nginx
# =============================
FROM nginx:1.31.3-alpine AS runtime

# Copy built static files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the app's Nginx server configuration for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Write the container's VITE_ environment variables to config.js at startup,
# so the same image can be configured for each environment
COPY --chmod=755 docker/write-app-config.sh /docker-entrypoint.d/40-write-app-config.sh

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
