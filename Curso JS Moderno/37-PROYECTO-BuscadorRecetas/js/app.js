const selectCategorias = document.querySelector("#categorias");

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

document.addEventListener("DOMContentLoaded", iniciarApp);
