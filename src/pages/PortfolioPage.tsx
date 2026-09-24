import React, { useState } from 'react';
import { Eye, MessageCircle } from 'lucide-react';
import { Language, PortfolioItem } from '../types';
import { PORTFOLIO_ITEMS, COMPANY_INFO } from '../data/content';
import { NrcSpriteImage } from '../components/NrcSpriteImage';

interface PortfolioPageProps {
  lang: Language;
  onOpenLightbox: (item: PortfolioItem, items?: PortfolioItem[]) => void;
}

const groups = [
  { id: 'before', en: 'Landscaping · Before', bm: 'Landskap · Sebelum', category: 'landscaping', timing: 'before' },
  { id: 'after', en: 'Landscaping · After', bm: 'Landskap · Selepas', category: 'landscaping', timing: 'after' },
  { id: 'construction', en: 'Construction', bm: 'Pembinaan', category: 'construction' },
  { id: 'wwtp', en: 'Wastewater treatment plant (WWTP)', bm: 'Loji rawatan air sisa (WWTP)', category: 'wwtp' },
  { id: 'cleaning', en: 'Cleaning', bm: 'Pembersihan', category: 'cleaning' },
];
const photosFor = (group: typeof groups[number]) => PORTFOLIO_ITEMS.filter(item => item.category === group.category && (!group.timing || item.timing === group.timing));

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ lang, onOpenLightbox }) => {
  const [selected, setSelected] = useState('all');
  const filters = [{ id: 'all', en: 'All photos', bm: 'Semua foto', count: PORTFOLIO_ITEMS.length }, ...groups.map(group => ({ ...group, count: photosFor(group).length }))];
  const visibleGroups = groups.filter(group => selected === 'all' || group.id === selected);
  return (
    <div className="pb-20 space-y-12">
      <section className="pt-12 pb-14 bg-gradient-to-b from-emerald-50 via-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <span className="text-sm font-bold uppercase tracking-widest text-emerald-800">{lang === 'en' ? 'Our work in pictures' : 'Kerja kami dalam gambar'}</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">{lang === 'en' ? 'Project Portfolio' : 'Portfolio Projek'}</h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">{lang === 'en' ? 'Landscaping, construction, wastewater treatment plant and cleaning photographs from our company profile.' : 'Foto landskap, pembinaan, loji rawatan air sisa dan pembersihan daripada profil syarikat kami.'}</p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <nav aria-label={lang === 'en' ? 'Photo categories' : 'Kategori foto'} className="flex flex-wrap gap-3">
          {filters.map(filter => <button key={filter.id} type="button" aria-pressed={selected === filter.id} onClick={() => setSelected(filter.id)} className={`min-h-12 rounded-xl px-4 py-3 font-semibold text-base border transition-colors ${selected === filter.id ? 'bg-emerald-800 border-emerald-800 text-white' : 'bg-white border-slate-300 text-slate-700 hover:bg-emerald-50'}`}>{filter[lang]} ({filter.count})</button>)}
        </nav>
        <div aria-live="polite" className="text-slate-600">{visibleGroups.reduce((count, group) => count + photosFor(group).length, 0)} {lang === 'en' ? 'photos' : 'foto'}</div>
        {visibleGroups.map(group => (
          <section key={group.id} data-photo-group={group.id} aria-labelledby={`group-${group.id}`} className="space-y-6">
            <div className="flex items-baseline justify-between gap-4 border-b border-slate-200 pb-4">
              <h2 id={`group-${group.id}`} className="text-2xl sm:text-3xl font-bold text-slate-900">{group[lang]}</h2>
              <span className="text-slate-500 text-lg">{photosFor(group).length}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photosFor(group).map(item => (
                <figure key={item.id} data-photo-id={item.id} className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
                  <button type="button" onClick={() => onOpenLightbox(item, visibleGroups.flatMap(photosFor))} aria-label={`${lang === 'en' ? 'View photo' : 'Lihat foto'}: ${item.title[lang]}`} className="block w-full focus-visible:outline-4 focus-visible:outline-emerald-600">
                    <NrcSpriteImage itemNumber={item.number} alt={item.title[lang]} className="!rounded-none" />
                  </button>
                  <figcaption className="p-5 space-y-3">
                    <p className="text-sm text-emerald-800 font-bold uppercase tracking-wide">{lang === 'en' ? 'Photo' : 'Foto'} {item.number}</p>
                    <h3 className="text-lg font-semibold text-slate-900 leading-relaxed">{item.title[lang]}</h3>
                    <button type="button" onClick={() => onOpenLightbox(item, visibleGroups.flatMap(photosFor))} className="inline-flex items-center gap-2 min-h-11 text-emerald-800 font-semibold"><Eye className="w-5 h-5" />{lang === 'en' ? 'View full photo' : 'Lihat foto penuh'}</button>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}
        <section className="rounded-3xl bg-slate-900 text-white p-7 sm:p-10 flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-2xl space-y-3"><h2 className="text-2xl font-bold">{lang === 'en' ? 'Discuss your project with us' : 'Bincangkan projek anda bersama kami'}</h2><p className="text-lg text-slate-300">{lang === 'en' ? 'Share your site location and required scope with Mr Chan.' : 'Kongsikan lokasi tapak dan skop yang diperlukan dengan Mr Chan.'}</p></div>
          <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-bold"><MessageCircle className="w-5 h-5" />WhatsApp Mr Chan</a>
        </section>
      </div>
    </div>
  );
};
