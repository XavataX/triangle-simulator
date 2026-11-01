/* Triangle Simulator 2.0.14: offline application-shell and explicit updates. */
const RELEASE = '2.0.14';
const CACHE_PREFIX = 'triangle-simulator:' + new URL(self.registration.scope).pathname + ':';
const CACHE_NAME = CACHE_PREFIX + RELEASE;
const CORE = [
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache =>
    cache.addAll(CORE.map(path => new Request(new URL(path, self.registration.scope), {cache:'reload'})))
  ));
  // Do not call skipWaiting() here: current lessons must not reload unasked.
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) {
      if (key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME) await caches.delete(key);
    }
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  const scope = new URL(self.registration.scope);
  if (url.origin !== scope.origin || !url.pathname.startsWith(scope.pathname)) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    if (request.mode === 'navigate') {
      // Support the scope root ('./') and './index.html', including offline.
      if (url.pathname === scope.pathname || url.pathname === scope.pathname + 'index.html') {
        const app = await cache.match('./index.html');
        if (app) return app;
      }
      return fetch(request);
    }
    const stored = await cache.match(request, {ignoreSearch:true});
    if (stored) return stored;
    return fetch(request);
  })());
});
