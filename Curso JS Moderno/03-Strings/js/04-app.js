//Eliminar espacios en blanco de un String al comienzo y al final de la cadena

const producto = "                   Monitor 20 Pulgadas           ";
const precio = "30 USD";

console.log(producto);
console.log(producto.length);

//Eliminar del inicio
console.log(producto.trimStart());

//Eliminar del final
console.log(producto.trimEnd());

/*Caso de uso común: Muchas veces los usuarios al completar formularios copian y pegan el correo para pasar la validación,
y al ahcerlo copian caracteres en blanco tanto al comienzo como al final. en este escenario podemos hacer uso de trimStart
y trimEnd para eliminar dichos espacios. */

//Podemos concatenar métodos. Ésto se conoce como 'chaining'
console.log(producto.trimStart().trimEnd());

//Si queremos eliminar en ambas direcciones sin especificar las mismas, usamos solamente trim
console.log(producto.trim());
