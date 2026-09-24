export type Language = 'en' | 'bm';

export interface ServiceItem {
  id: string;
  title: {
    en: string;
    bm: string;
  };
  shortDesc: {
    en: string;
    bm: string;
  };
  fullDesc: {
    en: string;
    bm: string;
  };
  iconName: string;
  features: {
    en: string[];
    bm: string[];
  };
  scope: {
    en: string[];
    bm: string[];
  };
  waMessage: {
    en: string;
    bm: string;
  };
  imageRectId?: string;
}

export interface PortfolioItem {
  originalSrc: string;
  thumbnailSrc: string;
  sourceSlide: number;
  id: string;
  number: string;
  title: {
    en: string;
    bm: string;
  };
  category: 'landscaping' | 'construction' | 'wwtp' | 'cleaning';
  categoryLabel: {
    en: string;
    bm: string;
  };
  timing?: 'before' | 'after';
  rect: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
  aspectRatio: string;
  description: {
    en: string;
    bm: string;
  };
  details: {
    en: string;
    bm: string;
  };
}

export interface OrgNode {
  name: string;
  role: {
    en: string;
    bm: string;
  };
  department: {
    en: string;
    bm: string;
  };
  reportsTo?: string;
  description?: {
    en: string;
    bm: string;
  };
}

export interface ESGStrategy {
  pillar: string;
  title: {
    en: string;
    bm: string;
  };
  points: {
    en: string[];
    bm: string[];
  };
}
