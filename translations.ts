
export type Language = 'en' | 'fr' | 'ar';

export const translations = {
  fr: {
    nav: { home: 'Accueil', about: 'À Propos', products: 'Services', process: 'Fonctionnement', contact: 'Devis', contactBtn: 'Demander un Devis' },
    hero: {
      badge: 'COORDINATION DE TRANSPORT TUNISIE',
      title: 'Courtage de Fret Fiable & Coordination de Transport 🚛',
      subtext: 'Nous connectons vos marchandises avec des transporteurs vérifiés — rapide, fiable et économique partout en Tunisie.',
      cta: 'Devis via WhatsApp',
      secondaryCta: 'Nos Services',
      features: ['Transporteurs Vérifiés', 'Zéro Frais Cachés', 'Suivi de Cargaison']
    },
    about: {
      badge: 'Qui sommes-nous',
      title: 'Votre Partenaire Logistique Stratégique',
      text: 'ExTune est un intermédiaire de transport basé en Tunisie. Nous facilitons la logistique en connectant les entreprises ayant des besoins d\'expédition avec un réseau de transporteurs qualifiés. Nous optimisons vos coûts sans posséder de flotte propre.',
      quote: "Simplifier la logistique tunisienne en connectant l'offre et la demande avec précision.",
      f1_title: 'Optimisation des Coûts',
      f1_text: 'Nous négocions les meilleurs tarifs auprès de nos partenaires transporteurs pour maximiser votre rentabilité.',
      f2_title: 'Réseau Vérifié',
      f2_text: 'Chaque transporteur et chauffeur est rigoureusement contrôlé pour garantir la sécurité de vos marchandises.',
      more: 'Découvrir notre processus'
    },
    products: {
      badge: 'Nos Expertises',
      title: 'Solutions de Coordination',
      subtext: 'Nous gérons l\'intermédiation pour tous types de besoins logistiques sur le territoire.',
      items: [
        { name: 'Fret Local', desc: 'Coordination complète pour vos transports à l\'intérieur de la Tunisie.', tag: 'National', fob: 'Rapide' },
        { name: 'Fret Régional', desc: 'Coordination Tunisie ↔ pays voisins (Libye, Algérie).', tag: 'Frontière', fob: 'Expert' },
        { name: 'Sourcing Camions', desc: 'Recherche urgente de véhicules spécifiques (Plateaux, Frigo, Rideaux).', tag: 'Sur Mesure', fob: 'Flexible' },
        { name: 'Suivi de Flux', desc: 'Coordination et suivi opérationnel entre expéditeur et transporteur.', tag: 'Gestion', fob: 'Dédié' }
      ],
      partner_title: 'Devenir un Transporteur Partenaire',
      partner_text: 'Vous possédez des camions ? Rejoignez notre réseau pour recevoir des ordres de transport réguliers.',
      partner_cta: 'S\'inscrire'
    },
    process: {
      badge: 'Le Processus',
      title: 'Comment ça marche ?',
      subtext: 'Une méthode transparente pour une coordination sans faille.',
      steps: [
        { title: 'Demande', desc: 'Vous soumettez les détails de votre cargaison (Lieu, Poids, Type).' },
        { title: 'Sourcing', desc: 'Nous trouvons le transporteur le plus adapté au meilleur prix.' },
        { title: 'Validation', desc: 'Confirmation du prix, du véhicule et de l\'horaire de chargement.' },
        { title: 'Exécution', desc: 'Suivi opérationnel jusqu\'à la livraison finale.' }
      ],
      note: 'Note de Transparence',
      note_text: 'ExTune agit en tant qu\'intermédiaire coordinateur. Le transport effectif est réalisé par des entreprises de transport partenaires agréées.',
      start_cta: 'Démarrer une expédition'
    },
    testimonials: {
      badge: 'Fiabilité',
      title: 'Ils nous font confiance',
      subtext: 'Des entreprises tunisiennes qui optimisent leur logistique avec ExTune.',
      items: [
        { text: 'ExTune a trouvé un camion plateau en moins de 2 heures pour notre usine à Sfax. ✅', author: 'Directeur Logistique' },
        { text: 'Coordination impeccable pour nos livraisons hebdomadaires vers Tunis. ✅', author: 'Gérant PME' }
      ],
      badges: ['Courtier Agréé', 'Coordination Rapide', 'Réseau National']
    },
    contact: {
      badge: "Contact & Devis",
      title: 'Obtenez un prix pour votre transport',
      text: 'Réponse rapide garantie. Nos conseillers sont prêts à coordonner votre prochaine expédition.',
      wa: 'WhatsApp Direct',
      email: 'Email Logistique',
      social: 'Réseaux Sociaux',
      form_title: 'Demander un Devis Gratuit',
      form_name: 'Nom de l\'entreprise',
      form_type: 'Type de Marchandise',
      form_p1: 'Produits Industriels',
      form_p2: 'Produits Agroalimentaires',
      form_p3: 'Matériaux de Construction',
      form_email: 'Email de Contact',
      form_msg: 'Détails (Origine → Destination, Poids/Volume)',
      form_btn: 'Envoyer la demande',
      form_footer: 'Traitement professionnel • Devis sous 30 minutes'
    },
    footer: {
      subtext: 'ExTune : Leader de la coordination logistique en Tunisie. Nous connectons vos besoins aux meilleures solutions de transport.',
      nav: 'Navigation',
      info: 'Informations',
      copyright: '© 2026 ExTune Logistique • La logistique simplifiée'
    }
  },
  en: {
    nav: { home: 'Home', about: 'About', products: 'Services', process: 'How It Works', contact: 'Quote', contactBtn: 'Get a Quote' },
    hero: {
      badge: 'TUNISIA FREIGHT COORDINATION',
      title: 'Reliable Freight Brokerage & Transport Coordination 🚛',
      subtext: 'We connect your shipment with verified carriers — fast, reliable, and cost-effective across Tunisia.',
      cta: 'Quote via WhatsApp',
      secondaryCta: 'Our Services',
      features: ['Verified Carriers', 'Zero Hidden Fees', 'Shipment Tracking']
    },
    about: {
      badge: 'Who We Are',
      title: 'Your Strategic Logistics Partner',
      text: 'ExTune is a freight intermediary based in Tunisia. We facilitate logistics by connecting companies with shipping needs to a network of qualified carriers. We optimize your costs without owning our own fleet.',
      quote: "Simplifying Tunisian logistics by connecting supply and demand with precision.",
      f1_title: 'Cost Optimization',
      f1_text: 'We negotiate the best rates from our carrier partners to maximize your profitability.',
      f2_title: 'Verified Network',
      f2_text: 'Every carrier and driver is rigorously screened to ensure the safety of your goods.',
      more: 'Discover our process'
    },
    products: {
      badge: 'Our Expertise',
      title: 'Coordination Solutions',
      subtext: 'We manage mediation for all types of logistical needs on the territory.',
      items: [
        { name: 'Local Freight', desc: 'Full coordination for your transport inside Tunisia.', tag: 'National', fob: 'Fast' },
        { name: 'Regional Freight', desc: 'Coordination Tunisia ↔ neighboring countries (Libya, Algeria).', tag: 'Border', fob: 'Expert' },
        { name: 'Truck Sourcing', desc: 'Urgent search for specific vehicles (Flatbeds, Reefer, Curtains).', tag: 'Custom', fob: 'Flexible' },
        { name: 'Flow Management', desc: 'Operational coordination and tracking between shipper and carrier.', tag: 'Management', fob: 'Dedicated' }
      ],
      partner_title: 'Become a Partner Carrier',
      partner_text: 'Do you own trucks? Join our network to receive regular transport orders.',
      partner_cta: 'Sign Up'
    },
    process: {
      badge: 'The Roadmap',
      title: 'How It Works',
      subtext: 'A transparent method for flawless coordination.',
      steps: [
        { title: 'Inquiry', desc: 'Submit your cargo details (Location, Weight, Type).' },
        { title: 'Sourcing', desc: 'We find the most suitable carrier at the best price.' },
        { title: 'Confirmation', desc: 'Price, vehicle, and loading schedule confirmation.' },
        { title: 'Execution', desc: 'Operational tracking until final delivery.' }
      ],
      note: 'Transparency Note',
      note_text: 'ExTune acts as a coordinating intermediary. Actual transport is carried out by authorized partner transport companies.',
      start_cta: 'Start a shipment'
    },
    testimonials: {
      badge: 'Reliability',
      title: 'Success Stories',
      subtext: 'Tunisian companies optimizing their logistics with ExTune.',
      items: [
        { text: 'ExTune found a flatbed truck in less than 2 hours for our factory in Sfax. ✅', author: 'Logistics Director' },
        { text: 'Impeccable coordination for our weekly deliveries to Tunis. ✅', author: 'SME Manager' }
      ],
      badges: ['Licensed Broker', 'Fast Coordination', 'National Network']
    },
    contact: {
      badge: "Contact & Quote",
      title: 'Get a price for your transport',
      text: 'Fast response guaranteed. Our advisors are ready to coordinate your next shipment.',
      wa: 'Direct WhatsApp',
      email: 'Logistics Email',
      social: 'Social Networks',
      form_title: 'Request a Free Quote',
      form_name: 'Company Name',
      form_type: 'Cargo Type',
      form_p1: 'Industrial Products',
      form_p2: 'Food & Beverage',
      form_p3: 'Construction Materials',
      form_email: 'Contact Email',
      form_msg: 'Details (Origin → Destination, Weight/Volume)',
      form_btn: 'Send Request',
      form_footer: 'Professional Handling • Quote under 30 mins'
    },
    footer: {
      subtext: 'ExTune: Leader in logistics coordination in Tunisia. We connect your needs to the best transport solutions.',
      nav: 'Navigation',
      info: 'Information',
      copyright: '© 2026 ExTune Logistics • Logistics Simplified'
    }
  },
  ar: {
    nav: { home: 'الرئيسية', about: 'من نحن', products: 'خدماتنا', process: 'كيف نعمل', contact: 'طلب سعر', contactBtn: 'طلب تسعيرة' },
    hero: {
      badge: 'تنسيق النقل في تونس',
      title: 'وساطة شحن موثوقة وتنسيق نقل 🚛',
      subtext: 'نربط بضائعكم مع ناقلين معتمدين — بسرعة، موثوقية وتكلفة اقتصادية في جميع أنحاء تونس.',
      cta: 'تسعيرة عبر واتساب',
      secondaryCta: 'خدماتنا',
      features: ['ناقلون معتمدون', 'بدون رسوم خفية', 'تتبع الشحنات']
    },
    about: {
      badge: 'من نحن',
      title: 'شريككم اللوجستي الاستراتيجي',
      text: 'إكس تيون هي وسيط نقل مقرها تونس. نحن نسهل العمليات اللوجستية من خلال ربط الشركات التي لديها احتياجات شحن بشبكة من الناقلين المؤهلين. نقوم بتحسين تكاليفكم دون امتلاك أسطول خاص.',
      quote: "تبسيط اللوجستيات التونسية من خلال ربط العرض والطلب بدقة.",
      f1_title: 'تحسين التكاليف',
      f1_text: 'نتفاوض على أفضل الأسعار مع شركائنا الناقلين لزيادة ربحيتكم.',
      f2_title: 'شبكة معتمدة',
      f2_text: 'يتم فحص كل ناقل وسائق بدقة لضمان سلامة بضائعكم.',
      more: 'اكتشف طريقة عملنا'
    },
    products: {
      badge: 'خبراتنا',
      title: 'حلول التنسيق',
      subtext: 'ندير الوساطة لجميع أنواع الاحتياجات اللوجستية على التراب الوطني.',
      items: [
        { name: 'شحن محلي', desc: 'تنسيق كامل لنقل بضائعكم داخل تونس.', tag: 'وطني', fob: 'سريع' },
        { name: 'شحن إقليمي', desc: 'تنسيق بين تونس والدول المجاورة (ليبيا، الجزائر).', tag: 'حدودي', fob: 'خبير' },
        { name: 'توفير الشاحنات', desc: 'البحث السريع عن مركبات خاصة (سطحة، مبرد، ستائر).', tag: 'حسب الطلب', fob: 'مرن' },
        { name: 'إدارة التدفقات', desc: 'التنسيق العملياتي والمتابعة بين الشاحن والناقل.', tag: 'إدارة', fob: 'مخصص' }
      ],
      partner_title: 'كن ناقلاً شريكاً',
      partner_text: 'هل تملك شاحنات؟ انضم إلى شبكتنا لتلقي طلبات نقل منتظمة.',
      partner_cta: 'تسجيل'
    },
    process: {
      badge: 'خارطة الطريق',
      title: 'كيف تعمل العملية؟',
      subtext: 'طريقة شفافة لتنسيق مثالي.',
      steps: [
        { title: 'الطلب', desc: 'تقدم تفاصيل شحنتك (الموقع، الوزن، النوع).' },
        { title: 'البحث', desc: 'نجد الناقل الأنسب بأفضل سعر متاح.' },
        { title: 'التأكيد', desc: 'تأكيد السعر، المركبة، وجدول التحميل.' },
        { title: 'التنفيذ', desc: 'المتابعة العملياتية حتى التسليم النهائي.' }
      ],
      note: 'ملاحظة الشفافية',
      note_text: 'تعمل إكس تيون كوسيط منسق. يتم النقل الفعلي من قبل شركات نقل شريكة مرخصة.',
      start_cta: 'ابدأ شحنة الآن'
    },
    testimonials: {
      badge: 'الموثوقية',
      title: 'قصص نجاح',
      subtext: 'شركات تونسية تحسن لوجستياتها مع إكس تيون.',
      items: [
        { text: 'وجدت إكس تيون شاحنة في أقل من ساعتين لمصنعنا في صفاقس. ✅', author: 'مدير لوجستي' },
        { text: 'تنسيق ممتاز لتوصيلاتنا الأسبوعية إلى تونس. ✅', author: 'مدير شركة' }
      ],
      badges: ['وسيط مرخص', 'تنسيق سريع', 'شبكة وطنية']
    },
    contact: {
      badge: "الاتصال والسعر",
      title: 'احصل على سعر لنقلك',
      text: 'رد سريع مضمون. مستشارونا مستعدون لتنسيق شحنتك القادمة.',
      wa: 'واتساب مباشر',
      email: 'بريد لوجستي',
      social: 'شبكات التواصل',
      form_title: 'طلب تسعيرة مجانية',
      form_name: 'اسم الشركة',
      form_type: 'نوع البضاعة',
      form_p1: 'منتجات صناعية',
      form_p2: 'منتجات غذائية',
      form_p3: 'مواد بناء',
      form_email: 'البريد الإلكتروني',
      form_msg: 'التفاصيل (المنطلق ← الوجهة، الوزن/الحجم)',
      form_btn: 'إرسال الطلب',
      form_footer: 'معالجة احترافية • تسعيرة في أقل من 30 دقيقة'
    },
    footer: {
      subtext: 'إكس تيون: الرائدة في تنسيق اللوجستيات في تونس. نربط احتياجاتكم بأفضل حلول النقل.',
      nav: 'التنقل',
      info: 'المعلومات',
      copyright: '© 2026 إكس تيون لوجستيك • اللوجستيات ببساطة'
    }
  }
};
