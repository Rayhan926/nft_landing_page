module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        gray: {
          111: '#111111',
          555: '#555555',
          777: '#777777',
          999: '#999999',
          'ccc': '#CCCCCC',
          'eee': '#EEEEEE',
        },
        pinkBg: '#FFF0E8'
      }
    },
  },
  plugins: [],
}