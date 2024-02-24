/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#134EA8",
        alpha: "#ffffff26",
        "alpha-2": "#ffffffcc",
      },
    },
  },
  plugins: [],
};
