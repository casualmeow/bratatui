// @ts-check
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importX from "eslint-plugin-import-x";

export default tseslint.config(
  // 0) Ignores (adjust paths as needed)
  {
    ignores: [
      "dist/",
      "build/",
      "coverage/",
      "node_modules/",
      "src-tauri/target/", // Tauri Rust build artifacts
    ],
  },

  // 1) Base JS recommended
  js.configs.recommended,

  // 2) TS recommended + type-aware rules
  //    (projectService enables typed linting; fastest + modern)
  tseslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
    },
  },

  // 3) A11y (flat shareable config)
  jsxA11y.flatConfigs.recommended,

  // 4) React + Hooks + import hygiene + extra TS rules
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      "import-x": importX,
    },
    settings: { react: { version: "detect" } },
    languageOptions: {},
    rules: {
      // --- React best practices (no deprecated rules) ---
      "react/jsx-no-leaked-render": ["error", { validStrategies: ["coerce"] }],
      "react/no-unstable-nested-components": ["warn", { allowAsProps: true }],
      "react/self-closing-comp": "warn",
      "react/no-danger": "warn",

      // --- Official Hooks rules (recommended-latest preset) ---
      ...reactHooks.configs["recommended-latest"].rules,

      // --- TypeScript: stronger, type-aware checks ---
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" },
      ],
      "@typescript-eslint/no-floating-promises": [
        "error",
        { ignoreVoid: true },
      ],
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
      "@typescript-eslint/no-unnecessary-type-assertion": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
      "@typescript-eslint/prefer-optional-chain": "warn",
      "@typescript-eslint/no-unnecessary-condition": [
        "warn",
        { allowConstantLoopConditions: true },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      // --- Imports hygiene (rules that don't need a resolver) ---
      "import-x/no-duplicates": "warn",
      "import-x/newline-after-import": "warn",
      "import-x/no-useless-path-segments": ["warn", { noUselessIndex: true }],
      "import-x/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "import-x/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
            "type",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      // --- General sanity ---
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "warn",
    },
  },

  // 5) Tests (optional tweak)
  {
    files: ["**/*.{test,spec}.{ts,tsx,js,jsx}"],
    languageOptions: {
      globals: { ...globals.jest, ...globals.mocha, ...globals.node },
    },
  },
);
