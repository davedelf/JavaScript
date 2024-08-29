const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: false,
};

console.log(producto);


//Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";
console.log(producto);

//Eliminar propiedades del objeto
delete producto.disponible;
console.log(producto);

