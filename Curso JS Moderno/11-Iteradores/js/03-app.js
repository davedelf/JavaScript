//Reto del Fizz Buzz
/*
Supongamos que tenemos una serie de elementos. Todos los que sean múltiplos de 3 deben imprimir Fizz y los que sean múltiplos de 5 deben imprimir Buzz, y los que sean múltiplos
de 3 y 5 deben imprimir Fizz Buzz
*/

// Múltiplos de 3: X % 3 == 0 : Fizz
// Múltiplos de 5:  X % 5 == 0 : Buzz
// Múltiplos de 3 y 5:  (X % 3 == 0) && (X % 5 == 0): Fizz Buzz

for (let i = 0; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} fizz buzz`);
  }
  if (i % 3 === 0) {
    console.log(`${i} fizz`);
  }
  if (i % 5 === 0) {
    console.log(`${i} buzz`);
  }
}

//Colocamos primero la doble condición, es decir, que sea múltiplo de 3 y 5, porque sino al detectar que es multiplo de 3 o 5
// el ciclo pasa a la siguiente iteración, por ello lo colocamos primero. Colocamos primero la condición poco probable para que el
// flujo pueda continuar. 15 es múltiplo de ambos, pero al detectar primero que es multiplo de 3 entonces pasa a la siguiente iteración.
