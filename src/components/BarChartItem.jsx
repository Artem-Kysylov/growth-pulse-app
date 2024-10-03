// Imports 
import React, { useContext } from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { ThemeContext } from '../context/ThemeContext'

export const BarChartItem = () => {
  const { muiTheme } = useContext(ThemeContext)

  return (
    <div className='bg-surface-light dark:bg-surface-dark p-3 rounded-md'>
        <BarChart
            xAxis={[{ scaleType: 'band', data: ['USA ', 'France', 'Germany'] }]}
            series={[
              { data: [4, 3, 5], color: muiTheme.palette.secondary.main, }, 
              { data: [1, 6, 3], color: muiTheme.palette.primary.main, }, 
              { data: [2, 5, 6], color: muiTheme.palette.customSecondary.main, },
            ]}
            width={500}
            height={350}
        />
    </div>
  )
}
