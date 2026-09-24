import React from 'react';
import {
  ShieldCheck,
  Target,
  Compass,
  CheckCircle,
  Building,
  UserCheck,
  Briefcase,
  ChevronDown,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { Language } from '../types';
import {
  COMPANY_INFO,
  ORG_CHART,
  CORPORATE_VALUES,
  ESG_STRATEGY,
} from '../data/content';

interface AboutPageProps {
  lang: Language;
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang, onNavigate }) => {
  const director = ORG_CHART.find((n) => n.name === 'N. RAVI CHANDRAN')!;
  const managers = ORG_CHART.filter((n) => n.reportsTo === 'N. RAVI CHANDRAN');

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO HEADER */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-emerald-50/60 via-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="px-3.5 py-1 rounded-md bg-emerald-100 text-emerald-900 text-sm font-bold tracking-wide uppercase">
              {lang === 'en' ? 'About Our Company' : 'Mengenai Syarikat Kami'}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
              NRC MEGA RESOURCES SDN BHD
            </h1>
            <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-normal">
              {lang === 'en'
                ? 'A versatile, multi-service organization built on operational integrity, responsive workforce welfare, and unified client delivery.'
                : 'Sebuah organisasi serba boleh pelbagai perkhidmatan yang berteraskan integriti operasi, kebajikan pekerja yang prihatin dan pelaksanaan bersepadu.'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. OBJECTIVE, VISION & MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Objective */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                {lang === 'en' ? 'Our Objective' : 'Objektif Kami'}
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                {lang === 'en'
                  ? 'To provide commercial and industrial customers convenient, reliable access to diverse essential services — construction, cleaning, landscaping, manpower, and logistics — through one dependable provider.'
                  : 'Menyediakan akses yang mudah dan dipercayai kepada pelanggan komersial dan industri untuk pelbagai perkhidmatan penting — pembinaan, pembersihan, landskap, tenaga kerja dan logistik — menerusi satu pembekal yang berwibawa.'}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-sm font-semibold text-emerald-800">
              {lang === 'en'
                ? 'Integrated One-Stop Capability'
                : 'Keupayaan Bersepadu Sehenti'}
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-800 text-white flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                {lang === 'en' ? 'Our Vision' : 'Visi Kami'}
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                {lang === 'en'
                  ? 'To become a leading sustainable service provider that empowers communities and drives innovative solutions across industries.'
                  : 'Menjadi pembekal perkhidmatan mampan terkemuka yang memperkasakan komuniti dan memacu penyelesaian inovatif merentasi pelbagai industri.'}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-sm font-semibold text-emerald-800">
              {lang === 'en' ? 'Sustainable Industry Leadership' : 'Kepimpinan Industri Mampan'}
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                {lang === 'en' ? 'Our Mission' : 'Misi Kami'}
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-base text-slate-700">
                  <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <span>
                    {lang === 'en'
                      ? 'Deliver exceptional and versatile construction, logistics, cleaning and landscaping services.'
                      : 'Menyampaikan perkhidmatan pembinaan, logistik, pembersihan dan landskap yang luar biasa dan serba boleh.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-base text-slate-700">
                  <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <span>
                    {lang === 'en'
                      ? 'Support sustainable growth through environmental stewardship and social impact.'
                      : 'Menyokong pertumbuhan mampan melalui penjagaan alam sekitar dan impak sosial positif.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-base text-slate-700">
                  <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <span>
                    {lang === 'en'
                      ? 'Build lasting client partnerships through quality, reliability and integrity.'
                      : 'Membina kerjasama pelanggan yang berkekalan melalui kualiti, kebolehpercayaan dan integriti.'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORPORATE VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="px-3 py-1 rounded-md bg-emerald-100 text-emerald-900 text-sm font-bold uppercase tracking-wider">
            {lang === 'en' ? 'Our Guiding Principles' : 'Prinsip Panduan Kami'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            {lang === 'en' ? 'Core Corporate Values' : 'Nilai-Nilai Teras Korporat'}
          </h2>
          <p className="text-lg text-slate-600">
            {lang === 'en'
              ? 'These fundamental tenets shape how we manage people, execute works, and protect client interests every day.'
              : 'Prinsip asas ini membentuk cara kami mengurus pekerja, melaksanakan tugasan dan melindungi kepentingan pelanggan setiap hari.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {CORPORATE_VALUES.map((val) => (
            <div
              key={val.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white font-bold flex items-center justify-center text-lg">
                {val.title[lang].charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {val.title[lang]}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {val.desc[lang]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EXACT ORGANISATION CHART (HTML cards with exact reporting lines) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-sm font-bold uppercase tracking-wider border border-emerald-500/30">
              {lang === 'en' ? 'Leadership & Structure' : 'Kepimpinan & Struktur'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {lang === 'en' ? 'Organisation Chart' : 'Carta Organisasi'}
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              {lang === 'en'
                ? 'Clear reporting hierarchy ensuring operational accountability, employee safety, and prompt client communication.'
                : 'Hierarki pelaporan yang jelas bagi memastikan kebertanggungjawaban operasi, keselamatan pekerja dan komunikasi pantas pelanggan.'}
            </p>
          </div>

          {/* Director Card (Top Level) */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-2xl p-6 sm:p-8 border-2 border-emerald-500 shadow-2xl text-center space-y-2">
              <span className="inline-block px-3 py-1 rounded bg-emerald-400 text-emerald-950 text-xs font-black uppercase tracking-widest">
                {director.role[lang]}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {director.name}
              </h3>
              <p className="text-emerald-200 text-sm font-semibold uppercase tracking-wider">
                {director.department[lang]}
              </p>
              <p className="text-slate-200 text-base pt-2 border-t border-emerald-700/60 leading-relaxed">
                {director.description?.[lang]}
              </p>
            </div>

            {/* Connecting Line */}
            <div className="flex flex-col items-center my-4">
              <div className="w-0.5 h-8 bg-emerald-500"></div>
              <div className="p-1 rounded-full bg-emerald-500 text-slate-950">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Reporting Managers (Stacking clearly on mobile) */}
          <div className="space-y-4">
            <div className="text-center text-xs uppercase tracking-widest text-emerald-400 font-bold">
              {lang === 'en'
                ? 'Reporting to Director'
                : 'Melapor Terus Kepada Pengarah'}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {managers.map((mgr) => (
                <div
                  key={mgr.name}
                  className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700 hover:border-emerald-500 transition-colors space-y-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                      {mgr.role[lang]}
                    </span>
                    <span className="text-xs text-slate-400">
                      → N. Ravi Chandran
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white tracking-tight">
                      {mgr.name}
                    </h4>
                    <span className="text-sm font-semibold text-emerald-400 block mt-0.5">
                      {mgr.department[lang]}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed pt-2 border-t border-slate-700/60">
                    {mgr.description?.[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORPORATE ACHIEVEMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="px-3.5 py-1 rounded-md bg-emerald-100 text-emerald-900 text-sm font-bold uppercase tracking-wider">
              {lang === 'en' ? 'Track Record' : 'Pencapaian'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              {lang === 'en'
                ? 'Corporate Execution Capabilities'
                : 'Keupayaan Pelaksanaan Korporat'}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {lang === 'en'
                ? 'Delivering consistent, compliant services across challenging industrial and commercial environments.'
                : 'Membekalkan perkhidmatan yang konsisten dan patuh undang-undang di persekitaran industri dan komersial yang mencabar.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {lang === 'en'
                  ? 'Multi-Discipline Site Mobilization'
                  : 'Mobilisasi Tapak Pelbagai Bidang'}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                {lang === 'en'
                  ? 'Demonstrated versatility in managing civil earthworks, rebar foundation assembly, night casting shifts, and structural framing alongside plant sanitation and commercial grounds rehabilitation.'
                  : 'Keupayaan serba boleh terbukti dalam mengurus kerja tanah, pemasangan asas tetulang besi, giliran kerja malam konkrit dan rangka struktur di samping sanitasi loji dan pemulihan landskap komersial.'}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {lang === 'en'
                  ? 'Integrated Worker Welfare & Safety Induction'
                  : 'Integrasi Kebajikan Pekerja & Induksi Keselamatan'}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                {lang === 'en'
                  ? 'Established formalized Foreign Welfare Affairs management ensuring full compliance with Malaysian statutory labour regulations, hygienic worker lodgings, and occupational health protocols.'
                  : 'Pengurusan Hal Ehwal Kebajikan Pekerja Asing secara formal memastikan pematuhan penuh undang-undang buruh Malaysia, tempat penginapan pekerja yang bersih serta protokol keselamatan OSHA.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ESG STRATEGY (Environmental, Social, Governance) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="px-3.5 py-1 rounded-md bg-emerald-100 text-emerald-900 text-sm font-bold uppercase tracking-wider">
              {lang === 'en' ? 'Long-Term Impact' : 'Impak Jangka Panjang'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              {lang === 'en' ? 'ESG Strategy' : 'Strategi ESG'}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {lang === 'en'
                ? 'Our structured Environmental, Social, and Governance framework drives sustainable value for our clients, workforce, and communities.'
                : 'Rangka kerja Alam Sekitar, Sosial dan Tadbir Urus yang berstruktur memacu nilai mampan untuk pelanggan, tenaga kerja dan komuniti kita.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ESG_STRATEGY.map((esg) => (
              <div
                key={esg.pillar}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-emerald-800 text-white font-black flex items-center justify-center text-sm">
                    {esg.pillar.charAt(0)}
                  </span>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-emerald-700 block">
                      {esg.pillar}
                    </span>
                    <h3 className="text-xl font-bold text-slate-950">
                      {esg.title[lang]}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3 pt-2 border-t border-slate-100">
                  {esg.points[lang].map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-base text-slate-700 leading-relaxed"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              {lang === 'en'
                ? 'Discuss Partnership Opportunities'
                : 'Bincangkan Peluang Kerjasama'}
            </h3>
            <p className="text-slate-300 text-lg">
              {lang === 'en'
                ? 'Speak directly with Mr Chan regarding corporate contracts and tenders.'
                : 'Hubungi terus Mr Chan berkaitan kontrak korporat dan tender perkhidmatan.'}
            </p>
          </div>

          <div className="flex gap-4 shrink-0">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>
                {lang === 'en' ? 'WhatsApp Mr Chan' : 'WhatsApp Mr Chan'}
              </span>
            </a>
            <button
              onClick={() => onNavigate('/contact')}
              className="min-h-[48px] px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold flex items-center gap-2 transition-colors cursor-pointer border border-slate-700"
            >
              <span>{lang === 'en' ? 'Contact Details' : 'Maklumat Hubungi'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
