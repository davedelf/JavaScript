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
    console.log("Si hay al menos un campo vacío");
  } else {
    console.log("Todos los campos están llenos");
  }
}
