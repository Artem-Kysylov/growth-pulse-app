// Imports 
import React from 'react'

export const Button = (props) => {
  return (
    <button style={props.style}>
        {props.text}
    </button>
  )
}
