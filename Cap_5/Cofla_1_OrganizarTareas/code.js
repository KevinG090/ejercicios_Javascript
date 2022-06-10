/* 
	cofla esta sufriendo un poco... ya que, a pesar de que cree contar con el 90% de 
	asistencias y tener un promedio mayor a 7 / 10, no cree entregar el 70% de trabajos
	practicos entregados ya que necesita dividir las tareas que hara semanalmente, cofla
	debe, trabajar 8 h por dia durante 2 semanas entre las cuales tiene que: 24 horas estudiar,
	24 horas hacer trabajos practicos, 56 horas trabajar y 8 horas de los que haceres de la csa
		
		-organizar las actividades diariamente
		-utilizar la consola para organizar todo
		- el tiempo por tarea no debe superar las 4 horas
*/
/*
Trabajo General: (8 horas => 480 min)*2 = 112 horas => 6720min 

Descansar : 10 min
Trabajar : 240 min => 4 horas diarias
Estudiar : 102 min => 1.7 horas diarias (1h y 42min)
Trabajos Practicos : 102 min => 1.7 horas diarias (1h y 42min)
Homeworks : 34 min => 0.56 horas diarias  
*/

const distribuirTareas =(dia)=>{
	console.groupCollapsed("%cDia :","color:red",dia)
	
	console.log("Trabajar 4 horas")
	console.log("Descansar 10 minutos")
	console.log("Estudiar 1 hora y 42 minutos")
	console.log("Descansar 10 minutos")
	console.log("Trabajos Practicos 1 hora y 42 minutos")
	console.log("Descansar 10 minutos")
	console.log("Hacer Oficio 34 min")
	
	console.groupEnd()
}

for ( i=1 ; i <= 2 ; i++ ) {
	console.group(" %cSEMANA :","color:blue",i)
	for ( j=1 ; j <= 7 ; j++ ) {	
		distribuirTareas (j);	
	}
	console.groupEnd()
}
