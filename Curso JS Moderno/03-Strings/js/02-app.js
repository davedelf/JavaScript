//Métodos Includes y Length

const producto = "Monitor 20 Pulgadas";
console.log(producto);

//Para saber la longitud del string: length
console.log(producto.length);

//Para saber si la cadena contiene algun fragmento o palabra: IndexOf. Nos retorna en qué posición
//se encuentra la palabra o fragmento.
console.log(producto.indexOf("Monitor"));

//Ojo, nos muestra la primera coincidencia. Ejemplo, si buscamos
//un caracter o fragmento repetido, nos retorna la primera incidencia.
console.log(producto.indexOf("o"));
console.log(producto.indexOf("o"));

//Si no lo encuentra retorna -1
console.log(producto.indexOf("Tablet"));

//El método includes se utiliza para verificar si existe o no la palabra o fragmento dentro de la cadena.
//retorna true o false. Es case sensitive, es decir, distingue mayúsculas de minúsculas, por lo que no es
//lo mismo Monitor que monitor
console.log(producto.includes("Monitor"));
console.log(producto.includes("monitor"));
console.log(producto.includes("Tablet"));
