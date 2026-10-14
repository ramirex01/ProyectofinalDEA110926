/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { forest: '#103a2e', ocean: '#146b75', sage: '#eef5ee', sand: '#f8faf7' },
      fontFamily: { sans: ['Plus Jakarta Sans', 'Arial', 'sans-serif'], display: ['Outfit', 'Arial', 'sans-serif'] },
    },
  },
  plugins: [],
};
