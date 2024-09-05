//For Loop

/*
Se ejecuta hasta que deja de cumplirse una condición
*/

for (let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}

//Incremento de a dos
for (let i = 0; i < 10; i += 2) {
  console.log(`Número ${i}`);
}

//Incluir el extremo
for (let i = 0; i <= 10; i++) {
  console.log(`Número ${i}`);
}

//Como indentificar pares e impares
for (let i = 0; i <= 20; i++) {
  console.log(i % 2 === 0 ? `${i} es Par` : `${i} es Impar`);
}

//Imprimir los items de un carrito
const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisor", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

for (let i = 0; i < carrito.length; i++) {
  console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}
