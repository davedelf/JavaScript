//Generadores

/**
 * Un generador es una función que retorna un Iterador.
 * Para indicar que es un generador, usamos *
 * Para mostrar u operar sobre los valores usamos 'yield'
 */

function* crearGenerador() {
  yield 1;
  yield "Juan";
  yield 3 + 3;
  yield true;
}

// const iterador=crearGenerador()

// console.log(iterador);
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador);

//Generador para carrito
function* generadorCarrito(carrito) {
  for (let i = 0; i < carrito.length; i++) {
    yield carrito[i];
  }
}

const carrito = ["Producto 1", "Producto 2", "Producto 3"];
const interador = generadorCarrito(carrito);
console.log(interador.next()); //value: "Producto 1", done:false
console.log(interador.next()); //value: "Producto 2", done:false
console.log(interador.next()); //value: "Producto 3", done:false
console.log(interador.next()); //value: undefined, done:true
