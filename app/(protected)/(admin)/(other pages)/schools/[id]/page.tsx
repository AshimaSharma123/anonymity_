"use client";

import { useState } from "react";
import Link from "next/link";

// ─── Icon Components ──────────────────────────────────────────────────────────

const SentimentSmileIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <g clipPath="url(#clip0_teachers_smile)">
      <path d="M9.53792 6C9.66836 6.20146 9.84979 6.3676 10.0652 6.48277C10.2805 6.59795 10.5227 6.65839 10.769 6.65839C11.0152 6.65839 11.2574 6.59795 11.4728 6.48277C11.6881 6.3676 11.8696 6.20146 12 6M6.46144 6C6.33097 6.20132 6.14956 6.36733 5.93426 6.48242C5.71897 6.59751 5.47687 6.65789 5.23072 6.65789C4.98457 6.65789 4.74247 6.59751 4.52718 6.48242C4.31188 6.36733 4.13047 6.20132 4 6M4.30752 9.62581C4.61131 10.3289 5.12406 10.9296 5.78115 11.352C6.43825 11.7745 7.21029 12 8 12C8.78971 12 9.56175 11.7745 10.2188 11.352C10.8759 10.9296 11.3887 10.3289 11.6925 9.62581" stroke="#191919" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.00033 15.3337C12.0503 15.3337 15.3337 12.0503 15.3337 8.00033C15.3337 3.95033 12.0503 0.666992 8.00033 0.666992C3.95033 0.666992 0.666992 3.95033 0.666992 8.00033C0.666992 12.0503 3.95033 15.3337 8.00033 15.3337Z" stroke="#191919" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_teachers_smile"><rect width="16" height="16" fill="white" /></clipPath>
    </defs>
  </svg>
);

const FilterFunnelIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M13.9848 3.19692C13.9848 2.778 13.9848 2.56854 13.9025 2.40845C13.831 2.26781 13.7168 2.15339 13.5763 2.08154C13.4163 2 13.2068 2 12.7879 2H3.21254C2.79362 2 2.58416 2 2.42407 2.08154C2.28332 2.15326 2.16888 2.2677 2.09717 2.40845C2.01563 2.56854 2.01562 2.778 2.01562 3.19692V3.74825C2.01562 3.93152 2.01562 4.02279 2.03657 4.10882C2.05489 4.18541 2.08518 4.25862 2.12634 4.32576C2.17197 4.40057 2.23705 4.46565 2.36572 4.59507L6.15322 8.38181C6.28263 8.51123 6.34772 8.57631 6.39335 8.65112C6.43474 8.71894 6.46466 8.79126 6.48312 8.86806C6.50406 8.95334 6.50406 9.04386 6.50406 9.22265V12.7805C6.50406 13.4216 6.50406 13.7425 6.63872 13.9355C6.69714 14.019 6.77199 14.0896 6.85869 14.1432C6.94539 14.1967 7.04211 14.2319 7.14292 14.2467C7.37557 14.2811 7.66283 14.1382 8.23585 13.851L8.83431 13.5517C9.07519 13.4321 9.19488 13.3722 9.28241 13.2824C9.36005 13.2031 9.41907 13.1076 9.45521 13.0027C9.49636 12.8845 9.49636 12.7498 9.49636 12.4813V9.22863C9.49636 9.04535 9.49636 8.95409 9.5173 8.86806C9.53562 8.79147 9.56592 8.71826 9.60707 8.65112C9.65195 8.57631 9.71704 8.51198 9.84421 8.3848L9.8472 8.38181L13.6347 4.59507C13.7634 4.46565 13.8277 4.40057 13.8741 4.32576C13.9155 4.25793 13.9454 4.18562 13.9638 4.10882C13.9848 4.02429 13.9848 3.93302 13.9848 3.75423V3.19692Z" stroke="#191919" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronDownSmallIcon = () => (
  <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M4.91753 4.91753C4.79251 5.04251 4.62297 5.11272 4.44619 5.11272C4.26942 5.11272 4.09988 5.04251 3.97486 4.91753L0.203526 1.14619C0.139852 1.08469 0.0890639 1.01113 0.0541246 0.929795C0.0191852 0.848459 0.000794382 0.760979 2.51709e-05 0.67246C-0.00074404 0.58394 0.0161239 0.496154 0.0496445 0.414223C0.0831651 0.332292 0.132667 0.257857 0.195262 0.195262C0.257857 0.132667 0.332292 0.0831648 0.414223 0.0496442C0.496154 0.0161236 0.58394 -0.00074404 0.67246 2.51714e-05C0.760979 0.000794382 0.848459 0.0191852 0.929795 0.0541246C1.01113 0.0890639 1.08469 0.139852 1.14619 0.203525L4.44619 3.50353L7.74619 0.203525C7.87193 0.0820866 8.04033 0.0148904 8.21513 0.0164093C8.38992 0.0179282 8.55713 0.0880407 8.68074 0.211646C8.80434 0.335252 8.87446 0.50246 8.87598 0.677258C8.87749 0.852056 8.8103 1.02046 8.68886 1.14619L4.91753 4.91753Z" fill="#1E1E1E" />
  </svg>
);

const AddCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M7.99967 1.3335C4.31967 1.3335 1.33301 4.32016 1.33301 8.00016C1.33301 11.6802 4.31967 14.6668 7.99967 14.6668C11.6797 14.6668 14.6663 11.6802 14.6663 8.00016C14.6663 4.32016 11.6797 1.3335 7.99967 1.3335ZM10.6663 8.66683H8.66634V10.6668C8.66634 11.0335 8.36634 11.3335 7.99967 11.3335C7.63301 11.3335 7.33301 11.0335 7.33301 10.6668V8.66683H5.33301C4.96634 8.66683 4.66634 8.36683 4.66634 8.00016C4.66634 7.6335 4.96634 7.3335 5.33301 7.3335H7.33301V5.3335C7.33301 4.96683 7.63301 4.66683 7.99967 4.66683C8.36634 4.66683 8.66634 4.96683 8.66634 5.3335V7.3335H10.6663C11.033 7.3335 11.333 7.6335 11.333 8.00016C11.333 8.36683 11.033 8.66683 10.6663 8.66683Z" fill="#0171F9" />
  </svg>
);

const TrashIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5.8335 17.5C5.37516 17.5 4.98294 17.3369 4.65683 17.0108C4.33072 16.6847 4.16738 16.2922 4.16683 15.8333V5H3.3335V3.33333H7.50016V2.5H12.5002V3.33333H16.6668V5H15.8335V15.8333C15.8335 16.2917 15.6704 16.6842 15.3443 17.0108C15.0182 17.3375 14.6257 17.5006 14.1668 17.5H5.8335ZM14.1668 5H5.8335V15.8333H14.1668V5ZM7.50016 14.1667H9.16683V6.66667H7.50016V14.1667ZM10.8335 14.1667H12.5002V6.66667H10.8335V14.1667Z" fill="#34373F" />
  </svg>
);

const PaginationChevronLeftIcon = () => (
  <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
    <path d="M5.67629 0L0 6L5.67629 12L7 10.5996L2.64856 6L7 1.4004L5.67629 0Z" fill="#323152" />
  </svg>
);

const PaginationChevronRightIcon = () => (
  <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
    <path d="M1.32371 0L7 6L1.32371 12L0 10.5996L4.35144 6L0 1.4004L1.32371 0Z" fill="#323152" />
  </svg>
);

const BackArrowIcon = () => (
  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.49202 9.04802L8.52603 14.2183C8.7315 14.4294 8.83013 14.6756 8.82191 14.9569C8.81369 15.2383 8.7065 15.4845 8.50035 15.6955C8.29488 15.889 8.05516 15.9903 7.7812 15.9994C7.50724 16.0086 7.26753 15.9073 7.06206 15.6955L0.281557 8.73147C0.178822 8.62596 0.10588 8.51165 0.0627314 8.38854C0.0195827 8.26544 -0.00130658 8.13355 6.32218e-05 7.99286C0.00143302 7.85217 0.0230071 7.72027 0.0647859 7.59717C0.106565 7.47407 0.179165 7.35976 0.282584 7.25424L7.06309 0.290169C7.25143 0.0967228 7.48704 0 7.7699 0C8.05277 0 8.29659 0.0967228 8.50138 0.290169C8.70685 0.501202 8.80958 0.751979 8.80958 1.0425C8.80958 1.33302 8.70685 1.58345 8.50138 1.79378L3.49202 6.9377H22.9726C23.2637 6.9377 23.5079 7.03899 23.7051 7.24158C23.9024 7.44417 24.0007 7.6946 24 7.99286C23.9993 8.29112 23.9007 8.54189 23.7041 8.74519C23.5076 8.94848 23.2637 9.04943 22.9726 9.04802H3.49202Z" fill="#1E1E1E" />
  </svg>
);

const EditIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.16667 15.8333H5.35417L13.5 7.6875L12.3125 6.5L4.16667 14.6458V15.8333ZM3.33333 17.5C3.09722 17.5 2.89944 17.42 2.74 17.26C2.58056 17.1 2.50056 16.9022 2.5 16.6667V14.6458C2.5 14.4236 2.54167 14.2117 2.625 14.01C2.70833 13.8083 2.82639 13.6314 2.97917 13.4792L13.5 2.97917C13.6667 2.82639 13.8508 2.70833 14.0525 2.625C14.2542 2.54167 14.4658 2.5 14.6875 2.5C14.9092 2.5 15.1244 2.54167 15.3333 2.625C15.5422 2.70833 15.7228 2.83333 15.875 3L17.0208 4.16667C17.1875 4.31944 17.3089 4.5 17.385 4.70833C17.4611 4.91667 17.4994 5.125 17.5 5.33333C17.5 5.55556 17.4617 5.7675 17.385 5.96917C17.3083 6.17083 17.1869 6.35472 17.0208 6.52083L6.52083 17.0208C6.36806 17.1736 6.19083 17.2917 5.98917 17.375C5.7875 17.4583 5.57583 17.5 5.35417 17.5H3.33333ZM12.8958 7.10417L12.3125 6.5L13.5 7.6875L12.8958 7.10417Z" fill="#333333" />
  </svg>
);

const LocationPinIcon = () => (
  
<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.39603 5.60426C8.39603 4.05804 7.14366 2.80566 5.59743 2.80566C4.0512 2.80566 2.79883 4.05804 2.79883 5.60426C2.79883 7.15049 4.0512 8.40287 5.59743 8.40287C7.14366 8.40287 8.39603 7.15049 8.39603 5.60426ZM4.19813 5.60426C4.19813 4.83465 4.82781 4.20496 5.59743 4.20496C6.36704 4.20496 6.99673 4.83465 6.99673 5.60426C6.99673 6.37388 6.36704 7.00356 5.59743 7.00356C4.82781 7.00356 4.19813 6.37388 4.19813 5.60426Z" fill="#414141"/>
<path d="M5.19147 13.8671C5.31041 13.951 5.45734 14 5.59727 14C5.7372 14 5.88412 13.958 6.00306 13.8671C6.21296 13.7131 11.2155 10.1099 11.1945 5.5972C11.1945 2.51174 8.68272 0 5.59727 0C2.51181 0 6.58647e-05 2.51174 6.58647e-05 5.5972C-0.0209236 10.1029 4.98158 13.7131 5.19147 13.8671ZM5.59727 1.4063C7.91311 1.4063 9.79517 3.28836 9.79517 5.6042C9.80916 8.71064 6.7237 11.5022 5.59727 12.4188C4.47083 11.5022 1.38537 8.71764 1.39937 5.6042C1.39937 3.28836 3.28143 1.4063 5.59727 1.4063Z" fill="#414141"/>
</svg>

);

const BuildingIcon = () => (
  
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5625 12.5625V5.8125L0.5625 6.65625V12.5625H3.5625ZM3.5625 12.5625H9.5625M3.5625 12.5625V2.56275M9.5625 12.5625V5.8125L12.5625 6.65625V12.5625H9.5625ZM9.5625 12.5625V2.56275M11.0625 3.5625L6.5625 0.5625L2.0625 3.5625M5.8125 4.3125H7.3125M5.8125 6.5625H7.3125" stroke="#414141" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

);

