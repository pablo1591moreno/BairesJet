import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from './i18n/LanguageContext';
import { 
  Plane, 
  ShieldCheck, 
  Clock, 
  Globe, 
  User, 
  ArrowRight, 
  MapPin, 
  Mail, 
  Phone, 
  Camera, 
  MessageCircle,
  ChevronDown,
  Lock,
  Wifi,
  Briefcase,
  Gauge,
  Users,
  Calendar,
  ArrowLeftRight,
  Award,
  Armchair,
  Headset,
  Check,
  Menu,
  X,
  Target
} from 'lucide-react';

const Instagram = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Facebook = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Linkedin = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
import { airports } from './data/airports';

// --- COMPONENTES REUTILIZABLES ---

export const FadeIn = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Section = ({ id, children, className = '', bg = 'bg-white' }) => (
  <section id={id} className={`py-16 md:py-24 ${bg} ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeIn>{children}</FadeIn>
    </div>
  </section>
);

const FeatureStrip = ({ items, className = "bg-gray-50 border-t border-gray-100" }) => (
  <div className={`py-8 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start gap-2 md:gap-4">
            <item.icon strokeWidth={1.25} className="w-8 h-8 text-red-600 shrink-0" />
            <div>
              <h4 className="font-bold text-xs md:text-sm">{item.title}</h4>
              <p className="text-[10px] md:text-xs text-gray-500 mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);



// --- SECCIONES PRINCIPALES ---

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState('#inicio');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t, language, changeLanguage } = useLanguage();

  const navItems = [
    { id: '#inicio',   label: t('nav.inicio'),          section: 'inicio' },
    { id: '#vuelos',   label: t('nav.vuelos'),          section: 'vuelos' },
    { id: '/simuladores', label: t('nav.cursos'),       isRoute: true },
    { id: '#flota',    label: t('nav.flota'),           section: 'flota' },
    { id: '#empresa',  label: t('nav.empresa'),         section: 'empresa' },
    { id: '#contacto', label: t('nav.contacto'),        section: 'contacto' },
  ];

  const handleSectionClick = (e, item) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setActiveTab(item.id);
    const scrollToSection = () => {
      const el = document.getElementById(item.section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToSection, 120);
    } else {
      scrollToSection();
    }
  };

  return (
    <>
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center flex-col items-start relative z-50">
              <img src={`${import.meta.env.BASE_URL}logo-BGJ.png`} alt="Baires Global Jets" className="h-12 md:h-14 w-auto object-contain" />
            </div>
            
            <div className="hidden md:flex space-x-8 text-sm font-semibold text-gray-800">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.id}
                    to={item.id}
                    className={`transition-colors hover:text-red-600 ${location.pathname === item.id ? 'text-red-600 border-b-2 border-red-600 pb-1' : ''}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.id}
                    href={item.id}
                    onClick={(e) => handleSectionClick(e, item)}
                    className={`transition-colors ${
                      activeTab === item.id && location.pathname === '/'
                        ? 'text-red-600 border-b-2 border-red-600 pb-1'
                        : 'hover:text-red-600'
                    }`}
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}
                className="flex items-center gap-1 text-gray-900 font-bold text-xs border border-gray-300 rounded px-2 py-1 hover:bg-gray-100 transition-colors"
              >
                <Globe className="w-4 h-4 text-red-600" />
                {language === 'es' ? 'ES' : 'EN'}
              </button>
              <button 
                className="md:hidden text-gray-900 p-2 z-50 relative"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-[100] flex flex-col p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center flex-col items-start relative">
              <img src={`${import.meta.env.BASE_URL}logo-BGJ.png`} alt="Baires Global Jets" className="h-10 w-auto object-contain" />
            </div>
            <button 
              className="p-1 border-2 border-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X strokeWidth={2} className="w-5 h-5 text-black" />
            </button>
          </div>
          
          <div className="flex flex-col text-sm font-bold text-gray-900 mt-4">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.id}
                  to={item.id}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="transition-colors border-b border-gray-100 py-4 hover:text-red-600"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.id}
                  href={item.id}
                  onClick={(e) => handleSectionClick(e, item)}
                  className={`transition-colors border-b border-gray-100 py-4 ${
                    activeTab === item.id && location.pathname === '/' ? 'text-red-600' : 'hover:text-red-600'
                  }`}
                >
                  {item.label}
                </a>
              )
            ))}
          </div>

            <a
              id="btn-mobile-menu-reservar"
              href="https://wa.me/5491173745726"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-red-600 text-white w-full py-4 font-bold text-sm block text-center"
            >
              {t('nav.reservar')}
            </a>
        </div>
      )}
    </>
  );
};

const Hero = () => {
  const { t } = useLanguage();
  
  const defaultFeatures = [
    { icon: ShieldCheck, title: t('features.seguridad'), desc: t('features.seguridad_desc') },
    { icon: Clock, title: t('features.reloj'), desc: t('features.reloj_desc') },
    { icon: Globe, title: t('features.global'), desc: t('features.global_desc') },
    { icon: User, title: t('features.premium'), desc: t('features.premium_desc') }
  ];

  return (
  <div id="inicio" className="relative pt-20 min-h-screen flex flex-col bg-white overflow-hidden">
    <div className="flex-grow flex flex-col lg:flex-row relative">
      {/* Mobile Top Image */}
      <div className="lg:hidden w-full h-64 sm:h-80 bg-cover bg-center" style={{ backgroundImage: `url("${import.meta.env.BASE_URL}hero-jet.jpg")` }} />
      
      <div className="w-full lg:w-[55%] p-6 sm:p-8 md:p-16 lg:p-24 flex flex-col justify-center relative z-10 bg-white lg:bg-transparent">
        <FadeIn>
          <div className="w-12 h-1 bg-red-600 mb-6 md:mb-8"></div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-futuristic italic font-bold text-gray-900 leading-tight flex flex-col">
            <span>{t('hero.volar')}</span>
            <span>{t('hero.entrenar')}</span>
            <span className="text-red-600 mt-2 md:mt-4">{t('hero.sin_limites')}</span>
          </h1>
          <p className="mt-4 md:mt-6 text-gray-600 text-base md:text-lg max-w-md">
            {t('hero.desc1')}<br/>
            {t('hero.desc2')}
          </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button
            id="btn-hero-reservar-vuelo"
            onClick={() => document.getElementById('vuelos').scrollIntoView({ behavior: 'smooth' })}
            className="bg-red-700 text-white px-6 py-4 font-bold text-xs flex items-center justify-between gap-4 hover:bg-red-800 transition-colors w-full sm:w-auto"
          >
            <div className="flex items-center gap-3">
              <Plane strokeWidth={1.5} className="w-6 h-6 transform -rotate-45" />
              <span className="text-left leading-tight whitespace-pre-line">{t('hero.btn_vuelo')}</span>
            </div>
            <ArrowRight strokeWidth={2} className="w-4 h-4 ml-4" />
          </button>
          
          <Link
            id="btn-hero-reservar-simulador"
            to="/simuladores"
            className="border border-red-600 bg-white text-gray-900 px-6 py-4 font-bold text-xs flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors w-full sm:w-auto"
          >
            <div className="flex items-center gap-3">
              <Target strokeWidth={1.5} className="w-6 h-6 text-red-600" />
              <span className="text-left leading-tight whitespace-pre-line">{t('hero.btn_sim')}</span>
            </div>
            <ArrowRight strokeWidth={2} className="w-4 h-4 ml-4 text-red-600" />
          </Link>
        </div>

        <div className="mt-10 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pt-6 md:pt-8">
          <div className="flex flex-col items-start text-left">
            <Plane strokeWidth={1} className="w-8 h-8 text-red-600 mb-2 transform -rotate-45" />
            <h3 className="font-bold text-xs mb-1 whitespace-pre-line">{t('hero.feat1_title')}</h3>
            <p className="text-[10px] md:text-xs text-gray-500 whitespace-pre-line">{t('hero.feat1_desc')}</p>
          </div>
          <div className="flex flex-col items-start text-left">
            <Globe strokeWidth={1} className="w-8 h-8 text-red-600 mb-2" />
            <h3 className="font-bold text-xs mb-1 whitespace-pre-line">{t('hero.feat2_title')}</h3>
            <p className="text-[10px] md:text-xs text-gray-500 whitespace-pre-line">{t('hero.feat2_desc')}</p>
          </div>
          <div className="flex flex-col items-start text-left col-span-2 md:col-span-1">
            <ShieldCheck strokeWidth={1} className="w-8 h-8 text-red-600 mb-2" />
            <h3 className="font-bold text-xs mb-1 whitespace-pre-line">{t('hero.feat3_title')}</h3>
            <p className="text-[10px] md:text-xs text-gray-500 whitespace-pre-line">{t('hero.feat3_desc')}</p>
          </div>
        </div>
        </FadeIn>
      </div>
      
      {/* Right Image */}
      <div className="hidden lg:block absolute top-0 right-0 w-[55%] h-full z-0 pointer-events-none">
         <div className="absolute inset-0 z-10" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}>
           <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url("${import.meta.env.BASE_URL}hero-jet.jpg")` }} />
         </div>
      </div>
    </div>
    <FeatureStrip items={defaultFeatures} />
  </div>
  );
};

