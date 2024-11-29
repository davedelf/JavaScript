/**
 *
 * QUÉ ES FUNCTIONAL JS
 *
 * Crear tu codigo utilizando funciones
 * Las funciones deben tomar una entrada y tener una salida de datos
 * No se permite la modificación de datos
 * Tiene una sintaxis más de matemáticas
 *
 * CONCEPTOS
 *
 * Inmutabilidad - Los datos no deben modificarse , utilizar const casi siempre
 *
 *
 * Separar Funciones de Datos - Se utilizan mucho funciones que retornan un nuevo dato o Array Method, de esta forma tendremos funciones que entregan
 * un resultado nuevo pero nunca modifican los datos
 *
 *
 * First-Class functions
 * Es poder crear funciones que parezcan cualquier variable como lo es una function expression. Asignar a una variable una función
 *
 * const suma=function(a+b){
 *  return a+b
 * }
 * const resultado=suma
 *
 * JavaScript no es un lenguaje funcional pero sus características permiten que lo sea
 */

const suma = function (a, b) {
  return a + b;
};

const resultado = suma;

console.log(resultado(10,20));
