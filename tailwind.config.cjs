/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        primaryLight: '#333333',
        secondary: '#242424',
        secondaryLight: '#3d3d3d',
      },
    },
  },
  plugins: [],
}