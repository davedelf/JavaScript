/**
 *Pure Functions - Son funciones que retornan un dato pero no modifican los valores de las variables. 
 Es decir, si existe una variable o una funcion global no van a modificar el dato original sino que retornan uno nuevo.
 Se utilizan mucho en React

 Deben retornan la misma cantidad de salidas que la de entradas; si tiene 2 entradas entonces deben retornar 2 salidas
 Usualmente el resultado debe ser una nueva variable ya con el nuevo valor
 */

const duplicar = (numero) => numero * 2;

const numero1 = 20;

const resultado = duplicar(numero1);

console.log(resultado);
console.log(numero1);
