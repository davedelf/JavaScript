//Every
//Todos los elementos de un arreglo deben cumplir con la condición para que nos retorne true, de lo contrario si algun elemento no cumple nos retorna false
const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

const resultado = carrito.every((producto) => producto.precio < 1000);
console.log(resultado);

//Si algun elemento tiene precio mayor 1000 entonces nos retorna false
const resultado2 = carrito.every((producto) => producto.precio < 500);
console.log(resultado2);

//Si queremos ver que alguno cumpla con la condición entonces usamos .some

const resultado3 = carrito.some((producto) => producto.nombre === "Tablet");
console.log(resultado3);

const resultado4 = carrito.some((producto) => producto.nombre === "Notebook");
console.log(resultado4);
