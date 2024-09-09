//Generar HTML con JavaScript

//Ejemplo: Creamos un nuevo enlace
const enlace = document.createElement("a");

//Agregandole el texto
enlace.textContent = "Nuevo Enlace";

//Agregandole el href
enlace.href = "/nuevo-enlace";

//Agregamos target
enlace.target = "_blank";

//Lo añadimos a la navegacion
const navegacion = document.querySelector(".navegacion");

//.appendChild() lo añade como último nodo
navegacion.appendChild(enlace);

//si lo quiero tener entre otros nodos. Argumentos: elemento a agregar y donde deseamos mostrarlo - nodo de referencia -
//En este caso lo añadimos antes de la posición 1 - Vender -.
navegacion.insertBefore(enlace, navegacion.children[1]);

//Si queremos agregar atributos personalizados
enlace.setAttribute("data-enlace", "nuevo-enlace");

//Si queremos agregarle una clase
enlace.classList.add("alguna-clase");

//Añadimos una función al evento onClick
enlace.onclick = miFuncion;
function miFuncion() {
  alert("Has hecho click");
}

console.log(enlace);

//Crear un CARD de forma dinámica. Ejemplo, al momento de consultar una API  o una bd se van creando

const parrafo1 = document.createElement("p");
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria", "concierto");

const parrafo2 = document.createElement("p");
parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add("titulo");

const parrafo3 = document.createElement("p");
parrafo3.textContent = "$800 por persona";
parrafo3.classList.add("precio");

//Crear div con la clase de info
const info = document.createElement("div");
info.classList.add("info");

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear la imagen
const imagen = document.createElement("img");
imagen.src = "img/hacer2.jpg";

//Si quiero usar Bootstrap
imagen.classList.add("img-fluid");

//Le agregamos texto alternativo
imagen.alt = "Texto Alternativo";

console.log(imagen);

//Ahora creamos el div padre, que es el card

const card = document.createElement("div");
card.classList.add("card");

//Asignar la imagen
card.appendChild(imagen);

//Asignar la info
card.appendChild(info);

//Lo insertamos en el HTML, en contenedor-cards de la sección hacer
const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.appendChild(card);
