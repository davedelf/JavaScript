/**
 * Event Loop
 * 
 * Cómo se va ejecutando el código en JS, es decir, que tiene más prioridad; una variable, una función, un promise, etc.
 */

console.log("Primero");

setTimeout(() => {
    console.log("Segundo");
}, );

console.log("Tercero");

setTimeout(() => {
    console.log("Cuarto");
}, );


new Promise(function(resolve){
    resolve("Desconocido...")
}).then(console.log(resolve))

console.log("Ultimo");