/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0e1529",
        secondary: "#00000040",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
};

