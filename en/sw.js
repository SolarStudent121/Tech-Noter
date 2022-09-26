
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js');

workbox.precaching.precacheAndRoute([
    { "revision": "22213be8446b561008c7d55aaf532ea6", "url": "bootstrap/bootstrap-icons-1.9.1/index.html" },
    { "revision": "d41d8cd98f00b204e9800998ecf8427e", "url": "docs/doc.js" },
    { "revision": "1d578a36c2ff40f56070447a897b91ab", "url": "docs/index.html" },
    { "revision": "eab5552d34c14ff402c8d5b2ccd4b2f7", "url": "docs/screenshots/index.html" },
    { "revision": "6b283f40b4767890f50bf7edaf2f319c", "url": "docs/styles.css" },
    { "revision": "a74061676fa9544a88251c63a6664dca", "url": "editor/controller.js" },
    { "revision": "77255b38757e5c5693b12f74893320e9", "url": "editor/index.html" },
    { "revision": "bab9f50f7c819895c5c9d457847adffe", "url": "editor/styles.css" },
    { "revision": "e010a2ccef805224aa0b52a692c57964", "url": "home/home.js" },
    { "revision": "b4cc022f3ce3dcb2ad178355555b83ba", "url": "home/index.html" },
    { "revision": "e7208aebfec0ebd2168a06aca1cf7e29", "url": "home/styles.css" }]);