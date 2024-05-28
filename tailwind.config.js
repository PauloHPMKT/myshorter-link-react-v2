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
      },
      boxShadow: {
        '3xl': '-2px 5px 10px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
