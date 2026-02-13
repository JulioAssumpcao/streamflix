const CACHE_NAME = 'streamflix-shell-v2';
const APP_SHELL = [
  './index.html',
  './player.html',
  './css/netflix-style.css',
  './js/homepage.js',
  './js/netflix-player.js',
  './js/pwa-register.js',
  './assets/favicon.ico',
  './assets/favicon-16x16.png',
  './assets/favicon-32x32.png',
  './assets/apple-touch-icon.png',
  './assets/android-chrome-192x192.png',
  './assets/android-chrome-512x512.png',
  './manifest.webmanifest'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await Promise.all(
        APP_SHELL.map(async (asset) => {
          const response = await fetch(asset, { cache: 'no-cache' });
          if (response.ok && !response.redirected && response.type === 'basic') {
            await cache.put(asset, response.clone());
          }
        })
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') {
    return;
  }

  const url = new URL(request.url);

  // Do not cache external IPTV playlists/streams; keep live requests fresh.
  if (url.origin !== self.location.origin) {
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(networkFirstNavigation(request));
    return;
  }

  event.respondWith(cacheFirstAsset(request));
});

async function networkFirstNavigation(request) {
  try {
    const response = await fetch(request);
    await maybeCacheResponse(request, response);
    return response;
  } catch (error) {
    const cachedPage = await caches.match(request);
    if (cachedPage) {
      return cachedPage;
    }
    const fallback = await caches.match('./index.html');
    if (fallback) {
      return fallback;
    }
    return Response.error();
  }
}

async function cacheFirstAsset(request) {
  const cached = await caches.match(request);
  if (cached) {
    return cached;
  }

  const response = await fetch(request);
  await maybeCacheResponse(request, response);
  return response;
}

async function maybeCacheResponse(request, response) {
  if (!response || !response.ok) return;
  if (response.redirected || response.type !== 'basic') return;

  const cache = await caches.open(CACHE_NAME);
  await cache.put(request, response.clone());
}
