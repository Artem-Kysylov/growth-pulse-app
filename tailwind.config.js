import { light, dark } from './src/colors/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light,
        dark,
      },
    },
    screens: {
      'phone': '400px',      
      'tablet': '768px',
      'laptop': '1280px',
      'desktop': '1600px',
    },
  },
  plugins: [],
}