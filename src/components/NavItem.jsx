// imports 
import React from 'react'

export const NavItem = ({ icon: Icon, title }) => {
  return (
    <div className='transition ease-in-out duration-500 flex items-center gap-[8px] p-[10px] cursor-pointer hover:bg-primary hover:w-full hover:rounded-[5px] group'>
        <Icon className='transition ease-in-out duration-500 text-transparentBlack group-hover:text-white' />
        <p className='transition ease-in-out duration-500 text-[14px] font-medium text-transparentBlack group-hover:text-white'>{title}</p>
    </div>
  )
}
