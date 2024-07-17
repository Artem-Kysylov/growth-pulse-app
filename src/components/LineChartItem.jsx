// Imports 
import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart'

export const LineChartItem = () => {
  return (
    <div className='bg-white p-3 rounded-md'>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
        series={[          
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            valueFormatter: (value) => (value == null ? 'NaN' : value.toString()),
            color: '#40A578',
          },
          {
            data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
            color: '#40A578',
          },
          {
            data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
            valueFormatter: (value) => (value == null ? '?' : value.toString()),
            color: '#40A578',
          },
        ]}
        width={500}
        height={350}
        margin={{ top: 10, bottom: 20 }}
      />
    </div>
  )
}
