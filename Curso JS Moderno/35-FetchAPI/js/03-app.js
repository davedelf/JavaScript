//Consultar e Imprimir los resultados de un Fetch

//Si queremos que se ejecute automáticamente al carga el DOM
document.addEventListener("DOMContentLoaded", obtenerDatos);

const cargarJSONArrayBtn = document.querySelector("#cargarJSONArray");
cargarJSONArrayBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  const url = "data/empleados.json";
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => mostrarHTML(datos));
}

function mostrarHTML(empleados) {
  const contenido = document.querySelector(".contenido");
  let html = "";
  empleados.forEach((empleado) => {
    const { id, nombre, empresa, trabajo } = empleado;
    html += `
    <p>Empleado:${nombre}</p>
    <p>ID:${id}</p>
    <p>Empresa:${empresa}</p>
    <p>Trabajo:${trabajo}</p>
    `;
  });

  contenido.innerHTML = html;
}
