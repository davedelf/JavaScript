//Arrow Functions

/*
    Permiten simplificar la sintaxis de las funciones tradicionales
*/

const aprendiendo = function () {
  console.log("Aprendiendo JavaScript");
};

//Simplificándola a una Arrow Function
const aprendiendo2 = () => {
  console.log("Aprendiendo JavaScript 2");
};

aprendiendo();
aprendiendo2();

//Cuando el código es una sola linea no son necesarias las llaves. Además, se da por implícito el return, por lo que podemos eliminar el clg
const aprendiendo3 = () => "Aprendiendo JavaScript 3";
console.log(aprendiendo3());
