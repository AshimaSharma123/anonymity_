"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// --- Icon Components ---

const LocationIcon = () => (
  <svg
    width="125"
    height="18"
    viewBox="0 0 125 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mt-[4px]"
  >
    <g opacity="0.8">
      <path
        d="M8.39603 5.60426C8.39603 4.05804 7.14366 2.80566 5.59743 2.80566C4.0512 2.80566 2.79883 4.05804 2.79883 5.60426C2.79883 7.15049 4.0512 8.40287 5.59743 8.40287C7.14366 8.40287 8.39603 7.15049 8.39603 5.60426ZM4.19813 5.60426C4.19813 4.83465 4.82781 4.20496 5.59743 4.20496C6.36704 4.20496 6.99673 4.83465 6.99673 5.60426C6.99673 6.37388 6.36704 7.00356 5.59743 7.00356C4.82781 7.00356 4.19813 6.37388 4.19813 5.60426Z"
        fill="#414141"
      />
      <path
        d="M5.19147 13.8671C5.31041 13.951 5.45734 14 5.59727 14C5.7372 14 5.88412 13.958 6.00306 13.8671C6.21296 13.7131 11.2155 10.1099 11.1945 5.5972C11.1945 2.51174 8.68272 0 5.59727 0C2.51181 0 6.58647e-05 2.51174 6.58647e-05 5.5972C-0.0209236 10.1029 4.98158 13.7131 5.19147 13.8671ZM5.59727 1.4063C7.91311 1.4063 9.79517 3.28836 9.79517 5.6042C9.80916 8.71064 6.7237 11.5022 5.59727 12.4188C4.47083 11.5022 1.38537 8.71764 1.39937 5.6042C1.39937 3.28836 3.28143 1.4063 5.59727 1.4063Z"
        fill="#414141"
      />

      <text
        x="17"
        y="13"
        fill="#414141"
        fontFamily="Outfit, sans-serif"
        fontSize="17"
        fontWeight="400"
      >
        Portland, OR
      </text>
    </g>
  </svg>
);

const FileIcon = () => (
  <svg width="19" height="19" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.0979 6.08171C14.0643 6.00485 14.0172 5.93458 13.959 5.87417L9.70904 1.62417C9.64863 1.56597 9.57836 1.51896 9.5015 1.48533C9.48025 1.47542 9.45758 1.46975 9.43492 1.46196C9.37563 1.44186 9.31394 1.42972 9.25146 1.42583C9.23659 1.42442 9.22313 1.41663 9.20825 1.41663H4.24992C3.46863 1.41663 2.83325 2.052 2.83325 2.83329V14.1666C2.83325 14.9479 3.46863 15.5833 4.24992 15.5833H12.7499C13.5312 15.5833 14.1666 14.9479 14.1666 14.1666V6.37496C14.1666 6.36008 14.1588 6.34663 14.1574 6.33104C14.1535 6.26856 14.1413 6.20687 14.1213 6.14758C14.1146 6.12492 14.1068 6.10296 14.0979 6.08171ZM11.7483 5.66663H9.91658V3.83488L11.7483 5.66663ZM4.24992 14.1666V2.83329H8.49992V6.37496C8.49992 6.56282 8.57455 6.74299 8.70738 6.87583C8.84022 7.00867 9.02039 7.08329 9.20825 7.08329H12.7499L12.7513 14.1666H4.24992Z" fill="#0171F9" />
    <path d="M5.66675 8.49996H11.3334V9.91663H5.66675V8.49996ZM5.66675 11.3333H11.3334V12.75H5.66675V11.3333ZM5.66675 5.66663H7.08341V7.08329H5.66675V5.66663Z" fill="#0171F9" />
  </svg>
);

