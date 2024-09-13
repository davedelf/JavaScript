document.addEventListener("DOMContentLoaded", function () {
  //Seleccionar los elementos de la intefaz
  const email = {
    email: "",
    asunto: "",
    mensaje: "",
  };
  console.log(email);

  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");
  const btnSubmit = document.querySelector('#formulario button[type="submit"]');
  const btnReset = document.querySelector('#formulario button[type="reset"]');
  const spinner = document.querySelector("#spinner");
  //Asignar los eventos

  //blur: Cuando salimos del campo.
  //input: Cuando escribimos en el campo.
  //target es el elemento sobre el cual se está registrando el evento. e es el evento

  /**
   * Si coloco 'validar()' eso llama a la función inmediatamente, independiente de si sucede o no el evento, en cambio 'validar' ejecuta la función cuando sucede el evento
   */

  //Asignar eventos
  inputEmail.addEventListener("input", validar);
  inputAsunto.addEventListener("input", validar);
  inputMensaje.addEventListener("input", validar);

  formulario.addEventListener("submit", enviarEmail);

  btnReset.addEventListener("click", function (e) {
    e.preventDefault(); //Previene el evento por defecto, que es limpiar-resetear el formulario. Cada elemento html tiene un evento por default

    //Reiniciamos el objeto email
    //email.email = "";
    //email.asunto = "";
    //email.mensaje = "";

    //Reiniciamos el formulario
    //formulario.reset();

    //Volvemos a activar la función comprobarEmail para que aparezcan las alertas. De esta forma desactivamos el boton de Enviar
    //comprobarEmail();

    resetFormulario();
  });

  //Habilitar el Spinner para enviar email
  function enviarEmail(e) {
    e.preventDefault();

    spinner.classList.add("flex");
    spinner.classList.remove("hidden");

    setTimeout(() => {
      spinner.classList.add("hidden");
      spinner.classList.remove("flex");

      //Reiniciamos el formulario y de esa forma el botón enviar se deshabilita
      resetFormulario();

      const alertaExito = document.createElement("P");
      alertaExito.classList.add(
        "bg-green-500",
        "text-white",
        "pd-2",
        "text-center",
        "rounded-lg",
        "mt-10",
        "font-bold",
        "text-sm",
        "uppercase"
      );
      alertaExito.textContent = "Mensaje enviado correctamente";

      formulario.appendChild(alertaExito);

      setTimeout(() => {
        alertaExito.remove();
      }, 3000);
    }, 3000); //milisegundos
  }

  function validar(e) {
    if (e.target.value.trim() === "") {
      //trim para eliminar espacios en blanco, ya que se consideran un string
      mostrarAlerta(
        `El campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }

    if (e.target.id === "email" && !validarEmail(e.target.value)) {
      mostrarAlerta("El email no es válido", e.target.parentElement);
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }

    limpiarAlerta(e.target.parentElement);

    //Asignar los valores. Mapeamos los campos al objeto email, se van llenando dinámicamente según se van completando los campos
    email[e.target.name] = e.target.value.trim().toLowerCase();
    console.log(email);

    //Comprobar el objeto email
    comprobarEmail();
  }

  function mostrarAlerta(mensaje, referencia) {
    //Comprueba si ya existe una alerta y no me genera varias
    // const alerta = referencia.querySelector(".bg-red-600"); //Buscamos en referencia, ya que si usamos document va a buscar en todo el documento y solo nos interesa el area del input
    // if (alerta) {
    //   alerta.remove();
    // }

    limpiarAlerta(referencia);

    //referencia es donde se va a añadir el alerta
    //Generar alerta en HTML
    const error = document.createElement("p");
    error.textContent = mensaje; //Se recomienda usar .textContent y no .innerHTML por cuestiones de seguridad de datos.
    console.log(error);
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center"); //Estas son clases de Tailwind CSS. Cada clase aplica una propiedad - no es lo mismo que Bootstrap.

    //Inyectar el error al formulario
    referencia.appendChild(error); //Lo agrega al final del formulario
  }

  //Limpiar alerta

  function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }
  }

  //Validar email con expresión regular

  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }

  function comprobarEmail() {
    //Toma los valores del objeto y los asigna a un arreglo, y comprueba si hay algun valor vacío. Si es asi retorna true
    if (Object.values(email).includes("")) {
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;
      return;
    }
    btnSubmit.classList.remove("opacity-50");
    btnSubmit.disabled = false;
  }

  function resetFormulario() {
    email.email = "";
    email.asunto = "";
    email.mensaje = "";
    formulario.reset();
    comprobarEmail();
  }
});
