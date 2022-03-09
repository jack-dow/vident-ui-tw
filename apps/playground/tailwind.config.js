const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/demos/**/*.{ts,tsx}',
    './node_modules/@vident-ui/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: colors.zinc,
        primary: colors.sky,
        secondary: colors.indigo,
        success: colors.emerald,
        warning: colors.orange,
        error: colors.red,
      },
    },
  },
  plugins: [],
};
