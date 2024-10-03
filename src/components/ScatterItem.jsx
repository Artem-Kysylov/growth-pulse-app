// Imports 
import React, { useContext } from 'react'
import { ScatterChart } from '@mui/x-charts/ScatterChart'
import { scatterData } from '../data/scatterData'
import { ThemeContext } from '../context/ThemeContext'


export const ScatterItem = () => {
  const { muiTheme } = useContext(ThemeContext)

  return (
    <div className='bg-surface-light dark:bg-surface-dark p-3 rounded-md'>
      <ScatterChart
        width={500}
        height={350}
        series={[
          {
            label: '2023',
            data: scatterData.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
            color: muiTheme.palette.primary.main,
          },
          {
            label: '2024',
            data: scatterData.map((v) => ({ x: v.x1, y: v.y2, id: v.id })),
            color: muiTheme.palette.secondary.main,
          },
        ]}
    />
    </div>
  )
}
