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
