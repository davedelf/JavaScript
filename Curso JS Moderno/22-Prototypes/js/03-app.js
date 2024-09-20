function Cliente(nombre, saldo) {
  (this.nombre = nombre), (this.saldo = saldo);
}

//Creamos un prototype para cliente
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

//Podemos usar arrow function siempre y cuando no usemos this, ya que arrow function busca en toda la ventana y function() en el objeto que la contiene. Otra iferencia entre
//arrow function y función común
Cliente.prototype.nombreClienteSaldo = function () {
  return `Nombre: ${this.nombre}, Saldo: ${
    this.saldo
  }, Cliente: ${this.tipoCliente()}`;
};

Cliente.prototype.retiraSaldo = function (retira) {
  this.saldo -= retira;
};

//Instanciarlo
const pedro = new Cliente("Pedro", 6000);
console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());
pedro.retiraSaldo(1000)
console.log(pedro.nombreClienteSaldo());