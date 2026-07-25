import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintPluginTailwindcss from "eslint-plugin-tailwindcss";

/** @type {import("eslint").Linter.Config[]} */
const tailwindRules = [
  {
    plugins: { tailwindcss: eslintPluginTailwindcss },
    settings: {
      tailwindcss: {
        cssConfigPath: "./src/shared/styles/globals.css",
        parseKeyFunctions: ["clsx"],
      },
    },
    rules: {
      "tailwindcss/no-arbitrary-value": "warn",
      "tailwindcss/enforces-negative-arbitrary-values": "warn",
      "tailwindcss/enforces-shorthand": "warn",
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "warn",
      "tailwindcss/no-unnecessary-arbitrary-value": "warn",
    },
  },
];

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...tailwindRules,

  // Override default ignores of eslint-config-next.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "node_modules/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
