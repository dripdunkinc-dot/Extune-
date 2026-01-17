
import React from 'react';
import { Quote, ShieldCheck } from 'lucide-react';
import { Language } from '../translations';

interface TestimonialsProps {
  t: any;
  lang: Language;
}

const Testimonials: React.FC<TestimonialsProps> = ({ t, lang }) => {
  const isRtl = lang === 'ar';
  
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-[#0B6E4F]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#1E90FF]/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#FFD700]"></div>
            <span className="text-[#FFD700] font-black uppercase tracking-[0.2em] text-xs">{t.badge}</span>
            <div className="h-px w-8 bg-[#FFD700]"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">{t.title}</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">{t.subtext}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {t.items.map((item: any, idx: number) => (
            <div key={idx} className="bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-[2rem] relative group hover:bg-white/10 transition-all">
              <Quote className={`absolute top-6 ${isRtl ? 'left-8 scale-x-[-1]' : 'right-8'} text-[#FFD700]/10 w-16 h-16 group-hover:text-[#FFD700]/20 transition-all`} />
              <p className="text-xl text-slate-100 leading-relaxed mb-8 italic relative z-10">
                "{item.text}"
              </p>
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-1 bg-[#FFD700] rounded-full"></div>
                   <span className="text-[#FFD700] font-black text-sm uppercase tracking-widest">{item.author}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#FFD700]/10 text-[#FFD700] px-3 py-1 rounded-full text-[10px] font-black uppercase border border-[#FFD700]/20">
                  <ShieldCheck size={12} /> {isRtl ? 'موثوق' : 'Verified'}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-wrap justify-center gap-x-16 gap-y-8">
          {t.badges.map((badge: string) => (
            <div key={badge} className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
              <div className="w-2 h-2 rounded-full bg-[#FFD700]"></div>
              <span className="text-sm font-black uppercase tracking-[0.3em]">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
