module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': 'error',
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    'max-len': 'off',
    'indent': ['warn', 2, {
      'SwitchCase': 1,
      'MemberExpression': 1
    }],
    'quote-props': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'import/named': 'error',
    'no-multi-spaces': ['error'],
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/prefer-stateless-function': 'off',
    'jsx-a11y/anchor-is-valid': 'off'
  },
};
