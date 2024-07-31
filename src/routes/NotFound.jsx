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
        <h1 className='text-[100px] leading-[100%] tablet:text-[200px] font-semibold text-text tracking-wide'>404</h1>
        <span className=' text-[15px] tablet:text-[30px] font-semibold text-text tracking-wide uppercase text-center'>something went wrong...</span>
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
