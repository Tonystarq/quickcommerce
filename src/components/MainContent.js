"use client"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '@/app/redux/features/loadingSlice';
import LoadingSpinner from './LoadingSpinner';

export default function MainContent({ children }) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading.isLoading);

  useEffect(() => {
    // Wait for all resources to load
    window.onload = () => {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 500);
    };

    // Fallback in case window.onload doesn't trigger
    const timer = setTimeout(() => {
      dispatch(setLoading(false));
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <div className="flex-1">
          <LoadingSpinner />
        </div>
      ) : (
        <main className="flex-1 bg-[#EBEBEB] max-h-screen w-full rounded-md mx-[20px] mt-[20px]">
          {children}
        </main>
      )}
    </>
  );
} 