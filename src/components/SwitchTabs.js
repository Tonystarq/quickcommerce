import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '@/app/redux/slice';

const SwitchTabs = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tab.activeTab);

  const handleTabChange = (value) => {
    dispatch(setActiveTab(value));
  };

  return (
    <div className='w-full bg-white border-[0.5px] border-[rgba(3, 27, 21, 0.1)]'>
      <Tabs value={activeTab} className='w-full h-full px-[16px] py-[12px]' onValueChange={handleTabChange}>
        <TabsList className="w-[309px] h-[40px] p-[4px] gap-[16px] bg-white rounded-xl border-[0.5px] border-[#DFEAE8] bg-white">
          <TabsTrigger value="blinkit" className="w-[91px] h-[32px] cursor-pointer text-[14px] rounded-[10px] data-[state=active]:bg-[#DFEAE8] bg-[#DFEAE8]">
            <div className='flex items-center gap-[6px] px-[14px] py-[6px]'>
              <div className='w-[16px] h-[16px] relative'>
                <Image 
                  src="/util/dashboard1.webp" 
                  alt="logo" 
                  fill
                  className="object-inherit"
                />
              </div>
              Blinkit
            </div>
          </TabsTrigger>
          <TabsTrigger value="zepto" disabled className="w-[76px] h-[32px] text-[14px] cursor-not-allowed opacity-30">
            <div className='flex items-center gap-[6px] px-[14px] py-[6px]'>
              <div className='w-[16px] h-[16px] relative'>
                <Image 
                  src="/util/dashboard2.webp" 
                  alt="logo" 
                  fill
                  className="object-inherit"
                />
              </div>
              Zepto
            </div>
          </TabsTrigger>
          <TabsTrigger value="instamart" disabled className="w-[102px] h-[32px] text-[14px] cursor-not-allowed opacity-30">
            <div className='flex items-center gap-[6px] px-[14px] py-[6px]'>
              <div className='w-[16px] h-[16px] relative'>
                <Image 
                  src="/util/dashboard3.webp" 
                  alt="logo" 
                  fill
                  className="object-inherit"
                />
              </div>
              Instamart
            </div>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}

export default SwitchTabs