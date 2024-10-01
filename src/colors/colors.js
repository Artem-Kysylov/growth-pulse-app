import { createTheme } from '@mui/material/styles'

// Light theme colors
export const light = {
    green: '#40A578',
    greenTransparent: 'rgba(64, 165, 120, 0.5)',
    hover: '#2D7454',
    blue: '#2B7BBE',
    lightGreen: '#96CEB5',
    background: '#F2F2F2',
    surface: '#FFFFFF',
    text: '#3B433F',
    textTransparent: 'rgba(59, 67, 63, 0.5)',
    grey: '#E7E7E7',
}


// Dark theme colors 
export const dark = {
    green: '#4EC28F',
    greenTransparent: 'rgba(78, 194, 143, 0.5)',
    hover: '#348561',
    blue: '#3A97E4',
    lightGreen: '#AEEACF',
    background: '#242424',
    surface: '#000000',
    text: '#9FB0A8',
    textTransparent: 'rgba(159, 176, 168, 0.5)',
    grey: '#A3A3A3',
}

// Colors for Material UI Components 

// Light theme 
export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#40A578',
            light: 'rgba(64, 165, 120, 0.5)',
        },
        secondary: {
            main: '#2B7BBE'
        },
        customSecondary: {
            main: '#96CEB5'
        },
        action: {
            hover: '#2D7454'
        },
        text: {
            primary: '#3B433F',
            secondary: 'rgba(59, 67, 63, 0.5)'
        },
        background: {
            default: '#F2F2F2',
            paper: '#FFFFFF',
        },
        grey: {
            100: '#E7E7E7'
        }
    }
})

// Dark theme 
export const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#4EC28F',
            light: 'rgba(78, 194, 143, 0.5)',
        },
        secondary: {
            main: '#3A97E4'
        },
        customSecondary: {
            main: '#AEEACF'
        },
        action: {
            hover: '#348561'
        },
        text: {
            primary: '#9FB0A8',
            secondary: 'rgba(159, 176, 168, 0.5)'
        },
        background: {
            default: '#242424',
            paper: '#000000',
        },
        grey: {
            100: '#A3A3A3'
        }
    }
})