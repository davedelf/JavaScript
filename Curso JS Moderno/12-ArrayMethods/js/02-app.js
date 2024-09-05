//findIndex
//Permite encontrar la posición de un determinado objeto en una arreglo, es decir, encontrar el índice - find index.

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//Conocer el indice de un elemento de manera 'hardcodeada'. Ejemplo, mes de Abril

meses.forEach((mes, indice) => {
  if (mes === "Abril") {
    console.log(`Abril se encuentra en el índice ${indice}`);
  }
});
/**
 De esta forma hacemos la busqueda hardcodeada, pero existe otra forma mas estetica y simplificada, que es utilizar findIndex
 */

//Encontrar el indice de Abril. Si el indice no existe retorna -1
const indice = meses.findIndex((mes) => mes === "Abril");
console.log(indice);

//Comprobar el indice de un array de objetos
const producto = carrito.findIndex((produc) => produc.nombre === "Celular");
console.log(producto);

//Para ver que producto cuesta 100
const producto2 = carrito.findIndex((produc) => produc.precio === 100);
console.log(producto2);

//Si existen dos propiedades con el mismo valor, retorna la primera ocurrencia, o la primera propiedad que encuentra. Para extraer más de una propiedad con el mismo valor
// se utiliza .filter
