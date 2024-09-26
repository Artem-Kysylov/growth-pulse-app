// Imports 
import React, { useContext } from 'react'
import { IoMdMoon } from "react-icons/io"
import { IoIosSunny } from "react-icons/io"
import { ThemeContext } from '../context/ThemeContext'
import { dark, light } from '../colors/colors'

export const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const isDarkTheme = theme === dark

  const handleClick = () => {
    toggleTheme();
  }
  
  return (
    <div onClick={handleClick} className='transition ease-in-out duration-500 rounded-full w-[44px] h-[44px] flex items-center justify-center cursor-pointer hover:opacity-50 bg-greenTransparent-light dark:bg-greenTransparent-dark'>
      {isDarkTheme 
        ?
        <IoIosSunny 
          style={{
            width: '24px',
            height: '24px',
            color: dark.text,
          }}
        />
        :
      <IoMdMoon 
        style={{
          width: '24px',
          height: '24px',
          color: light.text,
        }}
      />
      }
    </div>
  )
}
