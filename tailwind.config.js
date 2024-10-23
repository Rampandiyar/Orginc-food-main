/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
      sm: "375px",
      sm: "320px",
    },
    colors: {
      txt: "#303030",
      gree: "#3CB018",
      white: "#FFFFFF",
      trt: "#595959",
      re: "#F0693E",
      bgfa: "#FAFAFA",
    },
    fontFamily: {
      poppins: "Poppins",
      monst: "Montserrat",
      calli: "Calligraffitti",
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
