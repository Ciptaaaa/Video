/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "custom-cream": "#fffdf3",
        customGreen: "#e8fde1", // Nama warna bisa disesuaikan
      },
    },
  },
  plugins: [],
};
