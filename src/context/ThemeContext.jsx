import React, { createContext, useState, useEffect } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { light, dark } from '../colors/colors'

export const ThemeContext = createContext()

const getFromLocalStorage = () => {
    if(typeof window !== 'undefined') {
        const value = localStorage.getItem('theme')
        return value === 'dark' ? dark : light
    }
    return light
}

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(getFromLocalStorage)

    const toggleTheme = () => {
        setTheme(theme === light ? dark : light)
    }

    useEffect(() => {
        const themeMode = theme === dark ? 'dark' : 'light'
        localStorage.setItem('theme', themeMode)
        document.documentElement.classList.toggle('dark', theme === dark) 
    },[theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MuiThemeProvider theme={theme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    )
}