// Helper de tracking para Google Analytics (GA4)
// Centraliza el envio de eventos personalizados: clics en botones clave (CTAs)
// diferenciando "Venta de Vuelos" vs "Cursos y Simuladores" vs "Contacto general",
// y vistas de pagina virtuales para la SPA (React Router).

export function trackEvent(action, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  }
}

export function trackPageview(path, title) {
  trackEvent('page_view', {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  });
}
