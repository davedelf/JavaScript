//Modificar Textos o Imágenes con JS

const encabezado = document.querySelector(".contenido-hero h1");
console.log(encabezado);

//Imprimir el texto del encabezado

//Primera forma. Si en el estilo CSS el h1 tiene propiedad visibility: hidden no lo va a encontrar
console.log(encabezado.innerText);
//Segunda forma. Aunque esté en visibility: hidden sí lo va a encontrar
console.log(encabezado.textContent);
//Tercera forma. Nos muestra el texto junto con el código html. Se trae el html
console.log(encabezado.innerHTML);

//Podemos aplicar el Chaining (encadenamiento) a un selector, y eso nos va a mostrar el contenido
const encabezado2=document.querySelector(".contenido-hero h1").textContent
console.log(encabezado2);

//Además de mostrar en consola, podemos modificar el contenido del DOM.

//Modificar el contenido
document.querySelector(".contenido-hero h1").textContent="nuevo heading"

//Podemos asignarle el contenido de una variable

const nuevoHeading="Nuevo Heading"
document.querySelector(".contenido-hero h1").textContent=nuevoHeading

//Modificar una imagen

const imagen=document.querySelector(".card img")
imagen.src="img/hacer2.jpg"