/*1
	Ejercicio de "Soy Dalto" cap 10 

	Las mesas de examen ya finalizaron y el profesor le tomo un ultimo examen especial a cofa, ya cofla
    hizo dos pruebas mas, pero lamentablemente se rompio el sistema de inscripcion de notas, por ende habra
    que crear una solucion

		-crear un sistema para introducir nota
		-validar que no haya errores
		-se debe promediar la nota del profesor con otras dos notas de trabajo
        - si el promedio es mayor a 7/10 aprueba la materia
*/

const sendNote = document.getElementById("boton");

sendNote.addEventListener("click",()=>{
    let resultado,mensaje;
    try{
        prevRest = parseInt(document.getElementById("nota-alumno").value);
        if (isNaN(prevRest)){
            throw "Putoo";
        }
        mensaje= definirMensaje(prevRest);
        resultado=verificarPromedio(10,8,prevRest);
    } catch(e){
        resultado = "Sos gracioso?";
        mensaje = "he descubierto que intentaste hack";
    }
    abrirModal(mensaje,resultado)
})

const definirMensaje = (pr)=>{
    let resultado;
    switch (pr){
        case 1: resultado = `Re malo que sos, como que ${pr} ?`;
        break ;
        case 2: resultado = `Re malo que sos, como que ${pr} ?`;
        break ;
        case 3: resultado = `Re malo que sos, como que ${pr} ?`;
        break ;
        case 4: resultado = `Re malo que sos, como que ${pr} ?`;
        break ;
        case 5: resultado = `Re malo que sos, como que ${pr} ?`;
        break ;
        case 6: resultado = `Re malo que sos, como que ${pr} ?`;
        break ;
        case 7: resultado = `Pasaste de chiripa, disque con ${pr} `;
        break ;
        case 8: resultado = `bien pero se puede mejorar ese ${pr} `;
        break ;
        case 9: resultado = `excelente pa, manten ese ${pr} `;
        break ;
        case 10: resultado = `que haces aqui todavia, con ese ${pr} ya eres todo un crack papu`;
        break ;
        default: resultado = null;       
    }
    return resultado;
}

const verificarPromedio = (nt1,nt2,pr) =>{
    let promedio = (nt1 + nt2 + pr) / 3 ;
    if (promedio >= 7){
        return `<span class="green">Aprobaste con ${promedio}</span>`;
    } else{
    return `<span class="red">Desaprobaste con ${promedio}</span>`;
    }
}
i=1;
const abrirModal = (msg,rst) => {
    document.getElementById("resultado").innerHTML=rst;
    document.getElementById("mensaje").innerHTML=msg;
    const contenedor = document.querySelector(".contenedor-background");
    contenedor.style.display = "flex";
    contenedor.style.animation = "aparecer 1s forwards";
    cerrarModal();
}
const cerrarModal = () => {
    const contenedor = document.querySelector(".contenedor-background");
    setTimeout (function(){
        contenedor.style.animation = "desaparecer 4s forwards";
        setTimeout (function(){
            contenedor.style.display = "none";
        },4000); 
    },5000); 
   
}
// function cerrarTodo (){
//     const contenedor = document.querySelector(".contenedor-background");
    
// }