const CalendarIcon = () => (

  <svg width="16" height="16" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.75 1.61111H2.3C1.67 1.61111 1.355 1.61111 1.11425 1.73222C0.902577 1.83875 0.730481 2.00872 0.622625 2.21778C0.5 2.45556 0.5 2.76667 0.5 3.38889V3.83333M2.75 1.61111H7.25M2.75 1.61111V0.5M0.5 3.83333V8.72222C0.5 9.34444 0.5 9.65556 0.622625 9.89333C0.730481 10.1024 0.902577 10.2724 1.11425 10.3789C1.35444 10.5 1.66944 10.5 2.29831 10.5H7.70169C8.33056 10.5 8.645 10.5 8.88519 10.3789C9.09725 10.2722 9.26937 10.1022 9.37737 9.89333C9.5 9.65556 9.5 9.34556 9.5 8.72445V3.83333M0.5 3.83333H9.5M7.25 1.61111H7.7C8.33 1.61111 8.645 1.61111 8.88519 1.73222C9.09725 1.83889 9.26937 2.00833 9.37737 2.21778C9.5 2.455 9.5 2.76611 9.5 3.38722V3.83333M7.25 1.61111V0.5M7.25 8.27778H7.25113V8.27889H7.25V8.27778ZM5 8.27778H5.00112V8.27889H5V8.27778ZM2.75 8.27778H2.75112V8.27889H2.75V8.27778ZM7.25113 6.05556V6.05667H7.25V6.05556H7.25113ZM5 6.05556H5.00112V6.05667H5V6.05556ZM2.75 6.05556H2.75112V6.05667H2.75V6.05556Z" stroke="#121212" strokeLinecap="round" strokeLinejoin="round" />
  </svg>

);

const ChatIcon = () => (
  <svg className="mt-[2px]" width="15" height="15" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.6 7.26664C10.6 7.56133 10.4829 7.84394 10.2745 8.05232C10.0662 8.26069 9.78355 8.37775 9.48886 8.37775H2.8222L0.599976 10.6V1.71109C0.599976 1.4164 0.717039 1.13379 0.925412 0.925412C1.13379 0.717039 1.4164 0.599976 1.71109 0.599976H9.48886C9.78355 0.599976 10.0662 0.717039 10.2745 0.925412C10.4829 1.13379 10.6 1.4164 10.6 1.71109V7.26664Z" stroke="#0171F9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SchoolIcon = () => (

  <svg width="15" height="15" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.16667 11.1667V5.16667L0.5 5.91667V11.1667H3.16667ZM3.16667 11.1667H8.5M3.16667 11.1667V2.278M8.5 11.1667V5.16667L11.1667 5.91667V11.1667H8.5ZM8.5 11.1667V2.278M9.83333 3.16667L5.83333 0.5L1.83333 3.16667M5.16667 3.83333H6.5M5.16667 5.83333H6.5" stroke="#464555" strokeLinecap="round" strokeLinejoin="round" />
  </svg>

);

const UserIcon = () => (

  <svg width="14" height="15" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.00002 7.33335C7.84097 7.33335 9.33335 5.84097 9.33335 4.00002C9.33335 2.15907 7.84097 0.666687 6.00002 0.666687C4.15907 0.666687 2.66669 2.15907 2.66669 4.00002C2.66669 5.84097 4.15907 7.33335 6.00002 7.33335Z" stroke="#464555" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.3334 12.6667C11.3334 11.2522 10.7715 9.89567 9.77126 8.89547C8.77106 7.89528 7.41451 7.33337 6.00002 7.33337C4.58553 7.33337 3.22898 7.89528 2.22878 8.89547C1.22859 9.89567 0.666687 11.2522 0.666687 12.6667" stroke="#464555" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
  </svg>

);

const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 7.08331L10 12.0833L15 7.08331H5Z" fill="#0171F9" stroke="#0171F9" strokeWidth="1.66667" strokeLinejoin="round" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 12L6 8L10 4" stroke="#0171F9" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12L10 8L6 4" stroke="#0171F9" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Star rating SVGs
const StarFilled = () => (
  <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z" fill="#0171F9" />
  </svg>
);

const StarOutline = () => (
  <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.85 14.825L10 12.925L13.15 14.85L12.325 11.25L15.1 8.85L11.45 8.525L10 5.125L8.55 8.5L4.9 8.825L7.675 11.25L6.85 14.825ZM3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z" fill="#0171F9" />
  </svg>
);

