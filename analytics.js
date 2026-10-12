/*
 * GENIMAD — medición y seguimiento de conversiones.
 *
 * 1) Pega tus IDs abajo. Mientras un ID esté vacío, ese servicio NO se carga.
 * 2) Eventos que se registran automáticamente (sin tocar el HTML):
 *      whatsapp_click  → clic a cualquier enlace de WhatsApp (wa.me)
 *      phone_click     → clic a "tel:"
 *      email_click     → clic a "mailto:"
 *      directions_click→ clic a Google Maps
 *      social_click    → clic a Instagram / Facebook / TikTok
 *    Cada evento lleva "location" (hero, header, flotante, contacto, horarios,
 *    consulta:<especialidad>...) para saber qué botón genera más citas.
 * 3) En GA4 marca whatsapp_click y phone_click como "eventos clave" (conversiones).
 */
(function () {
  'use strict';

  var CONFIG = {
    ga4: '',      // ej. 'G-XXXXXXXXXX'  (Google Analytics 4)
    metaPixel: '',// ej. '123456789012345'  (Meta Pixel: Facebook + Instagram)
    tiktokPixel: '' // ej. 'CXXXXXXXXXXXXXXXXXXX'  (TikTok Pixel)
  };

  // ---------- Carga de servicios ----------
  if (CONFIG.ga4) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(CONFIG.ga4);
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', CONFIG.ga4);
  }

  if (CONFIG.metaPixel) {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n;
      n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', CONFIG.metaPixel);
    window.fbq('track', 'PageView');
  }

  if (CONFIG.tiktokPixel) {
    !function (w, d, t) {
      w.TiktokAnalyticsObject = t;
      var ttq = w[t] = w[t] || [];
      ttq.methods = ['page', 'track', 'identify', 'instances', 'debug', 'on', 'off', 'once', 'ready', 'alias', 'group', 'enableCookie', 'disableCookie'];
      ttq.setAndDefer = function (t, e) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))); }; };
      for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
      ttq.instance = function (t) {
        for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);
        return e;
      };
      ttq.load = function (e, n) {
        var r = 'https://analytics.tiktok.com/i18n/pixel/events.js';
        ttq._i = ttq._i || {}; ttq._i[e] = []; ttq._i[e]._u = r;
        ttq._t = ttq._t || {}; ttq._t[e] = +new Date();
        ttq._o = ttq._o || {}; ttq._o[e] = n || {};
        var o = document.createElement('script');
        o.type = 'text/javascript'; o.async = !0; o.src = r + '?sdkid=' + e + '&lib=' + t;
        var a = document.getElementsByTagName('script')[0];
        a.parentNode.insertBefore(o, a);
      };
      ttq.load(CONFIG.tiktokPixel);
      ttq.page();
    }(window, document, 'ttq');
  }

  // ---------- Utilidades ----------
  function clean(text) {
    return (text || '').replace(/\s+/g, ' ').trim().slice(0, 80);
  }

  // Dónde está el botón en la página (para comparar qué botón convierte más).
  function locationOf(el) {
    if (el.closest('.whatsapp-float')) return 'flotante';
    if (el.closest('header')) return 'header';
    if (el.closest('.hero')) return 'hero';
    var card = el.closest('.consulta-card');
    if (card) {
      var h = card.querySelector('h3');
      return 'consulta:' + clean(h ? h.textContent : 'desconocida');
    }
    var section = el.closest('section[id]');
    if (section) return section.id;
    if (el.closest('footer')) return 'footer';
    return 'otro';
  }

  function whatsappMessage(href) {
    try {
      return clean(new URL(href).searchParams.get('text') || '');
    } catch (e) {
      return '';
    }
  }

  function send(eventName, params, metaEvent) {
    params.page_path = location.pathname;
    try {
      if (typeof window.gtag === 'function') window.gtag('event', eventName, params);
      if (typeof window.fbq === 'function') window.fbq('track', metaEvent, { content_name: params.location });
      if (window.ttq && typeof window.ttq.track === 'function') window.ttq.track(metaEvent, { content_name: params.location });
    } catch (e) { /* nunca romper la página por medición */ }
  }

  // ---------- Seguimiento de clics (delegado) ----------
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest && ev.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var where = locationOf(a);

    if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(href)) {
      send('whatsapp_click', { location: where, message: whatsappMessage(href) }, 'Contact');
    } else if (/^tel:/i.test(href)) {
      send('phone_click', { location: where, phone: href.replace(/^tel:/i, '') }, 'Contact');
    } else if (/^mailto:/i.test(href)) {
      send('email_click', { location: where }, 'Contact');
    } else if (/maps\.app\.goo\.gl|google\.com\/maps/i.test(href)) {
      send('directions_click', { location: where }, 'FindLocation');
    } else if (/instagram\.com|facebook\.com|tiktok\.com/i.test(href)) {
      var network = (href.match(/instagram|facebook|tiktok/i) || ['otro'])[0].toLowerCase();
      send('social_click', { location: where, network: network }, 'ViewContent');
    }
  }, true);
})();
