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

for (let i = 0; i < carrito.length; i++) {
  console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}}`);
}

//ForEach
carrito.forEach(function (producto) {
  console.log(`${producto.nombre} - Precio ${producto.precio}`);
});

//Ambos se comportan de la misma manera, por lo que ninguno es más performante. A nivel estética es mejor forEach (gusto personal)
