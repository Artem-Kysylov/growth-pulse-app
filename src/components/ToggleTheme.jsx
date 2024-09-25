// Imports 
import React, { useContext } from 'react'
import { IoMdMoon } from "react-icons/io"
import { ThemeContext } from '../context/ThemeContext'

export const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const handleClick = () => {
    toggleTheme();
  }
  
  return (
    <div onClick={handleClick} className='transition ease-in-out duration-500 rounded-full w-[44px] h-[44px] flex items-center justify-center cursor-pointer hover:opacity-50'
      style={{ backgroundColor: theme.greenTransparent }}
    >
      <IoMdMoon 
        style={{
          width: '24px',
          height: '24px',
          color: theme.text,
        }}
      />
    </div>
  )
}
