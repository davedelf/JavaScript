//Traversing the DOM - Recorriendo el DOM - Forma de moverse entre los elementos del DOM

const navegacion = document.querySelector(".navegacion");
console.log(navegacion);
console.log(navegacion.childNodes); //Los espacios en blanco son considerados elementos. Son los saltos de línea. Si vemos en consola nos imprime 'a' pero no nos selecciona nada.
console.log(navegacion.children); //Nos muestra los elementos, sin tener en cuenta los espacios en blanco, es decir, elementos reales

//Es una forma de poder navegar y acceder a los elementos del html, por ello es de gran utilidad saber como manejar el DOM. Ejemplo, si queremos acceder al primer enlace
//de la navbar

console.log(navegacion.children[0]); //Nos imprime el primer enlace de la navbar, que es 'Vender'

/**
 Cabe destacar, que tienen las propiedades NodeType y NodeName. En este caso, children[0] - Vender - tiene NodeType 1 y NodeName A

 NodeType refiere al tipo de elemento que es. NodeType 1 refiere a todas las etiquetas html con apertura y cierre
 NodeName refiere al nombre de la etiqueta, que en este caso es A - enlace - .

 Los NodeType nos permiten identificar los tipos de elementos que contiene el HTML
 */
console.log(navegacion.children[0].nodeName); //A
console.log(navegacion.children[0].nodeType); //1

//Vemos los elementos del primer card. Nos retorna un HTMLCollection. En el indice 0 tenemos img y en la 1 div.info
const card = document.querySelector(".card");
console.log(card.children);

//Si queremos ver qué tiene div.info. Vemos que nos muestra el texto, párrafos <p> </p>, es decir, todo lo que contiene el div.info
console.log(card.children[1]);

//Y si queremos listar los hijos de ese div, es decir, los párrafos: Y de esta forma nos retorna nuevamenete un HTMLCollection con los párrafos enumerados
console.log(card.children[1].children);

//Queremos acceder al texto del titulo:
console.log(card.children[1].children[1].textContent); //Nos imprime el texto del título de esa card, es en este caso 'Música electrónica'

//Y si lo queremos modificar:
card.children[1].children[1].textContent =
  "Nuevo heading desde Traversing the DOM";

//Modificamos la imagen de la card
card.children[0].src = "img/hacer2.jpg";
console.log(card.children[0]);

/*
    Es decir, seleccionamos el padre y luego accedemos a sus hijos - children - pero también podemos hacerlo en sentido inverso, es decir, del hijo al padre
*/

//Traversing de hijo a padre

console.log(card.parentNode); //Toma en cuenta espacios en blancos, por lo que se recomienda mejor usar parentElement
console.log(card.parentElement);

//Y si le seguimos colocando .parentElement va escalando en la jerarquia de padres, en este caso va del div contenedor al section 'hacer'

console.log(card.parentElement.parentElement); // section 'hacer'
console.log(card.parentElement.parentElement.parentElement); //main class 'contenido contenedor'

// .children -> Padre a Hijo
// .parentElement -> Hijo a Padre

//Otras formas de hacer Traversing

//Podemos seleccionar 'el siguiente elemento', es decir, como 'su hermano'. Contenedor-cards es el padre y cada card es un hijo, que a su vez son hermanos, por lo que
// si en la posición 0 está el card, entonces el siguiente card en la posición 1 es su hermano.

//Vamos avanzando en orden del siguiente - nextSibling

console.log(card); //Primer card
console.log(card.nextElementSibling); //Segundo card, hermano del primero
console.log(card.nextElementSibling.nextSibling); //Tercer elemento hermano
console.log(card.nextElementSibling.nextSibling.nextSibling); //Cuarto elemento hermano

//También podemos volver al hermano anterior, o elemento anterior - previousElementSibling
const ultimoCard = document.querySelector(".card:nth-child(4"); //Seleccionamos el último card
console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling); //Volvemos al anterior del seleccionado
console.log(ultimoCard.previousElementSibling.previousElementSibling);

//En la navegación tenemos 4 elementos o enlaces; si queremos seleccionar el primer hijo o elemento:

console.log(navegacion.firstElementChild); //Nos trae el primer elemento 'Vender'

//Si queremos el último elemento
console.log(navegacion.lastElementChild); //Nos trae el último elemento 'Iniciar Sesión'

/**
 * En resumen, de esta forma podemos ir navegando por el DOM, es como pensar que el html es un 'mapa' y debemos ir accediendo a sus puntos mediante
 * instrucciones, coordenadas, etc. De esta forma podemos acceder y modificar los elementos.
 */

