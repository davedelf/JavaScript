//Funciones que retornan una funcion

const obtenerClientes = () => () => {
  console.log("David");
};

const fn = obtenerClientes();

fn();

/**
 * Es una función dentro de otra función, aunque no es una sintaxis común.
 * Asignamos una función dentro de otra función, la asignamos a una function expression y la llamamos
 */
