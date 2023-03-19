/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        spin: 'spin 50s linear infinite',
      }
    },
  },
  plugins: [require("daisyui")],
}