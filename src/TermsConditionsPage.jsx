import React, { useEffect } from 'react';
import { useLanguage } from './i18n/LanguageContext';

const TermsConditionsPage = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-futuristic italic font-bold text-gray-900 mb-8">
          {language === 'en' ? 'Terms & Conditions' : 'Términos y Condiciones'}
        </h1>
        <div className="bg-white p-8 border border-gray-200 text-gray-700 space-y-6 text-sm">
          <p>
            {language === 'en'
              ? 'Last updated: August 2026'
              : 'Última actualización: Agosto 2026'}
          </p>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introducción</h2>
            <p>Bienvenido a Baires Global Jets. Al acceder y utilizar este sitio web, usted acepta estar sujeto a los siguientes términos y condiciones de uso.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Servicios Ofrecidos</h2>
            <p>Baires Global Jets proporciona servicios de intermediación para el alquiler de jets privados, vuelos chárter ejecutivos y cursos de simulación de vuelo. Los detalles específicos y disponibilidad están sujetos a confirmación.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Privacidad y Protección de Datos</h2>
            <p>Su privacidad es importante para nosotros. La información personal será utilizada exclusivamente para procesar sus solicitudes y mejorar nuestros servicios, en conformidad con las leyes vigentes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Modificaciones</h2>
            <p>Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;
