//Para evitar problemas relacionados con el scope de una variable y nombres duplicados en diferentes scripts, usamos un IIFE para encapsular las variables

//Sintaxis IIFE
// (function () {
//   console.log("Desde un IIFE");
//   window.nombreCliente = "Juan"; //window : lo agregamos a la ventana global => la variable tiene scope global => podemos acceder desde cualquier script
// })();


export const nombreCliente="Juan" //Permite exportar la variable e importarla en otros archivos
export const ahorro=200