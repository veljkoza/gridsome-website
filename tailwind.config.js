module.exports = {
  purge: ['./src/**/*.vue',
  './src/**/*.js',
  './src/**/*.jsx',
  './src/**/*.html',
  './src/**/*.pug',
  './src/**/*.md'],
  theme: {
    fontFamily: {
      display: ["Gilroy", "sans-serif"],
      body: ["Graphik", "sans-serif"]
    },
    container: {
      center: true
    },
    extend: {
      screens: {
        'xxl': '1600px',
        // => @media (min-width: 1600px) { ... }
      },
      colors: {
        "primary": process.env.PRIMARY,
        "secondary": process.env.SECONDARY,
        "lightBlue": process.env.LIGHT_BLUE,
        "secondaryBlue": process.env.SECONDARY_BLUE,
        "yellow": process.env.YELLOW,
        "tertiary": process.env.TERTIARY,
        "grayBlue": process.env.GRAY_BLUE,
        "white": process.env.WHITE
      },
      fontSize: {
        "7xl": "5rem"
      },
      borderRadius: {
        xl: "25px",
        xxl: "50px"
      },
      margin: {
        half: "50%"
      },
      padding:{
        "10rem":"10rem",
        "8rem":"8rem",
        "6rem":"6rem"

      },
      height: {
        "589px": "589px",
        "80": "20rem",
        "80vh": "80vh",
        "70vh": "70vh"
      }
    }
  },
  variants: {},
  plugins: []
};
