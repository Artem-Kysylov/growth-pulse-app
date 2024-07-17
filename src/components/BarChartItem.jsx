// Imports 
import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'

export const BarChartItem = () => {
  return (
    <div className='bg-white p-3 rounded-md'>
        <BarChart
            xAxis={[{ scaleType: 'band', data: ['USA ', 'France', 'Germany'] }]}
            series={[
              { data: [4, 3, 5], color: '#2B7BBE', }, 
              { data: [1, 6, 3], color: '#40A578', }, 
              { data: [2, 5, 6], color: '#96CEB5', },
            ]}
            width={500}
            height={350}
        />
    </div>
  )
}
