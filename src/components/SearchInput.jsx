// Imports 
import React, { useContext } from 'react'
import { light, dark } from '../colors/colors'
import { IoIosSearch } from "react-icons/io"
import { ThemeContext } from '../context/ThemeContext'

export const SearchInput = (props) => {
    const { theme, customColors } = useContext(ThemeContext)

  return (
        <div className='flex item-center gap-[8px] p-[10px] rounded bg-surface-light dark:bg-surface-dark border 
            border-grey-light dark:border-grey-dark w-full transition ease-in-out duration-500'
        >
            <IoIosSearch 
                style={{
                    width: '24px',
                    height: '24px',
                    color: customColors.text
                }}
            />
            <input
                className='text-[14px]' 
                type="text"
                placeholder='Enter your search...'
                {...props}
                style ={{
                    color: customColors.text
                }}  
            />
        </div>
  )
}
