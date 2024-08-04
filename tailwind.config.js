/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primer: "#01A4FF",
        primer2: "#71CACE",
      },
      width: {
        450: "450px",
        350: "350px",
      },
      height: {
        450: "450px",
        88: "88px",
      },
      padding: {
        88: "88px",
      },
      fontFamily: {
        reem: ["Reem Kufi fun", "sans-serif"],
        secularOne: ["Secular One", "sans-serif"],
        inter: ["Inter  ", "sans-serif"],
      },
      dropShadow: {
        xBlack: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      animation: {
        'grow': 'grow 1.75s ease-in-out infinite',
      },
      keyframes: {
        'grow': {
          '0%': { transform: 'scale(0.3)' },
          '20%': { transform: 'scale(1)' },
          '40%': { transform: 'scale(0.3)' },
          '100%': { transform: 'scale(0.3)' },
        },
      },
    },
  },
  plugins: [],
}