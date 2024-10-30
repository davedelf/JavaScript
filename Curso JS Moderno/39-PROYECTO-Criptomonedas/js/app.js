const criptomonedasSelect = document.querySelector("#criptomonedas");
const key = "9dfe1ba53203ddc3461fe40a863d3a2ca8dac2c49d8f29c04a3f7209bd36d4d7";

//Crear un promise
const obtenerCriptomonedas = (criptomonedas) =>
  new Promise((resolve) => {
    resolve(criptomonedas);
  });

document.addEventListener("DOMContentLoaded", () => {
  consultarCriptomonedas();
});

function consultarCriptomonedas() {
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limiy=10&tsym=USD`;
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
