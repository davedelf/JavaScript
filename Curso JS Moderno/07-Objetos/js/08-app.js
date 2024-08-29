//Para que una constante no pueda ser modificada usamos 'use strict'

"use strict";

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: false,
};

//Object Methods

//Bloquea la modificación total del objeto - Agregar/Eiminar propiedades y reasignarles valores.

Object.freeze(producto);
//producto.disponible = false;
//producto.imagen = "imagen.jpg";
//delete producto.precio;

console.log(producto);

//Verifica si el obbjeto está congelado. boolean
console.log(Object.isFrozen(producto));