const AutocompleteInput = ({ label, placeholder, icon: Icon, className = "" }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredAirports = airports.filter(a => 
    a.city.toLowerCase().includes(query.toLowerCase()) || 
    a.name.toLowerCase().includes(query.toLowerCase()) || 
    a.code.toLowerCase().includes(query.toLowerCase()) ||
    a.country.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={`relative ${className}`}>
      <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">{label}</label>
      <div className="relative border border-gray-200 p-3 flex items-center bg-gray-50/50 focus-within:border-red-600 focus-within:bg-white transition-colors">
        <Icon strokeWidth={1.5} className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
        <input 
          type="text" 
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          placeholder={placeholder} 
          className="w-full bg-transparent outline-none text-gray-800 text-sm placeholder-gray-400" 
        />
      </div>
      {isOpen && query && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 shadow-xl max-h-60 overflow-y-auto left-0">
          {filteredAirports.length > 0 ? (
            filteredAirports.map(a => (
              <div 
                key={a.code} 
                className="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0 flex flex-col"
                onClick={() => {
                  setQuery(`${a.city} (${a.code})`);
                  setIsOpen(false);
                }}
              >
                <span className="font-bold text-sm text-gray-900">{a.city}, {a.country}</span>
                <span className="text-xs text-gray-500">{a.name} ({a.code})</span>
              </div>
            ))
          ) : (
            <div className="p-3 text-sm text-gray-500">No se encontraron aeropuertos</div>
          )}
        </div>
      )}
    </div>
  );
};

