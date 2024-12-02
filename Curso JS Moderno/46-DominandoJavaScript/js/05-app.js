//Explicit Binding - Cuando no tenemos todos los datos dentro del mismo objeto

function persona(el1, el2) {
  console.log(`Mi nombre es ${this.nombre} y Escucho ${el1} y ${el2}`);
}

const informacion = {
  nombre: "Juan",
};

const musicaFavorita = ["Heavy Metal", "Rock"];

//Usamos la funcion .call para llamar a variable u otros datos. Call existe en todas las funciones, incluso en las que creamos

persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

//Otra forma es usar .apply

persona.apply(informacion, musicaFavorita);

//.call debemos especificar la posicion de cada valor del arreglo en cambio .apply lo lee solo

//Otra forma es .bind. Similar a .apply pero con la diferencia que crea una nueva función

const nuevaFuncion = persona.bind(informacion, musicaFavorita);
nuevaFuncion();
