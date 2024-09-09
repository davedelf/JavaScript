//Acceder a elementos del HTML con document

let elemento;

elemento = document;
elemento = document.all;
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.forms;
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].classList;
elemento = document.forms[0].action;
elemento = document.links;
elemento = document.links[4];
elemento = document.links[4].classList;
elemento = document.links[4].className;
elemento = document.images;
elemento = document.scripts;

console.log(elemento);

//De esta forma podemos acceder a los elementos del documento y las mostrará en consola. Una forma útil de navegar entre los elementos, buscarlos, identificarlos y
//modificarlos. Podemos seleccionar practicamente todo con JS. Podemos tener control sobre todo el documento.
