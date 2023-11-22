module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
  globals: {
    __IS_DEV__: true,
  },
};
