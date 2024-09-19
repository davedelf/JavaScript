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

  //Elimina cursos del carrito
  carrito.addEventListener("click", eliminarCurso);

  //Vaciar el carrito. Se elimina del array y del html
  vaciarCarritoBtn.addEventListener("click", () => {
    console.log("Vaciando carrito");
    articulosCarrito = []; //Reseteamos el array
    limpiarHTML(); //Limpiamos el html para eliminar todo
  });

  //Muestra los cursos de local storage
  document -
    addEventListener("DOMContentLoaded", () => {
      articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carritoHTML();
    });
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

//Elimina curso del carrito
function eliminarCurso(e) {
  console.log(e.target.classList);
  if (e.target.classList.contains("borrar-curso")) {
    const cursoId = e.target.getAttribute("data-id");

    //Elimina del array articulosCarrito por el data-id
    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoId); //Trae todos aquellos que no contengan ese id, es decir, lo elimina y me trae los otros

    //Ahora llamo la función para cargar el HTML nuevamente,es decir, actualizarlo

    carritoHTML(); //Volvemos a iterar sobre el carrito y mostramos su HTML

    console.log(articulosCarrito);
  }
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

  //Revisa si un elemento ya existe en el carrito
  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
  if (existe) {
    //Actualizamos la cantidad
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso; //Retorna el objeto actualizado
      } else {
        return curso; //Retorna los objetos que no están duplicados
      }
    });
    articulosCarrito = [...cursos];
  } else {
    //Agregamos el curso al carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  //Usamos Spread Operator para no ir perdiendo los articulos en cada llamada de la funcióm. No queremos perder la referencia a los cursos que ya hemos agregado al carrito
  carritoHTML();
  console.log(articulosCarrito);
}

//Muestra el carrito de compras en el HTML. Genera el contenido HTML basado en el carrito
function carritoHTML() {
  //Limpiar el HTML para que no se 'apilen' las selecciones anteriores para evitar duplicados
  limpiarHTML();
  //Recorre el carrito y genera el HTML
  articulosCarrito.forEach((curso) => {
    //Una vez que vemos que funciona, conviene mejorarlo usando Destructuring, es decir crear una constate con los datos del objeto
    const { imagen, titulo, precio, cantidad, id } = curso;

    const row = document.createElement("tr");
    row.innerHTML = `
    <td><img src="${imagen}" width=100></td>
    <td>${titulo}</td>
    <td>${precio}</td>
    <td>${cantidad}</td>
    <td><a href="#" class="borrar-curso" data-id="${id}"> X </a></td>
    `;

    //Agrega el HTML del carrito en el tbody
    contenedorCarrito.appendChild(row);

    //Agregar el carrito de compras al localstorage
    sincronizarStorage();
  });
}

//Agregar articulos del carrito al localstorage
function sincronizarStorage() {
  localStorage.setItem("carrito", JSON.stringify(articulosCarrito));
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
