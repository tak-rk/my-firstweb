/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  defalteTheme:{
    extend:{
      backgroundColor:'primmary',
      textColor:'secondary',
    },
  },
  theme: {
    extend: {
      'primary': '#333',
        'secondary': '#666',
        'dark': {
          'primary': '#ccc',
          'secondary': '#999',
        },
    },
  },
  plugins: [
    require("daisyui",'tw-elements/dist/plugin'),
  ],
  
}