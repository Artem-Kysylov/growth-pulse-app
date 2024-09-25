// Imports 
import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { UserButton } from '@clerk/clerk-react'
import { ThemeContext } from '../context/ThemeContext'

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
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`flex items-center justify-between bg${theme.background} border-b border-b${theme.grey} py-3 px-7 w-full`}>
      <h3 className={`text-[15] tablet:text-[20px] font-semibold text${theme.text} tracking-wide uppercase`}>{title}</h3>
      <UserButton afterSignOutUrl='/signin'/>
    </div>
  )
}
