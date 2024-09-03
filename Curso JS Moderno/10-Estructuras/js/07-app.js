//Operador OR - Se cumple una o la otra

const efectivo = 1000;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
  console.log("Si puedes pagar");
} else {
  console.log("Fondos insuficientes");
}

/**
    Útil para validar formularios, por ejemplo, para ver que todos los campos estén completos. Si uno está vacío entonces la validación falla.
    Es más comun usar OR que AND
 */
