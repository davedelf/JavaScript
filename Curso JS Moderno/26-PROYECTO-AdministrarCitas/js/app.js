//Selectores
const pacienteInput = document.querySelector("#paciente");
const propietarioInput = document.querySelector("#propietario");
const emailInput = document.querySelector("#email");
const fechaInput = document.querySelector("#fecha");
const sintomasInput = document.querySelector("#sintomas");

//Objeto de cita
const citaObj = {
  paciente: "",
  propietario: "",
  email: "",
  fecha: "",
  sintomas: "",
};

console.log(citaObj);


//Eventos

//Sincronizamos código con la interfáz, inyectamos dinámicamente. Funciona si el 'name' del input coincide con la propiedad del objeto
pacienteInput.addEventListener("change",(e)=>{
    citaObj[e.target.name]=e.target.value
    console.log(citaObj);
})

propietarioInput.addEventListener("change",(e)=>{
    citaObj[e.target.name]=e.target.value
    console.log(citaObj);
})

emailInput.addEventListener("change",(e)=>{
    citaObj[e.target.name]=e.target.value
    console.log(citaObj);
})

fechaInput.addEventListener("change",(e)=>{
    citaObj[e.target.name]=e.target.value
    console.log(citaObj);
})

sintomasInput.addEventListener("change",(e)=>{
    citaObj[e.target.name]=e.target.value
    console.log(citaObj);
})