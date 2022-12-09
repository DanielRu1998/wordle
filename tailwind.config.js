/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: '#fff',
      black: '#292e3f',
      navM: '#F3F3F3',
      navN: 'rgba(218, 220, 224, 0.03);',
      gray: '#818181',
      buttonGreen: '#6AAA64',
      moztace: '#ceb02c',
      noExist: '#939B9F',
      screenW: '#f9f9f9',
      screenB: '#262b3c',
      keyboardM: 'rgba(218, 220, 224, 0.3);',
      keyboardN: 'rgba(218, 220, 224, 0.03);',
      whiteOpacity: 'rgba(255,255,255,.9)',
      darkOpacity: 'rgba(0,0,0,.7)'
    },
    extend: {},
  },
  plugins: [],
}
