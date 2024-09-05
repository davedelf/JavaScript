//Spread Operator

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//Como agregar un elemento al final del array
const meses2 = [...meses, "Agosto"];
console.log(meses2);
/*
    Importante destacar que ésto no modifica el array original. Si le agrego un mes con .psuh eso si modifica el array original
    demás, destacar que el orden en que se agregan los elementos en el spread operator es importante, ya que si colocamos primero 
    Agosto y luego ...meses, Agosto aparecerá primero. Además, recordar que si colocamos ...Agosto, nos va a crear un array con todas las letras del Agosto
*/

//Spread Operator con Objetos
const producto = { nombre: "Disco Duro", precio: 300 };
const carrito2 = [...carrito, producto];
console.log(carrito2);
/*
Se crea un nuevo array con Disco Duro al final, pero el array original - carrito - no se toca
No podemos colocarle el Spread Operator al objeto, ya que no es iterable, es decir, no podemos colocar ...producto
*/
