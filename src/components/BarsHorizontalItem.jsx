// Imports 
import React, { useContext } from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { dataset } from '../data/dataset'
import { ThemeContext } from '../context/ThemeContext'

const valueFormatter = (value) => `$${value}`

export const BarsHorizontalItem = () => {
  const { muiTheme } = useContext(ThemeContext)

  return (
    <div className='bg-surface-light dark:bg-surface-dark p-3 rounded-md'>
        <BarChart
            dataset={dataset}
            yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
            series={[{ dataKey: 'london', label: 'Income statistics', valueFormatter, color: muiTheme.palette.primary.main, }]}
            layout="horizontal"
            width={500}
            height={350}
        />
    </div>
  )
}
