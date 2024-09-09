//Seleccionar elementos por su clase - .getElementsByClassName

const header = document.getElementsByClassName("header contenedor");
console.log(header);

//Importante: Es case sensitive, por lo que no es lo mismo header que HEADER

const hero = document.getElementsByClassName("hero");
console.log(hero);

//Si las clases existen más de una vez, es decir, tienen nombres similares
const contenedores = document.getElementsByClassName("contenedor");
console.log(contenedores);

//Si una clase no existe, no marca error ni nada, solamente retorna como un array vacío
const noExiste = document.getElementsByClassName("no-existe");
console.log(noExiste);

/*
Esta sintaxis es cada vez menos usada pero es importante conocerla, ya que puede ser de utilidad. Si hay un elemento te lo retorna y si hay varios elementos también los retorna
*/
