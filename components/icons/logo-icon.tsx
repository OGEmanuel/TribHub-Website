const LogoIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      aria-label={`${process.env.SITE_NAME} logo`}
      {...props}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_138_7235)">
        <rect width="24" height="24" rx="6.85714" fill="#0065FF" />
        <g filter="url(#filter0_ii_138_7235)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.2867 7.75715C16.2639 12.4716 12.4351 16.2863 7.71533 16.2863C7.42609 16.2863 7.1402 16.2719 6.85833 16.244C6.88111 11.5296 10.7099 7.71484 15.4297 7.71484C15.7189 7.71484 16.0048 7.72917 16.2867 7.75715ZM15.5739 4.28712C15.5259 4.28656 15.4778 4.28627 15.4297 4.28627C9.17895 4.28627 4.04449 9.06543 3.48097 15.169C0.890674 13.6944 -0.856096 10.9086 -0.856096 7.71484C-0.856096 2.98097 2.98146 -0.856585 7.71533 -0.856585C11.2305 -0.856585 14.2514 1.2594 15.5739 4.28712ZM19.3971 4.95763C18.1513 -0.340796 13.3939 -4.28516 7.71533 -4.28516C1.08791 -4.28516 -4.28467 1.08743 -4.28467 7.71484C-4.28467 12.9519 -0.92986 17.4054 3.74793 19.0435C4.99372 24.3419 9.75105 28.2863 15.4297 28.2863C22.0571 28.2863 27.4297 22.9137 27.4297 16.2863C27.4297 11.0492 24.0748 6.59573 19.3971 4.95763ZM19.664 8.83207C19.1005 14.9357 13.966 19.7148 7.71533 19.7148C7.66718 19.7148 7.61909 19.7146 7.57107 19.714C8.89355 22.7417 11.9145 24.8577 15.4297 24.8577C20.1635 24.8577 24.0011 21.0201 24.0011 16.2863C24.0011 13.0925 22.2543 10.3067 19.664 8.83207Z"
            fill="white"
          />
        </g>
      </g>
      <rect
        x="0.214286"
        y="0.214286"
        width="23.5714"
        height="23.5714"
        rx="6.64286"
        stroke="black"
        strokeOpacity="0.1"
        strokeWidth="0.428571"
      />
      <defs>
        <filter
          id="filter0_ii_138_7235"
          x="-4.28467"
          y="-4.28516"
          width="31.7144"
          height="34.2866"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.71429" />
          <feGaussianBlur stdDeviation="1.71429" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_138_7235"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.857143" />
          <feGaussianBlur stdDeviation="0.857143" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_138_7235"
            result="effect2_innerShadow_138_7235"
          />
        </filter>
        <clipPath id="clip0_138_7235">
          <rect width="24" height="24" rx="6.85714" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LogoIcon;
