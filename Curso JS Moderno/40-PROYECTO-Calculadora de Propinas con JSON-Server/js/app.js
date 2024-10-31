let cliente = {
  mesa: "",
  hora: "",
  pedido: [],
};

const btnGuardarCliente = document.querySelector("#guardar-cliente");

btnGuardarCliente.addEventListener("click", guardarCliente);

function guardarCliente() {
  const mesa = document.querySelector("#mesa").value;
  const hora = document.querySelector("#hora").value;

  //Otra forma de validar campos con el array method some
  const camposVacios = [mesa, hora].some((campo) => campo === "");
  if (camposVacios) {
    const existeAlerta = document.querySelector(".invalid-feedback");
    if (!existeAlerta) {
      const alerta = document.createElement("DIV");
      alerta.classList.add("invalid-feedback", "d-block", "text-center");
      alerta.textContent = "Todos los campos son obligatorios";
      document.querySelector(".modal-body form").appendChild(alerta);
      setTimeout(() => {
        alerta.remove();
      }, 1000);
    }
    return;
  }

  //Asignar datos del formulario al cliente

  //Colocamos primero el spread operator para que tome una copia del cliente y luego
  //reescriba con los nuevos datos de mesa y hora, pero si lo colocamos al final resetea
  //los campos del objeto y están vacíos.
  cliente = { ...cliente, mesa, hora };

  //Ocultar modal
  const modalFormulario = document.querySelector("#formulario");
  const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
  modalBootstrap.hide();
  console.log(cliente);
}
