"use client"
import { useState, useEffect } from 'react';
import { ReduxProvider } from "@/app/redux/provider";
import Sidebar from "@/components/Sidebar";
import LoadingSpinner from '@/components/LoadingSpinner';

export default function ClientLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for secondary sidebar
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ReduxProvider>
      <div className="flex min-h-screen max-w-[1440px] mx-auto">
        <Sidebar />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <main className="flex-1 bg-[#EBEBEB] max-h-screen w-full rounded-md mx-[20px] mt-[20px]">
            {children}
          </main>
        )}
      </div>
    </ReduxProvider>
  );
} 