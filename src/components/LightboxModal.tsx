import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { PortfolioItem, Language } from '../types';
import { NrcSpriteImage } from './NrcSpriteImage';
import { COMPANY_INFO } from '../data/content';

interface LightboxModalProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  lang: Language;
  onClose: () => void;
  onSelect: (item: PortfolioItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  lang,
  onClose,
  onSelect,
}) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        if (currentIndex < items.length - 1) {
          onSelect(items[currentIndex + 1]);
        }
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        if (currentIndex > 0) {
          onSelect(items[currentIndex - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, items, onClose, onSelect]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  const getWaEnquiryLink = () => {
    const text =
      lang === 'en'
        ? `Hello Mr Chan, I am interested in your project: "${item.title.en}" (Ref: NRC-${item.number}). Could we discuss this service?`
        : `Salam Mr Chan, saya berminat dengan projek: "${item.title.bm}" (Ruj: NRC-${item.number}). Boleh kita bincangkan perkhidmatan ini?`;
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title[lang]}
    >
      <div
        className="relative w-full max-w-5xl bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90 text-white">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase bg-emerald-600/30 text-emerald-300 rounded border border-emerald-500/30">
              {item.categoryLabel[lang]}
            </span>
            <span className="text-slate-400 text-sm font-medium">
              Photo {item.number} of {items.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="min-w-[48px] min-h-[48px] p-2 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Media & Details Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg bg-black">
            <NrcSpriteImage
              rect={item.rect}
              alt={item.title[lang]}
              category={item.category}
              itemNumber={item.number}
              className="max-h-[55vh] object-contain mx-auto"
            />
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {item.title[lang]}
              </h3>
              {item.timing && (
                <span
                  className={`px-3 py-1 text-sm font-bold rounded ${
                    item.timing === 'after'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  }`}
                >
                  {item.timing === 'after'
                    ? lang === 'en'
                      ? 'Completed Work'
                      : 'Hasil Selesai'
                    : lang === 'en'
                    ? 'Initial State'
                    : 'Keadaan Asal'}
                </span>
              )}
            </div>

            <p className="text-slate-300 text-lg leading-relaxed">
              {item.description[lang]}
            </p>

            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 text-slate-300 text-base leading-relaxed">
              <span className="font-semibold text-emerald-400 block mb-1">
                {lang === 'en' ? 'Project Context & Scope:' : 'Konteks & Skop Projek:'}
              </span>
              {item.details[lang]}
            </div>
          </div>
        </div>

        {/* Bottom Actions & Nav Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-900/90 text-white">
          <div className="flex items-center gap-2">
            <button
              onClick={() => hasPrev && onSelect(items[currentIndex - 1])}
              disabled={!hasPrev}
              className={`min-w-[48px] min-h-[48px] p-2 flex items-center justify-center rounded-xl border border-slate-700 transition-colors ${
                hasPrev
                  ? 'bg-slate-800 hover:bg-slate-700 text-white cursor-pointer'
                  : 'bg-slate-900 text-slate-600 border-slate-800 cursor-not-allowed'
              }`}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => hasNext && onSelect(items[currentIndex + 1])}
              disabled={!hasNext}
              className={`min-w-[48px] min-h-[48px] p-2 flex items-center justify-center rounded-xl border border-slate-700 transition-colors ${
                hasNext
                  ? 'bg-slate-800 hover:bg-slate-700 text-white cursor-pointer'
                  : 'bg-slate-900 text-slate-600 border-slate-800 cursor-not-allowed'
              }`}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <a
            href={getWaEnquiryLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 min-h-[48px] px-6 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base transition-colors shadow-lg shadow-emerald-950/40"
          >
            <MessageCircle className="w-5 h-5" />
            <span>
              {lang === 'en' ? 'WhatsApp Enquiry' : 'Pertanyaan WhatsApp'}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
