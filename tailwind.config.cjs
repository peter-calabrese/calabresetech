/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //Light Mode
        "bg-light": "#fffefe",
        "card-light": "#EAE9E9",
        "txt-light": "#2c2a2d",
        "accent-light": "#3972ab",
        "alt-accent-light": "#ea242e",
        //Dark Mode
        "bg-dark": "#121212",
        "card-dark": "#313D4A",
        "txt-dark": "#f1faee",
        "accent-dark": "#9ca1a0",
        "alt-accent-dark": "#de3851",
      },
    },
  },
  plugins: [],
};
