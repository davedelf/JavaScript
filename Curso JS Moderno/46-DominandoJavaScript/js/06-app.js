//New Binding

function Auto(modelo, color) {
  (this.modelo = modelo), (this.color = color);
}

const auto = new Auto("Camaro", "Negro");

console.log(auto);

//Window binding
window.color = "Negro"; //Asignamos un valor a la ventana global
function hola() {
  console.log(color);
}
hola();
