/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "rgb(184, 193, 202) 0px 0px 10px",
      },
    },
  },
  plugins: [],
};
