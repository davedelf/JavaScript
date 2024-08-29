//Object Literal
const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

//Object Constructor. POO
function Producto(nombre, precio) {
  (this.nombre = nombre), (this.precio = precio), (this.disponible = true);
}

producto2 = new Producto("Monitor 24 Pulgadas", 500);
console.log(producto2);

const producto3 = new Producto("Televisor", 240);
console.log(producto3);
