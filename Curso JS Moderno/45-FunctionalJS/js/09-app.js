/**
 * Currying y Partials
 * 
 * Consiste en transformar una función con múltiples argumentos en una secuencia de funciones anidadas.
 * Devuelve una función que espera el siguiente argumento en línea.

 */

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(1, 2, 3));

//

function sum2(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
console.log(sum2(1)(2)(3));

const suma = (a, b, c) => a + b + c;

// const parcial=a=>(b,c)=>suma(a,b,c)

// const primerNumero=parcial(5)
// const resultado=primerNumero(4,3)
// console.log(resultado);

const parcial = (a) => (b) => (c) => suma(a, b, c);
const primerNumero = parcial(5);
const segundoNumero = primerNumero(4);
const resultado = segundoNumero(3);
console.log(resultado);

const resultadoParcial = parcial(5)(4)(3);
console.log(resultadoParcial);