const QuoteSection = () => {
  const { t } = useLanguage();
  const today = new Date().toISOString().split("T")[0];

  return (
    <Section id="vuelos" bg="bg-gray-50" className="relative overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-12 relative z-10">
        <div className="w-full lg:w-1/2">
          <div className="w-12 h-1 bg-red-600 mb-6"></div>
          <h4 className="text-red-600 font-bold text-xs md:text-sm tracking-wider uppercase mb-2">{t('quote.subtitle')}</h4>
          <h2 className="text-3xl md:text-5xl font-futuristic italic font-bold text-gray-900 leading-tight mb-4 md:mb-6 flex flex-col">
            <span>{t('quote.title1')}</span>
            <span className="text-red-600 mt-1 md:mt-4">{t('quote.title2')}</span>
          </h2>
          <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base max-w-lg">
            {t('quote.desc')}
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="bg-white p-5 sm:p-6 md:p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">{t('quote.form.tipo')}</label>
                <div className="relative border border-gray-200 p-3 flex items-center bg-gray-50/50">
                  <Plane strokeWidth={1.5} className="w-4 h-4 text-gray-400 mr-2" />
                  <select className="w-full bg-transparent outline-none text-gray-800 text-sm appearance-none">
                    <option>{t('quote.form.ida_vuelta')}</option>
                    <option>{t('quote.form.ida')}</option>
                  </select>
                  <ChevronDown strokeWidth={1.5} className="w-4 h-4 text-gray-400 absolute right-3" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">{t('quote.form.pasajeros')}</label>
                <div className="relative border border-gray-200 p-3 flex items-center bg-gray-50/50">
                  <Users strokeWidth={1.5} className="w-4 h-4 text-gray-400 mr-2" />
                  <input type="number" min="1" placeholder={t('quote.form.pasajeros_ph')} className="w-full bg-transparent outline-none text-gray-800 text-sm placeholder-gray-400" />
                </div>
              </div>
              
              <AutocompleteInput 
                label={t('quote.form.origen')} 
                placeholder={t('quote.form.ciudad_ph')} 
                icon={MapPin} 
              />
              
              <AutocompleteInput 
                label={t('quote.form.destino')} 
                placeholder={t('quote.form.ciudad_ph')} 
                icon={MapPin} 
              />
              
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">{t('quote.form.salida')}</label>
                <div className="relative border border-gray-200 p-3 flex items-center bg-gray-50/50">
                  <input type="date" min={today} className="w-full bg-transparent outline-none text-gray-800 text-sm placeholder-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">{t('quote.form.regreso')}</label>
                <div className="relative border border-gray-200 p-3 flex items-center bg-gray-50/50">
                  <input type="date" min={today} className="w-full bg-transparent outline-none text-gray-800 text-sm placeholder-gray-400 pr-24" />
                  <div className="absolute right-3 flex items-center gap-2 bg-gray-50/80 px-2 py-1 rounded">
                    <input type="checkbox" id="solo_ida" className="accent-red-600" />
                    <label htmlFor="solo_ida" className="text-xs text-gray-600 cursor-pointer">{t('quote.form.ida')}</label>
                  </div>
                </div>
              </div>
               <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">{t('quote.form.horario')}</label>
                <div className="relative border border-gray-200 p-3 flex items-center bg-gray-50/50">
                  <Clock strokeWidth={1.5} className="w-4 h-4 text-gray-400 mr-2" />
                  <select className="w-full bg-transparent outline-none text-gray-800 text-sm appearance-none">
                    <option>{t('quote.form.horario_aprox')}</option>
                    <option>{t('quote.form.manana')}</option>
                    <option>{t('quote.form.tarde')}</option>
                    <option>{t('quote.form.noche')}</option>
                  </select>
                  <ChevronDown strokeWidth={1.5} className="w-4 h-4 text-gray-400 absolute right-3" />
                </div>
              </div>
               <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">{t('quote.form.aeronave')}</label>
                <div className="relative border border-gray-200 p-3 flex items-center bg-gray-50/50">
                  <Plane strokeWidth={1.5} className="w-4 h-4 text-gray-400 mr-2" />
                  <select className="w-full bg-transparent outline-none text-gray-800 text-sm appearance-none">
                    <option>{t('quote.form.selecciona')}</option>
                    <option>Light Jet</option>
                    <option>Medium Jet</option>
                    <option>Heavy Jet</option>
                  </select>
                  <ChevronDown strokeWidth={1.5} className="w-4 h-4 text-gray-400 absolute right-3" />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-bold text-sm mb-4 text-gray-900 uppercase">{t('quote.form.datos')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">{t('quote.form.nombre')}</label>
                  <div className="relative border border-gray-200 p-3 flex items-center bg-gray-50/50 focus-within:border-red-600 focus-within:bg-white transition-colors">
                    <User strokeWidth={1.5} className="w-4 h-4 text-gray-400 mr-2" />
                    <input type="text" placeholder={t('quote.form.nombre_ph')} className="w-full bg-transparent outline-none text-gray-800 text-sm placeholder-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">{t('quote.form.email')}</label>
                  <div className="relative border border-gray-200 p-3 flex items-center bg-gray-50/50 focus-within:border-red-600 focus-within:bg-white transition-colors">
                    <Mail strokeWidth={1.5} className="w-4 h-4 text-gray-400 mr-2" />
                    <input type="email" placeholder={t('quote.form.email_ph')} className="w-full bg-transparent outline-none text-gray-800 text-sm placeholder-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">{t('quote.form.telefono')}</label>
                  <div className="relative border border-gray-200 p-3 flex items-center bg-gray-50/50 focus-within:border-red-600 focus-within:bg-white transition-colors">
                    <Phone strokeWidth={1.5} className="w-4 h-4 text-gray-400 mr-2" />
                    <input type="tel" placeholder="+54 9 11 1234-5678" className="w-full bg-transparent outline-none text-gray-800 text-sm placeholder-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
              <button
                type="button"
                id="btn-form-solicitar-cotizacion"
                className="w-full sm:w-auto bg-red-600 text-white px-8 py-4 font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-700 transition-colors"
              >
                {t('quote.form.btn_cotizar')} <ArrowRight strokeWidth={2} className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Lock strokeWidth={1.5} className="w-4 h-4 shrink-0" />
                <span className="whitespace-pre-line">{t('quote.form.seguridad')}</span>
              </div>
            </div>
          </form>
        </div>
        
        {/* Background Jet Image for Right Side */}
        <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full z-0">
          <img 
            src={`${import.meta.env.BASE_URL}hero-jet.jpg`} 
            alt="Private Jet" 
            className="w-full h-full object-cover"
            style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}
          />
        </div>
      </div>
    </Section>
  );
};

