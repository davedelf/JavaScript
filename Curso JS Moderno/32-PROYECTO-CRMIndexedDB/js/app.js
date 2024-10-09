(function () {
  let DB;

  document.addEventListener("DOMContentLoaded", () => {
    crearDB();
  });

  //Crea la base de datos de IndexDb
  function crearDB() {
    const crearDb = window.indexedDB.open("crm", 1);

    crearDb.onerror = function () {
      console.log("Hubo un error");
    };

    crearDb.onsuccess = function () {
      DB = crearDb.result;
      console.log("DB Creada");
    };

    crearDb.onupgradeneeded = function (e) {
      const db = e.target.result;

      // Creación del ObjectStore
      const objectStore = db.createObjectStore("crm", {
        keyPath: "id",
        autoIncrement: true,
      });

      // Creación de índices
      objectStore.createIndex("nombre", "nombre", { unique: false });
      objectStore.createIndex("email", "email", { unique: true });
      objectStore.createIndex("telefono", "telefono", { unique: false });
      objectStore.createIndex("empresa", "empresa", { unique: false });
      objectStore.createIndex("id", "id", { unique: true });

      console.log("DB Lista y Creada");
    };
  }
})();
