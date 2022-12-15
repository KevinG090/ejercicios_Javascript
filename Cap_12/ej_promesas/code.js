class Persona {
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
}
// console.log(persona = new Persona("lucas dalto","@kevinG090"))

const datosPersonas = [
    ["kevin","@kevin"],
    ["juan"],
    ["andrea","@andrea"],
    ["daniela","@daniela"]
];

const personas = [];

for (let i = 0; i < datosPersonas.length; i++) {
    personas[i] = new Persona(datosPersonas[i][0],datosPersonas[i][1])
}

/* const obtenerPersona = (id,cb) =>{
    if (personas[id] == undefined){
        cb("No se ha encontrado la persona");
    } else {
        cb(null,personas[id],id);
    }
}
*/ 
const obtenerPersona = (id) =>{
   return new Promise ((res,rej)=>{
    if (personas[id] == undefined ) rej ("no se encontro la persona");
    else {res(personas[id])}
   })
}

/* const obtenerInstagram = (id,cb) =>{
    if (personas[id].instagram == undefined){
        cb("No se ha encontrado el instagram");
    } else {
        cb(null,personas[id].instagram);
    }
}
*/
const obtenerInstagram = (id) =>{
    return new Promise ((res,rej)=>{
        if (personas[id].instagram == undefined ) rej ("no se encontro el instagram");
        else {res(personas[id].instagram)}
       })
}
let id = 2;
/*obtenerPersona(2,(err,persona,id)=>{
    if(err){
        console.log(err);
    } else {
        console.log("nombre : "+persona.nombre)
        obtenerInstagram(id,(err,instagram)=>{
            if(err){
                console.log(err);
            } else {
                console.log("instagram : "+instagram);
            }
        })
    }
})
*/
obtenerPersona(id).then((persona)=>{
    console.log(persona.nombre);
    return obtenerInstagram(id);
}).then((instagram)=>{
        console.log(instagram)
    }).catch((e)=>{
        console.log(e)
    })