/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
    fontFamily: {
      spacegrotesk: ["var(--spacegrotesk-font)", "sans-serif"],
      dmsans: ["var(--dmsans-font)", "sans-serif"],
    },
    colors: {
      black: "#111315;",
      white: "#ffffff",
      yellow: "#FFCB67",
      offwhite: "rgba(255, 255, 255, 0.4)",
      grey_01: "#D9D9D9",
      grey_02: "#A0A5BA",
      grey_03: "rgba(0, 14, 72, 0.62)",
      grey_04: "rgba(17, 19, 21, 0.6)",
      grey_05: "rgba(0, 0, 0, 0.28)",
      blue_01: "#174AFF",
      blue_02: "#0077FE",
      blue_03: "#D3F4F9",
      blue_04: "#E8F2FF",
      green_01: "#00D9AC",
      logoblue: "#1D2A65",
    },
    extend: {
      backgroundImage: {
        custom:
          "linear-gradient(0deg, rgba(0, 221, 168, 0.2), rgba(0, 221, 168, 0.2)), url(../src/assets/images/575.png), url(../src/assets/images/576.png)",
        custom_02: "url(../src/assets/images/576.png)",
      },
    },
  },
  plugins: [],
};
