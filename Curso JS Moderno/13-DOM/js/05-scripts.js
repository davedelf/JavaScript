//QuerySelectorAll
/**
 Retorna todos los elementos que cumplan con la condición del selector. Nos retorna un NodeList; a cada elemento se lo conoce como un 'nodo'
 */
const card = document.querySelectorAll(".card");
console.log(card);

//Es una mala práctica tener dos elementos con el mismo id, sin embargo si usamos QuerySelectorAll nos retornará dichos elementos
const formularios = document.querySelectorAll("#formulario");
console.log(formularios);

//Si un elemento no existe, nos retorna un NodeList vacío
const noExiste = document.querySelectorAll("#noExiste");
console.log(noExiste);
