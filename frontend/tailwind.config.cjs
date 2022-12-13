/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#1DB954",
        "accent-secondary": "#1DB954",
        dark: "#000000",
        "dark-secondary": "#181818",
        "dark-tertiary": "#2e2e2e",
        light: "#d9dbda",
        "light-secondary": "#919191",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
  ],
};