function StarRating({
  rating,
  size = "sm",
}: {
  rating: number;
  size?: "sm" | "lg";
}) {
  const starSize =
    size === "lg" ? "w-5 h-[19px]" : "w-[18px] h-[17px]";

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => {
        const i = index + 1;

        // exact star fill for each star
        const fillPercent = Math.max(
          0,
          Math.min((rating - index) * 100, 100)
        );

        return (
          <div key={i} className={`${starSize} relative`}>
            {/* Empty Star */}
            <svg
              viewBox="0 0 20 19"
              className="w-full h-full absolute inset-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.85 14.825L10 12.925L13.15 14.85L12.325 11.25L15.1 8.85L11.45 8.525L10 5.125L8.55 8.5L4.9 8.825L7.675 11.25L6.85 14.825ZM3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                fill="#0171F9"
                fillOpacity="0.1"
              />
            </svg>

            {/* Filled Star */}
            {fillPercent > 0 && (
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fillPercent}%` }}
              >
                <svg
                  viewBox="0 0 20 19"
                  className="h-full"
                  style={{ width: "20px", minWidth: "20px" }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                    fill="#0171F9"
                  />
                </svg>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function ReviewStars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: Math.ceil(count) }).map((_, index) => {
        const i = index + 1;
        const full = i <= Math.floor(count);
        const half = i === Math.floor(count) + 1 && count % 1 >= 0.5;

        const starPath =
          "M6.5075 14.0447L9.5 12.2447L12.4925 14.0684L11.7087 10.6579L14.345 8.38421L10.8775 8.07632L9.5 4.85526L8.1225 8.05263L4.655 8.36053L7.29125 10.6579L6.5075 14.0447ZM3.63375 18L5.1775 11.3447L0 6.86842L6.84 6.27632L9.5 0L12.16 6.27632L19 6.86842L13.8225 11.3447L15.3662 18L9.5 14.4711L3.63375 18Z";

        return (
          <svg
            key={i}
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id={`half-${i}`}>
                <rect x="0" y="0" width="9.5" height="18" />
              </clipPath>
            </defs>

            {/* Full star */}
            {full && <path d={starPath} fill="#FFBF0F" />}

            {/* Half star */}
            {half && (
              <path
                d={starPath}
                fill="#FFBF0F"
                clipPath={`url(#half-${i})`}
              />
            )}

            {/* Empty star = no fill */}

          </svg>
        );
      })}
    </div>
  );
}

// --- Types ---
type SentimentType = "Positive" | "Neutral" | "Negative";
type ReturnAnswer = "Yes" | "No" | "Maybe";

interface FinalThought {
  question: string;
  icon: "school" | "user";
  answer: ReturnAnswer;
  quote: string;
}

interface Review {
  id: number;
  reviewer: string;
  teacher?: string;
  date: string;
  sentiment: SentimentType;
  rating: number;
  body: string;
  tags: string[];
  finalThoughts: FinalThought[];
}

