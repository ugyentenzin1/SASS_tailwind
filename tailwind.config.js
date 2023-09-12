/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      textOpacity:{
        '60': '0.6',
      }
    },
  },
  plugins: [],
};
