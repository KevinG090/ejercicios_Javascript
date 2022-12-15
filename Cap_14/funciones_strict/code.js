"use strict";
/* 
- las funciones flecha no se pueden usar como constructores ni como metodos
- el "this" se refiere a window o al objeto del bloque anterior
*/


let proceso = 1; 
const validarEdad = (msg)=>{
    console.log(`MSG => ${msg}, PROCESO ${proceso}`)
    let edad ;
    try {
        if (msg) edad = prompt(msg);
        else edad = prompt("introduce tu edad");
        edad = parseInt(edad);
        if (isNaN(edad)) throw proceso++,"introduce un numero para la edad";
        if (edad > 18) console.log("sos mayor de edad");
        else console.log("sos menor de edad")
    } catch(e){
        console.log(`ERROR => ${e}, PROCESO ${proceso}`)
        validarEdad(e)
    }
}
// validarEdad(); 

//destructurativo, objeto rest 

let arr = ["manzana","pera","lulo"]
let arr2 = ["kiwi","banana"]

//1ra forma de añadir el array 2 al primero
// arr.push(arr2[0],arr2[1])
// console.log(arr)
// nota: no es practico, ya que en caso que se quiera añadir mas datos se vuelve tedioso

//2ra forma de añadir el array 2 al primero
arr.push(...arr);
console.log(arr)
// nota: mas practico