const FleetCard = ({ type, img, description, passengers, range, speed, cabin, features, buttonText = "VER DISPONIBILIDAD", Icon3 = Gauge, Icon4 = Briefcase }) => (
  <div className="bg-white border border-gray-200 flex flex-col group relative z-10">
    <div className="h-48 overflow-hidden">
      <img src={img} alt={type} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full border border-red-600 flex items-center justify-center text-red-600">
          <Plane strokeWidth={1} className="w-5 h-5 transform -rotate-45" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 uppercase">{type}</h3>
      </div>
      <p className="text-gray-600 text-sm font-medium mb-4">{description}</p>
      <p className="text-gray-500 text-xs mb-6 flex-grow">{features}</p>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2 border-t border-gray-100 pt-4 mb-6">
        <div className="text-center">
          <Users strokeWidth={1} className="w-6 h-6 mx-auto text-gray-800 mb-2" />
          <p className="text-[10px] text-gray-500 leading-tight">Hasta<br/><span className="font-bold text-gray-900">{passengers}</span></p>
        </div>
        <div className="text-center">
          <Clock strokeWidth={1} className="w-6 h-6 mx-auto text-gray-800 mb-2" />
          <p className="text-[10px] text-gray-500 leading-tight">Autonomía<br/><span className="font-bold text-gray-900">{range}</span></p>
        </div>
        <div className="text-center">
          <Icon3 strokeWidth={1} className="w-6 h-6 mx-auto text-gray-800 mb-2" />
          <p className="text-[10px] text-gray-500 leading-tight">
            {speed.split(/\\n|\n/)[0]}
            {speed.split(/\\n|\n/)[1] && <><br/><span className="font-bold text-gray-900">{speed.split(/\\n|\n/)[1]}</span></>}
          </p>
        </div>
        <div className="text-center">
          <Icon4 strokeWidth={1} className="w-6 h-6 mx-auto text-gray-800 mb-2" />
          <p className="text-[10px] text-gray-500 leading-tight">
            {cabin.split(/\\n|\n/)[0]}
            {cabin.split(/\\n|\n/)[1] && <><br/><span className="font-bold text-gray-900">{cabin.split(/\\n|\n/)[1]}</span></>}
          </p>
        </div>
      </div>
      
      <button
        id={`btn-flota-${buttonText.toLowerCase().replace(/\s+/g, '-')}`}
        className="w-full bg-red-600 text-white py-3 font-bold text-xs uppercase hover:bg-red-700 transition-colors"
      >
        {buttonText}
      </button>
    </div>
  </div>
);



