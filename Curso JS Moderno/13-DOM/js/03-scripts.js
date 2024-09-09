//Seleccionar elementos por su id - .getElementById
//Los id son únicos, por lo que no puede haber dos id iguales en un mismo documento. En realidad pueden existir id repetidos, pero al momento de generar el script no funcionará

const formulario = document.getElementById("formulario");
console.log(formulario);

//Si seleccionamos algo que no existe, nos retorna null
const noExiste = document.getElementById("no-existe");
console.log(noExiste);

/**
 * Estos metodos, getElementsByClass y getElementById ya casi no se utilizan, hoy en día se utiliza querySelector, que tiene una sintaxis más parecida a la de CSS
 */
