/**
 * Callback: Ej. Si estamos descargando una lista de clientes y mientras se descargan se agrega uno nuevo. Éste último no va a formar parte de la descarga, pero callback permite
 * que si se pueda.
 */

const paises = ["Francia", "España", "Portugal", "Australia", "Inglaterra"];

//Agrega un pais y una vez agreagdo llama a la función para imprimirlos en consola
function nuevoPais(pais, callback) {
  setTimeout(() => {
    paises.push(pais);
    callback();
  }, 2000);
}

function mostrarPaises() {
  setTimeout(() => {
    paises.forEach((pais) => {
      console.log(pais);
    });
  }, 1000);
}

mostrarPaises();

nuevoPais("Alemania", mostrarPaises);
