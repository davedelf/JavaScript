/**
 * Las clases en JavaScript terminan siendo una mejora del Object Constructor y los métodos una mejora de los prototypes. En JavaScript las clases son totalmente diferentes a otros
 * lenguajes de programación como C# o Java. Para hablar de clases estrictamente, pasamos a TypeScript.
 * Eisten dos formas de crear clases, y ambas funcionan igual.
 */

//Class Declaration
class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
}

const juan = new Cliente("Juan", 400);
console.log(juan);

//Class Expression
const Cliente2 = class {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
};

const juan2 = new Cliente2("Juan", 400);
console.log(juan2);
