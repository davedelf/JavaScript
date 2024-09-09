//Un ejemplo más avanzado de lo que podemos hacer con JS
const btnFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

/**
 * addEventListener() queda escuchando a un evento para lanzar una función, es como un trigger. Primer argumento es el evento que va a estar esperando
 * y segundo argumento es la función que ejecutará cuando suceda el evento.
 *
 * Podemos colocar el la función como una "función anónima" que es una arrow function ()=> o declararla fuera y luego llamarla
 */

// btnFlotante.addEventListener('click',()=>{
//     alert("Has hecho click en el botón flotante")
//     console.log("Diste click en el boton");
// })

// btnFlotante.addEventListener('click',clickBotonFlotante)

// function clickBotonFlotante(){
//     alert("Has hecho click en el botón flotante")
//     console.log("Diste click en el boton");
// }

//Ahora configuramos el botón para que oculte o muestre el footer

//Lo que hace que se muestre o se oculte es la clase 'activo' que está en el archivo CSS, por eso le colocamos la clase activo

// function mostrarFooter(){
//     footer.classList.add("activo")
// }

btnFlotante.addEventListener("click", mostrarFooter);

//Ahora se muestra al hacer click, pero queremos que se oculte al hacer click nuevamente. Una forma facil es hacerlo mediante una verificación que
// vea si ya contiene la clase 'activo' o no. Si la tiene entonces se muestra y la elimina, es como un interruptor o bandera

//Entonces de esta forma podemos agregar o quitar clases de forma dinámica, lo que nos permite generar efectos de manera dinámica combinando JS y CSS

// function mostrarFooter() {
//   if (footer.classList.contains("activo")) {
//     footer.classList.remove("activo");
//     btnFlotante.classList.remove("activo");
//   } else {
//     footer.classList.add("activo");
//     btnFlotante.classList.add("activo");
//   }
//   console.log(footer.classList);
// }

//Si le colocamos this, lo que hace referencia es a lo que mandó a llamar a esa funcíon, entonces se entiende que refiere al btnFlotante.
//El 'this' refiere a qué es lo que mandó a ejecutar nuestra función mostrarFooter()
function mostrarFooter() {
  if (footer.classList.contains("activo")) {
    footer.classList.remove("activo");
    this.classList.remove("activo");
    this.textContent = "Idioma y Moneda";
  } else {
    footer.classList.add("activo");
    this.classList.add("activo");
    this.textContent = "X Cerrar";
  }
  console.log(footer.classList);
}

/**
 * Entonces de manera dinámica mediante la combinación de condicionales y CSS estamos mostrando y ocultado el footer y cambiando de color el botón y el texto.
 */
