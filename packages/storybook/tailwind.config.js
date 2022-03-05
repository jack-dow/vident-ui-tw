const colors = require('tailwindcss/colors');

module.exports = {
  content: ['../**/*.{ts,tsx}', './.storybook/*.{js,jsx}'],
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
