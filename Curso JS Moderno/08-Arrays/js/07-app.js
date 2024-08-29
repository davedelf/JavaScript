const carrito = [];

//Definir un producto
const producto = {
  nombre: "Monitor 32 Pulgadas",
  precio: 400,
};

const producto2 = {
  nombre: "Celular",
  precio: 800,
};

const producto3 = {
  nombre: "Teclado",
  precio: 50,
};

//Agregarlo al carrito
carrito.push(producto);
carrito.push(producto2);

//Agrear al comienzo del array. unshift
carrito.unshift(producto3);
console.table(carrito);

//Eliminar último elemento
carrito.pop();
console.table(carrito);

//Eliminar primer elemento
carrito.shift();
console.table(carrito);

producto4 = {
  nombre: "Celular 2",
  precio: 900,
};

carrito.push(producto4);
carrito.push(producto3);
carrito.push(producto2);
carrito.push(producto);
console.table(carrito);

//Eliminar determinado rango de objetos (se incluyen extremos)
carrito.splice(1, 2);
console.table(carrito);
