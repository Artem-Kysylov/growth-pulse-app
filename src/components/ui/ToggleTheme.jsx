// Imports 
import React from 'react'
import { IoMdMoon } from "react-icons/io"

export const ToggleTheme = () => {
  return (
    <div className='transition ease-in-out duration-500 rounded-full w-[44px] h-[44px] flex items-center justify-center cursor-pointer hover:opacity-50'
      style={{ backgroundColor: 'rgba(64, 165, 120, 0.2)' }}
    >
      <IoMdMoon 
        style={{
          width: '24px',
          height: '24px',
          color: '#3B433F',
        }}
      />
    </div>
  )
}
