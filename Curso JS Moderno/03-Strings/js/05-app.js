//String Methods - Replace, Slice y SubString, CharAt

const producto = "Monitor 20 Pulgadas";

//Reemplazar texto en una cadena
console.log(producto);
console.log(producto.replace("Pulgadas", '"'));

console.log(producto);
console.log(producto.replace("Monitor", "Monitor Curvo"));

//Cortar una parte de la cadena. El inicio no puede ser mayor al final - no se puede cortar de atrás hacia delante.
console.log(producto);
console.log(producto.slice(1, 4));
console.log(producto.slice(0, 10));
console.log(producto.slice(8));

//Alternativa a slice. Si le pasamos inicio mayor a final, lo resuelve solo. Esa es la diferencia entre slice y substring
console.log(producto.substring(0, 10));
console.log(producto.substring(15, 10));

//Si queremos obtener un caracter en una posición determinada
console.log(producto.charAt(11));
