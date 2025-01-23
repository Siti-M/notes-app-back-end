import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';

/** @type {import('eslint').Linter.Config[]} */
export default [
  daStyle,
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs', // Menggunakan module CommonJS
      globals: { ...globals.browser, process: 'readonly' }, // Menambahkan process sebagai global readonly
    },
  },
  {
    env: {
      node: true,  // Menambahkan environment Node.js
      es2021: true, // Menggunakan fitur ES2021
    },
  },
  pluginJs.configs.recommended,
];