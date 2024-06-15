// Imports 
import React from 'react'

export const Button = (props) => {
  return (
    <button 
      className='transition ease-in-out duration-500 text-[13px] font-semibold text-custom-white uppercase tracking-wide rounded-[5px] bg-primary hover:bg-primaryHover' 
      style={props.style}
      onClick={props.onClick}
    >
        {props.text}
    </button>
  )
}
