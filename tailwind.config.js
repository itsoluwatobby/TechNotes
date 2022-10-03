/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily:{
      cursive:['cursive']
    },
    screens:{
      mobile: {'max': '768px'}
    }
  },
  plugins: [],
}
