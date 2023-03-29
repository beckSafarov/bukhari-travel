/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'gray-light':'#fafafa',
      'gray-med':"#50546b",
      'gray-dark': '#e7e7e7',
      'black': '#161c1c',
      'black-light':"#343641",
      'red':"#eb0202",
      'blue':'blue',
      'white':'white'
    },
    fontFamily: {
      serif: ['"Frank Ruhl Libre"', 'serif'],
      sans: ['Mulish', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}