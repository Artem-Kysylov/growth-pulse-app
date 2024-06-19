// Imports 
import React, { useState, useEffect } from 'react'
import { tableData } from '../data'

// Import components 
import { UsersTable } from '../components/UsersTable'
import { SearchInput } from '../components/SearchInput'

export const Users = () => {
  const [search, setSearch] = useState('')
  const [searchNotFound, setSearchNotFound] = useState(false)

  useEffect(() => {
    const searchQuery = search.trim().toLowerCase()
    const filteredUsers = tableData.filter((item) => {
      return (
        item.first_name.toLowerCase().includes(searchQuery) ||
        item.last_name.toLowerCase().includes(searchQuery) ||
        item.position.toLowerCase().includes(searchQuery) ||
        item.country_code.toLowerCase().includes(searchQuery) ||
        item.email.toLowerCase().includes(searchQuery)
      )
    })
    setSearchNotFound(filteredUsers.length === 0 && search.trim() !== '')
}, [search])

  return (
    <div className='w-full h-full bg-bg p-[20px]'>
      <div className='mb-[20px]'>
        <SearchInput
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <UsersTable
        data={tableData}
        search={search}
      />
      {
        searchNotFound && 
        <div className='text-center mt-4 text-text'>
          Search not found...
        </div>
      }
    </div>
  )
}
