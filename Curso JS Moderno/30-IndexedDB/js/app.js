/**
 * API en JavaScript para almacenar grandes cantidades de datos estructurados.
 * A diferencia de LocalStorage puede almacenar strings, booleans, incluso archivos, cualquier tipo de dato soportado por JavaScript.
 * No tiene límites conocidos aunque los archivos de más de 50 mb va a preguntar por permisos.
 * Soportada en todas las últimas versiones de los navegadores
 *
 * Es diferente a LocalStorage
 *
 * LocalStorage permite almacenar solo strings, mientras que IndexedDB permite cualquier tipo de dato soportado por JS.
 * LocalStorage es una buena solución para almacenar poca información (como un carrito de compras avandonado o un JSON Web Token).
 *
 * IndexedDB es una base de datos completa, pero ten en cuenta que estos datos siguen siendo visibles para cualquiera, por lo que no es
 * recomendable almacenar passwords o tarjetas de crédito.
 *
 *
 */
let DB;

document.addEventListener("DOMContentLoaded", () => {
  crmDB();

  setTimeout(() => {
    crearCliente();
  }, 5000);
});

function crmDB() {
  //Crear base de datos version 1.0
  let crmDB = window.indexedDB.open("crm", 1); //parámetros: nombre, versión

  //Si hubo un error
  crmDB.onerror = function () {
    console.log("Hubo un error a la hora de crear la bd");
  };

  //Si se creó bien
  crmDB.onsuccess = function () {
    console.log("Se creó correctamente la bd");
    DB = crmDB.result;
  };

  //Configuración de la bd
  crmDB.onupgradeneeded = function (e) {
    const db = e.target.result;

    const objectStore = db.createObjectStore("crm", {
      keyPath: "crm",
      autoIncrement: true,
    });

    //Definir las columnas
    objectStore.createIndex("nombre", "nombre", { unique: false });
    objectStore.createIndex("email", "email", { unique: true });
    objectStore.createIndex("telefono", "telefono", { unique: false });

    console.log("Columnas creadas");
  };
}

function crearCliente() {
  let transaction = DB.transaction(["crm"], "readwrite");

  transaction.oncomplete = function () {
    console.log("Transacción completada");
  };

  transaction.onerror = function () {
    console.log("Hubo un error en la transacción");
  };

  const objectStore = transaction.objectStore("crm");

  const nuevoCliente = {
    nombre: "David",
    telefono: 123456,
    email: "davideliasdelfino@gmail.com",
  };

  const peticion = objectStore.add(nuevoCliente);
  console.log(peticion);
}
