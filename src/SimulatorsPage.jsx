import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Plane, ShieldCheck, Award, Clock, Users, Globe,
  ChevronRight, ArrowLeft, Target, BookOpen,
  MapPin, Phone, Mail, UserCheck, Monitor,
  ClipboardList, Crosshair, Wrench, Settings,
  Calendar, Layers, FileText, Instagram, Facebook, Linkedin
} from 'lucide-react';
import { Navbar } from './App.jsx';
import { useLanguage } from './i18n/LanguageContext';

// ── SEO Head Manager ───────────────────────────────────────────────────────────
const SimulatorSEO = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // Title
    document.title = t('sim.seo.title');

    // Meta description
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) { desc = document.createElement('meta'); desc.name = 'description'; document.head.appendChild(desc); }
    desc.content = t('sim.seo.desc');

    // OG Tags
    const og = { 
      'og:title': t('sim.seo.og_title'), 
      'og:description': t('sim.seo.og_desc'), 
      'og:image': 'https://pablo1591moreno.github.io/BairesJet/simulator-cockpit.png', 
      'og:url': 'https://pablo1591moreno.github.io/BairesJet/simuladores' 
    };
    Object.entries(og).forEach(([prop, content]) => {
      let tag = document.querySelector(`meta[property="${prop}"]`);
      if (!tag) { tag = document.createElement('meta'); tag.setAttribute('property', prop); document.head.appendChild(tag); }
      tag.content = content;
    });

    // JSON-LD
    const existing = document.getElementById('simulator-jsonld');
    if (existing) existing.remove();
    const script = document.createElement('script');
    script.id = 'simulator-jsonld';
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "EducationalOrganization",
          "name": "Baires Global Jets Training Center",
          "description": t('sim.seo.json_desc'),
          "url": "https://pablo1591moreno.github.io/BairesJet/simuladores",
          "telephone": "+54-9-11-7374-5726",
          "email": "info@bairesglobaljets.com.ar",
          "address": { "@type": "PostalAddress", "addressLocality": "Buenos Aires", "addressCountry": "AR" },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": t('sim.header.title'),
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Boeing 737 NG Type Rating / Systems", "description": t('sim.teoricos.b737_desc') } },
              { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "King Air B200 Type Rating / Systems", "description": t('sim.teoricos.ka_desc') } },
              { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Multi Crew Cooperation (MCC)", "description": t('sim.teoricos.mcc_desc') } },
              { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Jet Orientation Course (JOC)", "description": t('sim.teoricos.joc_desc') } },
              { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Crew Resource Management (CRM)", "description": t('sim.teoricos.crm_desc') } }
            ]
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿Qué simuladores de vuelo tienen disponibles? / Which flight simulators are available?", "acceptedAnswer": { "@type": "Answer", "text": "Boeing 737 NG & Beechcraft King Air B200 FSTD (Flight Simulation Training Devices) en Buenos Aires, Argentina." } },
            { "@type": "Question", "name": "¿Ofrecen entrenamiento IFR y preparación para aerolíneas? / Do you offer IFR and Airline Preparation?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, nuestros programas incluyen entrenamiento IFR, cursos MCC, JOC y preparación intensiva (Airline Preparation) enfocada en estándares SOP comerciales." } }
          ]
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.title = 'Baires Global Jets | Alquiler de Jets Privados y Vuelos Chárter en Argentina';
      const s = document.getElementById('simulator-jsonld');
      if (s) s.remove();
    };
  }, [t]);
  return null;
};

