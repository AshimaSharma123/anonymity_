"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

/* ─── Types ─────────────────────────────────────────────── */
interface Rating {
  label: string;
  score: number;
  max: number;
}

interface Report {
  id: number;
  school: string;
  location: string;
  teacher: string;
  grade: string;
  date: string;
  stars: number;
  status: "Pending" | "Approved";
  sentiment: "Positive" | "Negative" | "Neutral";
  body: string;
  tags: string[];
  returnToSchool: "Yes" | "No";
  returnToSchoolQuote: string;
  returnToTeacher: "Yes" | "No";
  returnToTeacherQuote: string;
  ratings: Rating[];
}

/* ─── Static data ─────────────────────────────────────────── */
const reports: Report[] = [
  {
    id: 1,
    school: "Oakridge Elementary",
    location: "Austin, TX",
    teacher: "Maria",
    grade: "9th Grade",
    date: "Mar 28, 2026",
    stars: 4,
    status: "Pending",
    sentiment: "Positive",
    body: "The administration was incredibly supportive. I arrived early and received a detailed folder with lesson plans, emergency procedures, and classroom expectations. Students were respectful and stayed on task throughout the session.",
    tags: ["Supportive Staff", "Lesson Plans Provided", "Good Behavior"],
    returnToSchool: "Yes",
    returnToSchoolQuote:
      '"Absolutely one of the best schools I\'ve covered. The office staff checked in on me twice during the day. I never felt like I was on my own."',
    returnToTeacher: "Yes",
    returnToTeacherQuote:
      '"Lesson plans were detailed and easy to follow. Clear expectations were set for the class. I\'d take this assignment again without hesitation."',
    ratings: [
      { label: "Classroom Behavior", score: 5, max: 5 },
      { label: "Lesson Preparedness", score: 5, max: 5 },
      { label: "Staff Friendliness", score: 5, max: 5 },
      { label: "School Cleanliness", score: 4, max: 5 },
      { label: "Support Level", score: 5, max: 5 },
    ],
  },
  {
    id: 2,
    school: "Riverside Academy",
    location: "Los Angeles, CA",
    teacher: "Eran",
    grade: "10th Grade",
    date: "Mar 14, 2025",
    stars: 2,
    status: "Approved",
    sentiment: "Negative",
    body: "The day was quite difficult. Students were disruptive and classroom management was a challenge. Lesson plans were unclear and incomplete, making it hard to follow the schedule properly. Had to request support multiple times.",
    tags: ["Poor Behavior", "Incomplete Lesson Plans", "Would Not Return"],
    returnToSchool: "No",
    returnToSchoolQuote:
      '"Limited support made it difficult to manage the classroom effectively, so I would be hesitant to return."',
    returnToTeacher: "No",
    returnToTeacherQuote:
      '"Due to incomplete lesson planning, it was difficult to maintain a productive learning environment. I would not prefer to take this assignment again."',
    ratings: [
      { label: "Classroom Behavior", score: 1, max: 5 },
      { label: "Lesson Preparedness", score: 2, max: 5 },
      { label: "Staff Friendliness", score: 2, max: 5 },
      { label: "School Cleanliness", score: 3, max: 5 },
      { label: "Support Level", score: 1, max: 5 },
    ],
  },
  {
    id: 3,
    school: "Cedar Valley Institute",
    location: "Houston, TX",
    teacher: "--",
    grade: "9th Grade",
    date: "Dec 14, 2024",
    stars: 3,
    status: "Approved",
    sentiment: "Neutral",
    body: "The front office staff was helpful, but the classroom setup lacked clear instructions. Students were manageable but required constant attention. The experience was okay overall but could be improved with better planning.",
    tags: ["Average Experience", "Some Support", "Needs Better Planning"],
    returnToSchool: "Yes",
    returnToSchoolQuote:
      '"Absolutely one of the best schools I\'ve covered. The office staff checked in on me twice during the day. I never felt like I was on my own."',
    returnToTeacher: "Yes",
    returnToTeacherQuote:
      '"Lesson plans were detailed and easy to follow. Clear expectations were set for the class. I\'d take this assignment again without hesitation."',
    ratings: [
      { label: "Classroom Behavior", score: 3, max: 5 },
      { label: "Lesson Preparedness", score: 2, max: 5 },
      { label: "Staff Friendliness", score: 4, max: 5 },
      { label: "School Cleanliness", score: 3, max: 5 },
      { label: "Support Level", score: 3, max: 5 },
    ],
  },
  {
    id: 4,
    school: "Hillside Technical High",
    location: "San Antonio, TX",
    teacher: "Jeff",
    grade: "10th Grade",
    date: "Mar 28, 2022",
    stars: 4,
    status: "Approved",
    sentiment: "Positive",
    body: "Great experience overall. Lesson plans were structured and easy to follow. Students were cooperative, and nearby regular teachers were helpful when needed. Would definitely consider returning.",
    tags: ["Structured Lessons", "Cooperative Students", "Would Return"],
    returnToSchool: "Yes",
    returnToSchoolQuote:
      '"Absolutely one of the best schools I\'ve covered. The office staff checked in on me twice during the day. I never felt like I was on my own."',
    returnToTeacher: "Yes",
    returnToTeacherQuote:
      '"Lesson plans were detailed and easy to follow. Clear expectations were set for the class. I\'d take this assignment again without hesitation."',
    ratings: [
      { label: "Classroom Behavior", score: 4, max: 5 },
      { label: "Lesson Preparedness", score: 5, max: 5 },
      { label: "Staff Friendliness", score: 4, max: 5 },
      { label: "School Cleanliness", score: 4, max: 5 },
      { label: "Support Level", score: 4, max: 5 },
    ],
  },
];

