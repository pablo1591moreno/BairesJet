import React, { useEffect } from 'react';
import { useLanguage } from './i18n/LanguageContext';

const PrivacyPolicyPage = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-futuristic italic font-bold text-gray-900 mb-8">
          {language === 'en' ? 'Privacy Policy' : 'Políticas de Privacidad'}
        </h1>
        <div className="bg-white p-8 border border-gray-200 text-gray-700 space-y-6 text-sm">
          <p>
            {language === 'en'
              ? 'Last updated: August 2026'
              : 'Última actualización: Agosto 2026'}
          </p>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Información que Recopilamos</h2>
            <p>En Baires Global Jets recopilamos información personal que usted nos proporciona directamente a través de nuestros formularios de contacto o al solicitar cotizaciones, la cual puede incluir: nombre completo, dirección de correo electrónico, número de teléfono y detalles de vuelo requeridos.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Uso de la Información</h2>
            <p>Utilizamos su información personal exclusivamente para: proveer los servicios solicitados de vuelos chárter o simuladores, responder a sus consultas, mejorar nuestro sitio web y cumplir con requerimientos legales o de aviación (como normativas ANAC).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Cookies y Tecnologías de Seguimiento</h2>
            <p>Nuestro sitio utiliza cookies de análisis (como Google Analytics o Meta Pixel) para entender cómo los usuarios interactúan con nuestra página, optimizar campañas publicitarias y brindar una mejor experiencia. Usted puede configurar su navegador para rechazar las cookies si así lo desea.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Compartir Información</h2>
            <p>Baires Global Jets no vende ni alquila su información personal a terceros. Solo compartimos sus datos con proveedores de servicios esenciales para la operatividad de los vuelos (por ejemplo, autoridades aeroportuarias) o cuando sea requerido por la ley.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Seguridad</h2>
            <p>Tomamos medidas razonables para proteger la información personal que nos confía frente a accesos no autorizados, alteraciones o destrucción. Sin embargo, ninguna transmisión por internet es 100% segura.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Contacto</h2>
            <p>Si tiene alguna pregunta sobre esta Política de Privacidad, por favor contáctenos a info@bairesglobaljets.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
