const selectCategorias = document.querySelector("#categorias");
selectCategorias.addEventListener("change",seleccionarCategoria)

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

function seleccionarCategoria(e){
    const categoria=e.target.value
    const url=`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`

    fetch(url)
    .then(respuesta=>{
        return respuesta.json()
    })
    .then(resultado=>{
        console.log(resultado);
    })
}


document.addEventListener("DOMContentLoaded", iniciarApp);
