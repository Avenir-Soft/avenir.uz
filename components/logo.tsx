export function Logo() {
  return (
    <svg
      width="120"
      height="60"
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-auto h-8"
    >
      {/* 4-pointed star shape */}
      <g>
        {/* Vertical line */}
        <line x1="30" y1="5" x2="30" y2="12" stroke="#042147" strokeWidth="1.5" />
        <circle cx="30" cy="4" r="2" fill="#042147" />
        <line x1="30" y1="12" x2="30" y2="48" stroke="#042147" strokeWidth="2.5" />
        <line x1="30" y1="48" x2="30" y2="55" stroke="#042147" strokeWidth="1.5" />
        <circle cx="30" cy="56" r="2" fill="#042147" />

        {/* Horizontal line */}
        <line x1="5" y1="30" x2="12" y2="30" stroke="#042147" strokeWidth="1.5" />
        <circle cx="4" cy="30" r="2" fill="#042147" />
        <line x1="12" y1="30" x2="48" y2="30" stroke="#042147" strokeWidth="2.5" />
        <line x1="48" y1="30" x2="55" y2="30" stroke="#042147" strokeWidth="1.5" />
        <circle cx="56" cy="30" r="2" fill="#042147" />

        {/* Center 4-pointed star shape */}
        <path
          d="M 30 20 Q 35 25 30 30 Q 35 35 30 40 Q 25 35 30 30 Q 25 25 30 20 Z"
          fill="#042147"
        />
        <path
          d="M 20 30 Q 25 35 30 30 Q 25 25 20 30 Q 25 35 30 40 Q 25 35 30 30 Q 25 25 20 30 Z"
          fill="#042147"
        />
        <path
          d="M 30 20 Q 35 25 40 30 Q 35 35 30 40 Q 25 35 30 30 Q 35 25 40 30 Q 35 35 30 40 Q 25 35 30 30 Q 35 25 40 30 Z"
          fill="#042147"
        />
      </g>

      {/* AVENIR text */}
      <text
        x="65"
        y="35"
        fontFamily="'Cormorant Garamond', serif"
        fontSize="20"
        fontWeight="700"
        fill="#042147"
        letterSpacing="3"
      >
        AVENIR
      </text>
    </svg>
  )
}
