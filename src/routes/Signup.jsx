// Imports 
import React from 'react'
import { SignUp } from '@clerk/clerk-react'

// Import components 
import BgImage from '../assets/bg-image.png'

export const Signup = () => {
  return (
    <div className='flex items-center justify-between h-screen'>
      <div className='relative h-screen flex-1'>
        <img
          className='h-screen w-full flex-1' 
          src={BgImage} 
          alt="/" 
        />
        <div className='flex flex-col gap-[15px] text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
          <h1 className='text-[60px] font-semibold tracking-wide text-white uppercase leading-[100%]'>growth pulse</h1>
          <span className='text-[30px] font-semibold tracking-wide text-white uppercase'>all in one place</span>
        </div>
      </div>
      <div className='flex items-center justify-center flex-1 h-screen overflow-y-scroll'>
        <SignUp/>
      </div>
  </div>
  )
}
