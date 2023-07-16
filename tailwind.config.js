/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "indigo-button": '#1F74AA',
        "indigo-button-hover": '#AA1F2F'
      }
    },
  },
  plugins: [],
}

