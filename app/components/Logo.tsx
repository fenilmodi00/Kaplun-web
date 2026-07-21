interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 28, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <defs>
        {/* Pink to Aqua Gradient for the primary diagonal stroke */}
        <linearGradient id="kaplunPinkAqua" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff2e74" />
          <stop offset="40%" stopColor="#ff528c" />
          <stop offset="75%" stopColor="#46d3c7" />
          <stop offset="100%" stopColor="#93f0e6" />
        </linearGradient>

        {/* Top Right Arm Gradient */}
        <linearGradient id="topRightArm" x1="10%" y1="90%" x2="100%" y2="10%">
          <stop offset="0%" stopColor="#ff4785" />
          <stop offset="55%" stopColor="#55ded2" />
          <stop offset="100%" stopColor="#a4f5ed" />
        </linearGradient>

        {/* Bottom Right Arm Gradient */}
        <linearGradient id="bottomRightArm" x1="20%" y1="20%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1b3330" />
          <stop offset="30%" stopColor="#2ba89d" />
          <stop offset="100%" stopColor="#88efe5" />
        </linearGradient>

        {/* Left Dark Teal Leaf Gradient */}
        <linearGradient id="darkTealLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1c3d38" />
          <stop offset="100%" stopColor="#0c211e" />
        </linearGradient>
      </defs>

      <g transform="translate(10, 10)">
        {/* 1. Left Dark Teal Petal/Leaf Shape */}
        <path fill="url(#darkTealLeaf)" d="M 160,80 C 110,120 100,185 102,265 C 102,272 108,275 115,270 C 145,240 185,170 178,88 C 177,80 168,75 160,80 Z" />

        {/* 2. Lower-Right Diagonal Arm */}
        <path fill="url(#bottomRightArm)" d="M 230,260 C 265,300 360,400 405,432 C 420,442 442,438 450,422 C 456,410 452,392 438,380 C 390,340 310,270 270,230 Z" />

        {/* 3. Top-Right Diagonal Arm */}
        <path fill="url(#topRightArm)" d="M 220,240 C 275,190 375,90 415,84 C 435,80 452,95 448,112 C 444,124 430,138 405,162 C 345,220 275,280 240,290 Z" />

        {/* 4. Primary Vibrant Pink-to-Mint Main Diagonal Stroke */}
        <path fill="url(#kaplunPinkAqua)" d="M 106,412 C 100,428 108,446 124,452 C 140,458 158,450 166,434 C 205,360 380,135 412,98 C 422,86 422,68 408,60 C 394,52 376,56 366,70 C 325,115 148,340 106,412 Z" />
      </g>
    </svg>
  );
}
