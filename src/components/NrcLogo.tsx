import React from 'react';

interface NrcLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
}

/** Supplied original artwork: preserve its colors, proportions and complete arch. */
export const NrcLogo: React.FC<NrcLogoProps> = ({
  className = 'w-48',
  variant = 'dark',
}) => (
  <div className={`flex flex-col items-center gap-1 select-none ${className}`}>
    <div className={`w-full flex justify-center ${variant === 'light' ? 'rounded-lg bg-white p-2' : ''}`}>
      <img src="/nrc-logo-original.png" alt="NRC" width="872" height="354" className="block w-full h-auto max-h-16 object-contain" />
    </div>
    <span className={`text-center text-xs font-bold leading-tight ${variant === 'light' ? 'text-white' : 'text-slate-900'}`}>
      NRC MEGA RESOURCES SDN BHD
    </span>
  </div>
);
