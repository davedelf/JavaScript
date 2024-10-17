/**
 * IntersectionObserver nos permite identificar un elemento una vez que es visible en el viewport del navegador
 */
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      console.log("Ya está visible");
    }
  });

  observer.observe(document.querySelector(".premium"));
});

/**
 * Esto es util para escenarios como el scroll infinito, como en las redes sociales Facebook, Twitter, Instagram.
 * Se aplica lazy loading y a medida que vamos haciendo scroll se van cargando los posteos, imágenes, etc.
 */
