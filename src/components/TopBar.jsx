// Imports 
import React from 'react'
import { useLocation } from 'react-router-dom'
import { UserButton } from '@clerk/clerk-react'

const pageTitles = {
  '/': 'Dashboard',
  '/calendar': 'Calendar',
  '/kanban': 'Kanban',
  '/users': 'Users',
  '/faq': 'FAQ',
}

export const TopBar = () => {
  const location = useLocation()
  const title = pageTitles[location.pathname] || 'Page'

  return (
    <div className='flex items-center justify-between bg-white py-2.5 px-7 w-full'>
      <h3 className='text-[20px] font-semibold text-text tracking-wide uppercase'>{title}</h3>
      <UserButton afterSignOutUrl='/signin'/>
    </div>
  )
}
