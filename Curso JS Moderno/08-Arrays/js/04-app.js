const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

console.table(meses);

//Aunque esté declarado como const, los valores de un array si se pueden modificar
meses[0] = "Nuevo Mes";

console.table(meses);

//Agregar nuevo elemento. Aunque la posición no exista, la crea y agrega el valor.  Los valores que faltan los coloca como 'undefined'
meses[10] = "Ultimo mes";
console.table(meses);
console.log(meses[9]);
