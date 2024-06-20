/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './*.html' ],
  theme: {
    container: {
      center: true
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        'logo': ['Ramabhadra', 'sans-serif'],
        'heading': ['CircularStd'],
        'paragraph': ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '12px 16px 50px 0px rgba(154, 154, 154, 0.12)',
      },
      animation:{
        'loop-scroll': 'loop-scroll 50s linear infinite',
      },
      keyframes: {
        'loop-scroll':{
          from: { transform: 'translateX(0)'},
          to: { transform: 'translateX(-100%)'},
        },
      },
    },
  },
  plugins: [],
}

