//Selectores
const pacienteInput = document.querySelector("#paciente");
const propietarioInput = document.querySelector("#propietario");
const emailInput = document.querySelector("#email");
const fechaInput = document.querySelector("#fecha");
const sintomasInput = document.querySelector("#sintomas");

const formulario = document.querySelector("#formulario-cita");
const formularioInput = document.querySelector(
  '#formulario-cita input[type="submit"]'
);

const contenedorCitas = document.querySelector("#citas");
const btnEditar = document.querySelector(".btn-editar");

//Eventos
//Sincronizamos código con la interfáz, inyectamos dinámicamente. Funciona si el 'name' del input coincide con la propiedad del objeto
pacienteInput.addEventListener("change", datosCita);
propietarioInput.addEventListener("change", datosCita);
emailInput.addEventListener("change", datosCita);
fechaInput.addEventListener("change", datosCita);
sintomasInput.addEventListener("change", datosCita);

formulario.addEventListener("submit", submitCita);

//Variables
let editando = false; //Flag: Si estamos editando o registrando.

//Objeto cita
const citaObj = {
  id: generarId(),
  paciente: "",
  propietario: "",
  email: "",
  fecha: "",
  sintomas: "",
};

//Clases

// Notificación
class Notificacion {
  constructor({ texto, tipo }) {
    this.texto = texto;
    this.tipo = tipo;
    this.mostrar();
  }

