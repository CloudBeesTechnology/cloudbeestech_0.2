/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "rgba(0, 0, 0, 0.54)",
      white: "#ffffff",
      liteblack: "rgba(28, 27, 27, 0.37)",
      primary: "#F5C01C",
      secondary: "#333333",
      darkgrey: "#817F80",
      grey: "#313F48",
      mediumgrey: "#B0B0B0",
      litegrey: "#C2C1C0",
      yellow:"#ffc700",
      ashgrey:"rgba(235, 234, 241, 0.4)"
    },
    extend: {},
  },
  plugins: [],
};
