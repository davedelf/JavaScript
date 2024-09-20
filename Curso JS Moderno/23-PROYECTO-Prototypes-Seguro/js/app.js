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
    console.log("Faltan campos");
  } else {
    console.log("Pasó la validación");
  }
}
