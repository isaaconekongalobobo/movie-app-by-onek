/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundColor : {
            principale: '#00693E',
            aliceblue: '#F0F8FF',
            jaune: '#F4C431',
            'main-green': '#00693E',
            'secondary-green': '#7ED218'
        },
        screens: {
            'xs': { max: '639px' },
            'tablet': { min: '640px', max: '1023px' },
            'desktop': { min: '1024px' },
          },
          colors: {
            mainred:"#FF0800",
          }
      },
    },
    plugins: [],
  }
  