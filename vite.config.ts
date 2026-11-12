/// <reference types="vitest/config" />
import path from 'path';

import react from '@vitejs/plugin-react-swc';
import { msw } from 'msw/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    // Serves the mock service worker script during development only. In worker-only mode the
    // plugin would otherwise copy the script into every production build.
    { ...msw({ mode: 'worker-only' }), apply: 'serve' },
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        // config.js holds per-environment values written at container startup, so it must never
        // be served from the precache. It is fetched from the network first, and the cached copy
        // is used only offline.
        globIgnores: ['config.js'],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname === '/config.js',
            handler: 'NetworkFirst',
          },
        ],
      },
      manifest: {
        name: 'React + Vite App Template',
        short_name: 'RVA Template',
        description:
          'A template for building frontend applications using Vite and React with TypeScript.',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/web-app-manifest-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/web-app-manifest-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  server: {
    port: 5173,
  },
  preview: {
    port: 4173,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    env: {
      VITE_APP_NAME: 'React + Vite',
      VITE_API_URL: 'http://localhost:3000/api',
    },
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    coverage: {
      include: ['src/**/*.{ts,tsx}'],
      provider: 'v8',
      reporter: ['text', 'lcov', 'html'],
      reportsDirectory: './coverage',
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
      exclude: [
        '**/{coverage,dist,node_modules}/**',
        'src/**/*.d.ts',
        'src/**/index.{js,jsx,ts,tsx}',
        'src/{main.tsx,setupTests.ts}',
        'src/**/*.{test,spec}.{js,jsx,ts,tsx}',
        'src/**/*.stories.{ts,tsx}',
        'src/**/*.mock.{js,ts}',
        'src/mocks/**',
        '**/{vite,eslint}.config.{js,ts}',
      ],
    },
  },
});
