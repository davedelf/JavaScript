//Preguntas al usuario su nombre
const nombre= prompt('¿Cuál es tu nombre?')

//Toma el nombre y lo muestra en pantalla
document.querySelector('.contenido').innerHTML=(`${nombre} está aprendiendo JavaScript Moderno`)

//Asigna el valor hacia la variable producto
const producto='Monitor 24 pulgadas'

console.log(producto)
//Para mostrar mensaje de error
console.error('Algo salió mal')

//Con time podemos ver cuánto tiempo tarda en ejecutarse la consola
console.time('Hola');

//Mensaje de advertencia
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');
console.warn('Eso no está permitido');

console.timeEnd("Hola")

//Podemos crear objetos en la con sola tambièn, lo podemos hacer acá o en la consola del navegador

const obj={
    nombre:'Juan'
}
 function hola(){
    console.log('ok');
    console.log('Hola');
    console.log('Mundo');
 }

 hola()
// BUENAS PRÁCTICAS

//Punto y coma no es obligatorio al final de la línea, salvo que querramos dar por implícito el fin de la misma. De igual forma conviene colocarlo.
//Documentar funciones, dejar espacios entre sus lineas - que no esten una debajo de otra, pegadas.