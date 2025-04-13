import React from 'react'
import {
    TooltipProvider,
    TooltipContent,
    TooltipTrigger,
    Tooltip
  } from "@/components/ui/tooltip"
  import { HelpCircle } from 'lucide-react';

const HelpToolTip = () => {
  return (
    <div className="flex items-center gap-2">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <HelpCircle className="w-4 h-4 text-[#031B15] cursor-help" />
        </TooltipTrigger>
        <TooltipContent className="bg-white p-2 rounded-md shadow-md max-w-[200px] text-sm text-[#4F4D55]">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
  )
}

export default HelpToolTip