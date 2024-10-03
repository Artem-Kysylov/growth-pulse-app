// Imports 
import React, { useContext } from 'react'
import { LineChart } from '@mui/x-charts/LineChart'
import { ThemeContext } from '../context/ThemeContext'

export const AreaChartItem = () => {
  const { muiTheme } = useContext(ThemeContext)

  return (
    <div className=' bg-surface-light dark:bg-surface-dark p-3 rounded-md'>
        <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
                {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                area: true,
                color: muiTheme.palette.primary.main,
                },
            ]}
            width={500}
            height={350}
        />
    </div>
  )
}
