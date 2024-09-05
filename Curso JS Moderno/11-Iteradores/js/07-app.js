//Operador for...of - Una versión simplificada del for. El forEach suele ser utilizado más que el for

const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];

//forEach
pendientes.forEach((pendiente) => console.log(pendiente));

//for.. of
for (let pendiente of pendientes) {
  console.log(pendiente);
}

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisor", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

for (let producto of carrito) {
  console.log(producto.nombre);
}

//El for... of es una forma más simplificada y facil de comprender, el altamente recomendable utilizarla
