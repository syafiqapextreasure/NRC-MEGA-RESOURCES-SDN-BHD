import React, { useState } from 'react';
import { Hammer, Sparkles, Trees, Droplets, Image as ImageIcon } from 'lucide-react';

interface IllustrativeImageProps {
  rect?: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
  alt: string;
  category?: 'landscaping' | 'construction' | 'wwtp' | 'cleaning';
  itemNumber?: string;
  className?: string;
  onClick?: () => void;
  priority?: boolean;
  aspectRatio?: string;
}

export const IllustrativeImage: React.FC<IllustrativeImageProps> = ({
  rect,
  alt,
  category = 'construction',
  itemNumber = '05',
  className = '',
  onClick,
  priority = false,
  aspectRatio = '16 / 10',
}) => {
  const [imageError, setImageError] = useState(false);

  // Normalize number e.g. "5" -> "05"
  const formattedNumber = itemNumber.padStart(2, '0');
  const imageSrc = `/nrc-${formattedNumber}.png`;

  const getCategoryTheme = () => {
    switch (category) {
      case 'landscaping':
        return {
          icon: Trees,
          bg: 'from-emerald-950 via-teal-950 to-slate-950',
          accent: 'text-emerald-400',
          badge: 'bg-emerald-800 text-emerald-100',
        };
      case 'cleaning':
        return {
          icon: Sparkles,
          bg: 'from-cyan-950 via-slate-900 to-slate-950',
          accent: 'text-cyan-400',
          badge: 'bg-cyan-800 text-cyan-100',
        };
      case 'wwtp':
        return {
          icon: Droplets,
          bg: 'from-blue-950 via-slate-900 to-slate-950',
          accent: 'text-blue-400',
          badge: 'bg-blue-800 text-blue-100',
        };
      case 'construction':
      default:
        return {
          icon: Hammer,
          bg: 'from-amber-950/80 via-stone-900 to-neutral-950',
          accent: 'text-amber-400',
          badge: 'bg-amber-800 text-amber-100',
        };
    }
  };

  const theme = getCategoryTheme();
  const IconComponent = theme.icon;

  // Use uniform, consistent aspect ratio across all project photos
  const effectiveAspectRatio = aspectRatio || '16 / 10';

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl bg-slate-900 w-full transition-all duration-300 ${
        onClick ? 'cursor-pointer hover:shadow-lg hover:brightness-105' : ''
      } ${className}`}
      style={{ aspectRatio: effectiveAspectRatio }}
    >
      {!imageError ? (
        <img
          src={imageSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="w-full h-full object-cover object-center"
        />
      ) : (
        /* Styled fallback container */
        <div
          className={`w-full h-full bg-gradient-to-br ${theme.bg} flex flex-col items-center justify-center p-6 text-center text-white select-none`}
        >
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md mb-3 border border-white/10 shadow-lg">
            <IconComponent className={`w-8 h-8 ${theme.accent}`} />
          </div>
          <span
            className={`text-xs uppercase font-extrabold tracking-wider px-3 py-1 rounded-md mb-2 ${theme.badge}`}
          >
            {category} • #{formattedNumber}
          </span>
          <p className="text-sm font-semibold line-clamp-2 max-w-[85%] text-slate-200">
            {alt}
          </p>
          <span className="text-xs text-slate-400 mt-2 flex items-center gap-1">
            <ImageIcon className="w-3.5 h-3.5" /> NRC Project Visual Record
          </span>
        </div>
      )}
    </div>
  );
};
