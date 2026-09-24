import React from 'react';
import { Phone, Mail, MessageCircle, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { NrcLogo } from './NrcLogo';
import { COMPANY_INFO, SERVICES } from '../data/content';

interface FooterProps {
  lang: Language;
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div
              onClick={() => onNavigate('/')}
              className="inline-block cursor-pointer"
            >
              <NrcLogo className="w-60" variant="light" />
            </div>

            <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
              {lang === 'en'
                ? 'NRC MEGA RESOURCES SDN BHD is your versatile, dependable partner offering convenient, integrated access to construction, professional cleaning, landscaping, manpower supply, and logistics solutions through one single trusted provider.'
                : 'NRC MEGA RESOURCES SDN BHD ialah rakan serba boleh dan berwibawa yang menawarkan akses mudah serta bersepadu kepada perkhidmatan pembinaan, pembersihan profesional, landskap, pembekalan tenaga kerja dan logistik menerusi satu pembekal yang dipercayai.'}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-300 text-sm font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>
                  {lang === 'en' ? 'Quality & Safety Driven' : 'Kualiti & Keselamatan Utuh'}
                </span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>
                  {lang === 'en' ? 'Single Provider Access' : 'Satu Pembekal Bersepadu'}
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Services List (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-lg font-bold tracking-wide uppercase border-b border-slate-800 pb-2">
              {lang === 'en' ? 'Our Services' : 'Perkhidmatan Kami'}
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onNavigate('/services')}
                    className="text-left text-slate-300 hover:text-emerald-400 text-base flex items-center justify-between w-full group py-1 cursor-pointer transition-colors"
                  >
                    <span>{srv.title[lang]}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact Information (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white text-lg font-bold tracking-wide uppercase border-b border-slate-800 pb-2">
              {lang === 'en' ? 'Direct Contact' : 'Hubungi Terus'}
            </h4>

            <div className="space-y-3.5 text-slate-300">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-xs uppercase tracking-wider text-slate-400 block font-semibold">
                  {lang === 'en' ? 'Contact Person' : 'Pegawai Untuk Dihubungi'}
                </span>
                <span className="text-lg font-bold text-white block mt-0.5">
                  {COMPANY_INFO.contactPerson}
                </span>
              </div>

              {/* Phone */}
              <a
                href={`tel:${COMPANY_INFO.phoneCall}`}
                className="min-h-[48px] p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center gap-3 transition-colors text-slate-200 hover:text-white"
              >
                <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">
                    {lang === 'en' ? 'Phone / Call' : 'Telefon / Panggilan'}
                  </span>
                  <span className="text-base font-bold">
                    {COMPANY_INFO.phoneDisplay}
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] p-3 rounded-xl bg-emerald-950/70 hover:bg-emerald-900/70 border border-emerald-800/60 flex items-center gap-3 transition-colors text-emerald-200 hover:text-white"
              >
                <div className="p-2 rounded-lg bg-emerald-600 text-white">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-xs text-emerald-300/80 block">
                    {lang === 'en' ? 'Fast WhatsApp Response' : 'Respons Pantas WhatsApp'}
                  </span>
                  <span className="text-base font-bold text-white">
                    {COMPANY_INFO.phoneDisplay}
                  </span>
                </div>
              </a>

              {/* Emails */}
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lang === 'en' ? 'Official Emails' : 'Emel Rasmi'}</span>
                </div>
                {COMPANY_INFO.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block text-slate-200 hover:text-emerald-400 text-sm font-medium transition-colors break-all"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name}.{' '}
            {lang === 'en' ? 'All rights reserved.' : 'Hak cipta terpelihara.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <button
              onClick={() => onNavigate('/')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'Home' : 'Laman Utama'}
            </button>
            <button
              onClick={() => onNavigate('/about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'About' : 'Mengenai Kami'}
            </button>
            <button
              onClick={() => onNavigate('/services')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'Services' : 'Perkhidmatan'}
            </button>
            <button
              onClick={() => onNavigate('/portfolio')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'Portfolio' : 'Portfolio'}
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'Contact' : 'Hubungi Kami'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
