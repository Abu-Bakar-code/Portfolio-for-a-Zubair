// tailwind.config.js
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
      plugin(function ({ addUtilities }) {
      addUtilities({
        '.gradient-border-green-pink': {
          border: '2px solid',
          borderImage: 'linear-gradient(to right, green, pink) 1',
        },
        });
    }),
  ],
}
