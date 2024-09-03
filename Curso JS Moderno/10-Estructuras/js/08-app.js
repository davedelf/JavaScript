//Detener la ejecución de un if con una función - Buenas prácticas

/**
 No es necesario comparar si es true, ya que implicitamente si se valida entonces se cumple
if(autenticado===true)
 */
const autenticado = true;
if (autenticado) {
  console.log("El usuario está autenticado");
}

/*
Creemos que, al ser 500 el puntaje se ejecutarán los dos if, pero la realidad es que solo se ejecuta el primero, ya que es top-down
*/
const puntaje = 350;
if (puntaje > 300) {
  console.log("Buen puntaje...felicidades");
} else if (puntaje > 400) {
  console.log("Excelente!");
}

/*
    A veces para evitar concatenar if, else if, else if, conviene separarlos y colocarlos dentro de una misma función. Se coloca return para detener la ejecución cuando se cumpla
    la condición, pero solo puede utilizarse dentro de funciones. Si no colocamos return, se ejecutarán las siguientes lineas que cumplan con la condición. El return es para 
    cortar la ejecución de la función.
*/

function revisarPuntaje() {
  if (puntaje > 300) {
    console.log("Buen puntaje");
    return;
  }

  if (puntaje > 400) {
    console.log("Excelente");
    return;
  }
}

revisarPuntaje();
