//WeakMap

/**
 * Sirven para mantener una serie de datos como 'privados'.
 * Al igual que los Map son llave-valor.
 * No son iterables, por lo que no podemos usar arrayMethods
 */

const producto = {
  idProducto: 10,
};

const weakMap = new WeakMap();

weakMap.set(producto, "Monitor");

console.log(weakMap.has(producto));

console.log(weakMap.get(producto)); //Nos retorna el valor 'Monitor', entonces idProducto dentro de la llave 'producto' queda oculto

console.log(weakMap);
