/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,tsx,ts,jsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#33747C",
        primary100: "#509193",
        grayPrimary: "#8B9497",
        textPrimary: "#616470",
        yellowPrimary: "#E5BF85",
        backgroundPrimary: "#313547",
      },
    },
  },
  plugins: [],
};
