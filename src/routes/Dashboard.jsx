// Imports 
import React from 'react'
import { AreaChart } from '@tremor/react'

export const Dashboard = () => {
  return (
    <div className='grid grid-cols-2 gap-5 w-full h-full bg-bg overflow-y-scroll'>
      <div className='flex flex-col gap-5'>
        <AreaChart/>
      </div>

      <div className='flex flex-col gap-5'></div>
    </div>
  )
}