const StarIcon = () => (
  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.22105 16L4.58947 10.0842L0 6.10526L6.06316 5.57895L8.42105 0L10.7789 5.57895L16.8421 6.10526L12.2526 10.0842L13.6211 16L8.42105 12.8632L3.22105 16Z" fill="#0171F9" />
  </svg>
);

const StarHalfIcon = () => (
  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.22105 16L4.58947 10.0842L0 6.10526L6.06316 5.57895L8.42105 0L10.7789 5.57895L16.8421 6.10526L12.2526 10.0842L13.6211 16L8.42105 12.8632L3.22105 16Z" fill="url(#halfGrad)" />
    <defs>
      <linearGradient id="halfGrad" x1="7.63" y1="8" x2="9.13" y2="8" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0171F9" />
        <stop offset="1" stopColor="#0171F9" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const TrendDownIcon = () => (
  
<svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_443_2781)">
<path d="M6.69618 12.5285C6.73275 12.5869 6.78047 12.6376 6.83662 12.6776C6.89278 12.7176 6.95626 12.7462 7.02344 12.7616C7.09063 12.7771 7.16021 12.7792 7.2282 12.7678C7.29619 12.7564 7.36127 12.7317 7.41971 12.6951C7.47816 12.6585 7.52883 12.6108 7.56883 12.5546C7.60883 12.4985 7.63738 12.435 7.65285 12.3678C7.66832 12.3006 7.6704 12.2311 7.65898 12.1631C7.64756 12.0951 7.62286 12.03 7.58629 11.9715L6.69618 12.5285ZM6.72181 11.5794L6.27657 11.8576L6.27675 11.8579L6.72181 11.5794ZM5.30564 8.32194C5.23186 8.20385 5.1142 8.11991 4.97853 8.08858C4.84286 8.05725 4.7003 8.0811 4.58222 8.15488C4.46413 8.22866 4.38019 8.34632 4.34886 8.48199C4.31753 8.61766 4.34138 8.76022 4.41516 8.8783L5.30564 8.32194ZM4.41173 8.87281C4.48551 8.9909 4.60317 9.07484 4.73884 9.10617C4.87451 9.1375 5.01707 9.11365 5.13515 9.03987C5.25324 8.96609 5.33718 8.84843 5.36851 8.71276C5.39984 8.57709 5.37599 8.43453 5.30221 8.31645L4.41173 8.87281ZM3.29309 5.10077C3.21931 4.98268 3.10164 4.89874 2.96598 4.86741C2.83031 4.83608 2.68775 4.85993 2.56966 4.93371C2.45158 5.00749 2.36764 5.12515 2.33631 5.26082C2.30498 5.39649 2.32883 5.53905 2.40261 5.65713L3.29309 5.10077ZM7.58629 11.9715L7.57933 11.9604L6.68913 12.5172L6.69618 12.5285L7.58629 11.9715ZM7.57933 11.9604L7.49681 11.8283L6.60679 12.3854L6.68913 12.5172L7.57933 11.9604ZM7.49681 11.8283L7.41447 11.6965L6.52435 12.2535L6.60679 12.3854L7.49681 11.8283ZM7.41447 11.6965L7.33179 11.5645L6.44177 12.1216L6.52435 12.2535L7.41447 11.6965ZM7.33179 11.5645L7.2493 11.4328L6.35919 11.9898L6.44177 12.1216L7.33179 11.5645ZM7.2493 11.4328L7.16686 11.3009L6.27675 11.8579L6.35919 11.9898L7.2493 11.4328ZM7.16705 11.3012L5.30564 8.32194L4.41516 8.8783L6.27657 11.8576L7.16705 11.3012ZM5.30221 8.31645L3.29309 5.10077L2.40261 5.65713L4.41173 8.87281L5.30221 8.31645Z" fill="#E02C2C"/>
<path d="M1.46753 11.3775L6.57409 12.5566C6.69165 12.5838 6.81341 12.5875 6.93242 12.5676C7.05143 12.5477 7.16535 12.5045 7.26767 12.4406C7.37 12.3767 7.45874 12.2932 7.52881 12.195C7.59888 12.0967 7.64891 11.9857 7.67606 11.8681L8.85518 6.76155" stroke="#E02C2C" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_443_2781">
<rect width="10" height="14" fill="white" transform="matrix(1 0 0 -1 0 14)"/>
</clipPath>
</defs>
</svg>

);

const TeacherIdIcon = () => (
  <svg width="15" height="15" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M7.39539 7.41538C7.5097 7.45906 7.60199 7.54635 7.65195 7.65806C7.70192 7.76976 7.70548 7.89674 7.66185 8.01107C7.26862 9.03999 6.67047 9.60738 5.94431 9.89168C5.27231 10.1538 4.5277 10.1538 3.88585 10.1538H3.84585C3.15662 10.1538 2.57816 10.16 2.08339 10.3532C1.62862 10.5305 1.20462 10.8861 0.892625 11.7034C0.848884 11.8177 0.761519 11.91 0.649747 11.9599C0.537976 12.0098 0.410954 12.0133 0.296625 11.9695C0.182297 11.9258 0.0900263 11.8384 0.0401128 11.7267C-0.00980069 11.6149 -0.0132688 11.4879 0.0304715 11.3735C0.423087 10.3446 1.02124 9.77722 1.74739 9.49292C2.42001 9.23076 3.16462 9.23076 3.80585 9.23076H3.84585C4.53508 9.23076 5.11354 9.22461 5.60831 9.03138C6.0637 8.85415 6.4877 8.49845 6.7997 7.68122C6.84338 7.56691 6.93067 7.47463 7.04237 7.42466C7.15408 7.37469 7.28106 7.37175 7.39539 7.41538ZM7.19847 0H9.72585C10.4231 0 10.9929 3.35276e-08 11.4428 0.0603077C11.9129 0.123692 12.3203 0.260307 12.6458 0.585846C12.9708 0.911384 13.1074 1.31815 13.1708 1.78892C13.2311 2.23815 13.2311 2.808 13.2311 3.50584V4.80246C13.2311 5.49969 13.2311 6.06892 13.1708 6.51938C13.108 6.98892 12.9708 7.3963 12.6458 7.72184C12.3209 8.04738 11.9129 8.18399 11.4428 8.24738C10.9929 8.30769 10.4231 8.30769 9.72585 8.30769H8.76893C8.64652 8.30769 8.52912 8.25906 8.44257 8.1725C8.35601 8.08595 8.30739 7.96856 8.30739 7.84615C8.30739 7.72374 8.35601 7.60635 8.44257 7.51979C8.52912 7.43324 8.64652 7.38461 8.76893 7.38461H9.69262C10.4311 7.38461 10.9388 7.38338 11.3197 7.3323C11.6871 7.28307 11.8674 7.19446 11.9929 7.06892C12.1185 6.94399 12.2065 6.76369 12.2563 6.39569C12.3074 6.01476 12.3086 5.50769 12.3086 4.76923V3.53846C12.3086 2.8 12.3074 2.29292 12.2563 1.912C12.2071 1.544 12.1185 1.36431 11.9929 1.23877C11.8674 1.11323 11.6871 1.02461 11.3197 0.975384C10.9382 0.924307 10.4311 0.923076 9.69323 0.923076H7.2317C6.49324 0.923076 5.98554 0.924307 5.60462 0.975384C5.23724 1.02461 5.05693 1.11323 4.93139 1.23877C4.82431 1.34585 4.74554 1.49169 4.69385 1.75569C4.6397 2.03261 4.62185 2.4 4.61754 2.92677C4.61706 2.98738 4.60464 3.0473 4.581 3.10311C4.55736 3.15892 4.52295 3.20953 4.47975 3.25204C4.43655 3.29456 4.3854 3.32815 4.32922 3.35089C4.27304 3.37364 4.21292 3.3851 4.15231 3.38461C4.0917 3.38413 4.03178 3.37171 3.97597 3.34807C3.92016 3.32442 3.86955 3.29002 3.82704 3.24682C3.78452 3.20362 3.75093 3.15247 3.72819 3.09629C3.70544 3.0401 3.69398 2.97999 3.69447 2.91938C3.69878 2.39569 3.71539 1.94892 3.78801 1.57784C3.86308 1.19446 4.00401 0.860307 4.27847 0.585846C4.60462 0.260307 5.01139 0.123692 5.48154 0.0603077C5.93139 3.35276e-08 6.50124 0 7.19847 0Z" fill="#121212" fillRule="evenodd"></path><path fillRule="evenodd" clipRule="evenodd" d="M3.84564 5.23126C3.56002 5.23126 3.2861 5.34473 3.08414 5.54669C2.88218 5.74865 2.76872 6.02257 2.76872 6.30819C2.76872 6.5938 2.88218 6.86772 3.08414 7.06969C3.2861 7.27165 3.56002 7.38511 3.84564 7.38511C4.13126 7.38511 4.40518 7.27165 4.60714 7.06969C4.8091 6.86772 4.92256 6.5938 4.92256 6.30819C4.92256 6.02257 4.8091 5.74865 4.60714 5.54669C4.40518 5.34473 4.13126 5.23126 3.84564 5.23126ZM1.84564 6.30819C1.84564 5.77775 2.05636 5.26905 2.43143 4.89397C2.8065 4.5189 3.31521 4.30819 3.84564 4.30819C4.37607 4.30819 4.88478 4.5189 5.25985 4.89397C5.63492 5.26905 5.84564 5.77775 5.84564 6.30819C5.84564 6.83862 5.63492 7.34733 5.25985 7.7224C4.88478 8.09747 4.37607 8.30818 3.84564 8.30818C3.31521 8.30818 2.8065 8.09747 2.43143 7.7224C2.05636 7.34733 1.84564 6.83862 1.84564 6.30819ZM6.15333 2.92357C6.15333 2.80117 6.20196 2.68377 6.28851 2.59722C6.37507 2.51066 6.49246 2.46204 6.61487 2.46204H10.3072C10.4296 2.46204 10.547 2.51066 10.6335 2.59722C10.7201 2.68377 10.7687 2.80117 10.7687 2.92357C10.7687 3.04598 10.7201 3.16338 10.6335 3.24993C10.547 3.33649 10.4296 3.38511 10.3072 3.38511H6.61487C6.49246 3.38511 6.37507 3.33649 6.28851 3.24993C6.20196 3.16338 6.15333 3.04598 6.15333 2.92357ZM7.99948 5.38511C7.99948 5.2627 8.04811 5.14531 8.13466 5.05875C8.22122 4.9722 8.33861 4.92357 8.46102 4.92357H10.3072C10.4296 4.92357 10.547 4.9722 10.6335 5.05875C10.7201 5.14531 10.7687 5.2627 10.7687 5.38511C10.7687 5.50752 10.7201 5.62491 10.6335 5.71147C10.547 5.79802 10.4296 5.84665 10.3072 5.84665H8.46102C8.33861 5.84665 8.22122 5.79802 8.13466 5.71147C8.04811 5.62491 7.99948 5.50752 7.99948 5.38511Z" fill="#121212"></path></svg>
);

const DotIcon = () => (
  <svg width="4" height="4" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="0.64" cx="1.5" cy="1.5" r="1.5" fill="#676767" />
  </svg>
);

// ─── Teacher Types & Data ─────────────────────────────────────────────────────

type TeacherRisk = "High" | "Medium" | "Low";
type TeacherStatus = "Active" | "Inactive";

interface Teacher {
  id: number;
  name: string;
  reports: number;
  avgRating: number;
  risk: TeacherRisk;
  status: TeacherStatus;
}

const allTeachers: Teacher[] = [
  { id: 1, name: "Albert Chambers", reports: 35, avgRating: 3.2, risk: "Medium", status: "Active" },
  { id: 2, name: "Methew", reports: 29, avgRating: 2.2, risk: "High", status: "Active" },
  { id: 3, name: "James Morton", reports: 42, avgRating: 4.7, risk: "Low", status: "Active" },
  { id: 4, name: "Sophia Reynolds", reports: 31, avgRating: 3.2, risk: "Medium", status: "Active" },
  { id: 5, name: "Liam Gallagher", reports: 27, avgRating: 1.2, risk: "High", status: "Active" },
  { id: 6, name: "Maya Patel", reports: 39, avgRating: 2.1, risk: "High", status: "Active" },
  { id: 7, name: "Ethan Brooks", reports: 33, avgRating: 4.1, risk: "Low", status: "Active" },
  { id: 8, name: "Isabella Cruz", reports: 26, avgRating: 3.0, risk: "Medium", status: "Active" },
  { id: 9, name: "Noah Bennett", reports: 44, avgRating: 4.9, risk: "Low", status: "Active" },
  { id: 10, name: "Olivia Martinez", reports: 35, avgRating: 4.3, risk: "Low", status: "Active" },
  { id: 11, name: "Carlos Rivera", reports: 22, avgRating: 2.8, risk: "Medium", status: "Inactive" },
  { id: 12, name: "Emma Johnson", reports: 38, avgRating: 4.5, risk: "Low", status: "Active" },
  { id: 13, name: "Daniel Kim", reports: 18, avgRating: 1.8, risk: "High", status: "Active" },
  { id: 14, name: "Priya Singh", reports: 30, avgRating: 3.6, risk: "Medium", status: "Active" },
  { id: 15, name: "Ryan Thompson", reports: 25, avgRating: 3.9, risk: "Low", status: "Active" },
  { id: 16, name: "Aisha Williams", reports: 41, avgRating: 4.6, risk: "Low", status: "Active" },
  { id: 17, name: "Marcus Lee", reports: 20, avgRating: 2.0, risk: "High", status: "Active" },
  { id: 18, name: "Sophie Anderson", reports: 37, avgRating: 3.4, risk: "Medium", status: "Active" },
  { id: 19, name: "Jacob Harris", reports: 29, avgRating: 4.1, risk: "Low", status: "Active" },
  { id: 20, name: "Natalia Flores", reports: 33, avgRating: 2.6, risk: "High", status: "Inactive" },
  { id: 21, name: "Owen Clark", reports: 45, avgRating: 4.8, risk: "Low", status: "Active" },
  { id: 22, name: "Zara Ahmed", reports: 28, avgRating: 3.1, risk: "Medium", status: "Active" },
  { id: 23, name: "Lucas White", reports: 36, avgRating: 2.4, risk: "High", status: "Active" },
  { id: 24, name: "Hannah Moore", reports: 31, avgRating: 4.0, risk: "Low", status: "Active" },
  { id: 25, name: "Eli Patel", reports: 24, avgRating: 3.7, risk: "Medium", status: "Active" },
  { id: 26, name: "Chloe Davis", reports: 40, avgRating: 4.4, risk: "Low", status: "Active" },
  { id: 27, name: "Tyler Brown", reports: 19, avgRating: 1.5, risk: "High", status: "Active" },
  { id: 28, name: "Leila Nguyen", reports: 32, avgRating: 3.8, risk: "Medium", status: "Active" },
];

const teacherRiskStyles: Record<TeacherRisk, { bg: string; text: string }> = {
  High:   { bg: "bg-[#FFECEC]", text: "text-[#E53E3E]" },
  Medium: { bg: "bg-[#FFF4E0]", text: "text-[#FFA600]" },
  Low:    { bg: "bg-[#E6FBF0]", text: "text-[#22A45D]" },
};

const TEACHERS_PER_PAGE = 10;

// ─── Add Teacher Sidebar ──────────────────────────────────────────────────────

const CloseIcon = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
    <path d="M17.0001 18.9835L10.0585 25.9251C9.79874 26.1849 9.46819 26.3147 9.0668 26.3147C8.66541 26.3147 8.33485 26.1849 8.07513 25.9251C7.81541 25.6654 7.68555 25.3349 7.68555 24.9335C7.68555 24.5321 7.81541 24.2015 8.07513 23.9418L15.0168 17.0001L8.07513 10.0585C7.81541 9.79874 7.68555 9.46819 7.68555 9.0668C7.68555 8.66541 7.81541 8.33485 8.07513 8.07513C8.33485 7.81541 8.66541 7.68555 9.0668 7.68555C9.46819 7.68555 9.79874 7.81541 10.0585 8.07513L17.0001 15.0168L23.9418 8.07513C24.2015 7.81541 24.5321 7.68555 24.9335 7.68555C25.3349 7.68555 25.6654 7.81541 25.9251 8.07513C26.1849 8.33485 26.3147 8.66541 26.3147 9.0668C26.3147 9.46819 26.1849 9.79874 25.9251 10.0585L18.9835 17.0001L25.9251 23.9418C26.1849 24.2015 26.3147 24.5321 26.3147 24.9335C26.3147 25.3349 26.1849 25.6654 25.9251 25.9251C25.6654 26.1849 25.3349 26.3147 24.9335 26.3147C24.5321 26.3147 24.2015 26.1849 23.9418 25.9251L17.0001 18.9835Z" fill="#212121" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <g clipPath="url(#chevron-clip)">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.47124 10.4712C8.34622 10.5962 8.17668 10.6664 7.9999 10.6664C7.82313 10.6664 7.65359 10.5962 7.52857 10.4712L3.75724 6.6999C3.63580 6.5786 3.56860 6.4102 3.57012 6.2354C3.57164 6.0606 3.64175 5.8934 3.76536 5.7698C3.88896 5.6462 4.05617 5.5761 4.23097 5.5746C4.40577 5.5731 4.57417 5.6403 4.6999 5.7617L7.9999 9.0617L11.2999 5.7617C11.4256 5.6403 11.594 5.5731 11.7688 5.5746C11.9436 5.5761 12.1108 5.6462 12.2344 5.7698C12.3581 5.8934 12.4282 6.0606 12.4297 6.2354C12.4312 6.4102 12.364 6.5786 12.2426 6.6999L8.47124 10.4712Z" fill="#1E1E1E" fillOpacity="0.6" />
    </g>
    <defs>
      <clipPath id="chevron-clip"><rect width="16" height="16" fill="white" /></clipPath>
    </defs>
  </svg>
);

