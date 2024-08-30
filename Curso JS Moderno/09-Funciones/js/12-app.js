//Arrow Function en un forEach y un Map

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audífonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//Función Original
const nuevoArreglo = carrito.map(function (producto) {
  return `${producto.nombre} - Precio: ${producto.precio}`;
});

//Simplificada a Arrow Function
const nuevoArreglo1 = carrito.map(
  (producto) => `${producto.nombre} - Precio: ${producto.precio}`
);

console.log(nuevoArreglo);
console.log(nuevoArreglo1);

//Función Original
carrito.forEach(function (producto) {
  console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});

//Simplificada a Arrow Function
carrito.forEach((producto) => {
  console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});