/* ─── Shared SVG icons ────────────────────────────────────── */
const LocationIcon = () => (
  <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M8.00014 5.34001C8.00014 3.86667 6.80681 2.67334 5.33348 2.67334C3.86014 2.67334 2.66681 3.86667 2.66681 5.34001C2.66681 6.81334 3.86014 8.00667 5.33348 8.00667C6.80681 8.00667 8.00014 6.81334 8.00014 5.34001ZM4.00014 5.34001C4.00014 4.60667 4.60014 4.00667 5.33348 4.00667C6.06681 4.00667 6.66681 4.60667 6.66681 5.34001C6.66681 6.07334 6.06681 6.67334 5.33348 6.67334C4.60014 6.67334 4.00014 6.07334 4.00014 5.34001Z" fill="#414141" />
    <path d="M4.94685 13.2133C5.06018 13.2933 5.20019 13.34 5.33352 13.34C5.46685 13.34 5.60685 13.3 5.72019 13.2133C5.92019 13.0667 10.6869 9.63333 10.6669 5.33333C10.6669 2.39333 8.27352 0 5.33352 0C2.39352 0 0.00018 2.39333 0.00018 5.33333C-0.01982 9.62667 4.74685 13.0667 4.94685 13.2133ZM5.33352 1.34C7.54018 1.34 9.33352 3.13333 9.33352 5.34C9.34685 8.3 6.40685 10.96 5.33352 11.8333C4.26019 10.96 1.32018 8.30667 1.33352 5.34C1.33352 3.13333 3.12685 1.34 5.33352 1.34Z" fill="#414141" />
  </svg>
);

