/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { deep: '#061923', ocean: '#0e3e48', turquoise: '#75e8d4', coral: '#f29b86' },
      fontFamily: { sans: ['DM Sans', 'Arial', 'sans-serif'], display: ['Manrope', 'Arial', 'sans-serif'] },
    },
  },
  plugins: [],
};
