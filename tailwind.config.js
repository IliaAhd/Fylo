/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        Cyan: "hsl(176, 68%, 64%)",
        Blue: " hsl(198, 60%, 50%)",
        LightRed: "hsl(0, 100%, 63%)",
        introAndEmailBgBlue: "hsl(217, 28%, 15%)",
        mainBgBlue: "hsl(218, 28%, 13%)",
        footerBgBlue: "hsl(216, 53%, 9%)",
        testimonialsBgBlue: "hsl(219, 30%, 18%)",
      },
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      Raleway: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
};
