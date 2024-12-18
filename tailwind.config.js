/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      blur: {
        sm: "2px", // Nilai blur kecil (sm)
        custom: "10px", // Contoh blur tambahan
      },
      container: {
        center: true, // Memusatkan kontainer
        padding: "1rem", // Menambahkan padding horizontal
        screens: {
          sm: "600px",
          md: "768px",
          lg: "1200px", // Menetapkan lebar maksimum pada breakpoint lg
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      gridTemplateColumns: {
        1: "repeat(1, minmax(0, 1fr))", // grid-cols-1
        2: "repeat(2, minmax(0, 1fr))", // grid-cols-2
        3: "repeat(3, minmax(0, 1fr))", // grid-cols-3
        4: "repeat(4, minmax(0, 1fr))", // grid-cols-4
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      spacing: {
        10: "2.5rem",
        20: "5rem", // Menambahkan 'mx-40' sebagai 10rem
        40: "10rem",
        30: "7.5rem",
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
        "50rem": "50rem",
      },
      height: {
        "25rem": "25rem",
      },
      colors: {
        "custom-cream": "#fffdf3",
        customGreen: "#e8fde1", // Nama warna bisa disesuaikan
        "yellow-300": "#FCD34D",
        "custom-green": "#3ECF4C",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"), // Menambahkan plugin line-clamp
  ],
};