const FleetSection = () => {
  const { t } = useLanguage();
  
  const fleetFeatures = [
    { icon: ShieldCheck, title: t('features.op'), desc: t('features.op_desc') },
    { icon: Globe, title: t('features.nacional'), desc: t('features.nacional_desc') },
    { icon: Clock, title: t('features.reloj'), desc: t('features.reloj_desc_f') },
    { icon: User, title: t('features.atencion'), desc: t('features.atencion_desc') }
  ];

  return (
  <Section id="flota" bg="bg-white" className="relative overflow-hidden">
    <Plane className="absolute right-10 top-20 w-96 h-96 text-gray-50 opacity-50 transform rotate-45 pointer-events-none" />
    <div className="text-center mb-10 md:mb-12 relative z-10">
      <div className="w-12 h-1 bg-red-600 mx-auto mb-4 md:mb-6"></div>
      <h4 className="text-red-600 font-futuristic italic font-bold text-xs md:text-sm tracking-widest uppercase mb-2">{t('fleet.subtitle')}</h4>
      <h2 className="text-3xl md:text-5xl font-futuristic italic font-bold text-gray-900 leading-tight mb-4 flex flex-col">
        <span>{t('fleet.title1')}</span>
        <span className="text-red-600 mt-1 md:mt-4">{t('fleet.title2')}</span>
      </h2>
      <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto px-4 md:px-0">
        {t('fleet.desc')}
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 relative z-10">
      <FleetCard 
        type="Light Jets"
        img={`${import.meta.env.BASE_URL}fleet-light-jet.png?v=2`}
        description={t('fleet.light_desc')}
        features={t('fleet.light_feat')}
        passengers={t('fleet.light_pass')}
        range={t('fleet.light_range')}
        speed={t('fleet.light_speed1') + '\n' + t('fleet.light_speed2')}
        cabin={t('fleet.light_cabin1') + '\n' + t('fleet.light_cabin2')}
        buttonText={t('fleet.btn_disp')}
      />
      <FleetCard 
        type="Medium Jets"
        img={`${import.meta.env.BASE_URL}fleet-medium-jet.png?v=2`}
        description={t('fleet.medium_desc')}
        features={t('fleet.medium_feat')}
        passengers={t('fleet.medium_pass')}
        range={t('fleet.medium_range')}
        speed={t('fleet.medium_speed1') + '\n' + t('fleet.medium_speed2')}
        cabin={t('fleet.medium_cabin1') + '\n' + t('fleet.medium_cabin2')}
        buttonText={t('fleet.btn_cotizar')}
        Icon3={Wifi}
        Icon4={Briefcase}
      />
      <FleetCard 
        type="Heavy Jets"
        img={`${import.meta.env.BASE_URL}fleet-heavy-jet.png?v=2`}
        description={t('fleet.heavy_desc')}
        features={t('fleet.heavy_feat')}
        passengers={t('fleet.heavy_pass')}
        range={t('fleet.heavy_range')}
        speed={t('fleet.heavy_speed1') + '\n' + t('fleet.heavy_speed2')}
        cabin={t('fleet.heavy_cabin1') + '\n' + t('fleet.heavy_cabin2')}
        buttonText={t('fleet.btn_charter')}
        Icon3={User}
        Icon4={Plane}
      />
    </div>
    
    <FeatureStrip items={fleetFeatures} className="border-t border-gray-100 bg-white" />
  </Section>
  );
};

