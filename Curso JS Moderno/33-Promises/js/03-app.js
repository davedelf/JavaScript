//Promises
/**
 * Parámetros
 * Resolve: Es lo que se va a ejecutar cuando se cumpla el promise
 * Reject: Cuando tenemos un error en el promise o no se cumple
 */
const aplicarDescuento = new Promise((resolve, reject) => {
  const descuento = true;
  //const descuento=false
  if (descuento) {
    resolve("Descuento aplicado");
  } else {
    reject("No se pudo aplicar el descuento");
  }
});

//.then() cuando el promise se cumple
//.catch() cuando el promise no se cumple

aplicarDescuento
  .then((resultado) => {
    descuento("Se ha aplicado el descuento");
  })
  .catch((resultado) => {
    console.log(resultado);
  });

// Hay 3 valores posibles...

// fulfilled - El promise se cumplió
// rejected - El promise no se cumplió
// pending - No se ha cumplido y tampoco fue rechazado

function descuento(mensaje) {
  console.log(mensaje);
}
