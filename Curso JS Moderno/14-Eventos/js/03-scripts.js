//Eventos sobre los Inputs

const busqueda = document.querySelector(".busqueda");
busqueda.addEventListener("keydown", () => {
  console.log("Escribiendo");
});

busqueda.addEventListener("keyup", () => {
  console.log("Escribiendo y levantas la tecla");
});

busqueda.addEventListener("blur", () => {
  console.log("Has entrado y salido del formulario");
});

busqueda.addEventListener("copy", () => {
  console.log("Has copiado");
});

busqueda.addEventListener("paste", () => {
  console.log("Has pegado");
});

busqueda.addEventListener("cut", () => {
  console.log("Has cortado");
});

busqueda.addEventListener("input", () => {
  console.log("Estás interactuando sobre el elemento");
});

//Se pasa a consola el evento que está sucediendo, es decir, se imprime donde y qué está sucediendo
busqueda.addEventListener("input", (e) => {
  console.log(e.target);
});
busqueda.addEventListener("input", (e) => {
  console.log(e.target.value);
});

busqueda.addEventListener("input", (e) => {
  if (e.target.value === "") {
    console.log("Entrada inválida");
  }
});

/**
 * keydown: Cuando se escribe o presiona una tecla.
 * keyup: Cuando presionas y levantas la tecla.
 * blur: Entrar a un elemento y salir. Útil para validación de formularios.
 * copy: Copiar.
 * paste: Pegar.
 * cut: Cortar.
 * input: Cuando realizamos cualquier acción sobre el elemento, excepto blur, copiar, pegar y cortar.
 *
 * e.type: Indica sobre qué tipo de elemento sucede la acción
 * e.target: Indica qué elemento en específico es sobre el cual estamos trabajando.
 * e.target.value: Indica qué valor se está escribiendo o ingresando. Úitil para un sitio de búsqueda de artículos, de esa forma van apareciendo los artículos dinámicamente.
 * También es util para validacion de formulario, por ejemplo si se ingresan determinados caracteres o un texto vacío.
 */
