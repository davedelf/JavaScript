const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
];

//Imprimir longitud del array
console.log(meses.length);

//Imprimir por posición
console.log(meses[6]);

//Imprimir con ciclo for. Usamos let en lugar de const, ya que no podemos reasignarlo en cada iteración
for (let i = 0; i < meses.length; i++) {
  console.log(meses[i]);
}

//Mostrar en forma de tabla
console.table(meses);
