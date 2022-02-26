module.exports = {
  mode: "jit",
  content: ["./src/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'search-icon': 'url(./assets/search-icon-black.png)',
        'caret-down': 'url(./assets/caret-down.png)',

      }
    },
  },
  variants: {},
  plugins: [],
};