export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#10b981", // Tailwind's emerald-500
        },
      },
    },
  },
  plugins: [],
  extend: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
};
