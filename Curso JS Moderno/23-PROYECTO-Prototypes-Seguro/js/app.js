//Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");

//Constructores
function Seguro(marca, year, tipo) {
  this.marca = marca;
  this.year = year;
  this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function () {
  /**
   1-Americano 1.15
   2-Asiatico 1.05
   3-Europeo 1.35
   */
  let cantidad;
  const base = 2000;

  console.log(this.marca);
  switch (this.marca) {
    case "1":
      cantidad = base * 1.15;
      break;
    case "2":
      cantidad = base * 1.05;
      break;
    case "3":
      cantidad = base * 1.35;
      break;
    default:
      break;
  }
  //Leer el año
  let diferencia = new Date().getFullYear() - this.year;

  //Cada año que la diferencia es mayor el costo del seguro se reduce en un 3%
  cantidad -= (diferencia * 3 * cantidad) / 100;

  /**
   * Si el seguro es Básico se multiplica por un 30% más
   * Si el seguro es Compelto se multiplica por un 50% más
   */

  if (this.tipo === "basico") {
    cantidad *= 1.3;
  } else {
    cantidad *= 1.5;
  }
  return cantidad;
};
//Realiza la cotización con los datos
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
    div.remove();
  }, 3000);
};

UI.prototype.mostrarResultado = (total, seguro) => {
  const { marca, year, tipo } = seguro;
  let textoMarca;
  switch (marca) {
    case "1":
      textoMarca = "Americano";
      break;
    case "2":
      textoMarca = "Asiatico";
      break;
    case "3":
      textoMarca = "Europeo";
      break;
    default:
      break;
  }
  const div = document.createElement("div");
  div.classList.add("mt-10");
  div.innerHTML = `
  <p class="header">Tu Resumen</p>
  <p class="font-bold">Marca: <span class="font-normal">${textoMarca}</span></p>
  <p class="font-bold">Year: <span class="font-normal">${year}</span></p>
  <p class="font-bold">Tipo: <span class="font-normal capitalize">${tipo}</span></p>
  <p class="font-bold">Total: <span class="font-normal">$${total}</span></p>
  `;

  const resultadoDiv = document.querySelector("#resultado");

  //Mostrar el spinner
  const spinner = document.querySelector("#cargando");
  spinner.style.display = "block";

  setTimeout(() => {
    spinner.style.display = "none"; //Se borra el spinner
    resultadoDiv.appendChild(div); //Se muestra el resultado
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
    ui.mostrarMensaje("Todos los campos son obligatorios", "error");
    return;
  }
  ui.mostrarMensaje("Cotizando...", "correcto");

  //Ocultar las cotizaciones previas
  const resultados = document.querySelector("#resultado div"); //Selecciono el div dentro de resultado
  if (resultados != null) {
    resultados.remove();
  }

  //Instanciar el seguro

  const seguro = new Seguro(marca, year, tipo);
  const total = seguro.cotizarSeguro();

  //Utilizar el prototype que va a cotizar
  ui.mostrarResultado(total, seguro);
}
