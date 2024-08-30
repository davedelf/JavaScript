//Diferencia entre Función y Método
const numero1 = 20;
const numero2 = "20";

console.log(parseInt(numero2)); //esto es una función
console.log(numero1.toString()); //esto es un método

function sumar() {
  console.log(2 + 2);
}

sumar();
