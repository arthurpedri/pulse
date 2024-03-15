/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/components/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#201C1C",
        primary: "#D3D3D3",
        action: {
          1: "#B61919",
          2: "#E74C3C",
          3: "#FF6347",
        },
      },
    },
  },
  plugins: [],
};
