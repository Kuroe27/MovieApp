/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '430px',
        '2xs': '600px',
        '2md': '933px',
        '1lg': '950px',
        '2lg': '1150px',
      }
    },
  },
  plugins: [],
}