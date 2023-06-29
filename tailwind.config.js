/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{ 
        customOrange:'#F67864',
        customBlue:'#3F3675',
        customRed:'#E41D36'
      }
    },
  },
  plugins: [],
}

