/*
	Cofla ya tiene su nuevo celular y ahora esta mirando las aplicaciones
	del Play Store ya que quiere jugar juegos que sean muy populares, que
	tengan una buena puntuacion y que pese poco, pero las 5 apps que 
	llamaron su atencion son un tanto similares y sabe que si descsrga
	todas, problablemente juegue con todas, sin embargo el va a descargar 
	solo 2 para no tener perdidas innecesarias de tiempo jugando juegos con
	su celular, pero el problema viene cuando no puede decidirse cual de todas 
	aplicaciones es la que va a descargar
		
		-crear un sistema que ayude a cofla a decidir cual app descargar
		-la informacion de los intaladores debe contener la cantidad de 
		 descargas, la puntuacion y peso
		-las apps se deben poder instalar, abrir, cerrar y desistalar

*/
class Apps {
	constructor (descargas, puntuacion, peso){
		this.descargas = descargas ; 
		this.puntuacion = puntuacion ; 
		this.peso = peso ; 
		this.iniciada = false ;
		this.instalada = false ;
	}
	abrir (){
		if (this.instalada==true){
			if (this.iniciada == false){
				alert(`la aplicacion esta abierta`)	
				this.iniciada = true ;
			}
		}
		else {
			alert(`ERROR 00.1 : la aplicacion no esta instalada`)
		} 
	}
	cerrar (){
		if (this.instalada==true){
			if (this.iniciada == true){
				alert(`la aplicacion esta cerrada`)	
				this.iniciada = false ;
			} 
		}
		else {
			alert(`ERROR 00.2 : la aplicacion no esta instalada`)
		}
			
	}
	instalar (){
		if (this.instalada == false){
				alert(`la aplicacion esta instalada`)	
				this.instalada = true ;
		}
		else if (this.instalada == true ) {
				alert(`la aplicacion ya esta instalada `)
		}
	}
	desinstalar (){
		if (this.instalada == true){
				alert(`la aplicacion esta deinstalada`)	
				this.instalada = false ;
		}
		else if (this.instalada == false ) {
				alert(`la aplicacion ya esta desinstalada `)
		}
	}
	get getInfo (){
		return `
			descargas totales => <b>${this.descargas}</b><br> 
			puntuacion general => <b>${this.puntuacion}</b><br> 
			peso de almacenamiento => <b>${this.peso}</b><br>
		`
	}

}

app = new Apps ("16.000","3 estrellas", "200Mb")
app1 = new Apps ("6.000","4 estrellas", "40Mb")
app2 = new Apps ("10.000.000","5 estrellas", "600Mb")
app3 = new Apps ("2.000","2 estrellas", "20Mb")
app4 = new Apps ("1.600","1 estrellas", "300Mb")



document.write(`${app.getInfo} <br>`)
document.write(`${app1.getInfo} <br>`)
document.write(`${app2.getInfo} <br>`)
document.write(`${app3.getInfo} <br>`)

