/*
	Ejercicio de "Soy Dalto" cap 4

	Cofla ya vio las 12 materias y se decidio en cual se va 
	a insribir asi que en tres dias lo hara, el problema es que se rompio
	el sistema de inscripciones

		-crear una funcion para preguntarle a cofla en que materia se quiere
		 inscribir 
		-si ya hay 20 alumnos en la materia negarle la inscripcion
		-si hay menos de 20 alumnos inscribir a cofra y añadirlo a la lista de alumnos
*/
let materias  = {
		fisica:["PEREZ","juan","pepito","maria","luis"],
		programacion:["PEDRO","juan","pepito","maria","kevin","cofla"],
		logica:["CAMILO","maria","kevin",],
		quimica:["JUAN","pepito","maria","cofla"]
}
const inscribir = (alumno,materia)=>{
	personas = materias[materia];
	personas.shift()
	alumnosInscritos = personas ;

	if (alumnosInscritos.length >= 5 ){
		document.write(`lo siento <b>${alumno}</b> , las clases de <b>${materia}</b> ya estan llenas<br><br>`)
	} 
	else {
		alumnosInscritos.push(alumno)
		if (materia == "fisica"){
			materias  = {
				fisica: alumnosInscritos,
				programacion: materias['programacion'],
				logica: materias['logica'],
				quimica: materias['quimica']
			}
		}
		else if (materia == "programacion"){
			materias  = {
				fisica: materias['fisica'],
				programacion: alumnosInscritos,
				logica: materias['logica'],
				quimica: materias['quimica']
			}
		}
		else if (materia == "logica"){
			materias  = {
				fisica: materias['fisica'],
				programacion: materias['programacion'],
				logica: alumnosInscritos,
				quimica: materias['quimica']
			}
		}
		else if (materia == "quimica"){
			materias  = {
				fisica: materias['fisica'],
				programacion: materias['programacion'],
				logica: materias['quimica'],
				quimica: alumnosInscritos
			}
		}
		document.write(`Felicidades <b>${alumno}!</b> te has inscrito a la <b>${materia} </b><br><br>`)
		
	}
}
document.write(`${materias["quimica"]}<br><br>`)

inscribir("lucho","quimica")

document.write(`${materias["quimica"]}<br><br>`)