// --- Data ---
const reviews: Review[] = [
  {
    id: 1,
    reviewer: "Anonymous",
    teacher: "Maria",
    date: "Mar 12, 2026",
    sentiment: "Positive",
    rating: 4.5,
    body: "The administration was incredibly supportive. I arrived early and received a detailed folder with lesson plans, emergency procedures, and classroom expectations. Students were respectful and stayed on task throughout the session.",
    tags: ["Supportive Staff", "Lesson Plans Provided", "Good Behavior"],
    finalThoughts: [
      {
        question: "Would you return to this school?",
        icon: "school",
        answer: "Yes",
        quote: "\"Absolutely one of the best schools I've covered. The office staff checked in on me twice during the day. I never felt like I was on my own.\"",
      },
      {
        question: "Would you return for this teacher or class?",
        icon: "user",
        answer: "Yes",
        quote: "\"Lesson plans were detailed and easy to follow. Clear expectations were set for the class. I'd take this assignment again without hesitation.\"",
      },
    ],
  },
  {
    id: 2,
    reviewer: "Sarah M",
    teacher: undefined,
    date: "Sep 28, 2025",
    sentiment: "Negative",
    rating: 2,
    body: "The day was quite difficult. Students were disruptive and classroom management was a challenge. Lesson plans were unclear and incomplete, making it hard to follow the schedule properly. Had to request support multiple times.",
    tags: ["Poor Behavior", "Incomplete Lesson Plans", "Would Not Return"],
    finalThoughts: [
      {
        question: "Would you return to this school?",
        icon: "school",
        answer: "No",
        quote: "\"Limited support made it difficult to manage the classroom effectively, so I would be hesitant to return.\"",
      },
      {
        question: "Would you return for this teacher or class?",
        icon: "user",
        answer: "No",
        quote: "\"Due to incomplete lesson planning, it was difficult to maintain a productive learning environment. I would not prefer to take this assignment again.\"",
      },
    ],
  },
  {
    id: 3,
    reviewer: "Michael T.",
    teacher: undefined,
    date: "Sep 28, 2025",
    sentiment: "Neutral",
    rating: 3,
    body: "The front office staff was helpful, but the classroom setup lacked clear instructions. Students were manageable but required constant attention. The experience was okay overall but could be improved with better planning.",
    tags: ["Average Experience", "Some Support", "Needs Better Planning"],
    finalThoughts: [
      {
        question: "Would you return to this school?",
        icon: "school",
        answer: "Yes",
        quote: "\"The front office staff was helpful and provided some support during the day.\"",
      },
      {
        question: "Would you return for this teacher or class?",
        icon: "user",
        answer: "Yes",
        quote: "\"Students were manageable but required consistent attention.\"",
      },
    ],
  },
  {
    id: 4,
    reviewer: "Anonymous",
    teacher: "James",
    date: "Sep 05, 2025",
    sentiment: "Positive",
    rating: 4,
    body: "Great experience overall. Lesson plans were structured and easy to follow. Students were cooperative, and nearby regular teachers were helpful when needed. Would definitely consider returning.",
    tags: ["Structured Lessons", "Cooperative Students", "Would Return"],
    finalThoughts: [
      {
        question: "Would you return to this school?",
        icon: "school",
        answer: "Yes",
        quote: "\"Absolutely one of the best schools I've covered. The office staff checked in on me twice during the day. I never felt like I was on my own.\"",
      },
      {
        question: "Would you return for this teacher or class?",
        icon: "user",
        answer: "Yes",
        quote: "\"Lesson plans were detailed and easy to follow. Clear expectations were set for the class. I'd take this assignment again without hesitation.\"",
      },
    ],
  },
];

// --- Helper functions ---
function getSentimentBadgeStyle(sentiment: SentimentType) {
  switch (sentiment) {
    case "Positive":
      return "bg-[#BBFBE6] text-[#2D7D65]";
    case "Negative":
      return "bg-[#FFE0E0] text-[#E02C2C]";
    default:
      return "bg-[#FFEABD] text-[#E8A411]";
  }
}

function getReturnAnswerStyle(answer: ReturnAnswer) {
  switch (answer) {
    case "Yes":
      return "bg-[#BBFBE6] text-[#2D7D65]";
    case "No":
      return "bg-[#FFE0E0] text-[#E02C2C]";
    default:
      return "bg-[#FFEABD] text-[#E8A411]";
  }
}

