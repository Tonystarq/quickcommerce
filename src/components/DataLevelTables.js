import React from 'react'
import Tables from './Tables'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { useSelector } from 'react-redux';

const DataLevelTables = ({ header, subheader, data,style }) => {
    const activeTab = useSelector((state) => state.tab.activeTab);
    
    return (
      <div className='flex flex-col gap-4 m-[23.51px]'>
        <div className='flex flex-row w-full justify-between'>
          <div className='flex flex-col'>
            <span className='text-[#031B15] text-[20px] font-bold'>{header}</span>
            <span className='text-[#4F4D55] font-medium text-[14px]'>{subheader}</span>
          </div>
          <Select>
            <SelectTrigger className="w-[109px] h-[40px] text-white bg-[#027056] cursor-pointer text-[14px]">
              <SelectValue placeholder="Filters(1)" className='text-white' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Filters (1)</SelectItem>
              <SelectItem value="dark">Filters (2)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {activeTab === 'blinkit' && <Tables data={data} style={style}/>}
      </div>
    )
}

export default DataLevelTables