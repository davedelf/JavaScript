//Variables y Selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

//Eventos
eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);
}

//Classes
class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
    this.gastos = [];
  }
}

class UI {
  insertarPresupuesto(cantidad) {
    //Extrayendo los valores
    const {presupuesto,restante}=cantidad

    //Agregar al HTML
    document.querySelector("#total").textContent=presupuesto
    document.querySelector("#restante").textContent=restante
  }
}

//Instanciar
let ui = new UI();
let presupuesto;

//Funciones
function preguntarPresupuesto() {
  const presupuestoUsuario = prompt("¿Cuál es tu presupuesto?");
  //console.log(presupuestoUsuario);

  //Validaciones
  if (
    presupuestoUsuario === "" ||
    presupuestoUsuario === null ||
    isNaN(presupuestoUsuario) || //isNaN verifica si convierte a número o no.
    presupuestoUsuario <= 0
  ) {
    window.location.reload(); //Recarga la ventana actual
  }

  //console.log(parseInt(presupuestoUsuario));
  presupuesto = new Presupuesto(presupuestoUsuario);
  console.log(presupuesto);

  ui.insertarPresupuesto(presupuesto);
}
