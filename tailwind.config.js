export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#22d3ee",
        background: "#0d1117",
        foreground: "#e6e6e6",
        brand: {
          DEFAULT: "#10b981", // Tailwind's emerald-500
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
