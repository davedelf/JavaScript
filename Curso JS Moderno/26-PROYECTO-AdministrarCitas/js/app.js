//Selectores
const pacienteInput = document.querySelector("#paciente");
const propietarioInput = document.querySelector("#propietario");
const emailInput = document.querySelector("#email");
const fechaInput = document.querySelector("#fecha");
const sintomasInput = document.querySelector("#sintomas");

const formulario = document.querySelector("#formulario-cita");

//Objeto de cita
const citaObj = {
  paciente: "",
  propietario: "",
  email: "",
  fecha: "",
  sintomas: "",
};

//Eventos

//Sincronizamos código con la interfáz, inyectamos dinámicamente. Funciona si el 'name' del input coincide con la propiedad del objeto
pacienteInput.addEventListener("change", datosCita);
propietarioInput.addEventListener("change", datosCita);
emailInput.addEventListener("change", datosCita);
fechaInput.addEventListener("change", datosCita);
sintomasInput.addEventListener("change", datosCita);

formulario.addEventListener("submit", submitCita);

function datosCita(e) {
  citaObj[e.target.name] = e.target.value;
  console.log(citaObj);
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
}

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

    //Seteamos tiempo
    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}
