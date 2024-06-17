// Imports 
import React from 'react'

// Import components 
import { UsersTable } from '../components/UsersTable'
import { SearchInput } from '../components/SearchInput'

export const Users = () => {
  return (
    <div className='w-full h-full bg-bg p-[20px]'>
      <div className='mb-[20px]'>
        <SearchInput/>
      </div>
      <UsersTable/>
    </div>
  )
}