// ── Reusable Components ────────────────────────────────────────────────────────
const Section = ({ children, id, bg = 'bg-white', className = '' }) => (
  <section id={id} className={`${bg} ${className} py-16 md:py-24`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

const SectionLabel = ({ text }) => (
  <div className="flex flex-col items-center mb-2">
    <div className="w-12 h-1 bg-red-600 mb-4" />
    <p className="text-red-600 font-bold text-xs tracking-widest uppercase">{text}</p>
  </div>
);

const CheckItem = ({ text }) => (
  <li className="flex items-start gap-2 text-sm text-gray-700">
    <ChevronRight className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
    <span>{text}</span>
  </li>
);

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function SimulatorsPage() {
  const { t } = useLanguage();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const teoricos = [
    {
      title: 'MCC',
      subtitle: t('sim.teoricos.mcc'),
      hours: `25 ${t('sim.teoricos.horas')}`,
      desc: t('sim.teoricos.mcc_desc'),
      list: t('sim.teoricos.mcc_list'),
      price: '$350.000 ARS',
      icon: Users
    },
    {
      title: 'JOC',
      subtitle: t('sim.teoricos.joc'),
      hours: `15 ${t('sim.teoricos.horas')}`,
      desc: t('sim.teoricos.joc_desc'),
      list: [],
      price: '$250.000 ARS',
      icon: Plane
    },
    {
      title: 'CRM',
      subtitle: t('sim.teoricos.crm'),
      hours: `16 ${t('sim.teoricos.horas')}`,
      desc: t('sim.teoricos.crm_desc'),
      list: [],
      price: '$180.000 ARS',
      icon: ShieldCheck
    },
    {
      title: 'BOEING\n737 NG',
      subtitle: t('sim.teoricos.b737'),
      hours: `30 ${t('sim.teoricos.horas')}`,
      desc: t('sim.teoricos.b737_desc'),
      list: t('sim.teoricos.b737_list'),
      price: '$400.000 ARS',
      icon: Settings
    },
    {
      title: 'KING AIR\nB200',
      subtitle: t('sim.teoricos.ka'),
      hours: `20 ${t('sim.teoricos.horas')}`,
      desc: t('sim.teoricos.ka_desc'),
      list: t('sim.teoricos.ka_list'),
      price: '$300.000 ARS',
      icon: Wrench
    }
  ];

  const whyUsNew = [
    { icon: UserCheck, label: t('sim.whyus.f1') },
    { icon: Monitor, label: t('sim.whyus.f2') },
    { icon: ClipboardList, label: t('sim.whyus.f3') },
    { icon: Users, label: t('sim.whyus.f4') },
    { icon: Crosshair, label: t('sim.whyus.f5') },
    { icon: FileText, label: t('sim.whyus.f6') }
  ];

  const whatsappBase = "https://wa.me/5491173745726?text=";

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      <SimulatorSEO />

      <Navbar />

      {/* ── Hero ── */}
      <div id="inicio" className="relative pt-20 min-h-screen flex flex-col bg-white overflow-hidden">
        <div className="flex-grow flex flex-col lg:flex-row relative">
          {/* Mobile image */}
          <div className="lg:hidden w-full h-64 sm:h-80 bg-cover bg-center"
            style={{ backgroundImage: `url("${import.meta.env.BASE_URL}simulator-cockpit.png")` }} />

          {/* Left content */}
          <div className="w-full lg:w-[60%] px-4 py-8 sm:p-8 md:p-16 lg:p-24 flex flex-col justify-center relative z-10 bg-white lg:bg-transparent">
            <div className="w-12 h-1 bg-red-600 mb-4 md:mb-6" />
            <p className="text-red-600 font-bold text-xs md:text-sm tracking-widest uppercase mb-4">
              {t('sim.hero.pre')}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-futuristic italic font-bold text-gray-900 leading-tight flex flex-col mb-6">
              <span>{t('sim.hero.title1')}</span>
              <span className="text-red-600 mt-2 md:mt-4">{t('sim.hero.title2')}</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-md mb-8">
              {t('sim.hero.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                id="btn-sim-hero-ver-cursos"
                onClick={() => document.getElementById('cursos-teoricos').scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-600 text-white px-8 py-4 font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-700 transition-colors w-fit"
              >
                {t('sim.hero.btn_cursos')} <ChevronRight className="w-4 h-4" />
              </button>
              <a id="btn-sim-hero-reservar-sesion" href={`${whatsappBase}${encodeURIComponent(t('sim.hero.wa_msg'))}`} target="_blank" rel="noopener noreferrer" className="border-2 border-gray-900 text-gray-900 px-8 py-4 font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-900 hover:text-white transition-colors w-fit">
                {t('sim.hero.btn_reservar')}
              </a>
            </div>

            {/* Feature pills */}
            <div className="mt-10 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 md:pt-8 border-t border-gray-100">
              {[
                { icon: Target, label: t('sim.hero.feat1') },
                { icon: Award, label: t('sim.hero.feat2') },
                { icon: ShieldCheck, label: t('sim.hero.feat3') },
                { icon: Settings, label: t('sim.hero.feat4') },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-start text-left">
                  <Icon strokeWidth={1} className="w-8 h-8 text-red-600 mb-2" />
                  <p className="font-bold text-[10px] md:text-xs whitespace-pre-line">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right image desktop */}
          <div className="hidden lg:block absolute top-0 right-0 w-[50%] h-full z-0 pointer-events-none">
            <div className="absolute inset-0 z-10" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}>
              <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url("${import.meta.env.BASE_URL}simulator-cockpit.png")` }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── HEADER Cursos y Programas ── */}
      <div className="bg-gray-50 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-600 font-bold text-xs tracking-widest uppercase mb-2">{t('sim.header.pre')}</p>
          <h2 className="text-3xl md:text-5xl font-futuristic italic font-bold text-gray-900 leading-tight mb-4">
            {t('sim.header.title')}
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl">
            {t('sim.header.desc')}
          </p>
        </div>
      </div>

      {/* ── Cursos Teóricos ── */}
      <Section id="cursos-teoricos" bg="bg-gray-50" className="!pt-4 !pb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-0.5 bg-red-600" />
          <h3 className="font-bold text-sm tracking-wider uppercase text-gray-900">{t('sim.teoricos.title')}</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {teoricos.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 p-6 flex flex-col h-full hover:border-red-600 hover:shadow-lg transition-all group">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-futuristic italic font-bold text-red-600 whitespace-pre-line leading-none">
                  {item.title}
                </h4>
                <item.icon strokeWidth={1} className="w-8 h-8 text-red-600 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="font-bold text-[10px] uppercase text-gray-900 mb-2">{item.subtitle}</p>
              <p className="text-red-600 font-bold text-xs mb-4">{item.hours}</p>
              <p className="text-gray-500 text-xs flex-grow mb-4">{item.desc}</p>
              
              {item.list.length > 0 && (
                <ul className="mb-6 space-y-1">
                  {item.list.map((li, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                      <ChevronRight className="w-3 h-3 text-gray-400 shrink-0 mt-0.5" />
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="font-futuristic italic font-bold text-xl text-gray-900 mb-4">{item.price}</p>
                <a 
                  id={`btn-teorico-${item.title.replace(/\\s+/g, '-').toLowerCase()}`}
                  href={`${whatsappBase}${encodeURIComponent(`${t('sim.teoricos.wa_msg')} ${item.title.replace('\\n', ' ')}`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="block w-full bg-red-600 text-white text-center py-2 text-xs font-bold uppercase hover:bg-red-700 transition-colors"
                >
                  {t('sim.teoricos.btn')} &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Programas Completos ── */}
      <Section id="programas-completos" bg="bg-white" className="!py-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-0.5 bg-red-600" />
          <h3 className="font-bold text-sm tracking-wider uppercase text-gray-900">{t('sim.programas.title')}</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* PROG 1 */}
          <div className="bg-[#111111] text-white p-8 relative overflow-hidden flex flex-col justify-between h-full group border border-gray-800 hover:border-red-600 transition-colors">
            <div className="relative z-10 mb-8">
              <div className="flex justify-between items-start mb-2">
                <p className="text-red-600 font-bold text-xs tracking-wider uppercase">{t('sim.programas.prog1')}</p>
                <p className="text-red-600 font-bold text-sm">45 {t('sim.programas.horas')}</p>
              </div>
              <h4 className="text-3xl md:text-4xl font-futuristic italic font-bold text-white mb-2 leading-tight">
                KING AIR B200
              </h4>
              <p className="text-xs font-bold uppercase tracking-wide text-gray-300 mb-6 whitespace-pre-line">{t('sim.programas.ka_subtitle')}</p>
              
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <p className="text-gray-400 text-sm md:w-1/2">
                  {t('sim.programas.ka_desc')}
                </p>
                <div className="md:w-1/2 flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <BookOpen strokeWidth={1} className="w-5 h-5 text-gray-500" />
                    <span className="text-sm">25 {t('sim.programas.teoria')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Monitor strokeWidth={1} className="w-5 h-5 text-gray-500" />
                    <span className="text-sm">20 {t('sim.programas.sim')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 border-t border-gray-800 pt-6">
                {[
                  { i: UserCheck, l: t('sim.programas.ka_f1') },
                  { i: FileText, l: t('sim.programas.ka_f2') },
                  { i: Crosshair, l: t('sim.programas.ka_f3') },
                  { i: Clock, l: t('sim.programas.ka_f4') }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <item.i strokeWidth={1} className="w-8 h-8 text-red-600 shrink-0" />
                    <span className="text-[10px] text-gray-400 leading-tight whitespace-pre-line">{item.l}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-3xl font-futuristic italic font-bold">$1.450.000 ARS</p>
                <a 
                  id="btn-programa-king-air"
                  href={`${whatsappBase}${encodeURIComponent(t('sim.programas.wa_ka'))}`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-red-600 text-white px-8 py-3 text-xs font-bold uppercase hover:bg-red-700 transition-colors text-center"
                >
                  {t('sim.programas.btn')} &rarr;
                </a>
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none transition-all group-hover:bg-red-900/20" />
          </div>

          {/* PROG 2 */}
          <div className="bg-[#111111] text-white p-8 relative overflow-hidden flex flex-col justify-between h-full group border border-gray-800 hover:border-red-600 transition-colors">
            <div className="relative z-10 mb-8">
              <div className="flex justify-between items-start mb-2">
                <p className="text-red-600 font-bold text-xs tracking-wider uppercase">{t('sim.programas.prog2')}</p>
                <p className="text-red-600 font-bold text-sm">45 {t('sim.programas.horas')}</p>
              </div>
              <h4 className="text-3xl md:text-4xl font-futuristic italic font-bold text-white mb-2 leading-tight">
                BOEING 737 NG MCC
              </h4>
              <p className="text-xs font-bold uppercase tracking-wide text-gray-300 mb-6 whitespace-pre-line">{t('sim.programas.b737_subtitle')}</p>
              
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <p className="text-gray-400 text-sm md:w-1/2">
                  {t('sim.programas.b737_desc')}
                </p>
                <div className="md:w-1/2 flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <BookOpen strokeWidth={1} className="w-5 h-5 text-gray-500" />
                    <span className="text-sm">25 {t('sim.programas.teoria')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Monitor strokeWidth={1} className="w-5 h-5 text-gray-500" />
                    <span className="text-sm">20 {t('sim.programas.sim')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 border-t border-gray-800 pt-6">
                {[
                  { i: Users, l: t('sim.programas.b737_f1') },
                  { i: ShieldCheck, l: t('sim.programas.b737_f2') },
                  { i: ClipboardList, l: t('sim.programas.b737_f3') },
                  { i: Target, l: t('sim.programas.b737_f4') }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <item.i strokeWidth={1} className="w-8 h-8 text-red-600 shrink-0" />
                    <span className="text-[10px] text-gray-400 leading-tight whitespace-pre-line">{item.l}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-3xl font-futuristic italic font-bold">$1.850.000 ARS</p>
                <a 
                  id="btn-programa-737-mcc"
                  href={`${whatsappBase}${encodeURIComponent(t('sim.programas.wa_b737'))}`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-red-600 text-white px-8 py-3 text-xs font-bold uppercase hover:bg-red-700 transition-colors text-center"
                >
                  {t('sim.programas.btn')} &rarr;
                </a>
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none transition-all group-hover:bg-red-900/20" />
          </div>
        </div>
      </Section>

      {/* ── Entrenamiento en Simulador ── */}
      <Section id="entrenamiento-simulador" bg="bg-gray-50" className="!py-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-0.5 bg-red-600" />
          <h3 className="font-bold text-sm tracking-wider uppercase text-gray-900">{t('sim.entrenamiento.title')}</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* SIM 1 */}
          <div className="bg-white border border-gray-200 overflow-hidden flex flex-col group">
            <div className="relative h-48 bg-gray-200">
              <div className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-700" 
                style={{ backgroundImage: `url("${import.meta.env.BASE_URL}simulator-cockpit.png")` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
              <div className="absolute bottom-4 left-6">
                <p className="text-red-600 font-bold text-xs tracking-wider uppercase mb-1">{t('sim.entrenamiento.prog3')}</p>
                <h4 className="text-3xl font-futuristic italic font-bold text-gray-900 leading-none">
                  BOEING 737 NG
                </h4>
              </div>
            </div>
            <div className="p-6 flex-grow border-b border-gray-100">
              <p className="text-sm text-gray-600">
                {t('sim.entrenamiento.b737_desc')}
              </p>
            </div>
            <div className="grid grid-cols-3 bg-white">
              <div className="p-4 text-center border-r border-gray-100 flex flex-col items-center">
                <Clock strokeWidth={1.5} className="w-5 h-5 text-red-600 mb-2" />
                <p className="text-[10px] font-bold uppercase text-red-600 mb-2">HORA INDIVIDUAL</p>
                <p className="text-sm font-futuristic italic font-bold">$125.000 <span className="text-[10px] text-gray-400">ARS</span></p>
              </div>
              <div className="p-4 text-center border-r border-gray-100 flex flex-col items-center">
                <Calendar strokeWidth={1.5} className="w-5 h-5 text-red-600 mb-2" />
                <p className="text-[10px] font-bold uppercase text-red-600 mb-2">PACK 10 HORAS</p>
                <p className="text-sm font-futuristic italic font-bold">$1.150.000 <span className="text-[10px] text-gray-400">ARS</span></p>
              </div>
              <div className="p-4 text-center flex flex-col items-center">
                <Layers strokeWidth={1.5} className="w-5 h-5 text-red-600 mb-2" />
                <p className="text-[10px] font-bold uppercase text-red-600 mb-2">PACK 20 HORAS</p>
                <p className="text-sm font-futuristic italic font-bold">$2.100.000 <span className="text-[10px] text-gray-400">ARS</span></p>
              </div>
            </div>
          </div>

          {/* SIM 2 */}
          <div className="bg-white border border-gray-200 overflow-hidden flex flex-col group">
            <div className="relative h-48 bg-gray-200">
              <div className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-700" 
                style={{ backgroundImage: `url("${import.meta.env.BASE_URL}simulator-cockpit.png")` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
              <div className="absolute bottom-4 left-6">
                <p className="text-red-600 font-bold text-xs tracking-wider uppercase mb-1">PROGRAMA 4</p>
                <h4 className="text-3xl font-futuristic italic font-bold text-gray-900 leading-none">
                  KING AIR B200
                </h4>
              </div>
            </div>
            <div className="p-6 flex-grow border-b border-gray-100">
              <p className="text-sm text-gray-600">
                Módulos de vuelo técnico diseñados para pilotos orientados a la aviación ejecutiva que desean entrenamiento práctico directo, sin necesidad de cursar módulos teóricos.
              </p>
            </div>
            <div className="grid grid-cols-3 bg-white">
              <div className="p-4 text-center border-r border-gray-100 flex flex-col items-center">
                <Clock strokeWidth={1.5} className="w-5 h-5 text-red-600 mb-2" />
                <p className="text-[10px] font-bold uppercase text-red-600 mb-2">HORA INDIVIDUAL</p>
                <p className="text-sm font-futuristic italic font-bold">$125.000 <span className="text-[10px] text-gray-400">ARS</span></p>
              </div>
              <div className="p-4 text-center border-r border-gray-100 flex flex-col items-center">
                <Calendar strokeWidth={1.5} className="w-5 h-5 text-red-600 mb-2" />
                <p className="text-[10px] font-bold uppercase text-red-600 mb-2">PACK 10 HORAS</p>
                <p className="text-sm font-futuristic italic font-bold">$1.150.000 <span className="text-[10px] text-gray-400">ARS</span></p>
              </div>
              <div className="p-4 text-center flex flex-col items-center">
                <Layers strokeWidth={1.5} className="w-5 h-5 text-red-600 mb-2" />
                <p className="text-[10px] font-bold uppercase text-red-600 mb-2">PACK 20 HORAS</p>
                <p className="text-sm font-futuristic italic font-bold">$2.100.000 <span className="text-[10px] text-gray-400">ARS</span></p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Why Us ── */}
      <Section id="por-que" bg="bg-white" className="!pt-4 !pb-24 border-t border-gray-100">
        <div className="flex flex-col items-center mb-12">
          <div className="w-8 h-0.5 bg-red-600 mb-4" />
          <h3 className="font-bold text-sm tracking-wider uppercase text-gray-900 text-center">{t('sim.whyus.title')}</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {whyUsNew.map(({ icon: Icon, label }, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-3">
              <Icon strokeWidth={1} className="w-10 h-10 text-red-600" />
              <p className="text-[10px] md:text-xs font-bold text-gray-900 leading-snug whitespace-pre-line">{label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Banner ── */}
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
             style={{ backgroundImage: `url("${import.meta.env.BASE_URL}simulator-cockpit.png")` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-futuristic italic font-bold text-white leading-none">
              {t('sim.banner.title1')}<br/>
              <span className="text-red-600">{t('sim.banner.title2')}</span>
            </h2>
          </div>
          <a
            id="btn-sim-banner-solicitar"
            href={`${whatsappBase}${encodeURIComponent(t('sim.banner.wa_msg'))}`}
            target="_blank" rel="noopener noreferrer"
            className="bg-red-600 text-white px-8 py-4 text-sm font-bold uppercase hover:bg-red-700 transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            {t('sim.banner.btn')} &rarr;
          </a>
        </div>
      </div>

      {/* ── CTA / Contact ── */}
      <Section id="contacto-sim" bg="bg-white">
        <div className="bg-gray-900 p-8 md:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="lg:w-1/2">
            <div className="w-12 h-1 bg-red-600 mb-4" />
            <h2 className="text-3xl md:text-4xl font-futuristic italic font-bold text-white leading-tight flex flex-col mb-4">
              <span>{t('sim.cta.title1')}</span>
              <span className="text-red-600 mt-2">{t('sim.cta.title2')}</span>
            </h2>
            <p className="text-gray-400 text-sm mb-2">
              {t('sim.cta.desc1')}
            </p>
            <p className="text-gray-500 text-xs">{t('sim.cta.desc2')}</p>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-white">
              <Phone strokeWidth={1.5} className="w-5 h-5 text-red-600 shrink-0" />
              <span className="text-sm">+54 9 11 7374 5726</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Mail strokeWidth={1.5} className="w-5 h-5 text-red-600 shrink-0" />
              <span className="text-sm">info@bairesglobaljets.com.ar</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Globe strokeWidth={1.5} className="w-5 h-5 text-red-600 shrink-0" />
              <span className="text-sm">www.bairesglobaljets.com.ar</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <MapPin strokeWidth={1.5} className="w-5 h-5 text-red-600 shrink-0" />
              <span className="text-sm">Buenos Aires, Argentina</span>
            </div>
            <a id="btn-sim-cta-reservar-whatsapp" href="https://wa.me/5491173745726" target="_blank" rel="noopener noreferrer"
              className="mt-4 bg-red-600 text-white px-8 py-4 font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-700 transition-colors w-fit">
              {t('sim.cta.btn')} <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={`${import.meta.env.BASE_URL}logo-BGJ.png`} alt="Baires Global Jets" className="h-10 w-auto object-contain brightness-0 invert" />
          <p className="text-gray-500 text-xs text-center">{t('sim.footer.copy')}</p>
          
          <div className="flex gap-4 items-center">
            <a href="https://www.linkedin.com/company/bairesglobaljets" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
              <Linkedin strokeWidth={1.5} className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61585403314055&locale=es_LA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
              <Facebook strokeWidth={1.5} className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/baires_global_jets?igsh=aHMxcmltaGwzNm8=" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
              <Instagram strokeWidth={1.5} className="w-5 h-5" />
            </a>
          </div>

          <Link to="/" className="text-gray-400 hover:text-white text-xs flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3 h-3" /> {t('sim.footer.volver')}
          </Link>
        </div>
      </footer>
    </div>
  );
}
