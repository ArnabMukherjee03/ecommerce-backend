import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import unicorn from 'eslint-plugin-unicorn'


/** @type {import('eslint').Linter.Config[]} */
export default [
  {ignores: ['**/dist','**/node_modules']},
  {files: ['**/*.{js,mjs,cjs,ts}']},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      unicorn
    },
    rules: {
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/return-await': 'off',
      'no-console': 'error',
      'indent': ['error', 2],
      'camelcase': ['error', { 'properties': 'always' }],
      'no-unused-vars': 'warn',
      'semi': [
        2,
        'never'
      ],
      'quotes': [
        2,
        'single'
      ],
      'unicorn/filename-case': [
        'error',
        {
          'cases': {
            'kebabCase': true,
            'camelCase': false,
            'pascalCase': false,
            'snakeCase': false
          }
        }
      ]
    }
  }
]