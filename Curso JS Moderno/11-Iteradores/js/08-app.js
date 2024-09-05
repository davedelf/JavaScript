//for... in
//Mientras que for... of itera sobre arreglos, for... in itera sobre objetos. Lo que hace es imprimir los indices de los objetos
const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];

for (let pendiente in pendientes) {
  console.log(pendiente);
}

const automovil = {
  modelo: "Camaro",
  year: 1969,
  motor: "6.0",
};

//Imprimir nombre de las propiedades del objeto
for (let propiedad in automovil) {
  console.log(propiedad);
}

//FOR...OF -> Arreglos
//FOR... IN -> Objetos

//Imprimir valor de las propiedades del objeto
for (let propiedad in automovil) {
  console.log(`${automovil[propiedad]}`);
}

//Otro iterador más sencillo para objetos-. Para acceder al valor o a la clave
for (let [llave, valor] of Object.entries(automovil)) {
  console.log(valor);
}

for (let [llave, valor] of Object.entries(automovil)) {
  console.log(llave);
}
