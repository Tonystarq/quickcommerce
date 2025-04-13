'use client';

import * as React from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

const DatePicker = ({ className }) => {
  const [date, setDate] = React.useState({
    from: new Date(),
    to: new Date(),
  });
  const [open, setOpen] = React.useState(false);

  return (
    <div className={cn("grid gap-2 ", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[270px] justify-between text-left font-normal  border-[1px] border-[#D9D9D9] rounded-md cursor-pointer",
              !date && "text-muted-foreground"
            )}
          >
          <div className="flex items-center gap-2">

            <SlCalender className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
                </div>
              <IoIosArrowDown 
              className={cn(
                "h-4 w-4  transition-transform duration-200",
                open ? "rotate-180" : ""
              )}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePicker;
