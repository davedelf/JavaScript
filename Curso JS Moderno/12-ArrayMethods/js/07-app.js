//Concat
//Sirve para unir dos arreglos
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
const meses2 = ["Agosto", "Septiembre"];
const meses3 = ["Octubre", "Noviembre", "Diciembre"];
const resultado = meses.concat(meses2);
console.log(resultado);

//Tener en cuenta el orden en que se concatenan
const resultado2 = meses2.concat(meses);
console.log(resultado2);

//Podemos concatenar varios arreglos, para ello colocamos coma
const resultado3 = meses.concat(meses2, meses3);
console.log(resultado3);

//Concatenar con Spread Operator
const resultado4 = [...meses, ...meses2, ...meses3];
console.log(resultado4);

//Podemos concatenar un string si lo deseamos
const resultado5 = [...meses, ...meses2, ...meses3, "Otro array"];
console.log(resultado5);

//Si al string le colocamos el spread operator, nos va a crear un array con cada uno de los caracteres del string
const resultado6 = [...meses, ...meses2, ...meses3, ..."Otro array"];
console.log(resultado6);
