//Switch case
//Una vez finalizado cada case, debemos colocarle 'break', de lo contrario seguirá ejecutando. El 'default' es obligatorio, es decir, si no se cumple
// ningun case entonces se procede al default
const metodoPago = "efectivo";

switch (metodoPago) {
  case "efectivo":
    console.log(`Pagaste con ${metodoPago}`);
    pagar();
    break;
  case "cheque":
    console.log(`Pagaste con ${metodoPago}`);
    break;
  case "tarjeta":
    console.log(`Pagaste con ${metodoPago}`);
    break;
  default:
    console.log("Aún no has seleccionado un método de pago");
    break;
}

function pagar() {
  console.log("Pagando...");
}
