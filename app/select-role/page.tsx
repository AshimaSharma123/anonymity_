"use client";

import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import PageLoader from "@/app/components/PageLoader";

export default function SelectRolePage() {
  const { data: session, status, update } = useSession();
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === "loading") {
      return;
    }

    if (status === "unauthenticated") {
      router.replace("/login");
      return;
    }

    const role = session?.user?.role;

    if (role === "admin") {
      router.replace("/admin/dashboard");
      return;
    }

    if (role === "guest_teacher") {
      router.replace("/my-reports");
    }
  }, [status, session, router]);

  if (status === "loading") {
    return <PageLoader />;
  }

  if (status === "unauthenticated" || session?.user?.role) {
    return null;
  }

  const handleRoleSelect = async () => {
    if (!selectedRole) {
      toast.error("Please select a role");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/users/update-role", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: selectedRole,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to update role");
        setLoading(false);
        return;
      }

      await update({ role: selectedRole });

      toast.success("Role selected successfully");
      router.replace(
        selectedRole === "admin" ? "/admin/dashboard" : "/my-reports"
      );
    } catch (error) {
      console.error("Error updating role:", error);
      toast.error("Failed to update role");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F3F4F7] flex flex-col items-center justify-center px-4 py-12">
      <div className="flex flex-col items-center gap-3 mb-6">
        <Link href={"/"}>
          <Image src="/logo.svg" height={150} width={150} alt="Logo" />
        </Link>
        <p className="font-inter text-sm text-[#737786] text-center">
          Your identity stays private - always.
        </p>
      </div>

      <div className="w-full max-w-[512px] flex items-start gap-3 px-4 py-[17px] rounded-[6px] border border-[#BFDCFD] bg-[#EFF6FF] mb-6">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0 mt-0.5"
        >
          <path
            d="M15 9.75034C15 13.5003 12.375 15.3753 9.255 16.4628C9.09162 16.5182 8.91415 16.5156 8.7525 16.4553C5.625 15.3753 3 13.5003 3 9.75034V4.50034C3 4.0864 3.33606 3.75034 3.75 3.75034C5.25 3.75034 7.125 2.85034 8.43 1.71034C8.75826 1.42989 9.24174 1.42989 9.57 1.71034C10.8825 2.85784 12.75 3.75034 14.25 3.75034C14.6639 3.75034 15 4.0864 15 4.50034V9.75034"
            stroke="#0171F9"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.75 9L8.25 10.5L11.25 7.5"
            stroke="#0171F9"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="font-inter text-sm text-[#0171F9] leading-[23px]">
          Reports you submit are always{" "}
          <strong className="font-bold">100% anonymous</strong>. Your name is
          never attached.
        </p>
      </div>

      <div className="w-full max-w-[512px] bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-8 pt-7 pb-9 flex flex-col gap-6">
          <div>
            <h2 className="font-inter text-xl font-bold text-[#212121] mb-2">
              Welcome, {session?.user?.name}!
            </h2>
            <p className="font-inter text-sm text-[#737786]">
              Please select your role to continue
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => setSelectedRole("admin")}
              className={`p-4 rounded-lg border-2 transition-all cursor-pointer text-left ${
                selectedRole === "admin"
                  ? "border-[#0171F9] bg-[#EFF6FF]"
                  : "border-[#E5E7EB] bg-white hover:border-[#0171F9]/50"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-[Outfit] text-base font-medium text-[#212121]">
                    Super Admin
                  </h3>
                  <p className="font-inter text-sm text-[#737786] mt-1">
                    Manage and review all reports
                  </p>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedRole === "admin"
                      ? "border-[#0171F9] bg-[#0171F9]"
                      : "border-[#E5E7EB]"
                  }`}
                >
                  {selectedRole === "admin" && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              </div>
            </button>

            <button
              onClick={() => setSelectedRole("guest_teacher")}
              className={`p-4 rounded-lg border-2 transition-all cursor-pointer text-left ${
                selectedRole === "guest_teacher"
                  ? "border-[#0171F9] bg-[#EFF6FF]"
                  : "border-[#E5E7EB] bg-white hover:border-[#0171F9]/50"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-[Outfit] text-base font-medium text-[#212121]">
                    Guest Teacher
                  </h3>
                  <p className="font-inter text-sm text-[#737786] mt-1">
                    Submit and view your reports
                  </p>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedRole === "guest_teacher"
                      ? "border-[#0171F9] bg-[#0171F9]"
                      : "border-[#E5E7EB]"
                  }`}
                >
                  {selectedRole === "guest_teacher" && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              </div>
            </button>
          </div>

          <button
            onClick={handleRoleSelect}
            disabled={loading || !selectedRole}
            className="w-full py-3 rounded-lg bg-[#0171F9] text-white font-inter text-base font-semibold leading-6 text-center hover:bg-blue-600 active:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? "Please wait..." : "Continue"}
          </button>

          <div className="flex items-center justify-center gap-2">
            <span className="font-inter text-[13px] font-medium text-[#555968]/70">
              Want to sign in differently?
            </span>
            <button
              type="button"
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="font-inter text-[13px] font-semibold text-[#0171F9] hover:underline cursor-pointer"
            >
              Go to login
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
