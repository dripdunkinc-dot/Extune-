
export type Language = 'en' | 'fr' | 'ar';

export const translations = {
  en: {
    nav: { home: 'Home', about: 'About', products: 'Products', process: 'Process', contact: 'Contact', contactBtn: 'Contact Me' },
    hero: {
      badge: 'EXTUNE EXPORT SOLUTIONS',
      title: 'Connecting Tunisian Producers with International Buyers 🌍',
      subtext: 'Commission-based, risk-free export brokerage for your products.',
      cta: 'Contact Me on WhatsApp',
      secondaryCta: 'View Top Exports',
      features: ['Commission Only', 'Zero Risk', 'ExTune Certified']
    },
    about: {
      badge: 'Who I Am',
      title: 'Your Trusted Bridge to Global Markets',
      text: 'I am a professional export broker based in Tunisia. I help local producers connect with trusted international buyers through a streamlined and professional process. I work on a commission basis only — no upfront cost.',
      quote: "Making exporting simple, safe, and profitable for Tunisia's finest.",
      f1_title: 'Performance Driven',
      f1_text: 'I work on a commission basis only. You pay nothing upfront, ensuring our goals are perfectly aligned.',
      f2_title: 'Safe & Secure',
      f2_text: 'I minimize risk by vetting every international buyer and ensuring all documentation meets global standards.',
      more: 'Learn How It Works'
    },
    products: {
      badge: 'Certified Exports',
      title: 'ExTune Specialties',
      subtext: 'Every product in our portfolio is vetted for international quality standards.',
      items: [
        { name: 'Olive Oil', desc: 'Premium, extra virgin, bulk or packaged.', tag: 'Liquid Gold', fob: 'Competitive' },
        { name: 'Dates', desc: 'Deglet Nour, export-ready high quality.', tag: 'Fresh', fob: 'Premium' },
        { name: 'Handicrafts', desc: 'Ceramics, rugs, leather goods.', tag: 'Artisanal', fob: 'Custom' },
        { name: 'Marble / Stone', desc: 'Premium slabs and blocks.', tag: 'Natural', fob: 'Wholesale' }
      ],
      partner_title: 'Represent Your Brand Globally',
      partner_text: 'We are actively expanding our network of premium Tunisian producers.',
      partner_cta: 'Get Listed'
    },
    process: {
      badge: 'The Roadmap',
      title: 'How Export Brokerage Works',
      subtext: 'A transparent and results-driven process that eliminates risk.',
      steps: [
        { title: 'Contact', desc: 'You contact me with your product or buyer requirements.' },
        { title: 'Connect', desc: 'I match Tunisian suppliers with verified international buyers.' },
        { title: 'Commission', desc: 'Receive commission only after successful shipment.' }
      ],
      note: 'Risk-Free Transparency',
      note_text: 'I serve as a facilitator. All shipping logistics and financial transfers occur directly between the producer and the buyer.',
      start_cta: 'Get Started Now'
    },
    testimonials: {
      badge: 'Trust & Results',
      title: 'Success Stories',
      subtext: 'Building global trust by connecting excellence with international opportunity.',
      items: [
        { text: 'Successfully connected an olive oil producer with a French buyer ✅', author: 'Recent Success' },
        { text: 'Brokeraged a shipment of high-end ceramics for a boutique hotel in Dubai ✅', author: 'Recent Success' }
      ],
      badges: ['Verified Broker', 'Zero Risk Partner', 'Global Network']
    },
    contact: {
      badge: "Let's Talk",
      title: 'Start Your Export Journey Today',
      text: 'Start exporting your products to international buyers — commission-based, risk-free.',
      wa: 'Direct WhatsApp',
      email: 'Professional Email',
      social: 'Social Networks',
      form_title: 'Send an Inquiry',
      form_name: 'Full Name',
      form_type: 'Partner Type',
      form_p1: 'I am a Producer',
      form_p2: 'I am a Buyer',
      form_p3: 'General Inquiry',
      form_email: 'Email Address',
      form_msg: 'Message Detail',
      form_btn: 'Send Message',
      form_footer: 'Secure Submission • Professional Handling'
    },
    footer: {
      subtext: 'ExTune: Leading the way in connecting Tunisian agricultural and artisanal excellence with the world’s most demanding markets.',
      nav: 'Navigation',
      info: 'Information',
      copyright: '© 2026 ExTune Brokerage • Tuning Exports to Perfection'
    }
  },
  fr: {
    nav: { home: 'Accueil', about: 'À Propos', products: 'Produits', process: 'Processus', contact: 'Contact', contactBtn: 'Contactez-moi' },
    hero: {
      badge: 'EXTUNE SOLUTIONS D’EXPORTATION',
      title: 'Connecter les producteurs tunisiens avec des acheteurs internationaux 🌍',
      subtext: 'Courtage en exportation sans risque, rémunéré uniquement à la commission.',
      cta: 'Contactez-moi sur WhatsApp',
      secondaryCta: 'Voir les exportations',
      features: ['Commission Uniquement', 'Zéro Risque', 'Certifié ExTune']
    },
    about: {
      badge: 'Qui je suis',
      title: 'Votre pont de confiance vers les marchés mondiaux',
      text: 'Je suis un courtier en exportation professionnel basé en Tunisie. J’aide les producteurs locaux à se connecter avec des acheteurs internationaux de confiance. Je travaille uniquement à la commission — aucun frais initial.',
      quote: "Rendre l'exportation simple, sûre et rentable pour les meilleurs de Tunisie.",
      f1_title: 'Axé sur la Performance',
      f1_text: 'Je travaille uniquement à la commission. Vous ne payez rien à l\'avance, garantissant que nos objectifs sont alignés.',
      f2_title: 'Sûr & Sécurisé',
      f2_text: 'Je minimise les risques en vérifiant chaque acheteur international et en m’assurant que toute la documentation est conforme.',
      more: 'Comment ça marche'
    },
    products: {
      badge: 'Exportations Certifiées',
      title: 'Spécialités ExTune',
      subtext: 'Chaque produit de notre portefeuille est contrôlé selon les normes de qualité internationales.',
      items: [
        { name: 'Huile d’Olive', desc: 'Premium, extra vierge, en vrac ou emballée.', tag: 'Or Liquide', fob: 'Compétitif' },
        { name: 'Dattes', desc: 'Deglet Nour, de haute qualité prête à l’export.', tag: 'Frais', fob: 'Premium' },
        { name: 'Artisanat', desc: 'Céramiques, tapis, articles en cuir.', tag: 'Artisanal', fob: 'Sur mesure' },
        { name: 'Marbre / Pierre', desc: 'Dalles et blocs de première qualité.', tag: 'Naturel', fob: 'Vente en gros' }
      ],
      partner_title: 'Représentez votre marque à l’échelle mondiale',
      partner_text: 'Nous élargissons activement notre réseau de producteurs tunisiens haut de gamme.',
      partner_cta: 'Être Référencé'
    },
    process: {
      badge: 'La Feuille de Route',
      title: 'Comment fonctionne le courtage',
      subtext: 'Un processus transparent et axé sur les résultats qui élimine les risques.',
      steps: [
        { title: 'Contact', desc: 'Vous me contactez avec vos besoins en produits ou acheteurs.' },
        { title: 'Connexion', desc: 'Je mets en relation les fournisseurs tunisiens avec des acheteurs vérifiés.' },
        { title: 'Commission', desc: 'Recevez une commission uniquement après l\'expédition réussie.' }
      ],
      note: 'Transparence sans risque',
      note_text: 'Je sers de facilitateur. Toute la logistique d\'expédition et les transferts financiers s\'effectuent directement entre le producteur et l\'acheteur.',
      start_cta: 'Commencer maintenant'
    },
    testimonials: {
      badge: 'Confiance & Résultats',
      title: 'Témoignages',
      subtext: 'Bâtir une confiance mondiale en connectant l\'excellence aux opportunités internationales.',
      items: [
        { text: 'Mise en relation réussie d’un producteur d’huile d’olive avec un acheteur français ✅', author: 'Succès Récent' },
        { text: 'Expédition de céramiques haut de gamme pour un hôtel boutique à Dubaï ✅', author: 'Succès Récent' }
      ],
      badges: ['Courtier Vérifié', 'Partenaire Sans Risque', 'Réseau Mondial']
    },
    contact: {
      badge: "Discutons",
      title: 'Commencez votre voyage d\'exportation aujourd\'hui',
      text: 'Commencez à exporter vos produits vers des acheteurs internationaux — rémunération à la commission, sans risque.',
      wa: 'WhatsApp Direct',
      email: 'Email Professionnel',
      social: 'Réseaux Sociaux',
      form_title: 'Envoyer une demande',
      form_name: 'Nom Complet',
      form_type: 'Type de Partenaire',
      form_p1: 'Je suis un Producteur',
      form_p2: 'Je suis un Acheteur',
      form_p3: 'Demande Générale',
      form_email: 'Adresse Email',
      form_msg: 'Détails du message',
      form_btn: 'Envoyer le message',
      form_footer: 'Envoi Sécurisé • Traitement Professionnel'
    },
    footer: {
      subtext: 'ExTune : À l\'avant-garde de la connexion de l\'excellence agricole et artisanale tunisienne aux marchés mondiaux.',
      nav: 'Navigation',
      info: 'Information',
      copyright: '© 2026 Courtage ExTune • L\'exportation à la perfection'
    }
  },
  ar: {
    nav: { home: 'الرئيسية', about: 'من نحن', products: 'المنتجات', process: 'كيف نعمل', contact: 'اتصل بنا', contactBtn: 'اتصل بي' },
    hero: {
      badge: 'إكس تيون لحلول التصدير',
      title: 'ربط المنتجين التونسيين بالمشترين الدوليين 🌍',
      subtext: 'وساطة تصدير بنظام العمولة وبدون مخاطر لمنتجاتك.',
      cta: 'تواصل معي عبر واتساب',
      secondaryCta: 'عرض أهم الصادرات',
      features: ['عمولة فقط', 'بدون مخاطر', 'معتمد من إكس تيون']
    },
    about: {
      badge: 'من أنا',
      title: 'جسركم الموثوق نحو الأسواق العالمية',
      text: 'أنا وسيط تصدير محترف مقيم في تونس. أساعد المنتجين المحليين على التواصل مع مشترين دوليين موثوقين من خلال عملية مبسطة واحترافية. أعمل بنظام العمولة فقط - لا توجد تكلفة مسبقة.',
      quote: "جعل التصدير بسيطاً وآمناً ومربحاً لأفضل المنتجات التونسية.",
      f1_title: 'مدفوع بالأداء',
      f1_text: 'أعمل بنظام العمولة فقط. لا تدفع شيئاً مقدماً، مما يضمن توافق أهدافنا تماماً.',
      f2_title: 'آمن ومضمون',
      f2_text: 'أقلل المخاطر من خلال فحص كل مشترٍ دولي والتأكد من استيفاء جميع الوثائق للمعايير العالمية.',
      more: 'تعرف على كيفية عملنا'
    },
    products: {
      badge: 'صادرات معتمدة',
      title: 'تخصصات إكس تيون',
      subtext: 'يتم فحص كل منتج في محفظتنا وفقاً لمعايير الجودة الدولية.',
      items: [
        { name: 'زيت زيتون', desc: 'ممتاز، بكر، بالجملة أو معبأ.', tag: 'الذهب السائل', fob: 'تنافسي' },
        { name: 'تمور', desc: 'دقلة نور جاهزة للتصدير بجودة عالية.', tag: 'طازج', fob: 'ممتاز' },
        { name: 'الحرف اليدوية', desc: 'خزف، سجاد، منتجات جلدية.', tag: 'حرفي', fob: 'مخصص' },
        { name: 'الرخام / الحجر', desc: 'ألواح وكتل فاخرة من الرخام التونسي.', tag: 'طبيعي', fob: 'بالجملة' }
      ],
      partner_title: 'مثل علامتك التجارية عالمياً',
      partner_text: 'نحن نعمل بنشاط على توسيع شبكتنا من المنتجين التونسيين المتميزين.',
      partner_cta: 'انضم إلينا'
    },
    process: {
      badge: 'خارطة الطريق',
      title: 'كيف يعمل وسيط التصدير',
      subtext: 'عملية شفافة ونتائج ملموسة تقضي على المخاطر.',
      steps: [
        { title: 'الاتصال', desc: 'تتواصل معي بمتطلبات منتجك أو المشتري.' },
        { title: 'الربط', desc: 'أقوم بربط الموردين التونسيين مع مشترين دوليين موثوقين.' },
        { title: 'العمولة', desc: 'أحصل على العمولة فقط بعد نجاح عملية الشحن.' }
      ],
      note: 'شفافية بدون مخاطر',
      note_text: 'أعمل كميسر للعملية. تتم جميع اللوجستيات والتحويلات المالية مباشرة بين المنتج والمشتري.',
      start_cta: 'ابدأ الآن'
    },
    testimonials: {
      badge: 'الثقة والنتائج',
      title: 'قصص النجاح',
      subtext: 'بناء ثقة عالمية من خلال ربط التميز بالفرص الدولية.',
      items: [
        { text: 'ربط ناجح بين منتج زيت زيتون ومشتري فرنسي ✅', author: 'نجاح حديث' },
        { text: 'توسط في شحن صناعات تقليدية فاخرة لفندق في دبي ✅', author: 'نجاح حديث' }
      ],
      badges: ['وسيط معتمد', 'شريك بدون مخاطر', 'شبكة عالمية']
    },
    contact: {
      badge: "دعنا نتحدث",
      title: 'ابدأ رحلة التصدير اليوم',
      text: 'ابدأ في تصدير منتجاتك للمشترين الدوليين - بنظام العمولة، وبدون مخاطر.',
      wa: 'واتساب مباشر',
      email: 'بريد مهني',
      social: 'شبكات التواصل',
      form_title: 'أرسل استفسارك',
      form_name: 'الاسم الكامل',
      form_type: 'نوع الشريك',
      form_p1: 'أنا منتج',
      form_p2: 'أنا مشترٍ',
      form_p3: 'استفسار عام',
      form_email: 'البريد الإلكتروني',
      form_msg: 'تفاصيل الرسالة',
      form_btn: 'إرسال الرسالة',
      form_footer: 'إرسال آمن • معالجة احترافية'
    },
    footer: {
      subtext: 'إكس تيون: رائدة في ربط التميز الزراعي والحرفي التونسي بالأسواق العالمية الأكثر تطلباً.',
      nav: 'التنقل',
      info: 'المعلومات',
      copyright: '© 2026 وساطة إكس تيون • إتقان التصدير'
    }
  }
};
