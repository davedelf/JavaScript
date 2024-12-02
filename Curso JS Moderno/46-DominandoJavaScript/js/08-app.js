//Self - Se refiere a la ventana global window. Se utilzia mucho en ServiceWorkers

window.onload=()=>{
    console.log("Ventana lista");
}

window.nombre="Monitor 20 Pulgadas"

const producto={
    nombre:"Monitor 20 Pulgadas",
    precio:30,
    disponible:true,
    mostrarInfo:function(){
        return `El producto: ${self.nombre} tiene un precio de ${this.precio}`
    }
}

console.log(producto.mostrarInfo());