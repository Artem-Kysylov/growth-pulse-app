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
        <h1>404</h1>
        <span>something went wrong...</span>
        <Button
          text='go to home page'
        />
      </div>
    </div>
  )
}
