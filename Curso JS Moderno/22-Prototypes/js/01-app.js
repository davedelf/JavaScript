/**
 * En JS, prototype es un mecanismo clave que permite la herencia y la extensión de objetos. Formalmente, el prototype es un objeto asociado a todas las funciones y objetos
 * en JS, y se utiliza como plantilla para compartir propiedades y métodos entre instancas de objetos. Es un patrón creacional que se utiliza para crear nuevos objetos a partir
 * de objetos ya existentes. Todos los objetos heredan de la superclase Object, por lo cual heredan las subfunciones que ésta tiene. Entonces, si una clase B hereda de una clase A
 * esta clase B hereda tanto los atributos y metodos de A como los de Object.
 * Aunque Object Literal sea común no permte crear objetos dinámicos, cosa que Object Contructor si lo permite. Object Literal es como 'hardcodear' los datos y métodos, lo cual lo hace
 * poco dinámico y reutilizable.
 */

//Object Literal
const cliente = {
  nombre: "Juan",
  saldo: 500,
};

console.log(cliente);
console.log(typeof cliente);

//Object Constructor
function Cliente(nombre, saldo) {
  (this.nombre = nombre), (this.saldo = saldo);
}

const juan = new Cliente("Juan", 500);
console.log(juan);
