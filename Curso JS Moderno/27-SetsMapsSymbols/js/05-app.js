//Symbols

/**
 * Permiten crear una propiedad única, no existen dos iguales.
 */

const sym = Symbol("1");
const sym2 = Symbol("1");

if (sym === sym2) {
  console.log("Son iguales");
} else {
  console.log("Son diferentes");
}

console.log(Symbol() === Symbol());

//Nunca un symbolo es igual a otro

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

//Agregar nombre y apellido  como llaves del objeto
persona[nombre] = "Juan";
persona[apellido] = "De la torre";
persona.tipoCliente = "Premium";
persona.saldo = 500;

console.log(persona.nombre); //undefined

//console.log(persona[nombre]);

//Las propiedades que utilizan  un Symbol no son iterables.
for (let i in persona) {
  console.log(i);
}

//Definir una descripcion del symbol
const nombreCliente = Symbol("Nombre del Cliente");

const cliente = {};
cliente[nombreCliente] = "Pedro";

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);

//console.log(persona);

//Escenarios: Si tenemos valores y a l hora de iterarlos queremos ocultar algunos, entonces usamos symbol
