
import React from 'react';
import { MessageSquare, Search, ClipboardCheck, Play } from 'lucide-react';
import { Language } from '../translations';

interface HowItWorksProps {
  t: any;
  lang: Language;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ t, lang }) => {
  const isRtl = lang === 'ar';
  const icons = [
    <MessageSquare className="w-10 h-10" />,
    <Search className="w-10 h-10" />,
    <ClipboardCheck className="w-10 h-10" />,
    <Play className="w-10 h-10" />
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#1e3a8a]"></div>
            <span className="text-[#1e3a8a] font-black uppercase tracking-[0.2em] text-xs">{t.badge}</span>
            <div className="h-px w-8 bg-[#1e3a8a]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">{t.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">{t.subtext}</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[45px] left-[10%] w-[80%] h-0.5 bg-slate-100 z-0"></div>
          
          <div className="grid lg:grid-cols-4 gap-12 relative z-10">
            {t.steps.map((step: any, idx: number) => (
              <div key={idx} className="text-center group">
                <div className="inline-flex w-24 h-24 bg-slate-50 rounded-3xl items-center justify-center mb-8 shadow-inner border border-slate-100 transition-all group-hover:bg-[#1e3a8a] group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#1e3a8a]/30 overflow-hidden relative">
                   <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                   <div className="transition-all group-hover:text-white group-hover:scale-110">
                    {icons[idx]}
                   </div>
                </div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="bg-blue-100 text-[#1e3a8a] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    {isRtl ? 'المرحلة' : 'Phase'} 0{idx + 1}
                  </span>
                </div>
                <h4 className="text-2xl font-extrabold text-slate-900 mb-4">{step.title}</h4>
                <p className="text-slate-600 leading-relaxed max-w-xs mx-auto font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 p-10 bg-slate-950 rounded-[2.5rem] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-[#f97316] text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg shadow-[#f97316]/30">i</div>
            <div>
              <h5 className="text-xl font-bold text-white mb-1">{t.note}</h5>
              <p className="text-slate-400 max-w-lg font-medium">{t.note_text}</p>
            </div>
          </div>
          <button 
            onClick={scrollToContact}
            className="whitespace-nowrap bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold hover:bg-[#f97316] hover:text-white transition-all shadow-xl active:scale-95"
          >
            {t.start_cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
