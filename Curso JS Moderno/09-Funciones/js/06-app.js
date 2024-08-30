//Parámetros por Default
//Para cuando no le pasamos los parámetros necesarios. Lo declaramos en la definición de la función

function saludar(nombre = "Desconocido", apellido = "") {
  console.log(`Hola ${nombre} ${apellido}`);
}
saludar("David");
