//Existen dos formas de eliminar un elemento: Eliminarlos desde el mismo elemento y eliminarlo desde el padre

const primerEnlace = document.querySelector("a");
console.log(primerEnlace);

//Eliminarlo desde si mismo - con .remove()
primerEnlace.remove();

//Eliminarlo desde el padre, utilizando una referencia
const navegacion = document.querySelector(".navegacion");
console.log(navegacion.children); //Imprimimos en consola los nodos o elementos para ver su índice jerárquico

navegacion.removeChild(navegacion.children[2]); //Especificamos el nodo que queremos eliminar
