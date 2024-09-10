//Eventos con el Mouse

const nav = document.querySelector(".navegacion");

// Registrar un evento

nav.addEventListener("click", () => {
  console.log("Click en nav");
});

nav.addEventListener("mouseenter", () => {
  console.log("Entrando en nav");
  nav.style.backgroundColor = "white";
});

nav.addEventListener("mouseout", () => {
  console.log("Saliendo de nav");
  nav.style.backgroundColor = "transparent";
});

nav.addEventListener("mousedown", () => {
  console.log("Click en nav");
  nav.style.backgroundColor = "red";
});

nav.addEventListener("mouseup", () => {
  console.log("Click en nav");
  nav.style.backgroundColor = "blue";
});

nav.addEventListener("dblclick", () => {
  console.log("Doble Click en nav");
  nav.style.backgroundColor = "purple";
});

/**
 * click: Cuando hacemos click
 * mouseenter: Cuando posicionamos el mouse sobre el elemento
 * mouseout: Cuando salimos del elemento
 * mousedown: Similar al click
 * mouseup: Cuando hago click y suelto el mouse
 * dblclick: Cuando hacemos doble click
 */
