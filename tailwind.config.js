/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { navy: '#0b1e36', electric: '#1a62ff', cyan: '#06b6d4', canvas: '#f8faff' },
      fontFamily: { sans: ['Hanken Grotesk', 'Arial', 'sans-serif'], display: ['Space Grotesk', 'Arial', 'sans-serif'], mono: ['JetBrains Mono', 'monospace'] },
    },
  },
  plugins: [],
};
