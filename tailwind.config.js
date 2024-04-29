/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./main.js' ,'./src/**/*.js'],
  theme: {
    extend: {
      colors: {
        'green-cane': '#32CD32', 
      },
      fontFamily: {
        'bree': ['Bree Serif', 'serif'],
      },
      textShadow: {
        'white': '2px 2px 3px #FFFFFF', 
        'greenCane': '2px 2px 2px #32CD32',
      },
    },
  },
  plugins: [],
}