module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: theme => ({
        'background': {
          default: "#F2F2F2"
        },
        'headerText': {
          default: "#072942"
        },
        'text': {
          default: "#052033",
          dark: "#F2F2F2"
        }
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')
,require('@tailwindcss/forms')
,require('@tailwindcss/line-clamp')
,require('@tailwindcss/typography')
],
};
