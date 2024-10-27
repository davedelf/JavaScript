const selectCategorias = document.querySelector("#categorias");
selectCategorias.addEventListener("change", seleccionarCategoria);
const resultado = document.querySelector("#resultado");
const modal = new bootstrap.Modal("#modal", {});

function iniciarApp() {
  obtenerCategorias();

  function obtenerCategorias() {
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    fetch(url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((resultado) => {
        mostrarCategorias(resultado.categories);
      });
  }

  function mostrarCategorias(categorias = []) {
    categorias.forEach((categoria) => {
      const option = document.createElement("option");
      option.value = categoria.strCategory;
      option.textContent = categoria.strCategory;
      selectCategorias.appendChild(option);
    });
  }
}

function seleccionarCategoria(e) {
  const categoria = e.target.value;
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;

  fetch(url)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((resultado) => {
      mostrarRecetas(resultado.meals);
    });
}

function mostrarRecetas(recetas = []) {
  limpiarHTML(resultado);

  const heading = document.createElement("H2");
  heading.classList.add("text-center", "text-black", "my-5");
  heading.textContent = recetas.length ? "Resultados" : "No Hay Resultados";
  resultado.appendChild(heading);

  recetas.forEach((receta) => {
    const { idMeal, strMeal, strMealThumb } = receta;

    const recetaContenedor = document.createElement("DIV");
    recetaContenedor.classList.add("col-md-4");

    const recetaCard = document.createElement("DIV");
    recetaCard.classList.add("card", "mb-4");

    const recetaImagen = document.createElement("IMG");
    recetaImagen.classList.add("card-img-top");
    recetaImagen.alt = `Imagen de la receta ${strMeal}`;
    recetaImagen.src = strMealThumb;

    const recetaCardBody = document.createElement("DIV");
    recetaCardBody.classList.add("card-body");

    const recetaHeading = document.createElement("H3");
    recetaHeading.classList.add("card-title", "mb-3");
    recetaHeading.textContent = strMeal;

    const recetaButton = document.createElement("BUTTON");
    recetaButton.classList.add("btn", "btn-danger", "w-100");
    recetaButton.textContent = "Ver Receta";

    //Modal de Bootstrap
    // recetaButton.dataset.bsTarget="#modal"
    // recetaButton.dataset.bsToggle="modal"

    /**
     * Usamos onclick porque este button no va a existir al momento de cargar
     * el DOM sino que se generará dinámicamente según lo que seleccionemos
     */
    recetaButton.onclick = function () {
      seleccionarReceta(idMeal);
    };

    //Inyectamos en el HTML
    recetaCardBody.appendChild(recetaHeading);
    recetaCardBody.appendChild(recetaButton);

    recetaCard.appendChild(recetaImagen);
    recetaCard.appendChild(recetaCardBody);

    recetaContenedor.appendChild(recetaCard);

    resultado.appendChild(recetaContenedor);
  });

  function seleccionarReceta(id) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((resultado) => {
        mostrarRecetaModal(resultado.meals[0]);
      });
  }

  //Muestra el modal
  function mostrarRecetaModal(receta) {
    const { idMeal, strInstructions, strMeal, strMealThumb } = receta;

    //Añadir contenido al modal
    const modalTitle = document.querySelector(".modal .modal-title");
    const modalBody = document.querySelector(".modal .modal-body");

    modalTitle.textContent = strMeal;
    modalBody.innerHTML = `
    <img class="img-fluid" src="${strMealThumb}" alt="Receta ${strMeal}"/>
    <h3 class="my-3">Instrucciones</h3>
    <p>${strInstructions}</p>
    <h3 class="my-3">Ingredientes y Cantidades</h3>

    `;

    const listGroup = document.createElement("UL");
    listGroup.classList.add("list-group");
    //Mostrar cantidades e ingredientes
    for (let i = 1; i <= 20; i++) {
      if (receta[`strIngredient${i}`]) {
        const ingrediente = receta[`strIngredient${i}`];
        const cantidad = receta[`strMeasure${i}`];

        const ingredienteLi = document.createElement("LI");
        ingredienteLi.classList.add("list-group-item");
        ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;

        listGroup.appendChild(ingredienteLi);
      }
    }

    modalBody.appendChild(listGroup);

    const modalFooter = document.querySelector(".modal-footer");
    limpiarHTML(modalFooter);

    //Botones de Cerrar y Favorito
    const btnFavorito = document.createElement("BUTTON");
    btnFavorito.classList.add("btn", "btn-danger", "col");
    btnFavorito.textContent = "Guardar Favorito";

    const btnCerrarModal = document.createElement("BUTTON");
    btnCerrarModal.classList.add("btn", "btn-secondary", "col");
    btnCerrarModal.textContent = "Cerrar";
    btnCerrarModal.onclick = function () {
      modal.hide();
    };

    modalFooter.appendChild(btnFavorito);
    modalFooter.appendChild(btnCerrarModal);

    //Muestra el modal
    modal.show();
  }

  function limpiarHTML(selector) {
    while (selector.firstChild) {
      selector.removeChild(selector.firstChild);
    }
  }
}

document.addEventListener("DOMContentLoaded", iniciarApp);
