import React, { useRef, useState } from 'react';
import {
  Phone,
  Mail,
  MessageCircle,
  User,
  HelpCircle,
  Copy,
  Check,
} from 'lucide-react';
import { Language } from '../types';
import { COMPANY_INFO, SERVICES } from '../data/content';

interface ContactPageProps {
  lang: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    service: 'construction',
    phone: '',
    location: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [copyError, setCopyError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleCopyEmail = async (email: string) => {
    setCopiedEmail(null);
    setCopyError(false);
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
    } catch {
      setCopyError(true);
    }
  };

  const validateForm = () => {
    const form = formRef.current;
    if (!form) return false;
    const name = form.elements.namedItem('name') as HTMLInputElement;
    const message = form.elements.namedItem('message') as HTMLTextAreaElement;
    name.setCustomValidity(formData.name.trim() ? '' : lang === 'en' ? 'Please enter your name.' : 'Sila masukkan nama anda.');
    message.setCustomValidity(formData.message.trim() ? '' : lang === 'en' ? 'Please describe your requirements.' : 'Sila nyatakan keperluan anda.');
    return form.reportValidity();
  };

  const serviceName = formData.service === 'multiple'
    ? (lang === 'en' ? 'Multiple / Integrated Services' : 'Pelbagai / Perkhidmatan Bersepadu')
    : SERVICES.find((s) => s.id === formData.service)?.title[lang] ?? '';

  const buildDraft = () => {
    const labels = lang === 'en'
      ? ['Name', 'Company', 'Service', 'Contact', 'Location', 'Requirements']
      : ['Nama', 'Syarikat', 'Perkhidmatan', 'Hubungi', 'Lokasi', 'Keperluan'];
    const values = [formData.name, formData.company, serviceName, formData.phone, formData.location, formData.message];
    const greeting = lang === 'en'
      ? 'Hello Mr Chan, I would like to make an enquiry to NRC MEGA RESOURCES SDN BHD.'
      : 'Salam Mr Chan, saya ingin membuat pertanyaan kepada NRC MEGA RESOURCES SDN BHD.';
    return greeting + '\n\n' + values.map((value, index) => value.trim() ? `• ${labels[index]}: ${value.trim()}` : '').filter(Boolean).join('\n');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;
    const encodedText = encodeURIComponent(buildDraft());
    const waUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodedText}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEmailDirect = () => {
    if (!validateForm()) return;
    const subject = encodeURIComponent(
      `${lang === 'en' ? 'Service Enquiry' : 'Pertanyaan Perkhidmatan'}: ${serviceName} - ${formData.name.trim()}`
    );
    const body = encodeURIComponent(buildDraft());

    const mailto = `mailto:${COMPANY_INFO.emails[0]}?cc=${COMPANY_INFO.emails[1]}&subject=${subject}&body=${body}`;
    window.location.href = mailto;
  };

