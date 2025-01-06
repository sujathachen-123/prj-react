/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html","./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        navyLite:"#4a4c7e",
        navy:"#252641"
      },
      fontFamily:{
        poppins:["Poppins","sans-series"],
      }
    },
  },
  plugins: [],
}

