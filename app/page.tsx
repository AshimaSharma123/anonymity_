import Image from "next/image";

export default function Home() {
  return (
    <> 
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-black/6">
        <div className="flex items-center justify-between h-[92px] max-w-7xl mx-auto ">
          {/* Anonymity Logo */}
          <a href="/" className="flex items-center flex-shrink-0" aria-label="Anonymity">
            <svg width="154" height="25" viewBox="0 0 154 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_117_3844)">
                <path d="M116.923 8.84582C117.853 7.63126 118.743 7.10214 120.296 6.96218C122.33 6.64456 124.28 7.86257 124.516 10.0248C124.822 12.8256 124.545 15.9745 124.718 18.8405C123.331 18.9075 122.316 18.9315 120.934 18.8277L120.945 18.4809C120.996 16.7222 121.144 13.1774 120.885 11.5639C120.811 11.1017 120.667 10.5328 120.334 10.188C120.024 9.86787 119.533 9.86434 119.118 9.85889C118.677 9.85309 118.31 9.92899 117.985 10.2509C116.876 11.352 117.245 15.9991 117.253 17.668L117.266 18.8536C116.014 18.9007 114.754 18.8735 113.501 18.8577C113.389 16.5907 113.569 14.1178 113.47 11.837C113.433 10.978 113.25 10.4579 112.613 9.90061C112.031 9.86325 111.595 9.87954 111.01 9.90414C110.253 10.4279 109.955 11.1359 109.923 12.0333C109.842 14.2888 109.97 16.5879 109.916 18.8423C108.598 18.9098 107.373 18.8826 106.057 18.8587C105.965 18.0136 105.989 15.3271 106.008 14.3592C106.052 12.1922 105.902 9.29148 106.106 7.19911C107.355 7.18568 108.606 7.19088 109.855 7.21456C109.909 7.86424 109.916 8.14106 109.862 8.7889C110.761 7.57257 111.424 7.27871 112.856 6.96394C114.12 6.9495 114.356 6.96117 115.56 7.32321C116.096 7.84854 116.497 8.21688 116.923 8.84582Z" fill="#0171F9"/>
                <path d="M39.5626 2.49841C40.8874 2.56835 42.4654 2.48767 43.7559 2.59715C44.151 2.63065 45.5059 6.81052 45.7156 7.4079C46.5358 9.77314 47.3721 12.1328 48.2243 14.4867C48.7419 15.9551 49.188 17.4064 49.7909 18.8402C48.8646 18.8618 46.3917 19.0285 45.6623 18.7458C45.2054 18.3088 44.868 16.2036 44.544 15.3559C44.3884 15.2097 44.004 15.2185 43.7729 15.2028C42.2181 15.1638 40.2339 15.1415 38.6975 15.2513C38.4115 16.6624 38.1212 17.4776 37.6653 18.85C36.2718 18.8821 34.8778 18.8804 33.4844 18.8448C34.5063 16.095 35.5137 13.3399 36.5066 10.5796C36.9089 9.44217 39.0899 3.13105 39.5626 2.49841ZM39.6966 12.3132C40.3837 12.3254 41.1198 12.3526 41.8025 12.3483C42.3395 12.3364 42.9694 12.3387 43.4978 12.3068C43.0701 10.3224 42.1021 8.36446 41.7636 6.35714C41.7307 6.16185 41.7605 5.97218 41.6022 5.82542C41.1894 8.24095 40.1139 10.2647 39.6966 12.3132Z" fill="#0171F9"/>
                <path d="M34.3065 20.0857C37.0131 19.9663 40.2042 20.1205 42.9676 20.1002L67.6724 20.0744C73.3635 20.0465 79.0543 20.053 84.7459 20.0941C86.5315 20.1189 88.5429 19.9796 90.299 20.1186C90.2914 20.6836 90.4426 21.9242 90.1907 22.3969C90.1377 22.4975 89.827 22.4852 89.6725 22.4967C87.9987 22.397 85.4338 22.4788 83.6634 22.4791L71.9849 22.4794L33.5244 22.4718C33.5075 21.6938 33.5203 20.8759 33.5201 20.0945L34.3065 20.0857Z" fill="#0171F9"/>
                <path d="M69.8351 6.9537C71.5936 6.88485 73.2236 6.88107 74.8045 7.84099C77.6688 9.58014 78.0157 13.873 76.399 16.5663C75.4535 18.1416 73.9724 18.6985 72.2372 19.1016C70.4588 19.119 69.0979 19.2249 67.4635 18.3687C63.3615 16.2197 63.6824 9.07596 68.0752 7.42539C68.6475 7.21037 69.2423 7.12926 69.8351 6.9537ZM71.3261 16.2514C73.983 16.1431 74.0478 11.6822 72.5858 10.1803C72.2683 9.85402 71.1421 9.7976 70.6869 9.81388C70.0327 9.88231 69.6097 9.99893 69.1744 10.5593C68.1917 11.8246 68.1213 14.7271 69.4178 15.8139C70.0056 16.3067 70.6161 16.267 71.3261 16.2514Z" fill="#0171F9"/>
                <path d="M92.127 7.20465C93.4287 7.19726 94.8119 7.16729 96.107 7.20835C96.8402 9.35185 97.5095 11.5635 98.0991 13.7504C98.2646 14.3644 98.472 14.7575 98.6349 15.4739C98.7449 15.3626 98.7886 14.9344 98.8197 14.7631C99.1716 12.8379 99.8645 10.9575 100.463 9.09846C100.668 8.46347 100.817 7.84846 101.055 7.22405C102.118 7.15293 103.602 7.19642 104.695 7.19743C104.465 8.08657 104.238 8.94212 103.894 9.7965C102.932 12.1941 102.096 14.6271 101.167 17.0388C100.048 20.3793 98.5686 25.0986 94.1376 24.5956C93.3573 24.507 93.2969 24.511 92.578 24.1658C92.5561 23.6115 92.4545 22.1917 92.6418 21.751C92.9483 21.0278 93.9125 22.1282 94.9152 21.6447C95.9441 21.1483 96.2876 19.927 96.6966 18.9103C95.9012 17.1695 95.0681 14.9437 94.3618 13.1572C93.6639 11.3927 92.5494 8.98914 92.127 7.20465Z" fill="#0171F9"/>
                <path d="M147.842 15.6092C148.121 14.9644 148.394 13.9118 148.601 13.2144L149.788 9.2826C149.935 8.79857 150.226 7.70574 150.469 7.33489C151.056 7.08788 153.244 7.16638 153.916 7.24724L154.001 7.39114C153.976 8.16249 153.36 9.34809 153.124 10.1236C152.432 12.4039 151.279 14.7013 150.659 16.9861C149.154 20.07 148.551 24.8308 143.873 24.5821C143.035 24.5376 142.919 24.6756 142.109 24.2346C142.109 23.7881 142.007 21.8887 142.154 21.651C142.257 21.591 144.063 21.6721 144.45 21.6477C145.393 21.001 145.606 20.0729 146.028 19.01C145.811 18.1757 145.188 16.7474 144.841 15.8902L142.644 10.461C142.331 9.67923 141.617 7.97971 141.566 7.19972C142.335 7.21265 144.835 7.08763 145.394 7.27511C145.953 7.80801 147.792 14.6094 147.842 15.6092Z" fill="#0171F9"/>
                <path d="M7.51944 4.01117C12.0164 4.04327 16.5206 4.02149 21.0178 4.00841C22.0184 4.0055 22.2478 4.05479 22.9551 4.77911C23.147 5.44718 23.2311 5.97436 23.2221 6.67207C23.1831 10.1749 23.245 13.6763 23.1977 17.1773C23.1705 19.1938 21.364 19.1304 19.8113 19.091C17.412 19.03 14.824 19.2333 12.4513 18.9974C12.1554 18.0007 11.8735 17.5586 11.1566 16.837L12.618 16.8097L13.8517 16.7223C13.9489 16.0263 13.9021 15.1909 13.8803 14.4777C14.9752 14.4077 17.8178 14.6427 18.6283 14.424C18.6408 15.1777 18.6174 15.9929 18.6104 16.7514L20.8532 16.7371C20.7777 13.3713 20.8287 9.70362 20.8439 6.31944C16.61 6.31457 12.3234 6.28124 8.09398 6.33438C8.16251 6.92958 8.14647 7.45878 8.13966 8.05716C7.43722 7.78202 6.40404 7.64886 6.00116 7.44199C5.83277 7.24661 5.75786 6.98591 5.76626 6.73143C5.81363 5.29261 5.79288 4.07191 7.51944 4.01117Z" fill="#0171F9"/>
                <path d="M58.0543 6.96309C58.3262 6.951 58.5983 6.9437 58.8705 6.9411C63.173 6.92229 62.7363 11.6236 62.7391 14.5919L62.7377 18.8514C61.4488 18.882 60.1594 18.8831 58.8704 18.8547C58.8708 16.5659 58.9325 14.1628 58.8379 11.8809C58.8044 11.0691 58.5673 10.448 57.931 9.93134C56.7605 9.73437 55.9632 9.76123 55.3052 10.8494C54.6957 13.06 55.0807 15.7969 55.0093 18.0996C55.0025 18.3194 55.0416 18.632 55.0732 18.8521C53.7917 18.881 52.5099 18.8787 51.2285 18.8453C51.272 15.0757 51.3933 10.9762 51.2439 7.21447C52.3831 7.15881 53.8257 7.19844 54.9747 7.20994C54.9975 7.74602 54.9988 8.31888 55.01 8.85849C56.0707 7.53176 56.3927 7.29054 58.0543 6.96309Z" fill="#0171F9"/>
                <path d="M86.1389 6.96141C87.3987 6.90255 88.6265 6.89223 89.615 7.81747C90.4851 8.62718 90.8211 9.87768 90.8303 11.0352C90.853 13.6348 90.7707 16.2511 90.8916 18.8485C89.636 18.8917 88.3796 18.8895 87.1241 18.8416C87.0006 16.373 87.3097 13.7779 87.0233 11.3134C86.8326 9.66879 85.6275 9.71329 84.3442 9.96307C84.1308 10.1781 83.9167 10.3919 83.7017 10.6045C83.1323 11.6511 83.2927 13.2166 83.2977 14.4072L83.3028 18.8555C82.5813 18.8688 80.0685 18.9721 79.5554 18.7845C79.321 18.1893 79.5545 8.6004 79.615 7.20725C80.842 7.19314 82.069 7.19381 83.296 7.20918L83.3095 8.85303C84.1426 7.61294 84.7129 7.31874 86.1389 6.96141Z" fill="#0171F9"/>
                <path d="M103.566 20.0859C108.072 19.9583 113.195 20.0734 117.755 20.0683L132.936 20.1004C135.21 20.1031 137.466 20.0459 139.744 20.0728C139.772 20.8645 139.762 21.6833 139.762 22.4775L138.47 22.474L102.142 22.4783C102.12 21.7037 102.136 20.8656 102.137 20.086L103.566 20.0859Z" fill="#0171F9"/>
                <path d="M138.389 3.58496C138.692 3.73147 138.544 6.68905 138.536 7.20179L141.023 7.20549C141.041 8.03485 141.09 9.06193 141.034 9.87492C140.238 9.90489 139.408 9.8572 138.553 9.89213C138.553 11.0731 138.379 15.2708 138.903 15.9952C139.522 16.4314 140.31 16.2372 141.023 16.1294C141.352 18.9764 141.093 19.1002 138.4 19.1085C135.7 19.2049 134.702 17.3133 134.76 14.9185C134.8 13.2807 134.8 11.5182 134.724 9.88634C134.355 9.89003 133.318 9.93327 133.027 9.83084C132.803 9.32741 132.836 7.88993 132.963 7.36258C133.27 7.0997 134.247 7.18945 134.701 7.19793C134.795 6.30493 134.779 5.58397 134.776 4.68677C135.562 4.31424 137.452 3.87152 138.389 3.58496Z" fill="#0171F9"/>
                <path d="M3.03911 16.8395C3.52135 16.8448 5.36977 17.0143 5.65062 16.9756C8.78467 16.5439 11.2627 17.1676 11.6025 20.7792C11.6701 21.4978 11.1261 21.955 10.6235 22.4567C9.93736 22.6123 9.25247 22.5977 8.55522 22.578C6.96103 22.4771 5.045 22.6173 3.41738 22.5808C2.64556 22.5634 1.94034 22.6384 1.15983 22.5197C0.848762 22.2942 0.541202 22.064 0.237278 21.829C-0.549423 19.7859 0.912582 17.1713 3.03911 16.8395Z" fill="#0171F9"/>
                <path d="M127.359 7.20459C128.578 7.19066 129.797 7.19284 131.016 7.21114C131.109 7.89894 131.055 11.0857 131.038 12.0112C130.993 14.2512 131.129 16.641 131.075 18.8333C130.008 18.9409 128.357 18.8828 127.285 18.8499C127.533 15.0507 127.261 10.9935 127.359 7.20459Z" fill="#0171F9"/>
                <path d="M5.15606 8.66217C7.0547 8.31869 8.87397 9.57431 9.22545 11.471C9.57701 13.3676 8.32866 15.1916 6.43288 15.5509C4.52592 15.9125 2.68834 14.6554 2.33468 12.7475C1.98102 10.8396 3.24608 9.00775 5.15606 8.66217Z" fill="#0171F9"/>
                <path d="M129.382 1.52991C129.614 1.49775 130.026 1.58919 130.272 1.63209C130.662 2.01512 130.915 2.26632 131.252 2.69435C131.287 3.12784 131.252 3.58844 131.231 4.02445C131.152 4.13805 131.068 4.24846 130.981 4.35542C130.386 5.07471 129.979 5.09838 129.102 5.18276C128.543 5.13751 128.184 5.00292 127.675 4.79604C127.482 4.56776 127.249 4.18372 127.08 3.92336L127.031 2.77966C127.741 1.62361 128.058 1.52504 129.382 1.52991Z" fill="#0171F9"/>
                <path d="M151.61 20.0941C152.391 20.082 153.225 20.0992 154.009 20.103C154.034 20.8941 154.03 21.6859 154.001 22.4768C153.259 22.4572 152.373 22.4808 151.623 22.4834C151.586 21.7305 151.608 20.8562 151.61 20.0941Z" fill="#0171F9"/>
              </g>
              <defs>
                <clipPath id="clip0_117_3844">
                  <rect width="154" height="24.5059" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </a>

          {/* Navigation Links */}
          <nav className="hidden sm:flex items-center gap-10">
            <a href="/" className="font-inter text-sm font-normal text-gray-950 hover:text-blue-600 transition-colors">Home</a>
            <a href="/submit-report" className="font-inter text-sm font-normal text-gray-950 hover:text-blue-600 transition-colors">Submit Report</a>
            <a href="/browse-school" className="font-inter text-sm font-normal text-gray-950 hover:text-blue-600 transition-colors">Browse School</a>
          </nav>

          {/* Sign In Button */}
          <div className="flex items-center flex-shrink-0">
            <a href="/sign-in" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.0013 1.33337H12.0013C12.7346 1.33337 13.3346 1.93337 13.3346 2.66671V13.3334C13.3346 14.0667 12.7346 14.6667 12.0013 14.6667H6.0013C5.26797 14.6667 4.66797 14.0667 4.66797 13.3334V12.6667C4.66797 12.4899 4.73821 12.3203 4.86323 12.1953C4.98826 12.0703 5.15782 12 5.33464 12C5.51145 12 5.68102 12.0703 5.80604 12.1953C5.93106 12.3203 6.0013 12.4899 6.0013 12.6667V13.3334H12.0013V2.66671H6.0013V3.33337C6.0013 3.51019 5.93106 3.67975 5.80604 3.80478C5.68102 3.9298 5.51145 4.00004 5.33464 4.00004C5.15782 4.00004 4.98826 3.9298 4.86323 3.80478C4.73821 3.67975 4.66797 3.51019 4.66797 3.33337V2.66671C4.66797 1.93337 5.26797 1.33337 6.0013 1.33337Z" fill="white"/>
                <path d="M7.19667 10.8633C7.45667 11.1233 7.87667 11.1233 8.13667 10.8633L10.5287 8.47129C10.6536 8.34628 10.7239 8.17674 10.7239 7.99996C10.7239 7.82319 10.6536 7.65365 10.5287 7.52863L8.13667 5.13663C8.00994 5.02209 7.84405 4.96062 7.67329 4.96493C7.50252 4.96924 7.33995 5.039 7.21916 5.15979C7.09837 5.28057 7.02862 5.44315 7.02431 5.61392C7.02 5.78468 7.08146 5.95057 7.196 6.07729L8.44667 7.33329H2.66667C2.48986 7.33329 2.32029 7.40353 2.19526 7.52856C2.07024 7.65358 2 7.82315 2 7.99996C2 8.17677 2.07024 8.34634 2.19526 8.47137C2.32029 8.59639 2.48986 8.66663 2.66667 8.66663H8.44667L7.196 9.92263C7.07172 10.0477 7.00202 10.2168 7.00214 10.3931C7.00226 10.5694 7.07221 10.7384 7.19667 10.8633Z" fill="white"/>
              </svg>
              <span>Sign In</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-blue-50 px-9 pt-[35px]">
          <div className="relative overflow-hidden rounded-3xl bg-blue-50 min-h-[680px] flex flex-col items-center">
            {/* Decorative blue blur blobs */}
            <div className="absolute w-[682px] h-[323px] rounded-full bg-blue-600 opacity-10 blur-[90px] pointer-events-none z-0 -left-[400px] top-[270px]" />
            <div className="absolute w-[682px] h-[323px] rounded-full bg-blue-600 opacity-10 blur-[90px] pointer-events-none z-0 -right-[400px] top-[540px]" />

            {/* Text content */}
            <div className="relative z-10 flex flex-col items-center gap-8 px-6 pt-5 max-w-[1111px] text-center">
              <div className="inline-flex px-[10px] py-2 rounded-lg bg-slate-900 text-blue-50 font-inter text-xs font-semibold leading-4">
                Real Teacher Insights
              </div>
              <h1 className="text-gray-950 font-inter text-[clamp(25px,5vw,62px)] font-bold leading-[1.13]">
                DISCOVER THE REALITY OF WHAT TO EXPECT FROM A SCHOOL SITE BEFORE SAYING YES TO AN UNFAMILIAR GUEST-TEACHING OPPORTUNITY
              </h1>
              <div className="flex items-center gap-[15px] flex-wrap justify-center">
                <button className="flex items-center justify-center gap-2  px-8 py-4 rounded-xl bg-blue-600 text-white font-inter text-base font-bold leading-6 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/6">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.16667 15.7416H5.345L13.1067 7.97994L11.9283 6.80161L4.16667 14.5633V15.7416ZM17.5 17.4083H2.5V13.8724L13.6958 2.67661C13.8521 2.52038 14.064 2.43262 14.285 2.43262C14.506 2.43262 14.7179 2.52038 14.8742 2.67661L17.2317 5.03411C17.3879 5.19038 17.4757 5.4023 17.4757 5.62327C17.4757 5.84424 17.3879 6.05617 17.2317 6.21244L7.7025 15.7416H17.5V17.4083ZM13.1067 5.62327L14.285 6.80161L15.4633 5.62327L14.285 4.44494L13.1067 5.62327Z" fill="white"/>
                  </svg>
                  Submit a Report
                </button>
                <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-black/20 bg-white text-gray-800 font-inter text-base font-bold leading-6 hover:border-black/40 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.91667 13.3333C6.40278 13.3333 5.12167 12.8089 4.07333 11.76C3.025 10.7111 2.50056 9.43 2.5 7.91667C2.49944 6.40333 3.02389 5.12222 4.07333 4.07333C5.12278 3.02444 6.40389 2.5 7.91667 2.5C9.42945 2.5 10.7108 3.02444 11.7608 4.07333C12.8108 5.12222 13.335 6.40333 13.3333 7.91667C13.3333 8.52778 13.2361 9.10417 13.0417 9.64583C12.8472 10.1875 12.5833 10.6667 12.25 11.0833L16.9167 15.75C17.0694 15.9028 17.1458 16.0972 17.1458 16.3333C17.1458 16.5694 17.0694 16.7639 16.9167 16.9167C16.7639 17.0694 16.5694 17.1458 16.3333 17.1458C16.0972 17.1458 15.9028 17.0694 15.75 16.9167L11.0833 12.25C10.6667 12.5833 10.1875 12.8472 9.64583 13.0417C9.10417 13.2361 8.52778 13.3333 7.91667 13.3333ZM7.91667 11.6667C8.95833 11.6667 9.84389 11.3022 10.5733 10.5733C11.3028 9.84445 11.6672 8.95889 11.6667 7.91667C11.6661 6.87444 11.3017 5.98917 10.5733 5.26083C9.845 4.5325 8.95945 4.16778 7.91667 4.16667C6.87389 4.16556 5.98861 4.53028 5.26083 5.26083C4.53306 5.99139 4.16833 6.87667 4.16667 7.91667C4.165 8.95667 4.52972 9.84222 5.26083 10.5733C5.99195 11.3044 6.87722 11.6689 7.91667 11.6667Z" fill="#2C3031"/>
                  </svg>
                  Search School
                </button>
              </div>
            </div>

          
           
              {/* Phone mockup */}
                        <div className="hero-mockup-area">
                          <div className="hero-ring hero-ring--outer" />
                          <div className="hero-ring hero-ring--mid" />
                          <div className="hero-ring hero-ring--inner" />
                          <div className="hero-circle-fill" />
              
                          {/* Phone mockup */}
                          <Image src="/Artboard.svg" height={500} width={500} className="w-[400px] h-[410px] z-2" alt="Image"/>
              
                          {/* Anonymous Report floating card */}
                          <div className="anon-report-card">
                            <span className="anon-report-card__label">Anonymous Report</span>
                            <div className="anon-report-card__badge">
                              <span className="anon-report-card__badge-text">Enabled</span>
                              <div className="anon-report-card__toggle" />
                            </div>
                          </div>
              
                          {/* Floating review card */}
                          <div className="review-card">
                            <div className="review-card__header">
                              <div className="review-card__school-info">
                                <span className="review-card__school-name">Oakridge Academy</span>
                                <span className="review-card__school-type">Public High School</span>
                              </div>
                              <div className="review-card__rating-badge">4.8 Rating</div>
                            </div>
                            <div className="review-card__body">
                              <div className="review-card__skeleton-wrapper">
                                <div className="review-card__skeleton-line review-card__skeleton-line--full" />
                                <div className="review-card__skeleton-line review-card__skeleton-line--short" />
                              </div>
                              <div className="review-card__footer">
                                <div className="review-card__verified">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.73464 15L4.46797 12.8667L2.06797 12.3333L2.3013 9.86667L0.667969 8L2.3013 6.13333L2.06797 3.66667L4.46797 3.13333L5.73464 1L8.0013 1.96667L10.268 1L11.5346 3.13333L13.9346 3.66667L13.7013 6.13333L15.3346 8L13.7013 9.86667L13.9346 12.3333L11.5346 12.8667L10.268 15L8.0013 14.0333L5.73464 15ZM6.3013 13.3L8.0013 12.5667L9.73464 13.3L10.668 11.7L12.5013 11.2667L12.3346 9.4L13.568 8L12.3346 6.56667L12.5013 4.7L10.668 4.3L9.7013 2.7L8.0013 3.43333L6.26797 2.7L5.33464 4.3L3.5013 4.7L3.66797 6.56667L2.43464 8L3.66797 9.4L3.5013 11.3L5.33464 11.7L6.3013 13.3ZM7.3013 10.3667L11.068 6.6L10.1346 5.63333L7.3013 8.46667L5.86797 7.06667L4.93464 8L7.3013 10.3667Z" fill="#0171F9"/>
                                  </svg>
                                  <span>Verified User</span>
                                </div>
                                <span className="review-card__timestamp">2 days ago</span>
                              </div>
                            </div>
                          </div>
                        </div>
            </div>
     
        </section>

        {/* Why Guest-Teacher Report Section */}
        <section className="bg-white px-6 py-[72px] flex flex-col items-center gap-12">
          <h2 className="text-gray-950 text-center font-[Outfit] text-[clamp(28px,4vw,44px)] font-semibold leading-[1.2]">
            Why Guest-Teacher Report
          </h2>

          {/* Row 1 – three columns */}
          <div className="flex items-start justify-center w-full max-w-[1200px]">
            {/* Step 1 */}
            <div className="flex flex-col items-center gap-2 flex-1 px-4 min-w-0">
              <Image src="/anonymous.svg" height={100} width={100}  className="w-[70px] h-[70px]" alt="Icon"/>
              <h3 className="text-gray-800 text-center font-[Outfit] text-2xl font-semibold leading-8">Stay Anonymous</h3>
              <p className="text-gray-800 text-center font-inter text-base font-normal leading-[26px] px-12">Share classroom experiences without revealing your identity.</p>
            </div>

            <div className="w-px min-h-[173px] bg-gray-300 opacity-72 flex-shrink-0" />

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-2 flex-1 px-4 min-w-0">
              <div className="relative w-20 h-[70px] flex items-center justify-center">
                <Image src="/reports.svg" height={100} width={100}  className="w-[60px] h-[60px]" alt="Icon"/>
              </div>
              <h3 className="text-gray-800 text-center font-[Outfit] text-2xl font-semibold leading-8">Structured Reports</h3>
              <p className="text-gray-800 text-center font-inter text-base font-normal leading-[26px] px-12">Access clear, experience-based insights from other educators.</p>
            </div>

            <div className="w-px min-h-[173px] bg-gray-300 opacity-72 flex-shrink-0" />

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-2 flex-1 px-4 min-w-0">
              <div className="relative w-20 h-[70px]">
                <Image src="/betterDecisions.svg" height={100} width={100}  className="w-[70px] h-[70px]" alt="Icon"/>
              </div>
              <h3 className="text-gray-800 text-center font-[Outfit] text-2xl font-semibold leading-8">Make Better Decisions</h3>
              <p className="text-gray-800 text-center font-inter text-base font-normal leading-[26px] px-12">Use real data to choose the right teaching assignments.</p>
            </div>
          </div>

          {/* Row 2 – two columns centered */}
          <div className="flex items-start justify-center w-full max-w-[768px] gap-0">
            {/* Smart Search & Filters */}
            <div className="flex flex-col items-center gap-2 flex-1 px-4 min-w-0">
                              <Image src="/Frame.svg" height={100} width={100}  className="w-[70px] h-[70px]" alt="Icon"/>

              <h3 className="text-gray-800 text-center font-[Outfit] text-2xl font-semibold leading-8">Smart Search &amp; Filters</h3>
              <p className="text-gray-800 text-center font-inter text-base font-normal leading-[26px] px-12">Quickly find regular teacher or schools using powerful filters.</p>
            </div>

            <div className="w-px min-h-[173px] bg-gray-300 opacity-72 flex-shrink-0" />

            {/* AI-Powered Insights */}
            <div className="flex flex-col items-center gap-2 flex-1 px-4 min-w-0">
              <div className="relative w-20 h-[70px] flex items-center justify-center">
                                              <Image src="/ai.svg" height={100} width={100}  className="w-[70px] h-[70px]" alt="Icon"/>

              </div>
              <h3 className="text-gray-800 text-center font-[Outfit] text-2xl font-semibold leading-8">AI-Powered Insights</h3>
              <p className="text-gray-800 text-center font-inter text-base font-normal leading-[26px] px-12">Understand sentiment and patterns with intelligent analysis.</p>
            </div>
          </div>
        </section>

        {/* Understand Every Classroom Section */}
        <section className="bg-white px-6 py-[72px]">
          <div className="max-w-[1176px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* Left: Profile visual panel */}
            <div className="relative w-full max-w-[534px] flex-shrink-0 rounded-[32px] bg-[#F8F9FD] overflow-hidden aspect-[534/396]">

              {/* White profile card */}
              <div className="absolute left-[5.6%] top-[7.6%] w-[63.3%] h-[84.8%] bg-white rounded-2xl shadow-[0_4px_36px_0_rgba(1,113,249,0.06)]">
                <p className="absolute left-5 top-5 font-inter text-base font-medium text-black leading-[26px]">Profile</p>

                {/* Skeleton lines area */}
                <div className="absolute left-5 right-5 top-[17.9%] h-[47%] bg-[#F8F9FD] rounded-2xl">
                  <div className="absolute left-3.5 top-3.5 h-[13px] w-[80%] rounded-[10px] bg-[#E6E6E6]" />
                  <div className="absolute left-3.5 top-[39px] h-[13px] w-[78%] rounded-[10px] bg-[#E6E6E6]" />
                  <div className="absolute left-3.5 top-16 h-[13px] w-[64%] rounded-[10px] bg-[#E6E6E6]" />
                  <div className="absolute left-3.5 top-[89px] h-[13px] w-[64%] rounded-[10px] bg-[#E6E6E6]" />
                  <div className="absolute left-3.5 top-[114px] h-[13px] w-[67%] rounded-[10px] bg-[#E6E6E6]" />
                </div>

                {/* Dark navy quote box */}
                <div className="absolute left-5 right-5 bottom-5 bg-[#384F87] rounded-2xl px-5 py-4">
                  <p className="font-inter text-sm font-medium text-white leading-[22px]">
                    Get the pulse of the building from those who work there every day.
                  </p>
                </div>
              </div>

              {/* Feature badge: Risk Level */}
              <div className="absolute top-[19.7%] left-[57%] flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 bg-white rounded-full border border-[#F9F9F9] shadow-[0_10px_50px_-12px_rgba(0,0,0,0.16)] backdrop-blur-[5px]">
                <div className="relative w-9 h-9 flex-shrink-0">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="18" fill="url(#paint0_linear_117_3956)" />
                    <defs>
                      <linearGradient id="paint0_linear_117_3956" x1="2.17462" y1="-21.1457" x2="57.8353" y2="6.78517" gradientUnits="userSpaceOnUse">
                        <stop offset="0.184" stopColor="#29ABE2" />
                        <stop offset="0.821" stopColor="#0171F9" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="absolute left-[10px] top-[10px]">
                    <path d="M9.44602 0.666626L4.66602 5.45329V14H12.8727L15.3327 8.26663V5.33329H9.79268L10.5393 1.74663L9.44602 0.666626ZM0.666016 5.99996H3.33268V14H0.666016V5.99996Z" fill="white" />
                  </svg>
                </div>
                <span className="font-inter text-sm font-medium text-[#191C1D] whitespace-nowrap">Risk Level</span>
              </div>

              {/* Feature badge: Pattern-based insights */}
              <div className="absolute top-[39.1%] left-[50.6%] flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 bg-white rounded-full border border-[#F9F9F9] shadow-[0_10px_50px_-12px_rgba(0,0,0,0.16)] backdrop-blur-[5px]">
                <div className="relative w-9 h-9 flex-shrink-0">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="18" fill="url(#paint0_linear_117_3962)" />
                    <defs>
                      <linearGradient id="paint0_linear_117_3962" x1="2.17462" y1="-21.1457" x2="57.8353" y2="6.78517" gradientUnits="userSpaceOnUse">
                        <stop offset="0.184" stopColor="#29ABE2" />
                        <stop offset="0.821" stopColor="#0171F9" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="absolute left-2 top-2">
                    <path d="M11.7158 8.28328L10.8325 7.87495C10.7597 7.84181 10.698 7.78844 10.6548 7.72121C10.6115 7.65398 10.5885 7.57572 10.5885 7.49578C10.5885 7.41585 10.6115 7.33759 10.6548 7.27036C10.698 7.20313 10.7597 7.14976 10.8325 7.11662L11.7158 6.70828L12.1241 5.83328C12.1573 5.76054 12.2106 5.69886 12.2779 5.65562C12.3451 5.61237 12.4233 5.58937 12.5033 5.58937C12.5832 5.58937 12.6615 5.61237 12.7287 5.65562C12.7959 5.69886 12.8493 5.76054 12.8825 5.83328L13.2908 6.71662L14.1658 7.12495C14.2385 7.1581 14.3002 7.21147 14.3435 7.2787C14.3867 7.34593 14.4097 7.42418 14.4097 7.50412C14.4097 7.58406 14.3867 7.66231 14.3435 7.72954C14.3002 7.79677 14.2385 7.85014 14.1658 7.88329L13.2825 8.29162L12.8741 9.16662C12.841 9.23936 12.7876 9.30104 12.7204 9.34429C12.6531 9.38754 12.5749 9.41053 12.495 9.41053C12.415 9.41053 12.3368 9.38754 12.2695 9.34429C12.2023 9.30104 12.1489 9.23936 12.1158 9.16662L11.7158 8.28328ZM3.70745 10.8333L4.11579 9.94995L4.99912 9.54162C5.07187 9.50847 5.13354 9.4551 5.17679 9.38787C5.22004 9.32064 5.24303 9.24239 5.24303 9.16245C5.24303 9.08251 5.22004 9.00426 5.17679 8.93703C5.13354 8.8698 5.07187 8.81643 4.99912 8.78329L4.11579 8.37495L3.70745 7.49995C3.67533 7.42728 3.62279 7.36551 3.55622 7.32215C3.48964 7.27879 3.41191 7.25571 3.33245 7.25571C3.253 7.25571 3.17527 7.27879 3.10869 7.32215C3.04212 7.36551 2.98958 7.42728 2.95745 7.49995L2.54912 8.38329L1.66579 8.79162C1.59304 8.82476 1.53137 8.87813 1.48812 8.94536C1.44487 9.01259 1.42187 9.09085 1.42188 9.17078C1.42187 9.25072 1.44487 9.32898 1.48812 9.39621C1.53137 9.46344 1.59304 9.51681 1.66579 9.54995L2.54912 9.95828L2.95745 10.8333C3.09912 11.1583 3.56579 11.1583 3.70745 10.8333ZM7.46579 6.65828L7.99079 5.49162L9.15745 4.96662C9.2302 4.93347 9.29188 4.8801 9.33512 4.81287C9.37837 4.74564 9.40137 4.66739 9.40137 4.58745C9.40137 4.50751 9.37837 4.42926 9.33512 4.36203C9.29188 4.2948 9.2302 4.24143 9.15745 4.20829L7.99079 3.68328L7.46579 2.51662C7.43264 2.44387 7.37927 2.3822 7.31204 2.33895C7.24481 2.2957 7.16656 2.27271 7.08662 2.27271C7.00668 2.27271 6.92843 2.2957 6.8612 2.33895C6.79397 2.3822 6.7406 2.44387 6.70746 2.51662L6.18246 3.68328L5.01579 4.20829C4.94304 4.24143 4.88137 4.2948 4.83812 4.36203C4.79487 4.42926 4.77187 4.50751 4.77187 4.58745C4.77187 4.66739 4.79487 4.74564 4.83812 4.81287C4.88137 4.8801 4.94304 4.93347 5.01579 4.96662L6.18246 5.49162L6.70746 6.65828C6.84912 6.98328 7.31579 6.98328 7.46579 6.65828ZM18.6158 6.89162C18.5357 6.81178 18.4402 6.74907 18.3351 6.70732C18.23 6.66557 18.1175 6.64565 18.0045 6.64877C17.8914 6.65188 17.7802 6.67798 17.6776 6.72546C17.5749 6.77294 17.483 6.84082 17.4075 6.92495L12.0825 12.9083L9.34079 10.1666C9.26369 10.0894 9.17212 10.0281 9.07131 9.98626C8.9705 9.94444 8.86243 9.92291 8.75329 9.92291C8.64415 9.92291 8.53608 9.94444 8.43527 9.98626C8.33446 10.0281 8.24288 10.0894 8.16579 10.1666L3.13245 15.2083C2.79079 15.55 2.79079 16.1166 3.13245 16.4583C3.47412 16.8 4.04079 16.8 4.38246 16.4583L8.75745 12.075L11.4658 14.7833C11.8075 15.125 12.3575 15.1083 12.6741 14.75L18.6491 8.02495C18.9408 7.69995 18.9241 7.19995 18.6158 6.89162Z" fill="white" />
                  </svg>
                </div>
                <span className="font-inter text-sm font-medium text-[#191C1D] whitespace-nowrap">Pattern-based insights</span>
              </div>

              {/* Feature badge: Complete History */}
              <div className="absolute top-[57.6%] left-[55.8%] flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 bg-white rounded-full border border-[#F9F9F9] shadow-[0_10px_50px_-12px_rgba(0,0,0,0.16)] backdrop-blur-[5px]">
                <div className="relative w-9 h-9 flex-shrink-0">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="18" fill="url(#paint0_linear_117_3968)" />
                    <defs>
                      <linearGradient id="paint0_linear_117_3968" x1="2.17462" y1="-21.1457" x2="57.8353" y2="6.78517" gradientUnits="userSpaceOnUse">
                        <stop offset="0.184" stopColor="#29ABE2" />
                        <stop offset="0.821" stopColor="#0171F9" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="absolute left-2 top-2">
                    <path d="M3.555 13.3833C4.25989 14.8089 5.40339 15.9708 6.8175 16.6983C8.22126 17.4195 9.82199 17.6629 11.3767 17.3917C12.9361 17.1172 14.3648 16.3454 15.4492 15.1917C16.5433 14.0267 17.24 12.5449 17.4392 10.9592C17.6411 9.36978 17.3366 7.75721 16.5692 6.35083C15.8087 4.95515 14.6201 3.84068 13.1783 3.17166C11.7464 2.50847 10.1372 2.33058 8.595 2.665C7.05333 2.99916 5.79 3.75916 4.745 4.96083C4.61917 5.09416 4.1325 5.6325 3.72833 6.445M6.25 6.66666L3.2425 7.26666L2.5 4.16666M10 7.5V10.8333L12.5 12.5" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="font-inter text-sm font-medium text-[#191C1D] whitespace-nowrap">Complete History</span>
              </div>
            </div>

            {/* Right: Text content */}
            <div className="flex flex-col gap-7 flex-1 max-w-[522px]">
              <h2 className="font-[Outfit] text-[clamp(28px,3.8vw,44px)] font-semibold text-[#121212] leading-[1.32]">
                Understand Every Classroom Before You Step In
              </h2>
              <p className="font-inter text-base text-[#212121] leading-[26px] opacity-[0.96]">
                Explore detailed regular teacher profiles with aggregated reports, sentiment insights, and behavior patterns all in one structured view designed for clarity and confidence.
              </p>
            </div>

          </div>
        </section>

        {/* Find the Right Opportunities / AI-Powered Insights Section */}
        <section className="bg-white px-6 py-[72px]">
          <div className="max-w-[1176px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* Left: Text content */}
            <div className="flex flex-col gap-7 flex-1 max-w-[522px]">
              <h2 className="font-[Outfit] text-[clamp(28px,3.8vw,44px)] font-semibold text-[#121212] leading-[1.32]">
                Find the Right Opportunities with AI-Powered Insights
              </h2>
              <p className="font-inter text-base text-[#212121] leading-[26px] opacity-[0.96]">
                Search regular teachers or schools, filter reports instantly, and uncover trends through intelligent sentiment analysis helping you make faster and more informed decisions.
              </p>
            </div>

            {/* Right: Search & filter UI mockup */}
            <div className="relative w-full max-w-[534px] flex-shrink-0 rounded-[32px] bg-[#F8F9FD] overflow-hidden aspect-[534/396]">

              {/* White inner card */}
              <div
                className="absolute rounded-xl bg-white"
                style={{
                  left: '5.6%', top: '7.6%',
                  width: '84.8%', height: '84.8%',
                  boxShadow: '0 4px 36px 0 rgba(1, 113, 249, 0.06)',
                }}
              />

              {/* Search input */}
              <div
                className="absolute flex items-center gap-2 rounded-full bg-[#F2F4F7] overflow-hidden"
                style={{ left: '9.4%', top: '12.6%', width: '77.3%', height: '10.1%', padding: '12px 20px' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path d="M13.0667 14L8.86667 9.8C8.53333 10.0667 8.15 10.2778 7.71667 10.4333C7.28333 10.5889 6.82222 10.6667 6.33333 10.6667C5.12222 10.6667 4.09733 10.2471 3.25867 9.408C2.42 8.56889 2.00044 7.544 2 6.33333C1.99956 5.12267 2.41911 4.09778 3.25867 3.25867C4.09822 2.41956 5.12311 2 6.33333 2C7.54356 2 8.56867 2.41956 9.40867 3.25867C10.2487 4.09778 10.668 5.12267 10.6667 6.33333C10.6667 6.82222 10.5889 7.28333 10.4333 7.71667C10.2778 8.15 10.0667 8.53333 9.8 8.86667L14 13.0667L13.0667 14ZM6.33333 9.33333C7.16667 9.33333 7.87511 9.04178 8.45867 8.45867C9.04222 7.87556 9.33378 7.16711 9.33333 6.33333C9.33289 5.49956 9.04133 4.79133 8.45867 4.20867C7.876 3.626 7.16756 3.33422 6.33333 3.33333C5.49911 3.33244 4.79089 3.62422 4.20867 4.20867C3.62644 4.79311 3.33467 5.50133 3.33333 6.33333C3.332 7.16533 3.62378 7.87378 4.20867 8.45867C4.79356 9.04356 5.50178 9.33511 6.33333 9.33333Z" fill="#737786"/>
                </svg>
                <span className="font-inter text-sm text-[rgba(115,119,134,0.6)]">Search...</span>
              </div>

              {/* Skeleton lines block */}
             <div className="absolute  top-[17.9%] h-[47%] bg-[#F8F9FD] rounded-2xl" style={{ left: '9.4%', top: '27.8%', width: '77.3%', height: '36.4%' }}>
              <div className="absolute left-3.5 top-3.5 h-[13px] w-[80%] rounded-[10px] bg-[#E6E6E6]"></div>
              <div className="absolute left-3.5 top-[39px] h-[13px] w-[90%] rounded-[10px] bg-[#E6E6E6]"></div>
              <div className="absolute left-3.5 top-16 h-[13px] w-[64%] rounded-[10px] bg-[#E6E6E6]"></div>
              <div className="absolute left-3.5 top-[89px] h-[13px] w-[64%] rounded-[10px] bg-[#E6E6E6]"></div>
              <div className="absolute left-3.5 top-[114px] h-[13px] w-[67%] rounded-[10px] bg-[#E6E6E6]"></div>
              </div>

              {/* Bottom gray placeholder block */}
              <div
                className="absolute rounded-2xl bg-[#F4F4F4]"
                style={{ left: '9.4%', top: '66.2%', width: '77.3%', height: '20.2%' }}
              />

              {/* "Clear Insights" floating card */}
              <div
                className="absolute rounded-[20px] bg-white"
                style={{
                  left: '50.4%', top: '54%',
                  width: '47.2%', height: '26.3%',
                  border: '1px solid #F9F9F9',
                  boxShadow: '0 10px 50px -12px rgba(0, 0, 0, 0.16)',
                  backdropFilter: 'blur(5px)',
                }}
              >
                <span
                  className="absolute font-inter font-semibold text-black"
                  style={{ left: '20px', top: '20px', fontSize: '16px', lineHeight: '18px' }}
                >
                  Clear Insights
                </span>
                <div className="absolute flex items-center gap-3" style={{ left: '20px', top: '56px' }}>
                  {/* Positive badge */}
                  <div className="flex items-center gap-1.5 rounded-[10px] bg-[rgba(47,175,0,0.20)] px-2 py-1.5">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.0007 14.0001H5.33398V5.33342L10.0007 0.666748L10.834 1.50008C10.9118 1.57786 10.9758 1.68341 11.026 1.81675C11.0762 1.95008 11.1011 2.07786 11.1007 2.20008V2.43341L10.3673 5.33342H14.0007C14.3562 5.33342 14.6673 5.46675 14.934 5.73342C15.2007 6.00008 15.334 6.31119 15.334 6.66675V8.00008C15.334 8.07786 15.3258 8.16119 15.3093 8.25008C15.2929 8.33897 15.2678 8.4223 15.234 8.50008L13.234 13.2001C13.134 13.4223 12.9673 13.6112 12.734 13.7667C12.5007 13.9223 12.2562 14.0001 12.0007 14.0001ZM4.00065 5.33342V14.0001H1.33398V5.33342H4.00065Z" fill="#2FAF00"/>
                    </svg>
                    <span className="font-inter font-medium text-[#2FAF00]" style={{ fontSize: '14px', lineHeight: '18px' }}>Positive</span>
                  </div>
                  {/* Negative badge */}
                  <div className="flex items-center gap-1.5 rounded-[10px] bg-[rgba(255,0,0,0.20)] px-2 py-1.5">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.0007 1.99992H5.33398V10.6666L10.0007 15.3333L10.834 14.4999C10.9118 14.4221 10.9758 14.3166 11.026 14.1833C11.0762 14.0499 11.1011 13.9221 11.1007 13.7999V13.5666L10.3673 10.6666H14.0007C14.3562 10.6666 14.6673 10.5333 14.934 10.2666C15.2007 9.99992 15.334 9.68881 15.334 9.33325V7.99992C15.334 7.92214 15.3258 7.83881 15.3093 7.74992C15.2929 7.66103 15.2678 7.5777 15.234 7.49992L13.234 2.79992C13.134 2.5777 12.9673 2.38881 12.734 2.23325C12.5007 2.0777 12.2562 1.99992 12.0007 1.99992ZM4.00065 10.6666V1.99992H1.33398V10.6666H4.00065Z" fill="#F32121"/>
                    </svg>
                    <span className="font-inter font-medium text-[#F32121]" style={{ fontSize: '14px', lineHeight: '18px' }}>Negative</span>
                  </div>
                </div>
              </div>

              {/* "Filter results" floating badge */}
              <div
                className="absolute flex items-center gap-2.5 rounded-[20px] bg-white overflow-hidden"
                style={{
                  left: '69.7%', top: '22.2%',
                  padding: '6px 16px 6px 6px',
                  border: '1px solid #F9F9F9',
                  boxShadow: '0 10px 50px -12px rgba(0, 0, 0, 0.16)',
                  backdropFilter: 'blur(5px)',
                }}
              >
                <div className="relative w-9 h-9 flex-shrink-0">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="18" fill="url(#filter-grad)"/>
                    <defs>
                      <linearGradient id="filter-grad" x1="2.17462" y1="-21.1457" x2="57.8353" y2="6.78517" gradientUnits="userSpaceOnUse">
                        <stop offset="0.184" stopColor="#29ABE2"/>
                        <stop offset="0.821" stopColor="#0171F9"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-2 top-2">
                    <path d="M11.6667 14.1667C11.8791 14.1669 12.0834 14.2483 12.2378 14.3941C12.3923 14.5399 12.4852 14.7391 12.4976 14.9512C12.5101 15.1632 12.4411 15.372 12.3048 15.5349C12.1685 15.6978 11.9751 15.8024 11.7642 15.8275L11.6667 15.8334H8.33333C8.12093 15.8331 7.91664 15.7518 7.76219 15.606C7.60775 15.4602 7.5148 15.2609 7.50236 15.0489C7.48991 14.8368 7.5589 14.628 7.69522 14.4652C7.83155 14.3023 8.02492 14.1976 8.23583 14.1725L8.33333 14.1667H11.6667ZM14.1667 9.16669C14.3877 9.16669 14.5996 9.25448 14.7559 9.41076C14.9122 9.56705 15 9.77901 15 10C15 10.221 14.9122 10.433 14.7559 10.5893C14.5996 10.7456 14.3877 10.8334 14.1667 10.8334H5.83333C5.61232 10.8334 5.40036 10.7456 5.24408 10.5893C5.0878 10.433 5 10.221 5 10C5 9.77901 5.0878 9.56705 5.24408 9.41076C5.40036 9.25448 5.61232 9.16669 5.83333 9.16669H14.1667ZM16.6667 4.16669C16.8877 4.16669 17.0996 4.25448 17.2559 4.41076C17.4122 4.56705 17.5 4.77901 17.5 5.00002C17.5 5.22103 17.4122 5.433 17.2559 5.58928C17.0996 5.74556 16.8877 5.83335 16.6667 5.83335H3.33333C3.11232 5.83335 2.90036 5.74556 2.74408 5.58928C2.5878 5.433 2.5 5.22103 2.5 5.00002C2.5 4.77901 2.5878 4.56705 2.74408 4.41076C2.90036 4.25448 3.11232 4.16669 3.33333 4.16669H16.6667Z" fill="white"/>
                  </svg>
                </div>
                <span className="font-inter font-medium text-[#191C1D] whitespace-nowrap" style={{ fontSize: '14px', lineHeight: '18px' }}>Filter results</span>
              </div>

            </div>
          </div>
        </section>

        {/* How to Make Smarter Teaching Decisions in 3 Steps Section */}
        <section className="bg-white px-6 py-[72px]">
          <div className="max-w-[1176px] mx-auto flex flex-col items-center gap-12">

            {/* Heading */}
            <h2 className="font-[Outfit] text-[clamp(28px,4vw,48px)] font-bold text-gray-950 text-center leading-[1.2] max-w-[640px]">
              How to Make Smarter Teaching Decisions in 3 Steps
            </h2>

            {/* Steps row */}
            <div className="w-full flex flex-col md:flex-row justify-center">

              {/* Step 1 */}
              <div className="flex flex-col gap-5 flex-1 px-6 py-2 md:py-0 items-center">
                                              <Image src="/one.svg" height={100} width={100}  className="w-[50px] h-[50px]" alt="Icon"/>

                <h3 className="font-[Outfit] text-[22px] font-bold text-gray-950 leading-[1.3]">
                  Submit Your Experience
                </h3>
                <p className="font-inter text-base font-normal text-center text-gray-700 leading-[26px] text-center">
                  Share detailed classroom insights with the option to remain anonymous.
                </p>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px self-stretch bg-gray-200 flex-shrink-0" />
              <div className="md:hidden h-px w-full bg-gray-200 my-6" />

              {/* Step 2 */}
              <div className="flex flex-col gap-5 flex-1 px-6 py-2 md:py-0 items-center">
                <Image src="/two.svg" height={100} width={100}  className="w-[50px] h-[50px]" alt="Icon"/>
                <h3 className="font-[Outfit] text-[22px] font-bold text-gray-950 leading-[1.3]">
                  AI Analyzes &amp; Structures
                </h3>
                <p className="font-inter text-base font-normal text-gray-700 leading-[26px]  text-center">
                  Your report is reviewed, categorized with AI-powered sentiment insights to ensure clarity and consistency.
                </p>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px self-stretch bg-gray-200 flex-shrink-0  items-center" />
              <div className="md:hidden h-px w-full bg-gray-200 my-6" />

              {/* Step 3 */}
              <div className="flex flex-col gap-5 flex-1 px-6 py-2 md:py-0  items-center">
                <Image src="/three.svg" height={100} width={100}  className="w-[50px] h-[50px]" alt="Icon"/>
                <h3 className="font-[Outfit] text-[22px] font-bold text-gray-950 leading-[1.3]">
                  Explore &amp; Decide
                </h3>
                <p className="font-inter text-base font-normal text-gray-700 leading-[26px]   text-center">
                  Search reports, review regular teacher profiles, and understand patterns before accepting assignments.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Recent Classroom Experiences Section */}
        <section className="bg-white px-9 py-[35px] pb-[80px]">
          <div className="rounded-[28px] bg-[#F8F9FD] p-14 flex flex-col lg:flex-row justify-between gap-10 lg:gap-16">

            {/* Left: heading, subtitle, stats */}
            <div className="flex flex-col justify-between gap-10 flex-shrink-0 lg:w-[556px]">
              <div className="flex flex-col gap-8">
                <h2 className="font-[Outfit] text-[clamp(28px,3.2vw,44px)] font-semibold text-[#121212] leading-[1.32]">
                  Recent Classroom Experiences
                </h2>
                <p className="font-inter text-base text-[#212121] leading-[26px] opacity-[0.96] max-w-[492px]">
                  Real insights shared by Guest teacher to help you better understand schools and teaching environments.
                </p>
              </div>
              <div className="flex items-start gap-12">
                <div className="flex flex-col gap-5">
                  <span className="font-[Outfit] text-5xl font-semibold text-[#121212] opacity-[0.96]">2M+</span>
                  <span className="font-inter text-base text-[#212121] leading-[26px] tracking-[1px] uppercase opacity-80">Reports</span>
                </div>
                <div className="flex flex-col gap-5">
                  <span className="font-[Outfit] text-5xl font-semibold text-[#121212] opacity-[0.96]">1M+</span>
                  <span className="font-inter text-base text-[#212121] leading-[26px] tracking-[1px] uppercase opacity-80">Schools</span>
                </div>
              </div>
            </div>

            {/* Right: review cards */}
            <div className="flex flex-col gap-5 flex-1 min-w-0">

              {/* Card 1 – Green Valley High School */}
              <div className="flex flex-col gap-4 p-4 rounded-[20px] border border-[rgba(219,219,219,0.40)] bg-white backdrop-blur-[5px]">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-3">
                      <span className="font-inter text-sm font-bold text-[#121212] leading-5">Green Valley High School</span>
                      <span className="font-inter text-xs text-[#464555] leading-[15px] tracking-[0.5px] uppercase opacity-80">Grade Level: 8th</span>
                    </div>
                    <div className="flex items-center gap-1 opacity-64">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.33268 5.83333C9.33268 4.54417 8.28852 3.5 6.99935 3.5C5.71018 3.5 4.66602 4.54417 4.66602 5.83333C4.66602 7.1225 5.71018 8.16667 6.99935 8.16667C8.28852 8.16667 9.33268 7.1225 9.33268 5.83333ZM5.83268 5.83333C5.83268 5.19167 6.35768 4.66667 6.99935 4.66667C7.64102 4.66667 8.16602 5.19167 8.16602 5.83333C8.16602 6.475 7.64102 7 6.99935 7C6.35768 7 5.83268 6.475 5.83268 5.83333Z" fill="#121212"/>
                        <path d="M6.66237 12.7226C6.76154 12.7926 6.88404 12.8334 7.00071 12.8334C7.11737 12.8334 7.23987 12.7984 7.33904 12.7226C7.51404 12.5942 11.6849 9.59006 11.6674 5.82756C11.6674 3.25506 9.57321 1.16089 7.00071 1.16089C4.42821 1.16089 2.33404 3.25506 2.33404 5.82756C2.31654 9.58422 6.48737 12.5942 6.66237 12.7226ZM7.00071 2.33339C8.93154 2.33339 10.5007 3.90256 10.5007 5.83339C10.5124 8.42339 7.93987 10.7509 7.00071 11.5151C6.06154 10.7509 3.48904 8.42922 3.50071 5.83339C3.50071 3.90256 5.06987 2.33339 7.00071 2.33339Z" fill="#121212"/>
                      </svg>
                      <span className="font-inter text-xs text-[#121212] leading-[26px]">Austin, Texas, USA</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 px-2 py-1 rounded bg-[rgba(47,175,0,0.10)]">
                    <span className="font-inter text-xs font-semibold text-[#2FAF00] leading-[15px]">Positive</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="px-[18px] py-2.5 rounded-lg bg-[#F8F9FD]">
                    <p className="font-inter text-sm text-[#464555] leading-6">Classroom was mostly organized and lesson plans were available, but managing student behavior required extra attention throughout the day</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.73464 15L4.46797 12.8667L2.06797 12.3333L2.3013 9.86667L0.667969 8L2.3013 6.13333L2.06797 3.66667L4.46797 3.13333L5.73464 1L8.0013 1.96667L10.268 1L11.5346 3.13333L13.9346 3.66667L13.7013 6.13333L15.3346 8L13.7013 9.86667L13.9346 12.3333L11.5346 12.8667L10.268 15L8.0013 14.0333L5.73464 15ZM6.3013 13.3L8.0013 12.5667L9.73464 13.3L10.668 11.7L12.5013 11.2667L12.3346 9.4L13.568 8L12.3346 6.56667L12.5013 4.7L10.668 4.3L9.7013 2.7L8.0013 3.43333L6.26797 2.7L5.33464 4.3L3.5013 4.7L3.66797 6.56667L2.43464 8L3.66797 9.4L3.5013 11.3L5.33464 11.7L6.3013 13.3ZM7.3013 10.3667L11.068 6.6L10.1346 5.63333L7.3013 8.46667L5.86797 7.06667L4.93464 8L7.3013 10.3667Z" fill="#0171F9"/>
                      </svg>
                      <span className="font-inter text-xs text-[#0171F9] leading-4">Verified User</span>
                    </div>
                    <span className="font-inter text-xs text-[#777587] leading-4">1 days ago</span>
                  </div>
                </div>
              </div>

              {/* Card 2 – Riverdale High School */}
              <div className="flex flex-col gap-4 p-4 rounded-[20px] border border-[rgba(219,219,219,0.40)] bg-white backdrop-blur-[5px]">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-3">
                      <span className="font-inter text-sm font-bold text-[#121212] leading-5">Riverdale High School</span>
                      <span className="font-inter text-xs text-[#464555] leading-[15px] tracking-[0.5px] uppercase opacity-80">Grade Level: 10th</span>
                    </div>
                    <div className="flex items-center gap-1 opacity-64">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.33268 5.83333C9.33268 4.54417 8.28852 3.5 6.99935 3.5C5.71018 3.5 4.66602 4.54417 4.66602 5.83333C4.66602 7.1225 5.71018 8.16667 6.99935 8.16667C8.28852 8.16667 9.33268 7.1225 9.33268 5.83333ZM5.83268 5.83333C5.83268 5.19167 6.35768 4.66667 6.99935 4.66667C7.64102 4.66667 8.16602 5.19167 8.16602 5.83333C8.16602 6.475 7.64102 7 6.99935 7C6.35768 7 5.83268 6.475 5.83268 5.83333Z" fill="#121212"/>
                        <path d="M6.66237 12.7226C6.76154 12.7926 6.88404 12.8334 7.00071 12.8334C7.11737 12.8334 7.23987 12.7984 7.33904 12.7226C7.51404 12.5942 11.6849 9.59006 11.6674 5.82756C11.6674 3.25506 9.57321 1.16089 7.00071 1.16089C4.42821 1.16089 2.33404 3.25506 2.33404 5.82756C2.31654 9.58422 6.48737 12.5942 6.66237 12.7226ZM7.00071 2.33339C8.93154 2.33339 10.5007 3.90256 10.5007 5.83339C10.5124 8.42339 7.93987 10.7509 7.00071 11.5151C6.06154 10.7509 3.48904 8.42922 3.50071 5.83339C3.50071 3.90256 5.06987 2.33339 7.00071 2.33339Z" fill="#121212"/>
                      </svg>
                      <span className="font-inter text-xs text-[#121212] leading-[26px]">Chicago, Illinois, USA</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 px-2 py-1 rounded bg-[rgba(47,175,0,0.10)]">
                    <span className="font-inter text-xs font-semibold text-[#2FAF00] leading-[15px]">Positive</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="px-[18px] py-2.5 rounded-lg bg-[#F8F9FD]">
                    <p className="font-inter text-sm text-[#464555] leading-6">Clear instructions were provided and the staff was supportive, students were engaged which made the overall experience smooth</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.73464 15L4.46797 12.8667L2.06797 12.3333L2.3013 9.86667L0.667969 8L2.3013 6.13333L2.06797 3.66667L4.46797 3.13333L5.73464 1L8.0013 1.96667L10.268 1L11.5346 3.13333L13.9346 3.66667L13.7013 6.13333L15.3346 8L13.7013 9.86667L13.9346 12.3333L11.5346 12.8667L10.268 15L8.0013 14.0333L5.73464 15ZM6.3013 13.3L8.0013 12.5667L9.73464 13.3L10.668 11.7L12.5013 11.2667L12.3346 9.4L13.568 8L12.3346 6.56667L12.5013 4.7L10.668 4.3L9.7013 2.7L8.0013 3.43333L6.26797 2.7L5.33464 4.3L3.5013 4.7L3.66797 6.56667L2.43464 8L3.66797 9.4L3.5013 11.3L5.33464 11.7L6.3013 13.3ZM7.3013 10.3667L11.068 6.6L10.1346 5.63333L7.3013 8.46667L5.86797 7.06667L4.93464 8L7.3013 10.3667Z" fill="#0171F9"/>
                      </svg>
                      <span className="font-inter text-xs text-[#0171F9] leading-4">Verified User</span>
                    </div>
                    <span className="font-inter text-xs text-[#777587] leading-4">2 days ago</span>
                  </div>
                </div>
              </div>

              {/* Card 3 – Maplewood Middle School */}
              <div className="flex flex-col gap-4 p-4 rounded-[20px] border border-[rgba(219,219,219,0.40)] bg-white backdrop-blur-[5px]">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-3">
                      <span className="font-inter text-sm font-bold text-[#121212] leading-5">Maplewood Middle School</span>
                      <span className="font-inter text-xs text-[#464555] leading-[15px] tracking-[0.5px] uppercase opacity-80">Grade Level: 7th</span>
                    </div>
                    <div className="flex items-center gap-1 opacity-64">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.33268 5.83333C9.33268 4.54417 8.28852 3.5 6.99935 3.5C5.71018 3.5 4.66602 4.54417 4.66602 5.83333C4.66602 7.1225 5.71018 8.16667 6.99935 8.16667C8.28852 8.16667 9.33268 7.1225 9.33268 5.83333ZM5.83268 5.83333C5.83268 5.19167 6.35768 4.66667 6.99935 4.66667C7.64102 4.66667 8.16602 5.19167 8.16602 5.83333C8.16602 6.475 7.64102 7 6.99935 7C6.35768 7 5.83268 6.475 5.83268 5.83333Z" fill="#121212"/>
                        <path d="M6.66237 12.7226C6.76154 12.7926 6.88404 12.8334 7.00071 12.8334C7.11737 12.8334 7.23987 12.7984 7.33904 12.7226C7.51404 12.5942 11.6849 9.59006 11.6674 5.82756C11.6674 3.25506 9.57321 1.16089 7.00071 1.16089C4.42821 1.16089 2.33404 3.25506 2.33404 5.82756C2.31654 9.58422 6.48737 12.5942 6.66237 12.7226ZM7.00071 2.33339C8.93154 2.33339 10.5007 3.90256 10.5007 5.83339C10.5124 8.42339 7.93987 10.7509 7.00071 11.5151C6.06154 10.7509 3.48904 8.42922 3.50071 5.83339C3.50071 3.90256 5.06987 2.33339 7.00071 2.33339Z" fill="#121212"/>
                      </svg>
                      <span className="font-inter text-xs text-[#121212] leading-[26px]">Denver, Colorado, USA</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 px-2 py-1 rounded bg-[rgba(243,33,33,0.10)]">
                    <span className="font-inter text-xs font-semibold text-[#F32121] leading-[15px]">Negative</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="px-[18px] py-2.5 rounded-lg bg-[#F8F9FD]">
                    <p className="font-inter text-sm text-[#464555] leading-6">There was limited guidance from the regular teacher and classroom management was a bit challenging due to unclear expectations</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.73464 15L4.46797 12.8667L2.06797 12.3333L2.3013 9.86667L0.667969 8L2.3013 6.13333L2.06797 3.66667L4.46797 3.13333L5.73464 1L8.0013 1.96667L10.268 1L11.5346 3.13333L13.9346 3.66667L13.7013 6.13333L15.3346 8L13.7013 9.86667L13.9346 12.3333L11.5346 12.8667L10.268 15L8.0013 14.0333L5.73464 15ZM6.3013 13.3L8.0013 12.5667L9.73464 13.3L10.668 11.7L12.5013 11.2667L12.3346 9.4L13.568 8L12.3346 6.56667L12.5013 4.7L10.668 4.3L9.7013 2.7L8.0013 3.43333L6.26797 2.7L5.33464 4.3L3.5013 4.7L3.66797 6.56667L2.43464 8L3.66797 9.4L3.5013 11.3L5.33464 11.7L6.3013 13.3ZM7.3013 10.3667L11.068 6.6L10.1346 5.63333L7.3013 8.46667L5.86797 7.06667L4.93464 8L7.3013 10.3667Z" fill="#0171F9"/>
                      </svg>
                      <span className="font-inter text-xs text-[#0171F9] leading-4">Verified User</span>
                    </div>
                    <span className="font-inter text-xs text-[#777587] leading-4">2 days ago</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <footer className="bg-[#FAFCFE] border-t border-[rgba(226,232,240,0.64)] ">
        <div className="px-6 sm:px-[120px] flex flex-col ">
          {/* Top row: logo + nav links */}
          <div className="flex items-start justify-between gap-6 w-full py-12">
            {/* Logo */}
            <a href="/" aria-label="Anonymity" className="flex items-center flex-shrink-0">
              <svg width="154" height="25" viewBox="0 0 154 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_footer)">
                  <path d="M116.923 8.84582C117.853 7.63126 118.743 7.10214 120.296 6.96218C122.33 6.64456 124.28 7.86257 124.516 10.0248C124.822 12.8256 124.545 15.9745 124.718 18.8405C123.331 18.9075 122.316 18.9315 120.934 18.8277L120.945 18.4809C120.996 16.7222 121.144 13.1774 120.885 11.5639C120.811 11.1017 120.667 10.5328 120.334 10.188C120.024 9.86787 119.533 9.86434 119.118 9.85889C118.677 9.85309 118.31 9.92899 117.985 10.2509C116.876 11.352 117.245 15.9991 117.253 17.668L117.266 18.8536C116.014 18.9007 114.754 18.8735 113.501 18.8577C113.389 16.5907 113.569 14.1178 113.47 11.837C113.433 10.978 113.25 10.4579 112.613 9.90061C112.031 9.86325 111.595 9.87954 111.01 9.90414C110.253 10.4279 109.955 11.1359 109.923 12.0333C109.842 14.2888 109.97 16.5879 109.916 18.8423C108.598 18.9098 107.373 18.8826 106.057 18.8587C105.965 18.0136 105.989 15.3271 106.008 14.3592C106.052 12.1922 105.902 9.29148 106.106 7.19911C107.355 7.18568 108.606 7.19088 109.855 7.21456C109.909 7.86424 109.916 8.14106 109.862 8.7889C110.761 7.57257 111.424 7.27871 112.856 6.96394C114.12 6.9495 114.356 6.96117 115.56 7.32321C116.096 7.84854 116.497 8.21688 116.923 8.84582Z" fill="#0171F9"/>
                  <path d="M39.5626 2.49841C40.8874 2.56835 42.4654 2.48767 43.7559 2.59715C44.151 2.63065 45.5059 6.81052 45.7156 7.4079C46.5358 9.77314 47.3721 12.1328 48.2243 14.4867C48.7419 15.9551 49.188 17.4064 49.7909 18.8402C48.8646 18.8618 46.3917 19.0285 45.6623 18.7458C45.2054 18.3088 44.868 16.2036 44.544 15.3559C44.3884 15.2097 44.004 15.2185 43.7729 15.2028C42.2181 15.1638 40.2339 15.1415 38.6975 15.2513C38.4115 16.6624 38.1212 17.4776 37.6653 18.85C36.2718 18.8821 34.8778 18.8804 33.4844 18.8448C34.5063 16.095 35.5137 13.3399 36.5066 10.5796C36.9089 9.44217 39.0899 3.13105 39.5626 2.49841ZM39.6966 12.3132C40.3837 12.3254 41.1198 12.3526 41.8025 12.3483C42.3395 12.3364 42.9694 12.3387 43.4978 12.3068C43.0701 10.3224 42.1021 8.36446 41.7636 6.35714C41.7307 6.16185 41.7605 5.97218 41.6022 5.82542C41.1894 8.24095 40.1139 10.2647 39.6966 12.3132Z" fill="#0171F9"/>
                  <path d="M34.3065 20.0857C37.0131 19.9663 40.2042 20.1205 42.9676 20.1002L67.6724 20.0744C73.3635 20.0465 79.0543 20.053 84.7459 20.0941C86.5315 20.1189 88.5429 19.9796 90.299 20.1186C90.2914 20.6836 90.4426 21.9242 90.1907 22.3969C90.1377 22.4975 89.827 22.4852 89.6725 22.4967C87.9987 22.397 85.4338 22.4788 83.6634 22.4791L71.9849 22.4794L33.5244 22.4718C33.5075 21.6938 33.5203 20.8759 33.5201 20.0945L34.3065 20.0857Z" fill="#0171F9"/>
                  <path d="M69.8351 6.9537C71.5936 6.88485 73.2236 6.88107 74.8045 7.84099C77.6688 9.58014 78.0157 13.873 76.399 16.5663C75.4535 18.1416 73.9724 18.6985 72.2372 19.1016C70.4588 19.119 69.0979 19.2249 67.4635 18.3687C63.3615 16.2197 63.6824 9.07596 68.0752 7.42539C68.6475 7.21037 69.2423 7.12926 69.8351 6.9537ZM71.3261 16.2514C73.983 16.1431 74.0478 11.6822 72.5858 10.1803C72.2683 9.85402 71.1421 9.7976 70.6869 9.81388C70.0327 9.88231 69.6097 9.99893 69.1744 10.5593C68.1917 11.8246 68.1213 14.7271 69.4178 15.8139C70.0056 16.3067 70.6161 16.267 71.3261 16.2514Z" fill="#0171F9"/>
                  <path d="M92.127 7.20465C93.4287 7.19726 94.8119 7.16729 96.107 7.20835C96.8402 9.35185 97.5095 11.5635 98.0991 13.7504C98.2646 14.3644 98.472 14.7575 98.6349 15.4739C98.7449 15.3626 98.7886 14.9344 98.8197 14.7631C99.1716 12.8379 99.8645 10.9575 100.463 9.09846C100.668 8.46347 100.817 7.84846 101.055 7.22405C102.118 7.15293 103.602 7.19642 104.695 7.19743C104.465 8.08657 104.238 8.94212 103.894 9.7965C102.932 12.1941 102.096 14.6271 101.167 17.0388C100.048 20.3793 98.5686 25.0986 94.1376 24.5956C93.3573 24.507 93.2969 24.511 92.578 24.1658C92.5561 23.6115 92.4545 22.1917 92.6418 21.751C92.9483 21.0278 93.9125 22.1282 94.9152 21.6447C95.9441 21.1483 96.2876 19.927 96.6966 18.9103C95.9012 17.1695 95.0681 14.9437 94.3618 13.1572C93.6639 11.3927 92.5494 8.98914 92.127 7.20465Z" fill="#0171F9"/>
                  <path d="M147.842 15.6092C148.121 14.9644 148.394 13.9118 148.601 13.2144L149.788 9.2826C149.935 8.79857 150.226 7.70574 150.469 7.33489C151.056 7.08788 153.244 7.16638 153.916 7.24724L154.001 7.39114C153.976 8.16249 153.36 9.34809 153.124 10.1236C152.432 12.4039 151.279 14.7013 150.659 16.9861C149.154 20.07 148.551 24.8308 143.873 24.5821C143.035 24.5376 142.919 24.6756 142.109 24.2346C142.109 23.7881 142.007 21.8887 142.154 21.651C142.257 21.591 144.063 21.6721 144.45 21.6477C145.393 21.001 145.606 20.0729 146.028 19.01C145.811 18.1757 145.188 16.7474 144.841 15.8902L142.644 10.461C142.331 9.67923 141.617 7.97971 141.566 7.19972C142.335 7.21265 144.835 7.08763 145.394 7.27511C145.953 7.80801 147.792 14.6094 147.842 15.6092Z" fill="#0171F9"/>
                  <path d="M7.51944 4.01117C12.0164 4.04327 16.5206 4.02149 21.0178 4.00841C22.0184 4.0055 22.2478 4.05479 22.9551 4.77911C23.147 5.44718 23.2311 5.97436 23.2221 6.67207C23.1831 10.1749 23.245 13.6763 23.1977 17.1773C23.1705 19.1938 21.364 19.1304 19.8113 19.091C17.412 19.03 14.824 19.2333 12.4513 18.9974C12.1554 18.0007 11.8735 17.5586 11.1566 16.837L12.618 16.8097L13.8517 16.7223C13.9489 16.0263 13.9021 15.1909 13.8803 14.4777C14.9752 14.4077 17.8178 14.6427 18.6283 14.424C18.6408 15.1777 18.6174 15.9929 18.6104 16.7514L20.8532 16.7371C20.7777 13.3713 20.8287 9.70362 20.8439 6.31944C16.61 6.31457 12.3234 6.28124 8.09398 6.33438C8.16251 6.92958 8.14647 7.45878 8.13966 8.05716C7.43722 7.78202 6.40404 7.64886 6.00116 7.44199C5.83277 7.24661 5.75786 6.98591 5.76626 6.73143C5.81363 5.29261 5.79288 4.07191 7.51944 4.01117Z" fill="#0171F9"/>
                  <path d="M58.0543 6.96309C58.3262 6.951 58.5983 6.9437 58.8705 6.9411C63.173 6.92229 62.7363 11.6236 62.7391 14.5919L62.7377 18.8514C61.4488 18.882 60.1594 18.8831 58.8704 18.8547C58.8708 16.5659 58.9325 14.1628 58.8379 11.8809C58.8044 11.0691 58.5673 10.448 57.931 9.93134C56.7605 9.73437 55.9632 9.76123 55.3052 10.8494C54.6957 13.06 55.0807 15.7969 55.0093 18.0996C55.0025 18.3194 55.0416 18.632 55.0732 18.8521C53.7917 18.881 52.5099 18.8787 51.2285 18.8453C51.272 15.0757 51.3933 10.9762 51.2439 7.21447C52.3831 7.15881 53.8257 7.19844 54.9747 7.20994C54.9975 7.74602 54.9988 8.31888 55.01 8.85849C56.0707 7.53176 56.3927 7.29054 58.0543 6.96309Z" fill="#0171F9"/>
                  <path d="M86.1389 6.96141C87.3987 6.90255 88.6265 6.89223 89.615 7.81747C90.4851 8.62718 90.8211 9.87768 90.8303 11.0352C90.853 13.6348 90.7707 16.2511 90.8916 18.8485C89.636 18.8917 88.3796 18.8895 87.1241 18.8416C87.0006 16.373 87.3097 13.7779 87.0233 11.3134C86.8326 9.66879 85.6275 9.71329 84.3442 9.96307C84.1308 10.1781 83.9167 10.3919 83.7017 10.6045C83.1323 11.6511 83.2927 13.2166 83.2977 14.4072L83.3028 18.8555C82.5813 18.8688 80.0685 18.9721 79.5554 18.7845C79.321 18.1893 79.5545 8.6004 79.615 7.20725C80.842 7.19314 82.069 7.19381 83.296 7.20918L83.3095 8.85303C84.1426 7.61294 84.7129 7.31874 86.1389 6.96141Z" fill="#0171F9"/>
                  <path d="M103.566 20.0859C108.072 19.9583 113.195 20.0734 117.755 20.0683L132.936 20.1004C135.21 20.1031 137.466 20.0459 139.744 20.0728C139.772 20.8645 139.762 21.6833 139.762 22.4775L138.47 22.474L102.142 22.4783C102.12 21.7037 102.136 20.8656 102.137 20.086L103.566 20.0859Z" fill="#0171F9"/>
                  <path d="M138.389 3.58496C138.692 3.73147 138.544 6.68905 138.536 7.20179L141.023 7.20549C141.041 8.03485 141.09 9.06193 141.034 9.87492C140.238 9.90489 139.408 9.8572 138.553 9.89213C138.553 11.0731 138.379 15.2708 138.903 15.9952C139.522 16.4314 140.31 16.2372 141.023 16.1294C141.352 18.9764 141.093 19.1002 138.4 19.1085C135.7 19.2049 134.702 17.3133 134.76 14.9185C134.8 13.2807 134.8 11.5182 134.724 9.88634C134.355 9.89003 133.318 9.93327 133.027 9.83084C132.803 9.32741 132.836 7.88993 132.963 7.36258C133.27 7.0997 134.247 7.18945 134.701 7.19793C134.795 6.30493 134.779 5.58397 134.776 4.68677C135.562 4.31424 137.452 3.87152 138.389 3.58496Z" fill="#0171F9"/>
                  <path d="M3.03911 16.8395C3.52135 16.8448 5.36977 17.0143 5.65062 16.9756C8.78467 16.5439 11.2627 17.1676 11.6025 20.7792C11.6701 21.4978 11.1261 21.955 10.6235 22.4567C9.93736 22.6123 9.25247 22.5977 8.55522 22.578C6.96103 22.4771 5.045 22.6173 3.41738 22.5808C2.64556 22.5634 1.94034 22.6384 1.15983 22.5197C0.848762 22.2942 0.541202 22.064 0.237278 21.829C-0.549423 19.7859 0.912582 17.1713 3.03911 16.8395Z" fill="#0171F9"/>
                  <path d="M127.359 7.20459C128.578 7.19066 129.797 7.19284 131.016 7.21114C131.109 7.89894 131.055 11.0857 131.038 12.0112C130.993 14.2512 131.129 16.641 131.075 18.8333C130.008 18.9409 128.357 18.8828 127.285 18.8499C127.533 15.0507 127.261 10.9935 127.359 7.20459Z" fill="#0171F9"/>
                  <path d="M5.15606 8.66217C7.0547 8.31869 8.87397 9.57431 9.22545 11.471C9.57701 13.3676 8.32866 15.1916 6.43288 15.5509C4.52592 15.9125 2.68834 14.6554 2.33468 12.7475C1.98102 10.8396 3.24608 9.00775 5.15606 8.66217Z" fill="#0171F9"/>
                  <path d="M129.382 1.52991C129.614 1.49775 130.026 1.58919 130.272 1.63209C130.662 2.01512 130.915 2.26632 131.252 2.69435C131.287 3.12784 131.252 3.58844 131.231 4.02445C131.152 4.13805 131.068 4.24846 130.981 4.35542C130.386 5.07471 129.979 5.09838 129.102 5.18276C128.543 5.13751 128.184 5.00292 127.675 4.79604C127.482 4.56776 127.249 4.18372 127.08 3.92336L127.031 2.77966C127.741 1.62361 128.058 1.52504 129.382 1.52991Z" fill="#0171F9"/>
                  <path d="M151.61 20.0941C152.391 20.082 153.225 20.0992 154.009 20.103C154.034 20.8941 154.03 21.6859 154.001 22.4768C153.259 22.4572 152.373 22.4808 151.623 22.4834C151.586 21.7305 151.608 20.8562 151.61 20.0941Z" fill="#0171F9"/>
                </g>
                <defs>
                  <clipPath id="clip0_footer">
                    <rect width="154" height="24.5059" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </a>

            {/* Nav links */}
            <nav className="flex items-start justify-end gap-8 flex-wrap">
              <div className="w-44 flex-shrink-0">
                <a href="/" className="font-[Outfit] text-base font-normal text-[#121212] hover:text-blue-600 transition-colors">Home</a>
              </div>
              <div className="w-44 flex-shrink-0">
                <a href="/submit-report" className="font-[Outfit] text-base font-normal text-[#121212] hover:text-blue-600 transition-colors">Submit Report</a>
              </div>
              <div className="w-44 flex-shrink-0">
                <a href="/browse-school" className="font-[Outfit] text-base font-normal text-[#121212] hover:text-blue-600 transition-colors">Browse School</a>
              </div>
              <div className="w-44 flex-shrink-0">
                <a href="/login" className="font-[Outfit] text-base font-normal text-[#121212] hover:text-blue-600 transition-colors">Login/Signup</a>
              </div>
            </nav>
          </div>

          {/* Divider + copyright */}
          <div className="border-t border-[#E2E8F0] pt-5 flex justify-center pb-5">
            <p className="font-inter text-[12px] font-light text-[#64748B] leading-[15px] tracking-[1px]">
              &copy; 2026 Anonymity. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </>
  );
}
