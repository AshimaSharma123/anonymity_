"use client";

import { useState } from "react";

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

const XIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M6 7.27757L1.52852 11.749C1.36122 11.9163 1.14829 12 0.889734 12C0.631179 12 0.418251 11.9163 0.25095 11.749C0.0836498 11.5817 0 11.3688 0 11.1103C0 10.8517 0.0836498 10.6388 0.25095 10.4715L4.72243 6L0.25095 1.52852C0.0836498 1.36122 0 1.14829 0 0.889734C0 0.631179 0.0836498 0.418251 0.25095 0.25095C0.418251 0.0836498 0.631179 0 0.889734 0C1.14829 0 1.36122 0.0836498 1.52852 0.25095L6 4.72243L10.4715 0.25095C10.6388 0.0836498 10.8517 0 11.1103 0C11.3688 0 11.5817 0.0836498 11.749 0.25095C11.9163 0.418251 12 0.631179 12 0.889734C12 1.14829 11.9163 1.36122 11.749 1.52852L7.27757 6L11.749 10.4715C11.9163 10.6388 12 10.8517 12 11.1103C12 11.3688 11.9163 11.5817 11.749 11.749C11.5817 11.9163 11.3688 12 11.1103 12C10.8517 12 10.6388 11.9163 10.4715 11.749L6 7.27757Z" fill="#212121" />
  </svg>
);

const SchoolIcon = () => (
  
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.59998 12.6001V5.8501L0.599976 6.69385V12.6001H3.59998ZM3.59998 12.6001H9.59998M3.59998 12.6001V2.60035M9.59998 12.6001V5.8501L12.6 6.69385V12.6001H9.59998ZM9.59998 12.6001V2.60035M11.1 3.6001L6.59998 0.600098L2.09998 3.6001M5.84998 4.3501H7.34998M5.84998 6.6001H7.34998" stroke="#5C5C5C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

);

const AnonymousIcon = () => (
  <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
    <path d="M11.0003 10.8957C12.3323 10.8957 13.4163 9.81218 13.4163 8.48018C13.4163 7.14818 12.3323 6.06418 11.0003 6.06418C10.0863 6.06418 9.29883 6.58018 8.88833 7.33068H6.11183C5.70183 6.58018 4.91433 6.06418 4.00033 6.06418C2.66833 6.06418 1.58433 7.14818 1.58433 8.48018C1.58433 9.81218 2.66833 10.8952 4.00033 10.8952C5.33233 10.8952 6.41583 9.81218 6.41583 8.48018C6.41583 8.42868 6.40383 8.38118 6.40083 8.33018H8.59933C8.59633 8.38118 8.58433 8.42868 8.58433 8.48018C8.58526 9.12057 8.84013 9.73445 9.29304 10.1872C9.74596 10.6399 10.3599 10.895 11.0003 10.8957ZM11.0003 7.06418C11.7808 7.06418 12.4163 7.69918 12.4163 8.48018C12.4163 9.26118 11.7813 9.89518 11.0003 9.89518C10.2193 9.89518 9.58433 9.26068 9.58433 8.48018C9.58433 7.69968 10.2193 7.06418 11.0003 7.06418ZM4.00033 9.89568C3.21933 9.89568 2.58433 9.26068 2.58433 8.48018C2.58433 7.69968 3.21933 7.06418 4.00033 7.06418C4.78133 7.06418 5.41583 7.69918 5.41583 8.48018C5.41583 9.26118 4.78083 9.89568 4.00033 9.89568ZM14.6373 4.83968C13.8537 4.61688 13.0599 4.43101 12.2588 4.28268L11.4903 0.403183C11.4603 0.258183 11.3703 0.133183 11.2453 0.0631832C11.1814 0.0288753 11.1109 0.00846769 11.0385 0.00329765C10.9662 -0.00187239 10.8935 0.00831188 10.8253 0.0331832C8.68266 0.843186 6.318 0.843186 4.17533 0.0331832C4.10829 0.00697517 4.03624 -0.00393172 3.96444 0.00125846C3.89264 0.00644863 3.82291 0.0276049 3.76033 0.0631832C3.63033 0.133183 3.54033 0.258183 3.51033 0.403183L2.74183 4.28318C1.94056 4.43134 1.14668 4.61704 0.36283 4.83968C0.299645 4.85771 0.240633 4.88801 0.189167 4.92886C0.1377 4.96971 0.0947898 5.0203 0.0628881 5.07774C0.0309863 5.13518 0.0107191 5.19835 0.00324522 5.26363C-0.0042287 5.32891 0.00123719 5.39502 0.0193304 5.45818C0.0953304 5.72318 0.37233 5.87468 0.63783 5.80168C5.12286 4.51853 9.8778 4.51853 14.3628 5.80168C14.4887 5.83293 14.6219 5.81406 14.7341 5.74906C14.8464 5.68406 14.9291 5.578 14.9647 5.45325C15.0003 5.3285 14.986 5.19479 14.925 5.08033C14.8639 4.96587 14.7608 4.87959 14.6373 4.83968ZM3.79383 4.10768L4.38033 1.16318C6.4111 1.80318 8.58956 1.80318 10.6203 1.16318L11.2053 4.10718C8.74757 3.75243 6.25159 3.75292 3.79383 4.10768Z" fill="#0171F9" />
  </svg>
);

