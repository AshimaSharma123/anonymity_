"use client";

import Link from "next/link";
import { useState } from "react";

// ─── School Create Form ───────────────────────────────────────────────────────

type Association = "School District" | "Private" | "Charter";
type SchoolYear = "2025-2026" | "2026-2027" | "2027-2028" | "2028-2029";
type GradeLevel = "Pre-K" | "Elementary" | "Middle School" | "High School" | "Special Ed";

interface SchoolFormData {
  name: string;
  association: Association;
  districtName: string;
  schoolYear: SchoolYear;
  gradeLevels: GradeLevel[];
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
}

const GRADE_LEVELS: GradeLevel[] = ["Pre-K", "Elementary", "Middle School", "High School", "Special Ed"];
const SCHOOL_YEARS: SchoolYear[] = ["2025-2026", "2026-2027", "2027-2028", "2028-2029"];
const ASSOCIATIONS: Association[] = ["School District", "Private", "Charter"];

function SchoolCreateForm({ onCancel }: { onCancel: () => void }) {
  const [form, setForm] = useState<SchoolFormData>({
    name: "",
    association: "School District",
    districtName: "",
    schoolYear: "2025-2026",
    gradeLevels: [],
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
  });

  const toggleGradeLevel = (grade: GradeLevel) => {
    setForm((prev) => ({
      ...prev,
      gradeLevels: prev.gradeLevels.includes(grade)
        ? prev.gradeLevels.filter((g) => g !== grade)
        : [...prev.gradeLevels, grade],
    }));
  };

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Page-level top bar */}
      <div className="flex items-center justify-between px-8 py-[26px]">
        <div className="flex items-center gap-2.5">
          <button
            onClick={onCancel}
            className="flex items-center justify-center cursor-pointer"
            aria-label="Go back"
          >
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
              <path d="M3.49202 9.04802L8.52603 14.2183C8.7315 14.4294 8.83013 14.6756 8.82191 14.9569C8.81369 15.2383 8.7065 15.4845 8.50035 15.6955C8.29488 15.889 8.05516 15.9903 7.7812 15.9994C7.50724 16.0086 7.26753 15.9073 7.06206 15.6955L0.281557 8.73147C0.178822 8.62596 0.10588 8.51165 0.0627314 8.38854C0.0195827 8.26544 -0.00130658 8.13355 6.32218e-05 7.99286C0.00143302 7.85217 0.0230071 7.72027 0.0647859 7.59717C0.106565 7.47407 0.179165 7.35976 0.282584 7.25424L7.06309 0.290169C7.25143 0.0967228 7.48704 0 7.7699 0C8.05277 0 8.29659 0.0967228 8.50138 0.290169C8.70685 0.501202 8.80958 0.751979 8.80958 1.0425C8.80958 1.33302 8.70685 1.58345 8.50138 1.79378L3.49202 6.9377H22.9726C23.2637 6.9377 23.5079 7.03899 23.7051 7.24158C23.9024 7.44417 24.0007 7.6946 24 7.99286C23.9993 8.29112 23.9007 8.54189 23.7041 8.74519C23.5076 8.94848 23.2637 9.04943 22.9726 9.04802H3.49202Z" fill="#1E1E1E" />
            </svg>
          </button>
          <h1 className="font-outfit font-semibold text-2xl sm:text-3xl text-[#121212] text-[#121212] leading-5">School</h1>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={onCancel}
            className="flex items-center gap-1.5 px-[17px] py-3 rounded-lg border border-[#EFF0F2] bg-white cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9.99967 11.1668L5.91634 15.2502C5.76356 15.4029 5.56912 15.4793 5.33301 15.4793C5.0969 15.4793 4.90245 15.4029 4.74967 15.2502C4.5969 15.0974 4.52051 14.9029 4.52051 14.6668C4.52051 14.4307 4.5969 14.2363 4.74967 14.0835L8.83301 10.0002L4.74967 5.91683C4.5969 5.76405 4.52051 5.56961 4.52051 5.3335C4.52051 5.09738 4.5969 4.90294 4.74967 4.75016C4.90245 4.59738 5.0969 4.521 5.33301 4.521C5.56912 4.521 5.76356 4.59738 5.91634 4.75016L9.99967 8.8335L14.083 4.75016C14.2358 4.59738 14.4302 4.521 14.6663 4.521C14.9025 4.521 15.0969 4.59738 15.2497 4.75016C15.4025 4.90294 15.4788 5.09738 15.4788 5.3335C15.4788 5.56961 15.4025 5.76405 15.2497 5.91683L11.1663 10.0002L15.2497 14.0835C15.4025 14.2363 15.4788 14.4307 15.4788 14.6668C15.4788 14.9029 15.4025 15.0974 15.2497 15.2502C15.0969 15.4029 14.9025 15.4793 14.6663 15.4793C14.4302 15.4793 14.2358 15.4029 14.083 15.2502L9.99967 11.1668Z" fill="#333333" />
            </svg>
            <span className="font-inter font-medium text-base text-[#333]">Cancel</span>
          </button>
          <button
            onClick={onCancel}
            className="flex items-center gap-1.5 px-[17px] py-3 rounded-lg bg-[#0171F9] cursor-pointer hover:bg-[#0161d9] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2.5 4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H13.8217C14.2637 2.50009 14.6875 2.67575 15 2.98833L17.2558 5.24417C17.4121 5.40041 17.5 5.61234 17.5 5.83333V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667ZM7.5 15.8333H12.5V10.8333H7.5V15.8333ZM14.1667 15.8333H15.8333V6.17833L14.1667 4.51167V5.83333C14.1667 6.27536 13.9911 6.69928 13.6785 7.01184C13.3659 7.3244 12.942 7.5 12.5 7.5H7.5C7.05797 7.5 6.63405 7.3244 6.32149 7.01184C6.00893 6.69928 5.83333 6.27536 5.83333 5.83333V4.16667H4.16667V15.8333H5.83333V10.8333C5.83333 10.3913 6.00893 9.96738 6.32149 9.65482C6.63405 9.34226 7.05797 9.16667 7.5 9.16667H12.5C12.942 9.16667 13.3659 9.34226 13.6785 9.65482C13.9911 9.96738 14.1667 10.3913 14.1667 10.8333V15.8333ZM7.5 4.16667V5.83333H12.5V4.16667H7.5Z" fill="white" />
            </svg>
            <span className="font-inter font-semibold text-base text-white">Save</span>
          </button>
        </div>
      </div>

      {/* Form Card */}
      <div className="px-8 pb-10">
        <div className="bg-white rounded-2xl p-8 max-w-[720px] mx-auto flex flex-col gap-10">

          {/* ── School Details ── */}
          <div className="flex flex-col gap-8">
            <h2 className="font-outfit font-semibold text-2xl text-[#0171F9]">School Details</h2>

            <div className="flex flex-col gap-4">
              {/* School Name */}
              <div className="flex flex-col gap-2.5">
                <label className="font-outfit font-medium text-md text-[#121212] leading-6">School Name</label>
                <input
                  type="text"
                  placeholder="Enter School Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="h-[43px] px-4 rounded-lg bg-[#F3F4F5] font-inter text-sm text-[#6B7280] placeholder:text-[#6B7280] outline-none focus:ring-2 focus:ring-[#0171F9]/30 transition-all"
                />
              </div>

              {/* School District / Association */}
              <div className="flex flex-col gap-2.5">
                <label className="font-outfit font-medium text-md text-[#121212] leading-6">School Disctrict/Association</label>
                <div className="flex items-center gap-3 flex-wrap">
                  {ASSOCIATIONS.map((assoc) => (
                    <button
                      key={assoc}
                      onClick={() => setForm({ ...form, association: assoc })}
                      className={`px-6 py-2 rounded-lg border font-inter text-sm font-medium transition-all cursor-pointer ${
                        form.association === assoc
                          ? "border-[#0B77F9] bg-[#DBECFF] text-[#0B77F9]"
                          : "border-[#B2B2B2] bg-[#FCFDFE] text-[#121212]"
                      }`}
                    >
                      {assoc}
                    </button>
                  ))}
                </div>
                {form.association === "School District" && (
                  <input
                    type="text"
                    placeholder="Enter School Disctrict Name"
                    value={form.districtName}
                    onChange={(e) => setForm({ ...form, districtName: e.target.value })}
                    className="h-[43px] px-4 rounded-lg bg-[#F3F4F5] font-inter text-sm text-[#6B7280] placeholder:text-[#6B7280] outline-none focus:ring-2 focus:ring-[#0171F9]/30 transition-all"
                  />
                )}
              </div>

              {/* School Year */}
              <div className="flex flex-col gap-2.5">
                <label className="font-outfit font-medium text-md text-[#121212] leading-6">School Year</label>
                <p className="font-inter text-sm text-[#6B7280] -mt-1">
                  Each school year creates a new record. Regular teachers often transfer between years, changing a school's dynamics.
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  {SCHOOL_YEARS.map((year) => (
                    <button
                      key={year}
                      onClick={() => setForm({ ...form, schoolYear: year })}
                      className={`px-6 py-2 rounded-lg border font-inter text-sm font-medium transition-all cursor-pointer ${
                        form.schoolYear === year
                          ? "border-[#0B77F9] bg-[#DBECFF] text-[#0B77F9]"
                          : "border-[#B2B2B2] bg-[#FCFDFE] text-[#121212]"
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grade Level */}
              <div className="flex flex-col gap-2.5">
                <label className="font-outfit font-medium text-md text-[#121212] leading-6">Grade Level supported</label>
                <div className="flex items-center gap-3 flex-wrap">
                  {GRADE_LEVELS.map((grade) => {
                    const selected = form.gradeLevels.includes(grade);
                    return (
                      <button
                        key={grade}
                        onClick={() => toggleGradeLevel(grade)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-inter text-sm font-medium transition-all cursor-pointer ${
                          selected
                            ? "bg-[#0B77F9] text-white"
                            : "border border-[#B2B2B2] bg-[#FCFDFE] text-[#121212]"
                        }`}
                      >
                        {grade}
                        {selected && (
                          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                            <path d="M4.38333 5.31667L1.11667 8.58333C0.994444 8.70555 0.838889 8.76667 0.65 8.76667C0.461111 8.76667 0.305555 8.70555 0.183333 8.58333C0.0611109 8.46111 0 8.30556 0 8.11667C0 7.92778 0.0611109 7.77222 0.183333 7.65L3.45 4.38333L0.183333 1.11667C0.0611109 0.994444 0 0.838889 0 0.65C0 0.461111 0.0611109 0.305555 0.183333 0.183333C0.305555 0.0611109 0.461111 0 0.65 0C0.838889 0 0.994444 0.0611109 1.11667 0.183333L4.38333 3.45L7.65 0.183333C7.77222 0.0611109 7.92778 0 8.11667 0C8.30556 0 8.46111 0.0611109 8.58333 0.183333C8.70555 0.305555 8.76667 0.461111 8.76667 0.65C8.76667 0.838889 8.70555 0.994444 8.58333 1.11667L5.31667 4.38333L8.58333 7.65C8.70555 7.77222 8.76667 7.92778 8.76667 8.11667C8.76667 8.30556 8.70555 8.46111 8.58333 8.58333C8.46111 8.70555 8.30556 8.76667 8.11667 8.76667C7.92778 8.76667 7.77222 8.70555 7.65 8.58333L4.38333 5.31667Z" fill="white" />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-black opacity-10" />

          {/* ── School Address ── */}
          <div className="flex flex-col gap-6">
            <h2 className="font-outfit font-semibold text-2xl text-[#0171F9]">School Address</h2>

            <div className="flex flex-col gap-4">
              {/* Street Address */}
              <div className="flex flex-col gap-2.5">
                <label className="font-outfit font-medium text-md text-[#121212] leading-6">Street Address</label>
                <div className="flex items-center justify-between h-[43px] px-4 rounded-lg bg-[#F3F4F5] overflow-hidden">
                  <input
                    type="text"
                    placeholder="Enter Street Address"
                    value={form.streetAddress}
                    onChange={(e) => setForm({ ...form, streetAddress: e.target.value })}
                    className="flex-1 bg-transparent font-inter text-sm text-[#6B7280] placeholder:text-[#6B7280] outline-none"
                  />
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-60 flex-shrink-0">
                    <g clipPath="url(#clip_chevron_down)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.47136 10.4712C8.34634 10.5962 8.1768 10.6664 8.00003 10.6664C7.82325 10.6664 7.65371 10.5962 7.52869 10.4712L3.75736 6.6999C3.63244 6.57488 3.5625 6.40534 3.5625 6.22857C3.5625 6.0518 3.63244 5.88226 3.75736 5.75724C3.88238 5.63232 4.05192 5.56238 4.22869 5.56238C4.40546 5.56238 4.575 5.63232 4.70003 5.75724L8.00003 9.05724L11.3 5.75724C11.4258 5.6358 11.5942 5.5686 11.769 5.57012C11.9438 5.57164 12.111 5.64175 12.2346 5.76536C12.3582 5.88896 12.4283 6.05617 12.4298 6.23097C12.4313 6.40577 12.3641 6.57417 12.2427 6.6999L8.47136 10.4712Z" fill="#1E1E1E" />
                    </g>
                    <defs>
                      <clipPath id="clip_chevron_down"><rect width="16" height="16" fill="white" /></clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* City / State / Zip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2.5">
                  <label className="font-outfit font-medium text-md text-[#121212] leading-6">City</label>
                  <input
                    type="text"
                    placeholder="Enter City Name"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="h-[43px] px-4 rounded-lg bg-[#F3F4F5] font-inter text-sm text-[#6B7280] placeholder:text-[#6B7280] outline-none focus:ring-2 focus:ring-[#0171F9]/30 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <label className="font-outfit font-medium text-md text-[#121212] leading-6">State</label>
                  <input
                    type="text"
                    placeholder="Enter State"
                    value={form.state}
                    onChange={(e) => setForm({ ...form, state: e.target.value })}
                    className="h-[43px] px-4 rounded-lg bg-[#F3F4F5] font-inter text-sm text-[#6B7280] placeholder:text-[#6B7280] outline-none focus:ring-2 focus:ring-[#0171F9]/30 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <label className="font-outfit font-medium text-md text-[#121212] leading-6">Zip Code</label>
                  <input
                    type="text"
                    placeholder="Enter ZIP Code"
                    value={form.zip}
                    onChange={(e) => setForm({ ...form, zip: e.target.value })}
                    className="h-[43px] px-4 rounded-lg bg-[#F3F4F5] font-inter text-sm text-[#6B7280] placeholder:text-[#6B7280] outline-none focus:ring-2 focus:ring-[#0171F9]/30 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Form footer buttons */}
          <div className="flex items-center justify-end gap-3">
            <button
              onClick={onCancel}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-[rgba(0,0,0,0.20)] bg-white cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M8.99973 10.0501L5.32473 13.7251C5.18723 13.8626 5.01223 13.9313 4.79973 13.9313C4.58723 13.9313 4.41223 13.8626 4.27473 13.7251C4.13723 13.5876 4.06848 13.4126 4.06848 13.2001C4.06848 12.9876 4.13723 12.8126 4.27473 12.6751L7.94973 9.0001L4.27473 5.3251C4.13723 5.1876 4.06848 5.0126 4.06848 4.8001C4.06848 4.5876 4.13723 4.4126 4.27473 4.2751C4.41223 4.1376 4.58723 4.06885 4.79973 4.06885C5.01223 4.06885 5.18723 4.1376 5.32473 4.2751L8.99973 7.9501L12.6747 4.2751C12.8122 4.1376 12.9872 4.06885 13.1997 4.06885C13.4122 4.06885 13.5872 4.1376 13.7247 4.2751C13.8622 4.4126 13.931 4.5876 13.931 4.8001C13.931 5.0126 13.8622 5.1876 13.7247 5.3251L10.0497 9.0001L13.7247 12.6751C13.8622 12.8126 13.931 12.9876 13.931 13.2001C13.931 13.4126 13.8622 13.5876 13.7247 13.7251C13.5872 13.8626 13.4122 13.9313 13.1997 13.9313C12.9872 13.9313 12.8122 13.8626 12.6747 13.7251L8.99973 10.0501Z" fill="#333333" />
              </svg>
              <span className="font-inter font-medium text-sm text-[#333]">Cancel</span>
            </button>
            <button
              onClick={onCancel}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#0171F9] cursor-pointer hover:bg-[#0161d9] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2.25 3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H12.4395C12.8373 2.25008 13.2188 2.40818 13.5 2.6895L15.5303 4.71975C15.6709 4.86037 15.75 5.0511 15.75 5.25V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75ZM6.75 14.25H11.25V9.75H6.75V14.25ZM12.75 14.25H14.25V5.5605L12.75 4.0605V5.25C12.75 5.64782 12.592 6.02936 12.3107 6.31066C12.0294 6.59196 11.6478 6.75 11.25 6.75H6.75C6.35218 6.75 5.97064 6.59196 5.68934 6.31066C5.40804 6.02936 5.25 5.64782 5.25 5.25V3.75H3.75V14.25H5.25V9.75C5.25 9.35218 5.40804 8.97064 5.68934 8.68934C5.97064 8.40804 6.35218 8.25 6.75 8.25H11.25C11.6478 8.25 12.0294 8.40804 12.3107 8.68934C12.592 8.97064 12.75 9.35218 12.75 9.75V14.25ZM6.75 3.75V5.25H11.25V3.75H6.75Z" fill="white" />
              </svg>
              <span className="font-inter font-semibold text-sm text-white">Save</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M8 3.99979C6.93913 3.99979 5.92172 4.42122 5.17157 5.17136C4.42143 5.92151 4 6.93892 4 7.99979C4 9.06066 4.42143 10.0781 5.17157 10.8282C5.92172 11.5784 6.93913 11.9998 8 11.9998C9.06087 11.9998 10.0783 11.5784 10.8284 10.8282C11.5786 10.0781 12 9.06066 12 7.99979C12 6.93892 11.5786 5.92151 10.8284 5.17136C10.0783 4.42122 9.06087 3.99979 8 3.99979ZM2 7.99979C1.99988 7.05549 2.22264 6.1245 2.65017 5.28253C3.0777 4.44056 3.69792 3.71139 4.4604 3.15432C5.22287 2.59724 6.10606 2.228 7.03815 2.07662C7.97023 1.92524 8.92488 1.996 9.82446 2.28314C10.724 2.57028 11.5432 3.06569 12.2152 3.72909C12.8872 4.39248 13.3931 5.20512 13.6919 6.10092C13.9906 6.99672 14.0737 7.95038 13.9343 8.88434C13.795 9.8183 13.4372 10.7062 12.89 11.4758L17.707 16.2928C17.8892 16.4814 17.99 16.734 17.9877 16.9962C17.9854 17.2584 17.8802 17.5092 17.6948 17.6946C17.5094 17.88 17.2586 17.9852 16.9964 17.9875C16.7342 17.9897 16.4816 17.8889 16.293 17.7068L11.477 12.8908C10.5794 13.5291 9.52335 13.9079 8.42468 13.9859C7.326 14.0639 6.22707 13.8379 5.2483 13.3328C4.26953 12.8276 3.44869 12.0628 2.87572 11.1221C2.30276 10.1815 1.99979 9.10122 2 7.99979Z" fill="#323152" />
  </svg>
);

const LocationIcon = () => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
    <path d="M4.66699 0.400391C7.02593 0.400566 8.93359 2.30801 8.93359 4.66699C8.93352 5.46098 8.66643 6.38047 8.23926 7.33398C7.81438 8.28237 7.24374 9.23549 6.66797 10.0889C6.09302 10.941 5.51726 11.6871 5.08496 12.2197C4.92298 12.4193 4.77955 12.5871 4.66602 12.7207C4.55255 12.5872 4.40982 12.4191 4.24805 12.2197C3.81572 11.687 3.24003 10.9411 2.66504 10.0889C2.08926 9.23548 1.51863 8.28239 1.09375 7.33398C0.666593 6.38049 0.400464 5.46097 0.400391 4.66699C0.400391 2.30791 2.30791 0.400391 4.66699 0.400391ZM4.66699 2.59961C4.11888 2.59961 3.59265 2.8175 3.20508 3.20508C2.8175 3.59265 2.59961 4.11888 2.59961 4.66699C2.5997 5.21491 2.81768 5.74045 3.20508 6.12793C3.59265 6.5155 4.11888 6.7334 4.66699 6.7334C5.21499 6.73331 5.74043 6.51543 6.12793 6.12793C6.51543 5.74043 6.73331 5.21499 6.7334 4.66699C6.7334 4.11888 6.5155 3.59265 6.12793 3.20508C5.74045 2.81768 5.21491 2.5997 4.66699 2.59961Z" stroke="#191919" strokeWidth="0.8" />
  </svg>
);

const SentimentIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <g clipPath="url(#clip0_smile)">
      <path d="M9.53792 6C9.66836 6.20146 9.84979 6.3676 10.0652 6.48277C10.2805 6.59795 10.5227 6.65839 10.769 6.65839C11.0152 6.65839 11.2574 6.59795 11.4728 6.48277C11.6881 6.3676 11.8696 6.20146 12 6M6.46144 6C6.33097 6.20132 6.14956 6.36733 5.93426 6.48242C5.71897 6.59751 5.47687 6.65789 5.23072 6.65789C4.98457 6.65789 4.74247 6.59751 4.52718 6.48242C4.31188 6.36733 4.13047 6.20132 4 6M4.30752 9.62581C4.61131 10.3289 5.12406 10.9296 5.78115 11.352C6.43825 11.7745 7.21029 12 8 12C8.78971 12 9.56175 11.7745 10.2188 11.352C10.8759 10.9296 11.3887 10.3289 11.6925 9.62581" stroke="#191919" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.00033 15.3337C12.0503 15.3337 15.3337 12.0503 15.3337 8.00033C15.3337 3.95033 12.0503 0.666992 8.00033 0.666992C3.95033 0.666992 0.666992 3.95033 0.666992 8.00033C0.666992 12.0503 3.95033 15.3337 8.00033 15.3337Z" stroke="#191919" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_smile"><rect width="16" height="16" fill="white" /></clipPath>
    </defs>
  </svg>
);

const FilterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M13.9849 3.19692C13.9849 2.778 13.9849 2.56854 13.9026 2.40845C13.8311 2.26781 13.7169 2.15339 13.5765 2.08154C13.4164 2 13.2069 2 12.788 2H3.21266C2.79374 2 2.58428 2 2.42419 2.08154C2.28344 2.15326 2.16901 2.2677 2.09729 2.40845C2.01575 2.56854 2.01575 2.778 2.01575 3.19692V3.74825C2.01575 3.93152 2.01575 4.02279 2.03669 4.10882C2.05501 4.18541 2.08531 4.25862 2.12646 4.32576C2.17209 4.40057 2.23718 4.46565 2.36585 4.59507L6.15334 8.38181C6.28276 8.51123 6.34784 8.57631 6.39347 8.65112C6.43486 8.71894 6.46479 8.79126 6.48324 8.86806C6.50419 8.95334 6.50419 9.04386 6.50419 9.22265V12.7805C6.50419 13.4216 6.50419 13.7425 6.63884 13.9355C6.69726 14.019 6.77211 14.0896 6.85882 14.1432C6.94552 14.1967 7.04224 14.2319 7.14304 14.2467C7.37569 14.2811 7.66295 14.1382 8.23597 13.851L8.83443 13.5517C9.07531 13.4321 9.195 13.3722 9.28253 13.2824C9.36017 13.2031 9.4192 13.1076 9.45533 13.0027C9.49648 12.8845 9.49648 12.7498 9.49648 12.4813V9.22863C9.49648 9.04535 9.49648 8.95409 9.51742 8.86806C9.53574 8.79147 9.56604 8.71826 9.60719 8.65112C9.65208 8.57631 9.71716 8.51198 9.84433 8.3848L9.84732 8.38181L13.6348 4.59507C13.7635 4.46565 13.8278 4.40057 13.8742 4.32576C13.9156 4.25793 13.9455 4.18562 13.964 4.10882C13.9849 4.02429 13.9849 3.93302 13.9849 3.75423V3.19692Z" stroke="#191919" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M4.91762 4.91753C4.7926 5.04251 4.62306 5.11272 4.44628 5.11272C4.26951 5.11272 4.09997 5.04251 3.97495 4.91753L0.203617 1.14619C0.139944 1.08469 0.0891555 1.01113 0.0542161 0.929795C0.0192768 0.848459 0.000885935 0.760979 0.000116724 0.67246C-0.000652487 0.58394 0.0162155 0.496154 0.0497361 0.414223C0.0832567 0.332292 0.132759 0.257857 0.195354 0.195262C0.257949 0.132667 0.332383 0.0831648 0.414314 0.0496442C0.496245 0.0161236 0.584032 -0.00074404 0.672551 2.51714e-05C0.761071 0.000794382 0.848551 0.0191852 0.929887 0.0541246C1.01122 0.0890639 1.08479 0.139852 1.14628 0.203525L4.44628 3.50353L7.74628 0.203525C7.87202 0.0820866 8.04042 0.0148904 8.21522 0.0164093C8.39002 0.0179282 8.55722 0.0880407 8.68083 0.211646C8.80443 0.335252 8.87455 0.50246 8.87607 0.677258C8.87759 0.852056 8.81039 1.02046 8.68895 1.14619L4.91762 4.91753Z" fill="#1E1E1E" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
    <path d="M5.67629 0L0 6L5.67629 12L7 10.5996L2.64856 6L7 1.4004L5.67629 0Z" fill="#323152" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
    <path d="M1.32371 0L7 6L1.32371 12L0 10.5996L4.35144 6L0 1.4004L1.32371 0Z" fill="#323152" />
  </svg>
);

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M9 11H4C3.71667 11 3.47934 10.904 3.288 10.712C3.09667 10.52 3.00067 10.2827 3 10C2.99934 9.71733 3.09534 9.48 3.288 9.288C3.48067 9.096 3.718 9 4 9H9V4C9 3.71667 9.096 3.47934 9.288 3.288C9.48 3.09667 9.71733 3.00067 10 3C10.2827 2.99934 10.5203 3.09534 10.713 3.288C10.9057 3.48067 11.0013 3.718 11 4V9H16C16.2833 9 16.521 9.096 16.713 9.288C16.905 9.48 17.0007 9.71733 17 10C16.9993 10.2827 16.9033 10.5203 16.712 10.713C16.5207 10.9057 16.2833 11.0013 16 11H11V16C11 16.2833 10.904 16.521 10.712 16.713C10.52 16.905 10.2827 17.0007 10 17C9.71733 16.9993 9.48 16.9033 9.288 16.712C9.096 16.5207 9 16.2833 9 16V11Z" fill="white" />
  </svg>
);

// ─── Types ────────────────────────────────────────────────────────────────────

type RiskLevel = "High" | "Medium" | "Low";
type SchoolStatus = "Active" | "Inactive";

interface School {
  id: number;
  name: string;
  association: Association;
  schoolYear: string;
  location: string;
  teachers: number;
  risk: RiskLevel;
  reports: number;
  status: SchoolStatus;
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const allSchools: School[] = [
  { id: 1, name: "Lincoln High School", association: "School District", schoolYear: "2025-2026", location: "New York, NY", teachers: 28, risk: "Medium", reports: 35, status: "Active" },
  { id: 2, name: "Riverside Academy", association: "Private", schoolYear: "2027-2028", location: "Los Angeles, CA", teachers: 24, risk: "High", reports: 29, status: "Active" },
  { id: 3, name: "Oakwood Primary", association: "School District", schoolYear: "2026-2027", location: "Chicago, IL", teachers: 30, risk: "Low", reports: 42, status: "Active" },
  { id: 4, name: "Cedar Valley Institute", association: "Charter", schoolYear: "2028-2029", location: "Houston, TX", teachers: 22, risk: "Medium", reports: 31, status: "Active" },
  { id: 5, name: "Pinehill Preparatory", association: "School District", schoolYear: "2027-2028", location: "Phoenix, AZ", teachers: 26, risk: "High", reports: 27, status: "Active" },
  { id: 6, name: "Sunset Charter School", association: "School District", schoolYear: "2025-2026", location: "Philadelphia, PA", teachers: 32, risk: "High", reports: 39, status: "Active" },
  { id: 7, name: "Hillside Technical High", association: "Private", schoolYear: "2027-2028", location: "San Antonio, TX", teachers: 20, risk: "Low", reports: 33, status: "Active" },
  { id: 8, name: "Brookside International", association: "Charter", schoolYear: "2025-2026", location: "San Diego, CA", teachers: 34, risk: "Medium", reports: 26, status: "Active" },
  { id: 9, name: "Willow Creek Academy", association: "School District", schoolYear: "2027-2028", location: "Dallas, TX", teachers: 18, risk: "Low", reports: 44, status: "Active" },
  { id: 10, name: "Evergreen STEM School", association: "Charter", schoolYear: "2026-2027", location: "San Jose, CA", teachers: 36, risk: "Low", reports: 35, status: "Active" },
  { id: 11, name: "Maplewood Academy", association: "Private", schoolYear: "2026-2027", location: "Austin, TX", teachers: 21, risk: "Medium", reports: 18, status: "Inactive" },
  { id: 12, name: "Harborview High School", association: "School District", schoolYear: "2025-2026", location: "Seattle, WA", teachers: 29, risk: "Low", reports: 51, status: "Active" },
  { id: 13, name: "Northgate Elementary", association: "Charter", schoolYear: "2027-2028", location: "Denver, CO", teachers: 15, risk: "High", reports: 12, status: "Active" },
];

const TOTAL_COUNT = 13928;
const ITEMS_PER_PAGE = 10;

// ─── Config Maps ──────────────────────────────────────────────────────────────

const associationStyles: Record<Association, string> = {
  "School District": "text-[#0171F9]",
  "Private": "text-[#7C3AED]",
  "Charter": "text-[#0891B2]",
};

const riskStyles: Record<RiskLevel, { bg: string; text: string }> = {
  High: { bg: "bg-[#FFECEC]", text: "text-[#E53E3E]" },
  Medium: { bg: "bg-[#FFF4E0]", text: "text-[#FFA600]" },
  Low: { bg: "bg-[#E6FBF0]", text: "text-[#22A45D]" },
};

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function SchoolsPage() {
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [riskFilter, setRiskFilter] = useState<"All" | RiskLevel>("All");
  const [statusFilter, setStatusFilter] = useState<"All" | SchoolStatus>("All");
  const [currentPage, setCurrentPage] = useState(1);

  if (showForm) {
    return <SchoolCreateForm onCancel={() => setShowForm(false)} />;
  }

  const filtered = allSchools.filter((s) => {
    const matchSearch =
      search === "" ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.location.toLowerCase().includes(search.toLowerCase());
    const matchRisk = riskFilter === "All" || s.risk === riskFilter;
    const matchStatus = statusFilter === "All" || s.status === statusFilter;
    return matchSearch && matchRisk && matchStatus;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleFilterChange = (setter: (v: any) => void) => (val: any) => {
    setter(val);
    setCurrentPage(1);
  };

  const displayTotal = search || riskFilter !== "All" || statusFilter !== "All" ? filtered.length : TOTAL_COUNT;
  const startItem = filtered.length === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endItem = Math.min(currentPage * ITEMS_PER_PAGE, filtered.length);

  return (
    <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-4 sm:mb-6 lg:mb-8">
        <h1 className="font-outfit font-semibold text-xl sm:text-2xl lg:text-[28px] text-[#121212] leading-5">Schools</h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-1.5 px-4 sm:px-[17px] py-2.5 sm:py-3 rounded-lg bg-[#0171F9] shadow-sm hover:bg-[#0161d9] transition-colors cursor-pointer flex-shrink-0 w-full sm:w-auto justify-center sm:justify-start"
        >
          <PlusIcon />
          <span className="font-inter font-semibold text-sm sm:text-base text-white leading-6">Create</span>
        </button>
      </div>

      {/* Table card */}
      <div className="bg-white rounded-lg overflow-hidden">
        {/* Search + Filters */}
        <div className="px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 pb-0 flex flex-col gap-3 sm:gap-4">
          {/* Search */}
          <div className="w-full">
            <div className="flex items-center gap-2 sm:gap-2.5 h-10 sm:h-11 px-3 sm:px-4 rounded-[14px] border border-[#EBEBF0] bg-[#FBFBFC]">
              <span className="opacity-70 flex-shrink-0"><SearchIcon /></span>
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                className="flex-1 bg-transparent outline-none font-inter font-medium text-sm sm:text-[15px] text-[#323152] placeholder:text-[#323152] placeholder:opacity-50 leading-[150%]"
              />
            </div>
          </div>

          {/* Filter dropdowns */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 pb-3 sm:pb-4">
            {/* Location */}
            <div className="relative flex-1 sm:flex-none">
              <select
                value={locationFilter}
                onChange={(e) => handleFilterChange(setLocationFilter)(e.target.value)}
                className="w-full appearance-none pl-9 sm:pl-10 pr-7 sm:pr-8 py-2.5 sm:py-[11px] rounded-[10px] border border-[rgba(178,178,178,0.20)] bg-[#FAFCFF] font-inter text-xs sm:text-sm text-[#121212] opacity-80 cursor-pointer outline-none"
              >
                <option value="All">Location: All</option>
                <option value="NY">New York</option>
                <option value="CA">California</option>
                <option value="TX">Texas</option>
              </select>
              <span className="pointer-events-none absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2"><LocationIcon /></span>
              <span className="pointer-events-none absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2"><ChevronDownIcon /></span>
            </div>

            {/* Risk */}
            <div className="relative flex-1 sm:flex-none">
              <select
                value={riskFilter}
                onChange={(e) => handleFilterChange(setRiskFilter)(e.target.value as "All" | RiskLevel)}
                className="w-full appearance-none pl-9 sm:pl-10 pr-7 sm:pr-8 py-2.5 sm:py-[11px] rounded-[10px] border border-[rgba(178,178,178,0.20)] bg-[#FAFCFF] font-inter text-xs sm:text-sm text-[#121212] opacity-80 cursor-pointer outline-none"
              >
                <option value="All">Risk: All</option>
                <option value="High">Risk: High</option>
                <option value="Medium">Risk: Medium</option>
                <option value="Low">Risk: Low</option>
              </select>
              <span className="pointer-events-none absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2"><SentimentIcon /></span>
              <span className="pointer-events-none absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2"><ChevronDownIcon /></span>
            </div>

            {/* Status */}
            <div className="relative flex-1 sm:flex-none">
              <select
                value={statusFilter}
                onChange={(e) => handleFilterChange(setStatusFilter)(e.target.value as "All" | SchoolStatus)}
                className="w-full appearance-none pl-9 sm:pl-10 pr-7 sm:pr-8 py-2.5 sm:py-[11px] rounded-[10px] border border-[rgba(178,178,178,0.20)] bg-[#FAFCFF] font-inter text-xs sm:text-sm text-[#121212] opacity-80 cursor-pointer outline-none"
              >
                <option value="All">Status: All</option>
                <option value="Active">Status: Active</option>
                <option value="Inactive">Status: Inactive</option>
              </select>
              <span className="pointer-events-none absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2"><FilterIcon /></span>
              <span className="pointer-events-none absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2"><ChevronDownIcon /></span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-max border-collapse">
            <thead>
              <tr className="border-y border-[#E5E7EB] bg-white">
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[10px] sm:text-xs text-[#6F6C70] uppercase tracking-wide whitespace-nowrap">School Name</th>
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[10px] sm:text-xs text-[#6F6C70] uppercase tracking-wide whitespace-nowrap">Association</th>
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[10px] sm:text-xs text-[#6F6C70] uppercase tracking-wide whitespace-nowrap">School Year</th>
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[10px] sm:text-xs text-[#6F6C70] uppercase tracking-wide whitespace-nowrap">Location</th>
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[10px] sm:text-xs text-[#6F6C70] uppercase tracking-wide whitespace-nowrap">Teachers</th>
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[10px] sm:text-xs text-[#6F6C70] uppercase tracking-wide whitespace-nowrap">Risk</th>
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[10px] sm:text-xs text-[#6F6C70] uppercase tracking-wide whitespace-nowrap">Reports</th>
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[10px] sm:text-xs text-[#6F6C70] uppercase tracking-wide whitespace-nowrap">Status</th>
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[10px] sm:text-xs text-[#6F6C70] uppercase tracking-wide whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={9} className="px-4 sm:px-6 lg:px-8 py-8 text-center font-inter text-sm text-[#6F6C70]">
                    No schools found.
                  </td>
                </tr>
              ) : (
                paginated.map((school) => {
                  const risk = riskStyles[school.risk];
                  const assocClass = associationStyles[school.association];
                  return (
                    <tr key={school.id} className="border-b border-[#F2F4F7] hover:bg-[#F8FAFF] transition-colors">
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap">
                        <span className="font-inter font-normal text-[10px] sm:text-[13px] text-[#030711]">{school.name}</span>
                      </td>
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap">
                        <span className={`font-inter font-normal text-[10px] sm:text-[13px] ${assocClass}`}>{school.association}</span>
                      </td>
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap">
                        <span className="font-inter font-normal text-[10px] sm:text-[13px] text-[#030711]">{school.schoolYear}</span>
                      </td>
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap">
                        <span className="font-inter font-normal text-[10px] sm:text-[13px] text-[#030711]">{school.location}</span>
                      </td>
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap">
                        <span className="font-inter font-normal text-[10px] sm:text-[13px] text-[#030711]">{school.teachers}</span>
                      </td>
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap">
                        <span className={`inline-flex items-center px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-md font-inter font-medium text-[9px] sm:text-[13px] ${risk.bg} ${risk.text}`}>
                          {school.risk}
                        </span>
                      </td>
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap">
                        <span className="font-inter font-normal text-[10px] sm:text-[13px] text-[#030711]">{school.reports}</span>
                      </td>
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap">
                        <span className="inline-flex items-center px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-md border border-[#EFF0F2] bg-[#F6F6F6] font-inter font-normal text-[10px] sm:text-sm text-[#030711]">
                          {school.status}
                        </span>
                      </td>
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap">
                        <Link href={`/schools/${school.id}`} className="hidden sm:flex items-center justify-center h-8 sm:h-9 px-2 sm:px-3.5 rounded-md border border-[#EFF0F2] bg-white font-inter font-normal text-[10px] sm:text-sm text-black opacity-80 tracking-[-0.2px] hover:opacity-100 transition-opacity">
                          View
                        </Link>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <span className="font-inter font-normal text-xs sm:text-sm text-[#191C1E] opacity-80 order-2 sm:order-1">
            {filtered.length === 0
              ? "Show 0 results"
              : `Show ${startItem}-${endItem} of ${displayTotal.toLocaleString()}`}
          </span>
          <div className="flex items-center gap-1 sm:gap-2 order-1 sm:order-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-8 sm:w-[38px] h-8 sm:h-[38px] flex items-center justify-center rounded-lg border border-[#E5E7EB] bg-white disabled:opacity-40 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeftIcon />
            </button>
            {Array.from({ length: Math.min(4, totalPages) }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 sm:w-[38px] h-8 sm:h-[38px] flex items-center justify-center rounded-lg font-inter text-[13px] sm:text-[15px] transition-colors ${
                  currentPage === page
                    ? "bg-[#0171F9] text-white font-semibold"
                    : "border border-[#E5E7EB] bg-white text-[#323152] font-medium hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-8 sm:w-[38px] h-8 sm:h-[38px] flex items-center justify-center rounded-lg border border-[#E5E7EB] bg-white disabled:opacity-40 hover:bg-gray-50 transition-colors"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
