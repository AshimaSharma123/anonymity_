"use client";

import { useState, useRef } from "react";

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#chevron-clip)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.47221 10.4712C8.34719 10.5962 8.17766 10.6664 8.00088 10.6664C7.8241 10.6664 7.65456 10.5962 7.52955 10.4712L3.75821 6.6999C3.69454 6.63841 3.64375 6.56484 3.60881 6.48351C3.57387 6.40217 3.55548 6.31469 3.55471 6.22617C3.55394 6.13765 3.57081 6.04986 3.60433 5.96793C3.63785 5.886 3.68735 5.81157 3.74995 5.74897C3.81254 5.68638 3.88698 5.63688 3.96891 5.60336C4.05084 5.56983 4.13863 5.55297 4.22715 5.55374C4.31567 5.55451 4.40315 5.5729 4.48448 5.60784C4.56582 5.64277 4.63938 5.69356 4.70088 5.75724L8.00088 9.05724L11.3009 5.75724C11.4266 5.6358 11.595 5.5686 11.7698 5.57012C11.9446 5.57164 12.1118 5.64175 12.2354 5.76536C12.359 5.88896 12.4291 6.05617 12.4307 6.23097C12.4322 6.40577 12.365 6.57417 12.2435 6.6999L8.47221 10.4712Z"
        fill="#1E1E1E"
      />
    </g>
    <defs>
      <clipPath id="chevron-clip">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><path stroke="#121212" strokeWidth="1.5" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 4V2.5M17 4V2.5M2.5 9h19"/><path fill="currentColor" d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></g></svg>
);

const ExportAllBtnIcon = () => (
  <svg width="15" height="15" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.58726 12.6622C6.69665 12.7716 6.845 12.833 6.99967 12.833C7.15435 12.833 7.3027 12.7716 7.41209 12.6622L9.74543 10.3289C9.85168 10.2189 9.91048 10.0715 9.90915 9.91857C9.90782 9.76562 9.84647 9.61931 9.73832 9.51116C9.63016 9.403 9.48386 9.34165 9.33091 9.34032C9.17796 9.33899 9.03061 9.39779 8.92059 9.50405L7.58301 10.8416V4.66647C7.58301 4.51176 7.52155 4.36338 7.41215 4.25399C7.30276 4.14459 7.15438 4.08313 6.99967 4.08313C6.84496 4.08313 6.69659 4.14459 6.5872 4.25399C6.4778 4.36338 6.41634 4.51176 6.41634 4.66647V10.8416L5.07876 9.50405C4.96874 9.39779 4.82139 9.33899 4.66844 9.34032C4.51549 9.34165 4.36919 9.403 4.26103 9.51116C4.15288 9.61931 4.09153 9.76562 4.0902 9.91857C4.08887 10.0715 4.14767 10.2189 4.25392 10.3289L6.58726 12.6622ZM2.91634 4.08313C3.07105 4.08313 3.21942 4.02168 3.32882 3.91228C3.43822 3.80288 3.49967 3.65451 3.49967 3.4998V2.33313H10.4997V3.4998C10.4997 3.65451 10.5611 3.80288 10.6705 3.91228C10.7799 4.02168 10.9283 4.08313 11.083 4.08313C11.2377 4.08313 11.3861 4.02168 11.4955 3.91228C11.6049 3.80288 11.6663 3.65451 11.6663 3.4998V2.33313C11.6663 2.02371 11.5434 1.72697 11.3246 1.50817C11.1058 1.28938 10.8091 1.16647 10.4997 1.16647H3.49967C3.19026 1.16647 2.89351 1.28938 2.67472 1.50817C2.45592 1.72697 2.33301 2.02371 2.33301 2.33313V3.4998C2.33301 3.65451 2.39447 3.80288 2.50386 3.91228C2.61326 4.02168 2.76163 4.08313 2.91634 4.08313Z"
      fill="white"
    />
  </svg>
);

const ExportRowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.52802 14.4713C7.65303 14.5963 7.82257 14.6665 7.99935 14.6665C8.17613 14.6665 8.34566 14.5963 8.47068 14.4713L11.1374 11.8046C11.2588 11.6789 11.326 11.5105 11.3245 11.3357C11.3229 11.1609 11.2528 10.9937 11.1292 10.8701C11.0056 10.7465 10.8384 10.6764 10.6636 10.6749C10.4888 10.6733 10.3204 10.7405 10.1947 10.862L8.66602 12.3906V5.33331C8.66602 5.1565 8.59578 4.98693 8.47075 4.86191C8.34573 4.73688 8.17616 4.66665 7.99935 4.66665C7.82254 4.66665 7.65297 4.73688 7.52794 4.86191C7.40292 4.98693 7.33268 5.1565 7.33268 5.33331V12.3906L5.80402 10.862C5.67828 10.7405 5.50988 10.6733 5.33508 10.6749C5.16028 10.6764 4.99308 10.7465 4.86947 10.8701C4.74586 10.9937 4.67575 11.1609 4.67423 11.3357C4.67271 11.5105 4.73991 11.6789 4.86135 11.8046L7.52802 14.4713ZM3.33268 4.66665C3.50949 4.66665 3.67906 4.59641 3.80409 4.47138C3.92911 4.34636 3.99935 4.17679 3.99935 3.99998V2.66665H11.9993V3.99998C11.9993 4.17679 12.0696 4.34636 12.1946 4.47138C12.3196 4.59641 12.4892 4.66665 12.666 4.66665C12.8428 4.66665 13.0124 4.59641 13.1374 4.47138C13.2624 4.34636 13.3327 4.17679 13.3327 3.99998V2.66665C13.3327 2.31302 13.1922 1.97389 12.9422 1.72384C12.6921 1.47379 12.353 1.33331 11.9993 1.33331H3.99935C3.64573 1.33331 3.30659 1.47379 3.05654 1.72384C2.80649 1.97389 2.66602 2.31302 2.66602 2.66665V3.99998C2.66602 4.17679 2.73625 4.34636 2.86128 4.47138C2.9863 4.59641 3.15587 4.66665 3.33268 4.66665Z"
      fill="#1E1E1E"
    />
  </svg>
);

// ─── Data ──────────────────────────────────────────────────────────────────────

const DISTRICTS: { id: string; name: string }[] = [
  { id: "lincoln", name: "Lincoln Unified School District" },
  { id: "riverside", name: "Riverside Unified School District" },
  { id: "oakwood", name: "Oakwood Private Academy" },
  { id: "pinehill", name: "Pinehill Education Group" },
];

const SCHOOLS_BY_DISTRICT: Record<string, string[]> = {
  lincoln: ["Lincoln High School", "Lincoln Middle School", "Lincoln Elementary"],
  riverside: ["Riverside Academy", "Riverside Elementary"],
  oakwood: ["Oakwood Primary"],
  pinehill: ["Pinehill Preparatory"],
};

const TEACHERS_BY_SCHOOL: Record<string, string[]> = {
  "Lincoln High School": ["Ms. Johnson", "Mr. Smith", "Ms. Davis"],
  "Lincoln Middle School": ["Mr. Brown", "Ms. Wilson", "Mr. Taylor"],
  "Lincoln Elementary": ["Ms. Anderson", "Mr. Thomas", "Ms. Jackson"],
  "Riverside Academy": ["Mr. White", "Ms. Harris", "Mr. Martin"],
  "Riverside Elementary": ["Ms. Garcia", "Mr. Martinez", "Ms. Robinson"],
  "Oakwood Primary": ["Mr. Clark", "Ms. Rodriguez", "Mr. Lewis"],
  "Pinehill Preparatory": ["Ms. Lee", "Mr. Walker", "Ms. Hall"],
};

const GRADES = ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const USERS_AND_ROLES = ["Student", "Teacher", "Admin", "Parent", "Counselor"];

// ─── Form Field Components ─────────────────────────────────────────────────────

function SelectField({
  label,
  value,
  onChange,
  options,
  disabled = false,
  placeholder = "Select",
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  options: string[];
  disabled?: boolean;
  placeholder?: string;
}) {
  const selectRef = useRef<HTMLSelectElement>(null);

  return (
    <div className="flex flex-col gap-1.5 flex-1">
      <label className="font-[Outfit] font-medium text-md text-[#121212]">{label}</label>
      <div
        className={`relative flex items-center rounded-lg bg-[#F3F4F5]${disabled ? " opacity-55 cursor-not-allowed" : ""}`}
        onClick={() => selectRef.current?.focus()}
      >
        <select
          ref={selectRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="flex-1 appearance-none bg-transparent border-none outline-none font-[Inter] text-sm font-normal text-[#121212] cursor-pointer w-full px-4 py-3 pr-8 disabled:cursor-not-allowed disabled:text-[#737685]"
        >
          <option value="" className="text-[#737685]">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="text-[#121212]">
              {opt}
            </option>
          ))}
        </select>
        <span className="pointer-events-none flex items-center flex-shrink-0  absolute right-5">
          <ChevronDownIcon />
        </span>
      </div>
    </div>
  );
}

