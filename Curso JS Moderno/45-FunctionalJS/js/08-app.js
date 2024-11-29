/**
 * Closures - Casi siempre van acompañados del scope.
 * Es la combinación de una función agrupada - dentro de otra - con referencias a su estado adyacente. En otras palabras,
 * un closure te da acceso al alcance de una función externa desde una función interna. 
 * 
 */

function init(){
    var name="Mozilla"
    function displayJName(){
        console.log(name);
    }

    displayJName()
}
init()