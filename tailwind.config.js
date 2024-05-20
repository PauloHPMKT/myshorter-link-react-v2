/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#134EA8",
        secondary: "#172742",
        main: "#E2E8F0",
        alpha: "#ffffff26",
        "alpha-2": "#ffffffcc",
      },
      colors: {
        primary: "#134EA8",
      },
      borderColor: {
        primary: "#134EA8"
      }
    },
  },
  plugins: [],
};
