Progressive Web Apps y Service Workers

Características de una PWA

- Son rápidas, cargar toda la información en menos de 5 segundos.
- Es instalable, se pueden navegar o instalar en tu navegador o teléfono móvil como una aplicación nativa.
- Tienen soporte offline, pueden funcionar incluso sin una conexión a internet

Service Workers

- Son la base de una PWA. Son Scripts que están corriendo todo el tiempo detrás de escenas. El Service Worker
  estará escuchando cuando hay conexión, cuando no la hay, etc. y va a estar cargando o mostrando cierta información
- Funcionan Offline
- No tienen acceso al DOM. El Service Worker no funciona sobre el DOM, para ello deberiamos tener un script que funcione con el DOM
- Cargan de forma instantanea cuando se los llaman
- Pueden sincronizar datos detrás de escena o sin interferir en la navegación. Ejemplo si necesitamos almacenar la información de un formulario
  y se corta la conexión, la misma se almacena en caché y vuelve a estar disponible cuando regresa la conexión

Funciones No Disponibles en Service Worker

- window (utiliza self)
- document (utiliza caches)
- localStorage(utiliza fetch)


