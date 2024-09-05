// Reduce

/**
 La función reduce() en JavaScript es un método que se utiliza en los arrays para reducir todos sus elementos a un único valor, 
 aplicando una función sobre cada uno de ellos de manera acumulativa. Es especialmente útil para realizar operaciones como sumar todos los elementos, 
 concatenar valores, encontrar el máximo, etc.
 */

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//Ejemplo. Cuánto tiene que pagar del carrito
//Con un forEach
let total = 0;
carrito.forEach((producto) => (total = total += producto.precio));
console.log(total);

//Con el reduce
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0); //El 0 es el valor inicial, es decir, desde donde debe comenzar la suma. Ese 0 se le asigna al parámetro total
console.log(resultado);

//A criterio personal prefiero utilizar el reduce, ya que el foreach es menos optimizado, ya que tiene que ir iterando sobre cada objeto. A nivel estético es mejor
//Además, da la posibilidad de asignale un valor inicial al total, aunque al declarar la variable let total ya la estamos inicializando con 0
