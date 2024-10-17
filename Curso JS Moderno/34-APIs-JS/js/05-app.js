/**
 * VisibilyState - Detectar cuando estamos viendo una página. Existen dos estados: visible y hidden
 */

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    alert("Has dejado de ver la pagina");
  } else {
    console.log("Estas viendo la pagina");
  }
});
