/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Ubuntu", "Arial", "sans-serif"],
    },
  },
  variants: {
    borderWidth: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
