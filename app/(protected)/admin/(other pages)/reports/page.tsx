"use client";

import { formatDate } from "@/lib/function";
import { ApproveIcon, ChevronLeftIcon, ChevronRightIcon, RejectIcon } from "@/lib/icons";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

// ─── Icon Components ──────────────────────────────────────────────────────────

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M8 3.99979C6.93913 3.99979 5.92172 4.42122 5.17157 5.17136C4.42143 5.92151 4 6.93892 4 7.99979C4 9.06066 4.42143 10.0781 5.17157 10.8282C5.92172 11.5784 6.93913 11.9998 8 11.9998C9.06087 11.9998 10.0783 11.5784 10.8284 10.8282C11.5786 10.0781 12 9.06066 12 7.99979C12 6.93892 11.5786 5.92151 10.8284 5.17136C10.0783 4.42122 9.06087 3.99979 8 3.99979ZM2 7.99979C1.99988 7.05549 2.22264 6.1245 2.65017 5.28253C3.0777 4.44056 3.69792 3.71139 4.4604 3.15432C5.22287 2.59724 6.10606 2.228 7.03815 2.07662C7.97023 1.92524 8.92488 1.996 9.82446 2.28314C10.724 2.57028 11.5432 3.06569 12.2152 3.72909C12.8872 4.39248 13.3931 5.20512 13.6919 6.10092C13.9906 6.99672 14.0737 7.95038 13.9343 8.88434C13.795 9.8183 13.4372 10.7062 12.89 11.4758L17.707 16.2928C17.8892 16.4814 17.99 16.734 17.9877 16.9962C17.9854 17.2584 17.8802 17.5092 17.6948 17.6946C17.5094 17.88 17.2586 17.9852 16.9964 17.9875C16.7342 17.9897 16.4816 17.8889 16.293 17.7068L11.477 12.8908C10.5794 13.5291 9.52335 13.9079 8.42468 13.9859C7.326 14.0639 6.22707 13.8379 5.2483 13.3328C4.26953 12.8276 3.44869 12.0628 2.87572 11.1221C2.30276 10.1815 1.99979 9.10122 2 7.99979Z" fill="#323152" />
  </svg>
);

const SentimentIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <g clipPath="url(#clip0_sentiment)">
      <path d="M9.53792 6C9.66836 6.20146 9.84979 6.3676 10.0652 6.48277C10.2805 6.59795 10.5227 6.65839 10.769 6.65839C11.0152 6.65839 11.2574 6.59795 11.4728 6.48277C11.6881 6.3676 11.8696 6.20146 12 6M6.46144 6C6.33097 6.20132 6.14956 6.36733 5.93426 6.48242C5.71897 6.59751 5.47687 6.65789 5.23072 6.65789C4.98457 6.65789 4.74247 6.59751 4.52718 6.48242C4.31188 6.36733 4.13047 6.20132 4 6M4.30752 9.62581C4.61131 10.3289 5.12406 10.9296 5.78115 11.352C6.43825 11.7745 7.21029 12 8 12C8.78971 12 9.56175 11.7745 10.2188 11.352C10.8759 10.9296 11.3887 10.3289 11.6925 9.62581" stroke="#191919" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.00033 15.3337C12.0503 15.3337 15.3337 12.0503 15.3337 8.00033C15.3337 3.95033 12.0503 0.666992 8.00033 0.666992C3.95033 0.666992 0.666992 3.95033 0.666992 8.00033C0.666992 12.0503 3.95033 15.3337 8.00033 15.3337Z" stroke="#191919" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_sentiment"><rect width="16" height="16" fill="white" /></clipPath>
    </defs>
  </svg>
);

