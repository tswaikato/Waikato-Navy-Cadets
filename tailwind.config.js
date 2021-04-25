module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'headerImage': "url('src/assets/images/navigation/header.png')"
      }),
      height: theme => ({
        contactus_default: '1540px',
        contactus_md: '1670px'
      }),
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
        },
        'gradientBlueDark': "#1B3242",
        'gradientBlueMid': "#25455C",
        'gradientBlueLight': "#437EA8",
        'hoverColor': "#5C0E08"
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
