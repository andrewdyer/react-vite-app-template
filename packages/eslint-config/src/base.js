import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import turbo from "eslint-plugin-turbo";

/** @type {import("eslint").Linter.Config[]} */
export default [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      import: importPlugin,
      "jsx-a11y": jsxA11y,
      turbo,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
      "import/order": ["warn", { "newlines-between": "always" }]
    },
  },
  {
    ignores: ["dist/**", "node_modules/**"],
  },
];