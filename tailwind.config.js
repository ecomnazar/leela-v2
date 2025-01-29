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
        darkPrimary: "#2B1734",
        darkSecondary: "#594455",
        grayPrimary: "#8B9497",
        graySecondary: "#B8BEC8",
        lightGrayPrimary: "#dee4ebb0",
        borderPrimary: "#D9D9D9",
        textPrimary: "#616470",
        yellowPrimary: "#E5BF85",
        yellowSecondary: "#D4B685",
        backgroundPrimary: "#313547",
        backgroundSecondary: "#272636",
        backgroundTertiary: "#FDFEFF",
        darkGreen: "#32737B",
      },
      fontFamily: {
        wixRegular: "wix-regular",
        wixMedium: "wix-medium",
        wixSemibold: "wix-semi-bold",
        wixBold: "wix-bold",
        wixExtrabold: "wix-extra-bold",
      },
    },
  },
  plugins: [],
};
