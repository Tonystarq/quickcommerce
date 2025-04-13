"use client"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '@/app/redux/features/loadingSlice';
import LoadingSpinner from './LoadingSpinner';
import Sidebar from './Sidebar';

export default function MainWrapper({ children }) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading.isLoading);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Wait for document to be fully loaded
        if (document.readyState === 'complete') {
          init();
        } else {
          window.addEventListener('load', init);
        }
      } catch (error) {
        console.error('Loading error:', error);
        // Show content anyway after error
        setContentReady(true);
        dispatch(setLoading(false));
      }
    };

    const init = () => {
      // Add a small delay to ensure all components are mounted
      setTimeout(() => {
        setContentReady(true);
        dispatch(setLoading(false));
      }, 500);
    };

    loadContent();

    return () => {
      window.removeEventListener('load', init);
    };
  }, [dispatch]);

  if (!contentReady || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen max-w-[1440px] mx-auto bg-white">
      <Sidebar />
      <main className="flex-1 bg-[#EBEBEB] max-h-screen w-full rounded-md mx-[20px] mt-[20px]">
        {children}
      </main>
    </div>
  );
} 