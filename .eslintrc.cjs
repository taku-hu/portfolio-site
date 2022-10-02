/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  env: {
    jest: true
  },
  extends: ['standard', 'plugin:vue/vue3-recommended', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'type'],
        pathGroups: [
          {
            pattern: '@/types/**',
            group: 'type'
          },
          {
            pattern: '@/**',
            group: 'internal'
          }
        ],
        alphabetize: {
          order: 'asc'
        },
        'newlines-between': 'always'
      }
    ]
  }
}
