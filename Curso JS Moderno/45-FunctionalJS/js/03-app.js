//Separar los datos de las funciones - Higher Order Functions
//Higher Order Function es una función que toma o retorna un a función como argumento. La mayoría de los Array Methods son ejemplos.
const carrito = [
  { nombre: "Monitor 20 Pulgadas", precio: 500 },
  { nombre: "Televisión 50 Pulgadas", precio: 700 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Bocinas", precio: 300 },
  { nombre: "Laptop", precio: 800 },
];

const resultado = carrito.filter((producto) => {
  return producto.precio > 400;
});

console.log(resultado);

const mayor400 = (producto) => {
  return producto.precio > 400;
};

//Lo llevamos a Higher Order Function
const resultado1 = carrito.filter(mayor400);
console.log(resultado1);
