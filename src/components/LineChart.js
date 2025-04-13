"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { IoIosArrowRoundDown,IoIosArrowRoundUp } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
import { GoDotFill } from "react-icons/go";
import HelpToolTip from './HelpToolTip';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart = ({ 
  title = "Sales (MRP)", 
  currentValue = "125.49",
  lastMonthValue = "119.69",
  percentageChange = "2.4",
  isIncrease = true
}) => {
  const labels = ['09', '10', '11', '12', '13', '14', '15'];
  
  const currentMonthData = [2.8, 2.0, 3.2, 2.9, 4.6, 3.0, 4.8];
  const lastMonthData = [2.0, 1.6, 3.5, 3.0, 3.8, 2.9, 3.5];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: '#8C9198',
          font: {
            size: 10
          }
        },
        offset: false,
      },
      y: {
        min: 1.5,
        max: 6.0,
        ticks: {
          stepSize: 1.5,
          color: '#6B7583',
          font: {
            size: 10
          },
          callback: function(value) {
            return value.toFixed(1);
          }
        },
        grid: {
          color: '#EBEBEB',
        },
        border: {
          display: false,
        }
      },
    },
    elements: {
      point: {
        radius: 0,
      },
      line: {
        tension: 0.1,
      },
    },
    layout: {
      padding: 1,
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'This Month',
        data: currentMonthData,
        borderColor: '#22C55E',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 160);
          gradient.addColorStop(0, 'rgba(46, 183, 111, 1)');
          gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0)');
          return gradient;
        },
        borderWidth: 1,
        fill: 'start',
      },
      {
        label: 'Last Month',
        data: lastMonthData,
        borderColor: '#EF4444',
        backgroundColor: '#EF4444',
        borderWidth: 1,
        borderDash: [2, 3],
        fill: false,
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg w-[350px] h-[300px] shadow-sm">
      <div className="flex justify-between items-center mb-4 border-b-[1px] px-[12px] py-[12px] border-[#F1F1F1]">
        <div className="text-[#515153] text-[14px] font-semibold ">{title}</div>
        <HelpToolTip />
        </div>
      
      <div className=" flex flex-row justify-between items-center px-[12px]">
        <div className="text-[#031B15] text-[24px] font-bold">{currentValue}</div>
        <div className="flex flex-col items-end gap-[4px] text-[14px]">
          <div className={`flex font-semibold items-center ${isIncrease ? 'text-[#1D874F]' : 'text-red-500'}`}>
            {isIncrease ? <IoIosArrowRoundUp className='text-[16px]'/> : <IoIosArrowRoundDown className='text-[16px]'/>
            } {percentageChange}%
          </div>
          <div className="text-[#031B1599] opacity-60">
            vs {lastMonthValue} last month
          </div>
        </div>
      </div>

      <div className="h-[136px] w-full relative px-[12px] mt-[6px]">
        <Line 
          options={options} 
          data={data} 
          style={{ width: '100%', height: '100%', position: 'absolute' }}
        />
      </div>
      
      <div className="flex gap-[24px] mt-2 text-xs px-[12px] py-[12px] border-t-[1px] border-[#F1F1F1]">
        <div className="flex items-center gap-[6px]">
        <GoDotFill  className='text-[13px] text-[#1D874F]'/>
        <span className='text-[13px] cursor-default'>This Month</span>
        </div>
        <div className="flex items-center gap-[6px]">
        <GoDotFill  className='text-[13px] text-[#E25D33]'/>
        <span className='text-[13px] cursor-default'>Last Month</span>
        </div>
      </div>
    </div>
  );
};

export default LineChart;