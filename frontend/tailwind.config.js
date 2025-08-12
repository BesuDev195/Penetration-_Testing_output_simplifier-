/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hackerGreen: "#00ff00",
        hackerRed: "#ff0033",
        hackerBlack: "#0a0a0a",
      },
    },
  },
  plugins: [],
}
