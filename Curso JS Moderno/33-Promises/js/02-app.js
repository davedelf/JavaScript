//Callback Hell: Como una curva hacia adentro. Muchos callbacks anidados. Para evitar esto usamos Promises
const paises = [];

function nuevoPais(pais, callback) {
  paises.push(pais);
  console.log(`Agregado: ${pais}`);
  callback();
}

function mostrarPaises() {
  console.log(paises);
}

function iniciarCallbackHell() {
  setTimeout(() => {
    nuevoPais("Alemania", mostrarPaises);
    setTimeout(() => {
      nuevoPais("Francia", mostrarPaises);
      setTimeout(() => {
        nuevoPais("Inglaterra", mostrarPaises);
      }, 3000);
    }, 3000);
  }, 3000);
}

iniciarCallbackHell();
