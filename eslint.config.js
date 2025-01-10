import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import groupedImport from 'eslint-plugin-grouped-import';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'grouped-import': groupedImport,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-empty-object-type': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'grouped-import/group': [
        'warn',
        {
          Packages: [
            { path: 'react' },
            { path: 'axios' },
            { path: '@tanstack' },
            { path: 'date-fns' },
            { path: 'vite' },
            { path: 'immer' },
            { path: 'styled-components' },
            { path: 'react-router-dom' },
            { path: '@hookform' },
            { path: 'react-hook-form' },
            { path: 'use-mask-input' },
            { path: 'zod' },
            { path: 'date-fns' },
            { path: 'phosphor-react' },
            { path: 'react-toastify' },
            { path: '@emotion' },
          ],
          Libs: [{ path: 'libs/axios' }],
          Utils: [{ path: 'utils' }],
          Routes: [{ path: 'router' }, { page: 'routes' }],
          Pages: [{ path: 'pages/' }],
          Reducers: [{ path: 'reducers' }],
          Components: [{ path: 'components' }, { path: 'components/' }],
          Contexts: [{ path: 'contexts' }],
          Hooks: [{ path: 'hooks' }],
          Models: [{ path: 'models' }],
          Services: [{ path: 'services' }],
          Styles: [{ path: 'styles' }, { path: '.css' }, { path: '.styles' }],
          Assets: [
            { path: 'assets' },
            { path: '.png' },
            { path: '.svg' },
            { path: '.jpg' },
            { path: '.ttf' },
          ],
        },
      ],
    },
  }
);
