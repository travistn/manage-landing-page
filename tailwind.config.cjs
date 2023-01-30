/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bright-red': '#F3603C',
        'dark-blue': '#242D52',
      },
    },
  },
  plugins: [],
};
