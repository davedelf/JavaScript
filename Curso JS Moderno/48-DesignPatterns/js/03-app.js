//Singleton - Crea una única instancia de la clase

let instance = null;

class Persona {
  constructor(nombre, email) {
    if (!instance) {
      (this.nombre = nombre), (this.email = email);
      instance = this;
    } else {
      return instance;
    }
  }
}

const persona = new Persona("David", "correo@correo.com");
console.log(persona);

const persona2 = new Persona("Karen", "karen@karen.com");
console.log(persona2);

//En consola imprime solo persona - David - y no persona2 - Karen - ya que es singleton.
