
const dinero=300
const totalAPagar=500
const tarjeta=false

if(totalAPagar<=dinero){
    console.log("Puedes pagarlo");
}else if(tarjeta){
    console.log("Si puedes pagar con la tarjeta");
}
else{
    console.log("No puedes pagarlo");
}

//Importante destacar que se ejecutará el bloque de código que cumpla con la priemra condición, es decir, si todas las condiciones se cumplen
// se ejecutará la primera, aun así todas sean true. Cuando tenemos varios if anidados conviene: o utilizar un switch o dividir en funciones