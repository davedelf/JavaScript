const numero1 = "20";
const numero2 = "2.2";
const numero3 = "Uno";
const numero4 = 20;

//Operador typeof. Muestra el tipo de dato
console.log(typeof numero1);

//Parsear
console.log(Number.parseInt(numero1));
console.log(Number.parseFloat(numero2));
console.log(Number.parseInt(numero3)); //NaN - not a number.

//Ver si un número es entero o no
console.log(Number.isInteger(numero4));
