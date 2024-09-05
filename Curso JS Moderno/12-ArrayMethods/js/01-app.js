//Array Methods
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//Comprobar si un valor existe en un arreglo

meses.forEach((mes) => {
  if (mes === "Enero") {
    console.log("Enero sí existe");
  }
});

//Utilizando un array metod. Includes
//Solamente funciona para arrays de indices, no de objetos. Para objetos usamos  .some

const resultado = meses.includes("Enero");
console.log(resultado);

//En un array de objetos se utiliza .some
const existe = carrito.some((producto) => {
  return producto.nombre === "Celular";
});

console.log(existe);

//Refactorizamos el arrow function para simplificar cantidad de codigo
const existe2 = carrito.some((producto) => producto.nombre === "Monitor Curvo");
console.log(existe2);

//Tambien funciona en arreglo tradicional

const existe3 = meses.some((mes) => mes.nombre === "Diciembre");
console.log(existe3);

//RESUMEN: Includes se usa para Array Tradicional y Some para Array de Objetos y Tradicional