interface AddTeacherSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddTeacherSidebar({ isOpen, onClose }: AddTeacherSidebarProps) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSave = () => {
    // TODO: persist teacher
    onClose();
    setName("");
    setStatus("");
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[524px] bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-8 pb-6">
          <h2 className="font-inter font-semibold text-[32px] text-[#212121] leading-6">Add Teacher</h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer"
            aria-label="Close sidebar"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-black/10 mx-0" />

        {/* Form */}
        <div className="flex flex-col gap-4 px-6 pt-8">
          {/* Name field */}
          <div className="flex flex-col gap-0.5">
            <label className="font-outfit font-medium text-base text-[#212121] leading-6">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              className="h-12 px-4 rounded-lg bg-[#F3F4F5] font-inter font-normal text-sm text-[#6B7280] placeholder:text-[#6B7280] outline-none focus:ring-2 focus:ring-[#0171F9]/30 transition"
            />
          </div>

          {/* Status field */}
          <div className="flex flex-col gap-0.5">
            <label className="font-outfit font-medium text-base text-[#212121] leading-6">Status</label>
            <div className="relative">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="appearance-none w-full h-12 px-4 pr-10 rounded-lg bg-[#F3F4F5] font-inter font-normal text-sm text-[#6B7280] outline-none focus:ring-2 focus:ring-[#0171F9]/30 transition cursor-pointer"
              >
                <option value="" disabled>Select</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                <ChevronDownIcon />
              </span>
            </div>
          </div>

