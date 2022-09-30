/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        veryDarkGray: "hsl(0, 0%, 17%)",
        darkGray: "hsl(0, 0%, 59%)",
      },
      fontFamily: {
        serif: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        "header-image": "url(./pattern-bg.png)",
      },
    },
  },
  plugins: [],
};
