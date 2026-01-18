
import React, { useState } from 'react';
import { Mail, MessageCircle, ArrowRight, ArrowLeft, Linkedin, Instagram, MapPin, CheckCircle, Loader2, Facebook } from 'lucide-react';
import { WHATSAPP_NUMBER, EMAIL_ADDRESS, CONTACT_LINKS } from '../constants';
import { Language } from '../translations';

interface ContactProps {
  t: any;
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ t, lang }) => {
  const isRtl = lang === 'ar';
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#1e3a8a]"></div>
                <span className="text-[#1e3a8a] font-black uppercase tracking-[0.2em] text-xs">{t.badge}</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
                {t.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                {t.text}
              </p>
            </div>

            <div className="space-y-6">
              <a href={CONTACT_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 bg-blue-50 text-[#1e3a8a] rounded-[2rem] hover:bg-[#1e3a8a] hover:text-white transition-all border border-blue-100 group">
                <div className="w-16 h-16 bg-[#1e3a8a] text-white rounded-2xl flex items-center justify-center shadow-xl shadow-blue-900/20 group-hover:bg-white group-hover:text-[#1e3a8a]">
                  <MessageCircle size={32} />
                </div>
                <div className="flex-grow">
                  <div className="text-[10px] uppercase font-black tracking-widest opacity-60 mb-1">{t.wa}</div>
                  <div className="text-xl font-black" dir="ltr">+(216) {WHATSAPP_NUMBER}</div>
                </div>
                {isRtl ? <ArrowLeft className="transition-transform group-hover:-translate-x-2" size={24} /> : <ArrowRight className="transition-transform group-hover:translate-x-2" size={24} />}
              </a>

              <a href={CONTACT_LINKS.email} className="flex items-center gap-6 p-6 bg-slate-50 text-slate-700 rounded-[2rem] hover:bg-slate-900 hover:text-white transition-all border border-slate-100 group">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-slate-900/20 group-hover:bg-white group-hover:text-slate-900">
                  <Mail size={32} />
                </div>
                <div className="flex-grow">
                  <div className="text-[10px] uppercase font-black tracking-widest opacity-60 mb-1">{t.email}</div>
                  <div className="text-xl font-black">{EMAIL_ADDRESS}</div>
                </div>
                {isRtl ? <ArrowLeft className="transition-transform group-hover:-translate-x-2" size={24} /> : <ArrowRight className="transition-transform group-hover:translate-x-2" size={24} />}
              </a>
            </div>

            <div className="pt-10">
               <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">{t.social}</p>
               <div className="flex gap-4 rtl:flex-row-reverse rtl:justify-end">
                  {[
                    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: CONTACT_LINKS.linkedin },
                    { icon: <Instagram size={20} />, label: 'Instagram', href: CONTACT_LINKS.instagram },
                    { icon: <Facebook size={20} />, label: 'Facebook', href: CONTACT_LINKS.facebook }
                  ].map((social) => (
                    <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-slate-50 text-slate-700 rounded-2xl flex items-center justify-center hover:bg-[#f97316] hover:text-white transition-all hover:scale-110 shadow-sm border border-slate-100">
                      {social.icon}
                    </a>
                  ))}
                </div>
            </div>
          </div>

          <div className="bg-slate-50 p-10 lg:p-12 rounded-[3rem] border border-slate-100 shadow-xl relative overflow-hidden">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-emerald-100 text-[#0B6E4F] rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={48} />
                </div>
                <h4 className="text-3xl font-black text-slate-900">{isRtl ? 'تم الإرسال!' : 'Demande reçue !'}</h4>
                <p className="text-slate-600 font-medium">
                  {isRtl ? 'شكراً لتواصلكم. سأرد عليكم في أقرب وقت ممكن.' : 'Nous analysons votre demande. Un coordinateur vous contactera sous 30 minutes.'}
                </p>
                <button onClick={() => setIsSubmitted(false)} className="text-[#1e3a8a] font-bold text-sm uppercase tracking-widest mt-8 underline">
                  {isRtl ? 'إرسال رسالة أخرى' : 'Nouvelle demande'}
                </button>
              </div>
            ) : (
              <>
                <h4 className="text-3xl font-extrabold text-slate-900 mb-8">{t.form_title}</h4>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-6 text-start">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500">{t.form_name}</label>
                      <input placeholder="Société X" required type="text" className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500">{t.form_type}</label>
                      <select className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold appearance-none">
                        <option>{t.form_p1}</option>
                        <option>{t.form_p2}</option>
                        <option>{t.form_p3}</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6 text-start">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500">Origine (Lieu)</label>
                      <div className="relative">
                        <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        <input placeholder="Ex: Sfax" required type="text" className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500">Destination (Lieu)</label>
                      <div className="relative">
                        <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        <input placeholder="Ex: Tunis" required type="text" className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-start">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">{t.form_email}</label>
                    <input required type="email" className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium" />
                  </div>
                  <div className="space-y-2 text-start">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">{t.form_msg}</label>
                    <textarea placeholder="Poids, volume, date souhaitée..." required rows={3} className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium resize-none"></textarea>
                  </div>
                  <button 
                    disabled={isSending}
                    type="submit" 
                    className="w-full bg-[#1e3a8a] text-white font-black py-5 rounded-2xl hover:bg-[#172554] transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-blue-900/30 uppercase tracking-[0.2em] text-sm active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSending ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <>
                        {t.form_btn}
                        {isRtl ? <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" /> : <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />}
                      </>
                    )}
                  </button>
                </form>
                <p className="text-[10px] text-slate-400 text-center mt-6 font-bold uppercase tracking-widest">
                  {t.form_footer}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