          {/* Save button */}
          <button
            onClick={handleSave}
            className="flex items-center justify-center mt-8 px-5 py-4 rounded-lg bg-[#0171F9] font-inter font-semibold text-md text-white leading-6 hover:bg-[#0161dd] transition-colors cursor-pointer"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

// ─── Teachers Tab Component ───────────────────────────────────────────────────

function TeachersTab() {
  const [riskFilter, setRiskFilter] = useState<"All" | TeacherRisk>("All");
  const [statusFilter, setStatusFilter] = useState<"All" | TeacherStatus>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = allTeachers.filter((t) => {
    const matchRisk = riskFilter === "All" || t.risk === riskFilter;
    const matchStatus = statusFilter === "All" || t.status === statusFilter;
    return matchRisk && matchStatus;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / TEACHERS_PER_PAGE));
  const paginated = filtered.slice(
    (currentPage - 1) * TEACHERS_PER_PAGE,
    currentPage * TEACHERS_PER_PAGE
  );

  const handleFilterChange = <T,>(setter: (v: T) => void) => (val: T) => {
    setter(val);
    setCurrentPage(1);
  };

  const startItem = filtered.length === 0 ? 0 : (currentPage - 1) * TEACHERS_PER_PAGE + 1;
  const endItem = Math.min(currentPage * TEACHERS_PER_PAGE, filtered.length);

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <AddTeacherSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Tab header */}
      <div className="flex items-center justify-between px-6 pt-6 pb-0">
        <h3 className="font-outfit font-medium text-xl text-[#121212]">Teachers</h3>
        <button
          onClick={() => setSidebarOpen(true)}
          className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <AddCircleIcon />
          <span className="font-outfit font-normal text-md text-[#0171F9]">Add New</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 px-4 py-3 flex-wrap">
        {/* Risk filter */}
        <div className="relative">
          
