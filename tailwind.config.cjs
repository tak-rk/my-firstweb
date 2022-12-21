/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  darkMode: [false],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui",'tw-elements/dist/plugin'),
  ],
  
}