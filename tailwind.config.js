/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cobalt: "#2D5BFF",
        "neo-yellow": "#FDFF00",
        "neo-green": "#00FF66",
        "neo-orange": "#FF6B35",
        "neo-pink": "#FF006E",
        "neo-purple": "#8338EC",
        "neo-cyan": "#00F5FF",
      },
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        "archivo-black": ["Archivo Black", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
