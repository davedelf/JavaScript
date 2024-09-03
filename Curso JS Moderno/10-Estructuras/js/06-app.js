//Operador &&
//Revisa que se cumplan dos condiciones

const usuario=true
const puedePagar=false

if(usuario&&puedePagar){
    console.log("Si puedes comprar");
}else if(!usuario){
    console.log("Inicia sesión");
}else if(!puedePagar){
    console.log("Fondos insuficientes");
}else{
    console.log("No puedes comprar");
}

//Operador OR 
//Se cumple una o la otra, pero no ambas
