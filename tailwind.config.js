/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./wiki/**/*.{html,js}","./static/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '700px': '700px'
      }
    },
  },
  plugins: [],
}