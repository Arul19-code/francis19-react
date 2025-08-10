/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ Must match your React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}