/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-red": "#fe0000",
        "custom-green": "#00ff00",
        "custom-yello": "#ffff33",
        "custom-neon-blue": "#00ffff ",
      },
    },
    backgroundImage: {
      "main-menu-bg": "url('/bg1.jpg')",
      "score-bg": "url('/bg2.jpg')",
      "main-menu-bg": "url('/bg3.jpg')",
    },
  },
  plugins: [],
};
