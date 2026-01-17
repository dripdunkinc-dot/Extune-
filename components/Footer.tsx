
import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../translations';
import { CONTACT_LINKS } from '../constants';

interface FooterProps {
  t: any;
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ t, lang }) => {
  const isRtl = lang === 'ar';
  
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-start">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Globe className="w-8 h-8 text-[#FFD700]" />
              <span className="text-3xl font-black text-white tracking-tighter uppercase">
                EX<span className="text-[#0B6E4F]">TUNE</span>
              </span>
            </div>
            <p className="text-sm max-w-xs leading-relaxed font-medium">
              {t.subtext}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            <div className="space-y-4">
              <h5 className="text-white font-black uppercase tracking-widest text-xs">{t.nav}</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#FFD700] transition-colors">{isRtl ? 'الرئيسية' : 'Home'}</a></li>
                <li><a href="#about" className="hover:text-[#FFD700] transition-colors">{isRtl ? 'من نحن' : 'About'}</a></li>
                <li><a href="#products" className="hover:text-[#FFD700] transition-colors">{isRtl ? 'المنتجات' : 'Products'}</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-white font-black uppercase tracking-widest text-xs">{t.info}</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#how-it-works" className="hover:text-[#FFD700] transition-colors">{isRtl ? 'كيفية العمل' : 'Process'}</a></li>
                <li><a href="#contact" className="hover:text-[#FFD700] transition-colors">{isRtl ? 'اتصل بنا' : 'Contact'}</a></li>
                <li><a href={CONTACT_LINKS.terms} className="hover:text-[#FFD700] transition-colors">{isRtl ? 'الشروط' : 'Terms'}</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>{t.copyright}</p>
          <div className="flex gap-8">
            <a href={CONTACT_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition-colors">LinkedIn</a>
            <a href={CONTACT_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
