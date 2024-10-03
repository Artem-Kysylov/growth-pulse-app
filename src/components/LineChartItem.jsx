// Imports 
import React, { useContext } from 'react'
import { LineChart } from '@mui/x-charts/LineChart'
import { ThemeContext } from '../context/ThemeContext'

export const LineChartItem = () => {
  const { muiTheme } = useContext(ThemeContext)

  return (
    <div className='bg-surface-light dark:bg-surface-dark p-3 rounded-md'>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
        series={[          
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            valueFormatter: (value) => (value == null ? 'NaN' : value.toString()),
            color: muiTheme.palette.primary.main,
          },
          {
            data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
            color: muiTheme.palette.primary.main,
          },
          {
            data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
            valueFormatter: (value) => (value == null ? '?' : value.toString()),
            color: muiTheme.palette.primary.main,
          },
        ]}
        width={500}
        height={350}
        margin={{ top: 10, bottom: 20 }}
      />
    </div>
  )
}
