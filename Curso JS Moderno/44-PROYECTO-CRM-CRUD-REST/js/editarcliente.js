import { obtenerCliente,editarCliente } from "./API.js";
import { mostrarAlerta,validar } from "./funciones.js";

(function () {
  //Campos del formulario
  const nombreInput = document.querySelector("#nombre");
  const telefonoInput = document.querySelector("#telefono");
  const emailInput = document.querySelector("#email");
  const empresaInput = document.querySelector("#empresa");
  const idInput = document.querySelector('[name="id"]');

  document.addEventListener("DOMContentLoaded", async () => {
    const parametrosURL = new URLSearchParams(window.location.search);

    const idCliente = parametrosURL.get("id");

    const cliente = await obtenerCliente(idCliente);

    mostrarCliente(cliente);

    //Subir al formulario
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", validarCliente);
  });

  function mostrarCliente(cliente) {
    const { nombre, empresa, email, telefono, id } = cliente;

    idInput.value = id;
    nombreInput.value = nombre;
    empresaInput.value = empresa;
    emailInput.value = email;
    telefonoInput.value = telefono;
  }

  function validarCliente(e) {
    e.preventDefault();

    const cliente = {
      nombre: nombreInput.value,
      email: emailInput.value,
      telefono: telefonoInput.value,
      empresa: empresaInput.value,
      id: idInput.value,
    };


    if (validar(cliente)) {
      mostrarAlerta("Todos los campos son obligatorios");
      return;
    }

    //Reescribe el objeto
    editarCliente(cliente)



  }















})();
