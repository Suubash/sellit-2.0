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
        light: "#d9dbda",
        "light-secondary": "#c5c7c6",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
