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
      files: ['src/**/*.js', 'src/**/*.jsx'], // путь к файлам, которые нужно проверять
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
};
