//Objeto Math
//Contiene muchas funciones incorporadas. Es una clase estática.
let resultado;

//PI
resultado = Math.PI;
console.log(resultado);

//Redondear
resultado = Math.round(2.8);
console.log(resultado);

resultado = Math.round(2.3);
console.log(resultado);

//Redondear hacia arriba
resultado = Math.ceil(2.5);
console.log(resultado);

resultado = Math.ceil(2.1);
console.log(resultado);

//Redondear hacia abajo
resultado = Math.floor(2.7);
console.log(resultado);

//Raíz cuadrada
resultado = Math.sqrt(9);
console.log(resultado);

//Valor absoluto
resultado = Math.abs(-500);
console.log(resultado);

//Potencia
resultado = Math.pow(8, 3);
console.log(resultado);

//Valor mínimo
resultado = Math.min(2, 5, 7, 9);
console.log(resultado);

//Valor máximo
resultado = Math.max(67, 123, 568, 9);
console.log(resultado);

//Aleatorio
resultado = Math.random();
console.log(resultado);

resultado = Math.random() * 20;
console.log(resultado);

//Aleatorio dentro de un rango. En este caso va de 0 a 30
resultado = Math.floor(Math.random() * 30);
console.log(resultado);
