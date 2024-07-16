// Imports 
import React from 'react'

// Import conponents
import { BarChartItem } from '../components/BarChartItem'
import { PieChartItem } from '../components/PieChartItem'
import { AreaChartItem } from '../components/AreaChartItem'
import { BarsHorizontalItem } from '../components/BarsHorizontalItem' 

export const Dashboard = () => {
  return (
    <div className='flex flex-col gap-5 w-full h-full p-[20px]'>
      <div className='flex items-center gap-5'>
        <AreaChartItem/>
        <BarsHorizontalItem/>
      </div>

      <div className='flex items-center gap-5'>
        <BarChartItem/>
        <PieChartItem/>
      </div>
    </div>
  )
}
