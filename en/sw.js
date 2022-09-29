
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js');

self.addEventListener('install', function (event) {
    const data = [
        "./",
        "./bootstrap",
        "https://code.jquery.com/jquery-3.6.1.min.js",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css",
        "home/styles.css",
        "home/index.html",
        "home/home.js",
        "editor/styles.css",
        "editor/index.html",
        "editor/controller.js",
        "docs/styles.css",
        "docs/screenshots/index.html",
        "docs/index.html",
        "docs/doc.js",
        "bootstrap/bootstrap-icons-1.9.1/bootstrap-icons.css"
    ]
    event.waitUntil(
        caches.open('tech-noter-v1').then(function (cache) {
            return cache.addAll(data);
        })
    );
});

self.addEventListener('activate', function (event) {
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (cachedResponse) {
            return cachedResponse || fetch(event.request);
        })
    );
});
