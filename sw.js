// Need to add polyfill for safari

// cache name (change this when modified)
const cacheName = 'restaurant-app-v1'

// when the service work is installed cache page assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/styles.css',
                'js/main.js',
                'js/restaurant_info.js',
                'js/dbhelper.js',
            ])
        })
    );
});

// intercept fetch events and return cache data if available
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then( response => {
            return response || fetch(event.request);
        })
    )
});