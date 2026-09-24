import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PortfolioItem, Language } from '../types';

interface LightboxModalProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  lang: Language;
  onClose: () => void;
  onSelect: (item: PortfolioItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, items, lang, onClose, onSelect }) => {
  const dialog = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const open = !!item;
  useEffect(() => {
    if (!open) return;
    const trigger = document.activeElement as HTMLElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();
    return () => { document.body.style.overflow = overflow; trigger?.focus(); };
  }, [open]);

  useEffect(() => {
    if (!item) return;
    const handleKey = (event: KeyboardEvent) => {
      const index = items.findIndex(photo => photo.id === item.id);
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight' && index < items.length - 1) { event.preventDefault(); onSelect(items[index + 1]); }
      if (event.key === 'ArrowLeft' && index > 0) { event.preventDefault(); onSelect(items[index - 1]); }
      if (event.key === 'Tab') {
        const buttons = Array.from(dialog.current?.querySelectorAll<HTMLButtonElement>('button:not(:disabled)') || []);
        const first = buttons[0], last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [item, items, onClose, onSelect]);

  if (!item) return null;
  const index = items.findIndex(photo => photo.id === item.id);
  const timing = item.timing === 'before' ? (lang === 'en' ? 'Before' : 'Sebelum') : (lang === 'en' ? 'After' : 'Selepas');
  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6" onClick={onClose}>
      <div ref={dialog} role="dialog" aria-modal="true" aria-labelledby="photo-title" onClick={event => event.stopPropagation()} className="w-full max-w-5xl max-h-[94dvh] flex flex-col rounded-2xl overflow-hidden bg-slate-950 text-white shadow-2xl border border-slate-700">
        <div className="shrink-0 flex items-center justify-between gap-3 px-4 py-3 border-b border-slate-800">
          <div className="min-w-0 text-sm sm:text-base text-slate-200">{item.categoryLabel[lang]}{item.timing ? ` · ${timing}` : ''}<span className="block text-slate-400">{lang === 'en' ? 'Photo' : 'Foto'} {index + 1} / {items.length}</span></div>
          <button ref={closeButton} type="button" onClick={onClose} aria-label={lang === 'en' ? 'Close dialog' : 'Tutup paparan'} className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-slate-700"><X /></button>
        </div>
        <div className="min-h-0 overflow-y-auto p-3 sm:p-5">
          <div className="w-full h-[48dvh] sm:h-[56dvh] bg-black rounded-lg">
            <img src={item.originalSrc} alt={item.title[lang]} className="block h-full w-full object-contain" />
          </div>
          <h2 id="photo-title" className="text-lg sm:text-xl font-semibold mt-4 leading-relaxed">{item.title[lang]}</h2>
        </div>
        <div className="shrink-0 border-t border-slate-800 flex items-center justify-between px-4 py-3">
          <button type="button" disabled={index <= 0} onClick={() => onSelect(items[index - 1])} aria-label={lang === 'en' ? 'Previous image' : 'Foto sebelumnya'} className="min-w-12 min-h-12 p-3 rounded-xl bg-slate-800 disabled:opacity-30"><ChevronLeft /></button>
          <span className="text-sm text-slate-400">{lang === 'en' ? 'Original photograph' : 'Foto asal'}</span>
          <button type="button" disabled={index >= items.length - 1} onClick={() => onSelect(items[index + 1])} aria-label={lang === 'en' ? 'Next image' : 'Foto seterusnya'} className="min-w-12 min-h-12 p-3 rounded-xl bg-slate-800 disabled:opacity-30"><ChevronRight /></button>
        </div>
      </div>
    </div>
  );
};
