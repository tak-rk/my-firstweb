/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#333',
        'secondary': '#666',
      },
    },
  },
  plugins: [
    require("daisyui",'tw-elements/dist/plugin'),
  ],
  corePlugins:{
    darkMode:false,
  },
  
}