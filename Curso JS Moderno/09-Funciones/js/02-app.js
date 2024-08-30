//Declaración de Función
function sumar() {
  console.log(2 + 2);
}

sumar();

//Expresión de Función
const sumar2 = function () {
  console.log(3 + 3);
};

sumar2();

/*Diferencias

-   Podemos llamarla antes de inicializarla: Function Declaration SI, Function Expression NO. Esto sucede por el 'hoisting", que consiste en dos vueltas.
    JS en la primera vuelta registra qué funciones y variables va a crear - etapa de creación. En la segunda vuelta se ejecutan, por lo tanto sumar() puede ejecutarse
    porque ya se ha registrado, pero sumar2() no.
*/
