import { obtenerCliente } from "./API.js";

(function () {
  //Campos del formulario
  const nombreInput = document.querySelector("#nombre");
  const telefonoInput = document.querySelector("#telefono");
  const emailInput = document.querySelector("#email");
  const empresaInput = document.querySelector("#empresa");
  const idInput = document.querySelector("#id");

  document.addEventListener("DOMContentLoaded", async () => {
    const parametrosURL = new URLSearchParams(window.location.search);

    const idCliente = parametrosURL.get("id");

    const cliente = await obtenerCliente(idCliente);

    mostrarCliente(cliente);
  });

  function mostrarCliente(cliente) {
    const { nombre, empresa, email, telefono, id } = cliente;

    idInput.value = id;
    nombreInput.value = nombre;
    empresaInput.value = empresa;
    emailInput.value = email;
    telefonoInput.value = telefono;

    
  }
})();
