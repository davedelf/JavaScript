//Palabras Break y Continue

/*
Break corta el flujo de ejecución de un for mientras que Continue intercepta un elemento, lo identifica y continúa la ejecución.
*/

for (let i = 0; i <= 10; i++) {
  console.log(`Número ${i}`);
}

//Ejemplo: Crea un for loop que al detectar el número 5 detenga su ejecución
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    console.log("Éste es el número 5");
    break;
  }
  console.log(`Número ${i}`);
}

//En lugar de decir 5 en número quiero que lo escriba
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    console.log("CINCO");
    continue;
  }
  console.log(`Número ${i}`);
}

//Casos de uso del Continue. Ver qué  productos del carrito tienen descuento
const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisor", precio: 100 },
  { nombre: "Tablet", precio: 200, descuento: true },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].descuento) {
    console.log(`El artículo ${carrito[i].nombre} tiene descuento`);
    continue;
  }
  console.log(`${carrito[i].nombre}`);
}
