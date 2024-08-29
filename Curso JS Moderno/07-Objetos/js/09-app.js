//Sealed objects

/*
    A diferencia de freeze, no se pueden agregar o eliminar nuevas propiedades, pero si modificar las existentes.
    El objeto no es extensible.
 */
"use strict";

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: false,
};

Object.seal(producto);
producto.disponible = false;

//producto.imagen = "imagen.jpg";
//delete producto.precio
console.log(producto);

//Verificar si está sellado
console.log(Object.isSealed(producto));
