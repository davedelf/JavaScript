const diaHoy = new Date(); //Toma la hora del servidor. Las fechas son objetos

console.log(diaHoy);
console.log(typeof diaHoy);

const dia2 = new Date("1-5-2000");
console.log(dia2);
console.log(typeof dia2);

//Métodos

//Saber el año actual
console.log(diaHoy.getFullYear());

//Saber el mes. Los meses comienzan en 0, tener en cuenta eso. IMPORTANTE
console.log(diaHoy.getMonth());

//Saber el día
console.log(diaHoy.getDate());

//La hora - sin minutos ni segundos
console.log(diaHoy.getHours());

//Trae los milisegundos desde el 01/01/1970
console.log(diaHoy.getTime());

//Retorna la cantidad de ms que han transcurrido desde el 01/01/1970
console.log(Date.now());
