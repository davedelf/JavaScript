//Forma Declarativa:
/*La programación declarativa se centra en qué se quiere lograr, sin especificar cómo debe lograrse. 
Se enfoca más en el resultado final y menos en los pasos específicos que se deben seguir para llegar a ese resultado. El código es generalmente más conciso y expresivo. */

const carrito = [];

//Definir un producto
const producto = {
  nombre: "Monitor 32 Pulgadas",
  precio: 400,
};

const producto2 = {
  nombre: "Celular",
  precio: 800,
};

const producto3 = {
  nombre: "Teclado",
  precio: 50,
};

//Spread Operator
let resultado = [...carrito, producto];

console.table(resultado);

//Si quiero agregar otro producto. Es una copia del resultado anterior y ahora le agregamos producto2
resultado = [...resultado, producto2];
console.table(resultado);

//El orden de los tres puntos - spread operator - indica el orden en que se agregan los objetos, similar a push y unshift. Si queremos agregar
//producto3 al comienzo:
resultado = [producto3, ...resultado];
console.table(resultado);

//Carrito no se modifica, sigue vacío
console.table(carrito);
