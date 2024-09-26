// Imports 
import React from 'react'
import { useLocation } from 'react-router-dom'
import { UserButton } from '@clerk/clerk-react'

const pageTitles = {
  '/': 'Dashboard',
  '/calendar': 'Calendar',
  '/clients': 'Clients',
  '/users': 'Users',
  '/faq': 'FAQ',
}

export const TopBar = () => {
  const location = useLocation()
  const title = pageTitles[location.pathname] || 'Page'

  return (
    <div className='flex items-center justify-between  py-3 px-7 w-full bg-surface-light dark:bg-surface-dark border-b border-b-grey-light  dark:border-b-grey-dark'>
      <h3 className='text-[15] tablet:text-[20px] font-semibold tracking-wide uppercase text-text-light dark:text-text-dark'>{title}</h3>
      <UserButton afterSignOutUrl='/signin'/>
    </div>
  )
}
