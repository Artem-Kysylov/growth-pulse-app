// Imports 
import React from 'react'
import { useNavigate } from 'react-router-dom'

// Import components 
import { Button } from '../components/ui/Button.jsx'

export const NotFound = () => {
  const navigate = useNavigate()
  
  return (
    <div>
      <div>
        <h1 className='text-[200px] font-semibold tracking-wide'>404</h1>
        <span className='text-[30px] font-semibold tracking-wide'>something went wrong...</span>
        <Button
          text='go to home page'
        />
      </div>
    </div>
  )
}