  mostrar() {
    //Creamos la notificación
    const alerta = document.createElement("div");
    alerta.classList.add(
      "text-center",
      "w-full",
      "p-3",
      "text-white",
      "my-5",
      "alert",
      "uppercase",
      "font-bold",
      "text-sm"
    );

    //Eliminamos alertas duplicadas. Forma tradicional
    const alertaPrevia = document.querySelector(".alert");
    // if(alertaPrevia){
    //     alertaPrevia.remove()
    // }

    //Eliminamos alertas duplicadas. Forma morderna con 'optional chaining': Similar al operador ternario
    alertaPrevia?.remove();

    //Evaluamos el tipo de alerta y asignamos estilo
    this.tipo === "error"
      ? alerta.classList.add("bg-red-500")
      : alerta.classList.add("bg-green-500");

    //Mensaje de error
    alerta.textContent = this.texto;

    //Insertar en el DOM
    formulario.parentElement.insertBefore(alerta, formulario);

    //Seteamos timeOut
    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

// AdminCitas
class AdminCitas {
  constructor() {
    this.citas = [];
  }

  //Añadir
  agregar(cita) {
    this.citas = [...this.citas, cita];
    this.mostrar();
  }

  //Editar
  /**
   * Itera sobre todas las citas en memoria e identifica cual estamos actualizando
   */
  editar(citaActualizada) {
    this.citas = this.citas.map((cita) =>
      cita.id === citaActualizada.id ? citaActualizada : cita
    ); //forEach solo itera pero Map retorna arreglo nuevo
    this.mostrar();
  }

  eliminar(id) {
    this.citas = this.citas.filter((cita) => cita.id !== id);
    this.mostrar();
  }

  //Limpia HTML lista citas y recarga
  mostrar() {
    //Limpiar el HTML
    while (contenedorCitas.firstChild) {
      contenedorCitas.removeChild(contenedorCitas.firstChild);
    }

    //Si hay citas
    if (this.citas.length === 0) {
      contenedorCitas.innerHTML =
        '<p class="text-xl mt-5 mb-10 text-center">No Hay Pacientes</p>';
      return;
    }

    //Genera citas HTML
    this.citas.forEach((cita) => {
      const divCita = document.createElement("DIV");
      divCita.classList.add(
        "mx-5",
        "my-10",
        "bg-white",
        "shadow-md",
        "px-5",
        "py-10",
        "rounded-xl"
      );

      const paciente = document.createElement("P");
      paciente.classList.add(
        "font-normal",
        "mt-3",
        "text-grey-700",
        "normal-case"
      );
      paciente.innerHTML = `
        <span class="font-bold uppercase">Paciente: </span> ${cita.paciente}
      `;

      const propietario = document.createElement("P");
      propietario.classList.add(
        "font-normal",
        "mt-3",
        "text-grey-700",
        "normal-case"
      );
      propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span>${cita.propietario}`;

      const email = document.createElement("P");
      email.classList.add(
        "font-normal",
        "mt-3",
        "text-grey-700",
        "normal-case"
      );
      email.innerHTML = `<span class="font-bold uppercase">Email: </span>${cita.email}`;

      const fecha = document.createElement("P");
      fecha.classList.add(
        "font-normal",
        "mt-3",
        "text-grey-700",
        "normal-case"
      );
      fecha.innerHTML = `<span class="font-bold uppercase">Fecha Alta: </span>${cita.fecha}`;

      const sintomas = document.createElement("P");
      sintomas.classList.add(
        "font-normal",
        "mt-3",
        "text-grey-700",
        "normal-case"
      );
      sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span>${cita.sintomas}`;

      const btnEditar = document.createElement("button");
      btnEditar.classList.add(
        "py-2",
        "px-10",
        "bg-indigo-600",
        "hover:bg-indigo-700",
        "text-white",
        "font-bold",
        "uppercase",
        "rounded-lg",
        "flex",
        "items-center",
        "gap-2"
      );

      //Botones de Eliminar y Editar
      btnEditar.innerHTML =
        'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';

      const btnEliminar = document.createElement("button");
      btnEliminar.classList.add(
        "py-2",
        "px-10",
        "bg-red-600",
        "hover:bg-red-700",
        "text-white",
        "font-bold",
        "uppercase",
        "rounded-lg",
        "flex",
        "items-center",
        "gap-2",
        "btn-editar"
      );

      /**
       * En este caso usamos un 'event handler', ya que JS no percibe bien los eventos sobre elementos dinámicos. En este caso, el btnEditar se agrega luego de que se genera el registro
       * por lo que no podemos usar un 'eventListener'. EventListener se usa cuando se genera el objeto HTML al comienzo, y no cuando es resultado de una acción. Para estos casos usamos
       * un event handler. Los event handler comienzan con 'on'. En este caso usamos el event handler 'onclick'.
       *
       * Event Handlers => Elementos que se crean de forma dinámica
       * Event Listeners => Elementos que se crean una sola vez
       */

      //Creamos una copia de cita para poder pasarlo al cargarEdicion, ya que el forEach lo único que hace es iterar sobre cada objeto.
      //usamos structureClone(), que lo que hace es crear una copia del objeto que se le pasa por parámetro
      const clone = structuredClone(cita); //Clona objeto

      //O también podemos hacerlo con spread operator
      // const clone={...cita}

      btnEditar.onclick = () => cargarEdicion(clone);

      btnEliminar.innerHTML =
        'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';

      btnEliminar.onclick = () => this.eliminar(cita.id);
      const contenedorBotones = document.createElement("DIV");
      contenedorBotones.classList.add("flex", "justify-between", "mt-10");

      contenedorBotones.appendChild(btnEditar);
      contenedorBotones.appendChild(btnEliminar);

      //Agregamos el HTML
      divCita.appendChild(paciente);
      divCita.appendChild(propietario);
      divCita.appendChild(email);
      divCita.appendChild(fecha);
      divCita.appendChild(sintomas);
      divCita.appendChild(contenedorBotones);
      contenedorCitas.appendChild(divCita);
    });
  }
}

const citas = new AdminCitas();
//Funciones

//Agrega datos del HTML al objeto
function datosCita(e) {
  citaObj[e.target.name] = e.target.value;
}

//Validación del formulario
function submitCita(e) {
  e.preventDefault();

  if (Object.values(citaObj).some((valor) => valor.trim() === "")) {
    new Notificacion({
      texto: "Todos los campos son obligatorios",
      tipo: "error",
    });
    return;
  }

  if (editando) {
    citas.editar({ ...citaObj });
    new Notificacion({
      texto: "Guardado Correctamente",
      tipo: "exito",
    });
  } else {
    citas.agregar({ ...citaObj });
    new Notificacion({
      texto: "Paciente Registrado",
      tipo: "exito",
    });
  }

  //citas.agregar({ ...citaObj }); //Antes de almacenarlo le pasamos una copia, para que no reemplaze el que ya está cargado en el HTML
  formulario.reset();
  reiniciarObjetoCita();
  formularioInput.value = "Registrar Paciente";
  editando = false;
}

//Reiniciar objeto cita
function reiniciarObjetoCita() {
  //Forma tradicional

  // citaObj.paciente = "";
  // citaObj.propietario = "";
  // citaObj.email = "";
  // citaObj.fecha = "";
  // citaObj.sintomas = "";

  Object.assign(citaObj, {
    id: generarId(),
    paciente: "",
    propietario: "",
    email: "",
    fecha: "",
    sintomas: "",
  });
}

//Generar ID's
function generarId() {
  return Math.random().toString(36).substring(2) + Date.now();
}

//Editar cita registrada. Asigna datos de cita a los inputs
function cargarEdicion(cita) {
  Object.assign(citaObj, cita);

  pacienteInput.value = cita.paciente;
  propietarioInput.value = cita.propietario;
  emailInput.value = cita.email;
  fechaInput.value = cita.fecha;
  sintomasInput.value = cita.sintomas;

  editando = true;
  formularioInput.value = "Guardar Cambios";
}
