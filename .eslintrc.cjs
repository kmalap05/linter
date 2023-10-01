module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    // Additional Rules
    'react/prop-types': 'off', // off, warn, error
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    // 'quotes': ['error', 'single']
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'no-trailing-spaces': 'error',
    // 'space-before-function-paren': ['error', 'always']
    'no-var': 'error',
    'no-unused-expressions': 'error'
  }
}
