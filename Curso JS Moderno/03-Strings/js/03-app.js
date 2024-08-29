//Concatenar un String y Template Strings

const producto = "Monitor 20 Pulgadas ";
const precio = "30 USD";

//Concatenar dos variables
console.log(producto.concat(precio));

//Agregarle un string
console.log(producto.concat(" en descuento"));

//Concatenar usando +
console.log(producto + "con precio de " + precio);

console.log("El producto " + producto + " tiene un precio de " + precio);

//Cuando tenemos textos largos podemos usar Template String o String Interpolation para evitar tener que colocar + varias veces. Se hace
//con backtick
console.log(`El producto ${producto} tiene un precio de ${precio}`);

//También podemos concatenar utilizando coma, pero no es muy utilizado
console.log("El producto ", producto, " tiene un precio de ", precio);
