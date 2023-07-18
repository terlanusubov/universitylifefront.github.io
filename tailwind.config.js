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
        customOrange:'#F67864',
        customBlue:'#3F3675',
        customRed:'#E41D36',
        customDarkBlue:'#0C53CD',
        customLightOrange:'#fa8c7a'
      }
    },
  },
  plugins: [],
}

