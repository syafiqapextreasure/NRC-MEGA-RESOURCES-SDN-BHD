import React, { useState } from 'react';
import {
  ExternalLink,
  MessageCircle,
  Eye,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Language, PortfolioItem } from '../types';
import { PORTFOLIO_ITEMS, COMPANY_INFO } from '../data/content';
import { NrcSpriteImage } from '../components/NrcSpriteImage';

interface PortfolioPageProps {
  lang: Language;
  onOpenLightbox: (item: PortfolioItem) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  lang,
  onOpenLightbox,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: { en: 'All Projects (14)', bm: 'Semua Projek (14)' } },
    { id: 'landscaping', label: { en: 'Landscaping (01–04)', bm: 'Landskap (01–04)' } },
    { id: 'construction', label: { en: 'Construction (05–10)', bm: 'Pembinaan (05–10)' } },
    { id: 'wwtp', label: { en: 'Wastewater Plant (11–12)', bm: 'Loji Rawatan Air (11–12)' } },
    { id: 'cleaning', label: { en: 'Cleaning (13–14)', bm: 'Pembersihan (13–14)' } },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  // Before / After Landscaping Items
  const landscapingBefore01 = PORTFOLIO_ITEMS.find((i) => i.id === '01')!;
  const landscapingAfter03 = PORTFOLIO_ITEMS.find((i) => i.id === '03')!;
  const landscapingBefore02 = PORTFOLIO_ITEMS.find((i) => i.id === '02')!;
  const landscapingAfter04 = PORTFOLIO_ITEMS.find((i) => i.id === '04')!;

  const getWaUrl = (item: PortfolioItem) => {
    const text =
      lang === 'en'
        ? `Hello Mr Chan, I saw project photo ${item.number} (${item.title.en}) on your portfolio. Can you share details for a similar requirement?`
        : `Salam Mr Chan, saya melihat foto projek ${item.number} (${item.title.bm}) dalam portfolio anda. Boleh kongsikan maklumat untuk keperluan yang serupa?`;
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="space-y-16 pb-20">
      {/* 1. HERO HEADER */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-emerald-50/60 via-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="px-3.5 py-1 rounded-md bg-emerald-100 text-emerald-900 text-sm font-bold tracking-wide uppercase">
            {lang === 'en' ? 'Our Work Gallery' : 'Galeri Kerja Kami'}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            {lang === 'en' ? 'Project Portfolio' : 'Portfolio Projek'}
          </h1>
          <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed max-w-3xl font-normal">
            {lang === 'en'
              ? 'Explore construction, landscaping, wastewater treatment plant and cleaning service themes.'
              : 'Terokai tema perkhidmatan pembinaan, landskap, loji rawatan air sisa dan pembersihan.'}
          </p>
        </div>
      </section>

      {/* 2. LANDSCAPING BEFORE & AFTER FEATURED COMPARISON SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-950 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-emerald-800 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                {lang === 'en' ? 'Transformation Showcase' : 'Transformasi Landskap'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {lang === 'en'
                  ? 'Landscaping: Before & After Turnaround'
                  : 'Landskap: Transformasi Sebelum & Selepas'}
              </h2>
              <p className="text-slate-300 text-base sm:text-lg">
                {lang === 'en'
                  ? 'Compare initial site conditions (Photos 01 & 02) with the finished landscaped results (Photos 03 & 04).'
                  : 'Bandingkan keadaan asal tapak (Foto 01 & 02) dengan hasil landskap siap yang rapi (Foto 03 & 04).'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pair 1: 01 vs 03 */}
            <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-sm font-bold">
                <span className="text-amber-400">
                  {lang === 'en' ? 'Phase 1: Initial Overgrowth (Photo 01)' : 'Fasa 1: Keadaan Asal Semak (Foto 01)'}
                </span>
                <span className="text-slate-400">→</span>
                <span className="text-emerald-400">
                  {lang === 'en' ? 'Phase 2: Topiary Art (Photo 03)' : 'Fasa 2: Seni Topiary (Foto 03)'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div
                  onClick={() => onOpenLightbox(landscapingBefore01)}
                  className="cursor-pointer group relative rounded-xl overflow-hidden"
                >
                  <NrcSpriteImage
                    rect={landscapingBefore01.rect}
                    alt={landscapingBefore01.title[lang]}
                    category="landscaping"
                    itemNumber={landscapingBefore01.number}
                    className="w-full"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-amber-300 text-xs font-bold">
                    {lang === 'en' ? 'Before (01)' : 'Sebelum (01)'}
                  </div>
                </div>

                <div
                  onClick={() => onOpenLightbox(landscapingAfter03)}
                  className="cursor-pointer group relative rounded-xl overflow-hidden"
                >
                  <NrcSpriteImage
                    rect={landscapingAfter03.rect}
                    alt={landscapingAfter03.title[lang]}
                    category="landscaping"
                    itemNumber={landscapingAfter03.number}
                    className="w-full"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 text-xs font-bold border border-emerald-700/50">
                    {lang === 'en' ? 'After (03)' : 'Selepas (03)'}
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300">
                {lang === 'en'
                  ? 'Overgrown perimeter tree line transformed into sculpted topiary shrubs with white decorative stones.'
                  : 'Sempadan pokok liar diubah menjadi pokok hiasan topiary berserta hiasan batu putih.'}
              </p>
            </div>

            {/* Pair 2: 02 vs 04 */}
            <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-sm font-bold">
                <span className="text-amber-400">
                  {lang === 'en' ? 'Phase 1: Unkempt Field (Photo 02)' : 'Fasa 1: Padang Kasar (Foto 02)'}
                </span>
                <span className="text-slate-400">→</span>
                <span className="text-emerald-400">
                  {lang === 'en' ? 'Phase 2: Pristine Lawn (Photo 04)' : 'Fasa 2: Padang Rumput Kemas (Foto 04)'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div
                  onClick={() => onOpenLightbox(landscapingBefore02)}
                  className="cursor-pointer group relative rounded-xl overflow-hidden"
                >
                  <NrcSpriteImage
                    rect={landscapingBefore02.rect}
                    alt={landscapingBefore02.title[lang]}
                    category="landscaping"
                    itemNumber={landscapingBefore02.number}
                    className="w-full"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-amber-300 text-xs font-bold">
                    {lang === 'en' ? 'Before (02)' : 'Sebelum (02)'}
                  </div>
                </div>

                <div
                  onClick={() => onOpenLightbox(landscapingAfter04)}
                  className="cursor-pointer group relative rounded-xl overflow-hidden"
                >
                  <NrcSpriteImage
                    rect={landscapingAfter04.rect}
                    alt={landscapingAfter04.title[lang]}
                    category="landscaping"
                    itemNumber={landscapingAfter04.number}
                    className="w-full"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 text-xs font-bold border border-emerald-700/50">
                    {lang === 'en' ? 'After (04)' : 'Selepas (04)'}
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300">
                {lang === 'en'
                  ? 'Uncontrolled weed terrain cleared, leveled, and conditioned into uniform commercial-grade grass cover.'
                  : 'Kawasan rumput liar dibersihkan, diratakan dan dipelihara menjadi hamparan rumput komersial seragam.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CATEGORY FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`min-h-[48px] px-5 py-2.5 rounded-xl font-bold text-base transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>
      </section>

      {/* 4. MAIN PROJECT GRID (14 Photos with Coordinates) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Media Container */}
              <div
                onClick={() => onOpenLightbox(item)}
                className="cursor-pointer relative overflow-hidden bg-slate-900"
              >
                <NrcSpriteImage
                  rect={item.rect}
                  alt={item.title[lang]}
                  category={item.category}
                  itemNumber={item.number}
                  className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Badges Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-sm text-white text-xs font-bold tracking-wider uppercase border border-white/20">
                    Photo {item.number} • {item.categoryLabel[lang]}
                  </span>
                  {item.timing && (
                    <span
                      className={`px-2.5 py-1 rounded-md text-xs font-bold shadow-xs ${
                        item.timing === 'after'
                          ? 'bg-emerald-700 text-white'
                          : 'bg-amber-600 text-white'
                      }`}
                    >
                      {item.timing === 'after'
                        ? lang === 'en'
                          ? 'After'
                          : 'Selepas'
                        : lang === 'en'
                        ? 'Before'
                        : 'Sebelum'}
                    </span>
                  )}
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold gap-2">
                  <Eye className="w-5 h-5" />
                  <span>
                    {lang === 'en' ? 'View Photo Details' : 'Perincian Foto'}
                  </span>
                </div>
              </div>

              {/* Text Information */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3
                    onClick={() => onOpenLightbox(item)}
                    className="text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors cursor-pointer leading-snug"
                  >
                    {item.title[lang]}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {item.description[lang]}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenLightbox(item)}
                    className="min-h-[44px] px-3 py-1.5 text-sm font-bold text-slate-700 hover:text-emerald-800 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>
                      {lang === 'en' ? 'Open Lightbox' : 'Buka Paparan'}
                    </span>
                    <ExternalLink className="w-4 h-4" />
                  </button>

                  <a
                    href={getWaUrl(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] px-3.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-sm flex items-center gap-1.5 transition-colors border border-emerald-200"
                  >
                    <MessageCircle className="w-4 h-4 fill-emerald-700 text-emerald-50" />
                    <span>{lang === 'en' ? 'Enquire' : 'Tanya'}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. DIRECT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {lang === 'en'
                ? 'Require Similar Works for Your Facility or Site?'
                : 'Memerlukan Kerja Serupa untuk Premis atau Tapak Anda?'}
            </h3>
            <p className="text-slate-300 text-lg">
              {lang === 'en'
                ? 'Share your project scope with Mr Chan for a discussion of your requirements.'
                : 'Kongsikan skop projek anda dengan Mr Chan untuk perbincangan keperluan anda.'}
            </p>
          </div>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[50px] px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-lg text-white shadow-lg shrink-0 flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>
              {lang === 'en' ? 'WhatsApp Mr Chan' : 'WhatsApp Mr Chan'}
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};
