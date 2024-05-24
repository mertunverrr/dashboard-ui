import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1440px',
        xl: '1440px',
        '2xl': '1440px'
      }
    },
    extend: {
      fontFamily: {
        gemunu: [ 'Gemunu Libre' , 'sans-serif'],
        opensans:[ 'Open Sans' , 'sans-serif'],
      },
      spacing: {
        '5.5' : '22px',
        '0.75' : '3px',
        '0.25' : '1px'
      },
      keyframes: {
        slideLeftIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideLeftOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideRightIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideRightOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        slideLeftIn: 'slideLeftIn 1s',
        slideLeftOut: 'slideLeftOut 1s',
        slideRightIn: 'slideRightIn 1s',
        slideRightOut: 'slideRightOut 1s',
      },
    },
  },
  plugins: [],
}

