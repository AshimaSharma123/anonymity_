"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReportsModalOpen, setIsReportsModalOpen] = useState(false);
  const [identityCode, setIdentityCode] = useState("");
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openReportsModal = () => {
    setIsReportsModalOpen(true);
  };

  const closeReportsModal = () => {
    setIsReportsModalOpen(false);
    setIdentityCode("");
  };

  const handleSubmitIdentity = (e: React.FormEvent) => {
    e.preventDefault();
    if (identityCode.trim()) {
      localStorage.setItem("identityCode", identityCode);
      if (pathname != "/my-reports") {
       router.push(`/my-reports?identityCode=${identityCode}`);
      }else{
        setIsReportsModalOpen(false);
        setIdentityCode("");
        router.push(`/my-reports?identityCode=${identityCode}`);
      }
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-black/6">
        <div className="flex items-center justify-between h-[92px] max-w-[1440px] mx-auto px-6 sm:px-8">
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="Anonymity">
            <Image src="/logo.svg" height={150} width={150} alt="Logo" />
          </Link>

          <nav className="hidden sm:flex items-center gap-10">
            <Link href="/" className="font-inter text-[15px] font-normal text-[#121212] hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/submit-report" className="font-inter text-[15px] font-normal text-[#121212] hover:text-blue-600 transition-colors">Submit Report</Link>
            <Link href="/browse-school" className="font-inter text-[15px] font-normal text-[#121212] hover:text-blue-600 transition-colors">Browse School</Link>
            <button onClick={() => {  openReportsModal()  }} className="font-inter text-[15px] font-normal text-[#121212] hover:text-blue-600 transition-colors cursor-pointer">My Reports</button>
          </nav>

          <div className="flex items-center gap-4 flex-shrink-0">
            <button
              onClick={toggleMenu}
              className="sm:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className={`w-6 h-0.5 bg-[#121212] transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
              <div className={`w-6 h-0.5 bg-[#121212] transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></div>
              <div className={`w-6 h-0.5 bg-[#121212] transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
            </button>

            {/* Desktop Sign In Button */}
            {session && session.user ?
              <>
                <button onClick={() => signOut()} className="cursor-pointer hidden sm:flex items-center gap-2 px-6 py-3 bg-[#0171F9] text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.0013 1.33337H12.0013C12.7346 1.33337 13.3346 1.93337 13.3346 2.66671V13.3334C13.3346 14.0667 12.7346 14.6667 12.0013 14.6667H6.0013C5.26797 14.6667 4.66797 14.0667 4.66797 13.3334V12.6667C4.66797 12.4899 4.73821 12.3203 4.86323 12.1953C4.98826 12.0703 5.15782 12 5.33464 12C5.51145 12 5.68102 12.0703 5.80604 12.1953C5.93106 12.3203 6.0013 12.4899 6.0013 12.6667V13.3334H12.0013V2.66671H6.0013V3.33337C6.0013 3.51019 5.93106 3.67975 5.80604 3.80478C5.68102 3.9298 5.51145 4.00004 5.33464 4.00004C5.15782 4.00004 4.98826 3.9298 4.86323 3.80478C4.73821 3.67975 4.66797 3.51019 4.66797 3.33337V2.66671C4.66797 1.93337 5.26797 1.33337 6.0013 1.33337Z" fill="white" />
                    <path d="M7.19667 10.8633C7.45667 11.1233 7.87667 11.1233 8.13667 10.8633L10.5287 8.47129C10.6536 8.34628 10.7239 8.17674 10.7239 7.99996C10.7239 7.82319 10.6536 7.65365 10.5287 7.52863L8.13667 5.13663C8.00994 5.02209 7.84405 4.96062 7.67329 4.96493C7.50252 4.96924 7.33995 5.039 7.21916 5.15979C7.09837 5.28057 7.02862 5.44315 7.02431 5.61392C7.02 5.78468 7.08146 5.95057 7.196 6.07729L8.44667 7.33329H2.66667C2.48986 7.33329 2.32029 7.40353 2.19526 7.52856C2.07024 7.65358 2 7.82315 2 7.99996C2 8.17677 2.07024 8.34634 2.19526 8.47137C2.32029 8.59639 2.48986 8.66663 2.66667 8.66663H8.44667L7.196 9.92263C7.07172 10.0477 7.00202 10.2168 7.00214 10.3931C7.00226 10.5694 7.07221 10.7384 7.19667 10.8633Z" fill="white" />
                  </svg>Sign Out
                </button>
                <Link href="/admin/dashboard" className="cursor-pointer hidden sm:flex items-center gap-2 px-6 py-3 bg-[#0171F9] text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.88889 5.33333V0H16V5.33333H8.88889ZM0 8.88889V0H7.11111V8.88889H0ZM8.88889 16V7.11111H16V16H8.88889ZM0 16V10.6667H7.11111V16H0ZM1.77778 7.11111H5.33333V1.77778H1.77778V7.11111ZM10.6667 14.2222H14.2222V8.88889H10.6667V14.2222ZM10.6667 3.55556H14.2222V1.77778H10.6667V3.55556ZM1.77778 14.2222H5.33333V12.4444H1.77778V14.2222Z" fill="white" />
                  </svg>
                  Dashboard
                </Link>
              </>

              :
              <Link href="/login" className="hidden sm:flex items-center gap-2 px-6 py-3 bg-[#0171F9] text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.0013 1.33337H12.0013C12.7346 1.33337 13.3346 1.93337 13.3346 2.66671V13.3334C13.3346 14.0667 12.7346 14.6667 12.0013 14.6667H6.0013C5.26797 14.6667 4.66797 14.0667 4.66797 13.3334V12.6667C4.66797 12.4899 4.73821 12.3203 4.86323 12.1953C4.98826 12.0703 5.15782 12 5.33464 12C5.51145 12 5.68102 12.0703 5.80604 12.1953C5.93106 12.3203 6.0013 12.4899 6.0013 12.6667V13.3334H12.0013V2.66671H6.0013V3.33337C6.0013 3.51019 5.93106 3.67975 5.80604 3.80478C5.68102 3.9298 5.51145 4.00004 5.33464 4.00004C5.15782 4.00004 4.98826 3.9298 4.86323 3.80478C4.73821 3.67975 4.66797 3.51019 4.66797 3.33337V2.66671C4.66797 1.93337 5.26797 1.33337 6.0013 1.33337Z" fill="white" />
                  <path d="M7.19667 10.8633C7.45667 11.1233 7.87667 11.1233 8.13667 10.8633L10.5287 8.47129C10.6536 8.34628 10.7239 8.17674 10.7239 7.99996C10.7239 7.82319 10.6536 7.65365 10.5287 7.52863L8.13667 5.13663C8.00994 5.02209 7.84405 4.96062 7.67329 4.96493C7.50252 4.96924 7.33995 5.039 7.21916 5.15979C7.09837 5.28057 7.02862 5.44315 7.02431 5.61392C7.02 5.78468 7.08146 5.95057 7.196 6.07729L8.44667 7.33329H2.66667C2.48986 7.33329 2.32029 7.40353 2.19526 7.52856C2.07024 7.65358 2 7.82315 2 7.99996C2 8.17677 2.07024 8.34634 2.19526 8.47137C2.32029 8.59639 2.48986 8.66663 2.66667 8.66663H8.44667L7.196 9.92263C7.07172 10.0477 7.00202 10.2168 7.00214 10.3931C7.00226 10.5694 7.07221 10.7384 7.19667 10.8633Z" fill="white" />
                </svg>
                <span>Sign In</span>
              </Link>}
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <nav className={`sm:hidden fixed top-[92px] left-0 right-0 bg-white border-b border-black/6 z-40 origin-top transition-all duration-300 ${isMenuOpen
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-95 pointer-events-none"
          }`}>
          <div className="shadow-lg max-w-[1440px] mx-auto px-6 py-4 flex flex-col gap-3">
            <Link
              href="/"
              onClick={closeMenu}
              className="font-inter text-[15px] font-normal text-[#121212] hover:text-blue-600 transition-colors py-2"
            >
              Home
            </Link>
            <Link
              href="/submit-report"
              onClick={closeMenu}
              className="font-inter text-[15px] font-normal text-[#121212] hover:text-blue-600 transition-colors py-2"
            >
              Submit Report
            </Link>
            <Link
              href="/browse-school"
              onClick={closeMenu}
              className="font-inter text-[15px] font-normal text-[#121212] hover:text-blue-600 transition-colors py-2"
            >
              Browse School
            </Link>
            <button
              onClick={() => {
                closeMenu();
                openReportsModal();
              }}
              className="font-inter text-[15px] font-normal text-[#121212] hover:text-blue-600 transition-colors py-2 text-left cursor-pointer"
            >
              View Reports
            </button>
            <div className="border-t border-black/6 pt-3 mt-2">
              {session && session.user ? <div className="flex flex-row w-full gap-[10px]">
                <button
                  onClick={() => signOut()}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#0171F9] text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.0013 1.33337H12.0013C12.7346 1.33337 13.3346 1.93337 13.3346 2.66671V13.3334C13.3346 14.0667 12.7346 14.6667 12.0013 14.6667H6.0013C5.26797 14.6667 4.66797 14.0667 4.66797 13.3334V12.6667C4.66797 12.4899 4.73821 12.3203 4.86323 12.1953C4.98826 12.0703 5.15782 12 5.33464 12C5.51145 12 5.68102 12.0703 5.80604 12.1953C5.93106 12.3203 6.0013 12.4899 6.0013 12.6667V13.3334H12.0013V2.66671H6.0013V3.33337C6.0013 3.51019 5.93106 3.67975 5.80604 3.80478C5.68102 3.9298 5.51145 4.00004 5.33464 4.00004C5.15782 4.00004 4.98826 3.9298 4.86323 3.80478C4.73821 3.67975 4.66797 3.51019 4.66797 3.33337V2.66671C4.66797 1.93337 5.26797 1.33337 6.0013 1.33337Z" fill="white" />
                    <path d="M7.19667 10.8633C7.45667 11.1233 7.87667 11.1233 8.13667 10.8633L10.5287 8.47129C10.6536 8.34628 10.7239 8.17674 10.7239 7.99996C10.7239 7.82319 10.6536 7.65365 10.5287 7.52863L8.13667 5.13663C8.00994 5.02209 7.84405 4.96062 7.67329 4.96493C7.50252 4.96924 7.33995 5.039 7.21916 5.15979C7.09837 5.28057 7.02862 5.44315 7.02431 5.61392C7.02 5.78468 7.08146 5.95057 7.196 6.07729L8.44667 7.33329H2.66667C2.48986 7.33329 2.32029 7.40353 2.19526 7.52856C2.07024 7.65358 2 7.82315 2 7.99996C2 8.17677 2.07024 8.34634 2.19526 8.47137C2.32029 8.59639 2.48986 8.66663 2.66667 8.66663H8.44667L7.196 9.92263C7.07172 10.0477 7.00202 10.2168 7.00214 10.3931C7.00226 10.5694 7.07221 10.7384 7.19667 10.8633Z" fill="white" />
                  </svg>
                  <span>Sign Out</span>

                </button>
                <Link
                  href="/admin/dashboard"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#0171F9] text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.0013 1.33337H12.0013C12.7346 1.33337 13.3346 1.93337 13.3346 2.66671V13.3334C13.3346 14.0667 12.7346 14.6667 12.0013 14.6667H6.0013C5.26797 14.6667 4.66797 14.0667 4.66797 13.3334V12.6667C4.66797 12.4899 4.73821 12.3203 4.86323 12.1953C4.98826 12.0703 5.15782 12 5.33464 12C5.51145 12 5.68102 12.0703 5.80604 12.1953C5.93106 12.3203 6.0013 12.4899 6.0013 12.6667V13.3334H12.0013V2.66671H6.0013V3.33337C6.0013 3.51019 5.93106 3.67975 5.80604 3.80478C5.68102 3.9298 5.51145 4.00004 5.33464 4.00004C5.15782 4.00004 4.98826 3.9298 4.86323 3.80478C4.73821 3.67975 4.66797 3.51019 4.66797 3.33337V2.66671C4.66797 1.93337 5.26797 1.33337 6.0013 1.33337Z" fill="white" />
                    <path d="M7.19667 10.8633C7.45667 11.1233 7.87667 11.1233 8.13667 10.8633L10.5287 8.47129C10.6536 8.34628 10.7239 8.17674 10.7239 7.99996C10.7239 7.82319 10.6536 7.65365 10.5287 7.52863L8.13667 5.13663C8.00994 5.02209 7.84405 4.96062 7.67329 4.96493C7.50252 4.96924 7.33995 5.039 7.21916 5.15979C7.09837 5.28057 7.02862 5.44315 7.02431 5.61392C7.02 5.78468 7.08146 5.95057 7.196 6.07729L8.44667 7.33329H2.66667C2.48986 7.33329 2.32029 7.40353 2.19526 7.52856C2.07024 7.65358 2 7.82315 2 7.99996C2 8.17677 2.07024 8.34634 2.19526 8.47137C2.32029 8.59639 2.48986 8.66663 2.66667 8.66663H8.44667L7.196 9.92263C7.07172 10.0477 7.00202 10.2168 7.00214 10.3931C7.00226 10.5694 7.07221 10.7384 7.19667 10.8633Z" fill="white" />
                  </svg>
                  <span>Dashboard</span>
                </Link>
              </div> :
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-[#0171F9] text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.0013 1.33337H12.0013C12.7346 1.33337 13.3346 1.93337 13.3346 2.66671V13.3334C13.3346 14.0667 12.7346 14.6667 12.0013 14.6667H6.0013C5.26797 14.6667 4.66797 14.0667 4.66797 13.3334V12.6667C4.66797 12.4899 4.73821 12.3203 4.86323 12.1953C4.98826 12.0703 5.15782 12 5.33464 12C5.51145 12 5.68102 12.0703 5.80604 12.1953C5.93106 12.3203 6.0013 12.4899 6.0013 12.6667V13.3334H12.0013V2.66671H6.0013V3.33337C6.0013 3.51019 5.93106 3.67975 5.80604 3.80478C5.68102 3.9298 5.51145 4.00004 5.33464 4.00004C5.15782 4.00004 4.98826 3.9298 4.86323 3.80478C4.73821 3.67975 4.66797 3.51019 4.66797 3.33337V2.66671C4.66797 1.93337 5.26797 1.33337 6.0013 1.33337Z" fill="white" />
                    <path d="M7.19667 10.8633C7.45667 11.1233 7.87667 11.1233 8.13667 10.8633L10.5287 8.47129C10.6536 8.34628 10.7239 8.17674 10.7239 7.99996C10.7239 7.82319 10.6536 7.65365 10.5287 7.52863L8.13667 5.13663C8.00994 5.02209 7.84405 4.96062 7.67329 4.96493C7.50252 4.96924 7.33995 5.039 7.21916 5.15979C7.09837 5.28057 7.02862 5.44315 7.02431 5.61392C7.02 5.78468 7.08146 5.95057 7.196 6.07729L8.44667 7.33329H2.66667C2.48986 7.33329 2.32029 7.40353 2.19526 7.52856C2.07024 7.65358 2 7.82315 2 7.99996C2 8.17677 2.07024 8.34634 2.19526 8.47137C2.32029 8.59639 2.48986 8.66663 2.66667 8.66663H8.44667L7.196 9.92263C7.07172 10.0477 7.00202 10.2168 7.00214 10.3931C7.00226 10.5694 7.07221 10.7384 7.19667 10.8633Z" fill="white" />
                  </svg>
                  <span>Sign In</span>
                </Link>}
            </div>
          </div>
        </nav>
      </header>

      {/* Reports Modal - Outside Header */}
      {isReportsModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 relative">
            {/* Close Button */}
            <button
              onClick={closeReportsModal}
              className="cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>



            {/* Modal Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#121212] mb-2">View Reports</h2>
              <p className="text-gray-600 text-sm">Enter your identity code to access your reports history</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmitIdentity} className="space-y-4">
              <div>
                <label htmlFor="identity-code" className="block text-sm font-medium text-[#121212] mb-2">
                  Identity Code
                </label>
                <input
                  id="identity-code"
                  type="text"
                  value={identityCode}
                  onChange={(e) => setIdentityCode(e.target.value)}
                  placeholder="Enter your identity code"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeReportsModal}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="cursor-pointer flex-1 px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!identityCode.trim()}
                >
                  View Reports
                </button>
              </div>
            </form>


          </div>
        </div>
      )}
    </>
  );
}
