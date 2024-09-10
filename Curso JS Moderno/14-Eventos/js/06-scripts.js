//Qué es el Event Bubbling?

/**
 * Event Bubbling en cuando hacemos click en un evento y ese evento se propaga a muchos otros lugares, dando resultados inesperados. Es cuando haces click en un evento
 * y se disparan los otros eventos
 */

const cardDiv = document.querySelector(".card");
const infoDiv = document.querySelector(".info");
const titulo = document.querySelector(".titulo");

// cardDiv.addEventListener("click", () => {
//   console.log("Click en card");
// });

// infoDiv.addEventListener("click", () => {
//   console.log("Click en info");
// });

// titulo.addEventListener("click", () => {
//   console.log("Click en titulo");
// });

//Le doy click a info, pero como info está dentro de card entonces se desatan ambos eventos, es decir, se va hacia un elemento padre o hijo. Si le damos click a titulo
// se disparan los demás tambien, entonces eso es lo que se denomina 'event bubbling'

//Para detenerlo basta con agregar el evento e y e.stopPropagation()

cardDiv.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Click en card");
});

infoDiv.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Click en info");
});

titulo.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Click en titulo");
});

//Y de esta forma al dar click en cada elemento, aun así sean padres e hijos, no se desencadenan los eventos, sino cada uno perteneciente al elemento.