function DateField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col gap-1.5 flex-1">
      <label className="font-[Outfit] font-medium text-md text-[#121212] ">
        {label}
      </label>

      <div className="relative flex items-center rounded-lg bg-[#F3F4F5]">
        <input
          ref={inputRef}
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onClick={() => inputRef.current?.showPicker?.()}
          className="w-full px-4 py-3 text-[#121212] bg-transparent outline-none cursor-pointer"
        />

        <button
          type="button"
          onClick={() => inputRef.current?.showPicker?.()}
          className="absolute right-5"
        >
          <CalendarIcon />
        </button>
      </div>
    </div>
  );
}

// ─── Table Data ────────────────────────────────────────────────────────────────

type DistrictRow = { type: "district"; name: string };
type SchoolRow = {
  type: "school";
  name: string;
  startDate: string;
  endDate: string;
  reportDate: string;
  tags?: { label: string; style: "private" | "association" }[];
};
type TableRow = DistrictRow | SchoolRow;

const recentExports: TableRow[] = [
  { type: "district", name: "Lincoln Unified School District" },
  { type: "school", name: "Lincoln High School", startDate: "01/01/26", endDate: "01/14/26", reportDate: "03/15/26" },
  { type: "school", name: "Lincoln Middle School", startDate: "01/16/26", endDate: "01/30/26", reportDate: "01/14/26" },
  { type: "school", name: "Lincoln Elementary", startDate: "02/15/26", endDate: "02/15/26", reportDate: "03/13/26" },
  { type: "district", name: "Riverside Unified School District" },
  { type: "school", name: "Riverside Academy", startDate: "03/01/26", endDate: "03/01/26", reportDate: "03/12/26" },
  { type: "school", name: "Riverside Elementary", startDate: "03/31/26", endDate: "03/17/26", reportDate: "03/11/26" },
  {
    type: "school",
    name: "Oakwood Primary",
    startDate: "04/15/26",
    endDate: "04/02/26",
    reportDate: "03/10/26",
    tags: [
      { label: "Private", style: "private" },
      { label: "Oakwood Private Academy", style: "association" },
    ],
  },
  {
    type: "school",
    name: "Pinehill Preparatory",
    startDate: "05/05/26",
    endDate: "04/18/26",
    reportDate: "03/09/26",
    tags: [
      { label: "Private", style: "private" },
      { label: "Pinehill Education Group", style: "association" },
    ],
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function DataExportPage() {
  const [district, setDistrict] = useState("");
  const [school, setSchool] = useState("");
  const [teacher, setTeacher] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [grade, setGrade] = useState("");
  const [userRole, setUserRole] = useState("");

  const schoolOptions = district ? (SCHOOLS_BY_DISTRICT[district] ?? []) : [];
  const teacherOptions = school ? (TEACHERS_BY_SCHOOL[school] ?? []) : [];

  function handleDistrictChange(val: string) {
    setDistrict(val);
    setSchool("");
    setTeacher("");
  }

  function handleSchoolChange(val: string) {
    setSchool(val);
    setTeacher("");
  }

  return (
    <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 relative">
<h1 className="font-outfit font-semibold text-xl sm:text-2xl text-[#121212] leading-5 mb-4 sm:mb-6 lg:mb-8">Data Export</h1>
<div className="flex flex-col gap-10">
      {/* ── Export Data Card ── */}
      <div className="bg-white rounded-2xl shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] sm:p-8 p-6 flex flex-col lg:flex-row gap-8">

        {/* Left: title + description */}
        <div className="lg:w-64 flex-shrink-0 flex flex-col gap-1">
          <h2 className="font-[Inter] font-bold text-xl sm:text-2xl text-[#121C28] leading-8">
            Export Data
          </h2>
          <p className="font-[Inter] font-normal sm:text-base text-sm text-[#434655] leading-[26px]">
            Select a School and date range<br className="hidden sm:block" />to generate Report.
          </p>
        </div>

        {/* Right: form */}
        <div className="flex-1 flex flex-col gap-5">
          <SelectField
            label="School District / Association"
            value={district}
            onChange={handleDistrictChange}
            options={DISTRICTS.map((d) => d.name)}
            placeholder="Select"
          />

          <SelectField
            label="School"
            value={school}
            onChange={handleSchoolChange}
            options={schoolOptions}
            // disabled={!district}
            placeholder={district ? "Select" : "Select a district first"}
          />

          <SelectField
            label="Teacher(s)"
            value={teacher}
            onChange={setTeacher}
            options={teacherOptions}
            // disabled={!school}
            placeholder={school ? "Select" : "Select a school first"}
          />

          <div className="flex flex-col sm:flex-row gap-5">
            <DateField label="Start Date" value={startDate} onChange={setStartDate} />
            <DateField label="End Date" value={endDate} onChange={setEndDate} />
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <SelectField
              label="Grades"
              value={grade}
              onChange={setGrade}
              options={GRADES}
              placeholder="Select"
            />
            <SelectField
              label="Users & Roles"
              value={userRole}
              onChange={setUserRole}
              options={USERS_AND_ROLES}
              placeholder="Select"
            />
          </div>

          <div>
            <button className="flex items-center gap-1.5 px-5 py-2 rounded-lg bg-[#0171F9] font-[Inter] font-semibold text-sm text-white leading-6 hover:bg-blue-700 transition-colors cursor-pointer">
              Export Data
            </button>
          </div>
        </div>
      </div>

      {/* ── Recent Data Export Table ── */}
      <div className="bg-white rounded-lg">
        <div className="px-5 py-6">
          <h2 className="font-[Outfit] font-semibold sm:text-2xl text-xl text-[#121212] leading-5">
            Recent Data Export
          </h2>
        </div>

        <div className="overflow-x-auto border-t border-[#E5E7EB]">
          <table className="w-full min-w-max">
            <thead>
              <tr className="border-y border-[#E5E7EB] bg-white">
                <th className="text-left px-5 py-3.5 font-[Inter] font-medium sm:text-sm  text-[12px] text-[#6F6C70] uppercase tracking-wide whitespace-nowrap">
                  School Name
                </th>
                <th className="text-left px-5 py-3.5 font-[Inter] font-medium sm:text-sm  text-[12px] text-[#6F6C70] uppercase tracking-wide whitespace-nowrap">
                  Start Date
                </th>
                <th className="text-left px-5 py-3.5 font-[Inter] font-medium sm:text-sm  text-[12px] text-[#6F6C70] uppercase tracking-wide whitespace-nowrap">
                  End Date
                </th>
                <th className="text-left px-5 py-3.5 font-[Inter] font-medium sm:text-sm  text-[12px] text-[#6F6C70] uppercase tracking-wide whitespace-nowrap">
                  Report Date
                </th>
                <th className="text-left px-5 py-3.5 font-[Inter] font-medium sm:text-sm  text-[12px] text-[#6F6C70] uppercase tracking-wide whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {recentExports.map((row, idx) => {
                if (row.type === "district") {
                  return (
                    <tr key={idx} className="border-b border-[#E5E7EB] bg-[#F8F9FB]">
                      <td className="px-5 py-3.5 whitespace-nowrap" colSpan={4}>
                        <div className="flex items-center gap-2.5">
                          <span className="font-[Inter] font-bold sm:text-md text-sm text-[#121212]">
                            {row.name}
                          </span>
                          <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-full bg-[#EFF6FF] font-[Inter] font-medium sm:text-[12px] text-[11px] text-[#0171F9]">
                            District
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-3.5 text-right whitespace-nowrap">
                        <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0171F9] font-[Inter] font-medium sm:text-sm text-white leading-6 whitespace-nowrap hover:bg-blue-700 transition-colors cursor-pointer text-xs">
                          <ExportAllBtnIcon />
                          Export All
                        </button>
                      </td>
                    </tr>
                  );
                }

                return (
                  <tr key={idx} className="border-b border-[#F2F4F7] bg-white hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-[17.5px] whitespace-nowrap">
                      <div className="flex flex-col gap-1.5">
                        <span className="font-[Inter] font-normal sm:text-[14px] text-[12px] text-[#030711] leading-5">
                          {row.name}
                        </span>
                        {row.tags && (
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {row.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="inline-flex items-center px-2 py-0.5 rounded border border-[#E5E7EB] font-[Inter] font-medium text-xs sm:text-sm text-[#6F6C70] bg-white"
                              >
                                {tag.label}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-[17.5px] font-[Inter] font-normal sm:text-[14px] text-[12px] text-[#030711] whitespace-nowrap">
                      {row.startDate}
                    </td>
                    <td className="px-5 py-[17.5px] font-[Inter] font-normal sm:text-[14px] text-[12px] text-[#030711] whitespace-nowrap">
                      {row.endDate}
                    </td>
                    <td className="px-5 py-[17.5px] font-[Inter] font-normal sm:text-[14px] text-[12px] text-[#030711] whitespace-nowrap">
                      {row.reportDate}
                    </td>
                    <td className="px-5 py-[17.5px] whitespace-nowrap">
                      <div className="flex items-center justify-start gap-3">
                        <ExportRowIcon />
                        <button className="flex items-center justify-center px-4 py-1 rounded-md border border-[#EFF0F2] bg-white font-[Inter] font-normal sm:text-[14px] text-[12px] text-black/80 tracking-[-0.2px] leading-6 whitespace-nowrap hover:bg-gray-50 transition-colors cursor-pointer">
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div></div>
    </main>
  );
}
