import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import ts from 'typescript-eslint';

export default [
  { ignores: ['archive/**', 'dist/**', '.astro/**', 'node_modules/**', 'test-results/**'] },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ['**/*.{mjs,ts,astro}'],
    languageOptions: { globals: { process: 'readonly', console: 'readonly', Buffer: 'readonly', URL: 'readonly', document: 'readonly', window: 'readonly', innerWidth: 'readonly', getComputedStyle: 'readonly', navigator: 'readonly', HTMLFormElement: 'readonly', HTMLInputElement: 'readonly', HTMLSelectElement: 'readonly', HTMLTextAreaElement: 'readonly', HTMLElement: 'readonly', FormData: 'readonly', setTimeout: 'readonly' } },
  },
];
