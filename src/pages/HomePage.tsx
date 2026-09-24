import { ClientsSection } from '../components/ClientsSection';
import { ILLUSTRATIVE_ITEMS as PORTFOLIO_ITEMS } from '../data/illustrativeImages';
import React from 'react';
import {
  Hammer,
  Sparkles,
  Trees,
  Users,
  Truck,
  Warehouse,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Award,
  Leaf,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';
import { Language, PortfolioItem } from '../types';
import { IllustrativeImage as NrcSpriteImage } from '../components/IllustrativeImage';
import { COMPANY_INFO, SERVICES } from '../data/content';

interface HomePageProps {
  lang: Language;
  onNavigate: (path: string) => void;
  onOpenLightbox: (item: PortfolioItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  lang,
  onNavigate,
  onOpenLightbox,
}) => {
  // Get Construction photo 05 for Hero
  const heroPhoto05 = PORTFOLIO_ITEMS.find((item) => item.id === '05')!;

  // Featured photos for homepage showcase
  const featuredWorks = [
    PORTFOLIO_ITEMS.find((item) => item.id === '01')!, // Landscaping before
    PORTFOLIO_ITEMS.find((item) => item.id === '03')!, // Landscaping after
    PORTFOLIO_ITEMS.find((item) => item.id === '06')!, // Rebar foundation
    PORTFOLIO_ITEMS.find((item) => item.id === '07')!, // Night works
    PORTFOLIO_ITEMS.find((item) => item.id === '11')!, // WWTP
    PORTFOLIO_ITEMS.find((item) => item.id === '13')!, // Cleaning
  ];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hammer':
        return <Hammer className="w-7 h-7 text-emerald-700" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-emerald-700" />;
      case 'Trees':
        return <Trees className="w-7 h-7 text-emerald-700" />;
      case 'Users':
        return <Users className="w-7 h-7 text-emerald-700" />;
      case 'Truck':
        return <Truck className="w-7 h-7 text-emerald-700" />;
      case 'Warehouse':
        return <Warehouse className="w-7 h-7 text-emerald-700" />;
      default:
        return <Hammer className="w-7 h-7 text-emerald-700" />;
    }
  };

  const getWaHeroUrl = () => {
    const text =
      lang === 'en'
        ? 'Hello Mr Chan, I would like to enquire about NRC services after visiting your website.'
        : 'Salam Mr Chan, saya ingin membuat pertanyaan mengenai perkhidmatan NRC selepas melayari laman web anda.';
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="space-y-20 pb-20">
      {/* 1. SPACIOUS SPLIT HERO SECTION WITH FULL-WIDTH WHITE TRANSPARENT BACKGROUND */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:py-24 bg-white border-b border-slate-200">
        {/* Full-width Relevant White Transparent Background Image & Overlays */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
          <img
            src="/hero-background.jpg"
            alt="NRC Industrial Infrastructure and Civil Works"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 opacity-60 filter contrast-105"
          />
          {/* Subtle gradient overlays allowing clear view of the construction background while maintaining text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-transparent to-white/60" />
          <div className="absolute inset-0 bg-emerald-50/20 mix-blend-multiply" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-100/90 border border-emerald-300/80 text-emerald-900 text-sm font-bold tracking-wide backdrop-blur-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>NRC MEGA RESOURCES SDN BHD</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
                {COMPANY_INFO.tagline[lang]}
              </h1>

              <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-normal">
                {lang === 'en'
                  ? 'NRC provides dependable construction, cleaning, landscaping, manpower for small and large industries, logistics solutions, and construction material storage — providing convenient access to diverse, essential services through one trusted partner.'
                  : 'NRC membekalkan perkhidmatan pembinaan, pembersihan, landskap, tenaga kerja untuk industri kecil dan besar, logistik dan penyimpanan bahan binaan — memberi kemudahan akses kepada pelbagai perkhidmatan penting menerusi satu rakan berwibawa.'}
              </p>

              {/* Action Buttons with 48px touch targets */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => onNavigate('/services')}
                  className="min-h-[52px] px-8 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-lg font-bold shadow-lg shadow-emerald-950/20 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>
                    {lang === 'en' ? 'Explore Services' : 'Terokai Perkhidmatan'}
                  </span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <a
                  href={getWaHeroUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[52px] px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-300 hover:border-emerald-600 text-lg font-bold shadow-xs flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-700 fill-emerald-100" />
                  <span>
                    {lang === 'en' ? 'WhatsApp Enquiry' : 'Pertanyaan WhatsApp'}
                  </span>
                </a>
              </div>

              {/* Verified Contact Tag for older users clarity */}
              <div className="pt-2 flex items-center gap-3 text-slate-700 text-base">
                <span className="font-bold text-slate-950">
                  {lang === 'en' ? 'Direct Enquiries:' : 'Pertanyaan Terus:'}
                </span>
                <span className="font-semibold text-emerald-800">
                  {COMPANY_INFO.contactPerson} ({COMPANY_INFO.phoneDisplay})
                </span>
              </div>
            </div>

            {/* Right Media: Construction Photo 05 preserving full image (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden p-2.5 bg-white/95 shadow-2xl border border-slate-200/90 backdrop-blur-xs group">
                <div
                  onClick={() => onOpenLightbox(heroPhoto05)}
                  className="cursor-pointer"
                >
                  <NrcSpriteImage
                    rect={heroPhoto05.rect}
                    alt={heroPhoto05.title[lang]}
                    category="construction"
                    itemNumber={heroPhoto05.number}
                    className="w-full rounded-xl"
                  />
                </div>
                <div className="p-4 bg-slate-900 text-white rounded-xl mt-2.5 flex items-center justify-between border border-slate-800 shadow-md">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold block">
                      {lang === 'en' ? 'Featured Project Execution' : 'Pelaksanaan Projek Pilihan'}
                    </span>
                    <h3 className="text-base font-bold text-slate-100 line-clamp-1">
                      {heroPhoto05.title[lang]}
                    </h3>
                  </div>
                  <button
                    onClick={() => onOpenLightbox(heroPhoto05)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label="View photo in detail"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientsSection lang={lang} />

      {/* 2. SERVICES OVERVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900 text-sm font-bold">
            <span>{lang === 'en' ? 'Our Core Pillars' : 'Teras Perkhidmatan'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            {lang === 'en'
              ? 'Multi-Disciplinary Solutions Under One Roof'
              : 'Penyelesaian Pelbagai Bidang di Bawah Satu Bumbung'}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            {lang === 'en'
              ? 'Simplify procurement and site operations by engaging a single partner capable of orchestrating construction, cleaning, landscaping, manpower, and logistics seamlessly.'
              : 'Permudahkan urusan perolehan dan operasi tapak dengan melantik satu rakan yang berupaya menyelaras pembinaan, pembersihan, landskap, tenaga kerja dan logistik serentak.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-700 transition-colors">
                  <div className="group-hover:text-white transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-800 transition-colors">
                  {service.title[lang]}
                </h3>

                <p className="text-slate-600 text-lg leading-relaxed">
                  {service.shortDesc[lang]}
                </p>

                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  {service.features[lang].slice(0, 3).map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-base text-slate-700"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onNavigate('/services')}
                  className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 font-bold text-base flex items-center justify-center gap-2 transition-colors cursor-pointer border border-slate-200"
                >
                  <span>{lang === 'en' ? 'View Details' : 'Lihat Maklumat'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SHORT COMPANY INTRODUCTION LINKING TO ABOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="px-3.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-sm font-bold tracking-wider uppercase border border-emerald-500/30">
              {lang === 'en' ? 'Company Introduction' : 'Pengenalan Syarikat'}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {lang === 'en'
                ? 'Empowering Clients Through Integrated Capability'
                : 'Memperkasa Pelanggan Melalui Keupayaan Bersepadu'}
            </h2>

            <p className="text-slate-200 text-lg sm:text-xl leading-relaxed">
              {lang === 'en'
                ? 'NRC MEGA RESOURCES SDN BHD brings construction, cleaning, landscaping, manpower, logistics and construction material storage together through one provider. Contact our team to discuss the services your business needs.'
                : 'NRC MEGA RESOURCES SDN BHD menghimpunkan pembinaan, pembersihan, landskap, tenaga kerja, logistik dan penyimpanan bahan binaan melalui satu pembekal. Hubungi pasukan kami untuk membincangkan keperluan perniagaan anda.'}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('/about')}
                className="min-h-[48px] px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg shadow-lg shadow-emerald-950/40 flex items-center gap-2 cursor-pointer transition-colors"
              >
                <span>
                  {lang === 'en' ? 'Learn More About NRC' : 'Ketahui Lebih Lanjut'}
                </span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED WORKS SHOWCASE (Landscaping, Construction, WWTP, Cleaning) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900 text-sm font-bold">
              <span>{lang === 'en' ? 'Proven Track Record' : 'Rekod Kerja Terbukti'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              {lang === 'en' ? 'Featured Project Work' : 'Sorotan Kerja Projek'}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {lang === 'en'
                ? 'A snapshot of our practical execution across landscaping transformation, structural construction, industrial wastewater, and commercial sanitation.'
                : 'Imbasan hasil pelaksanaan praktikal kami merangkumi transformasi landskap, pembinaan struktur, loji air sisa industri dan sanitasi komersial.'}
            </p>
          </div>

          <button
            onClick={() => onNavigate('/portfolio')}
            className="min-h-[48px] px-6 py-2.5 rounded-xl border-2 border-emerald-700 text-emerald-800 hover:bg-emerald-50 font-bold text-base flex items-center gap-2 shrink-0 cursor-pointer transition-colors"
          >
            <span>
              {lang === 'en' ? 'View Full Portfolio' : 'Lihat Semua Portfolio'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWorks.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <NrcSpriteImage
                  rect={item.rect}
                  alt={item.title[lang]}
                  category={item.category}
                  itemNumber={item.number}
                  className="w-full"
                />
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                      {item.categoryLabel[lang]}
                    </span>
                    {item.timing && (
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded ${
                          item.timing === 'after'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
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
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-1">
                    {item.title[lang]}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed line-clamp-2">
                    {item.description[lang]}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 flex items-center justify-between text-sm font-semibold text-emerald-700 border-t border-slate-100">
                <span>{lang === 'en' ? 'Click to inspect' : 'Klik untuk perincian'}</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SUSTAINABILITY & QUALITY COMMITMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-emerald-900/10 border border-emerald-200/80 rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-800 text-white flex items-center justify-center">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              {lang === 'en' ? 'Environmental Care' : 'Penjagaan Alam Sekitar'}
            </h3>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              {lang === 'en'
                ? 'Our environmental commitments include energy efficiency, waste reduction and responsible land use.'
                : 'Komitmen alam sekitar kami merangkumi kecekapan tenaga, pengurangan sisa dan penggunaan tanah yang bertanggungjawab.'}
            </p>
          </div>

          <div className="bg-slate-900/5 border border-slate-200 rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              {lang === 'en' ? 'Quality Benchmarks' : 'Penanda Aras Kualiti'}
            </h3>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              {lang === 'en'
                ? 'We aim to provide high-value services tailored to client needs, guided by quality, reliability and integrity.'
                : 'Kami berusaha menyediakan perkhidmatan bernilai tinggi mengikut keperluan pelanggan, berpandukan kualiti, kebolehpercayaan dan integriti.'}
            </p>
          </div>

          <div className="bg-emerald-900/10 border border-emerald-200/80 rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              {lang === 'en' ? 'Workforce Welfare' : 'Kebajikan Tenaga Kerja'}
            </h3>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              {lang === 'en'
                ? 'Our organisation includes a Foreign Welfare Affairs department led by DEEPANRAJ.'
                : 'Organisasi kami merangkumi jabatan Hal Ehwal Kebajikan Pekerja Asing yang diketuai oleh DEEPANRAJ.'}
            </p>
          </div>
        </div>
      </section>

      {/* 6. CLEAR WHATSAPP ENQUIRY CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-emerald-800 text-white p-8 sm:p-12 shadow-xl flex flex-col xl:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {lang === 'en'
                ? 'Ready to Discuss Your Project Needs?'
                : 'Sedia Membincangkan Keperluan Projek Anda?'}
            </h2>
            <p className="text-emerald-100 text-lg sm:text-xl leading-relaxed">
              {lang === 'en'
                ? 'Contact Mr Chan on WhatsApp to discuss service requirements, quotations and possible site visits.'
                : 'Hubungi Mr Chan melalui WhatsApp untuk membincangkan keperluan perkhidmatan, sebut harga dan kemungkinan lawatan tapak.'}
            </p>
            <div className="text-emerald-200 text-sm font-semibold">
              {COMPANY_INFO.contactPerson} • {COMPANY_INFO.phoneDisplay}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[52px] px-8 py-3.5 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 text-lg font-bold shadow-lg flex items-center justify-center gap-2.5 transition-transform hover:scale-105 active:scale-95 text-center"
            >
              <MessageCircle className="w-5 h-5 fill-emerald-800 text-white" />
              <span>
                {lang === 'en' ? 'Chat on WhatsApp' : 'Bual di WhatsApp'}
              </span>
            </a>

            <button
              onClick={() => onNavigate('/contact')}
              className="min-h-[52px] px-8 py-3.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-950 border border-emerald-600 text-white text-lg font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer text-center"
            >
              <span>{lang === 'en' ? 'Contact Page' : 'Halaman Hubungi'}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
