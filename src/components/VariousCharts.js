"use client"
import React from 'react'
import LineChart from './LineChart'
import GaugeChart from './GaugeChart'
import { LinechartData, gaugeChartData } from '@/lib/utils'

const VariousCharts = () => {


  return (
    <div className='flex flex-row  gap-[8px] m-[23.51px]'>
      {LinechartData.map((data, index) => (
        <div key={index}>
          <LineChart {...data} />
        </div>
      ))}
      <GaugeChart {...gaugeChartData} />
    </div>
  )
}

export default VariousCharts