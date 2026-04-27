"use client";

import { useState } from "react";

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 3.99979C6.93913 3.99979 5.92172 4.42122 5.17157 5.17136C4.42143 5.92151 4 6.93892 4 7.99979C4 9.06066 4.42143 10.0781 5.17157 10.8282C5.92172 11.5784 6.93913 11.9998 8 11.9998C9.06087 11.9998 10.0783 11.5784 10.8284 10.8282C11.5786 10.0781 12 9.06066 12 7.99979C12 6.93892 11.5786 5.92151 10.8284 5.17136C10.0783 4.42122 9.06087 3.99979 8 3.99979ZM2 7.99979C1.99988 7.05549 2.22264 6.1245 2.65017 5.28253C3.0777 4.44056 3.69792 3.71139 4.4604 3.15432C5.22287 2.59724 6.10606 2.228 7.03815 2.07662C7.97023 1.92524 8.92488 1.996 9.82446 2.28314C10.724 2.57028 11.5432 3.06569 12.2152 3.72909C12.8872 4.39248 13.3931 5.20512 13.6919 6.10092C13.9906 6.99672 14.0737 7.95038 13.9343 8.88434C13.795 9.8183 13.4372 10.7062 12.89 11.4758L17.707 16.2928C17.8892 16.4814 17.99 16.734 17.9877 16.9962C17.9854 17.2584 17.8802 17.5092 17.6948 17.6946C17.5094 17.88 17.2586 17.9852 16.9964 17.9875C16.7342 17.9897 16.4816 17.8889 16.293 17.7068L11.477 12.8908C10.5794 13.5291 9.52335 13.9079 8.42468 13.9859C7.326 14.0639 6.22707 13.8379 5.2483 13.3328C4.26953 12.8276 3.44869 12.0628 2.87572 11.1221C2.30276 10.1815 1.99979 9.10122 2 7.99979Z"
      fill="#323152"
    />
  </svg>
);

const AddIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 11H4C3.71667 11 3.47934 10.904 3.288 10.712C3.09667 10.52 3.00067 10.2827 3 10C2.99934 9.71733 3.09534 9.48 3.288 9.288C3.48067 9.096 3.718 9 4 9H9V4C9 3.71667 9.096 3.47934 9.288 3.288C9.48 3.09667 9.71733 3.00067 10 3C10.2827 2.99934 10.5203 3.09534 10.713 3.288C10.9057 3.48067 11.0013 3.718 11 4V9H16C16.2833 9 16.521 9.096 16.713 9.288C16.905 9.48 17.0007 9.71733 17 10C16.9993 10.2827 16.9033 10.5203 16.712 10.713C16.5207 10.9057 16.2833 11.0013 16 11H11V16C11 16.2833 10.904 16.521 10.712 16.713C10.52 16.905 10.2827 17.0007 10 17C9.71733 16.9993 9.48 16.9033 9.288 16.712C9.096 16.5207 9 16.2833 9 16V11Z"
      fill="white"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.0001 18.9835L10.0585 25.9251C9.79874 26.1849 9.46819 26.3147 9.0668 26.3147C8.66541 26.3147 8.33485 26.1849 8.07513 25.9251C7.81541 25.6654 7.68555 25.3349 7.68555 24.9335C7.68555 24.5321 7.81541 24.2015 8.07513 23.9418L15.0168 17.0001L8.07513 10.0585C7.81541 9.79874 7.68555 9.46819 7.68555 9.0668C7.68555 8.66541 7.81541 8.33485 8.07513 8.07513C8.33485 7.81541 8.66541 7.68555 9.0668 7.68555C9.46819 7.68555 9.79874 7.81541 10.0585 8.07513L17.0001 15.0168L23.9418 8.07513C24.2015 7.81541 24.5321 7.68555 24.9335 7.68555C25.3349 7.68555 25.6654 7.81541 25.9251 8.07513C26.1849 8.33485 26.3147 8.66541 26.3147 9.0668C26.3147 9.46819 26.1849 9.79874 25.9251 10.0585L18.9835 17.0001L25.9251 23.9418C26.1849 24.2015 26.3147 24.5321 26.3147 24.9335C26.3147 25.3349 26.1849 25.6654 25.9251 25.9251C25.6654 26.1849 25.3349 26.3147 24.9335 26.3147C24.5321 26.3147 24.2015 26.1849 23.9418 25.9251L17.0001 18.9835Z"
      fill="#212121"
    />
  </svg>
);

const users = [
  { id: 1, name: "James", email: "James@gmail.com", role: "User" },
  { id: 2, name: "Tony", email: "Tony@gmail.com", role: "User" },
  { id: 3, name: "Sophia", email: "Sophia@gmail.com", role: "User" },
  { id: 4, name: "Liam", email: "Liam@gmail.com", role: "User" },
  { id: 5, name: "Emma", email: "Emma@gmail.com", role: "User" },
];

