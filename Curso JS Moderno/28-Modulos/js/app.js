import {
  nombreCliente,
  ahorro,
  mostrarInformacion,
  tieneSaldo,
} from "./cliente.js";

console.log(nombreCliente);
console.log(ahorro);

console.log(mostrarInformacion(nombreCliente, ahorro));
tieneSaldo(ahorro);
