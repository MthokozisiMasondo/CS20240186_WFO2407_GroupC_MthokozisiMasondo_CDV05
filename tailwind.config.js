/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jura', 'sans-serif']
      },
      backgroundImage: {
        'mobile': "url('./images/header-mobile.jpg')",
        'desktop': "url('./images/header.jpg')",
      },
      spacing: {
        '160': '40rem',  
      },
    },
  },
  plugins: [],
}

