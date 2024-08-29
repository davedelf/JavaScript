const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";

//console.log(typeof boolean1);

//Comparar un boolean y un string siempre da false
console.log(boolean1 == boolean3);
console.log(boolean1 === boolean3);

//Este tipo de constructores crea un objeto o clase envolvente - wrapper class. Por ello
//el typeof da object.
const boolean4 = new Boolean(true);
console.log(typeof boolean4);

//Muy importante, al igual que otros lenguajes como Java, ver cuándo conviene usar datos primitivos o clases envolventes.
