// VER CONSOLA
let nombre = "pesdro";

const promesa = new Promise((resolve,reject)=>{
    if (nombre !== "pedro") reject ("lo siento, el nombre no es pedro")
    else resolve(nombre)
}) 
promesa.then((resultado)=>{
    console.log(resultado)
}).catch((e)=>{
    console.log(e)
})


// reject => si salio mal hacer x cosa
// resolve => si salio bien mostrar/ejecutar x cosa

// PROMESA.THEN() se ejecuta si todo sale bien osea si se ejecuta RESOLVE
// .CATCH() se ejecuta si HAY un ERROR osea si se ejecuta REJECT

/* las promesas son asincronas (trabaja en tiempo real) */ 

const obtenerInfo = (text) =>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{res(text)},Math.random()*200)
    })
}
/* // asincronico
obtenerInfo("1 : kevin").then(resultado => console.log(resultado))
obtenerInfo("2 : juan").then(resultado => console.log(resultado))
obtenerInfo("3 : maria").then(resultado => console.log(resultado))
*/

/* // sincronico (async and await)
const mostrarData =async () =>{
    console.log(await obtenerInfo("kevin"))
    console.log(await obtenerInfo("juan"))
    console.log(await obtenerInfo("maria"))
}
mostrarData()
*/
// el await no deja que continue la siguiente linea hasta que termine todo el proceso 