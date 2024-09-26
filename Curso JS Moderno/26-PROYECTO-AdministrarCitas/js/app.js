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
    console.log("Todos los campos son obligatorios");
    return;
  }
}
