import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Plane, ShieldCheck, Award, Clock, Users, Globe, Headset,
  ChevronRight, ArrowLeft, CheckCircle, Target, Cpu, BookOpen,
  Radio, Briefcase, Star, MapPin, Phone, Mail
} from 'lucide-react';
import { Navbar } from './App.jsx';

// ── SEO Head Manager ───────────────────────────────────────────────────────────
const SimulatorSEO = () => {
  useEffect(() => {
    // Title
    document.title = 'Cursos de Simuladores de Vuelo en Argentina | Baires Global Jets Training Center';

    // Meta description
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) { desc = document.createElement('meta'); desc.name = 'description'; document.head.appendChild(desc); }
    desc.content = 'Cursos profesionales en simuladores de vuelo Boeing 737 y King Air 200 en Buenos Aires. Entrenamiento IFR, MCC, Airline Preparation y Corporate Pilot Training. Instructores certificados, tecnología de última generación.';

    // OG Tags
    const og = { 'og:title': 'Simuladores de Vuelo | Baires Global Jets Training Center', 'og:description': 'Entrená en simuladores de vuelo profesionales en Argentina. Boeing 737 y King Air 200. Cursos IFR, MCC, Airline Prep y más. Inscripciones abiertas.', 'og:image': 'https://pablo1591moreno.github.io/BairesJet/simulator-cockpit.png', 'og:url': 'https://pablo1591moreno.github.io/BairesJet/simuladores' };
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
          "description": "Centro de entrenamiento aeronáutico en Argentina con simuladores de vuelo profesionales Boeing 737 y Beechcraft King Air 200. Ofrecemos cursos de piloto privado, IFR, MCC, Airline Preparation y Corporate Pilot Training.",
          "url": "https://pablo1591moreno.github.io/BairesJet/simuladores",
          "telephone": "+54-9-11-2690-9313",
          "email": "info@bairesglobaljets.com.ar",
          "address": { "@type": "PostalAddress", "addressLocality": "Buenos Aires", "addressCountry": "AR" },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Cursos de Simuladores de Vuelo",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Discovery Flight Experience", "description": "Primera experiencia de vuelo en simulador para quienes desean conocer la aviación. Sin requisitos previos." } },
              { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Private Pilot Training", "description": "Entrenamiento orientado al perfeccionamiento de pilotos privados en simuladores profesionales." } },
              { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Instrument Flight Rules (IFR)", "description": "Procedimientos completos de navegación instrumental y aproximaciones de precisión en simulador Boeing 737." } },
              { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Multi Crew Cooperation (MCC)", "description": "Entrenamiento en comunicación, liderazgo y trabajo en cabina para operaciones con múltiples pilotos." } },
              { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Airline Preparation", "description": "Preparación para procesos de selección de aerolíneas: SOP, Checklist, CRM, gestión de recursos y operaciones normales y anormales." } },
              { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "Corporate Pilot Training", "description": "Entrenamiento especializado para pilotos de aviación ejecutiva en King Air 200." } }
            ]
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿Qué simuladores de vuelo tienen disponibles?", "acceptedAnswer": { "@type": "Answer", "text": "Baires Global Jets Training Center cuenta con simuladores Boeing 737 y Beechcraft King Air 200, ambos de alta fidelidad con cabinas de tamaño real, instrumentación profesional y escenarios meteorológicos configurables." } },
            { "@type": "Question", "name": "¿Necesito ser piloto para tomar un curso de simulador?", "acceptedAnswer": { "@type": "Answer", "text": "No. El curso Discovery Flight Experience está diseñado para quienes no tienen experiencia previa y desean vivir la sensación de volar. Para los cursos IFR, MCC y Airline Preparation sí se requieren horas y habilitaciones previas." } },
            { "@type": "Question", "name": "¿Dónde están ubicados los simuladores de Baires Global Jets?", "acceptedAnswer": { "@type": "Answer", "text": "El Training Center de Baires Global Jets está ubicado en Buenos Aires, Argentina, con acceso estratégico desde Aeroparque Jorge Newbery." } },
            { "@type": "Question", "name": "¿Los cursos de simulador sirven para validar horas de vuelo?", "acceptedAnswer": { "@type": "Answer", "text": "Los cursos en simuladores profesionales FSTD pueden ser utilizados para validar horas de vuelo instrumental y de procedimientos según la normativa ANAC vigente. Consultá con nuestros instructores para más detalles según tu habilitación." } }
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
  }, []);
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
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const programs = [
    { icon: Star, title: 'DISCOVERY\nFLIGHT EXPERIENCE', desc: 'Viví la experiencia de volar un avión comercial por primera vez. Sin requisitos previos.' },
    { icon: Plane, title: 'PRIVATE\nPILOT TRAINING', desc: 'Entrenamiento orientado al perfeccionamiento de pilotos privados.' },
    { icon: Radio, title: 'INSTRUMENT\nFLIGHT RULES (IFR)', desc: 'Procedimientos completos de navegación instrumental y aproximaciones de precisión.' },
    { icon: Users, title: 'MULTI CREW\nCOOPERATION (MCC)', desc: 'Entrenamiento en comunicación, liderazgo y trabajo en cabina para múltiples pilotos.' },
    { icon: BookOpen, title: 'AIRLINE\nPREPARATION', desc: 'Preparación para procesos de selección de aerolíneas: SOP, CRM, Checklist y más.' },
    { icon: Briefcase, title: 'CORPORATE\nPILOT TRAINING', desc: 'Entrenamiento especializado para pilotos de aviación ejecutiva.' },
  ];

  const whyUs = [
    { icon: Cpu, label: 'Simuladores profesionales' },
    { icon: Award, label: 'Instructores con experiencia operacional' },
    { icon: Target, label: 'Escenarios completamente personalizables' },
    { icon: Users, label: 'Entrenamiento individual y grupal' },
    { icon: Star, label: 'Tecnología de última generación' },
    { icon: ShieldCheck, label: 'Certificado de participación' },
    { icon: Clock, label: 'Horarios flexibles' },
    { icon: MapPin, label: 'Ubicación estratégica en Argentina' },
  ];

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
          <div className="w-full lg:w-[55%] p-6 sm:p-8 md:p-16 lg:p-24 flex flex-col justify-center relative z-10 bg-white lg:bg-transparent">
            <div className="w-12 h-1 bg-red-600 mb-4 md:mb-6" />
            <p className="text-red-600 font-bold text-xs md:text-sm tracking-widest uppercase mb-4">
              TRAIN LIKE REAL. FLY WITH CONFIDENCE.
            </p>
            <h1 className="text-4xl md:text-7xl font-futuristic italic font-bold text-gray-900 leading-tight flex flex-col mb-6">
              <span>SIMULADORES</span>
              <span className="text-red-600 mt-2 md:mt-4">DE VUELO.</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-md mb-8">
              Entrenamiento profesional en simuladores de última generación para pilotos que buscan excelencia operacional. Boeing 737 y King Air 200 disponibles en Buenos Aires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#cursos" className="bg-red-600 text-white px-8 py-4 font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-700 transition-colors w-fit">
                VER CURSOS <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#contacto-sim" className="border-2 border-gray-900 text-gray-900 px-8 py-4 font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-900 hover:text-white transition-colors w-fit">
                RESERVAR SESIÓN
              </a>
            </div>

            {/* Feature pills */}
            <div className="mt-10 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 md:pt-8 border-t border-gray-100">
              {[
                { icon: Target, label: 'ENTRENAMIENTO\nREALISTA' },
                { icon: Award, label: 'INSTRUCTORES\nEXPERTOS' },
                { icon: ShieldCheck, label: 'MÁXIMA\nSEGURIDAD' },
                { icon: Cpu, label: 'TECNOLOGÍA\nAVANZADA' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-start text-left">
                  <Icon strokeWidth={1} className="w-8 h-8 text-red-600 mb-2" />
                  <p className="font-bold text-[10px] md:text-xs whitespace-pre-line">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right image desktop */}
          <div className="hidden lg:block absolute top-0 right-0 w-[55%] h-full z-0 pointer-events-none">
            <div className="absolute inset-0 z-10" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}>
              <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url("${import.meta.env.BASE_URL}simulator-cockpit.png")` }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Simulators ── */}
      <Section id="simuladores" bg="bg-gray-50">
        <div className="text-center mb-12">
          <SectionLabel text="NUESTROS SIMULADORES" />
          <h2 className="text-3xl md:text-5xl font-futuristic italic font-bold text-gray-900 leading-tight mt-4 flex flex-col items-center">
            <span>TECNOLOGÍA, PRECISIÓN</span>
            <span className="text-red-600 mt-2 md:mt-4">Y REALISMO.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Boeing 737 */}
          <div className="bg-white border border-gray-200 p-8 hover:border-red-600 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-3xl md:text-4xl font-futuristic italic font-bold text-gray-900 leading-tight">
                  BOEING<br /><span className="text-red-600">737</span>
                </h3>
              </div>
              <Plane strokeWidth={1} className="w-16 h-16 text-gray-200" />
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Entrenamiento completo en una de las aeronaves comerciales más utilizadas del mundo.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-red-600 font-bold text-xs uppercase tracking-wider mb-3">IDEAL PARA</p>
                <ul className="space-y-2">
                  {['Pilotos de línea aérea','Estudiantes de aviación comercial','Preparación para entrevistas','Procedimientos IFR','CRM y MCC','Emergencias y fallas','Aproximaciones ILS, RNAV y VOR','Entrenamiento recurrente'].map(i => <CheckItem key={i} text={i} />)}
                </ul>
              </div>
              <div>
                <p className="text-red-600 font-bold text-xs uppercase tracking-wider mb-3">CARACTERÍSTICAS</p>
                <ul className="space-y-2">
                  {['Cabina de tamaño real','Instrumentación profesional','Sistemas completamente funcionales','Escenarios meteorológicos personalizados','Aeropuertos de todo el mundo','Instructor Station'].map(i => <CheckItem key={i} text={i} />)}
                </ul>
              </div>
            </div>
          </div>

          {/* King Air 200 */}
          <div className="bg-white border border-gray-200 p-8 hover:border-red-600 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-3xl md:text-4xl font-futuristic italic font-bold text-gray-900 leading-tight">
                  BEECHCRAFT<br /><span className="text-red-600 italic">KING AIR 200</span>
                </h3>
              </div>
              <Plane strokeWidth={1} className="w-16 h-16 text-gray-200" />
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Entrenamiento enfocado en operaciones ejecutivas y turbohélice.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-red-600 font-bold text-xs uppercase tracking-wider mb-3">IDEAL PARA</p>
                <ul className="space-y-2">
                  {['Pilotos corporativos','Entrenamiento multimotor','Procedimientos IFR','Navegación instrumental','Gestión de emergencias','Operaciones reales de cabina'].map(i => <CheckItem key={i} text={i} />)}
                </ul>
              </div>
              <div>
                <p className="text-red-600 font-bold text-xs uppercase tracking-wider mb-3">CARACTERÍSTICAS</p>
                <ul className="space-y-2">
                  {['Simulación de alta fidelidad','Procedimientos completos','Sistemas de navegación avanzados','Escenarios configurables','Entrenamiento personalizado'].map(i => <CheckItem key={i} text={i} />)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Programs ── */}
      <Section id="cursos" bg="bg-white">
        <div className="text-center mb-12">
          <SectionLabel text="PROGRAMAS DISPONIBLES" />
          <h2 className="text-3xl md:text-5xl font-futuristic italic font-bold text-gray-900 leading-tight mt-4 flex flex-col items-center">
            <span>ELEGÍ TU</span>
            <span className="text-red-600 mt-2 md:mt-4">PROGRAMA.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border border-gray-200 p-6 hover:border-red-600 hover:shadow-md transition-all group cursor-pointer">
              <div className="w-10 h-10 border border-red-600 flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                <Icon strokeWidth={1.5} className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-futuristic italic font-bold text-sm text-gray-900 mb-2 whitespace-pre-line leading-snug">{title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Why Us ── */}
      <Section id="por-que" bg="bg-gray-50">
        <div className="mb-10">
          <div className="w-12 h-1 bg-red-600 mb-4" />
          <h2 className="text-3xl md:text-4xl font-futuristic italic font-bold text-gray-900 leading-tight flex flex-col">
            <span>¿POR QUÉ ELEGIR</span>
            <span className="text-red-600 mt-2 md:mt-3">BAIRES GLOBAL JETS?</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {whyUs.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 border border-gray-200 flex items-center justify-center">
                <Icon strokeWidth={1} className="w-6 h-6 text-red-600" />
              </div>
              <p className="text-xs font-bold text-gray-900 leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA / Contact ── */}
      <Section id="contacto-sim" bg="bg-white">
        <div className="bg-gray-900 p-8 md:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="lg:w-1/2">
            <div className="w-12 h-1 bg-red-600 mb-4" />
            <h2 className="text-3xl md:text-4xl font-futuristic italic font-bold text-white leading-tight flex flex-col mb-4">
              <span>RESERVÁ TU</span>
              <span className="text-red-600 mt-2">EXPERIENCIA.</span>
            </h2>
            <p className="text-gray-400 text-sm mb-2">
              Viví la experiencia de operar un Boeing 737 o un King Air 200 con instructores profesionales y simuladores diseñados para replicar operaciones reales.
            </p>
            <p className="text-gray-500 text-xs">Buenos Aires, Argentina · Horarios flexibles · Sesiones individuales y grupales</p>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-white">
              <Phone strokeWidth={1.5} className="w-5 h-5 text-red-600 shrink-0" />
              <span className="text-sm">+54 9 11 2690 9313</span>
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
            <a href="https://wa.me/5491126909313" target="_blank" rel="noopener noreferrer"
              className="mt-4 bg-red-600 text-white px-8 py-4 font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-700 transition-colors w-fit">
              RESERVAR POR WHATSAPP <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={`${import.meta.env.BASE_URL}logo-BGJ.png`} alt="Baires Global Jets" className="h-10 w-auto object-contain brightness-0 invert" />
          <p className="text-gray-500 text-xs text-center">© 2025 Baires Global Jets · Training Center · Buenos Aires, Argentina</p>
          <Link to="/" className="text-gray-400 hover:text-white text-xs flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3 h-3" /> Volver al sitio principal
          </Link>
        </div>
      </footer>
    </div>
  );
}
