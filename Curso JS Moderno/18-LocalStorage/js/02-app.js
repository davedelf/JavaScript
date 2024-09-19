//Obtener datos de LocalStorage

const nombre=localStorage.getItem("nombre")
console.log(nombre);

//Si no existe el valor que deseamos obtener nos arroja null

const productoJSON=localStorage.getItem("producto")
console.log(JSON.parse(productoJSON)); //lo convertimos a object

const meses=localStorage.getItem("meses")
console.log(JSON.parse(meses));