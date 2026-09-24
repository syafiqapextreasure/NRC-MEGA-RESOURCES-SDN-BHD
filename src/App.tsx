import React, { useState, useEffect } from 'react';
import { Language, PortfolioItem } from './types';
import { PORTFOLIO_ITEMS } from './data/content';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname;
      return ['/', '/about', '/services', '/portfolio', '/contact'].includes(p)
        ? p
        : '/';
    }
    return '/';
  });

  const [lang, setLang] = useState<Language>('en');
  const [activeLightboxItem, setActiveLightboxItem] = useState<PortfolioItem | null>(null);

  // Listen to browser popstate (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname;
      setCurrentPath(
        ['/', '/about', '/services', '/portfolio', '/contact'].includes(p) ? p : '/'
      );
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'bm' : 'en'));
  };

  const renderActivePage = () => {
    switch (currentPath) {
      case '/about':
        return <AboutPage lang={lang} onNavigate={navigateTo} />;
      case '/services':
        return (
          <ServicesPage
            lang={lang}
            onNavigate={navigateTo}
            onOpenLightbox={(item) => setActiveLightboxItem(item)}
          />
        );
      case '/portfolio':
        return (
          <PortfolioPage
            lang={lang}
            onOpenLightbox={(item) => setActiveLightboxItem(item)}
          />
        );
      case '/contact':
        return <ContactPage lang={lang} />;
      case '/':
      default:
        return (
          <HomePage
            lang={lang}
            onNavigate={navigateTo}
            onOpenLightbox={(item) => setActiveLightboxItem(item)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Frosted Navigation Header */}
      <Navbar
        currentPath={currentPath}
        lang={lang}
        onNavigate={navigateTo}
        onToggleLang={toggleLanguage}
      />

      {/* Main Page View */}
      <main className="flex-1">{renderActivePage()}</main>

      {/* Footer */}
      <Footer lang={lang} onNavigate={navigateTo} />

      {/* Portfolio Lightbox Modal */}
      <LightboxModal
        item={activeLightboxItem}
        items={PORTFOLIO_ITEMS}
        lang={lang}
        onClose={() => setActiveLightboxItem(null)}
        onSelect={(newItem) => setActiveLightboxItem(newItem)}
      />
    </div>
  );
}