  const faqs = [
    {
      q: {
        en: 'How can I request a service quote or consultation?',
        bm: 'Bagaimanakah cara meminta sebut harga atau rundingan?',
      },
      a: {
        en: 'You can contact Mr Chan directly via WhatsApp (011-10789912) or using our WhatsApp Enquiry Form on this page. You can also send an email to bb4459613@gmail.com and sundrisupramaniam@gmail.com.',
        bm: 'Anda boleh menghubungi Mr Chan terus melalui WhatsApp (011-10789912) atau menggunakan Borang Pertanyaan WhatsApp di laman ini. Anda juga boleh menghantar emel ke bb4459613@gmail.com dan sundrisupramaniam@gmail.com.',
      },
    },
    {
      q: {
        en: 'Can I enquire about multiple services together?',
        bm: 'Bolehkah saya bertanya tentang beberapa perkhidmatan serentak?',
      },
      a: {
        en: 'Yes. NRC offers construction, material storage, cleaning, landscaping, manpower supply and logistics as a single provider. Please discuss the required scope, availability and contract terms with Mr Chan.',
        bm: 'Ya. NRC menawarkan pembinaan, penyimpanan bahan, pembersihan, landskap, tenaga kerja dan logistik sebagai satu penyedia. Sila bincangkan skop, ketersediaan dan terma kontrak dengan Mr Chan.',
      },
    },
    {
      q: {
        en: 'Who is listed for Foreign Welfare Affairs?',
        bm: 'Siapakah yang disenaraikan bagi Hal Ehwal Kebajikan Pekerja Asing?',
      },
      a: {
        en: 'The company profile lists Deepanraj under Foreign Welfare Affairs. Please contact Mr Chan to discuss project-specific welfare and safety requirements.',
        bm: 'Profil syarikat menyenaraikan Deepanraj di bawah Hal Ehwal Kebajikan Pekerja Asing. Sila hubungi Mr Chan untuk membincangkan keperluan kebajikan dan keselamatan khusus projek.',
      },
    },
    {
      q: {
        en: 'What information should I prepare when making an enquiry?',
        bm: 'Apakah maklumat yang perlu saya sediakan semasa membuat pertanyaan?',
      },
      a: {
        en: 'Sharing your company name, target project location, service requirements (e.g. civil construction, grass cutting, factory cleanup, or workforce numbers), and timeline helps us understand your enquiry.',
        bm: 'Menyatakan nama syarikat anda, lokasi projek sasaran, jenis perkhidmatan yang diperlukan (cth. pembinaan sivil, mesin rumput, pembersihan kilang atau bilangan pekerja) serta garis masa membantu kami memahami pertanyaan anda.',
      },
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* 1. HERO HEADER */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-emerald-50/60 via-slate-50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="px-3.5 py-1 rounded-md bg-emerald-100 text-emerald-900 text-sm font-bold tracking-wide uppercase">
            {lang === 'en' ? 'Get In Touch' : 'Hubungi Kami'}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
            {lang === 'en' ? 'Contact Information & Enquiry' : 'Maklumat & Pertanyaan Hubungi'}
          </h1>
          <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed max-w-3xl font-normal">
            {lang === 'en'
              ? 'Connect directly with Mr Chan (Chandran) to discuss quotes, project planning, workforce supply, or logistics arrangements.'
              : 'Hubungi terus Mr Chan (Chandran) untuk membincangkan sebut harga, perancangan projek, pembekalan tenaga kerja atau aturan logistik.'}
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & INTERACTIVE WHATSAPP ENQUIRY FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Official Contact Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-6">
              <div className="border-b border-slate-100 pb-5">
                <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-800 block">
                  {lang === 'en' ? 'Verified Contact Person' : 'Pegawai Rasmi'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1 flex items-center gap-2">
                  <User className="w-6 h-6 text-emerald-700" />
                  <span>{COMPANY_INFO.contactPerson}</span>
                </h2>
                <span className="text-sm text-slate-600 block mt-1">
                  NRC MEGA RESOURCES SDN BHD
                </span>
              </div>

              {/* Phone CTA */}
              <div className="space-y-3">
                <a
                  href={`tel:${COMPANY_INFO.phoneCall}`}
                  className="min-h-[56px] p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase text-slate-500 block">
                        {lang === 'en' ? 'Direct Mobile / Telephone' : 'Telefon Bimbit / Panggilan'}
                      </span>
                      <span className="text-xl font-bold text-slate-900">
                        {COMPANY_INFO.phoneDisplay}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100/60 px-2.5 py-1 rounded">
                    {lang === 'en' ? 'Call Now' : 'Hubungi'}
                  </span>
                </a>

                {/* WhatsApp Direct CTA */}
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[56px] p-4 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-between transition-all shadow-md shadow-emerald-950/20 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-800 text-white flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 fill-current" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase text-emerald-200 block">
                        {lang === 'en' ? 'Instant Messaging' : 'Mesej Pantas'}
                      </span>
                      <span className="text-xl font-bold text-white">
                        WhatsApp {COMPANY_INFO.phoneDisplay}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-900 bg-white px-2.5 py-1 rounded">
                    {lang === 'en' ? 'Chat' : 'Bual'}
                  </span>
                </a>
              </div>

              {/* Official Emails with Copy Buttons */}
              <div className="pt-2 border-t border-slate-100 space-y-3">
                <span className="text-xs uppercase font-extrabold tracking-wider text-slate-500 block">
                  {lang === 'en' ? 'Official Email Accounts' : 'Akaun Emel Rasmi'}
                </span>

                {COMPANY_INFO.emails.map((email) => (
                  <div
                    key={email}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                      <a
                        href={`mailto:${email}`}
                        className="text-sm font-semibold text-slate-800 hover:text-emerald-700 truncate"
                      >
                        {email}
                      </a>
                    </div>
                    <button
                      onClick={() => handleCopyEmail(email)}
                      className="min-w-[40px] min-h-[40px] p-2 flex items-center justify-center rounded-lg bg-white hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer border border-slate-200 shrink-0"
                      aria-label={`${lang === 'en' ? 'Copy email' : 'Salin emel'} ${email}`}
                    >
                      {copiedEmail === email ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                ))}
                <p role="status" aria-live="polite" className="text-sm text-slate-700 break-words">
                  {copyError
                    ? (lang === 'en' ? 'Could not copy. Please select and copy the email address manually.' : 'Tidak dapat menyalin. Sila pilih dan salin alamat emel secara manual.')
                    : copiedEmail ? (lang === 'en' ? `Copied: ${copiedEmail}` : `Disalin: ${copiedEmail}`) : ''}
                </p>
              </div>

              {/* Guidance note */}
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 text-slate-700 text-sm leading-relaxed">
                <span className="font-bold text-emerald-900 block mb-1">
                  {lang === 'en' ? 'Before You Send:' : 'Sebelum Menghantar:'}
                </span>
                {lang === 'en'
                  ? 'This form prepares a draft only. Review and send it in WhatsApp or your email app; this website does not confirm delivery.'
                  : 'Borang ini hanya menyediakan draf. Semak dan hantar melalui WhatsApp atau aplikasi emel anda; laman ini tidak mengesahkan penghantaran.'}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Enquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md space-y-6">
              <div className="space-y-2 border-b border-slate-100 pb-5">
                <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-800 block">
                  {lang === 'en' ? 'Prepare an Enquiry' : 'Sediakan Pertanyaan'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {lang === 'en'
                    ? 'Interactive Enquiry Form'
                    : 'Borang Pertanyaan Interaktif'}
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  {lang === 'en'
                    ? 'Fill out your requirements below to prepare a WhatsApp or email draft. You must send it in the app that opens.'
                    : 'Isikan keperluan anda di bawah untuk menyediakan draf WhatsApp atau emel. Anda perlu menghantarnya dalam aplikasi yang dibuka.'}
                </p>
              </div>

              <form ref={formRef} noValidate onSubmit={handleFormSubmit} className="space-y-5">
                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-sm font-bold text-slate-800">
                      {lang === 'en' ? 'Your Name *' : 'Nama Anda *'}
                    </label>
                    <input
                      type="text"
                      required
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder={lang === 'en' ? 'e.g. Robert Tan' : 'cth. Robert Tan'}
                      className="w-full min-h-[48px] px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-slate-50/50 text-slate-900 text-base"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-company" className="block text-sm font-bold text-slate-800">
                      {lang === 'en' ? 'Company Name' : 'Nama Syarikat'}
                    </label>
                    <input
                      type="text"
                      id="contact-company"
                      name="company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder={lang === 'en' ? 'Optional' : 'Pilihan'}
                      className="w-full min-h-[48px] px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-slate-50/50 text-slate-900 text-base"
                    />
                  </div>
                </div>

                {/* Service Selection & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-service" className="block text-sm font-bold text-slate-800">
                      {lang === 'en' ? 'Service Required *' : 'Perkhidmatan Diperlukan *'}
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full min-h-[48px] px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-slate-50/50 text-slate-900 text-base"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title[lang]}
                        </option>
                      ))}
                      <option value="multiple">
                        {lang === 'en' ? 'Multiple / Integrated Services' : 'Pelbagai / Perkhidmatan Bersepadu'}
                      </option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-phone" className="block text-sm font-bold text-slate-800">
                      {lang === 'en' ? 'Phone / WhatsApp' : 'No. Telefon / WhatsApp'}
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="01X-XXXXXXX"
                      className="w-full min-h-[48px] px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-slate-50/50 text-slate-900 text-base"
                    />
                  </div>
                </div>

                {/* Project Location */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-location" className="block text-sm font-bold text-slate-800">
                    {lang === 'en' ? 'Project Site / Location' : 'Tapak Projek / Lokasi'}
                  </label>
                  <input
                    type="text"
                    id="contact-location"
                    name="location"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    placeholder={lang === 'en' ? 'City, district or industrial area' : 'Bandar, daerah atau kawasan perindustrian'}
                    className="w-full min-h-[48px] px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-slate-50/50 text-slate-900 text-base"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-sm font-bold text-slate-800">
                    {lang === 'en' ? 'Requirements & Details *' : 'Keperluan & Perincian *'}
                  </label>
                  <textarea
                    required
                    rows={4}
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={
                      lang === 'en'
                        ? 'Describe your project timeline, site scope, manpower needs, or specific works...'
                        : 'Nyatakan garis masa projek, skop tapak, bilangan tenaga kerja atau keperluan khusus...'
                    }
                    className="w-full p-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-slate-50/50 text-slate-900 text-base leading-relaxed"
                  />
                </div>

                {/* Buttons (WhatsApp and Email) */}
                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 min-h-[52px] px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-lg shadow-md shadow-emerald-950/20 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>
                      {lang === 'en' ? 'Open WhatsApp Draft' : 'Buka Draf WhatsApp'}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailDirect}
                    className="min-h-[52px] px-6 py-3 rounded-xl border-2 border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 font-bold text-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Mail className="w-5 h-5 text-emerald-700" />
                    <span>
                      {lang === 'en' ? 'Open Email Draft' : 'Buka Draf Emel'}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="px-3 py-1 rounded-md bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
              {lang === 'en' ? 'Clarifications' : 'Kemusykilan Lazim'}
            </span>
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight flex items-center gap-2">
              <HelpCircle className="w-7 h-7 text-emerald-700" />
              <span>
                {lang === 'en' ? 'Frequently Asked Questions' : 'Soalan Lazim (FAQ)'}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-2.5"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {faq.q[lang]}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  {faq.a[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
