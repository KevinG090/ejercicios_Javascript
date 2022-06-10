/*
	Termino el primer semestre y cofla no sabe si aprobara o no las materias
	para lograrlo necesitara :
	contar con al menos el 90% de asistencia
	el promedio por materia debe ser de al menos 7 / 10
	debe tener al menos del 75% de los trabajos practicos entregados 

		-solicitar los datos y decirle si aprueba o no
		-mostrar todo esto con colores representativos en consola 
		-todo estructurado en una tabla
*/
// 1 asitencia
// 2 promedio de calificacion
// 3 trabajos entregados

let clases = {
	fisica : [90,7,2],
	logica : [100,9,3],
	ingles : [50,2,4],
	calculo : [90,8,3],
	biologia : [90,8,4],
	matematica : [60,5,3]
}

const verificacionDeNotas = () => {
	for (materia in clases) {

		let asistencia = clases[materia][0];
		let promedioNotas = clases[materia][1];
		let trabajosEntregados = clases[materia][2];

		if (asistencia >= 90 && promedioNotas >=7 && trabajosEntregados >= 3) {
			console.log (materia +" : " + "%cAprobo","color:blue");
		}
		else{
			console.log (materia +" : " + "%cDesaprobo","color:red");
		}
	}
}
verificacionDeNotas()