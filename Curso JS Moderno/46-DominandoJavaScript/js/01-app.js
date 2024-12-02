/**
 * Hoisting - JS se ejecuta en dos fases, en la priemra registra funciones y variables y en la segunda las ejecuta. En el caso de function declaration
 * podemos primero llamarla y luego declararla
 */

obtenerCliente("Juan")

function obtenerCliente(nombre){
    console.log(`El nombre del cliente es: ${nombre}`);
}

/**
 * En el caso de function expression no funciona si la llamamos antes de definirla
 */


obtenerCliente2("Pedro")

const obtenerCliente2=function(nombre){
    console.log(`El nombre del cliente es: ${nombre}`);
}

/**Esto es lo mismo que: */

obtenerCliente3("Pedro")
const obtenerCliente3;

obtenerCliente3=function(nombre){
    console.log(`El nombre del cliente es: ${nombre}`);
}

//Por ello nos marca error. Recordar que hoisting son dos etapas; registrar funciones y variables, ejecutar funciones