/*eslint linebreak-style: ["error", "windows"]*/
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
    {
      files: ['src/**/*.js', 'src/**/*.jsx'],
      rules: {
        "react/jsx-filename-extension": [
          1,
          { "extensions": [".js", ".jsx"] }
        ]
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "no-nested-ternary": "off",
    'linebreak-style':0,
  }
};
