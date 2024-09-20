/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_color_gold: '#D2AF26',
        primary_color_white: ' #ffffff',
        secondary_color_gray: '#e6e6e6',
        primary_color_sandle2  :'#e3d6b4',
        
        secondary_color_brown: '#d5c28f',
        secondary_color_sandle: '#b99a45',
        
        bg_color: '#ebeaea61;',
        
        text_light: '#efeee9',
        text_dark: '#1f252d',

        box_color: "rgba(255, 255, 255, 0.5)",
    
      },

      backgroundImage: {
        'hero-pattern': "url('../src/assets/img2.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },

      
      boxShadow:{
        shadow: '8px 5px 150px -94px gray',
      },

      screens: {
        'sm': {'min': '320px', 'max': '599px'},
        'md': {'min': '600px', 'max': '768px'}, 
        'lg': '1024px',
        'xl': '1280px',
      },

    },
  },
  plugins: [],
}