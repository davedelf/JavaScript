//Eventos al dar scroll con el mouse
//Suceden sobre la ventana global, que es window

window.addEventListener("scroll", () => {
  //Para ver qué cantidad de pixeles nos movemos verticalmente - eje y
  // const scrollPX=window.scrollY
  // console.log(scrollPX);

  //Para ver a qué distancia, en px, estamos de un determinado elemento
  const premium = document.querySelector(".premium");
  const ubicacion = premium.getBoundingClientRect(); //Dice en qué ubicación se encuentra el elemento
  // console.log(ubicacion);

  if (ubicacion.top < 784) {
    console.log("El elemento ya está visible");
  } else {
    console.log("Aun no, da más scroll");
  }
});
