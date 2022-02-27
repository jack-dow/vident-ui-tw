module.exports = {
  // These settings are duplicated in .editorconfig:
  tabWidth: 2, // indent_size = 2
  useTabs: false, // indent_style = space
  endOfLine: 'lf', // end_of_line = lf
  singleQuote: true, // default: false
  printWidth: 100, // default: 80
  trailingComma: 'es5',
  bracketSpacing: true,
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: "./packages/storybook/tailwind.config.js",
};
