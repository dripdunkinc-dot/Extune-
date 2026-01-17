
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, ChevronDown, ExternalLink } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';
import { Language } from '../translations';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  t: any;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowLangMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: t.home, href: '#' },
    { name: t.about, href: '#about' },
    { name: t.products, href: '#products' },
    { name: t.process, href: '#how-it-works' },
    { name: t.contact, href: '#contact' },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'glass-nav py-3 border-b border-slate-200/50 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" onClick={(e) => handleLinkClick(e, '#')} className="flex items-center gap-3 group">
            <div className={`p-2.5 rounded-2xl transition-all duration-500 ${scrolled ? 'bg-[#0B6E4F] text-white shadow-lg shadow-emerald-900/20' : 'bg-white/10 text-white backdrop-blur-xl border border-white/20'}`}>
              <Globe className="w-6 h-6" />
            </div>
            <span className={`text-2xl font-black tracking-tighter transition-colors duration-500 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              EX<span className="text-[#0B6E4F]">TUNE</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center space-x-12 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => link.href === '#' && handleLinkClick(e, '#')}
                className={`text-[13px] font-black uppercase tracking-widest transition-all hover:text-[#0B6E4F] relative group/link ${scrolled ? 'text-slate-600' : 'text-white/80'}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0B6E4F] transition-all duration-300 group-hover/link:w-full"></span>
              </a>
            ))}
            
            <div className="relative" ref={menuRef}>
              <button 
                onClick={() => setShowLangMenu(!showLangMenu)}
                className={`flex items-center gap-2 text-[11px] font-black uppercase tracking-widest ${scrolled ? 'text-slate-600' : 'text-white'} hover:text-[#0B6E4F] transition-all py-2`}
              >
                <span className="opacity-80">{languages.find(l => l.code === lang)?.flag}</span>
                {languages.find(l => l.code === lang)?.code}
                <ChevronDown size={14} className={`transition-transform duration-500 ${showLangMenu ? 'rotate-180' : ''}`} />
              </button>
              {showLangMenu && (
                <div className="absolute top-full mt-4 right-0 bg-white shadow-2xl rounded-3xl p-3 border border-slate-100 w-52 animate-in fade-in zoom-in-95 duration-300">
                  {languages.map(l => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code as Language); setShowLangMenu(false); }}
                      className={`flex items-center justify-between w-full px-5 py-4 rounded-2xl text-sm font-bold transition-all ${lang === l.code ? 'bg-[#0B6E4F] text-white shadow-xl shadow-[#0B6E4F]/20' : 'text-slate-700 hover:bg-slate-50'}`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-xl">{l.flag}</span>
                        {l.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="bg-[#0B6E4F] hover:bg-[#085a40] text-white px-10 py-4 rounded-2xl text-[13px] font-black uppercase tracking-widest transition-all shadow-2xl shadow-emerald-900/10 hover:shadow-emerald-900/40 active:scale-95 flex items-center gap-2">
              {t.contactBtn}
              <ExternalLink size={14} className="opacity-40" />
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-3 rounded-2xl transition-all shadow-xl ${scrolled ? 'text-slate-900 bg-white border border-slate-100' : 'text-white bg-white/10 backdrop-blur-xl border border-white/20'}`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-[-1] transition-all duration-700 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-2xl" onClick={() => setIsOpen(false)}></div>
        <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl p-10 flex flex-col">
          <div className="flex justify-end mb-16">
            <button onClick={() => setIsOpen(false)} className="p-4 rounded-full bg-slate-100 text-slate-800 active:scale-90 transition-transform">
              <X size={28} />
            </button>
          </div>
          
          <div className="space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)} 
                className="block px-8 py-6 text-2xl font-black text-slate-900 hover:text-[#0B6E4F] hover:bg-[#0B6E4F]/5 rounded-3xl transition-all tracking-tight"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto border-t border-slate-100 pt-10">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 px-8">Select Language</p>
            <div className="grid grid-cols-3 gap-3 px-2">
              {languages.map(l => (
                <button 
                  key={l.code} 
                  onClick={() => { setLang(l.code as Language); setIsOpen(false); }} 
                  className={`flex flex-col items-center gap-2 py-5 rounded-3xl text-[11px] font-black transition-all ${lang === l.code ? 'bg-[#0B6E4F] text-white shadow-2xl shadow-emerald-900/30' : 'bg-slate-50 text-slate-600'}`}
                >
                  <span className="text-2xl">{l.flag}</span>
                  <span>{l.code.toUpperCase()}</span>
                </button>
              ))}
            </div>
            
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="mt-10 flex w-full bg-[#0B6E4F] text-white items-center justify-center py-6 rounded-[2rem] font-black text-xl shadow-2xl shadow-emerald-900/30 active:scale-95 transition-transform">
              {t.contactBtn}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
