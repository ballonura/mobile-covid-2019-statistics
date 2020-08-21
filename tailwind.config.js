/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    container: {
      padding: "20px",
      center: true
    },
    colors: {
      "purple-darker": "#0D1333",
      "purple-dark": "#473F97",
      "purple-light": "#9059FF",
      "blue-dark": "#4D79FF",
      "blue-light": "#4DB5FF",
      red: "#FF4D58",
      orange: "#FFB259",
      green: "#4CD97B",
      gray: "#999FBF",
      white: "#ffffff",
      black: "#000000"
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: ["components/**/*.vue", "layouts/**/*.vue", "pages/**/*.vue", "plugins/**/*.js", "nuxt.config.js"]
  }
};
