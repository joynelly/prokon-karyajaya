/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-kj' : '#FF731D',
        'grey-orange-kj' : '#E4D8C3',
        'white-kj' : '#FFF7E9',
        'light-blue-kj' : '#5F9DF7',
        'dark-blue-kj' : '#1746A2',
        'grey-kj' : '#D9D9D9',
      },
      fontFamily: {
        'norwester' : ["Norwester"],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

