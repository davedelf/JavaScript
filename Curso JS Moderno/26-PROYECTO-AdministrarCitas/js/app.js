//Selectores
const pacienteInput = document.querySelector("#paciente");
const propietarioInput = document.querySelector("#propietario");
const emailInput = document.querySelector("#email");
const fechaInput = document.querySelector("#fecha");
const sintomasInput = document.querySelector("#sintomas");

const formulario = document.querySelector("#formulario-cita");

const contenedorCitas = document.querySelector("#citas");

//Eventos
//Sincronizamos código con la interfáz, inyectamos dinámicamente. Funciona si el 'name' del input coincide con la propiedad del objeto
pacienteInput.addEventListener("change", datosCita);
propietarioInput.addEventListener("change", datosCita);
emailInput.addEventListener("change", datosCita);
fechaInput.addEventListener("change", datosCita);
sintomasInput.addEventListener("change", datosCita);

formulario.addEventListener("submit", submitCita);

//Objeto de cita
const citaObj = {
  paciente: "",
  propietario: "",
  email: "",
  fecha: "",
  sintomas: "",
};

//Clase Notificación
class Notificacion {
  constructor({ texto, tipo }) {
    this.texto = texto;
    this.tipo = tipo;
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

//Clase AdminCitas
class AdminCitas {
  constructor() {
    this.citas = [];
  }

  agregar(cita) {
    this.citas = [...this.citas, cita];
  }

  mostrar() {
    //Limpiar el HTML
    while (contenedorCitas.firstChild) {
      contenedorCitas.removeChild(contenedorCitas.firstChild);
    }

    //Generamos las citas
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

      //Agregamos el HTML
      divCita.appendChild(paciente);
      divCita.appendChild(propietario);
      divCita.appendChild(email);
      divCita.appendChild(fecha);
      divCita.appendChild(sintomas);
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
    const notificacion = new Notificacion({
      texto: "Todos los campos son obligatorios",
      tipo: "error",
    });

    notificacion.mostrar();
    return;
  }

  citas.agregar(citaObj);
  citas.mostrar();
}
