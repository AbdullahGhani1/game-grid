import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tailwindcss from 'eslint-plugin-tailwindcss';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
   baseDirectory: __dirname,
   recommendedConfig: js.configs.recommended,
   allConfig: js.configs.all,
});

const config = [
   {
      ignores: ['dist', 'node_modules', 'src/components/ui/*'],
   },
   js.configs.recommended,
   ...tseslint.configs.recommended,
   ...compat.extends('standard'),
   {
      files: ['**/*.{js,jsx,ts,tsx}'],
      plugins: {
         'react-hooks': reactHooks,
         'react-refresh': reactRefresh,
         tailwindcss,
      },
      languageOptions: {
         ecmaVersion: 2020,
         globals: {
            ...globals.browser,
            ...globals.es2020,
         },
      },
      rules: {
         ...reactHooks.configs.recommended.rules,
         'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
         ],
         'import/order': [
            'error',
            {
               groups: [
                  'builtin',
                  'external',
                  'internal',
                  ['parent', 'sibling'],
                  'index',
                  'object',
               ],
               'newlines-between': 'always',
               pathGroups: [
                  {
                     pattern: '@src/**',
                     group: 'external',
                     position: 'after',
                  },
               ],
               pathGroupsExcludedImportTypes: ['builtin'],
               alphabetize: {
                  order: 'asc',
                  caseInsensitive: true,
               },
            },
         ],
         'comma-dangle': 'off',
      },
   },
   {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
         'no-undef': 'off',
      },
   },
   prettierConfig,
];

export default config;
