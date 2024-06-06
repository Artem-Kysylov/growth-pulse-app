// Imports 
import React from 'react'
import { SignIn } from '@clerk/clerk-react'

// Import components 
import BgImage from '../assets/bg-image.png'

export const Signin = () => {
  return (
    <div className='flex items-center justify-between h-screen'>
      <div className='flex flex-col gap-[15px] text-center absolute left-[50px] top-auto z-10'>
        <h1 className='text-[60px] font-semibold tracking-wide text-white uppercase'>growth pulse</h1>
        <span className='text-[30px] font-semibold tracking-wide text-white uppercase'>all in one place</span>
      </div>
      <img
        className='h-screen w-full object-cover flex-1 relative' 
        src={BgImage} 
        alt="/" 
      />
      <div className='flex items-center justify-center flex-1'>
        <SignIn/>
      </div>
    </div>
  )
}
