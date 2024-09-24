//Variables y Selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

//Eventos
eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);
}

//Classes

//Funciones
function preguntarPresupuesto() {
  const presupuestoUsuario = prompt("¿Cuál es tu presupuesto?");
  console.log(presupuestoUsuario);

  //Validaciones
  if (
    presupuestoUsuario === "" ||
    presupuestoUsuario === null ||
    isNaN(presupuestoUsuario) || //isNaN verifica si convierte a número o no.
    presupuestoUsuario < 0
  ) {
    window.location.reload(); //Recarga la ventana actual
  }

  console.log(parseInt(presupuestoUsuario));
}
