/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    screens: {
      md: "777px",
      xl: "1238px"
    },
    extend: {
      backgroundImage: (theme) => ({
        background: "url('/assets/background/background.jpg')",
      }),
    },
    fontFamily: {
      title: ["Bebas Neue", "cursive"],
      text: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
