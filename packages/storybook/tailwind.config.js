const colors = require('tailwindcss/colors');

module.exports = {
  content: ['../**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
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
