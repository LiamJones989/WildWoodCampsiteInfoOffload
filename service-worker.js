const CACHE_NAME = "phesant8-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",

  // maps (offline)
  "./Wildwood-Main.png",
  "./Beaver-Park---Plat-1.png",
  "./Beaver-Park---Plat-2.png",
  "./Canyon-View.png",
  "./Crows-Park.png",
  "./Crows-Park---Plat-2.png",
  "./Pheasant-Park.png",
  "./Robin-Park.png",
  "./Turkey-Park.png"
];

// install → cache files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// fetch → serve from cache first
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
