/**
 * Existe una librería útil para las fechas, que es momentjs. Consultar su documentación
 */

const diaHoy = new Date();

moment.locale("es"); //Para indicar que utilice el formato español

console.log(moment().format("MMMM Do YYYY")); // septiembre 19ª 2024
console.log(moment().format("MMMM Do YYYY h:mm:ss a")); //septiembre 19ª 2024 18:23:37 pm

console.log(moment().format("LLLL")); //jueves, 19 de septiembre de 2024 18:24

//Agregarle 3 días a la fecha actual
console.log(moment().add(3, "days").calendar()); //domingo a las 18:25. Ideal para un cupón que expira en determinado tiempo, por ejemplo.
