//Find
//Crea un nuevo arreglo basado en la condición que estamos declarando
const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//Con un forEach
let resultado = "";
carrito.forEach((producto, indice) => {
  if (producto.nombre === "Tablet") {
    resultado = carrito[indice];
  }
});
console.log(resultado);

//Con .find
//Busca el elemento en base a la condición y lo asigna a resultado2
const resultado2 = carrito.find((producto) => producto.nombre === "Tablet");
console.log(resultado2);

//Es una forma más acotada del foreach, más optimizada y más corta. Retorna la primera ocurrencia que cumpla con la condición. Si no encuentra nos retorna undefined
