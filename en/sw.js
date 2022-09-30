
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js');


crossOriginIsolated = false;


self.addEventListener('install', function (event) {
    const data = [
        "https://github.com/SolarStudent121/Tech-Noter/blob/1a8bcd89abce1f39390501266ec36dae6059f4c9/en/bootstrap/bootstrap-icons-1.9.1",
        "https://code.jquery.com/jquery-3.6.1.min.js",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",
        "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css",
        "https://github.com/SolarStudent121/Tech-Noter/blob/1a8bcd89abce1f39390501266ec36dae6059f4c9/en/home/styles.css",
        "https://github.com/SolarStudent121/Tech-Noter/blob/1a8bcd89abce1f39390501266ec36dae6059f4c9/en/home/index.html",
        "https://github.com/SolarStudent121/Tech-Noter/blob/1a8bcd89abce1f39390501266ec36dae6059f4c9/en/home/home.js",
        "https://github.com/SolarStudent121/Tech-Noter/blob/1a8bcd89abce1f39390501266ec36dae6059f4c9/en/editor/styles.css",
        "https://github.com/SolarStudent121/Tech-Noter/blob/1a8bcd89abce1f39390501266ec36dae6059f4c9/en/editor/index.html",
        "https://github.com/SolarStudent121/Tech-Noter/blob/1a8bcd89abce1f39390501266ec36dae6059f4c9/en/editor/styles.css",
        "https://github.com/SolarStudent121/Tech-Noter/blob/1a8bcd89abce1f39390501266ec36dae6059f4c9/en/docs/styles.css",
        "https://github.com/SolarStudent121/Tech-Noter/blob/1a8bcd89abce1f39390501266ec36dae6059f4c9/en/docs/screenshots/index.html",
        "https://github.com/SolarStudent121/Tech-Noter/blob/1a8bcd89abce1f39390501266ec36dae6059f4c9/en/docs/index.html",
        "https://github.com/SolarStudent121/Tech-Noter/blob/1a8bcd89abce1f39390501266ec36dae6059f4c9/en/docs/doc.js",
        "https://github.com/SolarStudent121/Tech-Noter/blob/1a8bcd89abce1f39390501266ec36dae6059f4c9/en/bootstrap/bootstrap-icons-1.9.1/bootstrap-icons.css",
        "https://github.com/SolarStudent121/Tech-Noter/blob/1a8bcd89abce1f39390501266ec36dae6059f4c9/en/docs/screenshots/Screenshot.png",
        "https://github.com/SolarStudent121/Tech-Noter/blob/1a8bcd89abce1f39390501266ec36dae6059f4c9/en/docs/screenshots/icon.png",
        "https://github.com/SolarStudent121/Tech-Noter/blob/1a8bcd89abce1f39390501266ec36dae6059f4c9/en/manifest.webmanifest",
        "https://github.com/SolarStudent121/Tech-Noter/blob/1a8bcd89abce1f39390501266ec36dae6059f4c9/en/sw.js",
        "https://github.com/SolarStudent121/Tech-Noter/blob/1a8bcd89abce1f39390501266ec36dae6059f4c9/en/icons/icon.png",
        "https://github.com/SolarStudent121/Tech-Noter/blob/1a8bcd89abce1f39390501266ec36dae6059f4c9/en"
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
