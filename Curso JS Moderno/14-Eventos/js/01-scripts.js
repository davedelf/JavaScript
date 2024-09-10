//Detecar cuando el HTML está listo - DOMContentLoaded
console.log(1);
document.addEventListener("DOMContentLoaded", () => {
  console.log(2);
});
console.log(3);

/**
 * DOMContentLoaded hace referencia a la carga completa del documento HTML, incluyendo sus referencias, imágenes, scripts, hojas de estilo, etc.
 * Lo que hace es esperar a que se cargue completamente el documento y una vez hecho se ejecuta la acción. Por orden de ejecucíon, las tres líneas anteriores
 * muestran en consola
 * 1
 * 3
 * 2
 *
 * Cuando se cargue el documento se ejecutará automáticamente la función
 */
