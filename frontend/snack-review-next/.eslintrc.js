module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:tailwindcss/recommended",
    "plugin:react/recommended",
    "airbnb",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "tailwindcss",
    "import",
    "unused-imports",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    quotes: ["error", "double"],
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "no-console": ["error", { allow: ["warn", "info", "error"] }],
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", "tsx"] }],
    "unused-imports/no-unused-imports": "warn",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "arrow-body-style": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "no-underscore-dangle": "off",
    "global-require": "off",
    "react/require-default-props": [
      "error",
      {
        forbidDefaultForRequired: true,
        functions: "defaultArguments",
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "@alias/**",
            group: "parent",
            position: "before",
          },
        ],
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
};
