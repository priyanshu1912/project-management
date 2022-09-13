/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': {'max': '720px'},
      // => @media (min-width: 640px) { ... }

      'md': {'max':'1024px'},
      // => @media (min-width: 1024px) { ... }

      'lg': {'max':'1280px'},
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
