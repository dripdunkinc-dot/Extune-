
import React from 'react';
import { Star, ChevronRight, ChevronLeft, ShieldCheck, ShoppingCart } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';
import { Language } from '../translations';

interface ProductsProps {
  t: any;
  lang: Language;
}

const Products: React.FC<ProductsProps> = ({ t, lang }) => {
  const isRtl = lang === 'ar';
  
  // High-reliability professional Unsplash IDs for stable loading
  const images = [
    'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=800', // Olive Oil
    'https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&q=80&w=800', // Dates
    'https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?auto=format&fit=crop&q=80&w=800', // Handicrafts
    'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&q=80&w=800', // Marble
  ];

  const handleProductInquiry = (productName: string) => {
    const message = encodeURIComponent(`Hello ExTune, I am interested in ${productName}. Could you please provide more information?`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section id="products" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <div className="inline-flex items-center justify-center gap-3 bg-[#FFD700]/10 text-[#0B6E4F] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-[#FFD700]/20">
            <Star size={12} fill="currentColor" /> {t.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
            {t.title}
          </h2>
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium italic max-w-2xl mx-auto">
            "{t.subtext}"
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {t.items.map((product: any, idx: number) => (
            <div key={idx} className="group product-card bg-white rounded-[3.5rem] overflow-hidden border border-slate-200/50 flex flex-col h-full shadow-lg shadow-slate-200/20">
              <div className="relative h-96 overflow-hidden shine bg-slate-100">
                <img 
                  src={images[idx]} 
                  alt={product.name}
                  loading="lazy"
                  className="pro-image w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80"></div>
                
                <div className={`absolute top-8 ${isRtl ? 'right-8' : 'left-8'} z-20`}>
                  <div className="bg-white/95 backdrop-blur-md text-slate-900 px-5 py-2.5 rounded-2xl text-[9px] font-black uppercase tracking-widest shadow-2xl flex items-center gap-2 border border-slate-100">
                    <ShieldCheck size={14} className="text-[#0B6E4F]" /> {isRtl ? 'جودة إكس تيون' : 'EXTUNE GRADE'}
                  </div>
                </div>
                
                <div className={`absolute bottom-8 ${isRtl ? 'left-8' : 'right-8'} bg-[#FFD700] px-6 py-2.5 rounded-2xl text-[10px] font-black text-slate-900 shadow-xl uppercase tracking-[0.2em] z-20`}>
                  {product.tag}
                </div>
              </div>
              
              <div className="p-12 flex flex-col flex-grow">
                <h4 className="text-4xl font-black text-slate-900 mb-5 group-hover:text-[#0B6E4F] transition-colors duration-300 tracking-tight">
                  {product.name}
                </h4>
                <p className="text-slate-500 text-lg leading-relaxed mb-10 flex-grow font-medium opacity-80">
                  {product.desc}
                </p>
                <div className="pt-10 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-slate-400 text-[8px] font-black uppercase tracking-[0.3em] mb-2">Pricing Model</span>
                    <span className="text-[#1E90FF] font-black text-[11px] uppercase tracking-widest bg-[#1E90FF]/5 px-4 py-1.5 rounded-xl border border-[#1E90FF]/10">FOB {product.fob}</span>
                  </div>
                  <button 
                    onClick={() => handleProductInquiry(product.name)}
                    className="bg-[#0B6E4F] text-white p-5 rounded-[2rem] hover:bg-[#085a40] transition-all flex items-center justify-center group/btn shadow-2xl shadow-emerald-900/10 hover:shadow-emerald-900/40 active:scale-90"
                    aria-label={`Inquire about ${product.name}`}
                  >
                    <ShoppingCart size={22} className="opacity-70 group-hover/btn:scale-110 transition-transform" />
                    <span className="mx-2 font-bold text-sm hidden sm:inline">{isRtl ? 'استفسار' : 'Inquire'}</span>
                    {isRtl ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          <div className="bg-slate-900 rounded-[3.5rem] p-12 flex flex-col justify-center items-center text-center text-white space-y-12 shadow-2xl relative overflow-hidden group min-h-[40rem]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0B6E4F]/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1E90FF]/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="space-y-8 relative z-10">
              <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-xl border border-white/10">
                <Star className="text-[#FFD700] w-10 h-10" />
              </div>
              <h4 className="text-4xl lg:text-6xl font-black tracking-tighter leading-[1.05]">{t.partner_title}</h4>
              <p className="text-slate-400 leading-relaxed font-semibold text-xl max-w-sm mx-auto">{t.partner_text}</p>
            </div>
            
            <a href="#contact" className="bg-[#FFD700] text-slate-950 px-16 py-7 rounded-[2rem] font-black hover:bg-white transition-all transform hover:scale-105 shadow-2xl relative z-10 uppercase tracking-[0.2em] text-sm active:translate-y-1">
              {t.partner_cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
