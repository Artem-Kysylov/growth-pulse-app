// Imports 
import React, { useState } from 'react'
import { clientsData } from '../data'
import * as XLSX from 'xlsx';

// Import components 
import { ClientsTable } from '../components/ClientsTable'
import { Button } from '../components/Button'

export const Clients = () => {
  const [selectedItems, setSelectedItems] = useState([])

  // Export function in Excel format 
  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(selectedItems)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Selected Clients')
    XLSX.writeFile(workbook, 'selected_clients.xlsx')
  }

  return (
    <div className='w-full h-full p-[20px]'>
      <div className='mb-[20px]'>
        <Button
          style={{
            width: '150px',
            height: '40px',
          }}
          text='export data'
          onClick={handleExport}
        />
      </div>
      <ClientsTable
        data={clientsData}
        onSelectedItemsChange={setSelectedItems}
      />
    </div>
  )
}
