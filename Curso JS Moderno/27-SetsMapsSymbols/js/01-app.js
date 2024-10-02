//Evita valores duplicados

//Tiende a ser más rápido que un objeto o arreglo

const carrito=new Set();

console.log(carrito);

//Set Methods

carrito.add("Camisa")
carrito.add("Disco #1")
carrito.add("Disco #2")
carrito.add("Disco #3")
carrito.add("Disco #3")  //No vuelve a agregar Disco #3 - valores duplicados


console.log(carrito.size);

console.log(carrito.has("Camisa"));
console.log(carrito.has("Guitarra"));

carrito.delete("Disco #3")
console.log(carrito.delete("Disco #3"));

carrito.forEach(producto=>{
    console.log(producto);
})







carrito.clear()





console.log(carrito);

//Del siguiente arreglo eliminar los duplicados
const numeros=[10,20,30,40,50,10,20]

const noRepetidos=new Set(numeros)

console.log(noRepetidos);