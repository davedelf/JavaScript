const producto="Monitor 20 pulgadas"
console.log(producto);

const producto2=String('Monitor 24 pulgadas')
console.log(producto2);

const producto3=new String("Monitor 27 pulgadas")
console.log(producto3);

//Esta tercera forma de cerar el objeto String, al ver en consola como se imprime veremos que cada caracter
// ocupa una posición, es como ser, se comporta como un array de caracteres

//Reglas

/*No podemos mezclar comillas simples con dobles, pero en ciertos casos necesitamos hacer uso de alguna de ellas
dentro de algun string, como ejemplo, pulgadas se representa con el símbolo ". Para ello lo que hacemos es "escapar"
las comillas con back-slash
*/
const producto4="Monitor 29\""
console.log(producto4);