const ChatIcon = () => (
  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6 7.26676C10.6 7.56145 10.4829 7.84406 10.2745 8.05244C10.0662 8.26081 9.78355 8.37788 9.48886 8.37788H2.8222L0.599976 10.6001V1.71121C0.599976 1.41652 0.717039 1.13391 0.925412 0.925535C1.13379 0.717161 1.4164 0.600098 1.71109 0.600098H9.48886C9.78355 0.600098 10.0662 0.717161 10.2745 0.925535C10.4829 1.13391 10.6 1.41652 10.6 1.71121V7.26676Z" stroke="#0171F9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
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

const ApproveIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M6.99995 13.4165C6.24162 13.4165 5.48329 13.2998 4.78329 13.0082C3.49995 12.5415 2.39162 11.6665 1.63329 10.4998C0.874953 9.33318 0.524953 7.93318 0.641619 6.59152C0.758286 5.19152 1.28329 3.90818 2.15829 2.85818C3.03329 1.80818 4.25829 1.04985 5.59995 0.758182C6.94162 0.466515 8.34162 0.583182 9.62495 1.16652C9.91662 1.28318 10.0333 1.63318 9.91662 1.92485C9.79995 2.21652 9.44995 2.33318 9.15829 2.21652C8.10829 1.74985 6.94162 1.63318 5.89162 1.86652C4.72495 2.09985 3.73329 2.74151 3.03329 3.61652C2.27495 4.49152 1.86662 5.54152 1.80829 6.70818C1.74995 7.81652 2.04162 8.98318 2.62495 9.91652C3.20829 10.8498 4.14162 11.6082 5.19162 11.9582C6.24162 12.3665 7.40829 12.3665 8.51662 12.0749C9.56662 11.7832 10.5583 11.0832 11.2583 10.2082C11.9583 9.33318 12.3083 8.16652 12.3083 7.05818V6.53318C12.3083 6.18318 12.5416 5.94985 12.8916 5.94985C13.2416 5.94985 13.475 6.18318 13.475 6.53318V6.99985C13.475 8.39985 13.0083 9.74152 12.1916 10.8498C11.375 11.9582 10.2083 12.7748 8.86662 13.1832C8.22495 13.2998 7.64162 13.4165 6.99995 13.4165ZM6.99995 8.74985C6.82495 8.74985 6.70829 8.69151 6.59162 8.57485L4.84162 6.82485C4.60829 6.59152 4.60829 6.24152 4.84162 6.00818C5.07495 5.77485 5.42495 5.77485 5.65829 6.00818L6.99995 7.34985L12.425 1.92485C12.6583 1.69151 13.0083 1.69151 13.2416 1.92485C13.475 2.15818 13.475 2.50818 13.2416 2.74151L7.40829 8.57485C7.29162 8.69151 7.17495 8.74985 6.99995 8.74985Z" fill="#32A85B" />
  </svg>
);

const RejectIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8.00004 8.9335L9.93337 10.8668C10.0556 10.9891 10.2112 11.0502 10.4 11.0502C10.5889 11.0502 10.7445 10.9891 10.8667 10.8668C10.9889 10.7446 11.05 10.5891 11.05 10.4002C11.05 10.2113 10.9889 10.0557 10.8667 9.9335L8.93337 8.00016L10.8667 6.06683C10.9889 5.94461 11.05 5.78905 11.05 5.60016C11.05 5.41127 10.9889 5.25572 10.8667 5.1335C10.7445 5.01127 10.5889 4.95016 10.4 4.95016C10.2112 4.95016 10.0556 5.01127 9.93337 5.1335L8.00004 7.06683L6.06671 5.1335C5.94449 5.01127 5.78893 4.95016 5.60004 4.95016C5.41115 4.95016 5.2556 5.01127 5.13337 5.1335C5.01115 5.25572 4.95004 5.41127 4.95004 5.60016C4.95004 5.78905 5.01115 5.94461 5.13337 6.06683L7.06671 8.00016L5.13337 9.9335C5.01115 10.0557 4.95004 10.2113 4.95004 10.4002C4.95004 10.5891 5.01115 10.7446 5.13337 10.8668C5.2556 10.9891 5.41115 11.0502 5.60004 11.0502C5.78893 11.0502 5.94449 10.9891 6.06671 10.8668L8.00004 8.9335ZM8.00004 14.6668C7.07782 14.6668 6.21115 14.4917 5.40004 14.1415C4.58893 13.7913 3.88337 13.3164 3.28338 12.7168C2.68338 12.1173 2.20849 11.4117 1.85871 10.6002C1.50893 9.78861 1.33382 8.92194 1.33337 8.00016C1.33293 7.07839 1.50804 6.21172 1.85871 5.40016C2.20937 4.58861 2.68426 3.88305 3.28338 3.2835C3.88249 2.68394 4.58804 2.20905 5.40004 1.85883C6.21204 1.50861 7.07871 1.3335 8.00004 1.3335C8.92137 1.3335 9.78804 1.50861 10.6 1.85883C11.412 2.20905 12.1176 2.68394 12.7167 3.2835C13.3158 3.88305 13.7909 4.58861 14.142 5.40016C14.4932 6.21172 14.668 7.07839 14.6667 8.00016C14.6654 8.92194 14.4903 9.78861 14.1414 10.6002C13.7925 11.4117 13.3176 12.1173 12.7167 12.7168C12.1158 13.3164 11.4103 13.7915 10.6 14.1422C9.78982 14.4928 8.92315 14.6677 8.00004 14.6668ZM8.00004 13.3335C9.48893 13.3335 10.75 12.8168 11.7834 11.7835C12.8167 10.7502 13.3334 9.48905 13.3334 8.00016C13.3334 6.51127 12.8167 5.25016 11.7834 4.21683C10.75 3.1835 9.48893 2.66683 8.00004 2.66683C6.51115 2.66683 5.25004 3.1835 4.21671 4.21683C3.18337 5.25016 2.66671 6.51127 2.66671 8.00016C2.66671 9.48905 3.18337 10.7502 4.21671 11.7835C5.25004 12.8168 6.51115 13.3335 8.00004 13.3335Z" fill="#DD393D" />
  </svg>
);

