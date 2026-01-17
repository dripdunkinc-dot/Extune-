
import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Products from './components/Products.tsx';
import HowItWorks from './components/HowItWorks.tsx';
import Testimonials from './components/Testimonials.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.tsx';
import { Language, translations } from './translations.ts';
import { ChevronDown, Languages } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-3 group select-none">
    <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
      {/* Outer Glow / Halo */}
      <div className="absolute inset-0 bg-[#0B6E4F]/20 blur-lg rounded-full group-hover:bg-[#0B6E4F]/40 transition-all duration-700"></div>
      
      {/* Stylized 'X' Icon Container */}
      <div className="relative w-full h-full bg-gradient-to-br from-[#0B6E4F] to-[#085a40] rounded-xl md:rounded-2xl flex items-center justify-center shadow-xl border border-white/20 transform group-hover:rotate-[10deg] transition-transform duration-500 overflow-hidden">
        {/* Abstract Bridge / Export Path Line */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
            <path d="M0 80 Q 50 20 100 80" fill="none" stroke="currentColor" strokeWidth="4" />
          </svg>
        </div>
        
        {/* The 'X' Mark */}
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18M6 6l12 12" className="group-hover:stroke-[#FFD700] transition-colors duration-500" />
        </svg>
      </div>
    </div>

    {/* Typography */}
    <div className="flex flex-col -space-y-1">
      <div className="flex items-baseline tracking-tighter">
        <span className="text-xl md:text-2xl font-black text-white">EX</span>
        <span className="text-xl md:text-2xl font-black text-[#0B6E4F] group-hover:text-[#FFD700] transition-colors duration-500">TUNE</span>
      </div>
      <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-white/50 group-hover:text-[#1E90FF] transition-colors duration-500">
        Global Brokerage
      </span>
    </div>
  </div>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const t = translations[lang];
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setShowLangMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [lang]);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    setShowLangMenu(false);
    // Smooth transition between content
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900 ${lang === 'ar' ? 'rtl' : ''}`}>
      {/* Minimal Trilingual Header Replacement */}
      <header className="fixed top-0 left-0 w-full z-[60] pointer-events-none p-6 md:p-10 flex justify-between items-center">
        {/* Brand Identity - Improved Logo */}
        <div className="pointer-events-auto">
          <Logo />
        </div>

        {/* Language Transformer Switcher */}
        <div className="pointer-events-auto relative" ref={langMenuRef}>
          <button 
            onClick={() => setShowLangMenu(!showLangMenu)}
            className="flex items-center gap-3 bg-white/10 backdrop-blur-3xl border border-white/20 text-white px-5 py-2.5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl hover:bg-white/20 transition-all group active:scale-95"
          >
            <Languages size={16} className="text-[#FFD700] opacity-80" />
            <span className="text-base leading-none">{languages.find(l => l.code === lang)?.flag}</span>
            <span className="hidden sm:inline opacity-80">{languages.find(l => l.code === lang)?.code}</span>
            <ChevronDown size={14} className={`transition-transform duration-500 opacity-50 ${showLangMenu ? 'rotate-180' : ''}`} />
          </button>
          
          {showLangMenu && (
            <div className={`absolute top-full mt-4 ${lang === 'ar' ? 'left-0' : 'right-0'} bg-white shadow-2xl rounded-[1.5rem] p-2 border border-slate-100 w-48 animate-in slide-in-from-top-4 fade-in duration-300 overflow-hidden`}>
              {languages.map(l => (
                <button
                  key={l.code}
                  onClick={() => handleLangChange(l.code as Language)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-xs font-black transition-all mb-1 last:mb-0 ${lang === l.code ? 'bg-[#0B6E4F] text-white shadow-lg' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-lg">{l.flag}</span>
                    {l.name}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      <main>
        <Hero t={t.hero} lang={lang} />
        <About t={t.about} lang={lang} />
        <Products t={t.products} lang={lang} />
        <HowItWorks t={t.process} lang={lang} />
        <Testimonials t={t.testimonials} lang={lang} />
        <Contact t={t.contact} lang={lang} />
      </main>
      <Footer t={t.footer} lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </div>
  );
};

export default App;
