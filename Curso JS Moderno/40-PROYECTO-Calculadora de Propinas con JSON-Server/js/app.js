let cliente = {
  mesa: "",
  hora: "",
  pedido: [],
};

const categorias = {
  1: "Comida",
  2: "Bebidas",
  3: "Postres",
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

  //Mostrar secciones
  mostrarSecciones();

  //Obtener platillos de la API  de JSON-Server
  obtenerPlatillos();
}

function mostrarSecciones() {
  const seccionesOcultas = document.querySelectorAll(".d-none");
  seccionesOcultas.forEach((seccion) => {
    seccion.classList.remove("d-none");
  });
}

function obtenerPlatillos() {
  const url = "http://localhost:4000/platillos";

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => {
      mostrarPlatillos(resultado);
    })
    .catch((error) => console.log(error));
}

function mostrarPlatillos(platillos) {
  const contenido = document.querySelector("#platillos .contenido");
  platillos.forEach((platillo) => {
    const row = document.createElement("DIV");
    row.classList.add("row", "py-3", "border-top");

    const nombre = document.createElement("DIV");
    nombre.classList.add("col-md-4");
    nombre.textContent = platillo.nombre;

    const precio = document.createElement("DIV");
    precio.classList.add("col-md-3", "fw-bold");
    precio.textContent = `$ ${platillo.precio}`;

    const categoria = document.createElement("DIV");
    categoria.classList.add("col-md-3");
    categoria.textContent = categorias[platillo.categoria];

    const inputCantidad = document.createElement("INPUT");
    inputCantidad.type = "number";
    inputCantidad.min = 0;
    inputCantidad.value = 0;
    inputCantidad.id = `producto -${platillo.id}`;
    inputCantidad.classList.add("form-control");

    //Funcion que detecta cantidad y platilo agregando
    inputCantidad.onchange = function () {
      const cantidad = parseInt(inputCantidad.value);
      agregarPlatillo({ ...platillo, cantidad });
    };

    const agregar = document.createElement("DIV");
    agregar.classList.add("col-md-2");
    agregar.appendChild(inputCantidad);

    row.appendChild(nombre);
    row.appendChild(precio);
    row.appendChild(categoria);
    row.appendChild(agregar);

    contenido.appendChild(row);
  });
}

function agregarPlatillo(producto) {
  //Extraer el pedido actual

  let { pedido } = cliente;
  //Revisar que la cantidad sea mayor a cero
  if (producto.cantidad > 0) {
    if (pedido.some((articulo) => articulo.id === producto.id)) {
      //El articulo ya existe, actualizamos la cantidad
      const pedidoActualizado = pedido.map((articulo) => {
        if (articulo.id === producto.id) {
          articulo.cantidad = producto.cantidad;
        }
        return articulo;
      });

      //Se asigna el nuevo array al cliente
      cliente.pedido = [...pedidoActualizado];
    } else {
      //El articulo no existe, lo agregamos al array de pedido
      cliente.pedido = [...pedido, producto];
    }
  } else {
    //Eliminar elementos cuando la cantidad es cero
    const resultado = pedido.filter((articulo) => articulo.id !== producto.id);
    cliente.pedido = [...resultado];
  }

  //Limpiar html previo
  limpiarHTML();
  //Mostrar el resumen
  actualizarResumen();
}

function actualizarResumen() {
  const contenido = document.querySelector("#resumen .contenido");

  const resumen = document.createElement("DIV");
  resumen.classList.add("col-md-6", "card", "py-5", "px-3", "shadow");

  //Información de la mesa
  const mesa = document.createElement("P");
  mesa.textContent = "Mesa: ";
  mesa.classList.add("fw-bold");

  const mesaSpan = document.createElement("SPAN");
  mesaSpan.textContent = cliente.mesa;
  mesaSpan.classList.add("fw-normal");
  mesa.appendChild(mesaSpan);

  //Información de la hora
  const hora = document.createElement("P");
  hora.textContent = "Hora: ";
  hora.classList.add("fw-bold");

  const horaSpan = document.createElement("SPAN");
  horaSpan.textContent = cliente.hora;
  horaSpan.classList.add("fw-normal");

  mesa.appendChild(mesaSpan);
  hora.appendChild(horaSpan);

  //Titulo de la seccion
  const heading = document.createElement("H3");
  heading.textContent = "Platillos consumidos";
  heading.classList.add("my-4", "text-center");

  //Iterar sobre el array de pedidos

  resumen.appendChild(mesa);
  resumen.appendChild(hora);
  resumen.appendChild(heading);

  contenido.appendChild(resumen);
}

function limpiarHTML() {
  const contenido = document.querySelector("#resumen .contenido");
  while (contenido.firstChild) {
    contenido.removeChild(contenido.firstChild);
  }
}
