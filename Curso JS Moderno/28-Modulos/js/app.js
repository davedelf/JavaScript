import nuevaFuncion, {
  nombreCliente,
  ahorro,
  mostrarInformacion,
  tieneSaldo,
  Cliente,
} from "./cliente.js";

/**
 * Todos los exports que estan dentro de las llaves son los export normales y los que están por fuera son los export default.
 * No pueden existir dos export default,solamente uno por archivo,
 * por lo que el nombre de la función actúa como un alias (la funcion se llama nuevaFuncion pero podemos llamarla usando miNuevaFuncion, por ej.)
 */

//Importar empresa
import { Empresa } from "./empresa.js";

nuevaFuncion();

console.log(nombreCliente);
console.log(ahorro);

console.log(mostrarInformacion(nombreCliente, ahorro));
tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente);

console.log(cliente.mostrarInformacion());

const empresa = new Empresa("Código con Juan", 100, "Aprendizaje en línea");
console.log(empresa.mostrarInformacion());
