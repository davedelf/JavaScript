(function () {
  const nombreInput = document.querySelector("#nombre");
  let DB;

  document.addEventListener("DOMContentLoaded", () => {
    //Conectar a la DB
    conectarDB();

    //Verificar el ID de la URL - Query String .
    const parametrosURL = new URLSearchParams(window.location.search);
    const idCliente = parametrosURL.get("id");
    console.log(idCliente);

    if (idCliente) {
      setTimeout(() => {
        obtenerCliente(idCliente);
      }, 100);
    }
  });

  function obtenerCliente(id) {
    const transaction = DB.transaction(["crm"], "readwrite");
    const objectStore = transaction.objectStore("crm");

    const cliente = objectStore.openCursor();
    cliente.onsuccess = function (e) {
      const cursor = e.target.result;

      if (cursor) {
        if (cursor.value.id === Number(id)) {
          llenarFormulario(cursor.value);
        }
        cursor.continue();
      }
    };
  }

  function conectarDB() {
    //Conectamos a la DB
    const abrirConexion = window.indexedDB.open("crm", 1);

    abrirConexion.onerror = function () {
      console.log("Hubo un error");
    };

    abrirConexion.onsuccess = function () {
      DB = abrirConexion.result; //Almacenamos la instancia de conexión a la bd
      console.log("Se ha conectado a la DB");
    };
  }

  function llenarFormulario(datosCliente) {
    const { nombre } = datosCliente;

    nombreInput.value = nombre;
  }
})();
