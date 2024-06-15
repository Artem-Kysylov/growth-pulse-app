// Imports 
import React from 'react'
import { BsBarChartLineFill } from "react-icons/bs"
import { HiUsers } from "react-icons/hi2"
import { BiSolidDashboard } from "react-icons/bi"
import { FaCalendarDays } from "react-icons/fa6"
import { BsFillQuestionCircleFill } from "react-icons/bs"

// Import components 
import LightLogo from '../assets/logo/light-logo.svg'
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
    title: 'Kanban',
    icon: BiSolidDashboard,
    path: '/kanban',
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
  return (
    <div className='flex flex-col justify-between py-5 px-3.5 bg-white w-[180px] h-screen'>
      <div>
        <div className='flex flex-col items-center border-b border-b-grey mb-[20px]'>
          <img className='mb-2.5' src={LightLogo} alt="logo" />
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
