// imports 
import React from 'react'
import { NavLink } from "react-router-dom"

export const NavItem = ({ icon: Icon, title, path }) => {
  return (
    <NavLink to={path}>
      <div className='transition ease-in-out duration-500 flex items-center gap-[8px] p-[10px] cursor-pointer hover:bg-primary hover:w-full hover:rounded-[5px] group'>
          <Icon className='transition ease-in-out duration-500 text-transparentBlack group-hover:text-white'></Icon> 
          <p className='transition ease-in-out duration-500 text-[14px] font-medium text-transparentBlack group-hover:text-white'>{title}</p>
      </div>
    </NavLink>
  )
}