const FilterIcon = () => (
  <svg width="13" height="14" viewBox="0 0 13 14" fill="none">
    <path d="M12.3693 1.59682C12.3693 1.1779 12.3693 0.968438 12.287 0.80835C12.2155 0.667711 12.1013 0.553289 11.9609 0.481442C11.8008 0.399902 11.5913 0.399902 11.1724 0.399902H1.59706C1.17814 0.399902 0.968682 0.399902 0.808594 0.481442C0.667842 0.553162 0.553406 0.667598 0.481687 0.80835C0.400147 0.968438 0.400146 1.1779 0.400146 1.59682V2.14815C0.400146 2.33143 0.400146 2.42269 0.421092 2.50872C0.43941 2.58531 0.469706 2.65852 0.510861 2.72566C0.556494 2.80047 0.621576 2.86555 0.750245 2.99497L4.53774 6.78171C4.66716 6.91113 4.73224 6.97621 4.77787 7.05102C4.81926 7.11884 4.84919 7.19116 4.86764 7.26796C4.88858 7.35324 4.88858 7.44376 4.88858 7.62255V11.1804C4.88858 11.8215 4.88858 12.1424 5.02324 12.3354C5.08166 12.4189 5.15651 12.4895 5.24321 12.5431C5.32992 12.5966 5.42663 12.6318 5.52744 12.6466C5.76009 12.681 6.04735 12.5381 6.62037 12.2509L7.21883 11.9516C7.45971 11.832 7.5794 11.7721 7.66693 11.6823C7.74457 11.6031 7.8036 11.5075 7.83973 11.4026C7.88088 11.2844 7.88088 11.1497 7.88088 10.8812V7.62853C7.88088 7.44525 7.88088 7.35399 7.90182 7.26796C7.92014 7.19137 7.95044 7.11816 7.99159 7.05102C8.03648 6.97621 8.10156 6.91188 8.22873 6.78471L8.23172 6.78171L12.0192 2.99497C12.1479 2.86555 12.2122 2.80047 12.2586 2.72566C12.3 2.65784 12.3299 2.58552 12.3484 2.50872C12.3693 2.42419 12.3693 2.33292 12.3693 2.15413V1.59682Z" stroke="#191919" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M4.91753 4.91753C4.79251 5.04251 4.62297 5.11272 4.44619 5.11272C4.26942 5.11272 4.09988 5.04251 3.97486 4.91753L0.203526 1.14619C0.139852 1.08469 0.0890639 1.01113 0.0541246 0.929795C0.0191852 0.848459 0.000794382 0.760979 2.51709e-05 0.67246C-0.00074404 0.58394 0.0161239 0.496154 0.0496445 0.414223C0.0831651 0.332292 0.132667 0.257857 0.195262 0.195262C0.257857 0.132667 0.332292 0.0831648 0.414223 0.0496442C0.496154 0.0161236 0.58394 -0.00074404 0.67246 2.51714e-05C0.760979 0.000794382 0.848459 0.0191852 0.929795 0.0541246C1.01113 0.0890639 1.08469 0.139852 1.14619 0.203525L4.44619 3.50353L7.74619 0.203525C7.87193 0.0820866 8.04033 0.0148904 8.21513 0.0164093C8.38992 0.0179282 8.55713 0.0880407 8.68074 0.211646C8.80434 0.335252 8.87446 0.50246 8.87598 0.677258C8.87749 0.852056 8.8103 1.02046 8.68886 1.14619L4.91753 4.91753Z" fill="#1E1E1E" />
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M7.95881 12.625L15.0213 5.5625C15.188 5.39583 15.3824 5.3125 15.6046 5.3125C15.8269 5.3125 16.0213 5.39583 16.188 5.5625C16.3546 5.72917 16.438 5.92722 16.438 6.15667C16.438 6.38611 16.3546 6.58389 16.188 6.75L8.54214 14.4167C8.37548 14.5833 8.18103 14.6667 7.95881 14.6667C7.73659 14.6667 7.54214 14.5833 7.37548 14.4167L3.79214 10.8333C3.62548 10.6667 3.54548 10.4689 3.55214 10.24C3.55881 10.0111 3.64575 9.81306 3.81298 9.64583C3.9802 9.47861 4.17825 9.39528 4.40714 9.39583C4.63603 9.39639 4.83381 9.47972 5.00048 9.64583L7.95881 12.625Z" fill="#086047" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M9.99967 11.1668L5.91634 15.2502C5.76356 15.4029 5.56912 15.4793 5.33301 15.4793C5.0969 15.4793 4.90245 15.4029 4.74967 15.2502C4.5969 15.0974 4.52051 14.9029 4.52051 14.6668C4.52051 14.4307 4.5969 14.2363 4.74967 14.0835L8.83301 10.0002L4.74967 5.91683C4.5969 5.76405 4.52051 5.56961 4.52051 5.3335C4.52051 5.09738 4.5969 4.90294 4.74967 4.75016C4.90245 4.59738 5.0969 4.521 5.33301 4.521C5.56912 4.521 5.76356 4.59738 5.91634 4.75016L9.99967 8.8335L14.083 4.75016C14.2358 4.59738 14.4302 4.521 14.6663 4.521C14.9025 4.521 15.0969 4.59738 15.2497 4.75016C15.4025 4.90294 15.4788 5.09738 15.4788 5.3335C15.4788 5.56961 15.4025 5.76405 15.2497 5.91683L11.1663 10.0002L15.2497 14.0835C15.4025 14.2363 15.4788 14.4307 15.4788 14.6668C15.4788 14.9029 15.4025 15.0974 15.2497 15.2502C15.0969 15.4029 14.9025 15.4793 14.6663 15.4793C14.4302 15.4793 14.2358 15.4029 14.083 15.2502L9.99967 11.1668Z" fill="#991B1B" />
  </svg>
);

const XIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M6 7.27757L1.52852 11.749C1.36122 11.9163 1.14829 12 0.889734 12C0.631179 12 0.418251 11.9163 0.25095 11.749C0.0836498 11.5817 0 11.3688 0 11.1103C0 10.8517 0.0836498 10.6388 0.25095 10.4715L4.72243 6L0.25095 1.52852C0.0836498 1.36122 0 1.14829 0 0.889734C0 0.631179 0.0836498 0.418251 0.25095 0.25095C0.418251 0.0836498 0.631179 0 0.889734 0C1.14829 0 1.36122 0.0836498 1.52852 0.25095L6 4.72243L10.4715 0.25095C10.6388 0.0836498 10.8517 0 11.1103 0C11.3688 0 11.5817 0.0836498 11.749 0.25095C11.9163 0.418251 12 0.631179 12 0.889734C12 1.14829 11.9163 1.36122 11.749 1.52852L7.27757 6L11.749 10.4715C11.9163 10.6388 12 10.8517 12 11.1103C12 11.3688 11.9163 11.5817 11.749 11.749C11.5817 11.9163 11.3688 12 11.1103 12C10.8517 12 10.6388 11.9163 10.4715 11.749L6 7.27757Z" fill="#212121" />
  </svg>
);

const SchoolIcon = () => (

  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.59998 12.6001V5.8501L0.599976 6.69385V12.6001H3.59998ZM3.59998 12.6001H9.59998M3.59998 12.6001V2.60035M9.59998 12.6001V5.8501L12.6 6.69385V12.6001H9.59998ZM9.59998 12.6001V2.60035M11.1 3.6001L6.59998 0.600098L2.09998 3.6001M5.84998 4.3501H7.34998M5.84998 6.6001H7.34998" stroke="#5C5C5C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>

);