const ExperienceSection = () => {
  const { t } = useLanguage();
  
  const expFeatures = [
    { icon: ShieldCheck, title: t('features.seguridad'), desc: t('experience.feat4_desc') }, // fallback
    { icon: Globe, title: t('features.global'), desc: t('features.global_desc') },
    { icon: Headset, title: t('features.soporte'), desc: t('features.soporte_desc') },
    { icon: Award, title: t('features.calidad'), desc: t('features.calidad_desc') }
  ];

  return (
  <Section id="empresa" bg="bg-white">
    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 mb-12 md:mb-16">
      <div className="w-full lg:w-1/2">
        <div className="w-12 h-1 bg-red-600 mb-4 md:mb-6"></div>
        <h4 className="text-red-600 font-futuristic italic font-bold text-xs md:text-sm tracking-widest uppercase mb-2">{t('experience.subtitle')}</h4>
        <h2 className="text-3xl md:text-5xl font-futuristic italic font-bold text-gray-900 leading-tight mb-4 md:mb-6 flex flex-col">
          <span>{t('experience.title1')}</span>
          <span className="mt-1 md:mt-4">{t('experience.title2')}</span>
        </h2>
        <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
          {t('experience.desc')}
        </p>
      </div>
      <div className="relative z-10 w-full md:w-1/2 p-6 md:p-12">
        <img src={`${import.meta.env.BASE_URL}hero-jet.jpg`} alt="Private Jet Sunset" className="w-full h-auto object-cover shadow-lg" />
      </div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 mb-12 md:mb-16 text-center">
      <div>
        <Plane strokeWidth={1} className="w-10 h-10 mx-auto text-red-600 mb-4" />
        <h4 className="font-bold text-sm mb-2">{t('experience.feat1')}</h4>
        <p className="text-xs text-gray-500">{t('experience.feat1_desc')}</p>
      </div>
      <div>
        <Clock strokeWidth={1} className="w-10 h-10 mx-auto text-red-600 mb-4" />
        <h4 className="font-bold text-sm mb-2">{t('experience.feat2')}</h4>
        <p className="text-xs text-gray-500">{t('experience.feat2_desc')}</p>
      </div>
      <div>
        <Armchair strokeWidth={1} className="w-10 h-10 mx-auto text-red-600 mb-4" />
        <h4 className="font-bold text-sm mb-2">{t('experience.feat3')}</h4>
        <p className="text-xs text-gray-500">{t('experience.feat3_desc')}</p>
      </div>
      <div>
        <ShieldCheck strokeWidth={1} className="w-10 h-10 mx-auto text-red-600 mb-4" />
        <h4 className="font-bold text-sm mb-2">{t('experience.feat4')}</h4>
        <p className="text-xs text-gray-500">{t('experience.feat4_desc')}</p>
      </div>
      <div>
        <User strokeWidth={1} className="w-10 h-10 mx-auto text-red-600 mb-4" />
        <h4 className="font-bold text-sm mb-2">{t('experience.feat5')}</h4>
        <p className="text-xs text-gray-500">{t('experience.feat5_desc')}</p>
      </div>
      <div>
        <MapPin strokeWidth={1} className="w-10 h-10 mx-auto text-red-600 mb-4" />
        <h4 className="font-bold text-sm mb-2">{t('experience.feat6')}</h4>
        <p className="text-xs text-gray-500">{t('experience.feat6_desc')}</p>
      </div>
    </div>

    <div className="bg-gray-50 border border-gray-200 flex flex-col lg:flex-row items-center justify-between p-6 md:p-8 rounded-sm">
      <div className="lg:w-1/2 mb-6 lg:mb-0 text-center lg:text-left">
        <h3 className="text-xl md:text-2xl font-futuristic italic font-bold text-gray-900 mb-2 flex flex-col">
          <span>{t('experience.reserva_title1')}</span>
          <span className="text-red-600 mt-1 md:mt-2">{t('experience.reserva_title2')}</span>
        </h3>
        <p className="text-xs md:text-sm text-gray-600">{t('experience.reserva_desc')}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 lg:w-auto w-full">
        <button
          id="btn-experiencia-cotizar-vuelo"
          onClick={() => document.getElementById('vuelos').scrollIntoView({ behavior: 'smooth' })}
          className="bg-red-600 text-white px-6 py-3 font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-700 transition-colors w-full sm:w-auto whitespace-nowrap"
        >
          <Plane className="w-4 h-4 transform -rotate-45 shrink-0" /> {t('experience.btn_cotizar')}
        </button>
      </div>
    </div>
    <FeatureStrip items={expFeatures} className="mt-8 bg-white border-none" />
  </Section>
  );
};

