
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
  <a href="#home" className="flex items-center gap-3 group select-none cursor-pointer">
    <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
      <div className="absolute inset-0 bg-[#1e3a8a]/20 blur-lg rounded-full group-hover:bg-[#1e3a8a]/40 transition-all duration-700"></div>
      
      <div className="relative w-full h-full bg-gradient-to-br from-[#1e3a8a] to-[#172554] rounded-xl md:rounded-2xl flex items-center justify-center shadow-xl border border-white/20 transform group-hover:rotate-[10deg] transition-transform duration-500 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
            <path d="M0 80 Q 50 20 100 80" fill="none" stroke="currentColor" strokeWidth="4" />
          </svg>
        </div>
        
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18M6 6l12 12" className="group-hover:stroke-[#f97316] transition-colors duration-500" />
        </svg>
      </div>
    </div>

    <div className="flex flex-col -space-y-1">
      <div className="flex items-baseline tracking-tighter">
        <span className="text-lg md:text-2xl font-black text-slate-900">EX</span>
        <span className="text-lg md:text-2xl font-black text-[#1e3a8a] group-hover:text-[#f97316] transition-colors duration-500">TUNE</span>
      </div>
      <span className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-[#1e3a8a] transition-colors duration-500">
        Logistique & Coordination
      </span>
    </div>
  </a>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('fr');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[lang];
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setShowLangMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [lang]);

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    setShowLangMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 ${lang === 'ar' ? 'rtl' : ''}`}>
      <header className={`fixed top-0 left-0 w-full z-[60] p-4 md:p-8 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-3 md:py-4' : 'bg-transparent'}`}>
        <div className="flex-shrink-0">
          <Logo />
        </div>

        <div className="relative" ref={langMenuRef}>
          <button 
            type="button"
            onClick={() => setShowLangMenu(!showLangMenu)}
            className={`flex items-center gap-2 md:gap-3 border text-slate-900 px-3 md:px-5 py-2 md:py-2.5 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[11px] uppercase tracking-[0.2em] shadow-lg hover:bg-white transition-all group active:scale-95 ${isScrolled ? 'bg-white border-slate-200' : 'bg-white/80 backdrop-blur-md border-transparent'}`}
          >
            <Languages size={14} className="text-[#1e3a8a] opacity-80" />
            <span className="text-sm md:text-base leading-none">{languages.find(l => l.code === lang)?.flag}</span>
            <span className="hidden sm:inline opacity-80">{languages.find(l => l.code === lang)?.code}</span>
            <ChevronDown size={12} className={`transition-transform duration-500 opacity-50 ${showLangMenu ? 'rotate-180' : ''}`} />
          </button>
          
          {showLangMenu && (
            <div className={`absolute top-full mt-4 ${lang === 'ar' ? 'left-0' : 'right-0'} bg-white shadow-2xl rounded-[1.2rem] md:rounded-[1.5rem] p-2 border border-slate-100 w-40 md:w-48 animate-in slide-in-from-top-4 fade-in duration-300 overflow-hidden`}>
              {languages.map(l => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => handleLangChange(l.code as Language)}
                  className={`flex items-center justify-between w-full px-3 md:px-4 py-2.5 md:py-3 rounded-xl text-[10px] md:text-xs font-black transition-all mb-1 last:mb-0 ${lang === l.code ? 'bg-[#1e3a8a] text-white shadow-lg' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  <span className="flex items-center gap-2 md:gap-3">
                    <span className="text-base md:text-lg">{l.flag}</span>
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
