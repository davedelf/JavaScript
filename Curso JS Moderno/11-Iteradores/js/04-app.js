//While
/*
    Se ejecuta mientras una condición sea verdadera. Primero VALIDA si se cumple la condición y luego EJECUTA. 
    El do while EJECUTA una primera vez y luego VALIDA para ver si sigue ejecutando o no según se cumpla la condición.
 */

let i = 0; //Inicialización del contador

while (i < 10) {
  //Condición

  console.log(`Número ${i}`);
  i++; //Incremento del contador
}

//Código del Fizz Buzz
while (i < 100) {
  if (i % 15 === 0) {
    console.log(`Número ${i} fizz buzz`);
  } else if (i % 3 === 0) {
    console.log(`Número ${i} fizz`);
  } else if (i % 5 === 0) {
    console.log(`Número ${i} buzz`);
  }
  i++;
}

//Pares e Impares

while (i < 200) {
  if (i % 2 === 0) {
    console.log(`Número ${i} PAR`);
  } else {
    console.log(`Número ${i} IMPAR`);
  }

  i++;
}
