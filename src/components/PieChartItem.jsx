// Imports 
import React, { useContext } from 'react'
import { PieChart } from '@mui/x-charts/PieChart'
import { ThemeContext } from '../context/ThemeContext'

export const PieChartItem = () => {
  const { muiTheme } = useContext(ThemeContext)

  return (
    <div className='bg-surface-light dark:bg-surface-dark p-3 rounded-md'>
        <PieChart
            series={[
                {
                data: [
                    { id: 0, value: 10, label: 'USA', color: muiTheme.palette.primary.main, },
                    { id: 1, value: 15, label: 'France', color: muiTheme.palette.secondary.main, },
                    { id: 2, value: 20, label: 'Germany', color: muiTheme.palette.customSecondary.main, },
                ],
                },
            ]}
            width={500}
            height={350}
        />
    </div>
  )
}
