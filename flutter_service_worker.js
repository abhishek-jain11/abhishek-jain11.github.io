'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "c5abb76cf4ecbcd2f1ab23d0250b60e2",
"/": "c5abb76cf4ecbcd2f1ab23d0250b60e2",
"main.dart.js": "c0b9a2670a2167d35f92801f331e1931",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c48a30f74fefab3d95cf3502d1d3e5e6",
"assets/LICENSE": "9db8024aed6802f0b20355e187bbc9d5",
"assets/AssetManifest.json": "b45650c5b3f5630406c7e06d40ceb27f",
"assets/FontManifest.json": "9b7cd598c2610c799474ef4aa9b5777b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/flutter_logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/assets/splitwise-logo-bordered-original.png": "a7635b1254e8428b4cdc6f48cee9a459",
"assets/assets/splitwise-logo-bordered.png": "7dc9b6a73ba66f45c91491582c6dfc02",
"assets/assets/logo.png": "fbd5f39587e795477c2c6f83633c9a9e"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
