module.exports = {
    extends: ['airbnb'],
    rules: {
    },
    env: {
      browser: true,
      es2021: true
    },
    parserOptions: {
      ecmaFeatures: { jsx: true },
      ecmaVersion: 12,
      sourceType: 'module'
    }
  }