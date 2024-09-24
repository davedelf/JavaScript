class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  mostrarInformacion() {
    return `Cliente: ${this.nombre}, tu saldo es de: $${this.saldo}`;
  }

  static bienvenida() {
    return "Bienvenido al cajero";
  }
}

//Herencia - extends (como en Java- extends Herencia, implements Interface)

class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, categoria) {
    super(nombre, saldo); //Para heredar los atributos del constructor padre usamos super
    this.telefono = telefono;
    this.categoria = categoria;
  }

  static bienvenida() {
    //Reescribir un método heredado
    return "Bienvenido al cajero de empresas";
  }
}

const juan = new Cliente("Juan", 500);
const empresa = new Empresa(
  "Código con Juan",
  500,
  1038442,
  "Aprendizaje en Línea"
);
console.log(empresa);
console.log(Empresa.bienvenida());

console.log(Cliente.bienvenida());
/**
 * Para heredar los atributos del constructor padre usamos 'super()'
 * Si en una clase hija declaramos un método con el mismo nombre que la función que hereda del padre, la reescribe
 */
