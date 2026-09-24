import React from 'react';
import { ORG_CHART } from '../data/content';
import { Language } from '../types';
import './OrganisationChart.css';

export const OrganisationChart: React.FC<{ lang: Language }> = ({ lang }) => {
  const director = ORG_CHART.find((node) => node.name === 'N. RAVI CHANDRAN')!;
  const departments = ORG_CHART.filter((node) => node.reportsTo === director.name);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="organisation-title">
      <div className="org-panel">
        <div className="org-intro">
          <span className="org-eyebrow">{lang === 'en' ? 'Leadership & Structure' : 'Kepimpinan & Struktur'}</span>
          <h2 id="organisation-title">{lang === 'en' ? 'Organisation Chart' : 'Carta Organisasi'}</h2>
          <p>{lang === 'en'
            ? 'Our organisation brings together Finance and Admin, Foreign Welfare Affairs, and Sales & Marketing under the Director.'
            : 'Organisasi kami merangkumi Kewangan dan Pentadbiran, Hal Ehwal Kebajikan Pekerja Asing serta Jualan & Pemasaran di bawah Pengarah.'}</p>
        </div>
        <div className="org-tree">
          <div className="org-director">
            <span className="org-role">{director.role[lang]}</span>
            <h3>{director.name}</h3>
            <p>{director.department[lang]}</p>
          </div>
          <div className="org-departments" aria-label={lang === 'en' ? 'Departments Reporting to the Director' : 'Jabatan di Bawah Pengarah'}>
            {departments.map((department, index) => {
              const managers = ORG_CHART.filter((node) => node.reportsTo === department.name);
              return (
                <section className={`org-branch${managers.length > 1 ? ' org-branch-pair' : ''}`} key={department.name} aria-labelledby={`org-department-${index}`}>
                  <h3 id={`org-department-${index}`} className="org-department">{department.department[lang]}</h3>
                  <ul className="org-managers">
                    {managers.map((manager) => (
                      <li className="org-manager" key={manager.name}>
                        <h4>{manager.name}</h4>
                        <p>{manager.role[lang]}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
