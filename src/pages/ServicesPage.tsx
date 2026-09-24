import React, { useState } from 'react';
import {
  Hammer,
  Sparkles,
  Trees,
  Users,
  Truck,
  Warehouse,
  CheckCircle,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { Language, PortfolioItem } from '../types';
import { SERVICES, COMPANY_INFO, PORTFOLIO_ITEMS } from '../data/content';
import { NrcSpriteImage } from '../components/NrcSpriteImage';

interface ServicesPageProps {
  lang: Language;
  onNavigate: (path: string) => void;
  onOpenLightbox: (item: PortfolioItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  lang,
  onNavigate,
  onOpenLightbox,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hammer':
        return <Hammer className="w-8 h-8 text-emerald-700" />;
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 text-emerald-700" />;
      case 'Trees':
        return <Trees className="w-8 h-8 text-emerald-700" />;
      case 'Users':
        return <Users className="w-8 h-8 text-emerald-700" />;
      case 'Truck':
        return <Truck className="w-8 h-8 text-emerald-700" />;
      case 'Warehouse':
        return <Warehouse className="w-8 h-8 text-emerald-700" />;
      default:
        return <Hammer className="w-8 h-8 text-emerald-700" />;
    }
  };

  const getWaServiceUrl = (serviceTitle: string, defaultMsg: string) => {
    const text =
      lang === 'en'
        ? `Hello Mr Chan, I would like to enquire about NRC ${serviceTitle} services.`
        : `Salam Mr Chan, saya ingin membuat pertanyaan mengenai perkhidmatan ${serviceTitle} NRC.`;
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  // Associate relevant portfolio photos with services
  const getRelatedPhotos = (serviceId: string) => {
    switch (serviceId) {
      case 'construction':
        return PORTFOLIO_ITEMS.filter((i) => i.category === 'construction').slice(0, 3);
      case 'cleaning':
        return PORTFOLIO_ITEMS.filter((i) => i.category === 'cleaning');
      case 'landscaping':
        return PORTFOLIO_ITEMS.filter((i) => i.category === 'landscaping').slice(0, 2);
      default:
        return [];
    }
  };

  const filteredServices =
    activeTab === 'all'
      ? SERVICES
      : SERVICES.filter((s) => s.id === activeTab);

  return (
    <div className="space-y-16 pb-20">
      {/* 1. HERO HEADER */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-emerald-50/60 via-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="px-3.5 py-1 rounded-md bg-emerald-100 text-emerald-900 text-sm font-bold tracking-wide uppercase">
            {lang === 'en' ? 'What We Offer' : 'Tawaran Perkhidmatan'}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            {lang === 'en'
              ? 'Comprehensive & Integrated Services'
              : 'Perkhidmatan Menyeluruh & Bersepadu'}
          </h1>
          <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed max-w-3xl font-normal">
            {lang === 'en'
              ? 'NRC delivers end-to-end capabilities across construction, professional hygiene, landscaping upkeep, manpower deployment, and industrial logistics.'
              : 'NRC menyediakan keupayaan menyeluruh merentasi pembinaan, sanitasi profesional, penyelenggaraan landskap, penempatan tenaga kerja dan logistik industri.'}
          </p>
        </div>
      </section>

      {/* 2. FILTER TABS FOR QUICK NAVIGATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200">
          <button
            onClick={() => setActiveTab('all')}
            className={`min-h-[48px] px-5 py-2.5 rounded-xl font-bold text-base transition-colors cursor-pointer ${
              activeTab === 'all'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {lang === 'en' ? 'All 6 Services' : 'Semua 6 Perkhidmatan'}
          </button>
          {SERVICES.map((srv) => (
            <button
              key={srv.id}
              onClick={() => setActiveTab(srv.id)}
              className={`min-h-[48px] px-4 py-2.5 rounded-xl font-semibold text-base transition-colors cursor-pointer ${
                activeTab === srv.id
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {srv.title[lang]}
            </button>
          ))}
        </div>
      </section>

      {/* 3. DETAILED SERVICE BLOCKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredServices.map((service, index) => {
          const related = getRelatedPhotos(service.id);
          return (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-200 shadow-md space-y-8 scroll-mt-28"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div>
                    <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-800 block">
                      {lang === 'en' ? `Service Pillar 0${index + 1}` : `Teras Perkhidmatan 0${index + 1}`}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                      {service.title[lang]}
                    </h2>
                  </div>
                </div>

                <a
                  href={getWaServiceUrl(service.title[lang], service.waMessage[lang])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-base inline-flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shrink-0"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>
                    {lang === 'en' ? 'Enquire via WhatsApp' : 'Tanya via WhatsApp'}
                  </span>
                </a>
              </div>

              {/* Description */}
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
                {service.fullDesc[lang]}
              </p>

              {/* Two-Column Grid: Key Features & Scope */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {/* Features */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-700" />
                    <span>
                      {lang === 'en' ? 'Key Capabilities' : 'Keupayaan Utama'}
                    </span>
                  </h3>
                  <ul className="space-y-3">
                    {service.features[lang].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-base text-slate-700 leading-relaxed"
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Scope */}
                <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-700" />
                    <span>
                      {lang === 'en' ? 'Scope of Delivery' : 'Skop Pelaksanaan'}
                    </span>
                  </h3>
                  <ul className="space-y-3">
                    {service.scope[lang].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-base text-slate-700 leading-relaxed"
                      >
                        <div className="w-2 h-2 rounded-full bg-emerald-700 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Related Project Photos if available */}
              {related.length > 0 && (
                <div className="pt-6 border-t border-slate-100 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold uppercase tracking-wider text-slate-700">
                      {lang === 'en' ? 'Project Visual Record' : 'Rekod Visual Projek'}
                    </span>
                    <button
                      onClick={() => onNavigate('/portfolio')}
                      className="text-emerald-700 hover:text-emerald-900 text-sm font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <span>{lang === 'en' ? 'See all in Portfolio' : 'Lihat semua'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {related.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => onOpenLightbox(item)}
                        className="cursor-pointer group rounded-xl overflow-hidden border border-slate-200 bg-slate-100 hover:shadow-md transition-shadow"
                      >
                        <NrcSpriteImage
                          rect={item.rect}
                          alt={item.title[lang]}
                          category={item.category}
                          itemNumber={item.number}
                          className="w-full"
                        />
                        <div className="p-3 bg-white">
                          <p className="text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-emerald-800">
                            {item.title[lang]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-emerald-900 text-white p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {lang === 'en'
                ? 'Need a Customized Service Combination?'
                : 'Perlukan Gabungan Perkhidmatan Tersuai?'}
            </h3>
            <p className="text-emerald-100 text-lg sm:text-xl">
              {lang === 'en'
                ? 'We bundle civil works, site maintenance, and ongoing logistics into unified service packages.'
                : 'Kami menggabungkan kerja sivil, penyelenggaraan tapak dan logistik berterusan dalam satu pakej bersepadu.'}
            </p>
          </div>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[50px] px-8 py-3 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-lg shadow-md shrink-0 flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5 fill-emerald-800" />
            <span>
              {lang === 'en' ? 'Enquire with Mr Chan' : 'Pertanyaan Mr Chan'}
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};
