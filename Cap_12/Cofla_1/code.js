/*1
	Ejercicio de "Soy Dalto" cap 12 

	cofla esta en su ultimo año y necesota recuperar todas sus notas para que le puedan decir si efectivamente paso
    al ultimo semestre, de ser asi cofla estara a un paso de terminar su carrera como ingeniero, sin embargo, hay un
    problema, las notas que necesita estan en otro servidor

		-crear un sistema que almacene toda la informacion de las materias y las muestre en pantalla de forma ordenada
*/

const materiasHTML = document.querySelector(".contenedor-materias");

const materias = [
    {
        nombre:"fisica 1",
        nota:9
    },{
        nombre:"calculo 3",
        nota:10
    },{
        nombre:"bases de datos 4",
        nota:7
    },{
        nombre:"matematicas 1",
        nota:8
    },{
        nombre:"programacion 5",
        nota:6
    }
]

const obtenerMateria = (id) =>{
    return new Promise((res,rej)=>{
        let materia = materias[id];
        if (materia == undefined){
            rej("lo siento, no se encontro la materia");
        } else {
            setTimeout (function(){res(materia)},Math.random()*3000);
        }
    })
}

const devolvermaterias = async ()=>{
    let materia = [];
    for (let i = 0; i < materias.length; i++) {
        materia[i] = await obtenerMateria(i);
        let newHTMLCode = `
        <div class="materia">
			<div class="nombre">${materia[i].nombre}</div>
			<div class="nota">${materia[i].nota}</div>
		</div>
        `;
        materiasHTML.insertAdjacentHTML("beforeend",newHTMLCode);
    }
}
devolvermaterias()

// obtenerMateria(2).then((res)=>{
//     console.log(res)
// })