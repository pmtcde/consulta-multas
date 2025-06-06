self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('pmt-cache').then(cache => {
        return cache.addAll([
          './',
          './index.html',
          './manifest.json',
          './logo pmt.png',
          './logo pmt.png',
          'https://cdn.jsdelivr.net/npm/papaparse@5.3.2/papaparse.min.js'
        ]);
      })
    );
    self.skipWaiting();
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  