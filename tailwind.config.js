/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        courierNew: ['Courier New', 'sans-serif']
      }
    },
  },
  plugins: [],
}