// ─── Types ────────────────────────────────────────────────────────────────────

type Sentiment = "Positive" | "Negative" | "Neutral";
type Status = "Pending" | "Approved";

interface Report {
  id: string;
  school: string;
  grade: string;
  teacher: string;
  submittedBy: string;
  date: string;
  sentiment: Sentiment;
  status: Status;
  reviewer: string;
  score: number;
  ratings: { label: string; value: number; max: number }[];
  reviewText: string;
  tags: string[];
  returnToSchool: { answer: string; comment: string };
  returnForTeacher: { answer: string; comment: string };
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const allReports: Report[] = [
  {
    id: "RPT-249", school: "Lincoln High School", grade: "10th Grade", teacher: "--", submittedBy: "Anonymous", date: "Mar 16, 2026",
    sentiment: "Positive", status: "Pending", reviewer: "Albert Chambers", score: 88,
    ratings: [
      { label: "Classroom Behavior", value: 5, max: 5 },
      { label: "Lesson Preparedness", value: 5, max: 5 },
      { label: "Staff Friendliness", value: 4, max: 5 },
      { label: "School Cleanliness", value: 4, max: 5 },
      { label: "Support Level", value: 5, max: 5 },
    ],
    reviewText: "\"The administration was incredibly supportive. I arrived early and received a detailed folder with lesson plans, emergency procedures, and classroom expectations. Students were respectful and stayed on task throughout the session.\"",
    tags: ["Supportive Staff", "Lesson Plans Provided", "Good Behavior"],
    returnToSchool: { answer: "Yes", comment: "\"Absolutely one of the best schools I've covered. The office staff checked in on me twice during the day.\"" },
    returnForTeacher: { answer: "Yes", comment: "\"Lesson plans were detailed and easy to follow. Clear expectations were set for the class.\"" },
  },
  {
    id: "RPT-237", school: "Riverside Academy", grade: "8th Grade", teacher: "--", submittedBy: "Anonymous", date: "Mar 13, 2026",
    sentiment: "Positive", status: "Pending", reviewer: "Sarah Mitchell", score: 82,
    ratings: [
      { label: "Classroom Behavior", value: 4, max: 5 },
      { label: "Lesson Preparedness", value: 5, max: 5 },
      { label: "Staff Friendliness", value: 4, max: 5 },
      { label: "School Cleanliness", value: 5, max: 5 },
      { label: "Support Level", value: 4, max: 5 },
    ],
    reviewText: "\"Great experience overall. Students were engaged and the lesson plans were well prepared. Staff was welcoming and helpful throughout my visit.\"",
    tags: ["Well Organized", "Engaged Students"],
    returnToSchool: { answer: "Yes", comment: "\"Would definitely return. The school has a great atmosphere.\"" },
    returnForTeacher: { answer: "Yes", comment: "\"Excellent lesson plans provided in advance.\"" },
  },
  {
    id: "RPT-218", school: "Oakwood Primary", grade: "3rd Grade", teacher: "James Morton", submittedBy: "Anonymous", date: "Mar 15, 2026",
    sentiment: "Positive", status: "Pending", reviewer: "David Lee", score: 90,
    ratings: [
      { label: "Classroom Behavior", value: 5, max: 5 },
      { label: "Lesson Preparedness", value: 5, max: 5 },
      { label: "Staff Friendliness", value: 5, max: 5 },
      { label: "School Cleanliness", value: 4, max: 5 },
      { label: "Support Level", value: 5, max: 5 },
    ],
    reviewText: "\"Wonderful primary school with amazing young students. James Morton had left very thorough notes and the day ran smoothly from start to finish.\"",
    tags: ["Thorough Notes", "Supportive Staff", "Good Behavior"],
    returnToSchool: { answer: "Yes", comment: "\"One of my favourite schools to cover. Kids are a delight.\"" },
    returnForTeacher: { answer: "Yes", comment: "\"James Morton's preparation made the day very easy.\"" },
  },
  {
    id: "RPT-189", school: "Cedar Valley Institute", grade: "11th Grade", teacher: "--", submittedBy: "Anonymous", date: "Mar 14, 2026",
    sentiment: "Negative", status: "Pending", reviewer: "Emily Turner", score: 42,
    ratings: [
      { label: "Classroom Behavior", value: 2, max: 5 },
      { label: "Lesson Preparedness", value: 1, max: 5 },
      { label: "Staff Friendliness", value: 3, max: 5 },
      { label: "School Cleanliness", value: 2, max: 5 },
      { label: "Support Level", value: 2, max: 5 },
    ],
    reviewText: "\"Unfortunately, no lesson plans were left and students were difficult to manage. Very little support from administration during the day.\"",
    tags: ["No Lesson Plans", "Difficult Behavior", "Poor Support"],
    returnToSchool: { answer: "No", comment: "\"Would not return without significant improvements in organization.\"" },
    returnForTeacher: { answer: "No", comment: "\"No materials or instructions were provided.\"" },
  },
  {
    id: "RPT-176", school: "Pinehill Preparatory", grade: "9th Grade", teacher: "Liam Gallagher", submittedBy: "James", date: "Mar 11, 2026",
    sentiment: "Positive", status: "Pending", reviewer: "James Porter", score: 79,
    ratings: [
      { label: "Classroom Behavior", value: 4, max: 5 },
      { label: "Lesson Preparedness", value: 4, max: 5 },
      { label: "Staff Friendliness", value: 4, max: 5 },
      { label: "School Cleanliness", value: 4, max: 5 },
      { label: "Support Level", value: 3, max: 5 },
    ],
    reviewText: "\"A good day overall. Liam Gallagher had left clear notes and students were generally well-behaved. A few minor disruptions but nothing major.\"",
    tags: ["Clear Notes", "Good Behavior"],
    returnToSchool: { answer: "Yes", comment: "\"Would return to this school.\"" },
    returnForTeacher: { answer: "Yes", comment: "\"Good preparation from Liam.\"" },
  },
  {
    id: "RPT-165", school: "Sunset Charter School", grade: "7th Grade", teacher: "Isabella Martinez", submittedBy: "Anonymous", date: "Mar 10, 2026",
    sentiment: "Neutral", status: "Approved", reviewer: "Chloe Adams", score: 65,
    ratings: [
      { label: "Classroom Behavior", value: 3, max: 5 },
      { label: "Lesson Preparedness", value: 4, max: 5 },
      { label: "Staff Friendliness", value: 3, max: 5 },
      { label: "School Cleanliness", value: 3, max: 5 },
      { label: "Support Level", value: 3, max: 5 },
    ],
    reviewText: "\"An average experience. The lesson plan was provided but students were somewhat restless. Staff were polite but not particularly proactive.\"",
    tags: ["Average Experience"],
    returnToSchool: { answer: "Maybe", comment: "\"Would consider returning but not a priority.\"" },
    returnForTeacher: { answer: "Yes", comment: "\"Isabella's lesson plan was adequate.\"" },
  },
  {
    id: "RPT-141", school: "Hillside Technical High", grade: "12th Grade", teacher: "--", submittedBy: "Anonymous", date: "Mar 09, 2026",
    sentiment: "Positive", status: "Approved", reviewer: "Michael Ross", score: 85,
    ratings: [
      { label: "Classroom Behavior", value: 5, max: 5 },
      { label: "Lesson Preparedness", value: 4, max: 5 },
      { label: "Staff Friendliness", value: 5, max: 5 },
      { label: "School Cleanliness", value: 4, max: 5 },
      { label: "Support Level", value: 4, max: 5 },
    ],
    reviewText: "\"Technical students were mature and focused. Great school environment and very supportive admin team throughout the day.\"",
    tags: ["Mature Students", "Supportive Admin"],
    returnToSchool: { answer: "Yes", comment: "\"Great school, would return anytime.\"" },
    returnForTeacher: { answer: "Yes", comment: "\"Class ran perfectly.\"" },
  },
  {
    id: "RPT-130", school: "Brookside International", grade: "6th Grade", teacher: "Mia Chen", submittedBy: "Anonymous", date: "Mar 08, 2026",
    sentiment: "Negative", status: "Pending", reviewer: "Lisa Park", score: 38,
    ratings: [
      { label: "Classroom Behavior", value: 1, max: 5 },
      { label: "Lesson Preparedness", value: 2, max: 5 },
      { label: "Staff Friendliness", value: 2, max: 5 },
      { label: "School Cleanliness", value: 3, max: 5 },
      { label: "Support Level", value: 1, max: 5 },
    ],
    reviewText: "\"Very challenging day. Students were unmanageable and administration provided no support. Lesson plan was incomplete and difficult to follow.\"",
    tags: ["Challenging Behavior", "Incomplete Plans", "No Support"],
    returnToSchool: { answer: "No", comment: "\"Would not return to this school.\"" },
    returnForTeacher: { answer: "No", comment: "\"Plans were insufficient.\"" },
  },
  {
    id: "RPT-117", school: "Willow Creek Academy", grade: "5th Grade", teacher: "Noah Thompson", submittedBy: "Anonymous", date: "Mar 06, 2026",
    sentiment: "Neutral", status: "Pending", reviewer: "Anna White", score: 60,
    ratings: [
      { label: "Classroom Behavior", value: 3, max: 5 },
      { label: "Lesson Preparedness", value: 3, max: 5 },
      { label: "Staff Friendliness", value: 3, max: 5 },
      { label: "School Cleanliness", value: 4, max: 5 },
      { label: "Support Level", value: 2, max: 5 },
    ],
    reviewText: "\"A fairly average day. Noah Thompson left basic lesson plans. Students were mostly cooperative but there were some behavioral issues in the afternoon.\"",
    tags: ["Average Day", "Minor Issues"],
    returnToSchool: { answer: "Maybe", comment: "\"Would consider returning.\"" },
    returnForTeacher: { answer: "Maybe", comment: "\"Plans could be more detailed.\"" },
  },
  {
    id: "RPT-092", school: "Evergreen STEM School", grade: "10th Grade", teacher: "Ava Robinson", submittedBy: "Anonymous", date: "Mar 05, 2026",
    sentiment: "Positive", status: "Approved", reviewer: "Tom Harris", score: 93,
    ratings: [
      { label: "Classroom Behavior", value: 5, max: 5 },
      { label: "Lesson Preparedness", value: 5, max: 5 },
      { label: "Staff Friendliness", value: 5, max: 5 },
      { label: "School Cleanliness", value: 5, max: 5 },
      { label: "Support Level", value: 4, max: 5 },
    ],
    reviewText: "\"Outstanding experience at Evergreen STEM. Ava Robinson's lesson was incredibly detailed, students were enthusiastic and the school is immaculate.\"",
    tags: ["Outstanding", "Detailed Plans", "Enthusiastic Students"],
    returnToSchool: { answer: "Yes", comment: "\"One of the best schools I have ever covered.\"" },
    returnForTeacher: { answer: "Yes", comment: "\"Ava's preparation was exceptional.\"" },
  },
];

const sentimentConfig: Record<Sentiment, { bg: string; text: string }> = {
  Positive: { bg: "bg-[#CDFFEE]", text: "text-[#059669]" },
  Negative: { bg: "bg-[#FFE4E4]", text: "text-[#DC2626]" },
  Neutral: { bg: "bg-[#FFF3DC]", text: "text-[#D97706]" },
};

// ─── Score Circle ─────────────────────────────────────────────────────────────

function ScoreCircle({ score }: { score: number }) {
  const radius = 31;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference;
  const scoreColor = score >= 70 ? "#34C567" : score >= 50 ? "#F8A202" : "#EF4444";

  return (
    <div className="relative w-[70px] h-[70px]">
      <svg width="70" height="70" viewBox="0 0 70 70" className="rotate-[-90deg]">
        <circle cx="35" cy="35" r={radius} fill="none" stroke="#F1F5F9" strokeWidth="6" />
        <circle
          cx="35" cy="35" r={radius} fill="none"
          stroke={scoreColor} strokeWidth="6"
          strokeDasharray={`${progress} ${circumference}`}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-outfit font-semibold text-lg text-black leading-none">{score}</span>
        <span className="font-outfit text-[10px] text-[#6B7280] leading-none mt-0.5">Score</span>
      </div>
    </div>
  );
}

// ─── Rating Bar ───────────────────────────────────────────────────────────────

function RatingBar({ label, value, max }: { label: string; value: number; max: number }) {
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
        <span className={`px-4 py-0.5 rounded-full font-inter text-xs font-semibold ${answerColor}`}>{answer}</span>
      </div>
      <div className="flex items-center gap-2.5 px-5 py-4">
        <div className={`w-0.5 self-stretch rounded-full ${barColor}`} />
        <p className="font-inter text-sm italic font-normal text-[#464555] leading-[22px]">{comment}</p>
      </div>
    </div>
  );
}

