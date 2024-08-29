//Repeat y Split

const producto = "Monitor 20 Pulgadas";

//Repetir una cadena de texto
const texto = "En promoción ".repeat(3);
console.log(texto);
console.log(`${producto} ${texto}!!!`);

//Split, dividir un string en base a algo - puede ser por espacios en blanco. Ésto nos genera un array
const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));

/*Caso de uso: Si en un formulario se piden hobbies, podemos listarlos */
const hobbies = "Leer, Caminar, Correr, Nadar, Bailar, Dormir";
console.log(hobbies.split(","));

const hashtags =
  "#JavaScript #Java #NodeJs #HTML #CSS #CSharp #EntityFramework #Bootstrap";
console.log(hashtags.split("#"));
