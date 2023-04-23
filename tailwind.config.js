/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    screens: {
      xsm: "320px", //small mobiles
      sm: "361px", //large mobiles
      md: "760px", //tablets
      lg: "1024px", //laptops
      xl: "1281px", //desktops
      "2xl": "1536px", //large screens
    },
    colors: {
      "gray-light": "#fafafa",
      gray: "#6c757d",
      "gray-med": "#50546b",
      "gray-dark": "#444145",
      "gray-arrow": "#989898",
      "gray-footer": "#efefef",
      black: "#000",
      "black-light": "#343641",
      red: "#eb0202",
      blue: "blue",
      green: "green",
      "black-blurred": "rgba(0, 0, 0, 0.3)",
      white: "white",
      "white-dimmed": "rgba(255, 255, 255, 0.7)",
      orange: "#F1863B",
      "orange-light": "rgba(252, 134, 33, 0.1)",
      yellow: "yellow",
    },
    fontFamily: {
      serif: ['"Playfair Display"', "serif"],
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {
      keyframes: {
        slideFromRight: {
          "0%": { right: "100%",  },
          "100%": {
            right: 0 },
        },
        slideDown: {
          "0%":{height: '0'},
          "100%":{height: '100%'},
        },
        slideUp: {
          "0%":{height: '100%'},
          "100%":{height: '0%'},
        },
        fadeIn: {
          "0%": { opacity: 0, transform: 'translateY(10px)' },
          "100%": { opacity: 1, transform: 'translateY(0)' }
        },
        fadeOut: {
          "0%": {
            opacity: 1, transform: 'translateY(0)'},
          "100%": {
            opacity: 0, transform: 'translateY(10px)'}
        },
      },
      animation: {
        slideFromRight: "slideFromRight 0.5s ease-in-out",
        fadeIn: "fadeIn 0.1s ease-in",
        fadeOut: "fadeOut 0.1s ease-out forwards",
        slideDown: 'slideDown 0.3s linear forwards',
        slideUp: 'slideUp 0.1s ease-out backwards'
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero_1.png')",
      },
    },
  },
  plugins: [],
};