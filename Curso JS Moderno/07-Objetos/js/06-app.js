//Destructuring en objetos complejos

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: false,
  informacion: {
    medidas: { medida: "1m", peso: "1m" },
    fabricacion: { pais: "China" },
  },
};

//Por cada campo que necesitamos acceder lo especificamos, de lo contrario da is not defined.
//Ventajas: Accede y crea las variables en un solo paso

const {
  nombre,
  informacion,
  informacion: {
    fabricacion,
    fabricacion: { pais },
  },
} = producto;
