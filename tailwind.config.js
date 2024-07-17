/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    // Path to Tremor module
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      bg: '#F2F2F2',
      white: '#FFFFFF',
      grey: '#E7E7E7',
      text: '#3B433F',
      primary: '#40A578',
      primaryHover: '#2D7454',
      transparentBlack: 'rgba(59, 67, 63, 0.5)',
    },
    screens: {
      'phone': '400px',      
      'tablet': '768px',
      'laptop': '1280px',
      'desktop': '1600px',
    },
    extend: {},
  },
  plugins: [],
}