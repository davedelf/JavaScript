//Destructuring
const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

const { nombre } = producto;
console.log(nombre);

//Destructuring de arrays
const numeros = [10, 20, 30, 40, 50];

//No podemos acceder con posición, en este caso nosotros definimos el nombre de la constante o valor. Los valores se asignan en el orden del array
const [primero, segundo, tercero] = numeros;
console.log(tercero);

//Si solo queremos un valor, colocamos comas con espacios vacios. Ejemplo, si queremos solo el 40
const [, , , cuarto] = numeros;
console.log(cuarto);

//Si queremos 10 y 20 separados, y 30 40 y 50 en su propio array. Esta sintaxis se utiliza mucho en React, por lo que está bueno familiarizarse con ella.
const [primer, segun, ...tercer] = numeros;
console.log(primer);
console.log(segun);
console.log(tercer);
