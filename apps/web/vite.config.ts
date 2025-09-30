/// <reference types="vitest/config" />
import { resolve } from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

/**
 * See https://vitejs.dev/config.
 */
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Web App',
        short_name: 'WebApp',
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
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules'],
    coverage: {
      all: false,
      enabled: true,
      provider: 'v8',
      thresholds: {
        lines: 90,
        functions: 90,
        branches: 90,
        statements: 90,
      },
      reporter: ['text', 'json', 'html'],
      exclude: [
        'dist',
        'node_modules',
        'src/**/*.d.ts',
        'src/**/index.{js,jsx,ts,tsx}',
        'src/**/*.stories.{js,jsx,ts,tsx}',
        'src/**/*.test.{js,jsx,ts,tsx}',
      ],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
