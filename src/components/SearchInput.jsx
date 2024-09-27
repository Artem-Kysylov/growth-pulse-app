// Imports 
import React, { useContext } from 'react'
import { light, dark } from '../colors/colors'
import { IoIosSearch } from "react-icons/io"
import { ThemeContext } from '@emotion/react'

export const SearchInput = (props) => {
    const { theme } = useContext(ThemeContext)
    const isDarkTheme = theme === dark

  return (
        <div className='flex item-center gap-[8px] p-[10px] rounded bg-surface-light dark:bg-surface-dark border border-grey-light dark:border-grey-dark w-full'>
            {isDarkTheme
            ?
            <IoIosSearch 
                style={{
                    width: '24px',
                    height: '24px',
                    color: dark.text
                }}
            />
            :
            <IoIosSearch 
                style={{
                    width: '24px',
                    height: '24px',
                    color: light.text
                }}
            />
            }
            <input
                className='text-[14px]' 
                type="text"
                placeholder='Enter your search...'
                {...props}  
            />
        </div>
  )
}
