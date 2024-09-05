//forEach y .map
//Recordar: forEach solo itera sobre un array mientras que .map retorna un array en base a otro
const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];

/*
    El forEach() es un Arrow Function. Recordemos: Si le pasamos un solo parámetro nos imprime el valor, pero si le pasamos dos
    parámetros, nos imprime Valor e Indice - Value:Key
*/
pendientes.forEach((pendiente, indice) =>
  console.log(`${indice}:${pendiente}`)
);

carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisor", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

carrito.forEach((producto) => {
  console.log(`${producto.nombre} - Precio:${producto.precio}`);
});

//Si queremos usar forEach para crear un nuevo array vemos que no lo crea, mientras que .map si

const nuevoArreglo = carrito.forEach((producto) => producto.nombre);
const nuevoArreglo2 = carrito.map((producto) => producto.nombre);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
