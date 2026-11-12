# Use the official Node.js runtime as the base image
FROM node:24.19.0-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Enable corepack so the pnpm version pinned in package.json is used
RUN corepack enable

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the entire application code to the container
COPY . .

# Build the React app for production
RUN pnpm build

# Use Nginx as the production server
FROM nginx:alpine

# Copy the built React app to Nginx's web server directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the Nginx configuration file to the container
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
