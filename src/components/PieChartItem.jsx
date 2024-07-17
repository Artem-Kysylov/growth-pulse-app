// Imports 
import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart'

export const PieChartItem = () => {
  return (
    <div className=' bg-white p-3 rounded-md'>
        <PieChart
            series={[
                {
                data: [
                    { id: 0, value: 10, label: 'series A', color: '#40A578', },
                    { id: 1, value: 15, label: 'series B', color: '#2B7BBE', },
                    { id: 2, value: 20, label: 'series C', color: '#96CEB5', },
                ],
                },
            ]}
            width={500}
            height={350}
        />
    </div>
  )
}
