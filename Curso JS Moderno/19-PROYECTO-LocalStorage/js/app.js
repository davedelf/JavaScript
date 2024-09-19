//Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];

//Event Listeners
eventListeners();
function eventListeners() {
  //Cuando el usuario arega un nuevo tweet
  formulario.addEventListener("submit", agregarTweet);

  //Cuando el documento está listo
  document.addEventListener("DOMContentLoaded", () => {
    tweets = JSON.parse(localStorage.getItem("tweets")) || [];
    //Intenta buscar los tweets en localstorage y los convierte a un array, en el caso de que no haya - null - crea un array vacío

    crearHTML();
  });
}

//Funciones
function agregarTweet(e) {
  e.preventDefault();

  //Textarea donde el usuario escribe
  const tweet = document.querySelector("#tweet").value;

  //Validacion
  if (tweet === "") {
    mostarError("Un mensaje no puede ir vacío");
    return; //previene que siga ejecutandose el codigo
  }
  //Añadir al arreglo de tweets

  //Creamos el objeto para diferenciarlos uno de otro en LocalStorage. En casos reales usamos una bd, pero en este caso usamos milisegundos como id
  const tweetObj = {
    id: Date.now(),
    //tweet:tweet
    tweet, //En versiones recientes de JS, si la llave y el valor se llaman igual podemos nombrar solamente la llave y eso asocia el valor a la llave con el mismo nombre
  };

  tweets = [...tweets, tweetObj];

  //Creamos el HTML una vez agregado

  crearHTML();

  //Reiniciar el formulario luego de agregar el tweet
  formulario.reset();
}

function mostarError(error) {
  //Crea el párrafo y asigna sus valores y propiedades
  const mensajeError = document.createElement("P");
  mensajeError.textContent = error;
  mensajeError.classList.add("error"); //.error se encuentra definida en la hoja de estilos

  //Agrega el párrafo al final del contenedor
  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeError);

  //Elimina el alerta después de 3 segundos
  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}

//Muestra un listadod de los tweets
function crearHTML() {
  limpiarHTML();

  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      //Agregar un boton de eliminar
      const btnEliminar = document.createElement("A");
      btnEliminar.classList.add("borrar-tweet");
      btnEliminar.textContent = "X";
      //Añadir la función de eliminar
      btnEliminar.onclick = () => {
        borrarTweet(tweet.id);
      };
      //Crear el HTML
      const li = document.createElement("LI");

      //Añadir el texto
      li.textContent = tweet.tweet;

      //Asignar el boton de eliminar
      li.appendChild(btnEliminar);

      //Añadimos el tweet a la lista
      listaTweets.appendChild(li);
    });
  }

  sincronizarStorage();
}

//Borrar el tweet
function borrarTweet(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
  crearHTML();
}

//Agrega los tweets actuales a localStorage
function sincronizarStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}
//Limpiar el HTML
function limpiarHTML() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}
