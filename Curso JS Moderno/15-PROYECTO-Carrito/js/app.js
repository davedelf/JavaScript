//Variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

//Funciones

//Función para registrar todos los EventListener
cargarEventListeners();
function cargarEventListeners() {
  //Cuando agregamos un curso
  listaCursos.addEventListener("click", agregarCurso);
}

function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }

  /**
   * Con parentElement vamos recorriendo el DOM de forma vertical, es decir, de hijo a padre, lo contrario a children, ya que necesitamos ir al contenedor general
   * del elemento y desde alli podemos obtener los datos del curso.
   */
}

//Lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso) {
  //Crear un objeto con el contenido del curso actual
  const infoCurso = {
    imagen: curso.querySelector("img").src, //Seleccionamos la ruta de la imagen
    titulo: curso.querySelector("h4").textContent, //El titulo del curso se encuentra en un h4
    precio: curso.querySelector("span").textContent, //El precio con descuento está dentro de un span
    id: curso.querySelector("a").getAttribute("data-id"), //Seleccionamos el enlace 'a' y su atributo 'data-id, que es de donde sacamos el id del curso
    cantidad: 1,
  };

  //Usamos Spread Operator para no ir perdiendo los articulos en cada llamada de la funcióm. No queremos perder la referencia a los cursos que ya hemos agregado al carrito
  articulosCarrito = [...articulosCarrito, infoCurso];
  carritoHTML();
  console.log(articulosCarrito);
}

//Muestra el carrito de compras en el HTML. Genera el contenido HTML basado en el carrito
function carritoHTML() {
  //Limpiar el HTML para que no se 'apilen' las selecciones anteriores para evitar duplicados
  limpiarHTML();
  //Recorre el carrito y genera el HTML
  articulosCarrito.forEach((curso) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>
        ${curso.titulo}
    </td>
    `;

    //Agrega el HTML del carrito en el tbody
    contenedorCarrito.appendChild(row);
  });
}

//Elimina los cursos del tbody
function limpiarHTML() {
  //Forma lenta
  //   contenedorCarrito.innerHTML = "";

  //Forma óptima para limpiar HTML. Se recomienda ésta en lugar de usar innerHTML
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