const TeacherIcon = () => (
  <svg width="15" height="15" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.39539 7.41538C7.5097 7.45906 7.60199 7.54635 7.65195 7.65806C7.70192 7.76976 7.70548 7.89674 7.66185 8.01107C7.26862 9.03999 6.67047 9.60738 5.94431 9.89168C5.27231 10.1538 4.5277 10.1538 3.88585 10.1538H3.84585C3.15662 10.1538 2.57816 10.16 2.08339 10.3532C1.62862 10.5305 1.20462 10.8861 0.892625 11.7034C0.848884 11.8177 0.761519 11.91 0.649747 11.9599C0.537976 12.0098 0.410954 12.0133 0.296625 11.9695C0.182297 11.9258 0.0900263 11.8384 0.0401128 11.7267C-0.00980069 11.6149 -0.0132688 11.4879 0.0304715 11.3735C0.423087 10.3446 1.02124 9.77722 1.74739 9.49292C2.42001 9.23076 3.16462 9.23076 3.80585 9.23076H3.84585C4.53508 9.23076 5.11354 9.22461 5.60831 9.03138C6.0637 8.85415 6.4877 8.49845 6.7997 7.68122C6.84338 7.56691 6.93067 7.47463 7.04237 7.42466C7.15408 7.37469 7.28106 7.37175 7.39539 7.41538ZM7.19847 0H9.72585C10.4231 0 10.9929 3.35276e-08 11.4428 0.0603077C11.9129 0.123692 12.3203 0.260307 12.6458 0.585846C12.9708 0.911384 13.1074 1.31815 13.1708 1.78892C13.2311 2.23815 13.2311 2.808 13.2311 3.50584V4.80246C13.2311 5.49969 13.2311 6.06892 13.1708 6.51938C13.108 6.98892 12.9708 7.3963 12.6458 7.72184C12.3209 8.04738 11.9129 8.18399 11.4428 8.24738C10.9929 8.30769 10.4231 8.30769 9.72585 8.30769H8.76893C8.64652 8.30769 8.52912 8.25906 8.44257 8.1725C8.35601 8.08595 8.30739 7.96856 8.30739 7.84615C8.30739 7.72374 8.35601 7.60635 8.44257 7.51979C8.52912 7.43324 8.64652 7.38461 8.76893 7.38461H9.69262C10.4311 7.38461 10.9388 7.38338 11.3197 7.3323C11.6871 7.28307 11.8674 7.19446 11.9929 7.06892C12.1185 6.94399 12.2065 6.76369 12.2563 6.39569C12.3074 6.01476 12.3086 5.50769 12.3086 4.76923V3.53846C12.3086 2.8 12.3074 2.29292 12.2563 1.912C12.2071 1.544 12.1185 1.36431 11.9929 1.23877C11.8674 1.11323 11.6871 1.02461 11.3197 0.975384C10.9382 0.924307 10.4311 0.923076 9.69323 0.923076H7.2317C6.49324 0.923076 5.98554 0.924307 5.60462 0.975384C5.23724 1.02461 5.05693 1.11323 4.93139 1.23877C4.82431 1.34585 4.74554 1.49169 4.69385 1.75569C4.6397 2.03261 4.62185 2.4 4.61754 2.92677C4.61706 2.98738 4.60464 3.0473 4.581 3.10311C4.55736 3.15892 4.52295 3.20953 4.47975 3.25204C4.43655 3.29456 4.3854 3.32815 4.32922 3.35089C4.27304 3.37364 4.21292 3.3851 4.15231 3.38461C4.0917 3.38413 4.03178 3.37171 3.97597 3.34807C3.92016 3.32442 3.86955 3.29002 3.82704 3.24682C3.78452 3.20362 3.75093 3.15247 3.72819 3.09629C3.70544 3.0401 3.69398 2.97999 3.69447 2.91938C3.69878 2.39569 3.71539 1.94892 3.78801 1.57784C3.86308 1.19446 4.00401 0.860307 4.27847 0.585846C4.60462 0.260307 5.01139 0.123692 5.48154 0.0603077C5.93139 3.35276e-08 6.50124 0 7.19847 0Z" fill="#121212" />
    <path fillRule="evenodd" clipRule="evenodd" d="M3.84564 5.23126C3.56002 5.23126 3.2861 5.34473 3.08414 5.54669C2.88218 5.74865 2.76872 6.02257 2.76872 6.30819C2.76872 6.5938 2.88218 6.86772 3.08414 7.06969C3.2861 7.27165 3.56002 7.38511 3.84564 7.38511C4.13126 7.38511 4.40518 7.27165 4.60714 7.06969C4.8091 6.86772 4.92256 6.5938 4.92256 6.30819C4.92256 6.02257 4.8091 5.74865 4.60714 5.54669C4.40518 5.34473 4.13126 5.23126 3.84564 5.23126ZM1.84564 6.30819C1.84564 5.77775 2.05636 5.26905 2.43143 4.89397C2.8065 4.5189 3.31521 4.30819 3.84564 4.30819C4.37607 4.30819 4.88478 4.5189 5.25985 4.89397C5.63492 5.26905 5.84564 5.77775 5.84564 6.30819C5.84564 6.83862 5.63492 7.34733 5.25985 7.7224C4.88478 8.09747 4.37607 8.30818 3.84564 8.30818C3.31521 8.30818 2.8065 8.09747 2.43143 7.7224C2.05636 7.34733 1.84564 6.83862 1.84564 6.30819ZM6.15333 2.92357C6.15333 2.80117 6.20196 2.68377 6.28851 2.59722C6.37507 2.51066 6.49246 2.46204 6.61487 2.46204H10.3072C10.4296 2.46204 10.547 2.51066 10.6335 2.59722C10.7201 2.68377 10.7687 2.80117 10.7687 2.92357C10.7687 3.04598 10.7201 3.16338 10.6335 3.24993C10.547 3.33649 10.4296 3.38511 10.3072 3.38511H6.61487C6.49246 3.38511 6.37507 3.33649 6.28851 3.24993C6.20196 3.16338 6.15333 3.04598 6.15333 2.92357ZM7.99948 5.38511C7.99948 5.2627 8.04811 5.14531 8.13466 5.05875C8.22122 4.9722 8.33861 4.92357 8.46102 4.92357H10.3072C10.4296 4.92357 10.547 4.9722 10.6335 5.05875C10.7201 5.14531 10.7687 5.2627 10.7687 5.38511C10.7687 5.50752 10.7201 5.62491 10.6335 5.71147C10.547 5.79802 10.4296 5.84665 10.3072 5.84665H8.46102C8.33861 5.84665 8.22122 5.79802 8.13466 5.71147C8.04811 5.62491 7.99948 5.50752 7.99948 5.38511Z" fill="#121212" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="14" height="13" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.75 1.61111H2.3C1.67 1.61111 1.355 1.61111 1.11425 1.73222C0.902577 1.83875 0.730481 2.00872 0.622625 2.21778C0.5 2.45556 0.5 2.76667 0.5 3.38889V3.83333M2.75 1.61111H7.25M2.75 1.61111V0.5M0.5 3.83333V8.72222C0.5 9.34444 0.5 9.65556 0.622625 9.89333C0.730481 10.1024 0.902577 10.2724 1.11425 10.3789C1.35444 10.5 1.66944 10.5 2.29831 10.5H7.70169C8.33056 10.5 8.645 10.5 8.88519 10.3789C9.09725 10.2722 9.26937 10.1022 9.37737 9.89333C9.5 9.65556 9.5 9.34556 9.5 8.72445V3.83333M0.5 3.83333H9.5M7.25 1.61111H7.7C8.33 1.61111 8.645 1.61111 8.88519 1.73222C9.09725 1.83889 9.26937 2.00833 9.37737 2.21778C9.5 2.455 9.5 2.76611 9.5 3.38722V3.83333M7.25 1.61111V0.5M7.25 8.27778H7.25113V8.27889H7.25V8.27778ZM5 8.27778H5.00112V8.27889H5V8.27778ZM2.75 8.27778H2.75112V8.27889H2.75V8.27778ZM7.25113 6.05556V6.05667H7.25V6.05556H7.25113ZM5 6.05556H5.00112V6.05667H5V6.05556ZM2.75 6.05556H2.75112V6.05667H2.75V6.05556Z" stroke="#121212" strokeLinecap="round" strokeLinejoin="round" />
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

const ChatIcon = () => (
  <svg className="mt-[2px]" width="15" height="15" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.6 7.26664C10.6 7.56133 10.4829 7.84394 10.2745 8.05232C10.0662 8.26069 9.78355 8.37775 9.48886 8.37775H2.8222L0.599976 10.6V1.71109C0.599976 1.4164 0.717039 1.13379 0.925412 0.925412C1.13379 0.717039 1.4164 0.599976 1.71109 0.599976H9.48886C9.78355 0.599976 10.0662 0.717039 10.2745 0.925412C10.4829 1.13379 10.6 1.4164 10.6 1.71109V7.26664Z" stroke="#0171F9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);



/* ─── Star rating renderer ────────────────────────────────── */
const StarPath = "M9.60071 6.0918L9.72668 6.38574L10.045 6.41309L14.1515 6.76367L11.0509 9.41797L10.8038 9.62988L10.8781 9.94531L11.8038 13.8984L8.27258 11.7969L8.00012 11.6348L7.72766 11.7969L4.19446 13.8994L5.12219 9.94531L5.19641 9.62988L4.94934 9.41797L1.84778 6.76367L5.9552 6.41309L6.27356 6.38574L6.39954 6.0918L8.00012 2.35449L9.60071 6.0918Z";

function StarRating({ count, max = 5 }: { count: number; max?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d={StarPath}
            fill={i < count ? "#0171F9" : "#D1D5DB"}
            stroke={i < count ? "#0171F9" : "#D1D5DB"}
            strokeWidth="1.06667"
          />
        </svg>
      ))}
    </div>
  );
}

