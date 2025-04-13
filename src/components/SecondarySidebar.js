'use client';
import { motion } from 'framer-motion';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RxHome } from "react-icons/rx";
import { LuImages, LuTv } from "react-icons/lu";
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";


const SecondarySidebar = ({ isOpen, onToggle }) => {
  const [isChannelsOpen, setIsChannelsOpen] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [activeItem, setActiveItem] = useState('Quick Commerce');


  const handleDisabledClick = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };


  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{
        width: isOpen ? 240 : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="h-screen bg-white  relative"
    >
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 flex items-center gap-3 border border-gray-200 animate-slide-up z-50">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Coming Soon!</p>
            <p className="text-xs text-gray-500">This feature will be available soon. Contact support for updates.</p>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="text-gray-400 hover:text-gray-500"
          >
            <IoMdClose size={18} />
          </button>
        </div>
      )}


      <div className='h-screen flex flex-col gap-0'>
        <div className='flex flex-row gap-2 items-center py-[20px] pl-[5px]'>
          <Select>
            <SelectTrigger className="w-[180px]">
              <div className='flex flex-row gap-2 items-center'>
                <div className='flex w-[24px] h-[24px] bg-[#309E96] rounded-md text-[11px]'>
                  <p className='mx-auto my-auto p-[2px] text-white'>SS</p>
                </div>
                <p className='text-black font-medium'>Test_Brand</p>
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="test_brand_1">
                <div className='flex flex-row gap-2 items-center'>
                  <div className='flex w-[24px] h-[24px] bg-[#309E96] rounded-md text-[11px]'>
                    <p className='mx-auto my-auto p-[2px] text-white'>SS</p>
                  </div>
                  <p className='text-black font-medium'>Test_Brand</p>
                </div>
              </SelectItem>
              <SelectItem value="test_brand_2">
                <div className='flex flex-row gap-2 items-center'>
                  <div className='flex w-[24px] h-[24px] bg-[#309E96] rounded-md text-[11px]'>
                    <p className='mx-auto my-auto p-[2px] text-white'>SS</p>
                  </div>
                  <p className='text-black font-medium'>Test_Brand</p>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
          <motion.button
            onClick={onToggle}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-[24px] h-[24px] rounded-full flex items-center bg-white justify-center text-[#027056] transition-all"
          >
            <MdKeyboardDoubleArrowRight size={16} className='cursor-pointer'/>
          </motion.button>
        </div>


        <div className='flex flex-col gap-2 h-full bg-[#F8F8F8] py-[24px] px-[16px]'>
          <div
            className='flex flex-row gap-2 items-center justify-start cursor-not-allowed hover:text-[#139C53] group transition-colors'
            onClick={handleDisabledClick}
          >
            <RxHome className='text-[#7E8986] h-[18px] w-[18px] group-hover:text-[#139C53]' />
            <p className='text-[#031B15] text-[14px] group-hover:text-[#139C53]'>Overview</p>
          </div>


          <div className='flex flex-col gap-2'>
            <div
              className='flex flex-row items-center justify-between cursor-pointer group'
              onClick={() => setIsChannelsOpen(!isChannelsOpen)}
            >
              <div className='flex flex-row gap-2 items-center'>
                <LuTv className='text-[#7E8986] h-[18px] w-[18px] group-hover:text-[#139C53]' />
                <p className='text-[#031B15] text-[14px] group-hover:text-[#139C53]'>Channels</p>
              </div>
              <motion.div
                animate={{ rotate: isChannelsOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <IoIosArrowDown className='text-[#7E8986] h-[16px] w-[16px] group-hover:text-[#139C53]' />
              </motion.div>
            </div>


            {isChannelsOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className='py-[6px] px-[16px] flex flex-col gap-2'
              >
                <div
                  onClick={handleDisabledClick}
                  className='text-[#031B15] opacity-80 text-[14px] rounded-[10px] px-[16px] py-[6px] cursor-not-allowed hover:bg-[#F0F0F0] transition-colors'
                >
                  Meta Ads
                </div>
                <div
                  onClick={handleDisabledClick}
                  className='text-[#031B15] opacity-80 text-[14px] rounded-[10px] px-[16px] py-[6px] cursor-not-allowed hover:bg-[#F0F0F0] transition-colors'
                >
                  Google Ads
                </div>
                <div
                  onClick={() => setActiveItem('Quick Commerce')}
                  className={`text-[14px] rounded-[10px] px-[16px] py-[6px] cursor-pointer transition-colors ${
                    activeItem === 'Quick Commerce'
                      ? 'bg-[#DFEAE8] text-[#027056]'
                      : 'hover:bg-[#F0F0F0] text-[#031B15]'
                  }`}
                >
                  Quick Commerce
                </div>
              </motion.div>
            )}
          </div>


          <div
            className='flex flex-row gap-2 items-center justify-start cursor-not-allowed hover:text-[#139C53] group transition-colors'
            onClick={handleDisabledClick}
          >
            <LuImages className='text-[#7E8986] h-[18px] w-[18px] group-hover:text-[#139C53]' />
            <p className='text-[#031B15] text-[14px] group-hover:text-[#139C53]'>Creatives</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


export default SecondarySidebar;


