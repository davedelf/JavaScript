//Iteradores nuevos de JS

/**
 *
 *
 */

const ciudades = ["Londres", "New York", "Madrid", "París"];
const ordenes = new Set([123, 321, 131, 102]);
const datos = new Map();
datos.set("nombre", "Juan");
datos.set("profesion", "Desarrollador Web");

//Entries Iterator Imprime keys-values. Agrega key si falta

//key:indice, value: valor
for (let entry of ciudades.entries()) {
  console.log(entry);
}
//key:value, value:valor
for (let entry of ordenes.entries()) {
  console.log(entry);
}
//llave-valor
for (let entry of datos.entries()) {
  console.log(entry);
}

//Values Iterator. Imprime sólo los values

for (let value of ciudades.values()) {
  console.log(value);
}

for (let value of ordenes.values()) {
  console.log(value);
}

for (let value of datos.values()) {
  console.log(value);
}

//Key Iterator. Imprime sólo las keys

for (let key of ciudades.keys()) {
  console.log(key);
}

for (let key of ordenes.keys()) {
  //Genera las keys con los mismos values
  console.log(key);
}

for (let key of datos.keys()) {
  console.log(key);
}

/**
 * Entries: key-value
 * Values: values
 * Keys: keys
 */

//Default Iterator
for (let ciudad of ciudades) {
  console.log(ciudad);
}

for (let orden of ordenes) {
  console.log(orden);
}

for (let dato of datos) {
  console.log(dato);
}