// --- Review Card Component ---
function ReviewCard({ review }: { review: Review }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={`bg-white rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.10)] ${showDetails ? "p-7" : "px-7 pt-7"} flex flex-col gap-6`}>
      {/* Top row: stars, reviewer, teacher, date, sentiment */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-4 flex-wrap">
          <ReviewStars count={review.rating} />
          <span className="text-[#121212] font-inter text-lg font-bold leading-5">{review.reviewer}</span>
          <span className="w-[3px] h-[3px] rounded-full bg-[#676767]" />
          {review.teacher && (
            <>
              <div className="flex items-center gap-1.5">

                <svg width="17" height="17" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.39539 7.41538C7.5097 7.45906 7.60199 7.54635 7.65195 7.65806C7.70192 7.76976 7.70548 7.89674 7.66185 8.01107C7.26862 9.03999 6.67047 9.60738 5.94431 9.89168C5.27231 10.1538 4.5277 10.1538 3.88585 10.1538H3.84585C3.15662 10.1538 2.57816 10.16 2.08339 10.3532C1.62862 10.5305 1.20462 10.8861 0.892625 11.7034C0.848884 11.8177 0.761519 11.91 0.649747 11.9599C0.537976 12.0098 0.410954 12.0133 0.296625 11.9695C0.182297 11.9258 0.0900263 11.8384 0.0401128 11.7267C-0.00980069 11.6149 -0.0132688 11.4879 0.0304715 11.3735C0.423087 10.3446 1.02124 9.77722 1.74739 9.49292C2.42001 9.23076 3.16462 9.23076 3.80585 9.23076H3.84585C4.53508 9.23076 5.11354 9.22461 5.60831 9.03138C6.0637 8.85415 6.4877 8.49845 6.7997 7.68122C6.84338 7.56691 6.93067 7.47463 7.04237 7.42466C7.15408 7.37469 7.28106 7.37175 7.39539 7.41538ZM7.19847 0H9.72585C10.4231 0 10.9929 3.35276e-08 11.4428 0.0603077C11.9129 0.123692 12.3203 0.260307 12.6458 0.585846C12.9708 0.911384 13.1074 1.31815 13.1708 1.78892C13.2311 2.23815 13.2311 2.808 13.2311 3.50584V4.80246C13.2311 5.49969 13.2311 6.06892 13.1708 6.51938C13.108 6.98892 12.9708 7.3963 12.6458 7.72184C12.3209 8.04738 11.9129 8.18399 11.4428 8.24738C10.9929 8.30769 10.4231 8.30769 9.72585 8.30769H8.76893C8.64652 8.30769 8.52912 8.25906 8.44257 8.1725C8.35601 8.08595 8.30739 7.96856 8.30739 7.84615C8.30739 7.72374 8.35601 7.60635 8.44257 7.51979C8.52912 7.43324 8.64652 7.38461 8.76893 7.38461H9.69262C10.4311 7.38461 10.9388 7.38338 11.3197 7.3323C11.6871 7.28307 11.8674 7.19446 11.9929 7.06892C12.1185 6.94399 12.2065 6.76369 12.2563 6.39569C12.3074 6.01476 12.3086 5.50769 12.3086 4.76923V3.53846C12.3086 2.8 12.3074 2.29292 12.2563 1.912C12.2071 1.544 12.1185 1.36431 11.9929 1.23877C11.8674 1.11323 11.6871 1.02461 11.3197 0.975384C10.9382 0.924307 10.4311 0.923076 9.69323 0.923076H7.2317C6.49324 0.923076 5.98554 0.924307 5.60462 0.975384C5.23724 1.02461 5.05693 1.11323 4.93139 1.23877C4.82431 1.34585 4.74554 1.49169 4.69385 1.75569C4.6397 2.03261 4.62185 2.4 4.61754 2.92677C4.61706 2.98738 4.60464 3.0473 4.581 3.10311C4.55736 3.15892 4.52295 3.20953 4.47975 3.25204C4.43655 3.29456 4.3854 3.32815 4.32922 3.35089C4.27304 3.37364 4.21292 3.3851 4.15231 3.38461C4.0917 3.38413 4.03178 3.37171 3.97597 3.34807C3.92016 3.32442 3.86955 3.29002 3.82704 3.24682C3.78452 3.20362 3.75093 3.15247 3.72819 3.09629C3.70544 3.0401 3.69398 2.97999 3.69447 2.91938C3.69878 2.39569 3.71539 1.94892 3.78801 1.57784C3.86308 1.19446 4.00401 0.860307 4.27847 0.585846C4.60462 0.260307 5.01139 0.123692 5.48154 0.0603077C5.93139 3.35276e-08 6.50124 0 7.19847 0Z" fill="#121212" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.84564 5.23126C3.56002 5.23126 3.2861 5.34473 3.08414 5.54669C2.88218 5.74865 2.76872 6.02257 2.76872 6.30819C2.76872 6.5938 2.88218 6.86772 3.08414 7.06969C3.2861 7.27165 3.56002 7.38511 3.84564 7.38511C4.13126 7.38511 4.40518 7.27165 4.60714 7.06969C4.8091 6.86772 4.92256 6.5938 4.92256 6.30819C4.92256 6.02257 4.8091 5.74865 4.60714 5.54669C4.40518 5.34473 4.13126 5.23126 3.84564 5.23126ZM1.84564 6.30819C1.84564 5.77775 2.05636 5.26905 2.43143 4.89397C2.8065 4.5189 3.31521 4.30819 3.84564 4.30819C4.37607 4.30819 4.88478 4.5189 5.25985 4.89397C5.63492 5.26905 5.84564 5.77775 5.84564 6.30819C5.84564 6.83862 5.63492 7.34733 5.25985 7.7224C4.88478 8.09747 4.37607 8.30818 3.84564 8.30818C3.31521 8.30818 2.8065 8.09747 2.43143 7.7224C2.05636 7.34733 1.84564 6.83862 1.84564 6.30819ZM6.15333 2.92357C6.15333 2.80117 6.20196 2.68377 6.28851 2.59722C6.37507 2.51066 6.49246 2.46204 6.61487 2.46204H10.3072C10.4296 2.46204 10.547 2.51066 10.6335 2.59722C10.7201 2.68377 10.7687 2.80117 10.7687 2.92357C10.7687 3.04598 10.7201 3.16338 10.6335 3.24993C10.547 3.33649 10.4296 3.38511 10.3072 3.38511H6.61487C6.49246 3.38511 6.37507 3.33649 6.28851 3.24993C6.20196 3.16338 6.15333 3.04598 6.15333 2.92357ZM7.99948 5.38511C7.99948 5.2627 8.04811 5.14531 8.13466 5.05875C8.22122 4.9722 8.33861 4.92357 8.46102 4.92357H10.3072C10.4296 4.92357 10.547 4.9722 10.6335 5.05875C10.7201 5.14531 10.7687 5.2627 10.7687 5.38511C10.7687 5.50752 10.7201 5.62491 10.6335 5.71147C10.547 5.79802 10.4296 5.84665 10.3072 5.84665H8.46102C8.33861 5.84665 8.22122 5.79802 8.13466 5.71147C8.04811 5.62491 7.99948 5.50752 7.99948 5.38511Z" fill="#121212" />
                </svg>

                <span className="text-[#121212] font-inter text-sm font-medium">{review.teacher}</span>
              </div>
              <span className="w-[3px] h-[3px] rounded-full bg-[#676767]" />
            </>
          )}
          <div className="flex items-center gap-1.5">
            <CalendarIcon />
            <span className="text-[#121212] font-inter text-sm font-normal leading-5">{review.date}</span>
          </div>
        </div>
        <span className={`px-2.5 py-1 rounded-md font-inter text-xs font-semibold leading-[15px] ${getSentimentBadgeStyle(review.sentiment)}`}>
          {review.sentiment}
        </span>
      </div>

      {/* Review body */}
      <p className="text-black font-inter text-base font-normal leading-7 opacity-70">{review.body}</p>

      {/* Tags */}
      <div className="flex items-center gap-3 flex-wrap w-full">
        {review.tags.map((tag) => (
          <span key={tag} className="px-2.5 py-2 rounded-md border border-[#EAEAEA] bg-[#F2F2F2] text-[#9A9A9A] font-inter text-sm font-medium leading-[15px]">
            {tag}
          </span>
        ))}
      </div>

      {/* Final Thoughts section */}
      <div className="rounded-xl border border-[rgba(178,178,178,0.40)] bg-[#F8FAFF] overflow-hidden">
        {/* Header */}
        <div className="h-[42px] flex items-center gap-2 px-6 bg-[#EFF6FF] border-b border-[rgba(178,178,178,0.40)] rounded-t-xl">
          <ChatIcon />
          <span className="text-[#0171F9] font-inter text-sm font-medium leading-[15px]">FINAL THOUGHTS</span>
        </div>

        {/* Divider between questions */}
        <div className="flex flex-col">
          {review.finalThoughts.map((thought, idx) => (
            <div key={idx}>
              <div className="px-6 py-4 flex flex-col gap-3">
                {/* Question + Answer badge */}
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    {thought.icon === "school" ? <SchoolIcon /> : <UserIcon />}
                    <span className="text-[#0F1724] font-[Outfit] text-md font-medium">{thought.question}</span>
                  </div>
                  <span className={`px-[18px] py-1 rounded-full font-inter text-xs font-semibold leading-[15px] ${getReturnAnswerStyle(thought.answer)}`}>
                    {thought.answer}
                  </span>
                </div>
                {/* Quote */}
                <div className="flex items-center gap-2.5 pl-5">
                  <div className="min-h-[30px] w-[3px] self-stretch bg-[#22C55E] flex-shrink-0 rounded-full" />
                  <p className="text-[#464555] font-inter text-[15px] italic font-normal leading-5">{thought.quote}</p>
                </div>
              </div>
              {idx < review.finalThoughts.length - 1 && (
                <div className="h-px opacity-40 bg-[#B2B2B2] mx-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Show rating details */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="flex items-center gap-1 text-[#0171F9] font-inter text-sm font-medium leading-[15px] hover:opacity-80 transition-opacity cursor-pointer"
      >
        <span>{showDetails ? 'Hide rating details' : 'Show rating details'}</span>
        <span className={`transition-transform ${showDetails ? "rotate-180" : ""}`}>
          <ChevronDownIcon />
        </span>
      </button>


      {/* Rating Details — smooth CSS grid collapse */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out w-[30%]"
        style={{ gridTemplateRows: showDetails ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="space-y-3.5 pb-1">
            {[
              { label: "Classroom Behavior", score: 5 },
              { label: "Lesson Preparedness", score: 5 },
              { label: "Staff Friendliness", score: 5 },
              { label: "School Cleanliness", score: 4 },
              { label: "Support Level", score: 5 },
            ].map(({ label, score }) => (
              <div
                key={label}
                className="flex items-center justify-between gap-4"
              >
                <span className="text-base font-normal text-[#6B7280] font-outfit flex-1">
                  {label}
                </span>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5 min-w-[88px]">
                    {Array.from({ length: 5 }).map((_, index) => {
                      const i = index + 1;
                      const full = i <= Math.floor(score);
                      const half =
                        i === Math.floor(score) + 1 && score % 1 >= 0.5;

                      const starPath =
                        "M9.60071 6.0918L9.72668 6.38574L10.045 6.41309L14.1515 6.76367L11.0509 9.41797L10.8038 9.62988L10.8781 9.94531L11.8038 13.8984L8.27258 11.7969L8.00012 11.6348L7.72766 11.7969L4.19446 13.8994L5.12219 9.94531L5.19641 9.62988L4.94934 9.41797L1.84778 6.76367L5.9552 6.41309L6.27356 6.38574L6.39954 6.0918L8.00012 2.35449L9.60071 6.0918Z";

                      return (
                        <svg
                          key={i}
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <defs>
                            <clipPath id={`half-${label}-${i}`}>
                              <rect x="0" y="0" width="8" height="16" />
                            </clipPath>
                          </defs>

                          {full && (
                            <path
                              d={starPath}
                              fill="#0171F9"
                              stroke="#0171F9"
                              strokeWidth="1.06667"
                            />
                          )}

                          {half && (
                            <>
                              <path
                                d={starPath}
                                fill="none"
                                stroke="#0171F9"
                                strokeWidth="1.06667"
                              />
                              <path
                                d={starPath}
                                fill="#0171F9"
                                stroke="#0171F9"
                                strokeWidth="1.06667"
                                clipPath={`url(#half-${label}-${i})`}
                              />
                            </>
                          )}

                          {!full && !half && (
                            <svg width="16" height="16" />
                          )}
                        </svg>
                      );
                    })}
                  </div>

                  <span className="text-sm font-normal text-black font-outfit w-10 text-right">
                    {score}/5
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Main Page ---
type FilterType = "All" | "Positive" | "Neutral" | "Negative";

export default function SchoolDetailPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filterConfig: { label: FilterType; count: number }[] = [
    { label: "All", count: 124 },
    { label: "Positive", count: 88 },
    { label: "Neutral", count: 21 },
    { label: "Negative", count: 15 },
  ];

  const filteredReviews = activeFilter === "All"
    ? reviews
    : reviews.filter((r) => r.sentiment === activeFilter);

  return (
    <div className="min-h-screen bg-[#F8FAFE] flex flex-col">
      <Header />

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 sm:px-14 py-10 pb-[80px]">

        {/* School Info Card */}
        <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.10)] p-10 mb-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            {/* Left: name, location, grade */}
            <div className="flex flex-col gap-2">
              <h1 className="text-[#121212] font-inter font-bold text-[clamp(32px,5vw,48px)] leading-tight">
                Lincoln High School
              </h1>
              <div className="flex items-center gap-3 flex-wrap">
                <LocationIcon />
                <span className="inline-flex items-center px-2.5 py-1.5 rounded bg-[#DFEEFF] text-[#0171F9] font-inter text-sm font-semibold leading-[15px]">
                  Pre-K
                </span>
              </div>
            </div>

            {/* Right: rating */}
            <div className="flex items-start gap-4 lg:flex-shrink-0">
              <span className="text-[#191C1D] font-[Outfit] font-bold text-[50px] leading-10">4.5</span>
              <div className="flex flex-col items-end gap-1.5 pb-1">
                <StarRating rating={4.5} size="lg" />
                <span className="text-[#9CA3AF] font-inter text-xs font-normal">142 reviews</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-black opacity-10 mt-10 mb-3" />

          {/* Stats */}
          <div className="flex items-center gap-7 flex-wrap">
            <div className="flex flex-col gap-2">
              <span className="text-[#AFAFB2] font-[Outfit] text-md font-medium leading-7">Total Reports</span>
              <div className="flex items-center gap-1.5">
                <FileIcon />
                <span className="text-[#191C1D] font-[Outfit] text-xl font-semibold">142</span>
              </div>
            </div>

            <div className="w-px h-[46px] opacity-10 bg-black" />

            <div className="flex flex-col gap-2">
              <span className="text-[#AFAFB2] font-[Outfit] text-md font-medium leading-7">Would Return to School</span>
              <div className="flex items-center gap-5 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#10B981] font-[Outfit] text-xl font-semibold">85%</span>
                  <span className="text-[#10B981] font-[Outfit] text-xl font-semibold">Yes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#E8A411] font-[Outfit] text-xl font-semibold">5%</span>
                  <span className="text-[#E8A411] font-[Outfit] text-xl font-semibold">Maybe</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#E02C2C] font-[Outfit] text-xl font-semibold">10%</span>
                  <span className="text-[#E02C2C] font-[Outfit] text-xl font-semibold">No</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reports Section */}
        <div>
          {/* Section header + filter tabs */}
          <div className="flex items-end justify-between gap-4 flex-wrap mb-6">
            <h2 className="text-[#121212] font-[Outfit] text-3xl font-semibold leading-none">Recent Report</h2>
            <div className="flex items-center gap-3 flex-wrap">
              {filterConfig.map(({ label, count }) => (
                <button
                  key={label}
                  onClick={() => setActiveFilter(label)}
                  className={`flex items-center gap-1.5 px-4 py-3.5 rounded-lg font-inter text-sm font-medium leading-none transition-colors cursor-pointer ${activeFilter === label
                    ? "bg-[#0B77F9] text-white font-bold"
                    : "bg-white border border-[rgba(178,178,178,0.20)] text-[#121212]"
                    }`}
                >
                  {label === "All" ? `All (${count})` : `${label} (${count})`}
                </button>
              ))}
            </div>
          </div>

          {/* Review cards */}
          <div className="flex flex-col gap-8">
            {filteredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            <button className="w-9 h-9 flex items-center justify-center rounded-md border border-[rgba(0,0,0,0.08)] bg-white hover:bg-gray-50 transition-colors cursor-pointer">
              <ChevronLeftIcon />
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`w-9 h-9 flex items-center justify-center rounded-md font-inter text-sm font-medium transition-colors cursor-pointer ${page === 1
                  ? "bg-[#0171F9] border border-[#0171F9] text-white"
                  : "border border-[rgba(0,0,0,0.08)] bg-white text-[#0171F9] hover:bg-gray-50"
                  }`}
              >
                {page}
              </button>
            ))}
            <span className="w-9 h-9 flex items-center justify-center text-[#0171F9] font-inter text-sm font-medium">
              ...
            </span>
            <button className="w-9 h-9 flex items-center justify-center rounded-md border border-[rgba(0,0,0,0.08)] bg-white text-[#0171F9] font-inter text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer">
              12
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-md border border-[rgba(0,0,0,0.08)] bg-white hover:bg-gray-50 transition-colors cursor-pointer">
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
