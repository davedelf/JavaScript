//Prevenir Even Bubbling con Delegation
const cardDiv = document.querySelector(".card");

// cardDiv.addEventListener("click",()=>{
//     console.log("Click en card");
// })

//Sin embargo el div contiene una imagen, un titulo, info, etc. Cómo saber a qué elemento le estamos dando click?

cardDiv.addEventListener("click", (e) => {
  console.log(e.target); //el target hace referencia al elemento que se esta clickeando
});

//Como escribir un código que reaccione diferente a cada elemento dentro del div.

/*
Esto se conoce como delegation. Tenemos un selector principal y un código para cada tipo de target
*/
cardDiv.addEventListener("click", (e) => {
  // console.log(e.target.classList)
  if (e.target.classList.contains("titulo")) {
    console.log("diste click en titulo");
  }

  if (e.target.classList.contains("precio")) {
    console.log("diste click en precio");
  }

  if (e.target.classList.contains("card")) {
    console.log("diste click en card");
  }
});

//Esta forma es más explicita o más entendible que e.preventDefualt() para manejar Event Bubbling. Se recomienda utilizar Delegation en lugar de e.prevenDefault() aunque ambas funcionan.
