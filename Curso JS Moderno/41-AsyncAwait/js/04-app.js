//Manejar varios promises

function descargarNuevosClientes() {
  return new Promise((resolve) => {
    console.log("Descargando nuevos clientes...");

    setTimeout(() => {
      resolve("Los clientes fueron descargados");
    }, 5000);
  });
}

function descargarNuevosPedidos() {
  return new Promise((resolve) => {
    console.log("Descargando nuevos pedidos...");

    setTimeout(() => {
      resolve("Los pedidos fueron descargados");
    }, 3000);
  });
}

const app = async () => {
  try {
    // const clientes = await descargarNuevosClientes();
    // console.log(clientes);

    // const pedidos=await descargarNuevosPedidos()
    // console.log(pedidos);

    /**
     * Este bloque está bien, pero es secuencial y hasta que no se decarguen los clientes no se descargan los pedidos, por lo que perdemos
     * performance. Para simplificarlo y ganar rendimiento los encapsulamos en Promise.all() que toma un array de promises a ejecutar
     */

    const respuesta = await Promise.all([
      descargarNuevosClientes(),
      descargarNuevosPedidos(),
    ]);
    console.log(respuesta[0]);
    console.log(respuesta[1]);
  } catch (error) {
    console.log(error);
  }
};

app();
