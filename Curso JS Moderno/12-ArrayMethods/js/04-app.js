//Filter

//Crea un nuevo array basado en el parámetro que es evaluado y la condición que se especifica. Es más dinámico ya que permite realziar más operaciones sobre los arrays

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

//Ejemplo, Todos los productos que cuesten más de 400
let resultado = carrito.filter((producto) => producto.precio > 400); //Colocamos la condición
console.log(resultado);

//Ejemplo. Todos los productos que comiencen con T
let resultado2 = carrito.filter((producto) => producto.nombre.startsWith("T"));
console.log(resultado2);

//Ejemplo. Productos que comiencen con T y que su precio oscile entre 100 y 200
let resultado3 = carrito.filter(
  (producto) =>
    producto.nombre.startsWith("T") &&
    producto.precio <= 200 &&
    producto.precio >= 100
);
console.log(resultado3);

//Ejemplo. Todos los productos que no sean audífonos
let resultado4 = carrito.filter((producto) => producto.nombre !== "Audifonos");
console.log(resultado4);

//Entre Reduce y Filter el que más se utiliza es Filter
