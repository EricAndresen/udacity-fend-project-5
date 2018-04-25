// Need to add polyfill for safari

// TODO: only cache images if user clicks on restaurant see https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
// TODO: if cacheName is changed delete old cache

// cache name (change this when modified)
const cacheName = 'restaurant-app-v1'

// when the service work is installed cache page assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/restaurant.html',
                '/css/styles.css',
                'js/main.js',
                'js/restaurant_info.js',
                'js/dbhelper.js',
                '/data/restaurants.json',
                '/img/1.jpg',
                '/img/2.jpg',
                '/img/3.jpg',
                '/img/4.jpg',
                '/img/5.jpg',
                '/img/6.jpg',
                '/img/7.jpg',
                '/img/8.jpg',
                '/img/9.jpg',
                '/img/10.jpg',
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
        .catch( e => console.log(e))
    );;
});