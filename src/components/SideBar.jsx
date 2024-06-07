// Imports 
import React from 'react'

// Import components 
import LightLogo from '../assets/logo/light-logo.svg'
import { ToggleTheme } from './ui/ToggleTheme'

export const SideBar = () => {
  return (
    <div className='flex flex-col justify-between py-5 px-3.5 bg-white w-[180px] h-screen'>
      <div>
        <div className='flex flex-col items-center border-b border-b-grey'>
          <img className='mb-2.5' src={LightLogo} alt="logo" />
        </div>
        <nav>
          
        </nav>
      </div>

      <div className='flex items-center justify-center'>
        <ToggleTheme/>
      </div>
    </div>
  )
}
