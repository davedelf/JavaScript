const criptomonedasSelect = document.querySelector("#criptomonedas");
const monedaSelect = document.querySelector("#moneda");
const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");
const objBusqueda = {
  moneda: "",
  criptomoneda: "",
};

//Crear un promise
const obtenerCriptomonedas = (criptomonedas) =>
  new Promise((resolve) => {
    resolve(criptomonedas);
  });

document.addEventListener("DOMContentLoaded", () => {
  consultarCriptomonedas();
  formulario.addEventListener("submit", submitFormulario);

  criptomonedasSelect.addEventListener("change", leerValor);
  monedaSelect.addEventListener("change", leerValor);
});

function consultarCriptomonedas() {
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limiy=10&tsym=USD`;
  const key =
    "9dfe1ba53203ddc3461fe40a863d3a2ca8dac2c49d8f29c04a3f7209bd36d4d7";
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => obtenerCriptomonedas(resultado.Data))
    .then((criptomonedas) => selectCriptomonedas(criptomonedas));
}

function selectCriptomonedas(criptomonedas) {
  criptomonedas.forEach((cripto) => {
    const { FullName, Name } = cripto.CoinInfo;

    const option = document.createElement("OPTION");
    option.value = Name;
    option.textContent = FullName;

    criptomonedasSelect.appendChild(option);
  });
}

function leerValor(e) {
  objBusqueda[e.target.name] = e.target.value;
}

function submitFormulario(e) {
  e.preventDefault();

  //Validar
  const { moneda, criptomoneda } = objBusqueda;

  if (moneda === "" || criptomoneda === "") {
    mostrarAlerta("Ambos campos son obligatorios");
    return;
  }

  //Consultar la API con los resultados

  consultarAPI();
}

function mostrarAlerta(mensaje) {
  const existeError = document.querySelector(".error");
  if (!existeError) {
    const divMensaje = document.createElement("DIV");
    divMensaje.classList.add("error");

    //Mensaje de error

    divMensaje.textContent = mensaje;

    formulario.appendChild(divMensaje);

    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }
}

function consultarAPI() {
  const { moneda, criptomoneda } = objBusqueda;
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) =>
      mostrarCotizacionHTML(resultado.DISPLAY[criptomoneda][moneda])
    );
}

function mostrarCotizacionHTML(cotizacion) {
  //Limpiar HTML previo
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

  const precio = document.createElement("P");
  precio.classList.add("precio");
  precio.innerHTML = `
    El Precio es: <span>${PRICE}</span>
  `;

  const precioAlto = document.createElement("P");
  precioAlto.innerHTML = `

  <p>Precio más alto del día: <span>${HIGHDAY}</span></p>
  `;

  const precioBajo = document.createElement("P");
  precioBajo.innerHTML = `
    <p>Precio más bajo del día: <span>${LOWDAY}</span></p>
  `;

  const ultimaActualizacion = document.createElement("P");
  ultimaActualizacion.innerHTML = `
  <p>Última actualización: <span> ${LASTUPDATE}</span></p>
  `;

  const ultimasHoras = document.createElement("P");
  ultimasHoras.innerHTML = `
  <p>Variación últimas 24 hs: <span>${CHANGEPCT24HOUR}%</span></p>
  `;
  resultado.appendChild(precio);
  resultado.appendChild(precioAlto);
  resultado.appendChild(precioBajo);
  resultado.appendChild(ultimasHoras);
  resultado.appendChild(ultimaActualizacion);
}
