//Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");

//Constructores
function Seguro(marca, year, tipo) {
  this.marca = marca;
  this.year = year;
  this.tipo = tipo;
}

function UI() {}

//Llena las opciones de los años. Usamos arrow function ya que no usamos this
UI.prototype.llenarOpciones = () => {
  const max = new Date().getFullYear(),
    min = max - 20;

  const selectYear = document.querySelector("#year");
  for (let i = max; i > min; i--) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectYear.appendChild(option);
  }
};

//Muestra alertas en pantalla. Arrow function si no necesitamos acceder a ningún valor de UI, function() cuando necesitamos acceder a algun valor. Ambas funcionan igual.
UI.prototype.mostrarMensaje = function (mensaje, tipo) {
  const div = document.createElement("div");
  if (tipo === "error") {
    div.classList.add("error");
  } else {
    div.classList.add("correcto");
  }

  div.classList.add("mensaje", "mt-10");
  div.textContent = mensaje;

  //Insertar en el HTML
  const formulario = document.querySelector("#cotizar-seguro");
  formulario.insertBefore(div, document.querySelector("#resultado"));

  setTimeout(() => {
    div.remove()
  }, 3000);
};

//Instanciar UI
const ui = new UI();
console.log(ui);

document.addEventListener("DOMContentLoaded", () => {
  ui.llenarOpciones(); //LLena el select con los años
});

eventListeners();
function eventListeners() {
  const formulario = document.querySelector("#cotizar-seguro");
  formulario.addEventListener("submit", cotizarSeguro);
}

function cotizarSeguro(e) {
  e.preventDefault();

  //Leer marca seleccionada
  const marca = document.querySelector("#marca").value;

  //Leer año seleccionado
  const year = document.querySelector("#year").value;

  //Leer tipo de cobertura seleccionada
  const tipo = document.querySelector('input[name="tipo"]:checked').value; //Para seleccionar el radio checkeado. Lo seleccionamos mediante name

  //Validación
  if (marca === "" || year === "" || tipo === "") {
    ui.mostrarMensaje("Todos los campos son obligatorios","error")
    return
  }
  ui.mostrarMensaje("Cotizando...","correcto")

  //Instanciar el seguro

  //Utilizar el prototype que va a cotizar
  
}
