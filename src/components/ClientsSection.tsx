import React from 'react';
import { CLIENTS } from '../data/content';
import { Language } from '../types';

export const ClientsSection: React.FC<{ lang: Language }> = ({ lang }) => (
  <section id="clients" aria-labelledby="clients-heading" className="relative bg-slate-50 border-y border-slate-200 py-16 sm:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-9 space-y-3">
        <span className="text-emerald-800 text-sm font-bold uppercase tracking-widest">NRC Mega Resources</span>
        <h2 id="clients-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
          {lang === 'en' ? 'Clients & Current Projects' : 'Pelanggan & Projek Semasa'}
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          {lang === 'en' ? 'Organisations featured in our company profile.' : 'Organisasi yang ditampilkan dalam profil syarikat kami.'}
        </p>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5">
        {CLIENTS.map(client => (
          <li key={client.name} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 flex flex-col items-center text-center gap-5">
            <div className="w-full h-28 flex items-center justify-center">
              <img src={client.logo} alt={`${client.name} logo`} className="w-full h-full object-contain" loading="eager" />
            </div>
            <p className="text-base font-semibold text-slate-800 leading-snug">{client.name}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
