//Forma Imperativa:
/*La programación imperativa se centra en cómo se debe hacer algo. Es decir, detalla los pasos específicos que el programa debe seguir para alcanzar un resultado.
 El programador tiene que escribir las instrucciones exactas, y el flujo del programa se controla de manera explícita.*/

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

//Agregarlo al carrito
carrito.push(producto);
carrito.push(producto2);

//Agrear al comienzo del array. unshift
carrito.unshift(producto3);
console.table(carrito);
