module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: theme => ({
        'backgroundColor': {
          default: "#F2F2F2"
        },
        'headerTextColor': {
          default: "#072942"
        },
        'headerColor': {
          default: "#25455C"
        },
        'footerColor': {
          default: "#25455C"
        },
        'textColor': {
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
