/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        card: "#313D4A",
        txt: "#f1faee",
        accent: "#9ca1a0",
        "alt-accent": "#de3851",
      },
    },
  },
  plugins: [],
};
