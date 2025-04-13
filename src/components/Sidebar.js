'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { LuUsers } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import SecondarySidebar from './SecondarySidebar';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [isSecondaryOpen, setIsSecondaryOpen] = useState(true);

  const handleLinkClick = (index) => {
    if (index === 0) {
        setIsSecondaryOpen(true);
      }
    setActiveLink(index);
  };

  const handleDisabledClick = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const toggleSecondarySidebar = () => {
    setIsSecondaryOpen(!isSecondaryOpen);
  };

  return (
    <div className="flex h-screen">
      <div className="h-screen  w-[51px] min-w-[51px] max-w-[51px] flex flex-col justify-between bg-white relative">
        {showToast && (
          <div className="fixed  bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 flex items-center gap-3 border border-gray-200 animate-slide-up z-50">
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

        <div className='w-[51px] min-w-[51px] max-w-[51px]'>
          <div className="w-[51px] min-w-[51px] max-w-[51px] flex flex-col gap-4 py-[20px] pl-[5px]">
            <Link 
              href="/"
              onClick={() => handleLinkClick(0)}
              className={`h-[40px] w-[40px] relative transition-all duration-200 overflow-hidden ${
                activeLink === 0 
                  ? 'border-2 border-[#139C53] rounded-xl' 
                  : 'border-[0.5px] border-[rgba(0,0,0,0.08)] rounded-xl'
              }`}
            >
              <Image 
                src="/util/sidebarpng.png" 
                alt="logo" 
                fill
                className="object-inherit"
              />
            </Link>
            <Link 
              href="/"
              onClick={handleDisabledClick}
              className={`h-[40px] w-[40px] relative transition-all duration-200 overflow-hidden cursor-not-allowed ${
                activeLink === 1 
                  ? 'border-2 border-[#139C53] rounded-xl' 
                  : 'border border-[rgba(0,0,0,0.08)] rounded-xl'
              }`}
            >
              <Image 
                src="/util/sidebar2.webp" 
                alt="logo" 
                fill
                className="object-cover"
              />
            </Link>
            <Link 
              href="/"
              onClick={handleDisabledClick}
              className={`cursor-not-allowed h-[40px] w-[40px] relative transition-all duration-200 overflow-hidden ${
                activeLink === 2 
                  ? 'border-2 border-[#139C53] rounded-xl' 
                  : 'border border-[rgba(0,0,0,0.08)] rounded-xl'
              }`}
            >
              <Image 
                src="/util/sidebar3.webp" 
                alt="logo" 
                fill
                className="object-cover"
              />
            </Link>
            
            <button 
              onClick={handleDisabledClick}
              className="cursor-not-allowed w-[40px] h-[40px] rounded-xl flex items-center bg-white border-[0.5px] border-[#B4BBB9] justify-center text-[#1D874F] hover:bg-opacity-90 transition-all"
            >
              <FaPlus size={14} />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-[10px] p-1">
          <Link 
            href="/profile"
            onClick={handleDisabledClick}
            className="flex cursor-not-allowed mx-auto h-[40px] w-[40px] rounded-full  items-center justify-center"
          >
            <LuUsers className="text-[#7E8986]" size={20} />
          </Link>
          <Link 
            href="/profile"
            onClick={handleDisabledClick}
            className="flex cursor-not-allowed mx-auto h-[40px] w-[40px] rounded-full bg-[#9106FF] items-center justify-center"
          >
            <span className="text-white">SS</span>
          </Link>
        </div>
      </div>

      <SecondarySidebar isOpen={isSecondaryOpen} onToggle={toggleSecondarySidebar} />
    </div>
  );
};

export default Sidebar; 