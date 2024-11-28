const url = "http://localhost:4000/clientes";

//Crea un nuevo cliente - POST
export const nuevoCliente = async (cliente) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};


//Obtiene todos los clientes - GET
export const obtenerClientes=async()=>{
    try{
        const resultado= await fetch(url)  //Por defecto fetch() envía un GET
        const clientes=await resultado.json()
        return clientes

    }catch(error){
        console.log(error);
    }
}