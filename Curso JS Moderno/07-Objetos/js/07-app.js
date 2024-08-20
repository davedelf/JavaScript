const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: false,
};

producto.disponible = false;
console.log(producto);

//Aunque esté declarado como const, aunque esté dentro de un objeto, puede modificarse

delete producto.precio;
console.log(producto);
