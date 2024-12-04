//Constructor Pattern - Se utiliza clase base para que las demás hereden sobre ésta
//En otros lenguajes se la conoce como "Clase Abstracta", no se puede instanciar sino heredar

class Persona {
  constructor(nombre, email) {
    (this.nombre = nombre), (this.email = email);
  }
}

class Cliente extends Persona {
  constructor(nombre, email, empresa) {
    super(nombre, email), (this.empresa = empresa);
  }
}

const cliente = new Cliente("David", "correo@correo.com", "Claro");

console.log(cliente);
