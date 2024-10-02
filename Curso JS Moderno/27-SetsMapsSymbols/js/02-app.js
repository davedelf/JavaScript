//WeakSet. Solamente almacena objetos, mientras que set almacena cualquier tipo de valor. Tampoco son interables (no podemos usar forEach)

const weakset = new WeakSet();

const cliente = {
  nombre: "David",
  saldo: 5000,
};

weakset.add(cliente);

console.log(weakset.has(cliente));

console.log(weakset.has("nombre"));
console.log(weakset.has(cliente2));

//weakset.delete(cliente)

console.log(weakset);