const AnonymousIcon = () => (
  <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
    <path d="M11.0003 10.8957C12.3323 10.8957 13.4163 9.81218 13.4163 8.48018C13.4163 7.14818 12.3323 6.06418 11.0003 6.06418C10.0863 6.06418 9.29883 6.58018 8.88833 7.33068H6.11183C5.70183 6.58018 4.91433 6.06418 4.00033 6.06418C2.66833 6.06418 1.58433 7.14818 1.58433 8.48018C1.58433 9.81218 2.66833 10.8952 4.00033 10.8952C5.33233 10.8952 6.41583 9.81218 6.41583 8.48018C6.41583 8.42868 6.40383 8.38118 6.40083 8.33018H8.59933C8.59633 8.38118 8.58433 8.42868 8.58433 8.48018C8.58526 9.12057 8.84013 9.73445 9.29304 10.1872C9.74596 10.6399 10.3599 10.895 11.0003 10.8957ZM11.0003 7.06418C11.7808 7.06418 12.4163 7.69918 12.4163 8.48018C12.4163 9.26118 11.7813 9.89518 11.0003 9.89518C10.2193 9.89518 9.58433 9.26068 9.58433 8.48018C9.58433 7.69968 10.2193 7.06418 11.0003 7.06418ZM4.00033 9.89568C3.21933 9.89568 2.58433 9.26068 2.58433 8.48018C2.58433 7.69968 3.21933 7.06418 4.00033 7.06418C4.78133 7.06418 5.41583 7.69918 5.41583 8.48018C5.41583 9.26118 4.78083 9.89568 4.00033 9.89568ZM14.6373 4.83968C13.8537 4.61688 13.0599 4.43101 12.2588 4.28268L11.4903 0.403183C11.4603 0.258183 11.3703 0.133183 11.2453 0.0631832C11.1814 0.0288753 11.1109 0.00846769 11.0385 0.00329765C10.9662 -0.00187239 10.8935 0.00831188 10.8253 0.0331832C8.68266 0.843186 6.318 0.843186 4.17533 0.0331832C4.10829 0.00697517 4.03624 -0.00393172 3.96444 0.00125846C3.89264 0.00644863 3.82291 0.0276049 3.76033 0.0631832C3.63033 0.133183 3.54033 0.258183 3.51033 0.403183L2.74183 4.28318C1.94056 4.43134 1.14668 4.61704 0.36283 4.83968C0.299645 4.85771 0.240633 4.88801 0.189167 4.92886C0.1377 4.96971 0.0947898 5.0203 0.0628881 5.07774C0.0309863 5.13518 0.0107191 5.19835 0.00324522 5.26363C-0.0042287 5.32891 0.00123719 5.39502 0.0193304 5.45818C0.0953304 5.72318 0.37233 5.87468 0.63783 5.80168C5.12286 4.51853 9.8778 4.51853 14.3628 5.80168C14.4887 5.83293 14.6219 5.81406 14.7341 5.74906C14.8464 5.68406 14.9291 5.578 14.9647 5.45325C15.0003 5.3285 14.986 5.19479 14.925 5.08033C14.8639 4.96587 14.7608 4.87959 14.6373 4.83968ZM3.79383 4.10768L4.38033 1.16318C6.4111 1.80318 8.58956 1.80318 10.6203 1.16318L11.2053 4.10718C8.74757 3.75243 6.25159 3.75292 3.79383 4.10768Z" fill="#0171F9" />
  </svg>
);