// ─── Stars ────────────────────────────────────────────────────────────────────

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <svg width="79" height="12" viewBox="0 0 79 12" fill="none">
      {[0, 1, 2, 3, 4].map((i) => {
        const x = i * 16.45;
        return (
          <path key={i} transform={`translate(${x}, 0)`}
            d="M7.89844 4.36816L8.00781 4.62012L8.28125 4.64258L11.8516 4.94336L9.16113 7.21094L8.94434 7.39355L9.00977 7.66992L9.81641 11.0576L6.73242 9.25L6.5 9.11426L6.26758 9.25L3.18262 11.0576L3.99023 7.66992L4.05566 7.39355L3.83887 7.21094L1.14746 4.94336L4.71875 4.64258L4.99219 4.62012L5.10156 4.36816L6.5 1.15332L7.89844 4.36816Z"
            fill={i < count ? "#0171F9" : "#E2E8F0"} stroke={i < count ? "#0171F9" : "#E2E8F0"} strokeWidth="0.92"
          />
        );
      })}
    </svg>
  );
}

// ─── Report Detail Sidebar ────────────────────────────────────────────────────

function ReportSidebar({ report, onClose }: { report: Report; onClose: () => void }) {
  const sentimentBadge = report.sentiment === "Positive"
    ? "bg-[#BBFBE6] text-[#2D7D65]"
    : report.sentiment === "Negative"
    ? "bg-[#FEE2E2] text-[#991B1B]"
    : "bg-[#FFF3DC] text-[#D97706]";

  const starCount = Math.round((report.score / 100) * 5);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-7 pt-4 sm:pt-6 lg:pt-8 pb-3 sm:pb-6 border-b border-black/10 flex-shrink-0">
        <div className="flex items-start justify-between mb-1">
          <div className="flex items-end gap-3 flex-wrap">
            <h2 className="font-outfit font-semibold text-[28px] text-[#121212] leading-5">{report.id}</h2>
            <div className="flex items-center gap-2 pb-0.5">
              <div className="flex items-center gap-1.5">
                <AnonymousIcon />
                <span className="font-inter font-medium text-xs text-[#121212] opacity-70">{report.submittedBy}</span>
              </div>
              <span className={`px-2.5 py-1 rounded-md font-inter font-semibold text-xs ${sentimentBadge}`}>
                {report.sentiment}
              </span>
              <span className="px-2.5 py-1 rounded-md font-inter font-semibold text-xs text-[#F8A202] bg-[#FFEECE] ">
                {report.status}
              </span>
            </div>
          </div>
          <button onClick={onClose} className="p-2 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0">
            <XIcon />
          </button>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <div className="flex items-center gap-2">
            <SchoolIcon />
            <span className="font-inter font-medium text-[13px] text-[#030711] opacity-80">{report.school}</span>
            <span className="w-1 h-1 rounded-full bg-[#676767]" />
            <span className="font-inter font-medium text-xs text-[#121212] opacity-64">{report.grade}</span>
            
            {report.teacher !== "--" && (
              <>
                <span className="w-1 h-1 rounded-full bg-[#676767]" />
                <span className="font-inter font-medium text-xs text-[#121212] opacity-64">{report.teacher}</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-1.5">
           
<svg width="17" height="17" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.39539 7.41538C7.5097 7.45906 7.60199 7.54635 7.65195 7.65806C7.70192 7.76976 7.70548 7.89674 7.66185 8.01107C7.26862 9.03999 6.67047 9.60738 5.94431 9.89168C5.27231 10.1538 4.5277 10.1538 3.88585 10.1538H3.84585C3.15662 10.1538 2.57816 10.16 2.08339 10.3532C1.62862 10.5305 1.20462 10.8861 0.892625 11.7034C0.848884 11.8177 0.761519 11.91 0.649747 11.9599C0.537976 12.0098 0.410954 12.0133 0.296625 11.9695C0.182297 11.9258 0.0900263 11.8384 0.0401128 11.7267C-0.00980069 11.6149 -0.0132688 11.4879 0.0304715 11.3735C0.423087 10.3446 1.02124 9.77722 1.74739 9.49292C2.42001 9.23076 3.16462 9.23076 3.80585 9.23076H3.84585C4.53508 9.23076 5.11354 9.22461 5.60831 9.03138C6.0637 8.85415 6.4877 8.49845 6.7997 7.68122C6.84338 7.56691 6.93067 7.47463 7.04237 7.42466C7.15408 7.37469 7.28106 7.37175 7.39539 7.41538ZM7.19847 0H9.72585C10.4231 0 10.9929 3.35276e-08 11.4428 0.0603077C11.9129 0.123692 12.3203 0.260307 12.6458 0.585846C12.9708 0.911384 13.1074 1.31815 13.1708 1.78892C13.2311 2.23815 13.2311 2.808 13.2311 3.50584V4.80246C13.2311 5.49969 13.2311 6.06892 13.1708 6.51938C13.108 6.98892 12.9708 7.3963 12.6458 7.72184C12.3209 8.04738 11.9129 8.18399 11.4428 8.24738C10.9929 8.30769 10.4231 8.30769 9.72585 8.30769H8.76893C8.64652 8.30769 8.52912 8.25906 8.44257 8.1725C8.35601 8.08595 8.30739 7.96856 8.30739 7.84615C8.30739 7.72374 8.35601 7.60635 8.44257 7.51979C8.52912 7.43324 8.64652 7.38461 8.76893 7.38461H9.69262C10.4311 7.38461 10.9388 7.38338 11.3197 7.3323C11.6871 7.28307 11.8674 7.19446 11.9929 7.06892C12.1185 6.94399 12.2065 6.76369 12.2563 6.39569C12.3074 6.01476 12.3086 5.50769 12.3086 4.76923V3.53846C12.3086 2.8 12.3074 2.29292 12.2563 1.912C12.2071 1.544 12.1185 1.36431 11.9929 1.23877C11.8674 1.11323 11.6871 1.02461 11.3197 0.975384C10.9382 0.924307 10.4311 0.923076 9.69323 0.923076H7.2317C6.49324 0.923076 5.98554 0.924307 5.60462 0.975384C5.23724 1.02461 5.05693 1.11323 4.93139 1.23877C4.82431 1.34585 4.74554 1.49169 4.69385 1.75569C4.6397 2.03261 4.62185 2.4 4.61754 2.92677C4.61706 2.98738 4.60464 3.0473 4.581 3.10311C4.55736 3.15892 4.52295 3.20953 4.47975 3.25204C4.43655 3.29456 4.3854 3.32815 4.32922 3.35089C4.27304 3.37364 4.21292 3.3851 4.15231 3.38461C4.0917 3.38413 4.03178 3.37171 3.97597 3.34807C3.92016 3.32442 3.86955 3.29002 3.82704 3.24682C3.78452 3.20362 3.75093 3.15247 3.72819 3.09629C3.70544 3.0401 3.69398 2.97999 3.69447 2.91938C3.69878 2.39569 3.71539 1.94892 3.78801 1.57784C3.86308 1.19446 4.00401 0.860307 4.27847 0.585846C4.60462 0.260307 5.01139 0.123692 5.48154 0.0603077C5.93139 3.35276e-08 6.50124 0 7.19847 0Z" fill="#121212"></path><path fillRule="evenodd" clipRule="evenodd" d="M3.84564 5.23126C3.56002 5.23126 3.2861 5.34473 3.08414 5.54669C2.88218 5.74865 2.76872 6.02257 2.76872 6.30819C2.76872 6.5938 2.88218 6.86772 3.08414 7.06969C3.2861 7.27165 3.56002 7.38511 3.84564 7.38511C4.13126 7.38511 4.40518 7.27165 4.60714 7.06969C4.8091 6.86772 4.92256 6.5938 4.92256 6.30819C4.92256 6.02257 4.8091 5.74865 4.60714 5.54669C4.40518 5.34473 4.13126 5.23126 3.84564 5.23126ZM1.84564 6.30819C1.84564 5.77775 2.05636 5.26905 2.43143 4.89397C2.8065 4.5189 3.31521 4.30819 3.84564 4.30819C4.37607 4.30819 4.88478 4.5189 5.25985 4.89397C5.63492 5.26905 5.84564 5.77775 5.84564 6.30819C5.84564 6.83862 5.63492 7.34733 5.25985 7.7224C4.88478 8.09747 4.37607 8.30818 3.84564 8.30818C3.31521 8.30818 2.8065 8.09747 2.43143 7.7224C2.05636 7.34733 1.84564 6.83862 1.84564 6.30819ZM6.15333 2.92357C6.15333 2.80117 6.20196 2.68377 6.28851 2.59722C6.37507 2.51066 6.49246 2.46204 6.61487 2.46204H10.3072C10.4296 2.46204 10.547 2.51066 10.6335 2.59722C10.7201 2.68377 10.7687 2.80117 10.7687 2.92357C10.7687 3.04598 10.7201 3.16338 10.6335 3.24993C10.547 3.33649 10.4296 3.38511 10.3072 3.38511H6.61487C6.49246 3.38511 6.37507 3.33649 6.28851 3.24993C6.20196 3.16338 6.15333 3.04598 6.15333 2.92357ZM7.99948 5.38511C7.99948 5.2627 8.04811 5.14531 8.13466 5.05875C8.22122 4.9722 8.33861 4.92357 8.46102 4.92357H10.3072C10.4296 4.92357 10.547 4.9722 10.6335 5.05875C10.7201 5.14531 10.7687 5.2627 10.7687 5.38511C10.7687 5.50752 10.7201 5.62491 10.6335 5.71147C10.547 5.79802 10.4296 5.84665 10.3072 5.84665H8.46102C8.33861 5.84665 8.22122 5.79802 8.13466 5.71147C8.04811 5.62491 7.99948 5.50752 7.99948 5.38511Z" fill="#121212"></path></svg>

            <span className="font-inter font-medium text-[13px] text-[#030711] opacity-80">{report.reviewer}</span>
          </div>
        </div>
      </div>

      {/* Score + Ratings */}
      <div className="px-7 py-6 flex items-start gap-8">
        <div className="flex flex-col items-center gap-3 flex-shrink-0">
          <ScoreCircle score={report.score} />
          <StarRating count={starCount} />
          <span className="font-outfit text-xs text-[#6B7280] -mt-1">Overall</span>
        </div>
        <div className="flex flex-col gap-[10px] flex-1">
          {report.ratings.map((r) => (
            <RatingBar key={r.label} {...r} />
          ))}
        </div>
      </div>

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
              {report.reviewText}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-col gap-3">
          <h3 className="font-outfit font-medium text-md text-[#121212] leading-6">Tags</h3>
          <div className="flex flex-wrap gap-3">
            {report.tags.map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-xl border border-[#C0DCFD] bg-[#EFF6FF] font-inter font-semibold text-xs text-[#0171F9] leading-[15px]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Return cards */}
        <div className="flex flex-col gap-6">
          <ReturnCard
            icon={<BuildingIcon />}
            question="Would you return to this school?"
            answer={report.returnToSchool.answer}
            comment={report.returnToSchool.comment}
          />
          <ReturnCard
            icon={<UserIcon />}
            question="Would you return for this teacher or class?"
            answer={report.returnForTeacher.answer}
            comment={report.returnForTeacher.comment}
          />
        </div>
      </div>

      {/* Footer actions */}
      <div className="px-5 py-[17px] border-t border-[#F0F0F0] bg-white flex items-center gap-3">
        <button className="cursor-pointer flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-lg border border-[#BDF7D3] bg-[#DDFCE9] hover:opacity-90 transition-opacity">
          <ApproveIcon />
          <span className="font-inter font-medium text-sm text-[#32A85B] leading-5">Approve</span>
        </button>
        <button className="cursor-pointer flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-lg border border-[#FDCACA] bg-[#FDE2E2] hover:opacity-90 transition-opacity">
          <RejectIcon />
          <span className="font-inter font-medium text-sm text-[#DD393D] leading-5">Reject</span>
        </button>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ReportsPage() {
  const [search, setSearch] = useState("");
  const [sentimentFilter, setSentimentFilter] = useState<"All" | Sentiment>("All");
  const [statusFilter, setStatusFilter] = useState<"All" | Status>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const itemsPerPage = 10;

  const filtered = allReports.filter((r) => {
    const matchSearch =
      search === "" ||
      r.id.toLowerCase().includes(search.toLowerCase()) ||
      r.school.toLowerCase().includes(search.toLowerCase()) ||
      r.teacher.toLowerCase().includes(search.toLowerCase());
    const matchSentiment = sentimentFilter === "All" || r.sentiment === sentimentFilter;
    const matchStatus = statusFilter === "All" || r.status === statusFilter;
    return matchSearch && matchSentiment && matchStatus;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleSentimentChange = (val: "All" | Sentiment) => { setSentimentFilter(val); setCurrentPage(1); };
  const handleStatusChange = (val: "All" | Status) => { setStatusFilter(val); setCurrentPage(1); };

  return (
    <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 relative">
      <h1 className="font-outfit font-semibold text-xl sm:text-2xl lg:text-[28px] text-[#121212] leading-5 mb-4 sm:mb-6 lg:mb-8">Reports</h1>

      <div className="bg-white rounded-lg overflow-hidden">
        {/* Search + Filters */}
        <div className="px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 pb-0 flex flex-col gap-3 sm:gap-4">
          <div className="w-full">
            <div className="flex items-center gap-2 sm:gap-2.5 h-10 sm:h-11 px-3 sm:px-4 rounded-[14px] border border-[#EBEBF0] bg-[#FBFBFC]">
              <span className="opacity-70 flex-shrink-0"><SearchIcon /></span>
              <input
                type="text" placeholder="Search" value={search}
                onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                className="flex-1 bg-transparent outline-none font-inter font-medium text-sm sm:text-[15px] text-[#323152] placeholder:text-[#323152] placeholder:opacity-50 leading-[150%]"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 pb-3 sm:pb-4">
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
                onChange={(e) => handleStatusChange(e.target.value as "All" | Status)}
                className="w-full appearance-none pl-9 sm:pl-10 pr-7 sm:pr-8 py-2.5 sm:py-[11px] rounded-[10px] border border-[rgba(178,178,178,0.20)] bg-[#FAFCFF] font-inter text-xs sm:text-sm text-[#121212] opacity-80 cursor-pointer outline-none"
              >
                <option value="All">Status: All</option>
                <option value="Pending">Status: Pending</option>
                <option value="Approved">Status: Approved</option>
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
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[10px] sm:text-xs text-[#6F6C70] uppercase whitespace-nowrap">ID</th>
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[10px] sm:text-xs text-[#6F6C70] uppercase whitespace-nowrap">School</th>
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[10px] sm:text-xs text-[#6F6C70] uppercase whitespace-nowrap">Teacher</th>
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[10px] sm:text-xs text-[#6F6C70] uppercase whitespace-nowrap">Sentiment</th>
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[10px] sm:text-xs text-[#6F6C70] uppercase whitespace-nowrap">Submitted By</th>
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[10px] sm:text-xs text-[#6F6C70] uppercase whitespace-nowrap">Date</th>
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[10px] sm:text-xs text-[#6F6C70] uppercase whitespace-nowrap">Status</th>
                <th className="text-left px-2 sm:px-4 lg:px-5 py-2.5 sm:py-3.5 font-inter font-medium text-[10px] sm:text-xs text-[#6F6C70] uppercase whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 sm:px-6 lg:px-8 py-8 text-center font-inter text-sm text-[#6F6C70]">No reports found.</td>
                </tr>
              ) : (
                paginated.map((report) => {
                  const sc = sentimentConfig[report.sentiment];
                  const isSelected = selectedReport?.id === report.id;
                  return (
                    <tr
                      key={report.id}
                      onClick={() => setSelectedReport(report)}
                      className={`border-b border-[#F2F4F7] cursor-pointer transition-colors hover:bg-[#F8FAFF] ${isSelected ? "bg-[#EFF6FF]" : ""}`}
                    >
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap">
                        <span className="font-inter font-medium text-[10px] sm:text-[12px] lg:text-[12px] text-[#0B77F9] opacity-80">{report.id}</span>
                      </td>
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap">
                        <span className="font-inter font-normal text-[10px] sm:text-[13px] lg:text-sm text-[#030711]">{report.school}</span>
                      </td>
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap">
                        <span className="font-inter font-normal text-[10px] sm:text-[13px] lg:text-sm text-[#030711]">{report.teacher}</span>
                      </td>
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap">
                        <span className={`inline-flex items-center px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md ${sc.bg} font-inter font-medium text-[9px] sm:text-xs ${sc.text}`}>
                          {report.sentiment}
                        </span>
                      </td>
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap">
                        <span className="font-inter font-normal text-[10px] sm:text-[13px] lg:text-sm text-[#030711]">{report.submittedBy}</span>
                      </td>
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap">
                        <span className="font-inter font-normal text-[10px] sm:text-[13px] lg:text-sm text-[#030711]">{report.date}</span>
                      </td>
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap">
                        <span className="inline-flex items-center px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-md border border-[#EFF0F2] bg-[#F6F6F6] font-inter font-normal text-[10px] sm:text-sm text-[#030711]">
                          {report.status}
                        </span>
                      </td>
                      <td className="px-2 sm:px-4 lg:px-5 py-2.5 sm:py-[17.5px] whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center gap-1 sm:gap-3">
                          <button className="p-1 sm:p-2 rounded-md bg-[#D1FAE5] hover:opacity-80 transition-opacity" aria-label="Approve">
                            <CheckIcon />
                          </button>
                          <button className="p-1 sm:p-2 rounded-md bg-[#FEE2E2] hover:opacity-80 transition-opacity" aria-label="Reject">
                            <CloseIcon />
                          </button>
                          <button
                            onClick={() => setSelectedReport(report)}
                            className="hidden sm:flex items-center justify-center h-8 sm:h-9 px-2 sm:px-3.5 rounded-md border border-[#EFF0F2] bg-white font-inter font-normal text-[10px] sm:text-sm text-black opacity-80 tracking-[-0.2px] hover:opacity-100 transition-opacity"
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
            Show {filtered.length === 0 ? "0" : `${(currentPage - 1) * itemsPerPage + 1}-${Math.min(currentPage * itemsPerPage, filtered.length)}`} of {filtered.length.toLocaleString()}
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
                  currentPage === page ? "bg-[#0171F9] text-white font-semibold" : "border border-[#E5E7EB] bg-white text-[#323152] font-medium hover:bg-gray-50"
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
          <ReportSidebar report={selectedReport} onClose={() => setSelectedReport(null)} />
        )}
      </div>
    </main>
  );
}
