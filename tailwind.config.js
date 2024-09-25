import { light, dark } from './src/colors/colors'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: light.green,
          dark: dark.green,
        },
        blue: {
          light: light.blue,
          dark: dark.blue,
        },
        lightGreen: {
          light: light.lightGreen,
          dark: dark.lightGreen,
        },
        greenTransparent: {
          light: light.greenTransparent,
          dark: dark.greenTransparent,
        },
        background: {
          light: light.background,
          dark: dark.background,
        },
        surface: {
          light: light.surface,
          dark: dark.surface,
        },
        text: {
          light: light.text,
          dark: dark.text,
        },
        textTransparent: {
          light: light.textTransparent,
          dark: dark.textTransparent,
        },
        hover: {
          light: light.hover,
          dark: dark.hover,
        },
        grey: {
          light: light.grey,
          dark: dark.grey,
        },
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