function StarDisplay({ count, max = 5 }: { count: number; max?: number }) {
  return (
    <div className="flex items-center gap-2">
      <StarRating count={count} max={max} />
      <span className="font-[Outfit] text-sm text-black">{count}/{max}</span>
    </div>
  );
}

/* ─── Outline star for header area ───────────────────────── */
function OutlineStars({ count }: { count: number }) {
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

/* ─── Status badge ────────────────────────────────────────── */
function StatusBadge({ status }: { status: "Pending" | "Approved" }) {
  if (status === "Pending") {
    return (
      <span className="px-2 py-1 rounded text-xs font-semibold font-inter bg-[rgba(232,164,17,0.10)] text-[#E8A411]">
        Pending
      </span>
    );
  }
  return (
    <span className="px-2 py-1 rounded text-xs font-semibold font-inter bg-[rgba(16,185,129,0.10)] text-[#10B981]">
      Approved
    </span>
  );
}

/* ─── Sentiment badge ─────────────────────────────────────── */
function SentimentBadge({ sentiment }: { sentiment: "Positive" | "Negative" | "Neutral" }) {
  if (sentiment === "Positive") {
    return (
      <span className="px-2 py-1 rounded text-xs font-semibold font-inter min-w-[63px] text-center bg-[rgba(16,185,129,0.10)] text-[#10B981]">
        Positive
      </span>
    );
  }
  if (sentiment === "Negative") {
    return (
      <span className="px-2.5 py-1 rounded-md text-xs font-semibold font-inter bg-[#FFE0E0] text-[#E02C2C]">
        Negative
      </span>
    );
  }
  return (
    <span className="px-2.5 py-1 rounded-md text-xs font-semibold font-inter bg-[#FFEABD] text-[#E8A411]">
      Neutral
    </span>
  );
}

/* ─── Return answer pill ──────────────────────────────────── */
function ReturnPill({ answer }: { answer: "Yes" | "No" }) {
  if (answer === "Yes") {
    return (
      <span className="px-[18px] py-1 rounded-full text-xs font-semibold font-inter bg-[#BBFBE6] text-[#2D7D65]">
        Yes
      </span>
    );
  }
  return (
    <span className="px-[18px] py-1 rounded-full text-xs font-semibold font-inter bg-[#FFE0E0] text-[#E02C2C]">
      No
    </span>
  );
}

/* ─── Final Thoughts block ────────────────────────────────── */
function FinalThoughts({ report }: { report: Report }) {
  return (
    <div className="rounded-xl border border-[rgba(178,178,178,0.40)] bg-[#F8FAFF] overflow-hidden">
      {/* Header bar */}
      <div className="min-h-[42px] flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-2.5 bg-[#EFF6FF] border-b border-[rgba(178,178,178,0.40)] rounded-t-xl">
        <ChatIcon />
        <span className="text-[#0171F9] font-inter text-xs sm:text-sm font-medium leading-[15px]">FINAL THOUGHTS</span>
      </div>


      {/* Return to school row */}
      <div className="px-4 sm:px-6 py-3 sm:py-4 flex flex-col gap-2 sm:gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <SchoolIcon />
            <span className="text-[#0F1724] font-[Outfit] text-sm sm:text-base font-medium leading-5">Would you return to this school?</span>
          </div>
          <ReturnPill answer={report.returnToSchool} />
        </div>
        <div className="flex items-center gap-2.5 pl-5">
          <div className="min-h-[30px] w-[3px] self-stretch bg-[#22C55E] flex-shrink-0 rounded-full" />
          <p className="text-[#464555] font-inter sm:text-[15px] text-sm italic font-normal leading-5">{report.returnToSchoolQuote}</p>
        </div>
      </div>

      {/* Horizontal divider */}
      <div className="h-px opacity-40 bg-[#B2B2B2] mx-0" />

      {/* Return to teacher row */}
      <div className="px-4 sm:px-6 py-3 sm:py-4 flex flex-col gap-2 sm:gap-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <UserIcon />
            <span className="text-[#0F1724] font-[Outfit] text-sm sm:text-base font-medium leading-5">Would you return for this teacher or class?</span>
          </div>
          <ReturnPill answer={report.returnToTeacher} />
        </div>
        <div className="flex items-center gap-2.5 pl-5">
          <div className="min-h-[30px] w-[3px] self-stretch bg-[#22C55E] flex-shrink-0 rounded-full" />
          <p className="text-[#464555] font-inter sm:text-[15px] text-sm italic font-normal leading-5">{report.returnToTeacherQuote}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Rating row ──────────────────────────────────────────── */
function RatingRow({ label, score, max }: Rating) {
  return (
    <div className="flex items-center w-full max-w-xs">
      <span className="flex-1 font-[Outfit] text-base font-normal text-[#6B7280]">{label}</span>
      <StarDisplay count={score} max={max} />
    </div>
  );
}

/* ─── Single Report Card ──────────────────────────────────── */
function ReportCard({ report, defaultExpanded = false }: { report: Report; defaultExpanded?: boolean }) {
  const [showRatings, setShowRatings] = useState(defaultExpanded);

  return (
   
    <div className={`bg-white rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.10)] ${showRatings ? "p-4 sm:p-6 lg:p-7" : "px-4 sm:px-6 lg:px-7 pt-4 sm:pt-6 lg:pt-7"} flex flex-col gap-4 sm:gap-5 lg:gap-6`}>
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-3">
        {/* Left: school info */}
        <div className="flex flex-col gap-3 flex-1">
          <h2 className="font-inter text-[20px]  font-bold text-[#121212]">{report.school}</h2>

          <div className="flex flex-col gap-3">
            {/* Location · Teacher · Grade */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 opacity-80">
                <LocationIcon />
                <span className="font-[Outfit] text-sm text-[#414141]">{report.location}</span>
              </div>

              <span className="w-[3px] h-[3px] rounded-full bg-[#676767] opacity-64" />

              <div className="flex items-center gap-1.5">
                <TeacherIcon />
                <span className="font-inter text-sm font-medium text-[#121212] opacity-70">{report.teacher}</span>
              </div>

              <span className="w-[3px] h-[3px] rounded-full bg-[#676767] opacity-64" />

              <span className="px-2 py-1 rounded text-sm font-semibold font-inter bg-[#DFEEFF] text-[#0171F9]">
                {report.grade}
              </span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-1.5 opacity-80">
              <CalendarIcon />
              <span className="font-[Outfit] text-sm text-[#414141]">{report.date}</span>
            </div>
          </div>
        </div>

        {/* Right: stars + badges */}
        <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap sm:justify-end">
          <OutlineStars count={report.stars} />
          <div className="flex items-center gap-2.5">
            <StatusBadge status={report.status} />
            <SentimentBadge sentiment={report.sentiment} />
          </div>
        </div>
      </div>

      {/* Body text */}
      <p className="text-black font-inter text-sm sm:text-base font-normal leading-6 sm:leading-7 opacity-70">{report.body}</p>

      {/* Tags */}
      <div className="flex flex-wrap items-center gap-3">
        {report.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-md border border-[#EAEAEA] bg-[#F2F2F2] text-[#9A9A9A] font-inter text-xs sm:text-sm font-medium leading-[15px]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-[#DADADA] opacity-40" />

      {/* Final Thoughts */}
      <FinalThoughts report={report} />

      {/* Toggle rating details */}
      <button
        onClick={() => setShowRatings(!showRatings)}
        className="flex items-center gap-1 text-[#0171F9] font-inter text-xs sm:text-sm font-medium leading-[15px] hover:opacity-80 transition-opacity cursor-pointer"
      >
        <span>{showRatings ? "Hide rating details" : "Show rating details"}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          {showRatings ? (
            <path d="M5 12.0833L10 7.08331L15 12.0833H5Z" fill="#0171F9" stroke="#0171F9" strokeWidth="1.66667" strokeLinejoin="round" />
          ) : (
            <path d="M5 7.08333L10 12.0833L15 7.08333H5Z" fill="#0171F9" stroke="#0171F9" strokeWidth="1.66667" strokeLinejoin="round" />
          )}
        </svg>
      </button>

      {/* Expandable ratings */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out w-full sm:w-[60%] lg:w-[30%]"
        style={{ gridTemplateRows: showRatings ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="space-y-2.5 sm:space-y-3 lg:space-y-3.5 pb-1">
            {[
              { label: "Classroom Behavior", score: 5 },
              { label: "Lesson Preparedness", score: 5 },
              { label: "Staff Friendliness", score: 5 },
              { label: "School Cleanliness", score: 4 },
              { label: "Support Level", score: 5 },
            ].map(({ label, score }) => (
              <div
                key={label}
                className="flex flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 lg:gap-4"
              >
                <span className="text-sm sm:text-base font-normal text-[#6B7280] font-outfit flex-1">
                  {label}
                </span>

                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-0.5 min-w-[70px] sm:min-w-[88px]">
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

/* ─── Pagination ──────────────────────────────────────────── */
function Pagination() {
  const [current, setCurrent] = useState(1);
  const pages = [1, 2, 3];

  return (
    <div className="flex items-center justify-center gap-2 pt-4">
      {/* Prev */}
      <button
        onClick={() => setCurrent((p) => Math.max(1, p - 1))}
        className="w-9 h-9 flex items-center justify-center rounded-md border border-[rgba(0,0,0,0.08)] bg-white hover:bg-gray-50 transition-colors"
        aria-label="Previous page"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 12L6 8L10 4" stroke="#0171F9" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Page numbers */}
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setCurrent(p)}
          className={`w-9 h-9 flex items-center justify-center rounded-md text-sm font-medium font-inter transition-colors ${current === p
              ? "bg-[#0171F9] border border-[#0171F9] text-white"
              : "border border-[rgba(0,0,0,0.08)] bg-white text-[#0171F9] hover:bg-blue-50"
            }`}
        >
          {p}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => setCurrent((p) => Math.min(pages.length, p + 1))}
        className="w-9 h-9 flex items-center justify-center rounded-md border border-[rgba(0,0,0,0.08)] bg-white hover:bg-gray-50 transition-colors"
        aria-label="Next page"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 12L10 8L6 4" stroke="#0171F9" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function MyReportsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFE]">
      <Header />

      {/* Hero / Search section */}
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-14">
          {/* Title + subtitle */}
          <div className="pt-8 sm:pt-12 lg:pt-[72px] pb-8">
            <h1 className="text-[#121212] font-[Inter] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.2]">My Reports</h1>
            <p className="text-[#121212] font-[Inter] text-sm sm:text-base lg:text-lg font-normal leading-[1.5] sm:leading-[26px] tracking-[0.2px] opacity-[0.88] mt-2">
              Your experiences shared with the guest teacher community.
            </p>
          </div>

          {/* Search bar — blue container with input + button as siblings */}
          <div className="flex items-center gap-2 bg-[#E9F2FF] rounded-2xl p-2">
            <div className="flex items-center w-[70%] gap-2 flex-1 py-3.5 px-3 sm:px-4 bg-white rounded-lg border border-[rgba(195,198,214,0.20)] px-4">
              <svg className="sm:block hidden" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="#737685" />
              </svg>
              <input
                type="text"
                placeholder="Search your review..."
                className="flex-1 font-inter text-base text-[#737685] placeholder:text-[#737685] outline-none bg-transparent"
              />
            </div>

            <button className="sm:block hidden flex-shrink-0 h-[54px] px-11 bg-[#0171F9] text-white font-[Inter] text-sm font-semibold leading-5 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
              Search
            </button>
            <button className="sm:hidden block flex-shrink-0 py-4 px-4 h-fit bg-[#0171F9] text-white font-[Inter] text-sm font-semibold leading-5 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">

              <svg width="18" height="18" viewBox="0 0 18 18" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="#fff" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Reports list */}
      <main className="flex flex-col w-full gap-4 sm:gap-6 lg:gap-8 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 py-6 sm:py-10 pb-12 sm:pb-[80px]">
        {reports.map((report, idx) => (
         
          <ReportCard key={report.id} report={report} defaultExpanded={idx === 0} />
         
        ))}

        <Pagination />
      </main>

      <Footer />
    </div>
  );
}
