/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit', // Enable JIT mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       boxShadow: {
        'green': '0 8px 12px rgba(0, 0, 0, 0.5)', // Custom green shadow
      },
      screens: {
        xs: '480px',
        xxs:'320px', // Adding the xs breakpoint
      },
      fontFamily: {
        exo: ['Exo', 'exo2', 'sans-serif'], // Add Exo 2 font stack
        orbitron: ['Orbitron', 'sans-serif'],
      },
      keyframes: {
        swipe: { // Properly defined swipe3 keyframes
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }, // Slight variation for uniqueness
        },

        swipe1: { // Properly defined swipe3 keyframes
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' }, // Slight variation for uniqueness
        },

      },
      animation: { 
        swipe: 'swipe 15s linear infinite',
        swipe1: 'swipe1 15s linear infinite', 





      },
    },
  },
  plugins: [],
}
