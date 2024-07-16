// Imports 
import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'

export const BarChartItem = () => {
  return (
    <div className=' bg-white p-3 rounded-md'>
        <BarChart
            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
            width={500}
            height={300}
        />
    </div>
  )
}
