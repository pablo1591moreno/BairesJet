import React, { useState, useEffect } from 'react';
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
  X
} from 'lucide-react';
import { airports } from './data/airports';

// --- COMPONENTES REUTILIZABLES ---

const Section = ({ id, children, className = '', bg = 'bg-white' }) => (
  <section id={id} className={`py-16 md:py-24 ${bg} ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
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

const defaultFeatures = [
  { icon: ShieldCheck, title: "SEGURIDAD GARANTIZADA", desc: "Operadores certificados y máximos estándares de seguridad." },
  { icon: Clock, title: "DISPONIBILIDAD 24/7", desc: "Atención personalizada los 365 días del año." },
  { icon: Globe, title: "COBERTURA GLOBAL", desc: "Vuelos nacionales e internacionales a cualquier destino." },
  { icon: User, title: "EXPERIENCIA PREMIUM", desc: "Servicio exclusivo, discreto y totalmente personalizado." }
];

// --- SECCIONES PRINCIPALES ---

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('#inicio');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { id: '#inicio', label: 'INICIO' },
    { id: '#vuelos', label: 'VUELOS PRIVADOS' },
    { id: '#flota', label: 'FLOTA' },
    { id: '#empresa', label: 'EMPRESA' },
    { id: '#contacto', label: 'CONTACTO' },
  ];

  return (
    <>
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center flex-col items-start relative z-50">
              <span className="text-3xl font-bold italic tracking-tighter text-black flex items-center">
                Baires<span className="text-red-600">jet</span>
                <Plane className="w-6 h-6 text-red-600 transform -rotate-45 -ml-1 -mt-4" />
              </span>
              <span className="text-[10px] tracking-widest text-gray-500 font-medium">- PRIVATE FLIGHTS -</span>
            </div>
            
            <div className="hidden md:flex space-x-8 text-sm font-semibold text-gray-800">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`transition-colors ${
                    activeTab === item.id
                      ? 'text-red-600 border-b-2 border-red-600 pb-1'
                      : 'hover:text-red-600'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <button className="hidden md:block bg-red-600 text-white px-6 py-2 font-bold text-sm hover:bg-red-700 transition-colors">
                RESERVAR
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
              <span className="text-2xl font-bold italic tracking-tighter text-black flex items-center">
                Baires<span className="text-red-600">jet</span>
                <Plane className="w-5 h-5 text-red-600 transform -rotate-45 -ml-1 -mt-3" />
              </span>
              <span className="text-[8px] tracking-widest text-gray-500 font-medium">- PRIVATE FLIGHTS -</span>
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
              <a
                key={item.id}
                href={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`transition-colors border-b border-gray-100 py-4 ${
                  activeTab === item.id ? 'text-red-600' : 'hover:text-red-600'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <button className="mt-8 bg-red-600 text-white w-full py-4 font-bold text-sm">
            RESERVAR VUELO
          </button>
        </div>
      )}
    </>
  );
};

const Hero = () => (
  <div id="inicio" className="relative pt-20 min-h-screen flex flex-col bg-white overflow-hidden">
    <div className="flex-grow flex flex-col lg:flex-row relative">
      {/* Mobile Top Image */}
      <div className="lg:hidden w-full h-64 sm:h-80 bg-cover bg-center" style={{ backgroundImage: `url("${import.meta.env.BASE_URL}hero-jet.jpg")` }} />
      
      <div className="w-full lg:w-[55%] p-6 sm:p-8 md:p-16 lg:p-24 flex flex-col justify-center relative z-10 bg-white lg:bg-transparent">
        <div className="w-12 h-1 bg-red-600 mb-6 md:mb-8"></div>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
          VOLAR.<br/><span className="text-red-600">SIN LÍMITES.</span>
        </h1>
        <p className="mt-4 md:mt-6 text-gray-600 text-base md:text-lg max-w-md">
          Vuelos privados de última generación. Una experiencia aérea completa, a tu medida.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="bg-red-600 text-white px-8 py-4 font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-700 transition-colors w-fit">
            COTIZÁ TU VUELO <ArrowRight strokeWidth={2} className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-10 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pt-6 md:pt-8">
          <div className="flex flex-col items-start text-left">
            <Plane strokeWidth={1} className="w-8 h-8 text-red-600 mb-2 transform -rotate-45" />
            <h3 className="font-bold text-xs mb-1">VUELOS PRIVADOS</h3>
            <p className="text-[10px] md:text-xs text-gray-500">A tu destino,<br/>a tu manera.</p>
          </div>
          <div className="flex flex-col items-start text-left">
            <Globe strokeWidth={1} className="w-8 h-8 text-red-600 mb-2" />
            <h3 className="font-bold text-xs mb-1">COBERTURA<br/>GLOBAL</h3>
            <p className="text-[10px] md:text-xs text-gray-500">Llegamos a donde<br/>necesites estar.</p>
          </div>
          <div className="flex flex-col items-start text-left col-span-2 md:col-span-1">
            <ShieldCheck strokeWidth={1} className="w-8 h-8 text-red-600 mb-2" />
            <h3 className="font-bold text-xs mb-1">SEGURIDAD<br/>Y CONFIDENCIALIDAD</h3>
            <p className="text-[10px] md:text-xs text-gray-500">Tu vuelo, tu información,<br/>tu privacidad.</p>
          </div>
        </div>
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
  const today = new Date().toISOString().split("T")[0];

  return (
    <Section id="vuelos" bg="bg-gray-50" className="relative overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-12 relative z-10">
        <div className="w-full lg:w-1/2">
          <div className="w-12 h-1 bg-red-600 mb-6"></div>
          <h4 className="text-red-600 font-bold text-xs md:text-sm tracking-wider uppercase mb-2">Vuelos Privados</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
            COTIZÁ TU VUELO<br/><span className="text-red-600">EN MINUTOS.</span>
          </h2>
          <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base max-w-lg">
            Completá el formulario y nuestro equipo te enviará una propuesta a medida, rápida y sin compromiso.
          </p>

          <form className="bg-white p-5 sm:p-6 md:p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">Tipo de Vuelo</label>
                <div className="relative border border-gray-200 p-3 flex items-center bg-gray-50/50">
                  <Plane strokeWidth={1.5} className="w-4 h-4 text-gray-400 mr-2" />
                  <select className="w-full bg-transparent outline-none text-gray-800 text-sm appearance-none">
                    <option>Ida y vuelta</option>
                    <option>Solo ida</option>
                  </select>
                  <ChevronDown strokeWidth={1.5} className="w-4 h-4 text-gray-400 absolute right-3" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">Cantidad de Pasajeros</label>
                <div className="relative border border-gray-200 p-3 flex items-center bg-gray-50/50">
                  <Users strokeWidth={1.5} className="w-4 h-4 text-gray-400 mr-2" />
                  <input type="number" min="1" placeholder="Ej: 4 pasajeros" className="w-full bg-transparent outline-none text-gray-800 text-sm placeholder-gray-400" />
                </div>
              </div>
              
              <AutocompleteInput 
                label="Origen" 
                placeholder="Ciudad o aeropuerto" 
                icon={MapPin} 
              />
              
              <AutocompleteInput 
                label="Destino" 
                placeholder="Ciudad o aeropuerto" 
                icon={MapPin} 
              />
              
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">Fecha de Salida</label>
                <div className="relative border border-gray-200 p-3 flex items-center bg-gray-50/50">
                  <input type="date" min={today} className="w-full bg-transparent outline-none text-gray-800 text-sm placeholder-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">Fecha de Regreso</label>
                <div className="relative border border-gray-200 p-3 flex items-center bg-gray-50/50">
                  <input type="date" min={today} className="w-full bg-transparent outline-none text-gray-800 text-sm placeholder-gray-400 pr-24" />
                  <div className="absolute right-3 flex items-center gap-2 bg-gray-50/80 px-2 py-1 rounded">
                    <input type="checkbox" id="solo_ida" className="accent-red-600" />
                    <label htmlFor="solo_ida" className="text-xs text-gray-600 cursor-pointer">Solo ida</label>
                  </div>
                </div>
              </div>
               <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">Horario Preferido</label>
                <div className="relative border border-gray-200 p-3 flex items-center bg-gray-50/50">
                  <Clock strokeWidth={1.5} className="w-4 h-4 text-gray-400 mr-2" />
                  <select className="w-full bg-transparent outline-none text-gray-800 text-sm appearance-none">
                    <option>Horario aproximado</option>
                    <option>Mañana</option>
                    <option>Tarde</option>
                    <option>Noche</option>
                  </select>
                  <ChevronDown strokeWidth={1.5} className="w-4 h-4 text-gray-400 absolute right-3" />
                </div>
              </div>
               <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">Tipo de Aeronave</label>
                <div className="relative border border-gray-200 p-3 flex items-center bg-gray-50/50">
                  <Plane strokeWidth={1.5} className="w-4 h-4 text-gray-400 mr-2" />
                  <select className="w-full bg-transparent outline-none text-gray-800 text-sm appearance-none">
                    <option>Seleccioná preferencia</option>
                    <option>Light Jet</option>
                    <option>Medium Jet</option>
                    <option>Heavy Jet</option>
                  </select>
                  <ChevronDown strokeWidth={1.5} className="w-4 h-4 text-gray-400 absolute right-3" />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-bold text-sm mb-4 text-gray-900 uppercase">Datos de Contacto</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">Nombre Completo</label>
                  <div className="relative border border-gray-200 p-3 flex items-center bg-gray-50/50 focus-within:border-red-600 focus-within:bg-white transition-colors">
                    <User strokeWidth={1.5} className="w-4 h-4 text-gray-400 mr-2" />
                    <input type="text" placeholder="Ej: Juan Pérez" className="w-full bg-transparent outline-none text-gray-800 text-sm placeholder-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">Email</label>
                  <div className="relative border border-gray-200 p-3 flex items-center bg-gray-50/50 focus-within:border-red-600 focus-within:bg-white transition-colors">
                    <Mail strokeWidth={1.5} className="w-4 h-4 text-gray-400 mr-2" />
                    <input type="email" placeholder="ejemplo@correo.com" className="w-full bg-transparent outline-none text-gray-800 text-sm placeholder-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">Teléfono</label>
                  <div className="relative border border-gray-200 p-3 flex items-center bg-gray-50/50 focus-within:border-red-600 focus-within:bg-white transition-colors">
                    <Phone strokeWidth={1.5} className="w-4 h-4 text-gray-400 mr-2" />
                    <input type="tel" placeholder="+54 9 11 1234-5678" className="w-full bg-transparent outline-none text-gray-800 text-sm placeholder-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
              <button className="w-full sm:w-auto bg-red-600 text-white px-8 py-4 font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-700 transition-colors">
                SOLICITAR COTIZACIÓN <ArrowRight strokeWidth={2} className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Lock strokeWidth={1.5} className="w-4 h-4" />
                <span>Tu información está<br/>segura y protegida.</span>
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
      
      <button className="w-full bg-red-600 text-white py-3 font-bold text-xs uppercase hover:bg-red-700 transition-colors">
        {buttonText}
      </button>
    </div>
  </div>
);



const FleetSection = () => {
  const fleetFeatures = [
    { icon: ShieldCheck, title: "OPERADORES CERTIFICADOS", desc: "Máximos estándares de seguridad y mantenimiento internacional." },
    { icon: Globe, title: "COBERTURA NACIONAL E INTERNACIONAL", desc: "Llegamos a los principales destinos con la mejor conectividad." },
    { icon: Clock, title: "DISPONIBILIDAD 24/7", desc: "Atención personalizada todo el año, a cualquier hora." },
    { icon: User, title: "ATENCIÓN PERSONALIZADA", desc: "Un equipo dedicado a brindarte la mejor experiencia de vuelo." }
  ];

  return (
  <Section id="flota" bg="bg-white" className="relative overflow-hidden">
    <Plane className="absolute right-10 top-20 w-96 h-96 text-gray-50 opacity-50 transform rotate-45 pointer-events-none" />
    <div className="text-center mb-10 md:mb-12 relative z-10">
      <div className="w-12 h-1 bg-red-600 mx-auto mb-4 md:mb-6"></div>
      <h4 className="text-red-600 font-bold text-xs md:text-sm tracking-wider uppercase mb-2">Nuestra Flota</h4>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
        DESCRIPCIÓN DE<br/><span className="text-red-600">JETS PRIVADOS</span>
      </h2>
      <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto px-4 md:px-0">
        Contamos con una flota cuidadosamente seleccionada de jets privados que combinan performance, confort y tecnología de última generación para ofrecerte una experiencia de vuelo única.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 relative z-10">
      <FleetCard 
        type="Light Jets"
        img="https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&q=80"
        description="Eficiencia y acceso a más destinos."
        features="Ideales para vuelos cortos y regionales, con acceso a aeropuertos más pequeños y máxima eficiencia."
        passengers="6 pasajeros"
        range="hasta 2.000 km"
        speed="Velocidad crucero\nhasta 740 km/h"
        cabin="Cabina\nejecutiva"
        buttonText="VER DISPONIBILIDAD"
      />
      <FleetCard 
        type="Medium Jets"
        img={`${import.meta.env.BASE_URL}hero-jet.jpg`}
        description="Versatilidad y confort en cada vuelo."
        features="La mejor combinación entre alcance, confort y performance para vuelos nacionales e internacionales."
        passengers="8 pasajeros"
        range="hasta 4.500 km"
        speed="Wi-Fi y\ncatering opcional"
        cabin="Equipaje\nampliado"
        buttonText="SOLICITAR COTIZACIÓN"
        Icon3={Wifi}
        Icon4={Briefcase}
      />
      <FleetCard 
        type="Heavy Jets"
        img="https://images.unsplash.com/photo-1583003463853-2947ea875d97?auto=format&fit=crop&q=80"
        description="Rendimiento superior. Alcance excepcional."
        features="Diseñados para vuelos de larga distancia con cabinas espaciosas y servicios personalizados de primer nivel."
        passengers="14 pasajeros"
        range="hasta 12.000 km"
        speed="Cabina\nde lujo"
        cabin="Vuelos\ninternacionales"
        buttonText="CHARTER VIP"
        Icon3={User}
        Icon4={Plane}
      />
    </div>
    
    <FeatureStrip items={fleetFeatures} className="border-t border-gray-100 bg-white" />
  </Section>
  );
};

const ExperienceSection = () => {
  const expFeatures = [
    { icon: ShieldCheck, title: "SEGURIDAD GARANTIZADA", desc: "Protocolos y estándares internacionales." },
    { icon: Globe, title: "COBERTURA GLOBAL", desc: "Vuelos a destinos nacionales e internacionales." },
    { icon: Headset, title: "SOPORTE DEDICADO", desc: "Asistencia personalizada en cada etapa." },
    { icon: Award, title: "CALIDAD CERTIFICADA", desc: "Equipamiento de última generación y atención experta." }
  ];

  return (
  <Section id="empresa" bg="bg-white">
    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 mb-12 md:mb-16">
      <div className="w-full lg:w-1/2">
        <div className="w-12 h-1 bg-red-600 mb-4 md:mb-6"></div>
        <h4 className="text-red-600 font-bold text-xs md:text-sm tracking-wider uppercase mb-2">Nuestro Compromiso</h4>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
          EXPERIENCIA AERONÁUTICA<br/>PREMIUM.
        </h2>
        <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
          En BairesJet ofrecemos vuelos privados de máxima calidad. Nuestro compromiso es brindarte seguridad, eficiencia y una experiencia personalizada en cada detalle, superando tus expectativas en cada viaje.
        </p>
      </div>
      <div className="relative z-10 w-full md:w-1/2 p-6 md:p-12">
        <img src={`${import.meta.env.BASE_URL}hero-jet.jpg`} alt="Private Jet Sunset" className="w-full h-auto object-cover shadow-lg" />
      </div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 mb-12 md:mb-16 text-center">
      <div>
        <Plane strokeWidth={1} className="w-10 h-10 mx-auto text-red-600 mb-4" />
        <h4 className="font-bold text-sm mb-2">VUELOS PRIVADOS</h4>
        <p className="text-xs text-gray-500">Jets privados para viajes personales. Confort, privacidad y eficiencia en cada destino.</p>
      </div>
      <div>
        <Clock strokeWidth={1} className="w-10 h-10 mx-auto text-red-600 mb-4" />
        <h4 className="font-bold text-sm mb-2">ATENCIÓN 24/7</h4>
        <p className="text-xs text-gray-500">Coordinación inmediata para vuelos en cualquier momento.</p>
      </div>
      <div>
        <Armchair strokeWidth={1} className="w-10 h-10 mx-auto text-red-600 mb-4" />
        <h4 className="font-bold text-sm mb-2">CONFORT EXCLUSIVO</h4>
        <p className="text-xs text-gray-500">Cabinas diseñadas para garantizar tu descanso y comodidad.</p>
      </div>
      <div>
        <ShieldCheck strokeWidth={1} className="w-10 h-10 mx-auto text-red-600 mb-4" />
        <h4 className="font-bold text-sm mb-2">PRIVACIDAD Y SEGURIDAD</h4>
        <p className="text-xs text-gray-500">Operaciones realizadas bajo estrictos estándares de confidencialidad y seguridad operacional.</p>
      </div>
      <div>
        <User strokeWidth={1} className="w-10 h-10 mx-auto text-red-600 mb-4" />
        <h4 className="font-bold text-sm mb-2">EXPERIENCIA PERSONALIZADA</h4>
        <p className="text-xs text-gray-500">Cada servicio se adapta a las necesidades específicas de cada cliente.</p>
      </div>
      <div>
        <MapPin strokeWidth={1} className="w-10 h-10 mx-auto text-red-600 mb-4" />
        <h4 className="font-bold text-sm mb-2">UBICACIÓN ESTRATÉGICA</h4>
        <p className="text-xs text-gray-500">Acceso rápido y atención dedicada para operaciones corporativas.</p>
      </div>
    </div>

    <div className="bg-gray-50 border border-gray-200 flex flex-col lg:flex-row items-center justify-between p-6 md:p-8 rounded-sm">
      <div className="lg:w-1/2 mb-6 lg:mb-0 text-center lg:text-left">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">RESERVÁ TU PRÓXIMA EXPERIENCIA<br/><span className="text-red-600">CON BAIRESJET</span></h3>
        <p className="text-xs md:text-sm text-gray-600">Ya sea que quieras alcanzar tu próximo destino por negocios o placer, estamos listos para acompañarte con el más alto estándar de calidad.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 lg:w-auto w-full">
        <button className="bg-red-600 text-white px-6 py-3 font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-700 transition-colors w-full sm:w-auto">
          <Plane className="w-4 h-4 transform -rotate-45" /> COTIZAR VUELO PRIVADO
        </button>
      </div>
    </div>
    <FeatureStrip items={expFeatures} className="mt-8 bg-white border-none" />
  </Section>
  );
};

const ContactSection = () => {
  const contactFeatures = [
    { icon: ShieldCheck, title: "SEGURIDAD GARANTIZADA", desc: "Operaciones bajo estrictos estándares internacionales de seguridad." },
    { icon: Globe, title: "COBERTURA GLOBAL", desc: "Vuelos a destinos nacionales e internacionales." },
    { icon: Headset, title: "SOPORTE DEDICADO", desc: "Asistencia personalizada antes, durante y después de tu vuelo." },
    { icon: Award, title: "CALIDAD CERTIFICADA", desc: "Equipamiento de última generación y personal altamente capacitado." }
  ];

  return (
  <Section id="contacto" bg="bg-white" className="pt-0 md:pt-16 lg:pt-24">
    <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
      <div className="w-full lg:w-1/3">
        <div className="w-12 h-1 bg-red-600 mb-4 md:mb-6 mt-8 md:mt-0"></div>
        <h4 className="text-red-600 font-bold text-xs md:text-sm tracking-wider uppercase mb-2">Contacto</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
          ESTAMOS PARA<br/><span className="text-red-600">AYUDARTE.</span>
        </h2>
        <p className="text-gray-600 mb-6 md:mb-8 text-sm">
          Nuestro equipo está disponible para asesorarte en vuelos privados y soluciones personalizadas. Comunicate con nosotros.
        </p>

        <div className="space-y-4">
          <div className="border border-gray-200 p-4 flex items-start gap-4 hover:border-red-600 transition-colors group bg-white">
            <div className="w-10 h-10 rounded-full border border-red-600 flex items-center justify-center bg-white group-hover:bg-red-50 transition-colors shrink-0">
              <Mail strokeWidth={1} className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900 mb-1">CORREOS ELECTRÓNICOS</h4>
              <p className="text-sm text-red-600">vuelos@bairesjet.com.ar</p>
              <p className="text-sm text-red-600">info@bairesjet.com.ar</p>
            </div>
          </div>
          
          <div className="border border-gray-200 p-4 flex items-start gap-4 hover:border-red-600 transition-colors group bg-white">
            <div className="w-10 h-10 rounded-full border border-red-600 flex items-center justify-center bg-white group-hover:bg-red-50 transition-colors shrink-0">
              <Phone strokeWidth={1} className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900 mb-1">TELÉFONOS</h4>
              <p className="text-sm text-red-600">+54 11 5272 1234</p>
              <p className="text-sm text-red-600">+54 9 11 2345 6789</p>
              <p className="text-xs text-gray-500 mt-1">Lunes a Domingo 24/7</p>
            </div>
          </div>

          <div className="border border-gray-200 p-4 flex items-start gap-4 hover:border-red-600 transition-colors group bg-white">
            <div className="w-10 h-10 rounded-full border border-red-600 flex items-center justify-center bg-white group-hover:bg-red-50 transition-colors shrink-0">
              <MapPin strokeWidth={1} className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900 mb-1">UBICACIÓN</h4>
              <p className="text-sm text-red-600">Aeroparque Jorge Newbery (AEP)</p>
              <p className="text-xs text-gray-500 mt-1">Av. Rafael Obligado s/n, CABA, Argentina</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <a href="#" className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-600 hover:text-red-600 hover:border-red-600 transition-colors">
            <Camera strokeWidth={1.5} className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-600 hover:text-red-600 hover:border-red-600 transition-colors">
            <MessageCircle strokeWidth={1.5} className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-600 hover:text-red-600 hover:border-red-600 transition-colors">
            <Mail strokeWidth={1.5} className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div className="w-full lg:w-2/3 h-64 sm:h-96 lg:h-auto bg-gray-100 relative overflow-hidden border border-gray-200 mt-8 lg:mt-0">
        {/* Placeholder Map Layout */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 grayscale"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 shadow-lg flex items-center gap-3 border border-gray-200">
           <MapPin strokeWidth={2} className="text-red-600 w-5 h-5 md:w-6 md:h-6 shrink-0" />
           <div>
             <p className="font-bold text-xs md:text-sm text-gray-900">AEROPARQUE</p>
             <p className="text-[10px] md:text-xs text-gray-500">Jorge Newbery (AEP)</p>
           </div>
        </div>
      </div>
    </div>
    
    <div className="mt-12 md:mt-16 bg-gray-50 border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <div className="w-12 h-1 bg-red-600 mb-4 hidden md:block"></div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          ¿LISTO PARA<br/><span className="text-red-600">VOLAR?</span>
        </h3>
      </div>
      <p className="text-gray-600 text-sm hidden lg:block border-l border-gray-300 pl-6 h-full flex items-center">Solicitá más información o cotizá tu próximo servicio.</p>
      <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
        <button className="bg-red-600 text-white px-8 py-3 font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-700 transition-colors whitespace-nowrap">
          <Plane strokeWidth={2} className="w-4 h-4 transform -rotate-45" /> COTIZAR VUELO PRIVADO
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
        href="https://wa.me/5491123456789" 
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

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <QuoteSection />
      <FleetSection />
      <ExperienceSection />
      <ContactSection />
      <WhatsAppButton />
    </div>
  );
}