//resolve cuando el promise se cumple,reject cuando falla

function descargarClientes() {
  return new Promise((resolve, reject) => {
    const error = true;

    setTimeout(() => {
      if (!error) {
        resolve("El listado de clientes se descargó correctamente");
      } else {
        reject("Error en la conexión");
      }
    }, 3000);
  });
}

//Async Await - Function Declaration
async function ejecutar() {
  try {
    const respuesta = await descargarClientes(); //en lugar de usar then() lo asignamos a una constante
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
}

ejecutar();

/**
 * La funcion padre siempre tiene que tener async y la funcion hija o la que se llama debe tener await. SIEMPRE
 */
