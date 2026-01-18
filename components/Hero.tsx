
import React from 'react';
import { ArrowRight, CheckCircle2, ArrowLeft, ClipboardList } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants.tsx';
import { Language } from '../translations.ts';

interface HeroProps {
  t: any;
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ t, lang }) => {
  const isRtl = lang === 'ar';
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed scale-105"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-900/90 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 text-[#f97316] px-6 py-2.5 rounded-full text-[10px] font-black tracking-[0.25em] uppercase mb-10 reveal">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f97316] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f97316]"></span>
          </span>
          {t.badge}
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-10 reveal [animation-delay:200ms] tracking-tight">
          {t.title}
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-300 mb-14 max-w-3xl mx-auto leading-relaxed reveal [animation-delay:400ms] font-medium">
          {t.subtext}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 reveal [animation-delay:600ms]">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#1e3a8a] hover:bg-[#172554] text-white px-12 py-6 rounded-[2rem] text-lg font-black transition-all transform hover:scale-105 hover:-translate-y-1 shadow-2xl shadow-blue-900/40"
          >
            {t.cta}
            {isRtl ? <ArrowLeft size={22} /> : <ArrowRight size={22} />}
          </a>
          <a
            href="#products"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white backdrop-blur-xl px-12 py-6 rounded-[2rem] text-lg font-black transition-all border border-white/20 hover:border-white/40"
          >
            {t.secondaryCta}
            <ClipboardList size={18} className="opacity-60" />
          </a>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6 reveal [animation-delay:800ms]">
          {t.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center gap-3 text-slate-200/90 font-bold text-sm tracking-wide bg-white/5 px-6 py-3 rounded-2xl border border-white/5 backdrop-blur-md">
              <CheckCircle2 className="text-[#f97316] w-5 h-5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white rotate-90 origin-left ml-6">Scroll</span>
        <div className="w-0.5 h-16 rounded-full bg-gradient-to-b from-[#f97316] to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
