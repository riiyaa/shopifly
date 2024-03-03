/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [    "./src/**/*.{js,jsx,ts,tsx}",   ],
  theme: {
    extend: {
      colors:{
        primary:'rgb(99 95 199)',
        primaryBg:{
          light: "white",
          dark: "#2b2c37"
        },
        secondaryBg:{
          light:'rgb(244 247 253)',
          dark:'rgb(32 33 44)'
        }
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 14))' },
        },
      },
    },
  },
  plugins: [require("daisyui")],
}

