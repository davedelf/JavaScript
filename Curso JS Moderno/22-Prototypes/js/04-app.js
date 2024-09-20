function Cliente(nombre, saldo) {
  (this.nombre = nombre), (this.saldo = saldo);
}

Cliente.prototype.tipoCliente = function () {
  let tipoCliente;
  if (this.saldo > 10000) {
    tipo = "Gold";
  } else if (this.saldo > 5000) {
    tipo = "Platinum";
  } else {
    tipo = "Normal";
  }
  return tipo;
};

Cliente.prototype.nombreClienteSaldo = function () {
  return `Nombre: ${this.nombre}, Saldo: ${
    this.saldo
  }, Cliente: ${this.tipoCliente()}`;
};

Cliente.prototype.retiraSaldo = function (retira) {
  this.saldo -= retira;
};


function Persona(nombre,saldo,telefono){
    Cliente.call(this, nombre,saldo) //Heredamos el constructor de cliente
    this.telefono=telefono
}
//Si queremos heredar las funciones. Pasamos todo el prototype de Cliente al prototype de Persona
Persona.prototype=Object.create(Cliente.prototype)
//Para el constructor
Persona.prototype.constructor=Cliente

//Improtante clonar esas propiedades antes de intanciar el objeto, sino el objeto ya está creado y no las toma

Persona.prototype.mostrarTelefono=function(){
    return `El teléfono de esta persona es ${this.telefono}`
}


//Instanciarlo
const juan=new Persona("Juan",5000,10920192)
console.log(juan);
console.log(juan.nombreClienteSaldo());
console.log(juan.mostrarTelefono());