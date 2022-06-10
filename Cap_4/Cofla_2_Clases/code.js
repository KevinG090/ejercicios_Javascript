/*
	Ejercicio de "Soy Dalto" cap 4

	La facultad de cofla esta por comenzar y ya las 12 materias de la carrera tienen 
	asignado un profesor y todos los alumnos que se anotaron en dichas clases, pero
	necesitamos ver esto mas ordenadamente

		-crear una funcion que al pasarle como parametro la materia nos devuelva:
			*profesor asignado
			*el nombre de todos los alumnos
		-crear una funcion que nos diga en cuantas clases esta cofla
		-nombrar las clases en las que esta junto a los profesores correspondientes 
*/

const obtenerInfo = (materia)=>{
	materias = {
		fisica:["PEREZ","juan","pepito","maria","luis"],
		programacion:["PEDRO","juan","pepito","maria","kevin","cofla"],
		logica:["CAMILO","pepito","maria","kevin","cofla"],
		quimica:["JUAN","pepito","maria","kevin","cofla"]
	}
	if (materias[materia] !== undefined){
		let res = [materias[materia],materia]; 
		// materias[materia] es el array que se solicita ej:(materias[fisica]) y materia solo es el nombre del array ej: (fisica)
		// document.write(`tipo de dato : ${typeof(res)}<br>`)
		return res ;
	} 
	else {
		return materias // retorna las materias ej : ([fisica],[programacion]...)
	}
}

const mostrarInfo = (materia)=>{
	let info = obtenerInfo(materia); // nos retorna [materias[materia],materia];
	let profe = obtenerInfo(materia)[0][0];// entra en materias/(materia Correspondiente)/en la ubicacion (0) que es el nombre de profesor
	let alumnos = obtenerInfo(materia)[0];// entra a materias/(materia Correspondiente)/y nos devuelve todos los alumnos 
	alumnos.shift();// nos quita el primer valor ya que es del profe

	document.write(`Profesor <b>${profe}</b><br>
		Materia : <b style= color:red> ${info[1]}</b><br>
		Alumnos : <b style= color:blue>${alumnos}</b><br><br>`)
}

const cantidadClases = (alumno)=>{
	let informacion = obtenerInfo();// nos devuelve el contenido de materias ya es es indefined 
	let clasesPresentes = [];
	let cantidadTotal = 0;
	for ( info in informacion){	 // info recorre cada uno de los arrays de informacion osea de las materias
		if (informacion[info].includes(alumno)){ // verificamos si alumno esta en la materia
			cantidadTotal++;
			clasesPresentes.push(info + " ");// metemos la materia en un array 
		}
	}
	document.write( `<b>${alumno}</b> esta en <b style= color:red>${cantidadTotal} clases</b> : <b style= color:blue> ${clasesPresentes}</b><br>`)
}

mostrarInfo("fisica")
mostrarInfo("programacion")
mostrarInfo("logica")
mostrarInfo("quimica")

cantidadClases("pepito")
cantidadClases("cofla")
cantidadClases("kevin")
cantidadClases("maria")
cantidadClases("luis")
