//Comparar Null y undefined

//Undefined
let numero;
console.log(numero);
console.log(typeof numero);

//Null
let numero2 = null;
console.log(typeof numero2);

//Si los comparamos da true, aunque sean diferentes. Numero no está definido y numero2 es de tipo null - object.
console.log(numero == numero2);

//para estos casos conviene usar el operador estricto
console.log(numero === numero2);
