//Cambiando el CSS con JavaScript
const encabezado = document.querySelector("h1");
console.log(encabezado.style);

/**
En CSS las propiedades con más de una palabra se separan con guión, ejemplo, background-color. En JavaScript se elimina el guión y sigue la convención camelCase.
Entonces, las mismas propiedades que tenemos en CSS las encontramos en JS pero no llevan guión, sino camelCase

CSS: background-color
JS: backgroundColor
 */

//Cambiar color de fondo
// encabezado.style.backgroundColor = "red";

// //Cambiar la fuente
// encabezado.style.fontFamily = "Arial";

// //Convertimos el texto a mayuscula
// encabezado.style.textTransform = "upperCase";

//Ejemplo, si queremos aplicar una nueva clase a todas las cards, en lugar de hacer manualmente una por una, agarramos toda la clase 'card'.
//  En este caso les estamos agregando una nueva clase a las cards, es decir, antes era 'card' y ahora es 'card nueva-clase'
const card = document.querySelector(".card");
card.classList.add("nueva-clase", "segunda-clase"); //si queremos agregar otra clase más, la colocamos dentro del paréntesis separada por una coma
console.log(card.classList);

//Si queremos eliminar una clase
card.classList.remove("card");
console.log(card);
