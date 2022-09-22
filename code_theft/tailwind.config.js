/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        1: "0 0 100px rgb(0 0 0 / 8%)",
        2: "4px 4px 40px 0 rgb(0 0 0 / 5%)",
      },
    },
  },
  plugins: [],
};
