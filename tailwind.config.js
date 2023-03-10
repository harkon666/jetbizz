/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#BC9B2F",
        "light-gray": "#F9F9F9",
        "semi-black": "#19232d",
        "light-purple": "#F1E2CC",
      },
    },
  },
  plugins: [],
};
