"use client";


import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {


  return (
     <div className="flex h-screen bg-[#F3F4F7] overflow-hidden">

      {/* Sidebar */}
      <Sidebar/>

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">

        {/* Top header bar */}
        <header className="h-23 bg-white border-b border-black/10 flex items-center justify-end px-8 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end">
              <span className="font-inter font-semibold text-sm text-[#191C1E] leading-5">Marcus</span>
              <span className="font-inter font-normal text-[11px] text-[#737786] leading-[16.5px] tracking-[0.55px] uppercase">Super Admin</span>
            </div>
            <div className="relative w-10 h-10">
              <div className="w-10 h-10 rounded-[10px] bg-[#EDF5FF]" />
              <span className="absolute inset-0 flex items-center justify-center font-outfit font-medium text-lg text-[#0171F9]">M</span>
            </div>
          </div>
        </header>

      {/* Main content */}
    {children}
     </div>
    </div>
  );
}
