import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export const LinechartData = [
  {
    title: "Sales (MRP)",
    currentValue: "125.49",
    lastMonthValue: "119.69",
    percentageChange: "2.4",
    isIncrease: true
  },
  {
    title: "Total Quantity Sold",
    currentValue: "125.49",
    lastMonthValue: "119.69",
    percentageChange: "2.4",
    isIncrease: true
  }
];

export const gaugeChartData = {
  title: "Top Cities",
  total: "68.2L",
  percentageChange: "2.2",
  isIncrease: true,
  data: [
    { city: "New Delhi", value: "26.5L", percentage: 35, change: 1.2, isIncrease: true },
    { city: "Mumbai", value: "36.4L", percentage: 23, change: 3.3, isIncrease: false },
    { city: "West Bengal", value: "12.2L", percentage: 21, change: 2.3, isIncrease: false },
    { city: "Others", value: "24.3L", percentage: 9, change: 1.09, isIncrease: true }
  ]
};
export const tableDataCity = {
  headers: {
    availability: [
      { id: 'sales', title: 'Sales', sortable: true },
      { id: 'outOfStock', title: 'Out of Stock', sortable: true },
      { id: 'totalInventory', title: 'Total Inventory', sortable: true }
    ],
    visibility: [
      { id: 'averageRank', title: 'Average Rank', sortable: true },
      { id: 'estTraffic', title: 'Est. Traffic', sortable: true },
      { id: 'estImpressions', title: 'Est. Impressions', sortable: true },
      { id: 'CI', title: 'CI', sortable: true }
    ]
  },
  data: [
    {
      id: 1,
      skuName: 'Delhi',
      sales: '₹93,132.12',
      outOfStock: '1.68%',
      totalInventory: '931.9',
      averageRank: '3.2',
      estTraffic: '12,303',
      estImpressions: '25,005',
      CI: '1.90%',
      selected: false
    },
    {
      id: 2,
      skuName: 'Bengaluru',
      sales: '₹8,526.32',
      outOfStock: '6.79%',
      totalInventory: '679',
      averageRank: '7',
      estTraffic: '3005',
      estImpressions: '4231',
      CI: '10',
      selected: false,
      changes: {
        sales: { value: '2.4%',number:"₹7,012.72", increase: true },
        outOfStock: { value: '2.4%',number:"3.28%", increase: true },
        totalInventory:{value: '-',number:"328%"},
        averageRank: { value: '2.4%',number:"4", increase: true },
        estTraffic: { value: '2.4%',number:"2960", increase: true },
        estImpressions: { value: '2.4%',number:"3657",increase: true },
        CI: { value: '4.2%', increase: false }
      }
    },
    {
      id: 3,
      skuName: 'SKU 3',
      sales: '₹9313',
      outOfStock: '1.68%',
      totalInventory: '931.9',
      averageRank: '11',
      estTraffic: '1931.9',
      estImpressions: '₹931.9',
      CI: '1.90%',
      selected: false
    },
    {
      id: 4,
      skuName: 'SKU 4',
      sales: '₹0',
      outOfStock: '0',
      totalInventory: '0',
      averageRank: '0',
      estTraffic: '₹0',
      estImpressions: '₹0',
      CI: '0.00%',
      selected: false
    }
  ]
};
export const tableDataSKU = {
  headers: {
    availability: [
      { id: 'sales', title: 'Sales', sortable: true },
      { id: 'outOfStock', title: 'Out of Stock', sortable: true },
      { id: 'totalInventory', title: 'Total Inventory', sortable: true }
    ],
    visibility: [
      { id: 'averageRank', title: 'Average Rank', sortable: true },
      { id: 'estTraffic', title: 'Est. Traffic', sortable: true },
      { id: 'estImpressions', title: 'Est. Impressions', sortable: true },
      { id: 'CI', title: 'CI', sortable: true }
    ]
  },
  data: [
    {
      id: 1,
      skuName: 'Protein Bar 100g',
      sales: '₹93,132.12',
      outOfStock: '1.68%',
      totalInventory: '931.9',
      averageRank: '3.2',
      estTraffic: '12,303',
      estImpressions: '25,005',
      CI: '1.90%',
      selected: false
    },
    {
      id: 2,
      skuName: 'Choco Bar 100g',
      sales: '₹8,526.32',
      outOfStock: '6.79%',
      totalInventory: '679',
      averageRank: '7',
      estTraffic: '3005',
      estImpressions: '4231',
      CI: '10',
      selected: false,
      changes: {
        sales: { value: '2.4%',number:"₹7,012.72", increase: true },
        outOfStock: { value: '2.4%',number:"3.28%", increase: true },
        totalInventory:{value: '-',number:"328%"},
        averageRank: { value: '2.4%',number:"4", increase: true },
        estTraffic: { value: '2.4%',number:"2960", increase: true },
        estImpressions: { value: '2.4%',number:"3657",increase: true },
        CI: { value: '4.2%', increase: false }
      }
    },
    {
      id: 3,
      skuName: 'SKU 3',
      sales: '₹9313',
      outOfStock: '1.68%',
      totalInventory: '931.9',
      averageRank: '11',
      estTraffic: '1931.9',
      estImpressions: '₹931.9',
      CI: '1.90%',
      selected: false
    },
    {
      id: 4,
      skuName: 'SKU 4',
      sales: '₹0',
      outOfStock: '0',
      totalInventory: '0',
      averageRank: '0',
      estTraffic: '₹0',
      estImpressions: '₹0',
      CI: '0.00%',
      selected: false
    }
  ]
};