//QuerySelector
/**
 Actúa similar a getElementById; retorna máximo un elemento pero tiene la caracteristica de que permite seleccionar clases. Utiliza una sintaxis similar a una hoja de estilos
 CSS, es decir, para clases utiliza . y para elementos con id #
 */

//Ejemplo; seleccionamos una card del html

const card = document.querySelector(".card");
console.log(card);
//A pesar de que hay varios cards, querySelector retorna el primero que encuentra, pero si no existe no retorna nada

//Podemos tener selectores específicos como en CSS. Si fueran dos clases las colocamos juntas sin espacio, pero como .info es hija de .premium entonces la separamos con coma, es decir,
//'indicamos la ruta jerárquica del elemento'. En este caso seleccionamos dos clases, .premium y .hospedaje
const info = document.querySelector(".premium .info");
console.log(info);

//Si queremos seleccionar el segundo card de la sección hospedaje:
const segundoCard = document.querySelector(".hospedaje .card:nth-child(2");
console.log(segundoCard);

//Tambien podemos usar otra sintaxis como la de CSS, que es más específica o explícita. Esoecificamos section.hospedaje. Ambas funcionan de la misma forma
const segundoCard2 = document.querySelector(
  "section.hospedaje .card:nth-child(2"
);
console.log(segundoCard);
/*
La pseudoclase nth-child() se utiliza para aplicar estilos o seleccionar un elemento en función de su posición en la lista de hijos de su padre. En el ejemplo anterior 
estamos seleccionando la segunda card del padre hospedaje
*/

//También permite seleccionar id
const formulario = document.querySelector("#formulario");
console.log(formulario);
//Al igual que getElementById, si hay dos elementos con el mismo id, nos va a seleccionar el primero que encuentre

//Seleccionar elementos HTML. La clase se llama navegación, pero es un nav. También podemos llamarlo utilizando . ene ste caso seleccionamos el elemento nav
const navegacion = document.querySelector("nav");
console.log(navegacion);

//Existe una variante, que es .querySelectorAll, la cual retorna todos los elementos que coincidan con el nombre o criterio de busqueda. Osea, en lugar de retornar
//el primero que encuentre, retorna todos.
