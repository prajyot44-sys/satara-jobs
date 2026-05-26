const CACHE_NAME = 'satara-jobs-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/home.html',
  '/jobs.html',
  '/job-details.html',
  '/govt.html',
  '/notifications.html',
  '/profile.html',
  '/saved.html',
  '/Search.html',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});