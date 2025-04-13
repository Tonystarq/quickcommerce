"use client"
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { HelpCircle } from 'lucide-react';
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";
import HelpToolTip from './HelpToolTip';

ChartJS.register(ArcElement, Tooltip, Legend);
// const gaugeText = {
//     id: 'gaugeText',
//     beforeDatasetsDraw(chart, args, pluginOptions) {
//       const { ctx, data } = chart;
//       const xCenter = chart.getDatasetMeta(0).data[0].x;
//       const yCenter = chart.getDatasetMeta(0).data[0].y;
  
//       ctx.save();
//       ctx.textAlign = 'center';
//       ctx.textBaseline = 'middle';
      
//       // Draw "Total"
//       ctx.font = '400 13px Mulish';
//       ctx.fillStyle = '#7D7D7E';
//       ctx.fillText('Total', xCenter, yCenter - 70);
      
//       // Draw the total value
//       ctx.font = '700 18px Mulish';
//       ctx.fillStyle = '#000000';
//       ctx.fillText(`₹${pluginOptions.total}`, xCenter, yCenter - 50);
      
//       // Draw the percentage change with taller arrow
//       ctx.font = '500 13px Mulish';
//       ctx.fillStyle = pluginOptions.isIncrease ? '#1D874F' : '#EF4444';
      
//       // Calculate total width of arrow + percentage for centering
//       const percentageText = `${pluginOptions.percentageChange}%`;
//       const arrowWidth = 20;
//       const percentageWidth = ctx.measureText(percentageText).width;
//       const totalWidth = arrowWidth + percentageWidth;
      
//       // Draw arrow and percentage centered together
//       if (pluginOptions.isIncrease) {
//         ctx.font = '500 11px Mulish';  // Slightly larger font for arrow
//         ctx.fillText('↑', xCenter - totalWidth/2 + 10, yCenter - 31);
//         ctx.font = '500 13px Mulish';  // Reset font for percentage
//         ctx.fillText(percentageText, xCenter - totalWidth/2 + arrowWidth + 10, yCenter - 30);
//       } else {
//         ctx.font = '500 11px Mulish';  // Slightly larger font for arrow
//         ctx.fillText('⬇', xCenter - totalWidth/2 + 10, yCenter - 30);
//         ctx.font = '500 13px Mulish';  // Reset font for percentage
//         ctx.fillText(percentageText, xCenter - totalWidth/2 + arrowWidth + 10, yCenter - 30);
//       }
//     }
//   };
const GaugeChart = ({ 
  title = "Top Cities",
  total = "68.2L",
  percentageChange = "2.2",
  isIncrease = true,
  data = [
    { city: "New Delhi", value: "26.5L", percentage: 35, change: 1.2, isIncrease: true },
    { city: "Mumbai", value: "36.4L", percentage: 23, change: 3.3, isIncrease: false },
    { city: "West Bengal", value: "12.2L", percentage: 21, change: 2.3, isIncrease: false },
    { city: "Others", value: "24.3L", percentage: 9, change: 1.09, isIncrease: true }
  ]
}) => {
  const colors = ['#6C4FED', '#EA6153', '#F7C245', '#D9D9D9'];
  
  const chartData = {
    datasets: [{
      data: data.map(item => item.percentage),
      backgroundColor: colors,
      borderWidth: 0,
      circumference: 180,
      rotation: 270,
    }]
  };

  const options = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      }
    },
    cutout: '85%',
  };

  return (
    <div className="bg-white rounded-lg w-[350px] h-[300px] shadow-sm">
      <div className="flex justify-between items-center mb-4 border-b-[1px] p-[12px] border-[#F1F1F1]">
        <div className="text-[#515153] text-[14px] font-semibold">{title}</div>
<HelpToolTip/>
        </div>

      <div className="h-[104px] w-full relative flex justify-center items-center">
        <div className="absolute inset-0 flex items-end justify-center leading-5 mb-[4px]">
          <div className="flex flex-col items-center" >
            <span className="text-[13px] font-normal text-[#7D7D7E]">Total</span>
            <span className="text-[18px] font-bold text-black ">₹{total}</span>
            <div className="flex items-center">
              <span className={`text-[11px] ${isIncrease ? 'text-[#1D874F]' : 'text-red-500'}`}><IoIosArrowRoundUp className='text-[16px]'/></span>
              <span className={`text-[13px] font-medium ${isIncrease ? 'text-[#1D874F]' : 'text-red-500'}`}>
                {percentageChange}%
              </span>
            </div>
          </div>
        </div>
        <Doughnut 
          data={chartData} 
          options={options}
          style={{ width: '193px', height: '104px' }}
        />
      </div>

      <div className="space-y-3 px-[12px] pt-[12px]">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between leading-[16px]">
            <div className="flex items-center gap-2">
              <div 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: colors[index] }}
              />
              <span className="text-[13px] text-[#7D7D7E]">{item.city}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[13px] font-bold text-[#000000]">₹{item.value}</span>
              
                <span className="text-[13px] font-medium text-[#7D7D7E] bg-[#F7F7F7]  px-[4px] py-[2px] rounded-[2px]">{item.percentage}%</span>
             
              <div className={`flex items-center text-[13px] font-medium  ${item.isIncrease ? 'text-[#1D874F]' : 'text-[#F31D1D]'}`}>
                {item.isIncrease ? (
                  <IoIosArrowRoundUp className="text-[16px]" />
                ) : (
                  <IoIosArrowRoundDown className="text-[16px]" />
                )}
                {item.change}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GaugeChart;