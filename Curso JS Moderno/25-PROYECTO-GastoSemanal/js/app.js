//Variables y Selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

//Eventos
eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);
  formulario.addEventListener("submit", agregarGasto);
}

//Classes
class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
    this.gastos = [];
  }

  nuevoGasto(gasto) {
    this.gastos = [...this.gastos, gasto];
    this.calcularRestante();
  }

  calcularRestante() {
    const gastado = this.gastos.reduce(
      (
        total,
        gasto //reduce: Itera sobre los elementos y acumula en un total
      ) => total + gasto.cantidad,
      0 //0: en cuanto inicia
    );

    this.restante = this.presupuesto - gastado;

    console.log(this.restante);
  }

  eliminarGasto(id) {
    this.gastos = this.gastos.filter((gasto) => gasto.id !== id);

    console.log(this.gastos);

    this.calcularRestante();
  }
}

class UI {
  insertarPresupuesto(cantidad) {
    //Extrayendo los valores
    const { presupuesto, restante } = cantidad;

    //Agregar al HTML
    document.querySelector("#total").textContent = presupuesto;
    document.querySelector("#restante").textContent = restante;
  }

  imprimirAlerta(mensaje, tipo) {
    //Crear el div
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert");

    if (tipo === "error") {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-success");
    }

    //Mensaje de error
    divMensaje.textContent = mensaje;

    //Insertar en el HTML
    document.querySelector(".primario").insertBefore(divMensaje, formulario);

    //Quitar del HTML
    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }

  mostrarGastos(gastos) {
    this.limpiarHTML(); //Elimina el HTML previo
    //Iterar sobre los gastos
    gastos.forEach((gasto) => {
      const { cantidad, nombre, id } = gasto;

      //Crear un LI
      const nuevoGasto = document.createElement("li");
      nuevoGasto.className =
        "list-group-item d-flex justify-content-between align-items-center";
      //nuevoGasto.setAttribute("data-id", id); //Hacen lo mismo setAttribute y dataset, pero se recomienda usar dataset en versiones nuevas de js
      nuevoGasto.dataset.id = id;
      console.log(nuevoGasto);

      //Agregar el HTML del gasto
      nuevoGasto.innerHTML = `
        ${nombre} <span class="badge badge-primary badge-pill"> $${cantidad}</span>
      `;

      //Botón para borrar el gasto
      const btnBorrar = document.createElement("button");
      btnBorrar.classList.add("btn", "btn-danger", "borrar-gasto");
      btnBorrar.innerHTML = "Borrar &times"; //Entidad HTML &times - agrega el icono de X al botón. Se usa con innerHTML

      btnBorrar.onclick = () => {
        eliminarGasto(id);
      };

      nuevoGasto.appendChild(btnBorrar);

      //Agregar al HTML
      gastoListado.appendChild(nuevoGasto);
    });
  }

  //Borrar los HTML anteriores para no repetir
  limpiarHTML() {
    while (gastoListado.firstChild) {
      gastoListado.removeChild(gastoListado.firstChild);
    }
  }

  actualizarRestante(restante) {
    document.querySelector("#restante").textContent = restante;
  }

  comprobarPresupuesto(presupuestoObj) {
    const { presupuesto, restante } = presupuestoObj;
    const divRestante = document.querySelector(".restante");

    //Comprobar porcentajes
    if (presupuesto / 4 > restante) {
      divRestante.classList.remove("alert-sucess", "alert-warning");
      divRestante.classList.add("alert-danger");
    } else if (presupuesto / 2 > restante) {
      divRestante.classList.remove("alert-success");
      divRestante.classList.add("alert-warning");
    } else {
      divRestante.classList.remove("alert-danger", "alert-warning");
      divRestante.classList.add("alert-success");
    }

    if (restante <= 0) {
      ui.imprimirAlerta("El presupuesto se ha agotado", "error");
      formulario.querySelector('button[type="submit"]').disabled = true;
    }
  }
}

//Instanciar
let ui = new UI();
let presupuesto;

//Funciones

function agregarGasto(e) {
  e.preventDefault();

  //Leer los datos del formulario
  const nombre = document.querySelector("#gasto").value;
  const cantidad = Number(document.querySelector("#cantidad").value);

  //Validar
  if (nombre === "" || cantidad === "") {
    ui.imprimirAlerta("Ambos campos son obligatorios", "error");
    return;
  } else if (cantidad <= 0 || isNaN(cantidad)) {
    ui.imprimirAlerta("Cantidad no válida", "error");
    return;
  }

  //Generar un objeto con el gasto
  const gasto = { nombre, cantidad, id: Date.now() };

  //Añade un nuevo gasto
  presupuesto.nuevoGasto(gasto);

  //Mensaje de Ok
  ui.imprimirAlerta("Gasto agregado Correctamente");

  //Imprimir los gastos
  const { gastos, restante } = presupuesto;
  ui.mostrarGastos(gastos);

  //Actualizar restante

  ui.actualizarRestante(restante);

  //Comprobar presupuesto
  ui.comprobarPresupuesto(presupuesto);

  //Reiniciar formulario
  formulario.reset();
}

function eliminarGasto(id) {
  //Elimina del objeto
  presupuesto.eliminarGasto(id);

  //Elimina los gastos del HTML
  const { gastos, restante } = presupuesto;
  ui.mostrarGastos(gastos);

  ui.actualizarRestante(restante);

  ui.comprobarPresupuesto(presupuesto);
}

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

  presupuesto = new Presupuesto(presupuestoUsuario);
  console.log(presupuesto);

  ui.insertarPresupuesto(presupuesto);
}


//