import { generarId } from "./funciones.js";
let editando = {
  value: false,
};

/**
 * let editando=false es global pero ESM lo trata como una constante. Para solucionarlo conviene convertirlo a objeto. Al convertirlo a objeto, en sus usos
 * cambiamos de editando a editando.value
 */

// Objeto de Cita
const citaObj = {
  id: generarId(),
  paciente: "",
  propietario: "",
  email: "",
  fecha: "",
  sintomas: "",
};

export { editando, citaObj };
