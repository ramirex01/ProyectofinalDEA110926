/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./js/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ocean: "#083947",
        turquoise: "#168a8b",
        coral: "#f2a38d",
        sand: "#f3f1e9",
      },
      fontFamily: {
        sans: ["DM Sans", "Arial", "sans-serif"],
        display: ["Manrope", "Arial", "sans-serif"],
        editorial: ["Fraunces", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
