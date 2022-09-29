"use strict";

// --- definir un objeto --- 

const obj = {} ; 
Object.defineProperty(obj,'name',{value:"pedro",writable: false});
// obj.name = "kevin";
console.log(obj.name)

//al declarar que el objeto es "writable: false" y al usar "strict" este no se podra modificar o mandara un error

const obj2 = {nombre: "lucas"};
// Object.preventExtensions(obj2); //no permite agregar datos
obj2.apellido = "guevara"
console.log(obj2)

function escribir (a,b){//si hay parametros duplicados manda error
    console.log(`${a} y ${b}`)
}
escribir("hola","kevin")
