/*
	Ejercicio de "Soy Dalto" cap 2

	Cofla vuelve de la comisaria exhausto y por lo cansado que estaba
	se fue a dormir... Al otro dia comienzan las clases del ciclo basico 
	de la universidad (porque Cofla quiere ser programador y se inscribio 
	en la facultad de ingenieria para estudiar desarrollo de software )

	En su curso son 19 ALUMNOS, pero surgio un problema que complico un poco 
	a la facultad: Se rompio el sistema de registro de asistencias y durante 
	proximos 30 dias no se podran hacer registros de datos de ningun tipo, 
	por ende las clases no podran comenzar hasta que esto este solucionado.

		-crear un mini-sistema que nos permita registrar los alumnos que esten
		 presentes (p) y ausentes (a) en clase.

		-Se puede tener un maximo de 10% de ausencias por sementre, si se tienen
		mas, aclarar que esta reprobado
*/

let cant_Alumnos = prompt ("cuantos alumnos son ?"); //cantidad en total
let AlumnosT = []; // array donde se guardaran los nombres y las asistencias
cant_Alumnos = parseInt (cant_Alumnos);

// 1 Guardar nombre y crear un array para la asistencia

for (i = 0; i < cant_Alumnos; i++){ 
	AlumnosT[i] = [prompt("cual es el nombre del alumno " + (i+1) + " ?"),0];
}// Ej: [kevin,0]

// 3 la funcion recibe el nombre y la ubicacion, con el fin de 
//sumarle la asistencia 

//si la persona esta presente (P) al numero de asistencia se le sumara 1, 
// en caso que se escriba cuarquier cosa no se le sumara, por ende se le restara al final
const tomarAsistencia = (nombre,i )=>{
	let presencia = prompt(`${nombre} esta presente?`);
	if (presencia == "p" || presencia == "P"){
		AlumnosT[i][1]++;
	} 
}

// 2  toma de lista con 3 dias y llama a la funcion dandole 
// el nombre y la posicion 

for (i = 0; i < 3 ; i++){
	for (alumno in AlumnosT){
		tomarAsistencia(AlumnosT[alumno][0],alumno)
	}
}

// 4

for (alumno in AlumnosT){
	let resultado = `${AlumnosT[alumno][0]}: <br>
	--------- Asistencia: ${AlumnosT[alumno][1]} <br>
	--------- Ausencias: ${3 - AlumnosT[alumno][1]}`
	if (3 - AlumnosT[alumno][1] >=2) {
		resultado+=" REPROBADO <br><br>"
	}
	else {
		resultado += "<br><br>"
	}
	document.write(resultado)
}

