import React from 'react'
import { UserButton } from '@clerk/clerk-react'

export const TopBar = () => {
  return (
    <div>
      <h3>dashboard</h3>
      <UserButton afterSignOutUrl='/signin'/>
    </div>
  )
}
