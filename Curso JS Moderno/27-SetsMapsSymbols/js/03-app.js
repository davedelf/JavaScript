//Maps. Son listas ordenadas en llave-valor. Tienen mejor performance que un objeto. Son interables

const cliente = new Map();

cliente.set("nombre", "Karen");
cliente.set("tipo", "Premium");
cliente.set("saldo", 3000);
cliente.set(true, true);
cliente.set([0], true);

console.log(cliente);

console.log(cliente.size);

console.log(cliente.has("nombre"));

console.log(cliente.get("nombre"));

cliente.delete("saldo");

console.log(cliente.has("saldo"));

console.log(cliente.get("saldo"));

cliente.clear();

console.log(cliente);

const paciente = new Map([
  ["nombre", "paciente"],
  ["cuarto", "no definido"],
]);

paciente.set("dr", "Dr Asignado");
paciente.set("nombre", "Antonio");
console.log(paciente);

paciente.forEach((datos, index) => {
  console.log(index);
});


//Si vamos a estar agregando o quitando datos, un Map tiene mejor performance que un objeto