
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js');

self.addEventListener('install', function (event) {
    const data = [
        "/Tech-Noter/",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css",
        "https://code.jquery.com/jquery-3.6.1.min.js",
        "/Tech-Noter/en/editor/index.html",
        "/Tech-Noter/en/docs/index.html",
        "/Tech-Noter/en/home/index.html",
        "/Tech-Noter/en/docs/screenshots/index.html",
        "/Tech-Noter/en/editor/controller.js",
        "/Tech-Noter/en/home/home.js",
        "/Tech-Noter/en/docs/doc.js",
        "/Tech-Noter/en/editor/styles.css",
        "/Tech-Noter/en/home/styles.css",
        "/Tech-Noter/en/docs/styles.css",
        "/Tech-Noter/en/docs/screenshots/Screenshot.png",
        "/Tech-Noter/en/sw.js",
        "/Tech-Noter/en/icons/icon.png",
        "/Tech-Noter/en/manifest.webmanifest",
        "/Tech-Noter/en/",
        "/Tech-Noter/en/screenshots/Screenshot.png",
        "/Tech-Noter/en/bootstrap/bootstrap-icons-1.9.1/bootstrap-icons.css",
        "/Tech-Noter/en/docs/screenshots/icon.png"
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
