let alumnos = [{
    nombre : "Kevin Guevara",
    email : "Kevin@gmail.com",
    materia : "matematicas"
},{
    nombre : "Juan Gonzalez",
    email : "Juan@gmail.com",
    materia : "castellano"
},{
    nombre : "Luis Guerrero",
    email : "Luis@gmail.com",
    materia : "ingles"
},{
    nombre : "Maria Lopez",
    email : "Maria@gmail.com",
    materia : "fisica"
},{
    nombre : "Daniela Rosas",
    email : "Daniela@gmail.com",
    materia : "matematicas"
},];
const btn_confirmar = document.querySelector(".confirmar");
const contenedor = document.querySelector(".grid-container")

for(alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `<div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="semana 1">semana 1</option>
            <option value="semana 2">semana 2</option>
        </select>
    </div>`;
    contenedor.innerHTML += htmlCode;
};

btn_confirmar.addEventListener("click",()=>{
    let confirmar = confirm("Quieres confirmar las mesas")
    if (confirmar){
        document.body.removeChild(btn_confirmar)
        let elementos = document.querySelectorAll(".semana");
        let semanaElegida = document.querySelectorAll(".semana-elegida");
        
        for(elemento in elementos){
            semana=elementos[elemento];
            semana.innerHTML=semanaElegida[elemento].value;
        }
    }

})