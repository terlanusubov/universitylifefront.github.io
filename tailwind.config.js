/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage:{'banner-bg':"url(./src/Pages/Mainpage/Assets/bannerbg.png)"},
    extend: {
      colors:{ 
        customOrange:'#F4B41A',
        customBlue:'#0378A4',
        customRed:'#E41D36',
        customDarkBlue:'#0C53CD',
        customLightOrange:'#eec974'
      }
    },
  },
  plugins: [],
}

