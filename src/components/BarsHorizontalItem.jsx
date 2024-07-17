// Imports 
import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { dataset } from '../data/dataset'

const valueFormatter = (value) => `$${value}`

export const BarsHorizontalItem = () => {
  return (
    <div className=' bg-white p-3 rounded-md'>
        <BarChart
            dataset={dataset}
            yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
            series={[{ dataKey: 'london', label: 'Income statistics', valueFormatter, color: '#40A578', }]}
            layout="horizontal"
            width={500}
            height={350}
        />
    </div>
  )
}
