// Imports 
import React from 'react'

export const Button = (props) => {
  return (
    <button 
      className='transition ease-in-out duration-500 text-[13px] font-semibold uppercase tracking-wide rounded-[5px] text-surface-light bg-primary-light dark:bg-primary-dark hover:bg-hover-light dark:hover:bg-hover-dark' 
      style={props.style}
      onClick={props.onClick}
    >
        {props.text}
    </button>
  )
}
