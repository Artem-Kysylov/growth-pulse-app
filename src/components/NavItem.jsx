// imports 
import React from 'react'
import { NavLink } from "react-router-dom"

export const NavItem = ({ icon: Icon, title, path }) => {
  return (
    <NavLink to={path}
    className={({ isActive }) =>
      isActive ? 'active nav-item' : 'nav-item'
    }
    >
      {({ isActive }) => (
        <div className={`relative transition ease-in-out duration-500 flex items-center gap-[8px] tablet:w-[150px] rounded-[5px] p-[10px] cursor-pointer hover:bg-primary hover:tablet:w-[150px] hover:rounded-[5px] group ${isActive ? 'text-primary' : ''} transition ease-in-out duration-500`}>
          <Icon className={`transition ease-in-out duration-500 ${isActive ? 'text-primary' : 'text-transparentBlack'} group-hover:text-white`} />
          <p className={`hidden tablet:block transition ease-in-out duration-500 text-[14px] font-medium ${isActive ? 'text-primary' : 'text-transparentBlack'} group-hover:text-white`}>{title}</p>
          {isActive && <div className="absolute right-0 h-[24px] w-[3px] rounded bg-primary"></div>}
        </div>
      )}
    </NavLink>
  )
}
