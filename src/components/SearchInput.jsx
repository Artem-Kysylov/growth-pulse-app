// Imports 
import React from 'react'
import { IoIosSearch } from "react-icons/io"

export const SearchInput = (props) => {
  return (
        <div className='flex item-center gap-[8px] p-[10px] rounded border border-grey bg-white w-full'>
            <IoIosSearch 
                style={{
                    width: '24px',
                    height: '24px',
                    color: '#3B433F'
                }}
            />
            <input
                className='text-[14px]' 
                type="text"
                placeholder='Enter your search...'
                {...props}  
            />
        </div>
  )
}