const ChatIcon = () => (
  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.6 7.26676C10.6 7.56145 10.4829 7.84406 10.2745 8.05244C10.0662 8.26081 9.78355 8.37788 9.48886 8.37788H2.8222L0.599976 10.6001V1.71121C0.599976 1.41652 0.717039 1.13391 0.925412 0.925535C1.13379 0.717161 1.4164 0.600098 1.71109 0.600098H9.48886C9.78355 0.600098 10.0662 0.717161 10.2745 0.925535C10.4829 1.13391 10.6 1.41652 10.6 1.71121V7.26676Z" stroke="#0171F9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BuildingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M5 14.5V7.75L2 8.59375V14.5H5ZM5 14.5H11M5 14.5V4.50025M11 14.5V7.75L14 8.59375V14.5H11ZM11 14.5V4.50025M12.5 5.5L8 2.5L3.5 5.5M7.25 6.25H8.75M7.25 8.5H8.75" stroke="#0171F9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M7.99996 8.66667C9.84091 8.66667 11.3333 7.17428 11.3333 5.33333C11.3333 3.49238 9.84091 2 7.99996 2C6.15901 2 4.66663 3.49238 4.66663 5.33333C4.66663 7.17428 6.15901 8.66667 7.99996 8.66667ZM7.99996 8.66667C9.41445 8.66667 10.771 9.22857 11.7712 10.2288C12.7714 11.229 13.3333 12.5855 13.3333 14M7.99996 8.66667C6.58547 8.66667 5.22892 9.22857 4.22872 10.2288C3.22853 11.229 2.66663 12.5855 2.66663 14" stroke="#0171F9" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);



// ─── Types ────────────────────────────────────────────────────────────────────

type Sentiment = "Positive" | "Negative" | "Neutral";

interface Report {
  id: string;
  school_name: string;
  grade_level: string;
  teacher_name: string;
  post_as: number;
  created_at: string;
  sentiment: Sentiment;
  status: number;
  school_association: string;
  score: number;
  ratings: { label: string; value: number; max: number }[];
  reviewText: string;
  tags: string[];
  your_name: string;
  feedback: string;
  classroom_behavior: number;
  lesson_preparedness: number;
  staff_friendliness: number;
  school_cleanliness: number;
  support_level: number;
  return_to_school: number;
  school_comment: string;
  return_to_teacher: number;
  teacher_comment: string;
}

// ─── Default Mock Data (Fallback) ────────────────────────────────────────────

const getSentiment = (report: any) => {
  const ratings = [
    report.classroom_behavior,
    report.lesson_preparedness,
    report.staff_friendliness,
    report.school_cleanliness,
    report.support_level,
  ];

  const avg =
    ratings.reduce((sum, val) => sum + Number(val || 0), 0) /
    ratings.length;

  if (avg >= 4) {
    return {
      label: "Positive",
      bg: "bg-green-100",
      text: "text-green-700",
    };
  }

  if (avg >= 2.7) {
    return {
      label: "Neutral",
      bg: "bg-yellow-100",
      text: "text-yellow-700",
    };
  }

  if (avg > 0) {
    return {
      label: "Negative",
      bg: "bg-red-100",
      text: "text-red-700",
    };
  }
  return {
      label: "Not sure",
      bg: "bg-[#F6F6F6]",
      text: "text-[#030711]",
    };
  
};


// ─── Score Circle ─────────────────────────────────────────────────────────────

function ScoreCircle({ score }: { score: number }) {
  const radius = 31;
  const circumference = 2 * Math.PI * radius;

  // ⭐ convert 5-scale to percentage
  const percentage = (score / 5) * 100;

  const progress = (percentage / 100) * circumference;

  const scoreColor =
    score >= 4
      ? "#34C567"
      : score >= 3
        ? "#F8A202"
        : "#EF4444";

  return (
    <div className="relative w-[70px] h-[70px]">
      <svg
        width="70"
        height="70"
        viewBox="0 0 70 70"
        className="rotate-[-90deg]"
      >
        {/* Background */}
        <circle
          cx="35"
          cy="35"
          r={radius}
          fill="none"
          stroke="#F1F5F9"
          strokeWidth="6"
        />

        {/* Progress */}
        <circle
          cx="35"
          cy="35"
          r={radius}
          fill="none"
          stroke={scoreColor}
          strokeWidth="6"
          strokeDasharray={`${progress} ${circumference}`}
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-outfit font-semibold text-lg text-black leading-none">
          {score}
        </span>

        <span className="font-outfit text-[10px] text-[#6B7280] leading-none mt-0.5">
          Score
        </span>
      </div>
    </div>
  );
}

// ─── Rating Bar ───────────────────────────────────────────────────────────────

function RatingBar({ label, value = 0, max = 5 }: { label?: string; value?: number; max?: number }) {
  const pct = (value / max) * 100;
  return (
    <div className="flex items-center w-full">
      <span className="w-[145px] flex-shrink-0 font-outfit text-sm text-[#6B7280] leading-6">{label}</span>
      <div className="flex items-center gap-4 flex-1">
        <div className="flex-1 h-1.5 rounded-full bg-[#F1F5F9] overflow-hidden">
          <div className="h-full rounded-full bg-[#0171F9]" style={{ width: `${pct}%` }} />
        </div>
        <span className="font-outfit text-sm text-black leading-6 w-6 text-right">{value}/{max}</span>
      </div>
    </div>
  );
}

// ─── Return Card ──────────────────────────────────────────────────────────────

function ReturnCard({
  icon, question, answer, comment,
}: {
  icon: React.ReactNode;
  question: string;
  answer: string;
  comment: string;
}) {
  const answerColor = answer === "Yes" ? "bg-[#BBFBE6] text-[#2D7D65]" : answer === "No" ? "bg-[#FEE2E2] text-[#991B1B]" : "bg-[#FFF3DC] text-[#D97706]";
  const barColor = answer === "Yes" ? "bg-[#22C55E]" : answer === "No" ? "bg-red-400" : "bg-yellow-400";

  return (
    <div className="rounded-xl border border-[rgba(178,178,178,0.40)] bg-[#F8FAFF] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-2.5 border-b border-[rgba(178,178,178,0.40)] bg-[#EFF6FF] rounded-t-xl">
        <div className="flex items-center gap-1.5">
          {icon}
          <span className="font-outfit text-sm font-medium text-[#0171F9]">{question}</span>
        </div>
        {answer &&
          <span className={`px-4 py-0.5 rounded-full font-inter text-xs font-semibold ${answerColor}`}>{answer}</span>
        }
      </div>
      {comment &&
        <div className="flex items-center gap-2.5 px-5 py-4">
          <div className={`w-0.5 self-stretch rounded-full ${barColor}`} />
          <p className="font-inter text-sm italic font-normal text-[#464555] leading-[22px]">{comment}</p>
        </div>}
    </div>
  );
}

// ─── Stars ────────────────────────────────────────────────────────────────────

function StarRating({ count = 0 }: { count?: number }) {
  return (
    <svg width="90" height="16" viewBox="0 0 90 16" fill="none">
      {[0, 1, 2, 3, 4].map((i) => {
        const x = i * 18;

        // ⭐ Determine fill percentage for this star
        const fillPercent = Math.max(
          0,
          Math.min(1, count - i)
        );

        return (
          <g key={i} transform={`translate(${x}, 0)`}>
            {/* Empty star */}
            <path
              d="M7.89844 4.36816L8.00781 4.62012L8.28125 4.64258L11.8516 4.94336L9.16113 7.21094L8.94434 7.39355L9.00977 7.66992L9.81641 11.0576L6.73242 9.25L6.5 9.11426L6.26758 9.25L3.18262 11.0576L3.99023 7.66992L4.05566 7.39355L3.83887 7.21094L1.14746 4.94336L4.71875 4.64258L4.99219 4.62012L5.10156 4.36816L6.5 1.15332L7.89844 4.36816Z"
              fill="#E2E8F0"
              stroke="#E2E8F0"
              strokeWidth="0.92"
            />

            {/* Partial filled star */}
            <clipPath id={`clip-${i}`}>
              <rect
                x="0"
                y="0"
                width={13 * fillPercent}
                height="13"
              />
            </clipPath>

            <path
              clipPath={`url(#clip-${i})`}
              d="M7.89844 4.36816L8.00781 4.62012L8.28125 4.64258L11.8516 4.94336L9.16113 7.21094L8.94434 7.39355L9.00977 7.66992L9.81641 11.0576L6.73242 9.25L6.5 9.11426L6.26758 9.25L3.18262 11.0576L3.99023 7.66992L4.05566 7.39355L3.83887 7.21094L1.14746 4.94336L4.71875 4.64258L4.99219 4.62012L5.10156 4.36816L6.5 1.15332L7.89844 4.36816Z"
              fill="#0171F9"
              stroke="#0171F9"
              strokeWidth="0.92"
            />
          </g>
        );
      })}
    </svg>
  );
}


// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ReportsPage() {
  const [paginated, setPaginated] = useState<Report[]>([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [sentimentFilter, setSentimentFilter] = useState<"All" | Sentiment>("All");
  const [statusFilter, setStatusFilter] = useState<"All" | any>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [loadingAction, setLoadingAction] = useState<string | null>(null);
  const itemsPerPage = 10;

  const ReportDetails = () => {
    const ratingItems = [
      {
        label: "Classroom Behavior",
        value: selectedReport?.classroom_behavior,
        max: 5,
      },
      {
        label: "Lesson Preparedness",
        value: selectedReport?.lesson_preparedness,
        max: 5,
      },
      {
        label: "Staff Friendliness",
        value: selectedReport?.staff_friendliness,
        max: 5,
      },
      {
        label: "School Cleanliness",
        value: selectedReport?.school_cleanliness,
        max: 5,
      },
      {
        label: "Support Level",
        value: selectedReport?.support_level,
        max: 5,
      },
    ];

    const averageRating =
      ratingItems.reduce(
        (sum, item) => sum + Number(item.value || 0),
        0
      ) / ratingItems.length;

    return (
      <>
        <div className="px-7 py-6 flex items-start gap-8">
          <div className="flex flex-col items-center gap-3 flex-shrink-0">
            <ScoreCircle score={averageRating} />
            <StarRating count={averageRating} />

            <span className="font-outfit text-xs text-[#6B7280] -mt-1">
              Overall
            </span>
          </div>

          <div className="flex flex-col gap-[10px] flex-1">
            {ratingItems?.map((r) => (
              <RatingBar key={r.label} {...r} />
            ))}
          </div>
        </div>
      </>
    );
  };

  const handleApproveReport = async (reportId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLoadingAction(`approve-${reportId}`);
    try {
      const response = await fetch(`/api/reports/${reportId}/approve`, { method: "POST" });
      if (!response.ok) throw new Error("Failed to approve report");
      setPaginated((prev) =>
        prev.map((r: any) => (r.id === reportId ? { ...r, status: 2 } : r))
      );
    } catch (err) {
      console.error("Error approving report:", err);
    } finally {
      toast.success("Report request Approved!");
      setLoadingAction(null);
      setSelectedReport(null);
    }
  };

  const handleRejectReport = async (reportId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLoadingAction(`reject-${reportId}`);
    try {
      const response = await fetch(`/api/reports/${reportId}/reject`, { method: "POST" });
      if (!response.ok) throw new Error("Failed to reject report");
      setPaginated((prev) =>
        prev.map((r: any) => (r.id === reportId ? { ...r, status: 3 } : r))
      );
    } catch (err) {
      console.error("Error rejecting report:", err);
    } finally {
      toast.error("Report request Rejected!");
      setLoadingAction(null);
      setSelectedReport(null);
    }
  };

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const params = new URLSearchParams({
          page: currentPage.toString(),
          limit: itemsPerPage.toString(),
          search: search.trim(),
          sentiment: sentimentFilter,
          status: statusFilter,
        });

        const response = await fetch(`/api/reports?${params}`);

        if (!response.ok) {
          throw new Error(`Failed to fetch reports: ${response.statusText}`);
        }

        const data = await response.json();
        setPaginated(data.data || []);
        setTotalPages(data.totalPages || 1);
        setTotal(data.total || 0);
        setError(null);
      } catch (err) {
        console.error("Error fetching reports:", err);
        if (initialLoading) {
          setError(err instanceof Error ? err.message : "Failed to fetch reports");
          setPaginated([]);
          setTotalPages(1);
          setTotal(0);
        }
      } finally {
        if (initialLoading) setInitialLoading(false);
      }
    };

    fetchReports();
  }, [currentPage, search, sentimentFilter, statusFilter, initialLoading]);

  const handleSentimentChange = (val: "All" | Sentiment) => { setSentimentFilter(val); setCurrentPage(1); };
  const handleStatusChange = (val: "All" | any) => { setStatusFilter(val); setCurrentPage(1); };

  if (initialLoading) {
    return (
      <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#E5E7EB] border-t-[#0171F9] rounded-full animate-spin" />
          <p className="font-inter text-[#6B7280]">Loading reports...</p>
        </div>
      </main>
    );
  }


  return (
    <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative">
      <h1 className="font-outfit font-semibold text-2xl sm:text-3xl  text-[#121212] leading-5 mb-6 ">Reports</h1>

      {error && (
        <div className="mb-6 px-4 py-3 rounded-lg bg-[#FEE2E2] border border-[#FECACA] flex items-start gap-3">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
            <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S14.33 6 13.5 6 12 6.67 12 7.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S7.33 6 6.5 6 5 6.67 5 7.5 5.67 9 6.5 9zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H4.89c.8 2.04 2.78 3.5 5.11 3.5z" fill="#DC2626" />
          </svg>
          <div>
            <p className="font-inter font-semibold text-sm text-[#991B1B]">{error}</p>
            <p className="font-inter text-sm text-[#DC2626] mt-1">Using default reports data</p>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg overflow-hidden">
        {/* Search + Filters */}
        <div className="px-4 pt-4 pb-0 flex flex-col gap-3 sm:gap-4">
          <div className="w-full max-w-[540px]">
            <div className="flex items-center gap-2 sm:gap-2.5 h-10 sm:h-11 px-3 sm:px-4 rounded-[14px] border border-[#EBEBF0] bg-[#FBFBFC]">
              <span className="opacity-70 flex-shrink-0"><SearchIcon /></span>
              <input
                type="text" placeholder="Search by School, Teacher, Submitted by name" value={search}
                onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                className="flex-1 bg-transparent outline-none font-inter font-medium text-sm sm:text-[15px] text-[#323152] placeholder:text-[#323152] placeholder:opacity-50 leading-[150%]"
              />
            </div>
          </div>

          <div className="flex flex-row items-stretch sm:items-center gap-2 sm:gap-3 pb-3 sm:pb-4">
            <div className="relative flex-1 sm:flex-none">
              <select
                value={sentimentFilter}
                onChange={(e) => handleSentimentChange(e.target.value as "All" | Sentiment)}
                className="w-full appearance-none pl-9 sm:pl-10 pr-7 sm:pr-8 py-2.5 sm:py-[11px] rounded-[10px] border border-[rgba(178,178,178,0.20)] bg-[#FAFCFF] font-inter text-xs sm:text-sm text-[#121212] opacity-80 cursor-pointer outline-none"
              >
                <option value="All">Sentiment: All</option>
                <option value="Positive">Sentiment: Positive</option>
                <option value="Negative">Sentiment: Negative</option>
                <option value="Neutral">Sentiment: Neutral</option>
              </select>
              <span className="pointer-events-none absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2"><SentimentIcon /></span>
              <span className="pointer-events-none absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2"><ChevronDownIcon /></span>
            </div>

            <div className="relative flex-1 sm:flex-none">
              <select
                value={statusFilter}
                onChange={(e) => handleStatusChange(e.target.value)}
                className="w-full appearance-none pl-9 sm:pl-10 pr-7 sm:pr-8 py-2.5 sm:py-[11px] rounded-[10px] border border-[rgba(178,178,178,0.20)] bg-[#FAFCFF] font-inter text-xs sm:text-sm text-[#121212] opacity-80 cursor-pointer outline-none"
              >
                <option value="All">Status: All</option>
                <option value="Pending">Status: Pending</option>
                <option value="Approved">Status: Approved</option>
                <option value="Rejected">Status: Rejected</option>
              </select>
              <span className="pointer-events-none absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2"><FilterIcon /></span>
              <span className="pointer-events-none absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2"><ChevronDownIcon /></span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-max">
            <thead>
              <tr className="border-y border-[#E5E7EB] bg-white">
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[12px] sm:text-xs text-[#6F6C70] uppercase whitespace-nowrap">ID</th>
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[12px] sm:text-xs text-[#6F6C70] uppercase whitespace-nowrap">School</th>
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[12px] sm:text-xs text-[#6F6C70] uppercase whitespace-nowrap">Teacher</th>
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[12px] sm:text-xs text-[#6F6C70] uppercase whitespace-nowrap">Sentiment Analysis</th>
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[12px] sm:text-xs text-[#6F6C70] uppercase whitespace-nowrap">Submitted By</th>
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[12px] sm:text-xs text-[#6F6C70] uppercase whitespace-nowrap">Submission Date</th>
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[12px] sm:text-xs text-[#6F6C70] uppercase whitespace-nowrap">Status</th>
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[12px] sm:text-xs text-[#6F6C70] uppercase whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 sm:px-6 lg:px-8 py-8 text-center font-inter text-sm text-[#6F6C70]">No reports found.</td>
                </tr>
              ) : (
                paginated.map((report: any) => {
                  const sc = getSentiment(report);
                  const isSelected = selectedReport?.id === report.id;
                  return (
                    <tr
                      key={report.id}
                      onClick={() => setSelectedReport(report)}
                      className={`border-b border-[#F2F4F7] cursor-pointer transition-colors hover:bg-[#F8FAFF] ${isSelected ? "bg-[#EFF6FF]" : ""}`}
                    >
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap">
                        <span className="font-inter font-medium text-[12px] sm:text-[13px] lg:text-sm text-[#0B77F9] opacity-80">{`RPT-${report.id}`}</span>
                      </td>
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap">
                        <span className="font-inter font-normal text-[12px] sm:text-[13px] lg:text-sm text-[#030711]">{report?.school_name}</span>
                      </td>
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap">
                        <span className="font-inter font-normal text-[12px] sm:text-[13px] lg:text-sm text-[#030711]">{report.teacher_name}</span>
                      </td>
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap">
                        <span className={`inline-flex items-center px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md ${sc.bg} font-inter font-medium text-[10px] sm:text-xs ${sc.text}`}>
                          {sc.label}
                        </span>
                      </td>
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap">
                        <span className="font-inter font-normal text-[12px] sm:text-[13px] lg:text-sm text-[#030711]">{report.post_as == 1 ? "Anonymous" : report.your_name ? report.your_name : "NA"}</span>
                      </td>
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap">
                        <span className="font-inter font-normal text-[12px] sm:text-[13px] lg:text-sm text-[#030711]">{formatDate(report.created_at)}</span>
                      </td>
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap">
                        <span className="inline-flex items-center px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-md border border-[#EFF0F2] bg-[#F6F6F6] font-inter font-normal text-[12px] sm:text-sm text-[#030711]">
                          {report.status == 1 ? "Pending" : report.status == 2 ? "Approved" : "Rejected"}
                        </span>
                      </td>
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center gap-1 sm:gap-3">
                          {report.status === 1 && (
                            <>
                              <button
                                onClick={(e) => handleApproveReport(report.id, e)}
                                disabled={loadingAction === `approve-${report.id}`}
                                className={`${loadingAction === `approve-${report.id}` ? "" : "cursor-pointer"} p-1 sm:p-2 rounded-md bg-[#D1FAE5] hover:opacity-80 disabled:opacity-60 transition-opacity flex items-center justify-center`}
                                aria-label="Approve"
                              >
                                {loadingAction === `approve-${report.id}` ? (
                                  <div className="w-4 h-4 border-2 border-[#32A85B] border-t-transparent rounded-full animate-spin" />
                                ) : (
                                  <CheckIcon />
                                )}
                              </button>
                              <button
                                onClick={(e) => handleRejectReport(report.id, e)}
                                disabled={loadingAction === `reject-${report.id}`}
                                className={`${loadingAction === `reject-${report.id}` ? "" : "cursor-pointer"} p-1 sm:p-2 rounded-md bg-[#FEE2E2] hover:opacity-80 disabled:opacity-60 transition-opacity flex items-center justify-center`}
                                aria-label="Reject"
                              >
                                {loadingAction === `reject-${report.id}` ? (
                                  <div className="w-4 h-4 border-2 border-[#DD393D] border-t-transparent rounded-full animate-spin" />
                                ) : (
                                  <CloseIcon />
                                )}
                              </button>
                            </>
                          )}
                          <button
                            onClick={() => setSelectedReport(report)}
                            className="cursor-pointer flex items-center justify-center h-8 sm:h-9 px-2 sm:px-3.5 rounded-md border border-[#EFF0F2] bg-white font-inter font-normal text-[12px] sm:text-[14px] text-black opacity-80 tracking-[-0.2px] hover:opacity-100 transition-opacity"
                          >
                            View
                          </button>
                        </div>
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
            Show {total === 0 ? "0" : `${(currentPage - 1) * itemsPerPage + 1}-${Math.min(currentPage * itemsPerPage, total)}`} of {total.toLocaleString()}
          </span>
          <div className="flex items-center gap-1 sm:gap-2 order-1 sm:order-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`${currentPage == 1 ? "" : "cursor-pointer"} w-8 sm:w-[38px] h-8 sm:h-[38px] flex items-center justify-center rounded-lg border border-[#E5E7EB] bg-white disabled:opacity-40 hover:bg-gray-50 transition-colors`}
            >
              <ChevronLeftIcon />
            </button>
            {(() => {
              const pageWindow = 4;
              const startPage = Math.max(1, currentPage - Math.floor(pageWindow / 2));
              const endPage = Math.min(totalPages, startPage + pageWindow - 1);
              const adjustedStart = Math.max(1, endPage - pageWindow + 1);

              return Array.from(
                { length: Math.min(pageWindow, totalPages) },
                (_, i) => adjustedStart + i
              ).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`cursor-pointer w-8 sm:w-[38px] h-8 sm:h-[38px] flex items-center justify-center rounded-lg font-inter text-[13px] sm:text-[15px] transition-colors ${currentPage === page ? "bg-[#0171F9] text-white font-semibold" : "border border-[#E5E7EB] bg-white text-[#323152] font-medium hover:bg-gray-50"
                    }`}
                >
                  {page}
                </button>
              ));
            })()}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="cursor-pointer w-8 sm:w-[38px] h-8 sm:h-[38px] flex items-center justify-center rounded-lg border border-[#E5E7EB] bg-white disabled:opacity-40 hover:bg-gray-50 transition-colors"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Dark backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${selectedReport ? "opacity-40 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setSelectedReport(null)}
      />

      {/* Right slide-in panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:max-w-[556px] bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${selectedReport ? "translate-x-0" : "translate-x-full"}`}
      >
        {selectedReport && (
          <div className="flex flex-col h-full overflow-hidden">
            {/* Header */}
            <div className="px-4 sm:px-6 lg:px-7 pt-4 sm:pt-6 lg:pt-8 pb-3 sm:pb-6 border-b border-black/10 flex-shrink-0">
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-end gap-3 flex-wrap">
                  <h2 className="font-outfit font-semibold text-[32px] text-[#121212] leading-5">{`RPT-${selectedReport.id}`}</h2>
                  <div className="flex items-center gap-1.5">
                    {selectedReport.post_as == 1 ? <AnonymousIcon /> : <UserIcon />}
                    <span className="font-inter font-medium text-xs text-[#121212] opacity-70">{selectedReport.post_as == 1 ? "Anonymous" : selectedReport.your_name ? selectedReport.your_name : "NA"}</span>
                  </div>
                  <div className="flex items-center gap-2 pb-0.5">

                    <span className={`px-2.5 py-1 rounded-md font-inter font-semibold text-xs ${getSentiment(selectedReport).label == "Positive"
                      ? "bg-[#BBFBE6] text-[#2D7D65]"
                      : getSentiment(selectedReport).label == "Negative"
                        ? "bg-[#FEE2E2] text-[#991B1B]"
                        : "bg-[#FFF3DC] text-[#D97706]"}`}>
                      {getSentiment(selectedReport).label}
                    </span>
                    <span className="px-2.5 py-1 rounded-md font-inter font-semibold text-xs text-[#F8A202] bg-[#FFEECE] ">
                      {selectedReport.status == 1 ? "Pending" : selectedReport.status == 2 ? "Approved" : "Rejected"}
                    </span>
                  </div>
                </div>
                <button onClick={() => setSelectedReport(null)} className="p-2 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0">
                  <XIcon />
                </button>
              </div>

              <div className="flex flex-col gap-3 mt-4">
                <div className="flex items-center gap-2">
                  <SchoolIcon />
                  <span className="font-inter font-medium text-[13px] text-[#030711] opacity-80">{selectedReport.school_name}</span>
                  <span className="w-1 h-1 rounded-full bg-[#676767]" />
                  <span className="font-inter font-medium text-xs text-[#121212] opacity-64">{selectedReport.grade_level}</span>

                  {selectedReport.teacher_name !== "--" && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-[#676767]" />
                      <span className="font-inter font-medium text-xs text-[#121212] opacity-64">{selectedReport.teacher_name}</span>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-1.5">

                  <svg width="17" height="17" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.39539 7.41538C7.5097 7.45906 7.60199 7.54635 7.65195 7.65806C7.70192 7.76976 7.70548 7.89674 7.66185 8.01107C7.26862 9.03999 6.67047 9.60738 5.94431 9.89168C5.27231 10.1538 4.5277 10.1538 3.88585 10.1538H3.84585C3.15662 10.1538 2.57816 10.16 2.08339 10.3532C1.62862 10.5305 1.20462 10.8861 0.892625 11.7034C0.848884 11.8177 0.761519 11.91 0.649747 11.9599C0.537976 12.0098 0.410954 12.0133 0.296625 11.9695C0.182297 11.9258 0.0900263 11.8384 0.0401128 11.7267C-0.00980069 11.6149 -0.0132688 11.4879 0.0304715 11.3735C0.423087 10.3446 1.02124 9.77722 1.74739 9.49292C2.42001 9.23076 3.16462 9.23076 3.80585 9.23076H3.84585C4.53508 9.23076 5.11354 9.22461 5.60831 9.03138C6.0637 8.85415 6.4877 8.49845 6.7997 7.68122C6.84338 7.56691 6.93067 7.47463 7.04237 7.42466C7.15408 7.37469 7.28106 7.37175 7.39539 7.41538ZM7.19847 0H9.72585C10.4231 0 10.9929 3.35276e-08 11.4428 0.0603077C11.9129 0.123692 12.3203 0.260307 12.6458 0.585846C12.9708 0.911384 13.1074 1.31815 13.1708 1.78892C13.2311 2.23815 13.2311 2.808 13.2311 3.50584V4.80246C13.2311 5.49969 13.2311 6.06892 13.1708 6.51938C13.108 6.98892 12.9708 7.3963 12.6458 7.72184C12.3209 8.04738 11.9129 8.18399 11.4428 8.24738C10.9929 8.30769 10.4231 8.30769 9.72585 8.30769H8.76893C8.64652 8.30769 8.52912 8.25906 8.44257 8.1725C8.35601 8.08595 8.30739 7.96856 8.30739 7.84615C8.30739 7.72374 8.35601 7.60635 8.44257 7.51979C8.52912 7.43324 8.64652 7.38461 8.76893 7.38461H9.69262C10.4311 7.38461 10.9388 7.38338 11.3197 7.3323C11.6871 7.28307 11.8674 7.19446 11.9929 7.06892C12.1185 6.94399 12.2065 6.76369 12.2563 6.39569C12.3074 6.01476 12.3086 5.50769 12.3086 4.76923V3.53846C12.3086 2.8 12.3074 2.29292 12.2563 1.912C12.2071 1.544 12.1185 1.36431 11.9929 1.23877C11.8674 1.11323 11.6871 1.02461 11.3197 0.975384C10.9382 0.924307 10.4311 0.923076 9.69323 0.923076H7.2317C6.49324 0.923076 5.98554 0.924307 5.60462 0.975384C5.23724 1.02461 5.05693 1.11323 4.93139 1.23877C4.82431 1.34585 4.74554 1.49169 4.69385 1.75569C4.6397 2.03261 4.62185 2.4 4.61754 2.92677C4.61706 2.98738 4.60464 3.0473 4.581 3.10311C4.55736 3.15892 4.52295 3.20953 4.47975 3.25204C4.43655 3.29456 4.3854 3.32815 4.32922 3.35089C4.27304 3.37364 4.21292 3.3851 4.15231 3.38461C4.0917 3.38413 4.03178 3.37171 3.97597 3.34807C3.92016 3.32442 3.86955 3.29002 3.82704 3.24682C3.78452 3.20362 3.75093 3.15247 3.72819 3.09629C3.70544 3.0401 3.69398 2.97999 3.69447 2.91938C3.69878 2.39569 3.71539 1.94892 3.78801 1.57784C3.86308 1.19446 4.00401 0.860307 4.27847 0.585846C4.60462 0.260307 5.01139 0.123692 5.48154 0.0603077C5.93139 3.35276e-08 6.50124 0 7.19847 0Z" fill="#121212"></path><path fillRule="evenodd" clipRule="evenodd" d="M3.84564 5.23126C3.56002 5.23126 3.2861 5.34473 3.08414 5.54669C2.88218 5.74865 2.76872 6.02257 2.76872 6.30819C2.76872 6.5938 2.88218 6.86772 3.08414 7.06969C3.2861 7.27165 3.56002 7.38511 3.84564 7.38511C4.13126 7.38511 4.40518 7.27165 4.60714 7.06969C4.8091 6.86772 4.92256 6.5938 4.92256 6.30819C4.92256 6.02257 4.8091 5.74865 4.60714 5.54669C4.40518 5.34473 4.13126 5.23126 3.84564 5.23126ZM1.84564 6.30819C1.84564 5.77775 2.05636 5.26905 2.43143 4.89397C2.8065 4.5189 3.31521 4.30819 3.84564 4.30819C4.37607 4.30819 4.88478 4.5189 5.25985 4.89397C5.63492 5.26905 5.84564 5.77775 5.84564 6.30819C5.84564 6.83862 5.63492 7.34733 5.25985 7.7224C4.88478 8.09747 4.37607 8.30818 3.84564 8.30818C3.31521 8.30818 2.8065 8.09747 2.43143 7.7224C2.05636 7.34733 1.84564 6.83862 1.84564 6.30819ZM6.15333 2.92357C6.15333 2.80117 6.20196 2.68377 6.28851 2.59722C6.37507 2.51066 6.49246 2.46204 6.61487 2.46204H10.3072C10.4296 2.46204 10.547 2.51066 10.6335 2.59722C10.7201 2.68377 10.7687 2.80117 10.7687 2.92357C10.7687 3.04598 10.7201 3.16338 10.6335 3.24993C10.547 3.33649 10.4296 3.38511 10.3072 3.38511H6.61487C6.49246 3.38511 6.37507 3.33649 6.28851 3.24993C6.20196 3.16338 6.15333 3.04598 6.15333 2.92357ZM7.99948 5.38511C7.99948 5.2627 8.04811 5.14531 8.13466 5.05875C8.22122 4.9722 8.33861 4.92357 8.46102 4.92357H10.3072C10.4296 4.92357 10.547 4.9722 10.6335 5.05875C10.7201 5.14531 10.7687 5.2627 10.7687 5.38511C10.7687 5.50752 10.7201 5.62491 10.6335 5.71147C10.547 5.79802 10.4296 5.84665 10.3072 5.84665H8.46102C8.33861 5.84665 8.22122 5.79802 8.13466 5.71147C8.04811 5.62491 7.99948 5.50752 7.99948 5.38511Z" fill="#121212"></path></svg>

                  <span className="font-inter font-medium text-[13px] text-[#030711] opacity-80">{selectedReport?.school_association}</span>
                </div>
              </div>
            </div>

            {/* Score + Ratings */}
            {ReportDetails()}

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto px-7 pb-6 flex flex-col gap-7">
              {/* Written Review */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <ChatIcon />
                  <h3 className="font-outfit font-medium text-sm text-[#121212] leading-6">Written Review</h3>
                </div>
                <div className="rounded-lg border border-[#E8EDF5] bg-[#F8F9FD] px-5 py-6">
                  <p className="font-inter text-sm italic font-normal text-[#1E1E1E] opacity-[0.72] leading-[26px]">
                    {selectedReport.feedback}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-col gap-3">
                <h3 className="font-outfit font-medium text-md text-[#121212] leading-6">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedReport.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-xl border border-[#C0DCFD] bg-[#EFF6FF] font-inter font-semibold text-xs text-[#0171F9] leading-[15px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Return cards */}
              <div className="flex flex-col gap-6">
                {(selectedReport?.return_to_school || selectedReport?.school_comment) ?
                  <ReturnCard
                    icon={<BuildingIcon />}
                    question="Would you return to this school?"
                    answer={selectedReport?.return_to_school == 1 ? "Yes" : selectedReport?.return_to_school == 2 ? "No" : "Maybe"}
                    comment={selectedReport?.school_comment}
                  /> : ""}
                {(selectedReport?.return_to_teacher || selectedReport?.teacher_comment) ?
                  <ReturnCard
                    icon={<UserIcon />}
                    question="Would you return for this teacher or class?"
                    answer={selectedReport?.return_to_teacher == 1 ? "Yes" : selectedReport?.return_to_teacher == 2 ? "No" : "Maybe"}
                    comment={selectedReport?.teacher_comment}
                  /> : ""}
              </div>
            </div>

            {/* Footer actions */}
            {selectedReport.status == 1 &&
              <div className="px-5 py-[17px] border-t border-[#F0F0F0] bg-white flex items-center gap-3">
                <button
                  onClick={(e) => { handleApproveReport(Number(selectedReport.id), e);
                    
                   }}
                  disabled={loadingAction === `approve-${selectedReport.id}`}
                  className="cursor-pointer flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-lg border border-[#BDF7D3] bg-[#DDFCE9] hover:opacity-90 disabled:opacity-60 transition-opacity"
                >
                  {loadingAction === `approve-${selectedReport.id}` ? (
                    <div className="w-4 h-4 border-2 border-[#32A85B] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <ApproveIcon />
                  )}
                  <span className="font-inter font-medium text-sm text-[#32A85B] leading-5">
                    {loadingAction === `approve-${selectedReport.id}` ? "Approving..." : "Approve"}
                  </span>
                </button>
                <button
                  onClick={(e) => { {handleRejectReport(Number(selectedReport.id), e)
                    
                  } }}
                  disabled={loadingAction === `reject-${selectedReport.id}`}
                  className="cursor-pointer flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-lg border border-[#FDCACA] bg-[#FDE2E2] hover:opacity-90 disabled:opacity-60 transition-opacity"
                >
                  {loadingAction == `reject-${selectedReport.id}`  ? (
                    <div className="w-4 h-4 border-2 border-[#DD393D] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <RejectIcon />
                  )}
                  <span className="font-inter font-medium text-sm text-[#DD393D] leading-5">
                    {loadingAction == `reject-${selectedReport.id}` ? "Rejecting..." : "Reject"}
                  </span>
                </button>
              </div>}
          </div>
        )}
      </div>
    </main>
  );
}
