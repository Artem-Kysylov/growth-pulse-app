// Imports 
import React from 'react'
import { UserButton } from '@clerk/clerk-react'

export const TopBar = () => {
  return (
    <div className='flex items-center justify-between bg-white py-2.5 px-7 w-full'>
      <h3 className='text-[20px] font-semibold text-text tracking-wide uppercase'>dashboard</h3>
      <UserButton afterSignOutUrl='/signin'/>
    </div>
  )
}