const ContactForm = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState(''); // 'idle', 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/emepe1591@gmail.com', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      {status === 'success' && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="bg-white p-8 border border-gray-200 shadow-2xl flex flex-col items-center text-center max-w-sm w-full relative">
            <button onClick={() => setStatus('idle')} className="absolute top-4 right-4 text-gray-400 hover:text-red-600 transition-colors">
              <X strokeWidth={2} className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 bg-green-50 rounded-full border border-green-100 flex items-center justify-center mb-4">
              <Check strokeWidth={2} className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Enviado!</h3>
            <p className="text-gray-600 text-sm mb-8">{t('contact.form.success')}</p>
            <button onClick={() => setStatus('idle')} className="bg-red-600 text-white font-bold py-3 px-8 w-full hover:bg-red-700 transition-colors text-sm">
              ACEPTAR
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 p-6 md:p-8 flex flex-col gap-4 h-full relative">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{t('contact.form.title')}</h3>
        
        {status === 'error' && (
          <div className="bg-red-50 text-red-600 p-3 text-sm border border-red-200 mb-2">
            {t('contact.form.error')}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-bold text-gray-700 uppercase mb-1">{t('contact.form.name')}</label>
            <input required type="text" id="name" name="name" className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-red-600 bg-white" />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase mb-1">{t('contact.form.email')}</label>
            <input required type="email" id="email" name="email" className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-red-600 bg-white" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-gray-700 uppercase mb-1">{t('contact.form.phone')}</label>
            <input required type="tel" id="phone" name="phone" className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-red-600 bg-white" />
          </div>
          <div>
            <label htmlFor="subject" className="block text-xs font-bold text-gray-700 uppercase mb-1">{t('contact.form.subject')}</label>
            <input required type="text" id="subject" name="subject" className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-red-600 bg-white" />
          </div>
        </div>

        <div className="flex-grow">
          <label htmlFor="message" className="block text-xs font-bold text-gray-700 uppercase mb-1">{t('contact.form.message')}</label>
          <textarea required id="message" name="message" rows="4" className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-red-600 bg-white resize-none h-full min-h-[120px]"></textarea>
        </div>

        <button type="submit" disabled={status === 'loading'} className="bg-gray-900 text-white px-8 py-4 font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-600 transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed">
          {status === 'loading' ? t('contact.form.sending') : t('contact.form.send')}
        </button>
      </form>
    </>
  );
};

const ContactSection = () => {
  const { t } = useLanguage();
  
  const contactFeatures = [
    { icon: ShieldCheck, title: t('features.seguridad'), desc: t('features.seguridad_desc_c') },
    { icon: Globe, title: t('features.global'), desc: t('features.global_desc') },
    { icon: Headset, title: t('features.soporte'), desc: t('features.soporte_desc_c') },
    { icon: Award, title: t('features.calidad'), desc: t('features.calidad_desc_c') }
  ];

  return (
  <Section id="contacto" bg="bg-white" className="pt-0 md:pt-16 lg:pt-24">
    <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
      <div className="w-full lg:w-1/3">
        <div className="w-12 h-1 bg-red-600 mb-4 md:mb-6 mt-8 md:mt-0"></div>
        <h4 className="text-red-600 font-bold text-xs md:text-sm tracking-wider uppercase mb-2">{t('contact.subtitle')}</h4>
        <h2 className="text-3xl md:text-4xl font-futuristic italic font-bold text-gray-900 leading-tight mb-4 md:mb-6 flex flex-col">
          <span>{t('contact.title1')}</span>
          <span className="text-red-600 mt-1 md:mt-3">{t('contact.title2')}</span>
        </h2>
        <p className="text-gray-600 mb-6 md:mb-8 text-sm">
          {t('contact.desc')}
        </p>

        <div className="space-y-4">
          <div className="border border-gray-200 p-4 flex items-start gap-4 hover:border-red-600 transition-colors group bg-white">
            <div className="w-10 h-10 rounded-full border border-red-600 flex items-center justify-center bg-white group-hover:bg-red-50 transition-colors shrink-0">
              <Mail strokeWidth={1} className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900 mb-1">{t('contact.email')}</h4>
              <p className="text-sm text-red-600">vuelos@bairesglobaljets.com.ar</p>
              <p className="text-sm text-red-600">info@bairesglobaljets.com.ar</p>
            </div>
          </div>
          
          <div className="border border-gray-200 p-4 flex items-start gap-4 hover:border-red-600 transition-colors group bg-white">
            <div className="w-10 h-10 rounded-full border border-red-600 flex items-center justify-center bg-white group-hover:bg-red-50 transition-colors shrink-0">
              <Phone strokeWidth={1} className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900 mb-1">{t('contact.tel')}</h4>
              <p className="text-sm text-red-600">+54 9 11 7374 5726</p>
              <p className="text-xs text-gray-500 mt-1">{t('contact.tel_desc')}</p>
            </div>
          </div>

          <div className="border border-gray-200 p-4 flex items-start gap-4 hover:border-red-600 transition-colors group bg-white">
            <div className="w-10 h-10 rounded-full border border-red-600 flex items-center justify-center bg-white group-hover:bg-red-50 transition-colors shrink-0">
              <MapPin strokeWidth={1} className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900 mb-1">{t('contact.ubicacion')}</h4>
              <p className="text-sm text-red-600">Aeroparque Jorge Newbery (AEP)</p>
              <p className="text-xs text-gray-500 mt-1">{t('contact.ubicacion_desc')}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <a href="https://www.linkedin.com/company/bairesglobaljets" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-600 hover:text-red-600 hover:border-red-600 transition-colors">
            <Linkedin strokeWidth={1.5} className="w-5 h-5" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61585403314055&locale=es_LA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-600 hover:text-red-600 hover:border-red-600 transition-colors">
            <Facebook strokeWidth={1.5} className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/baires_global_jets?igsh=aHMxcmltaGwzNm8=" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-600 hover:text-red-600 hover:border-red-600 transition-colors">
            <Instagram strokeWidth={1.5} className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div className="w-full lg:w-2/3 mt-8 lg:mt-0">
        <ContactForm />
      </div>
    </div>
    
    <div className="mt-12 md:mt-16 bg-gray-50 border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <div className="w-12 h-1 bg-red-600 mb-4 hidden md:block"></div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          {t('contact.listo1')}<br/><span className="text-red-600">{t('contact.listo2')}</span>
        </h3>
      </div>
      <p className="text-gray-600 text-sm hidden lg:block border-l border-gray-300 pl-6 h-full flex items-center">{t('contact.listo_desc')}</p>
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        <button
          id="btn-contacto-cotizar-vuelo"
          onClick={() => document.getElementById('vuelos').scrollIntoView({ behavior: 'smooth' })}
          className="bg-red-600 text-white px-8 py-3 font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-700 transition-colors whitespace-nowrap"
        >
          <Plane strokeWidth={2} className="w-4 h-4 transform -rotate-45" /> {t('contact.btn_cotizar')}
        </button>
      </div>
    </div>
    
    <FeatureStrip items={contactFeatures} className="mt-8 bg-white border-none pb-0" />
  </Section>
  );
};

