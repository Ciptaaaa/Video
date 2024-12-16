/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      spacing: {
        10: "2.5rem",
        20: "5rem", // Menambahkan 'mx-40' sebagai 10rem
        40: "10rem",
      },
      borderWidth: {
        2: "2px",
        3: "3px",
        4: "4px", // Menambahkan kelas border-4
        8: "8px", // Contoh tambahan: border-8
      },
      display: {
        "inline-block-sm": "inline-block", // Utility khusus
      },
      width: {
        "1/2": "50%", // Pastikan tetap ada jika diubah
        "2/5": "40%", // Tambahkan ukuran baru (contoh)
        "3/5": "60%", // Tambahan lainnya
        "1/5": "20%",
      },
      colors: {
        "custom-cream": "#fffdf3",
        customGreen: "#e8fde1", // Nama warna bisa disesuaikan
        "yellow-300": "#FCD34D",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"), // Menambahkan plugin line-clamp
  ],
};
