//Object .keys, .values, .entries
const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

//Para saber si ese objeto tiene o no información

//Retorna keys
console.log(Object.keys(producto));

//Retorna values
console.log(Object.values(producto));

//Retorna los pares key:value
console.log(Object.entries(producto));
