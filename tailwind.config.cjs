/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        red: {
          500: "#F75A68",
        },
        gray: {
          100: "#F8F9FC",
          200: "#E6E8F2",
          300: "#D1D6E4",
          400: "#8D95AF",
          500: "#303F73",
          600: "#252D4A",
          700: "#181C2A",
          800: "#0E1116",
        },
        purple: {
          100: "#8381D9",
          200: "#2A2879",
        },
        green: {
          100: "#50B2C0",
          200: "#255D6A",
          300: "#0A313C",
        },
      },
    },
  },
  plugins: [],
};
