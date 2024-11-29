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

//Supongamos que queremos crear un nuevo arreglo en base al anterior pero que filtre por una determinada condición. Usamos .map
//Recordamos que .forEach solo itera y .Map crea un nuevo array

const obtenerNombres = (producto) => {
  return producto.nombre;
};

const resultado = carrito.map(obtenerNombres);

console.log(resultado);
