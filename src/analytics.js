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
  
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
}

export function initMetaPixel() {
  if (typeof window === 'undefined') return;
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  window.fbq('init', '2368438920353530');
}
