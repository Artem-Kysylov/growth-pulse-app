// Imports 
import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { dataset } from '../data'

const chartSetting = {
    xAxis: [
      {
        label: 'rainfall (mm)',
      },
    ],
    width: 500,
    height: 400,
  }

  const valueFormatter = (value) => `${value}mm`

export const BarsHorizontalItem = () => {
  return (
    <div className=' bg-white p-3 rounded-md'>
        <BarChart
            dataset={dataset}
            yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
            series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
            layout="horizontal"
            {...chartSetting}
        />
    </div>
  )
}
