// Imports 
import React, { useContext } from 'react'
import { BsBarChartLineFill } from "react-icons/bs"
import { HiUsers } from "react-icons/hi2"
import { FaCalendarDays } from "react-icons/fa6"
import { BsFillQuestionCircleFill } from "react-icons/bs"
import { FaUserShield } from "react-icons/fa"
import { ThemeContext } from '../context/ThemeContext'
import { dark } from '../colors/colors'

// Import components 
import LightLogo from '../assets/logo/light-logo.svg'
import DarkLogo from '../assets/logo/dark-logo.svg'
import { ToggleTheme } from './ToggleTheme'
import { NavItem } from './NavItem'

// Navdata 
const navData = [
  {
    id: 1,
    title: 'Dashboard',
    icon: BsBarChartLineFill,
    path: '/',
  },
  {
    id: 2,
    title: 'Users',
    icon: HiUsers,
    path: '/users',
  },
  {
    id: 3,
    title: 'Clients',
    icon: FaUserShield,
    path: '/clients',
  },
  {
    id: 4,
    title: 'Calendar',
    icon: FaCalendarDays,
    path: '/calendar',
  },
  {
    id: 5,
    title: 'FAQ',
    icon: BsFillQuestionCircleFill,
    path: '/faq',
  },
]

export const SideBar = () => {
  const { theme } = useContext(ThemeContext)
  const isDarkTheme = theme === dark

  return (
    <div className='w-[70px] flex flex-col justify-between py-5 px-3.5 tablet:w-[180px] h-screen bg-surface-light dark:bg-surface-dark '>
      <div>
        <div className='flex flex-col items-center border-b mb-[20px] border-b-grey-light dark:border-b-grey-dark'>
          <img className='mb-2.5' src={isDarkTheme ? DarkLogo : LightLogo} alt="logo"/>          
        </div>
        <nav className='flex flex-col items-start'>
          {
            navData.map((item) => (
              <NavItem
                key={item.id}
                icon={item.icon}
                title={item.title}
                path={item.path}
              />
            ))
          }
        </nav>
      </div>
      <div className='flex items-center justify-center'>
        <ToggleTheme/>
      </div>
    </div>
  )
}
