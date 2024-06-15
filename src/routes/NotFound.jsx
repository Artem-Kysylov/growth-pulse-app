// Imports 
import React from 'react'
import { useNavigate } from 'react-router-dom'

// Import components 
import { Button } from '../components/Button.jsx'

export const NotFound = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/signin')
  }
  
  return (
    <div className='h-screen w-full bg-bg flex items-center justify-center'>
      <div className='flex flex-col items-center gap-[20px]'>
        <h1 className='text-[200px] font-semibold text-text tracking-wide leading-[200px]'>404</h1>
        <span className='text-[30px] font-semibold text-text tracking-wide uppercase'>something went wrong...</span>
        <Button
          onClick={handleClick}
          style={{
            width: '250px',
            height: '60px',
          }}
          text='go to home page'
        />
      </div>
    </div>
  )
}
