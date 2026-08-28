const CACHE_NAME = 'parivahan-sarathi-20260828-50';
const APP_SHELL = [
  './',
  './index.html',
  './styles.css?v=20260828-50',
  './app.js?v=20260828-50',
  './manifest.webmanifest',
  './404.html',
  './assets/brand/favicon.svg',
  './assets/brand/icon-192.png',
  './assets/brand/icon-512.png',
  './assets/brand/og-card.png',
  './assets/vehicles/honda-city-white-v1.png',
  './assets/vehicles/tvs-jupiter-white-v1.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== location.origin) return;
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).then(response => {
      if (!response.ok) return response;
      const copy = response.clone();
      return caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy)).catch(() => undefined).then(() => response);
    }).catch(() => caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    if (!response.ok) return response;
    const copy = response.clone();
    return caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)).catch(() => undefined).then(() => response);
  })));
});
