//Comparación

const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//Compara mismo valor
console.log(numero1 == numero2);

//Compara mismo valor y tipo de dato
console.log(numero1 === numero2);
console.log(typeof numero1);
console.log(typeof numero2);
console.log(numero1 === parseInt(numero2));

//Diferente
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);
console.log(numero1 != numero2);

console.log(numero1 !== numero2);
