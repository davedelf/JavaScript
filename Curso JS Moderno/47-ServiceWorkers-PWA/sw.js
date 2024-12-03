//Cachear archivos
const nombreCache = "apv-v1";
const archivos = [
  "/47-ServiceWorkers-PWA/",
  "/47-ServiceWorkers-PWA/index.html",
  "/47-ServiceWorkers-PWA/css/bootstrap.css",
  "/47-ServiceWorkers-PWA/css/styles.css",
  "/47-ServiceWorkers-PWA/js/app.js",
  "/47-ServiceWorkers-PWA/js/apv.js",
  "/47-ServiceWorkers-PWA/manifest.json",
];

//Cuando se instala el Service Worker
self.addEventListener("install", (e) => {
  console.log("Instalado el Service Worker");

  e.waitUntil(
    caches
      .open(nombreCache)
      .then((cache) => {
        console.log("Cacheando...");
        cache.addAll(archivos);
      })
      .catch((error) => console.log("Error al cachear los archivos", error))
  );
});

//Activar el Service Worker
self.addEventListener("activate", (e) => {
  console.log("Service Worker Activado");

  console.log(e);
});

//Evento Fetch para descargar archivos estático

self.addEventListener("fetch", (e) => {
  console.log("Fetch...", e);
});
