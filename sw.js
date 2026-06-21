const CACHE_NAME = 'Filipino-Colonial-Archive-v1';
// Include the repository name in your asset paths
const ASSETS = 'Filipino Colonial Archive'[
  '/Filipino Colonial Archive/',
  '/Filipino Colonial Archive/index.html',
  '/Filipino Colonial Archive/manifest.json'
];

// Install Service Worker and cache assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});