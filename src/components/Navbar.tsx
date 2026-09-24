import React, { useState } from 'react';
import { Menu, X, MessageCircle, Globe } from 'lucide-react';
import { Language } from '../types';
import { NrcLogo } from './NrcLogo';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  currentPath: string;
  lang: Language;
  onNavigate: (path: string) => void;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  lang,
  onNavigate,
  onToggleLang,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: { en: 'Home', bm: 'Laman Utama' } },
    { path: '/about', label: { en: 'About', bm: 'Mengenai Kami' } },
    { path: '/services', label: { en: 'Services', bm: 'Perkhidmatan' } },
    { path: '/portfolio', label: { en: 'Portfolio', bm: 'Portfolio' } },
    { path: '/contact', label: { en: 'Contact', bm: 'Hubungi Kami' } },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  const getWaUrl = () => {
    const defaultText =
      lang === 'en'
        ? 'Hello Mr Chan, I would like to enquire about NRC MEGA RESOURCES SDN BHD services.'
        : 'Salam Mr Chan, saya ingin membuat pertanyaan mengenai perkhidmatan NRC MEGA RESOURCES SDN BHD.';
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(defaultText)}`;
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-nav shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo Zone */}
          <div
            onClick={() => handleLinkClick('/')}
            className="flex items-center cursor-pointer group"
          >
            <NrcLogo className="h-12 sm:h-14 py-1" />
          </div>

          {/* Desktop Navigation Links (Zone 2) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`min-h-[48px] px-4 py-2 rounded-xl text-[17px] font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-emerald-800 bg-emerald-50 font-bold border-b-2 border-emerald-700'
                      : 'text-slate-700 hover:text-emerald-800 hover:bg-slate-100/70'
                  }`}
                >
                  {link.label[lang]}
                </button>
              );
            })}
          </nav>

          {/* Actions Zone (Zone 3): Lang Switcher & WhatsApp CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="min-h-[48px] min-w-[48px] px-3.5 py-2 flex items-center gap-2 rounded-xl border border-slate-300 bg-white/80 hover:bg-slate-100 text-slate-700 text-base font-medium shadow-xs transition-colors cursor-pointer"
              aria-label="Toggle language between English and Bahasa Melayu"
            >
              <Globe className="w-4 h-4 text-emerald-700" />
              <span className="font-bold text-emerald-800">
                {lang === 'en' ? 'EN' : 'BM'}
              </span>
              <span className="text-xs text-slate-400">|</span>
              <span className="text-xs text-slate-500">
                {lang === 'en' ? 'BM' : 'EN'}
              </span>
            </button>

            {/* WhatsApp CTA Button */}
            <a
              href={getWaUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] px-5 py-2.5 inline-flex items-center gap-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-[16px] font-bold shadow-md shadow-emerald-900/15 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>
                {lang === 'en' ? 'WhatsApp Enquiry' : 'Pertanyaan WhatsApp'}
              </span>
            </a>
          </div>

          {/* Mobile Right Controls: Lang Toggle & Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleLang}
              className="min-h-[48px] min-w-[48px] px-2.5 py-1.5 flex items-center justify-center gap-1 rounded-xl border border-slate-300 bg-white text-emerald-800 font-bold text-sm shadow-xs"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span>{lang.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[48px] min-w-[48px] p-2 flex items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:text-emerald-800 hover:bg-slate-200 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`w-full min-h-[48px] px-4 py-3 rounded-xl text-left text-lg font-semibold flex items-center justify-between transition-colors ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-800 font-bold border-l-4 border-emerald-700'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                <span>{link.label[lang]}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                )}
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-200">
            <a
              href={getWaUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[48px] px-5 py-3.5 flex items-center justify-center gap-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-lg font-bold shadow-md shadow-emerald-900/20 text-center"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>
                {lang === 'en' ? 'WhatsApp Enquiry' : 'Pertanyaan WhatsApp'}
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
