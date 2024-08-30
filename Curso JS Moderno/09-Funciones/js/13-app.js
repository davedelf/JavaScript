//Métodos de propiedad
const reproductor = {
  reproducir: function (id) {
    console.log(`Reproducienco canción con el ID ${id}`);
  },
  pausar: function () {
    console.log("Pausando");
  },
};

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.reproducir(10);
reproductor.pausar();

//Agregar metodos fuera del objeto
reproductor.borrar = function (id) {
  console.log(`Borrando canción con id ${id}`);
};

reproductor.borrar(30);

reproductor.crearPlaylist = function (canciones) {
  let playlist = [];
  canciones.forEach((cancion) => {
    playlist.push(cancion);
    console.log(`Se agregó la canción ${cancion}`);
  });
  console.log("Ésta es tu playlist");
  console.table(playlist);
};

let canciones = [
  "Paramore - Decode",
  "Nina Kraviz - I Want You",
  "Emma Hewitt - Take Me With You",
  "Madonna - Justify My Love",
];

reproductor.crearPlaylist(canciones);




//Llevando todo a Arrow Function

const reproductor2 = {
  reproducir: (id) => console.log(`Reproduciendo canción con ID ${id}`),
  pausar: () => console.log("Pausando"),
};

reproductor2.borrar = (id) => console.log(`Borrando canción con ID ${id}`);
reproductor2.crearPlaylist = (canciones) => {
  let playlist = [...canciones];
  console.table(playlist);
};

reproductor2.reproducir(20);
reproductor2.borrar(10);
reproductor2.pausar();

let canciones2 = [
  "Paramore - Decode",
  "Nina Kraviz - I Want You",
  "Emma Hewitt - Take Me With You",
  "Madonna - Justify My Love",
];

reproductor2.crearPlaylist(canciones2);
