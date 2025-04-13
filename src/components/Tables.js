"use client"
import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
} from "@tanstack/react-table"
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io"
import { cn } from '@/lib/utils'
import { ArrowUpDown } from 'lucide-react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";

const Tables = ({ data, style }) => {
  const [rowSelection, setRowSelection] = useState({})

  const columns = [
    {
      id: "skuGroup",
      header: () => (
        <div className="flex justify-start pl-[25px] items-center gap-2 border-r-[1px] border-[#F1F1F1] h-[97px] m-0 p-0 rounded-tl-[8px] rounded-bl-[8px] w-full min-w-[174px] max-w-full">
          <VscGraphLine className="h-[14px] w-[14px]"/>
          SKU Name
        </div>
      ),
      columns: [
        {
          accessorKey: "skuName",
          header: () => null,
          cell: ({ row }) => (
            <div className="flex items-center gap-2 justify-start pl-[10px] w-full min-w-[174px] max-w-full">
              <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="data-[state=checked]:bg-[#027056] data-[state=checked]:border-[#027056]"
              />
              <div className={cn(
                "font-semibold text-[15px] text-[#0A090B]",
                style === "underline" && "underline decoration-skip-ink"
              )}>
                {row.getValue("skuName")}
              </div>
            </div>
          ),
        }
      ]
    },
    {
      id: "availability",
      header: () => (
        <div className="flex flex-col border-r-[1px] border-[#F1F1F1] h-[97px] w-full min-w-[412px] max-w-full">
          <div className="text-center py-2 border-b-[1px] border-[#F1F1F1] font-semibold">
            Availability
          </div>
          <div className="flex-1 flex items-center justify-center ">
            {data.headers.availability.map(header => (
              <div key={header.id} className={cn(
                "flex cursor-not-allowed flex-row gap-1 items-center justify-center text-[#013025] font-semibold",
                header.id === 'sales' && "w-[153px]",
                header.id === 'outOfStock' && "w-[153px]",
                header.id === 'totalInventory' && "w-[153px]"
              )}>
                {header.title}
                <MdKeyboardArrowDown />
              </div>
            ))}
          </div>
        </div>
      ),
      columns: data.headers.availability.map(header => ({
        accessorKey: header.id,
        cell: ({ row }) => {
          const value = row.getValue(header.id)
          const changes = row.original.changes?.[header.id]
          
          return (
            <div className={cn(
              "flex flex-col items-center justify-center gap-1 mx-auto",
              header.id === 'sales' && "w-[137px]",
              header.id === 'outOfStock' && "w-[137px]",
              header.id === 'totalInventory' && "w-[138px]"
            )}>
              <span className='text-[#4E5E5A] text-center'>{value}</span>
              {changes ? (
                <div className="flex flex-col items-center">
                  {typeof changes.increase === 'boolean' ? (
                    <div className={`flex items-center justify-center text-xs ${changes.increase ? 'text-[#1D874F]' : 'text-[#F31D1D]'}`}>
                      {changes.increase ? (
                        <IoIosArrowRoundUp className="text-[16px]" />
                      ) : (
                        <IoIosArrowRoundDown className="text-[16px]" />
                      )}
                      <span>{changes.value}</span>
                    </div>
                  ) : (
                    <div className="text-xs text-[#4E5E5A]">-</div>
                  )}
                  {changes.number && (
                    <div className="text-xs text-[#4E5E5A] text-center">{changes.number}</div>
                  )}
                </div>
              ) : null}
            </div>
          )
        },
      })),
    },
    {
      id: "visibility",
      header: () => (
        <div className="flex flex-col h-[97px] w-full min-w-[468px] max-w-full rounded-tr-[8px] rounded-br-[8px]">
          <div className="text-center py-2 border-b-[1px] border-[#F1F1F1] font-semibold">
            Visibility
          </div>
          <div className="flex-1 flex items-center justify-center">
            {data.headers.visibility.map(header => (
              <div key={header.id} className={cn(
                "flex cursor-not-allowed flex-row gap-1 items-center justify-center text-[#013025] font-semibold",
                header.id === 'averageRank' && "w-[135px]",
                header.id === 'estTraffic' && "w-[135px]",
                header.id === 'estImpressions' && "w-[136px]",
                header.id === 'CI' && "w-[136px]"
              )}>
                {header.title}
                <MdKeyboardArrowDown />
              </div>
            ))}
          </div>
        </div>
      ),
      columns: data.headers.visibility.map(header => ({
        accessorKey: header.id,
        cell: ({ row }) => {
          const value = row.getValue(header.id)
          const changes = row.original.changes?.[header.id]
          
          return (
            <div className={cn(
              "flex flex-col items-center justify-center gap-1",
              header.id === 'averageRank' && "w-[119px]",
              header.id === 'estTraffic' && "w-[119px]",
              header.id === 'estImpressions' && "w-[120px]",
              header.id === 'CI' && "w-[120px]"
            )}>
              <span className='text-[#4E5E5A]'>{value}</span>
              {changes ? (
                <div className="flex flex-col items-center gap-1">
                  {changes.number && (
                    <div className="text-xs text-[#4E5E5A]">{changes.number}</div>
                  )}
                  {typeof changes.increase === 'boolean' ? (
                    <div className={`flex items-center text-xs ${changes.increase ? 'text-[#1D874F]' : 'text-[#F31D1D]'}`}>
                      {changes.increase ? (
                        <IoIosArrowRoundUp className="text-[16px]" />
                      ) : (
                        <IoIosArrowRoundDown className="text-[16px]" />
                      )}
                      <span>{changes.value}</span>
                    </div>
                  ) : (
                    <div className="text-xs text-[#4E5E5A]">-</div>
                  )}
                </div>
              ) : null}
            </div>
          )
        },
      })),
    },
  ]

  const table = useReactTable({
    data: data.data,
    columns,
    state: {
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className="table-container1 max-w-[1064px] bg-white overflow-y-auto overflow-x-hidden border-[1px] border-[#F1F1F1] shadow-sm rounded-lg table-container">
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup, index) => (
            <TableRow 
              key={headerGroup.id}
              className={cn(
                "m-0 p-0 bg-[#ffffff]",
                index === 1 && "absolute opacity-0 -z-10"
              )}
            >
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    colSpan={header.colSpan}
                    className="h-[97px] p-0 m-0 text-[#013025] text-[15px] font-medium"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            <>
              {table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={cn(
                    "hover:bg-transparent cursor-pointer",
                    row.getIsSelected() ? "bg-[#F7F7F7]" : "bg-[#FCFCFC]"
                  )}
                  onClick={() => row.toggleSelected(!row.getIsSelected())}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={cn(
                        "px-4 py-2 text-sm",
                        cell.column.columnDef?.accessorKey === "skuName" && "text-left border-r border-[0.5px] border-[#F1F1F1]",
                        cell.column.columnDef?.accessorKey === "totalInventory" && "text-center border-r border-[0.5px] border-[#F1F1F1]",
                        cell.column.columnDef?.accessorKey !== "skuName" && cell.column.columnDef?.accessorKey !== "totalInventory" && "text-center"
                      )}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
              <TableRow className="bg-[#FCFCFC]">
                <TableCell className="pl-[25px] py-2 w-[174px]">
                  <div className="font-bold text-[#0A090B]">Total</div>
                </TableCell>
                <TableCell className="px-2 py-2 w-[137px] text-center">
                  <div className="font-bold text-[#0A090B]">₹1,10,971.44</div>
                </TableCell>
                <TableCell className="px-2 py-2 w-[137px] text-center">
                  <div className="font-bold text-[#0A090B]">3.38%</div>
                </TableCell>
                <TableCell className="px-2 py-2 w-[138px] text-center">
                  <div className="font-bold text-[#0A090B]">2,542.8</div>
                </TableCell>
                <TableCell className="px-2 py-2 w-[119px] text-center">
                  <div className="font-bold text-[#0A090B]">7.1</div>
                </TableCell>
                <TableCell className="px-2 py-2 w-[119px] text-center">
                  <div className="font-bold text-[#0A090B]">17,239.9</div>
                </TableCell>
                <TableCell className="px-2 py-2 w-[120px] text-center">
                  <div className="font-bold text-[#0A090B]">30,167.9</div>
                </TableCell>
                <TableCell className="px-2 py-2 w-[120px] text-center">
                  <div className="font-bold text-[#0A090B]">4.60%</div>
                </TableCell>
              </TableRow>
            </>
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default Tables