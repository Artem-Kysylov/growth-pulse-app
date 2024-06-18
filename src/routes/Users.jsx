// Imports 
import React, { useState } from 'react'
import { tableData } from '../data'

// Import components 
import { UsersTable } from '../components/UsersTable'
import { SearchInput } from '../components/SearchInput'

export const Users = () => {
  const [search, setSearch] = useState('')
  const [searchNotFound, setSearchNotFound] = useState(false)

  const userSearch = tableData.filter((user) => {
    const firstName = user.first_name.toLowerCase()
    const lastName = user.last_name.toLowerCase()
    const searchQuery = search.trim().toLowerCase()
  
    if(!searchQuery) {
      return true
    }
  })


  return (
    <div className='w-full h-full bg-bg p-[20px]'>
      <div className='mb-[20px]'>
        <SearchInput
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <UsersTable
        data={tableData}
      />
    </div>
  )
}
