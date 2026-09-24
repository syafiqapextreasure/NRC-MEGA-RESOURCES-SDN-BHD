import React from 'react';

interface NrcLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
}

export const NrcLogo: React.FC<NrcLogoProps> = ({
  className = 'h-12',
  variant = 'dark',
  showSubtitle = false,
}) => {
  // Official NRC brand colors matching Image 2:
  // Top Arch: #007738
  // Upper Letterforms (above wave): #004826 (Dark Pine)
  // Lower Letterforms (below wave): #00843d (Vibrant Emerald)
  // On light variant (e.g. dark footer), letters remain bold and distinctive
  const archColor = variant === 'light' ? '#10b981' : '#007738';
  const topLettersColor = variant === 'light' ? '#34d399' : '#004826';
  const bottomLettersColor = variant === 'light' ? '#10b981' : '#00843d';

  return (
    <div className={`relative flex items-center gap-3 select-none ${className}`}>
      {/* 
        Exact NRC Logo matching Image 2:
        - Sweeping upper green arch tapering to a point on the right
        - Heavy slanted letters N, R, C
        - Horizontal wave dividing the letters into dark upper and bright lower halves
      */}
      <svg
        viewBox="0 0 1000 420"
        className="h-full w-auto aspect-[1000/420] overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="NRC Logo"
      >
        <defs>
          {/* Top Half Clip Path (above the dividing wave) */}
          <clipPath id="nrc-clip-top-logo">
            <path
              d="M 0,0 L 1000,0 L 1000,270 
                 C 960,262 925,248 870,246 
                 C 775,242 715,282 615,288 
                 C 515,294 455,236 345,238 
                 C 240,240 145,330 30,280 
                 L 0,280 Z"
            />
          </clipPath>

          {/* Bottom Half Clip Path (below the dividing wave) */}
          <clipPath id="nrc-clip-bottom-logo">
            <path
              d="M 0,420 L 1000,420 L 1000,286 
                 C 960,278 925,264 870,262 
                 C 775,258 715,298 615,304 
                 C 515,310 455,252 345,254 
                 C 240,256 145,346 30,296 
                 L 0,296 Z"
            />
          </clipPath>

          {/* Master Letterforms Group for N, R, and C */}
          <g id="nrc-letters-group">
            {/* Slanted Bold Letter N */}
            <path
              d="M 142,148 L 268,148 L 366,298 L 402,148 L 476,148 L 416,382 L 298,382 L 198,236 L 160,382 L 84,382 Z"
            />

            {/* Slanted Bold Letter R */}
            <path
              fillRule="evenodd"
              d="M 480,148 L 610,148 
                 C 655,148 688,160 702,185 
                 C 714,208 708,234 686,252 
                 C 666,268 636,276 592,276 
                 L 546,276 L 602,382 L 516,382 
                 L 468,290 L 444,290 L 396,382 L 322,382 
                 L 420,148 Z 
                 M 464,236 L 576,236 
                 C 604,236 622,230 628,218 
                 C 634,206 624,194 598,194 
                 L 486,194 Z"
            />

            {/* Slanted Bold Letter C */}
            <path
              d="M 972,174 L 888,198 
                 C 876,188 858,180 836,182 
                 C 788,186 756,220 762,265 
                 C 768,310 806,346 854,342 
                 C 882,340 904,324 918,302 
                 L 952,336 
                 C 930,366 892,386 842,388 
                 C 752,394 690,332 680,260 
                 C 670,184 728,144 826,140 
                 C 888,138 940,152 972,174 Z"
            />
          </g>
        </defs>

        {/* 1. Sweeping Upper Arch */}
        <path
          d="M 42,380 
             C 30,290 88,150 200,80 
             C 310,25 460,18 620,38 
             C 760,56 880,95 965,124 
             C 880,98 750,66 610,50 
             C 460,34 320,44 215,96 
             C 110,160 58,285 52,380 Z"
          fill={archColor}
        />

        {/* 2. Top Half of Letters (Dark Forest Green) */}
        <use
          href="#nrc-letters-group"
          fill={topLettersColor}
          clipPath="url(#nrc-clip-top-logo)"
        />

        {/* 3. Lower Half of Letters (Vibrant Emerald Green) */}
        <use
          href="#nrc-letters-group"
          fill={bottomLettersColor}
          clipPath="url(#nrc-clip-bottom-logo)"
        />
      </svg>

      {/* Subtitle text when requested */}
      {showSubtitle && (
        <div className="flex flex-col justify-center leading-none">
          <span
            className={`text-lg font-black tracking-tight ${
              variant === 'light' ? 'text-white' : 'text-slate-900'
            }`}
          >
            NRC MEGA RESOURCES
          </span>
          <span
            className={`text-xs font-bold tracking-widest uppercase ${
              variant === 'light' ? 'text-emerald-400' : 'text-emerald-800'
            }`}
          >
            SDN BHD
          </span>
        </div>
      )}
    </div>
  );
};
