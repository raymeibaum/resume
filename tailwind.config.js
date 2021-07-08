module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'print': {'raw': 'print'},
      }
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      display: ['Big Shoulders Display', 'cursive']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-padding-safe")()
  ],
}
