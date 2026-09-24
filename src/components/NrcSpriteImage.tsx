import React from 'react';
import { PORTFOLIO_ITEMS } from '../data/originalPortfolio';

interface NrcSpriteImageProps {
  rect?: { x: number; y: number; w: number; h: number };
  alt: string;
  category?: 'landscaping' | 'construction' | 'wwtp' | 'cleaning';
  itemNumber?: string;
  className?: string;
  onClick?: () => void;
  priority?: boolean;
  aspectRatio?: string;
}

// Compatibility component: shared consumers now resolve verified original photos,
// not the legacy generated nrc-XX assets. Uniform cropped thumbnails fill every card; lightboxes retain the complete originals.
export const NrcSpriteImage: React.FC<NrcSpriteImageProps> = ({
  alt, itemNumber = '13', className = '', onClick, priority = false, aspectRatio = '4 / 3',
}) => {
  const photo = PORTFOLIO_ITEMS.find(item => item.number === itemNumber.padStart(2, '0'));
  if (!photo) return null;
  const image = <img src={photo.thumbnailSrc} alt={alt} loading={priority ? 'eager' : 'lazy'} className="block w-full h-full object-cover" />;
  const classes = `relative block overflow-hidden rounded-xl bg-slate-100 w-full ${className}`;
  return onClick ? (
    <button type="button" onClick={onClick} aria-label={alt} className={`${classes} cursor-pointer focus-visible:outline-4 focus-visible:outline-emerald-600`} style={{ aspectRatio }}>{image}</button>
  ) : <div className={classes} style={{ aspectRatio }}>{image}</div>;
};
