// Imports 
import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart'

export const AreaChartItem = () => {
  return (
    <div className=' bg-white p-3 rounded-md'>
        <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
                {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                area: true,
                },
            ]}
            width={500}
            height={400}
        />
    </div>
  )
}
