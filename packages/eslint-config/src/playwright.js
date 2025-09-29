import base from './base.js';
import playwright from 'eslint-plugin-playwright';

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...base,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      playwright,
    },
    rules: {
      ...playwright.configs.recommended.rules,
    },
  },
];
