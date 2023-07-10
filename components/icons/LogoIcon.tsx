import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={39}
    height={38}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <g clipPath="url(#b)">
        <rect width={32.225} height={32} x={3} y={2} fill="#fff" rx={8} />
        <rect width={32.225} height={32} x={3} y={2} fill="url(#c)" rx={8} />
        <path
          fill="#D0D5DD"
          fillRule="evenodd"
          d="M19.113 4.039c-7.765 0-14.06 6.25-14.06 13.961 0 7.71 6.295 13.961 14.06 13.961 7.765 0 14.06-6.25 14.06-13.961 0-7.71-6.296-13.961-14.06-13.961ZM4.975 18c0-7.753 6.33-14.039 14.138-14.039S33.25 10.247 33.25 18s-6.33 14.039-14.137 14.039c-7.808 0-14.138-6.286-14.138-14.039Z"
          clipRule="evenodd"
        />
        <path
          fill="#D0D5DD"
          fillRule="evenodd"
          d="M19.113 14.078c-2.182 0-3.95 1.756-3.95 3.922 0 2.166 1.768 3.923 3.95 3.923 2.181 0 3.95-1.756 3.95-3.923 0-2.166-1.769-3.922-3.95-3.922ZM15.085 18c0-2.209 1.803-4 4.028-4 2.224 0 4.028 1.791 4.028 4 0 2.21-1.804 4-4.028 4-2.225 0-4.028-1.79-4.028-4Z"
          clipRule="evenodd"
        />
        <path
          fill="#D0D5DD"
          fillRule="evenodd"
          d="M19.113 15.32A2.69 2.69 0 0 0 16.414 18a2.69 2.69 0 0 0 2.699 2.68c1.49 0 2.698-1.2 2.698-2.68 0-1.48-1.208-2.68-2.698-2.68ZM16.336 18a2.767 2.767 0 0 1 2.777-2.758A2.767 2.767 0 0 1 21.889 18a2.767 2.767 0 0 1-2.776 2.757A2.767 2.767 0 0 1 16.336 18Z"
          clipRule="evenodd"
        />
        <path fill="#D0D5DD" d="M19.073 2h.079v32h-.079V2Z" />
        <path fill="#D0D5DD" d="M35.225 17.96v.079H3v-.078h32.225Z" />
        <path
          fill="#D0D5DD"
          d="M29.79 2h.078v32h-.079V2ZM13.716 2h.078v32h-.078V2ZM24.431 2h.079v32h-.079V2ZM8.358 2h.078v32h-.078V2Z"
        />
        <path
          fill="#D0D5DD"
          d="M35.225 28.602v.077H3v-.077h32.225ZM35.225 12.64v.078H3v-.077h32.225ZM35.225 23.281v.078H3v-.078h32.225ZM35.225 7.32v.078H3V7.32h32.225Z"
        />
        <g filter="url(#d)">
          <ellipse cx={19.113} cy={18} fill="url(#e)" rx={8.056} ry={8} />
        </g>
        <g filter="url(#f)">
          <path
            fill="#fff"
            fillOpacity={0.2}
            d="M3 18h32.225v3.2c0 4.48 0 6.72-.872 8.432a8 8 0 0 1-3.496 3.496C29.146 34 26.906 34 22.425 34H15.8c-4.48 0-6.72 0-8.432-.872a8 8 0 0 1-3.496-3.496C3 27.92 3 25.68 3 21.2V18Z"
          />
        </g>
      </g>
      <rect
        width={32.025}
        height={31.8}
        x={3.1}
        y={2.1}
        stroke="#D0D5DD"
        strokeWidth={0.2}
        rx={7.9}
      />
    </g>
    <defs>
      <filter
        id="a"
        width={38.225}
        height={38}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_21_27254"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1.5} />
        <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
        <feBlend
          in2="effect1_dropShadow_21_27254"
          result="effect2_dropShadow_21_27254"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_21_27254"
          result="shape"
        />
      </filter>
      <filter
        id="d"
        width={22.113}
        height={22}
        x={8.056}
        y={8}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_21_27254"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1.5} />
        <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
        <feBlend
          in2="effect1_dropShadow_21_27254"
          result="effect2_dropShadow_21_27254"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_21_27254"
          result="shape"
        />
      </filter>
      <filter
        id="f"
        width={42.225}
        height={26}
        x={-2}
        y={13}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={2.5} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_21_27254"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_21_27254"
          result="shape"
        />
      </filter>
      <linearGradient
        id="c"
        x1={19.113}
        x2={19.113}
        y1={2}
        y2={34}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#D0D5DD" />
      </linearGradient>
      <linearGradient
        id="e"
        x1={15.085}
        x2={23.051}
        y1={26}
        y2={9.955}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#53389E" />
        <stop offset={1} stopColor="#6941C6" />
      </linearGradient>
      <clipPath id="b">
        <rect width={32.225} height={32} x={3} y={2} fill="#fff" rx={8} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
