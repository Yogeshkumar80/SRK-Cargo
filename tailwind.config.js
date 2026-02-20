/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-dark": "#0a0a0a",
        "surface-dark": "#111111",
        "border-dark": "#1f1f1f",
        primary: "#facc15",
      },
    },
  },
  plugins: [],
};