const WhatsAppButton = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Show message after 1 second of loading
    const timer1 = setTimeout(() => {
      setShowMessage(true);
    }, 1000);

    // Hide message after 5 seconds of showing it
    const timer2 = setTimeout(() => {
      setShowMessage(false);
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex items-end justify-end flex-col gap-3">
      {/* Tooltip bubble */}
      <div 
        className={`bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.15)] border border-gray-100 rounded-2xl rounded-br-sm py-3 px-5 text-sm font-bold text-gray-800 transition-all duration-500 origin-bottom-right relative ${showMessage ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
      >
        ¿A dónde querés volar hoy?
        {/* Tail of the speech bubble */}
        <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
      </div>
      
      {/* WhatsApp Button */}
      <a
        id="btn-whatsapp-flotante"
        href="https://wa.me/5491173745726"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform hover:shadow-xl"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
};


const SimulatorPreviewSection = () => (
  <section id="simuladores-preview" className="bg-white py-16 md:py-24 relative overflow-hidden">
    {/* Decorative plane watermark */}
    <Plane className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 text-gray-50 opacity-60 transform rotate-45 pointer-events-none" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row gap-12 items-center">

        {/* Left: cockpit image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-video overflow-hidden shadow-lg">
            <img
              src={`${import.meta.env.BASE_URL}simulator-cockpit.png`}
              alt="Simulador de vuelo profesional Boeing 737 - Baires Global Jets Training Center"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 bg-red-600 text-white p-4 shadow-lg hidden md:block">
            <p className="font-futuristic italic font-bold text-sm">TRAINING</p>
            <p className="font-futuristic italic font-bold text-sm">CENTER</p>
          </div>
        </div>

        {/* Right: content */}
        <div className="w-full lg:w-1/2">
          <div className="w-12 h-1 bg-red-600 mb-4 md:mb-6" />
          <p className="text-red-600 font-bold text-xs md:text-sm tracking-widest uppercase mb-2">Cursos de Simuladores</p>
          <h2 className="text-3xl md:text-5xl font-futuristic italic font-bold text-gray-900 leading-tight flex flex-col mb-4 md:mb-6">
            <span>SIMULADORES</span>
            <span className="text-red-600 mt-2 md:mt-4">DE VUELO.</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6">
            Entrenamiento profesional en simuladores Boeing 737 y King Air 200. Instructores con experiencia operacional, escenarios configurables y tecnología de última generación disponibles en Buenos Aires.
          </p>

          {/* Course tags */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {[
              { label: 'Discovery Flight', sub: 'Primera experiencia' },
              { label: 'IFR Training', sub: 'Navegación instrumental' },
              { label: 'MCC', sub: 'Multi Crew Cooperation' },
              { label: 'Airline Prep', sub: 'Selección de aerolíneas' },
            ].map(({ label, sub }) => (
              <div key={label} className="border border-gray-200 p-3 hover:border-red-600 transition-colors">
                <p className="font-bold text-xs text-gray-900 uppercase">{label}</p>
                <p className="text-[10px] text-gray-500 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>

          <Link
            to="/simuladores"
            className="bg-red-600 text-white px-8 py-4 font-bold text-sm inline-flex items-center gap-2 hover:bg-red-700 transition-colors"
          >
            VER CURSOS Y SIMULADORES <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <QuoteSection />
      <FleetSection />
      <ExperienceSection />
      <SimulatorPreviewSection />
      <ContactSection />
      <WhatsAppButton />
    </div>
  );
}