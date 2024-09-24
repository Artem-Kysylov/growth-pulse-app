import React, { createContext, useState, useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { light, dark } from '../colors/colors'

export const ThemeContext = createContext()

const getFromLocaleStorage = () => {
    if(typeof window !== 'undefined') {
        const value = localStorage.getItem('theme')
        return value || light
    }
}

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocaleStorage()
    })

    const toggleTheme = () => {
        setTheme(theme === light ? dark : light)
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
    },[theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}