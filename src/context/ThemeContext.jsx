import React, { createContext, useState, useEffect } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { light, dark } from '../colors/colors'
import { lightTheme, darkTheme } from '../colors/colors'

export const ThemeContext = createContext()

const getFromLocalStorage = () => {
    if(typeof window !== 'undefined') {
        const value = localStorage.getItem('theme')
        return value === 'dark' ? 'dark' : 'light'
    }
    return 'light'
}

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(getFromLocalStorage)

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.documentElement.classList.toggle('dark', theme === 'dark') 
    },[theme])

    // Change theme for Material UI 
    const muiTheme = theme === 'dark' ? darkTheme : lightTheme

    // Change theme for custom colors 
    const customColors = theme === 'dark' ? dark : light

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, customColors, muiTheme }}>
            <MuiThemeProvider theme={muiTheme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    )
}