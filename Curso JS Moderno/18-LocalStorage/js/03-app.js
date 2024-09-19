//Eliminar y Actualizar elementos de LocalStorage   

//Eliminar  
localStorage.removeItem("nombre")
const nombre=localStorage.getItem("nombre")
console.log(nombre);

//Actualizar. No hay método par actualizar, debemos hacerlo de forma manual
const meses=JSON.parse(localStorage.getItem("meses"))
console.log(meses);
meses.push("Abril")
meses.push("Mayo")
meses.push("Junio")
localStorage.setItem("meses",JSON.stringify(meses))

console.log(localStorage.getItem("meses"));


//Para limpiar todo el LocalStorage, es decir, borrar todo

localStorage.clear()
