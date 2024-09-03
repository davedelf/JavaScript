//Operador ternario
const autenticado = true;
const puedePagar = true;
console.log(autenticado ? "Está autenticado" : "No está autenticado");

//Dos condiciones en un ternario
console.log(autenticado && puedePagar ? "Si puede pagar" : "No puede pagar");
console.log(autenticado || puedePagar ? "Si puede pagar" : "No puede pagar");

const efectivo = 800;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

//If anidado
if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
  if (efectivo > totalPagar) {
    console.log("Si pagaste con efectivo");
  } else {
    console.log("Otra forma de pago");
  }
} else {
  console.log("Fondos insuficientes");
}

//Ternario anidado. Poco común pero se puede usar
console.log(
  autenticado
    ? puedePagar
      ? "Si está autenticado y puede pagar"
      : "Si está autenticado, no puede pagar"
    : "No está autenticado"
);
