// Imports 
import React from 'react'

// Import components 
import Moon from '../../assets/icons/moon.svg'
import Sun from '../../assets/icons/sun.svg'

export const ToggleTheme = () => {
  return (
    <div className='rounded-full cursor-pointer'>
        <img src={Moon} alt="moon" />
    </div>
  )
}
