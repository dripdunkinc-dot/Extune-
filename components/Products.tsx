
import React from 'react';
import { ChevronRight, ChevronLeft, ShieldCheck, Truck } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants.tsx';
import { Language } from '../translations.ts';

interface ProductsProps {
  t: any;
  lang: Language;
}

const Products: React.FC<ProductsProps> = ({ t, lang }) => {
  const isRtl = lang === 'ar';
  
  // Using highly reliable Unsplash IDs for logistics
  const images = [
    'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800', // Highway Truck
    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800', // Semi Truck
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800', // Logistics Warehouse
    'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=800', // Management/Coordination
  ];

  const handleProductInquiry = (e: React.MouseEvent, serviceName: string) => {
    e.preventDefault();
    const message = encodeURIComponent(`Bonjour ExTune, je souhaite obtenir un devis pour le service : ${serviceName}.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section id="products" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center gap-3 bg-blue-100 text-[#1e3a8a] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-blue-200">
            <Truck size={12} fill="currentColor" /> {t.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
            {t.title}
          </h2>
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium italic max-w-2xl mx-auto">
            "{t.subtext}"
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {t.items.map((product: any, idx: number) => (
            <div key={idx} className="group product-card bg-white rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-slate-200/50 flex flex-col h-full shadow-lg shadow-slate-200/20">
              <div className="relative h-64 md:h-80 overflow-hidden shine bg-slate-200">
                <img 
                  src={images[idx] || images[0]} 
                  alt={product.name}
                  loading="lazy"
                  className="pro-image w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a solid color or generic image if Unsplash fails
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1594818821917-001a707cc49b?auto=format&fit=crop&q=80&w=800';
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80"></div>
                
                <div className={`absolute top-6 ${isRtl ? 'right-6' : 'left-6'} z-20`}>
                  <div className="bg-white/95 backdrop-blur-md text-slate-900 px-4 py-2 rounded-xl text-[8px] font-black uppercase tracking-widest shadow-2xl flex items-center gap-2 border border-slate-100">
                    <ShieldCheck size={12} className="text-[#1e3a8a]" /> {isRtl ? 'معتمد' : 'EXTUNE VERIFIED'}
                  </div>
                </div>
                
                <div className={`absolute bottom-6 ${isRtl ? 'left-6' : 'right-6'} bg-[#f97316] px-5 py-2 rounded-xl text-[9px] font-black text-white shadow-xl uppercase tracking-[0.2em] z-20`}>
                  {product.tag}
                </div>
              </div>
              
              <div className="p-8 md:p-12 flex flex-col flex-grow">
                <h4 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 group-hover:text-[#1e3a8a] transition-colors duration-300 tracking-tight">
                  {product.name}
                </h4>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8 flex-grow font-medium opacity-80">
                  {product.desc}
                </p>
                <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-slate-400 text-[8px] font-black uppercase tracking-[0.3em] mb-1">Disponibilité</span>
                    <span className="text-[#1e3a8a] font-black text-[10px] uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">{product.fob}</span>
                  </div>
                  <button 
                    type="button"
                    onClick={(e) => handleProductInquiry(e, product.name)}
                    className="bg-[#1e3a8a] text-white p-4 md:p-5 rounded-2xl md:rounded-[2rem] hover:bg-[#172554] transition-all flex items-center justify-center group/btn shadow-xl hover:shadow-2xl active:scale-95 touch-manipulation z-30"
                  >
                    <span className="mx-2 font-bold text-sm">{isRtl ? 'طلب سعر' : 'Devis'}</span>
                    {isRtl ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          <div className="bg-slate-900 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 flex flex-col justify-center items-center text-center text-white space-y-8 md:space-y-12 shadow-2xl relative overflow-hidden group min-h-[30rem] md:min-h-[40rem]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#1e3a8a]/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f97316]/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="space-y-6 md:space-y-8 relative z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-4 backdrop-blur-xl border border-white/10">
                <Truck className="text-[#f97316] w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h4 className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tighter leading-[1.05]">{t.partner_title}</h4>
              <p className="text-slate-400 leading-relaxed font-semibold text-lg md:text-xl max-w-sm mx-auto">{t.partner_text}</p>
            </div>
            
            <a href="#contact" className="bg-[#f97316] text-white px-10 md:px-16 py-5 md:py-7 rounded-2xl md:rounded-[2rem] font-black hover:bg-white hover:text-slate-900 transition-all transform hover:scale-105 shadow-2xl relative z-10 uppercase tracking-[0.2em] text-xs md:text-sm active:translate-y-1 touch-manipulation">
              {t.partner_cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
