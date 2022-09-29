// let obj = {"prop" : "datos"};
// let string = "string";
// let funtion = function () {};

// console.log(obj.__proto__);
// console.log(string.__proto__);
// console.log(funtion.prototype);

/* 
para acceder a un prototipo heredado utilizamos (__proto__)
para acceder a un prototipo creado por nosotros usamos (prototype)
*/ 

// --- Modificar un metodo con proto

class objeto {
    const (){};
    hablar (){console.log("holoo")};
}
const nuevoObjeto = new objeto();
// nuevoObjeto.hablar()

nuevoObjeto.__proto__.hablar = ()=>{
    console.log("metodo hablar() fue modificado")
}
// nuevoObjeto.hablar()
// console.log(nuevoObjeto)

// --- Herdedar un metodo en un array

let array = []
array.__proto__ = nuevoObjeto;
array.hablar()   