export default function UsersRolesPage() {
  const [search, setSearch] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase())
  );

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex flex-1 overflow-hidden relative">
      <main className="flex-1 overflow-y-auto p-8">
        {/* Page header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-outfit font-semibold text-[28px] text-[#121212] leading-5">
            Users &amp; Roles
          </h1>
          <button
            onClick={openSidebar}
            className="flex cursor-pointer items-center gap-1.5 px-[17px] py-3 rounded-lg bg-[#0171F9] text-white font-inter font-semibold text-base leading-6 shadow-sm hover:bg-[#0562d8] transition-colors"
          >
            <AddIcon />
            Add Role
          </button>
        </div>

        {/* Table card */}
        <div className="bg-white rounded-lg overflow-hidden">
          {/* Search bar */}
          <div className="px-6 py-5 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-2.5 w-full max-w-[340px] px-4 py-2.5 rounded-lg border border-[#E5E7EB] bg-white">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent font-inter text-sm text-[#030711] placeholder-[#9CA3AF] outline-none"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full table-fixed">
              <colgroup>
                <col className="w-auto" />
                <col className="w-[200px]" />
                <col className="w-[120px]" />
                <col className="w-[200px]" />
              </colgroup>
              <thead>
                <tr className="border-y border-[#E5E7EB] bg-white">
                  <th className="text-left px-5 py-[14px] font-inter font-medium text-sm text-[#6F6C70] uppercase whitespace-nowrap">
                    User Name
                  </th>
                  <th className="text-left px-3 py-[14px] font-inter font-medium text-sm text-[#6F6C70] uppercase whitespace-nowrap">
                    Email
                  </th>
                  <th className="text-left px-3 py-[14px] font-inter font-medium text-sm text-[#6F6C70] uppercase whitespace-nowrap">
                    Role
                  </th>
                  <th className="text-left px-3 py-[14px] font-inter font-medium text-sm text-[#6F6C70] uppercase whitespace-nowrap">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((user) => (
                  <tr key={user.id} className="border-b border-[#F2F4F7] hover:bg-[#FAFAFA] transition-colors">
                    <td className="h-[68px] px-5 py-[17.5px] align-middle">
                      <span className="font-inter font-normal text-[14px] text-[#030711] leading-5">
                        {user.name}
                      </span>
                    </td>
                    <td className="h-[68px] px-3 py-[17.5px] align-middle">
                      <span className="font-inter font-normal text-[14px] text-[#030711] leading-5">
                        {user.email}
                      </span>
                    </td>
                    <td className="h-[68px] px-3 py-[17.5px] align-middle">
                      <span className="font-inter font-normal text-[14px] text-[#030711] leading-5">
                        {user.role}
                      </span>
                    </td>
                    <td className="h-[68px] px-3 py-[17.5px] align-middle">
                      <div className="flex items-center gap-2">
                        <button className="px-4 py-1.5 rounded border border-[#E5E7EB] bg-white font-inter font-normal text-md text-[#030711] hover:bg-gray-50 transition-colors">
                          Edit
                        </button>
                        <button className="px-4 py-1.5 rounded border border-[#E5E7EB] bg-white font-inter font-normal text-md text-[#030711] hover:bg-gray-50 transition-colors">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-5 py-10 text-center font-inter text-sm text-[#6F6C70]">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Backdrop overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Add Role right sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-[524px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-6 pt-8 pb-6">
          <h2 className="font-inter font-semibold text-[32px] text-[#212121] leading-6">
            Add Role
          </h2>
          <button
            onClick={closeSidebar}
            className="cursor-pointer flex items-center justify-center hover:opacity-70 transition-opacity"
            aria-label="Close sidebar"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="h-px bg-black/10 mx-0" />

        {/* Form fields */}
        <div className="flex flex-col gap-4 px-6 pt-8">
          {/* User Name field */}
          <div className="flex flex-col gap-0.5">
            <label className="font-outfit font-medium text-base text-[#212121] leading-6">
              User Name
            </label>
            <input
              type="text"
              placeholder="Enter User Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="h-12 px-4 rounded-lg bg-[#F3F4F5] font-inter font-normal text-sm text-[#6B7280] placeholder:text-[#6B7280] outline-none focus:ring-2 focus:ring-[#0171F9]/30 transition"
            />
          </div>

          {/* Email Address field */}
          <div className="flex flex-col gap-0.5">
            <label className="font-outfit font-medium text-base text-[#212121] leading-6">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              className="h-12 px-4 rounded-lg bg-[#F3F4F5] font-inter font-normal text-sm text-[#6B7280] placeholder:text-[#6B7280] outline-none focus:ring-2 focus:ring-[#0171F9]/30 transition"
            />
          </div>

          {/* Create Role button */}
          <button className="flex items-center justify-center mt-8 px-5 py-4 rounded-lg bg-[#0171F9] font-inter font-semibold text-md text-white leading-6 hover:bg-[#0161dd] transition-colors cursor-pointer">
            Create Role
          </button>
        </div>
      </aside>
    </div>
  );
}
