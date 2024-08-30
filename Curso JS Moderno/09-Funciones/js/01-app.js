//Declaración de Función - Function Declaration
function sumar(numero1, numero2) {
  return numero1 + numero2;
}

const numero1 = 30;
const numero2 = 70;

console.log(sumar(numero1, numero2));

function saludar() {
  console.log("Hola Mundo");
}

saludar();

function comprobarEdad(edad) {
  if (edad >= 18) {
    console.log("Eres mayor");
  } else {
    console.log("Eres menor");
  }
}

comprobarEdad(27);

function mayorMenor(numero) {
  const random = Math.floor(Math.random() * 100);
  if (numero == random) {
    console.log("Iguales");
  }
  if (numero < random) {
    console.log(`${random} es mayor que ${numero}`);
  }
  if (numero > random) {
    console.log(`${random} es menor que ${numero}`);
  }
}

mayorMenor(80);

//Function Expression - Expresión de Función
const sumar2 = function () {
  console.log(3 + 3);
};

sumar2();
