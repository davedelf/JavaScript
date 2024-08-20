//Objeto dentro de otro objeto
const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: false,
  informacion: {
    medidas: { medida: "1m", peso: "1m" },
    fabricacion: { pais: "China" },
  },
};

console.log(producto.informacion.medidas);
console.log(producto.informacion.fabricacion.pais);
