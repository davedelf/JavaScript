localStorage.setItem("nombre", "Juan"); //"llave","valor"

sessionStorage.setItem("nombre", "Juan");
/**
 * LocalStorage persiste, en cambio SesionStorage persiste solo en sesión. Almacenan solo Strings, por lo que no podemos guardar objetos, arreglos, números, etc.
 * Si queremos almacenar un objto podemos convertirlo a string con "JSON.stringify"
 */

//Para convertir de object a string - JSON.stringify
const producto = {
  nombre: "Monitor 24 Pulgadas",
  precio: 300,
};

const productoString = JSON.stringify(producto);

console.log(productoString);
console.log(typeof productoString);

//Para convertir de string a object. JSON.parse
const productoObjeto = JSON.parse(productoString);
console.log(productoObjeto);
console.log(typeof productoObjeto);

localStorage.setItem("producto", productoString);

const meses = ["Enero", "Febrero", "Marzo"];
const mesesString = JSON.stringify(meses);

localStorage.setItem("meses", mesesString);
console.log(mesesString);
console.log(typeof mesesString);
console.log(typeof meses);
