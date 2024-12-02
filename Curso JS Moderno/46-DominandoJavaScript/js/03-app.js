/**
 * Coercion - Es la conversion implicita de un tipo dado a otro
 */

const numero1=20
const numero2="40"

console.log(numero1+numero2); //Implicita

//Conversion explicita
console.log(Number(numero2));


console.log(numero1.toString()); //Explicita

const pedido=[1,2,3,4]
console.log(pedido.toString());

console.log(JSON.stringify(pedido));