/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  prefix: 'tw-',
  theme: {
    extend: {
      textOpacity:{
        '60': '0.6',
      }
    },
  },
  plugins: [],
};
