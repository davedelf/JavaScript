//Mixin Pattern - Forma de agregar funciones a una clase cuando ya ha sido creada

class Persona {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

const funcionesPersona = {
  mostrarInformacion() {
    console.log(`Nombre Persona: ${this.nombre} - Email: ${this.email}`);
  },
  mostrarNombre() {
    console.log(`El nombre es ${this.nombre}`);
  },
  mostrarEmail() {
    console.log(`El email es ${this.email}`);
  },
};

//Añadir funcionesPersona con Object Assign
Object.assign(Persona.prototype, funcionesPersona);

const persona = new Persona("David", "correo@correo.com");
console.log(persona);

persona.mostrarInformacion();
persona.mostrarEmail();
persona.mostrarNombre();

console.log("========================================================");
class Cliente extends Persona {
  constructor(nombre, email, empresa) {
    super(nombre, email);
    this.empresa = empresa;
  }
}

const cliente = new Cliente("Juan", "juan@juan.com", "Claro");
cliente.mostrarEmail();
cliente.mostrarNombre();

const funcionesCliente = {
  mostrarEmpresa() {
    console.log(`Su empresa es ${this.empresa}`);
  },
};

Object.assign(Cliente.prototype, funcionesCliente);

cliente.mostrarEmpresa();
