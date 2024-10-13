/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      "main-menu-bg": "url('/bg1.jpg')",
      "score-bg": "url('/bg2.jpg')",
      "main-menu-bg": "url('/bg3.jpg')",
    },
  },
  plugins: [],
};
