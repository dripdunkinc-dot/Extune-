
import React from 'react';
import { ShieldCheck, TrendingUp, ArrowRight, ChevronLeft } from 'lucide-react';
import { Language } from '../translations';

interface AboutProps {
  t: any;
  lang: Language;
}

const About: React.FC<AboutProps> = ({ t, lang }) => {
  const isRtl = lang === 'ar';
  
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className={`relative ${isRtl ? 'order-last' : ''} group`}>
            <div className={`absolute -top-10 ${isRtl ? '-right-10' : '-left-10'} w-40 h-40 bg-[#1e3a8a]/5 rounded-full -z-10`}></div>
            <div className={`absolute -bottom-10 ${isRtl ? '-left-10' : '-right-10'} w-60 h-60 bg-slate-100 rounded-full -z-10`}></div>
            
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shine bg-slate-100 border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" 
                alt="Logistics Warehouse Coordination" 
                className="w-full h-full object-cover aspect-[4/5] pro-image"
              />
              <div className={`absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl ${isRtl ? 'border-r-8' : 'border-l-8'} border-[#1e3a8a] transform group-hover:-translate-y-2 transition-transform duration-500`}>
                <p className="text-[#1e3a8a] font-black text-xl italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#f97316]"></div>
                <span className="text-[#f97316] font-black uppercase tracking-[0.3em] text-[10px]">{t.badge}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                {t.title}
              </h2>
            </div>
            
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              {t.text}
            </p>

            <div className="grid gap-10">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-[#1e3a8a]/10 text-[#1e3a8a] rounded-2xl flex items-center justify-center transition-all group-hover:bg-[#1e3a8a] group-hover:text-white shadow-sm">
                  <TrendingUp size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900 mb-2">{t.f1_title}</h4>
                  <p className="text-slate-500 leading-relaxed font-medium text-lg">{t.f1_text}</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center transition-all group-hover:bg-[#f97316] group-hover:text-white shadow-sm">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900 mb-2">{t.f2_title}</h4>
                  <p className="text-slate-500 leading-relaxed font-medium text-lg">{t.f2_text}</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-3 text-[#1e3a8a] font-black text-lg hover:gap-5 transition-all uppercase tracking-widest group"
            >
              {t.more} 
              <span className="p-2 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                {isRtl ? <ChevronLeft size={20} /> : <ArrowRight size={20} />}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
