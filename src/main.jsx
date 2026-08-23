import { StrictMode, useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import SimulatorsPage from './SimulatorsPage.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import { trackEvent, trackPageview } from './analytics.js'

// Mapa de botones clave a su categoria de negocio, para poder
// diferenciar en Google Analytics el trafico de "Venta de Vuelos"
// del de "Cursos y Simuladores" y de "Contacto general".
const CTA_CATEGORIAS = {
  'btn-hero-reservar-vuelo': 'vuelos',
  'btn-form-solicitar-cotizacion': 'vuelos',
  'btn-experiencia-cotizar-vuelo': 'vuelos',
  'btn-contacto-cotizar-vuelo': 'vuelos',
  'btn-mobile-menu-reservar': 'vuelos',
  'btn-hero-reservar-simulador': 'cursos',
  'btn-sim-hero-ver-cursos': 'cursos',
  'btn-sim-hero-reservar-sesion': 'cursos',
  'btn-programa-king-air': 'cursos',
  'btn-programa-737-mcc': 'cursos',
  'btn-sim-banner-solicitar': 'cursos',
  'btn-sim-cta-reservar-whatsapp': 'cursos',
  'btn-teorico-mcc': 'cursos',
  'btn-teorico-joc': 'cursos',
  'btn-teorico-crm': 'cursos',
  'btn-teorico-boeing-737-ng': 'cursos',
  'btn-teorico-king-air-b200': 'cursos',
  'btn-whatsapp-flotante': 'contacto',
}

function CtaTracker() {
  useEffect(() => {
    const handleClick = (e) => {
      const el = e.target.closest('[id]')
      if (el && CTA_CATEGORIAS[el.id]) {
        trackEvent('click_cta', {
          cta_id: el.id,
          cta_categoria: CTA_CATEGORIAS[el.id],
        })
      }

      // Meta Pixel: Track 'Contact' for all WhatsApp links
      const link = e.target.closest('a')
      if (link && link.href && link.href.includes('wa.me')) {
        if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
          window.fbq('track', 'Contact')
        }
      }
    }
    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [])
  return null
}

function RouteTracker() {
  const location = useLocation()
  const isFirstRender = useRef(true)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    trackPageview(location.pathname + location.hash, document.title)
  }, [location.pathname])
  return null
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <LanguageProvider>
  <HashRouter>
  <CtaTracker />
  <RouteTracker />
  <Routes>
  <Route path="/" element={<App />} />

    <Route path="/simuladores" element={<SimulatorsPage />} />
  </Routes>
  </HashRouter>
  </LanguageProvider>
  </StrictMode>,
  )
