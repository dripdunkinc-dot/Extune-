
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';
import { Language } from '../translations';

interface FloatingWhatsAppProps {
  lang: Language;
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const isRtl = lang === 'ar';
  
  return (
    <a 
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-8 ${isRtl ? 'left-8' : 'right-8'} z-40 bg-[#0B6E4F] text-white p-5 rounded-full shadow-[0_20px_50px_rgba(11,110,79,0.3)] hover:bg-[#085a40] transition-all transform hover:scale-110 active:scale-95 group`}
      aria-label="Contact on WhatsApp"
    >
      <div className={`absolute bottom-full ${isRtl ? 'left-0' : 'right-0'} mb-4 bg-white text-slate-900 text-xs font-black px-4 py-2.5 rounded-2xl shadow-2xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none border border-slate-100 transform translate-y-2 group-hover:translate-y-0`}>
        {isRtl ? 'تواصل معي مباشرة 👋' : 'Direct Line to Broker 👋'}
        <div className={`absolute -bottom-1 ${isRtl ? 'left-6' : 'right-6'} w-3 h-3 bg-white rotate-45 border-b border-r border-slate-100`}></div>
      </div>
      <MessageCircle size={32} />
    </a>
  );
};

export default FloatingWhatsApp;
