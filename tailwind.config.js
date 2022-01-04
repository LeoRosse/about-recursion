module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: 'black',
      white: 'white',
      grey: '#9DBCD4',
      yellow: '#FFFD01',
      indigo: '#6D5ACF',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
