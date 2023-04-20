/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-cover": "url(/Background.png)",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        cursive: ['"Baloo 2"', "cursive"],
      },
      colors: {
        "base-background": "#fafafa",
        "base-title": "#272221",
        "base-subtitle": "#403937",
        "base-text": "#574F4D",
        "base-label": "#8D8686",
        "base-hover": "#D7D5D5",
        "base-button": "#E6E5E5",
        "base-input": "#EDEDED",
        "base-card": "#F3F2F2",
        "purple-light": "#EBE5F9",
        purple: "#8047F8",
        "purple-dark": "#4B2995",
        "yellow-light": "#F1E9C9",
        yellow: "#DBAC2C",
        "yellow-dark": "#C47F17",
      },
    },
  },
  plugins: [],
};
