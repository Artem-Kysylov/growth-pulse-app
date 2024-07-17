// Imports 
import React from 'react'
import { ScatterChart } from '@mui/x-charts/ScatterChart'
import { scatterData } from '../data/scatterData'


export const ScatterItem = () => {
  return (
    <div className='bg-white p-3 rounded-md'>
      <ScatterChart
        width={500}
        height={350}
        series={[
          {
            label: 'Series A',
            data: scatterData.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
            color: '#40A578',
          },
          {
            label: 'Series B',
            data: scatterData.map((v) => ({ x: v.x1, y: v.y2, id: v.id })),
            color: '#2B7BBE',
          },
        ]}
    />
    </div>
  )
}
