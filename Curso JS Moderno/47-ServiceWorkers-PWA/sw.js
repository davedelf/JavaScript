
//Cuando se instala el Service Worker
self.addEventListener("install",e=>{
    console.log("Instalado el Service Worker");

    console.log(e);
})


//Activar el Service Worker
self.addEventListener("activate",e=>{
    console.log("Service Worker Activado");
    
    console.log(e);
})

//Evento Fetch para descargar archivos estático

self.addEventListener("fetch",e=>{
    console.log("Fetch...",e);
})