"use client";


import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
     <div className="flex h-screen bg-[#F3F4F7]">

      {/* Sidebar - Hidden on mobile, visible on lg screens */}
      <div className="hidden lg:block lg:w-72 lg:flex-shrink-0">
        <Sidebar/>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <div className={`fixed left-0 top-23 bottom-0 w-72 z-40 lg:hidden transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar/>
      </div>

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">

        {/* Top header bar */}
        <header className="h-16 sm:h-20 lg:h-23 bg-white border-b border-black/10 flex items-center justify-between px-4 sm:px-6 lg:px-8 flex-shrink-0">
          {/* Mobile menu button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle sidebar"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6H21M3 12H21M3 18H21" stroke="#191C1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* User info */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:flex flex-col items-end">
              <span className="font-inter font-semibold text-xs sm:text-sm text-[#191C1E] leading-5">Marcus</span>
              <span className="font-inter font-normal text-[10px] sm:text-[11px] text-[#737786] leading-[16.5px] tracking-[0.55px] uppercase">Super Admin</span>
            </div>
            <div className="relative w-8 sm:w-10 h-8 sm:h-10">
              <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-[10px] bg-[#EDF5FF]" />
              <span className="absolute inset-0 flex items-center justify-center font-outfit font-medium text-sm sm:text-lg text-[#0171F9]">M</span>
            </div>
          </div>
        </header>

      {/* Main content */}
    {children}
     </div>
    </div>
  );
}
