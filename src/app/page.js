"use client"
import React from 'react'
import Image from "next/image";
import Navbar from "@/components/Navbar";
import SwitchTabs from "@/components/SwitchTabs";
import VariousCharts from "@/components/VariousCharts";
import { useSelector } from 'react-redux';
import DataLevelTables from '@/components/DataLevelTables';
import { tableDataSKU, tableDataCity } from '@/lib/utils';

export default function Home() {
  const activeTab = useSelector((state) => state.tab.activeTab);

  return (
    <div>
      <Navbar/>
      <SwitchTabs/>
      <div className='overflow-y-auto scrollbar-hide h-[calc(100vh-180px)]'>
        {activeTab === 'blinkit' && <VariousCharts/>}
        <DataLevelTables 
        header="SKU Level Data" 
        subheader="Analytics for all your SKUs"
        data={tableDataSKU} 
        style="underline"
      />
        <DataLevelTables 
          header="City Level Data" 
          subheader="Analytics for all your Cities"
          data={tableDataCity} 
        />
      
      </div>
    </div>
  );
}
