/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        inputColor: "rgba(128,128,128, 0.1)",
      },
      width: {
        310: "310px",
      },
    },
  },
  plugins: [],
};
