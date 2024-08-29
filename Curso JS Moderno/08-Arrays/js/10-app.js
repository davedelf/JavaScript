//Arreglo de objetos
const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Tablet ", precio: 800 },
  { nombre: "Notebook ", precio: 1200 },
  { nombre: "Touchpad", precio: 60 },
  { nombre: "Micrófono", precio: 200 },
  { nombre: "Escritorio", precio: 600 },
  { nombre: "Silla", precio: 780 },
];

console.table(carrito);

//ForEach
const nuevoArray = carrito.forEach(function (producto) {
  return `${producto.nombre} - Precio ${producto.precio}`;
});

//Map
const nuevoArray2 = carrito.map(function (producto) {
  return `${producto.nombre} - Precio ${producto.precio}`;
});

console.log(nuevoArray);
console.log(nuevoArray2);

/*Son casi iguales en sintaxis, lo que cambia es que Map crea un array nuevo y ForEach no. */

//Caso de uso: Cuando querramos crear un nuevo array con los productos que cuesten más de 300
const nuevoArray3 = carrito.map(function (producto) {
  if (producto.precio > 300) {
    return producto;
  }
});
console.table(nuevoArray3);
