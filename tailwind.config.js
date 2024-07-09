/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#1e3932',
        'green': '#008248',
        'light-green': '#d4e9e2',
        'off-white': '#f1f8f6',
        'light-beige': '#f3f1e7',
        'black': '#000000',
      },


    },
  },
  plugins: [],
}