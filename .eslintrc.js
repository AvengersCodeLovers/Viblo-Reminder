module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      2,
      "single"
    ],
    "comma-dangle": [
      2,
      "always-multiline",
      {
        "functions": "never"
      }
    ],
    "curly": [
      2,
      "all"
    ],
    "eqeqeq": [
      2,
      "smart"
    ],
    "semi": [
      "error",
      "always"
    ],
    "eol-last": [
      "error",
      "always"
    ]
  }
};
