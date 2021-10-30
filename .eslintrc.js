/*
  https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md
  https://github.com/yannickcr/eslint-plugin-react
  https://robertcooper.me/post/using-eslint-and-prettier-in-a-typescript-project
*/
module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended",
    /*
      https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-800-2021-02-21
      Uses the recommended rules from the @typescript-eslint/eslint-plugin
      Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettierEnables eslint-plugin-prettier and eslint-config-prettier.
      This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array. */
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
    /*'import/resolver': {
      alias: [['@pages-components', './pages-components']]
    }*/
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ["@typescript-eslint", "react"],
  /*parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },*/
  rules: {
    "react/prop-types": "off", // Disable prop-types as we use TypeScript for type checking
    "react/jsx-curly-spacing": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    // 'max-len': ['warn', { code: 120 }],
    // indent: ['error', 2],
    // semi: ["error", "never"],
    // quotes: ['error', 'single'],
    // 'comma-dangle': ['error', 'never'],
    // 'object-curly-spacing': ['error', 'always', { arraysInObjects: false, objectsInObjects: false }],
    // 'react/jsx-closing-bracket-location': [1, 'line-aligned'],
    // 'arrow-parens': ['error', 'as-needed'],
    // 'linebreak-style': 0
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off", //
      },
    },
  ],
};