          <select
            value={riskFilter}
            onChange={(e) => handleFilterChange(setRiskFilter)(e.target.value as "All" | TeacherRisk)}
            className="appearance-none flex items-center gap-2.5 pl-9 pr-8 py-[11px] rounded-[10px] border border-[rgba(178,178,178,0.20)] bg-[#FAFCFF] font-inter text-sm text-[#121212] opacity-80 cursor-pointer outline-none"
          >
            <option value="All">Risk: All</option>
            <option value="High">Risk: High</option>
            <option value="Medium">Risk: Medium</option>
            <option value="Low">Risk: Low</option>
          </select>
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
            <SentimentSmileIcon />
          </span>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
            <ChevronDownSmallIcon />
          </span>
        </div>

        {/* Status filter */}
        <div className="relative">
          <select
            value={statusFilter}
            onChange={(e) => handleFilterChange(setStatusFilter)(e.target.value as "All" | TeacherStatus)}
            className="appearance-none flex items-center gap-2.5 pl-9 pr-8 py-[11px] rounded-[10px] border border-[rgba(178,178,178,0.20)] bg-[#FAFCFF] font-inter text-sm text-[#121212] opacity-80 cursor-pointer outline-none"
          >
            <option value="All">Status: All</option>
            <option value="Active">Status: Active</option>
            <option value="Inactive">Status: Inactive</option>
          </select>
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
            <FilterFunnelIcon />
          </span>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
            <ChevronDownSmallIcon />
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-y border-[#E5E7EB] bg-white">
              <th className="text-left px-3 py-3.5 font-inter font-medium text-xs text-[#6F6C70] uppercase tracking-wide">Teacher</th>
              <th className="text-left px-5 py-3.5 font-inter font-medium text-xs text-[#6F6C70] uppercase tracking-wide">Reports</th>
              <th className="text-left px-5 py-3.5 font-inter font-medium text-xs text-[#6F6C70] uppercase tracking-wide">Avg Rating</th>
              <th className="text-left px-5 py-3.5 font-inter font-medium text-xs text-[#6F6C70] uppercase tracking-wide">Risk</th>
              <th className="text-left px-5 py-3.5 font-inter font-medium text-xs text-[#6F6C70] uppercase tracking-wide">Status</th>
              <th className="text-left px-5 py-3.5 font-inter font-medium text-xs text-[#6F6C70] uppercase tracking-wide">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-5 py-10 text-center font-inter text-sm text-[#6F6C70]">
                  No teachers found.
                </td>
              </tr>
            ) : (
              paginated.map((teacher) => {
                const risk = teacherRiskStyles[teacher.risk];
                return (
                  <tr key={teacher.id} className="border-b border-[#F2F4F7] hover:bg-[#F8FAFF] transition-colors">
                    {/* Name */}
                    <td className="px-3 py-[17.5px]">
                      <span className="font-inter font-normal text-[13px] text-[#030711] leading-5">
                        {teacher.name}
                      </span>
                    </td>
                    {/* Reports */}
                    <td className="px-5 py-[17.5px] whitespace-nowrap">
                      <span className="font-inter font-normal text-[13px] text-[#030711] ">
                        {teacher.reports}
                      </span>
                    </td>
                    {/* Avg Rating */}
                    <td className="px-5 py-[17.5px] whitespace-nowrap">
                      <span className="font-inter font-normal text-[13px] text-[#030711]">
                        {teacher.avgRating.toFixed(1)}
                        <span className="text-[#9CA3AF]">/5</span>
                      </span>
                    </td>
                    {/* Risk badge */}
                    <td className="px-5 py-[17.5px] whitespace-nowrap">
                      <span className={`inline-flex items-center justify-center w-[88px] px-2.5 py-1 rounded-md font-inter font-medium text-xs ${risk.bg} ${risk.text}`}>
                        {teacher.risk}
                      </span>
                    </td>
                    {/* Status */}
                    <td className="px-5 py-[17.5px] whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md border border-[#EFF0F2] bg-[#F6F6F6] font-inter font-normal text-xs text-[#030711]">
                        {teacher.status}
                      </span>
                    </td>
                    {/* Actions */}
                    <td className="px-5 py-[17.5px] whitespace-nowrap">
                      <button className="flex items-center justify-center h-9 w-9 rounded-md border border-[#EFF0F2] bg-white hover:bg-gray-50 transition-colors cursor-pointer">
                        <TrashIcon />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-8 py-5">
        <span className="font-inter font-normal text-sm text-[#191C1E] opacity-80">
          {filtered.length === 0
            ? "Show 0 results"
            : `Show ${startItem}-${endItem} of ${filtered.length}`}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="w-[38px] h-[38px] flex items-center justify-center rounded-lg border border-[#E5E7EB] bg-white disabled:opacity-40 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <PaginationChevronLeftIcon />
          </button>
          {Array.from({ length: Math.min(3, totalPages) }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-[38px] h-[38px] flex items-center justify-center rounded-lg font-inter text-[15px] transition-colors cursor-pointer ${
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
            className="w-[38px] h-[38px] flex items-center justify-center rounded-lg border border-[#E5E7EB] bg-white disabled:opacity-40 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <PaginationChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Types ────────────────────────────────────────────────────────────────────

type ReportSentiment = "Positive" | "Negative" | "Neutral";
type ReportStatus = "Pending" | "Approved";
type ReturnAnswer = "Yes" | "No" | "Maybe";

interface SchoolReport {
  id: string;
  grade: string;
  teacher: string;
  date: string;
  sentiment: ReportSentiment;
  status: ReportStatus;
  quote: string;
  schoolReturn: ReturnAnswer;
  teacherReturn: ReturnAnswer;
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const schoolReports: SchoolReport[] = [
  {
    id: "RPT - 249",
    grade: "10th Grade",
    teacher: "Maria",
    date: "Mar 16,2026",
    sentiment: "Positive",
    status: "Pending",
    quote: '"Great Classroom environment. Lesson plans were clear"',
    schoolReturn: "Yes",
    teacherReturn: "Yes",
  },
  {
    id: "RPT - 177",
    grade: "9th Grade",
    teacher: "Jeff",
    date: "Mar 10,2026",
    sentiment: "Negative",
    status: "Pending",
    quote: '"Extremely difficult day. No materials, unruly students"',
    schoolReturn: "No",
    teacherReturn: "No",
  },
  {
    id: "RPT - 155",
    grade: "11th Grade",
    teacher: "N.A",
    date: "Mar 4,2026",
    sentiment: "Negative",
    status: "Approved",
    quote: '""No lesson plans. Students were very disruptive all day."',
    schoolReturn: "No",
    teacherReturn: "No",
  },
];

// ─── Helper Styles ────────────────────────────────────────────────────────────

function getSentimentStyle(sentiment: ReportSentiment) {
  switch (sentiment) {
    case "Positive": return "bg-[#BBFBE6] text-[#2D7D65]";
    case "Negative": return "bg-[#FEEFEF] text-[#E02C2C]";
    default: return "bg-[#FFF4E0] text-[#FFA600]";
  }
}

function getStatusStyle(status: ReportStatus) {
  switch (status) {
    case "Approved": return "bg-[#BBFBE6] text-[#2D7D65]";
    default: return "bg-[#FFF4E0] text-[#FFA600]";
  }
}

function getReturnStyle(answer: ReturnAnswer) {
  switch (answer) {
    case "Yes": return "bg-[#BBFBE6] text-[#2D7D65]";
    case "No": return "bg-[#FEEFEF] text-[#E02C2C]";
    default: return "bg-[#FFF4E0] text-[#FFA600]";
  }
}

// ─── Report Card ──────────────────────────────────────────────────────────────

function ReportCard({ report, isLast }: { report: SchoolReport; isLast: boolean }) {
  return (
    <div className={`flex flex-col gap-4 py-5 px-6 ${!isLast ? "border-b border-[#EFEFEF]" : ""}`}>
      {/* Top row */}
      <div className="flex items-center justify-start flex-wrap gap-5">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="font-inter font-bold text-[17px] text-[#0171F9] leading-5">{report.id}</span>
          <span className="font-inter font-medium text-sm text-[#121212] opacity-70 leading-5">{report.grade}</span>
          <DotIcon />
          <div className="flex items-center gap-1.5">
            <TeacherIdIcon />
            <span className="font-inter font-medium text-sm text-[#121212] opacity-70">{report.teacher}</span>
          </div>
          <DotIcon />
          <span className="font-inter font-medium text-sm text-[#121212] opacity-70 leading-5">{report.date}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className={`px-2.5 py-1 rounded-md font-inter font-semibold text-xs leading-[15px] ${getSentimentStyle(report.sentiment)}`}>
            {report.sentiment}
          </span>
          <span className={`px-2.5 py-1 rounded-md font-inter font-semibold text-xs leading-[15px] ${getStatusStyle(report.status)}`}>
            {report.status}
          </span>
        </div>
      </div>

      {/* Quote */}
      <p className="font-inter font-normal text-[16px] italic text-[#464555] leading-5">{report.quote}</p>

      {/* Return badges */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className={`px-2.5 py-1.5 rounded-md font-inter font-medium text-xs leading-[15px] ${getReturnStyle(report.schoolReturn)}`}>
          School: {report.schoolReturn}
        </span>
        <span className={`px-2.5 py-1.5 rounded-md font-inter font-medium text-xs leading-[15px] ${getReturnStyle(report.teacherReturn)}`}>
          Teacher: {report.teacherReturn}
        </span>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function SchoolDetailPage() {
  const [activeTab, setActiveTab] = useState<"Reports" | "Teachers">("Reports");

  return (
    <main className="flex-1 overflow-y-auto p-8 bg-[#F3F4F7]">
      {/* Page top bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Link href="/schools" className="flex items-center justify-center hover:opacity-70 transition-opacity cursor-pointer">
            <BackArrowIcon />
          </Link>
          <h1 className="font-outfit font-semibold text-[28px] text-[#121212] leading-5">School</h1>
        </div>
        <Link href={"/schools"} className="flex items-center gap-1.5 px-[17px] py-3 rounded-lg border border-[#EFF0F2] bg-white hover:bg-gray-50 transition-colors cursor-pointer">
          <EditIcon />
          <span className="font-inter font-semibold text-base text-[#333]">Edit</span>
        </Link>
      </div>

      {/* School info card */}
      <div className="bg-white rounded-lg overflow-hidden mb-4">
        {/* Top section: school name + rating */}
        <div className="flex items-start justify-between flex-wrap gap-6 px-7 py-3">
          {/* Left: name, badges, location */}
          <div className="flex flex-col gap-3">
            {/* Name row */}
            <div className="flex items-center gap-2.5 flex-wrap pt-2">
              <h2 className="font-inter font-bold text-2xl text-[#030711] leading-5">Lincoln High School</h2>
              <span className="flex items-center px-4 py-1 rounded-full border border-[rgba(11,119,249,0.40)] bg-[#EFF6FF]">
                <span className="font-inter font-medium text-sm text-[#0B77F9]">School District</span>
              </span>
              <span className="flex items-center px-4 py-1 rounded-full border border-[rgba(224,44,44,0.40)] bg-[#FEEFEF]">
                <span className="font-inter font-medium text-sm text-[#E02C2C]">High Risk</span>
              </span>
            </div>

            {/* Location row */}
            <div className="flex items-center gap-5 flex-wrap">
              <div className="flex items-center gap-1.5">
              <LocationPinIcon />
              <span className="font-outfit font-normal text-sm text-[#414141] leading-7">Portland, OR</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BuildingIcon />
                <span className="font-outfit font-normal text-sm text-[#414141] leading-7">Los Angeles Unified School District</span>
              </div>
            </div>
          </div>

          {/* Right: rating */}
          <div className="flex items-start gap-2 flex-shrink-0 pt-2">
           
            <div className="flex flex-col items-end pt-2">
              
              <div className="flex items-center gap-2">
                <div><span className="font-outfit font-bold text-[30px] text-[#191C1D] leading-[40px]">4.2</span></div>
                 
                <div className="flex items-center"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarHalfIcon /></div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-inter font-normal text-xs text-[#9CA3AF] leading-[16.5px]">142 reviews</span>
                <span className="font-inter font-normal text-xs text-[#9CA3AF] leading-[16.5px]">2025-2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-black opacity-10 mx-7" />

        {/* Stats row */}
        <div className="flex items-center gap-8 flex-wrap px-7 py-3">
          {/* This Month vs Last */}
          <div className="flex flex-col">
            <span className="font-outfit font-medium text-md text-[#AFAFB2] leading-7">This Month vs Last</span>
            <div className="flex items-baseline gap-2 flex-wrap">
              <TrendDownIcon />
              <span className="font-outfit font-semibold text-lg text-[#000]">8</span>
              <span className="font-outfit font-medium text-[12px] text-[#AFAFB2]">vs 14 last Month</span>
            </div>
          </div>

          <div className="w-px h-[46px] bg-black opacity-10" />

          {/* Would Return to School (current period) */}
          <div className="flex flex-col ">
            <span className="font-outfit font-medium text-md text-[#AFAFB2] leading-7">Would Return to School</span>
            <div className="flex items-center gap-5 flex-wrap">
              <div className="flex items-center gap-1.5">
                <span className="font-outfit font-semibold text-lg text-[#10B981]">85%</span>
                <span className="font-outfit font-semibold text-lg text-[#10B981]">Yes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-outfit font-semibold text-lg text-[#E8A411]">5%</span>
                <span className="font-outfit font-semibold text-lg text-[#E8A411]">Maybe</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-outfit font-semibold text-lg text-[#E02C2C]">10%</span>
                <span className="font-outfit font-semibold text-lg text-[#E02C2C]">No</span>
              </div>
            </div>
          </div>

          <div className="w-px h-[46px] bg-black opacity-10" />

          {/* Would Return to School (all-time) */}
          <div className="flex flex-col ">
            <span className="font-outfit font-medium text-md text-[#AFAFB2] leading-7">Would Return to School</span>
            <div className="flex items-center gap-5 flex-wrap">
              <div className="flex items-center gap-1.5">
                <span className="font-outfit font-semibold text-lg text-[#10B981]">25%</span>
                <span className="font-outfit font-semibold text-lg text-[#10B981]">Yes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-outfit font-semibold text-lg text-[#E8A411]">30%</span>
                <span className="font-outfit font-semibold text-lg text-[#E8A411]">Maybe</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-outfit font-semibold text-lg text-[#E02C2C]">45%</span>
                <span className="font-outfit font-semibold text-lg text-[#E02C2C]">No</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 px-7 mt-2">
          {(["Reports", "Teachers"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3.5 font-inter font-medium text-md leading-5 transition-colors cursor-pointer border-b-2 ${
                activeTab === tab
                  ? "text-[#0171F9] border-[#0171F9]"
                  : "text-[#121212] border-transparent hover:text-[#0171F9]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Reports Section */}
      {activeTab === "Reports" && (
        <div className="bg-white rounded-lg overflow-hidden relative">
          {/* Section header */}
          <div className="flex items-center justify-between px-6 py-4">
            <span className="font-outfit font-medium text-2xl text-[#121212]">Reports</span>
           
          </div>

          {/* Report cards */}
          <div>
            {schoolReports.map((report, index) => (
              <ReportCard
                key={report.id}
                report={report}
                isLast={index === schoolReports.length - 1}
              />
            ))}
          </div>
        </div>
      )}

      {/* Teachers Tab */}
      {activeTab === "Teachers" && <TeachersTab />}
    </main>
  );
}
