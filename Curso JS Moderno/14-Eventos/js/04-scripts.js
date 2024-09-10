//Evento Submit a un formulario
const formulario = document.querySelector("#formulario");

// formulario.addEventListener("submit",(e)=>{
//     e.preventDefault()

//     console.log(e.target.method); //Qué método ejecutará
//     console.log(e.target.action); //Hacia qué ruta
// })

//El preventDefault() evita que suceda la acción por defecto asociada al elemento, sino que nosotros podamos manipular las acciones que querramos, sea como validar un formulario,
//enviar los datos a un endpoint de una API, etc.

//Podemos hacer lo mismo con una declaración de función
function validarFormulario(e) {
  e.preventDefault();
  console.log(e.target.method);
  console.log(e.target.action);
}

formulario.addEventListener("submit", validarFormulario);
