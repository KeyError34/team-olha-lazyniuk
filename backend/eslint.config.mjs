import eslintPlugin from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

export default [
  {
    // files: ['**/*.ts'], // Match all TypeScript files
    files: ['src/**/*.ts'],
    ignores: ['**/*.config.mjs', '!**/eslint.config.mjs'], // Ignore specific files
    languageOptions: {
      parser: parser, // Use the TypeScript parser
      parserOptions: {
        ecmaVersion: 'latest', // Use the latest ECMAScript version
        sourceType: 'module', // Treat files as ES modules
        project: './tsconfig.json', // Point to your tsconfig.json
      },
    },
    plugins: {
      '@typescript-eslint': eslintPlugin, // Use the default export of the plugin
    },
    rules: {
      semi: 'error', // Enforce semicolons
      '@typescript-eslint/no-unused-vars': 'warn', // Warn for unused variables
    },
  },
];
