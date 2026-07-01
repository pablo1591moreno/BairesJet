import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Plane, ShieldCheck, Award, Clock, Users, Globe,
  ChevronRight, ArrowLeft, Target, BookOpen,
  MapPin, Phone, Mail, UserCheck, Monitor,
  ClipboardList, Crosshair, Wrench, Settings,
  Calendar, Layers, FileText
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
          "telephone": "+54-9-11-7374-5726",
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

  const teoricos = [
    {
      title: 'MCC',
      subtitle: 'COOPERACIÓN EN TRIPULACIÓN MÚLTIPLE',
      hours: '25 HORAS',
      desc: 'Entrenamiento indispensable para desarrollar la coordinación entre Pilot Flying y Pilot Monitoring bajo estándares internacionales.',
      list: ['CRM', 'SOP', 'Callouts', 'Checklist', 'Trabajo en equipo'],
      price: '$350.000 ARS',
      icon: Users
    },
    {
      title: 'JOC',
      subtitle: 'CURSO DE ORIENTACIÓN EN REACTORES',
      hours: '15 HORAS',
      desc: 'Transición técnica hacia aeronaves a reacción. Aprendé gestión de energía, automatización, Director de Vuelo y operación del FMS.',
      list: [],
      price: '$250.000 ARS',
      icon: Plane
    },
    {
      title: 'CRM',
      subtitle: 'GESTIÓN DE RECURSOS DE LA TRIPULACIÓN',
      hours: '16 HORAS',
      desc: 'Capacitación enfocada en el factor humano, liderazgo, toma de decisiones y seguridad operacional.',
      list: [],
      price: '$180.000 ARS',
      icon: ShieldCheck
    },
    {
      title: 'BOEING\n737 NG',
      subtitle: 'SISTEMAS',
      hours: '30 HORAS',
      desc: 'Estudio completo de todos los sistemas del Boeing 737 NG.',
      list: ['Motores', 'Hidráulico', 'Eléctrico', 'Neumático', 'Presurización', 'FMC', 'Emergencias'],
      price: '$400.000 ARS',
      icon: Settings
    },
    {
      title: 'KING AIR\nB200',
      subtitle: 'SISTEMAS',
      hours: '20 HORAS',
      desc: 'Curso completo sobre los sistemas del Beechcraft King Air B200.',
      list: ['PT6A', 'Combustible', 'Eléctrico', 'Tren de Aterrizaje', 'Presurización', 'Procedimientos de Emergencia'],
      price: '$300.000 ARS',
      icon: Wrench
    }
  ];

  const whyUsNew = [
    { icon: UserCheck, label: 'INSTRUCTORES\nACTIVOS DE\nLÍNEA AÉREA' },
    { icon: Monitor, label: 'SIMULADORES\nDE ALTA\nFIDELIDAD' },
    { icon: ClipboardList, label: 'CAPACITACIÓN\nBAJO SOP\nINTERNACIONALES' },
    { icon: Users, label: 'PREPARACIÓN\nPARA\nENTREVISTAS' },
    { icon: Crosshair, label: 'ENTRENAMIENTO\nIFR' },
    { icon: BookOpen, label: 'MATERIAL\nACTUALIZADO' }
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
          <div className="w-full lg:w-[55%] px-4 py-8 sm:p-8 md:p-16 lg:p-24 flex flex-col justify-center relative z-10 bg-white lg:bg-transparent">
            <div className="w-12 h-1 bg-red-600 mb-4 md:mb-6" />
            <p className="text-red-600 font-bold text-xs md:text-sm tracking-widest uppercase mb-4">
              ENTRENÁ COMO EN LA REALIDAD. VOLÁ CON SEGURIDAD.
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-futuristic italic font-bold text-gray-900 leading-tight flex flex-col mb-6">
              <span>SIMULADORES</span>
              <span className="text-red-600 mt-2 md:mt-4">DE VUELO.</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-md mb-8">
              Entrenamiento profesional en simuladores de última generación para pilotos que buscan excelencia operacional. Boeing 737 y King Air 200 disponibles en Buenos Aires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                id="btn-sim-hero-ver-cursos"
                onClick={() => document.getElementById('cursos-teoricos').scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-600 text-white px-8 py-4 font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-700 transition-colors w-fit"
              >
                VER CURSOS <ChevronRight className="w-4 h-4" />
              </button>
              <a id="btn-sim-hero-reservar-sesion" href={`${whatsappBase}${encodeURIComponent("Hola, quisiera más información sobre las sesiones de simulador.")}`} target="_blank" rel="noopener noreferrer" className="border-2 border-gray-900 text-gray-900 px-8 py-4 font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-900 hover:text-white transition-colors w-fit">
                RESERVAR SESIÓN
              </a>
            </div>

            {/* Feature pills */}
            <div className="mt-10 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 md:pt-8 border-t border-gray-100">
              {[
                { icon: Target, label: 'ENTRENAMIENTO\nREALISTA' },
                { icon: Award, label: 'INSTRUCTORES\nEXPERTOS' },
                { icon: ShieldCheck, label: 'MÁXIMA\nSEGURIDAD' },
                { icon: Settings, label: 'TECNOLOGÍA\nAVANZADA' },
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

      {/* ── HEADER Cursos y Programas ── */}
      <div className="bg-gray-50 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-600 font-bold text-xs tracking-widest uppercase mb-2">FORMACIÓN PROFESIONAL</p>
          <h2 className="text-3xl md:text-5xl font-futuristic italic font-bold text-gray-900 leading-tight mb-4">
            CURSOS Y PROGRAMAS
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl">
            Entrenamientos teóricos y prácticos diseñados para pilotos que buscan ingresar o perfeccionarse en la aviación comercial y ejecutiva.
          </p>
        </div>
      </div>

      {/* ── Cursos Teóricos ── */}
      <Section id="cursos-teoricos" bg="bg-gray-50" className="!pt-4 !pb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-0.5 bg-red-600" />
          <h3 className="font-bold text-sm tracking-wider uppercase text-gray-900">CURSOS TEÓRICOS</h3>
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
                  id={`btn-teorico-${item.title.replace(/\s+/g, '-').toLowerCase()}`}
                  href={`${whatsappBase}${encodeURIComponent(`Hola, quisiera más información sobre el curso teórico: ${item.title.replace('\n', ' ')}`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="block w-full bg-red-600 text-white text-center py-2 text-xs font-bold uppercase hover:bg-red-700 transition-colors"
                >
                  MÁS INFORMACIÓN &rarr;
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
          <h3 className="font-bold text-sm tracking-wider uppercase text-gray-900">PROGRAMAS COMPLETOS</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* PROG 1 */}
          <div className="bg-[#111111] text-white p-8 relative overflow-hidden flex flex-col justify-between h-full group border border-gray-800 hover:border-red-600 transition-colors">
            <div className="relative z-10 mb-8">
              <div className="flex justify-between items-start mb-2">
                <p className="text-red-600 font-bold text-xs tracking-wider uppercase">PROGRAMA 1</p>
                <p className="text-red-600 font-bold text-sm">45 HORAS</p>
              </div>
              <h4 className="text-3xl md:text-4xl font-futuristic italic font-bold text-white mb-2 leading-tight">
                KING AIR B200
              </h4>
              <p className="text-xs font-bold uppercase tracking-wide text-gray-300 mb-6">CURSO COMPLETO DE TRANSICIÓN<br/>AVANZADA Y MULTIMOTOR</p>
              
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <p className="text-gray-400 text-sm md:w-1/2">
                  La formación definitiva para dar el salto al entorno corporativo y ejecutivo de alta performance.
                </p>
                <div className="md:w-1/2 flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <BookOpen strokeWidth={1} className="w-5 h-5 text-gray-500" />
                    <span className="text-sm">25 hs Teoría</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Monitor strokeWidth={1} className="w-5 h-5 text-gray-500" />
                    <span className="text-sm">20 hs Simulador</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 border-t border-gray-800 pt-6">
                {[
                  { i: UserCheck, l: "Instructor\nCorporativo" },
                  { i: FileText, l: "Manual\nincluido" },
                  { i: Crosshair, l: "Enfoque\nIFR" },
                  { i: Clock, l: "SOP y flujos\nejecutivos" }
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
                  href={`${whatsappBase}${encodeURIComponent("Hola, quisiera más información sobre el Programa Completo 1: King Air B200.")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-red-600 text-white px-8 py-3 text-xs font-bold uppercase hover:bg-red-700 transition-colors text-center"
                >
                  MÁS INFORMACIÓN &rarr;
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
                <p className="text-red-600 font-bold text-xs tracking-wider uppercase">PROGRAMA 2</p>
                <p className="text-red-600 font-bold text-sm">45 HORAS</p>
              </div>
              <h4 className="text-3xl md:text-4xl font-futuristic italic font-bold text-white mb-2 leading-tight">
                BOEING 737 NG MCC
              </h4>
              <p className="text-xs font-bold uppercase tracking-wide text-gray-300 mb-6">CURSO COMPLETO DE COOPERACIÓN<br/>EN TRIPULACIÓN MÚLTIPLE</p>
              
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <p className="text-gray-400 text-sm md:w-1/2">
                  El puente técnico y operativo hacia la cabina de una línea aérea comercial.
                </p>
                <div className="md:w-1/2 flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <BookOpen strokeWidth={1} className="w-5 h-5 text-gray-500" />
                    <span className="text-sm">25 hs Teoría</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Monitor strokeWidth={1} className="w-5 h-5 text-gray-500" />
                    <span className="text-sm">20 hs Simulador</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 border-t border-gray-800 pt-6">
                {[
                  { i: Users, l: "CRM\navanzado" },
                  { i: ShieldCheck, l: "MCC" },
                  { i: ClipboardList, l: "SOP" },
                  { i: Target, l: "PF / PM" }
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
                  href={`${whatsappBase}${encodeURIComponent("Hola, quisiera más información sobre el Programa Completo 2: Boeing 737 NG MCC.")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-red-600 text-white px-8 py-3 text-xs font-bold uppercase hover:bg-red-700 transition-colors text-center"
                >
                  MÁS INFORMACIÓN &rarr;
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
          <h3 className="font-bold text-sm tracking-wider uppercase text-gray-900">ENTRENAMIENTO EN SIMULADOR</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* SIM 1 */}
          <div className="bg-white border border-gray-200 overflow-hidden flex flex-col group">
            <div className="relative h-48 bg-gray-200">
              <div className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-700" 
                style={{ backgroundImage: `url("${import.meta.env.BASE_URL}simulator-cockpit.png")` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
              <div className="absolute bottom-4 left-6">
                <p className="text-red-600 font-bold text-xs tracking-wider uppercase mb-1">PROGRAMA 3</p>
                <h4 className="text-3xl font-futuristic italic font-bold text-gray-900 leading-none">
                  BOEING 737 NG
                </h4>
              </div>
            </div>
            <div className="p-6 flex-grow border-b border-gray-100">
              <p className="text-sm text-gray-600">
                Módulos de vuelo técnico para pilotos que buscan mantener habilitaciones, sumar horas instrumentales específicas o preparar un examen de ingreso.
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
          <h3 className="font-bold text-sm tracking-wider uppercase text-gray-900 text-center">¿POR QUÉ ENTRENAR EN BAIRES GLOBAL JETS?</h3>
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
              TU CARRERA EN AEROLÍNEAS<br/>
              <span className="text-red-600">COMIENZA ACÁ.</span>
            </h2>
          </div>
          <a
            id="btn-sim-banner-solicitar"
            href={`${whatsappBase}${encodeURIComponent("Hola, me gustaría solicitar información general sobre los cursos y programas de simulador.")}`}
            target="_blank" rel="noopener noreferrer"
            className="bg-red-600 text-white px-8 py-4 text-sm font-bold uppercase hover:bg-red-700 transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            SOLICITAR INFORMACIÓN &rarr;
          </a>
        </div>
      </div>

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
