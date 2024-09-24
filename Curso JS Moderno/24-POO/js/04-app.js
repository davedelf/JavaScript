class Cliente {
  #nombre;
  constructor(nombre, saldo) {
    this.#nombre = nombre;
    this.saldo = saldo;
  }

  mostrarInformacion() {
    return `Cliente: ${this.#nombre}, tu saldo es de: $${this.saldo}`;
  }

  static bienvenida() {
    return "Bienvenido al cajero";
  }
}

const juan = new Cliente("Juan", 500);
console.log(juan);
//console.log(juan.#nombre); //Inaccesible
console.log(juan.mostrarInformacion());
/**
 * public: accesible desde cualquier parte
 * private: accesible solo dentro de la clase. Se utiliza # para indicar private
 * protected: accesible dentro de la misma clase y sus hijas, pero no fuera de ellas. No existe oficialmente el modificador pero por convención se utiliza _ para indicar
 * que el atributo o método es protegido, aunque eso no impide que pueda ser manipulado.
 */

//Para encapsular, podemos usar la conveción de los accesors - get y set.
class Persona {
  #nombre;
  #apellido;
  #edad;

  setNombre(nombre) {
    this.#nombre = nombre;
  }
  setApellido(apellido) {
    this.#apellido = apellido;
  }
  setEdad(edad) {
    this.#edad = edad;
  }
  getNombre() {
    return this.#nombre;
  }
  getApellido() {
    return this.#apellido;
  }
  getEdad() {
    return this.#edad;
  }

  mostrarInformacion() {
    return `Nombre: ${this.#nombre} - Apellido: ${this.#apellido} - Edad: ${
      this.#edad
    }`;
  }
}

const persona = new Persona();
persona.setNombre("David");
persona.setApellido("Delfino");
persona.setEdad(27);

console.log(persona.getNombre());
console.log(persona.getApellido());
console.log(persona.getEdad());
console.log(persona.mostrarInformacion());
