
import React, { useState } from 'react';
import { Mail, MessageCircle, ArrowRight, ArrowLeft, Linkedin, Instagram, Globe, CheckCircle, Loader2, Facebook } from 'lucide-react';
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
    // Simulate real-world API latency
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      // Success message stays for context, reset allowed after 6s
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
                <div className="h-px w-8 bg-[#0B6E4F]"></div>
                <span className="text-[#0B6E4F] font-black uppercase tracking-[0.2em] text-xs">{t.badge}</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
                {t.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                {t.text}
              </p>
            </div>

            <div className="space-y-6">
              <a href={CONTACT_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 bg-[#0B6E4F]/5 text-[#0B6E4F] rounded-[2rem] hover:bg-[#0B6E4F] hover:text-white transition-all border border-[#0B6E4F]/10 group">
                <div className="w-16 h-16 bg-[#0B6E4F] text-white rounded-2xl flex items-center justify-center shadow-xl shadow-[#0B6E4F]/20 group-hover:bg-white group-hover:text-[#0B6E4F]">
                  <MessageCircle size={32} />
                </div>
                <div className="flex-grow">
                  <div className="text-[10px] uppercase font-black tracking-widest opacity-60 mb-1">{t.wa}</div>
                  <div className="text-xl font-black" dir="ltr">+(216) {WHATSAPP_NUMBER}</div>
                </div>
                {isRtl ? <ArrowLeft className="transition-transform group-hover:-translate-x-2" size={24} /> : <ArrowRight className="transition-transform group-hover:translate-x-2" size={24} />}
              </a>

              <a href={CONTACT_LINKS.email} className="flex items-center gap-6 p-6 bg-[#1E90FF]/5 text-[#1E90FF] rounded-[2rem] hover:bg-[#1E90FF] hover:text-white transition-all border border-[#1E90FF]/10 group">
                <div className="w-16 h-16 bg-[#1E90FF] text-white rounded-2xl flex items-center justify-center shadow-xl shadow-[#1E90FF]/20 group-hover:bg-white group-hover:text-[#1E90FF]">
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
                    <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-slate-50 text-slate-700 rounded-2xl flex items-center justify-center hover:bg-[#FFD700] hover:text-slate-900 transition-all hover:scale-110 shadow-sm border border-slate-100">
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
                <h4 className="text-3xl font-black text-slate-900">{isRtl ? 'تم الإرسال!' : 'Message Sent!'}</h4>
                <p className="text-slate-600 font-medium">
                  {isRtl ? 'شكراً لتواصلكم. سأرد عليكم في أقرب وقت ممكن.' : 'Thank you for reaching out. I will get back to you shortly.'}
                </p>
                <button onClick={() => setIsSubmitted(false)} className="text-[#0B6E4F] font-bold text-sm uppercase tracking-widest mt-8 underline">
                  {isRtl ? 'إرسال رسالة أخرى' : 'Send another message'}
                </button>
              </div>
            ) : (
              <>
                <h4 className="text-3xl font-extrabold text-slate-900 mb-8">{t.form_title}</h4>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-6 text-start">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500">{t.form_name}</label>
                      <input required type="text" className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-[#0B6E4F]/10 outline-none transition-all font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500">{t.form_type}</label>
                      <select className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-[#0B6E4F]/10 outline-none transition-all font-bold appearance-none">
                        <option>{t.form_p1}</option>
                        <option>{t.form_p2}</option>
                        <option>{t.form_p3}</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2 text-start">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">{t.form_email}</label>
                    <input required type="email" className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-[#0B6E4F]/10 outline-none transition-all font-medium" />
                  </div>
                  <div className="space-y-2 text-start">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">{t.form_msg}</label>
                    <textarea required rows={4} className="w-full px-6 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-[#0B6E4F]/10 outline-none transition-all font-medium resize-none"></textarea>
                  </div>
                  <button 
                    disabled={isSending}
                    type="submit" 
                    className="w-full bg-[#0B6E4F] text-white font-black py-5 rounded-2xl hover:bg-[#085a40] transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-[#0B6E4F]/30 uppercase tracking-[0.2em] text-sm active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
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
