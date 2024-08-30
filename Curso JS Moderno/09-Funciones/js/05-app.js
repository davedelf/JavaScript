//Argumentos y Parámetros

//Parámetro: Forma representativa o de expresión.
//Argumento: Valor real que toma el parámetro.

function sumar(numero1, numero2) {
  //numero1 y numero2 son parámetros
  console.log(parseInt(numero1) + parseInt(numero2));
}

sumar(1, 3); //1 y 3 son argumentos
sumar(200, 184);

function saludar(nombre, apellido) {
  console.log(`Hola ${nombre} ${apellido}`);
}

saludar("David", "Delfino");
saludar("David"); //Si no le paso los argumentos, los que falten serán 'undefined'
