const container = document.querySelector(".container");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

window.addEventListener("load", () => {
  formulario.addEventListener("submit", buscarClima);
});

function buscarClima(e) {
  e.preventDefault();

  //Validar
  const ciudad = document.querySelector("#ciudad").value;
  const pais = document.querySelector("#pais").value;

  //Consultar la API

  if (ciudad === "" || pais === "") {
    //Hubo un error
    mostrarError("Ambos campos son obligatorios");
    return;
  }

  //Consultar la API
  consultarAPI(ciudad, pais);
}

function mostrarError(mensaje) {
  const alerta = document.querySelector(".bg-red-100");
  if (!alerta) {
    //Crear alerta
    const alerta = document.createElement("div");
    alerta.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "py-3",
      "px-4",
      "rounded",
      "max-w-md",
      "mx-auto",
      "mt-6",
      "text-center"
    );

    alerta.innerHTML = `
  <strong class="font-bold">Error</strong>
  <span class="block">${mensaje}</span>
    `;
    container.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 5000);
  }
}

function consultarAPI(ciudad,pais) {
    const appID="c9d24122845d3c2dd3addd2bd2942f44"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`

    fetch(url)
    .then(respuesta=>respuesta.json())
    .then(datos=>{
        console.log(datos);
        if(datos.cod==="404"){
            mostrarError("Ciudad no encotrada")
        }
    })
}
