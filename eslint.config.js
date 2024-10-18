import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import sortKeysFix from "eslint-plugin-sort-keys-fix";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "sort-keys-fix": sortKeysFix,
      prettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "prettier/prettier": ["error", { singleQuote: true, semi: false }],
      // Reglas para ordenar alfabéticamente
      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true, // Coloca los callbacks al final
          shorthandFirst: true, // Coloca las propiedades abreviadas al inicio
          noSortAlphabetically: false, // Ordena alfabéticamente las props
          reservedFirst: true, // Coloca las props reservadas (ej. `key`) primero
        },
      ],
      "sort-keys-fix/sort-keys-fix": "error",
    },
  },
];
