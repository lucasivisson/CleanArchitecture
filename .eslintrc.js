module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['standard-with-typescript', 'prettier'],
  plugins: ['prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // semi: 'off',
    // '@typescript-eslint/semi': [
    //   'error'
    // ],
    quotes: ['error', 'single'],
    'no-unused-vars': 'error',
    semi: ['error', 'always'],
    'prettier/prettier': ['error'],
  },
};
