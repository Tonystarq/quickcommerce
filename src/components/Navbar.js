'use client';
import { VscGraphLine } from "react-icons/vsc";
import { Switch } from "@/components/ui/switch"
import { useState } from "react"
import DatePicker from "@/components/DatePicker"

const Navbar = () => {
  const [isGraphEnabled, setIsGraphEnabled] = useState(true)

  return (
    <div className='bg-white text-[#031B15] text-[14px] border-[1px] border-[#EBEBEB] px-[24px] py-[12px] flex flex-row justify-between items-center rounded-t-md max-w-full h-[64px]'>
      <div className="text-[14px] cursor-default">Quick Commerce</div>
      <div className="flex flex-row gap-[8px] items-center justify-end">
        <div className="border-[1px] border-[#D9D9D9] rounded-md px-[16px] py-[8px] flex flex-row gap-[8px] h-[40px] w-[80px] items-center justify-between">
          <VscGraphLine className="h-[14px] w-[14px]"/>
          <Switch 
          checked={isGraphEnabled}
          onCheckedChange={setIsGraphEnabled}
          className="w-[20px] h-[12.5px] data-[state=checked]:bg-[#027056] cursor-pointer"
        />
         
        </div>
        <div className="h-[40px]">
          <DatePicker />
        </div>
      </div>
    </div>
  )
}

export default Navbar
