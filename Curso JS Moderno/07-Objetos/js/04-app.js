const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: false,
};

console.log(producto.nombre);

//Asignar propiedad de un objeto a una variable.
// const nombre = producto.nombre;
// console.log(nombre);

//Destructuring - Extraer valor del objeto y asignarlo a una variable dentro de la misma línea
const { nombre, precio } = producto;
console.log(nombre);
console.log(precio);
