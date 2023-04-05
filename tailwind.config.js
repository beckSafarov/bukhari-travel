/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    screens: {
      'xsm': '360px',
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl':'1920px',
    },
    colors: {
      'gray-light':'#fafafa',
      'gray':'#6c757d',
      'gray-med':"#50546b",
      'gray-dark': '#444145',
      'black': '#000',
      'black-light':"#343641",
      'red':"#eb0202",
      'blue':'blue',
      'green':'green',
      'black-blurred':'rgba(0, 0, 0, 0.3)',
      'white':'white',
      'white-dimmed':'rgba(255, 255, 255, 0.7)',
      'orange':'#F1863B',
      'yellow':'yellow'
    },
    fontFamily: {
      serif: ['"Playfair Display"', 'serif'],
      sans: ['Open Sans', 'sans-serif'],
    },
    extend: {
      keyframes: {
        slideFromRight: {
          '0%':{right: '100%'},
          '100%':{right: 0}
        }
      },
      animation:{
        slideFromRight: 'slideFromRight 0.5s ease-in-out'
      },
      backgroundImage:{
        'hero-pattern':"url('/images/hero_1.png')"
      }
    },
  },
  plugins: [],
}