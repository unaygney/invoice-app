/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#7C5DFA",
        "light-purple": "#9277FF",
        "very-dark-blue": "#1E2139",
        "dark-blue": "#252945",
        "light-gray": "#DFE3FA",
        "dark-gray": "#888EB0",
        bluesh: "#7E88C3",
        "custom-black": "#0C0E16",
        red: "#EC5757",
        "light-red": "#FF9797",
        "light-bg": "#F8F8FB",
        "custom-black-400": "#141625",
      },
    },
  },
  plugins: [],
};
