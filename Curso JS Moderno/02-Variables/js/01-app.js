// Crear variables - var

//Creo una variable y la inicializo
var producto = "Monitor de 24 pulgadas";

console.log(producto);
//Puedo reasignarla
producto = "Monitor de 19 pulgadas";

console.log(producto);
//Podemos usar comillas simples o dobles, es lo mismo

//JavaScript es un lenguaje dinámico ya que no es tipado, es decir, no existen los tipos de datos o no es necesario especificarlos.
//Si queremos tipado entonces usamos TypeScript

producto = 20;

console.log(producto);

//Se pueden inicializar sin un valor y asignarlo después
var disponible;

disponible = true;

disponible = false;

//Inicializar múltiples variables. Con la coma evitamos tener que colocar varias veces var
var categoria = "Computadora",
  marca = "Marca Famosa",
  calificacion = 5;

//Una variable puede contener letras, guiones bajos o números pero NO pueden comenzar con número
var 99dias;
var dias99;

var 01_;
var _01;

//Estilos para definir una variable con más de una palabra

//CamelCase
var nombreProductoCategoriaPrecio;

//UnderScore o snake
var nombre_producto_categoria_precio;

//PascalCase. Es más utilizada en clases, ya que una clase siempre inicia con mayúscula
var NombreProductoCategoriaPrecio;
var producto ="er";