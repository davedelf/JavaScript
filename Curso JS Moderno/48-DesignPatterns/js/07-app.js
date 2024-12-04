//Namespace Pattern - Ayuda a evitar colisiones en el scope global. La idea es crear un objeto global con todas las funciones y variables
// en lugar de crear funciones y variables sueltas que puedan ocasionar colisiones con otras.

const restaurantApp = {};

restaurantApp.platillos = [
  {
    platillo: "Pizza",
    precio: 25,
  },
  {
    platillo: "Hamburguesa",
    precio: 20,
  },
  {
    platillo: "Hot Dog",
    precio: 20,
  },
];

restaurantApp.funciones = {
  mostrarMenu: (platillos) => {
    console.log(`Bienvenidos a nuestro Menú`);

    platillos.forEach((platillo, index) => {
      console.log(`${index} : ${platillo.platillo} $${platillo.precio}`);
    });
  },

  ordenar: (id) => {
    console.log(
      `Tu Platillo: ${restaurantApp.platillos[id].platillo} se está preparando`
    );
  },
  agregarPlatillo: (platillo, precio) => {
    const nuevo = {
      platillo,
      precio,
    };

    restaurantApp.platillos.push(nuevo);
  },
};

restaurantApp.funciones.ordenar(1);

restaurantApp.funciones.agregarPlatillo("Taco", 20);

const { platillos } = restaurantApp;

restaurantApp.funciones.mostrarMenu(platillos);
//La ventaja de este patrón es que nunca van a chocar los nombres de las funciones, y podemos tener diferentes namespaces para diferentes objetos
