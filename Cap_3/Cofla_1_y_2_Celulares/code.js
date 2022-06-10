/*1
	Ejercicio de "Soy Dalto" cap 3 

	1. Cofla entro a una tienda que vende celulares porque la parecio
	bastante bueno comprarse un nuevo celular; de todos los modelos 
	que hay disponibles en esa tienda, a cofla le llamaron la atencion
	3 celulares especificamente, sin embargo ningun vendedor tenia 
	conocimiento a respecto, por ende no le pueden recomendar mucho, asi 
	que antes de comprar los cells quiere ver las cualidades y componentes 
	de cada uno para poder comprarlos

		-crear un sistema para mostrarle a cofla las particularidades de los 3 cells
		-cada celular debe tener un colo, peso, resolucion de pantalla, camara y memoria ram
		-cada celular debe poder prender, reiniciar, apagar, tomar fotos y grabar
*/
/*2
    2. Cofla no esta satisfecho con los celulares asi que decide ir a la seccion 
    de celulares de alta gama, donde va poder encontrar los celulares mas caros del lugar,
    asi que al entrar vio dos celulares que le encantaron, estos 2 celulares de alta gama 
    pueden hacer lo que no podian hacer los 3 cells anteriores, sin embargo tienen mejores 
    caracteristicas y ademas pueden grabar en camara super lenta, tiene reconocimiento facial y 
    camara extra

    		- implementar todas las cualidades en lo cells de alta gama (mejorados)
*/

// 1
class Celulares {
	constructor(color, peso, res_Pantalla,res_Camara,Ram){
		this.color = color ;
		this.peso = peso ; 
		this.resolucionDePantalla = res_Pantalla;
		this.resolucionDeCamara = res_Camara;
		this.memoriaRam = Ram; 
		this.encendido = false;
	}
	presionarBotonPrincipal(){
		if (this.encendido == false ){

			alert("celular prendido");
			this.encendido = true;
		}else if (this.encendido == true ){

			alert("celular apagado");
			this.encendido = false;
		}
	}
	reiniciar (){
		if (this.encendido == true ){
			alert("Reiniciando celular...");
		} else {
			alert ("El celular esta apagado, no puede reiniciar");
		}
	}
	foto (){
		if (this.encendido == true ){
			alert ("foto tomada en una resolucion de camara : " + this.resolucionDeCamara);
		} else {
			alert ("El celular esta apagado, no puede tomar fotos");
		}
	}
	video (){
		if (this.encendido == true ){
			alert ("video tomado en una resolucion de camara : " + this.resolucionDeCamara);
		} else {
			alert ("El celular esta apagado, no puede tomar videos");
		}
	}
	get getInfo(){
		return `
		Color = <b>${this.color}</b><br>
		Peso = <b>${this.peso}</b><br>
		RDP = <b>${this.resolucionDePantalla}</b><br>
		RDC = <b>${this.resolucionDeCamara}</b><br>
		Ram = <b>${this.memoriaRam}</b><br>
		`
	}
}
// 2
class CelularesAltaGama extends Celulares{ // se crea una nueva clase que hereda a la de celulares (EXTENDS)
	constructor(color, peso, res_Pantalla,res_Camara,Ram,res_CamaraExtra){
		super(color,peso,res_Pantalla,res_Camara,Ram); // Con "SUPER" decimos las propiedades que queremos heredar 
		this.resolucionDeCamaraExtra = res_CamaraExtra;
		this.encendido = false;
	}
	videoLento (){
		if (this.encendido == true ){
			alert ("videoLento tomado en una resolucion de camara : " + this.resolucionDeCamara);
		} else {
			alert ("El celular esta apagado");
		}
	}
	reconocimientoFacial (){
		if (this.encendido == true ){
			alert("Preparando el reconocimiento Facial")
		} else {
			alert ("El celular esta apagado");
		}
	}
	get getInfo(){
		return `
		Color = <b>${this.color}</b><br>
		Peso = <b>${this.peso}</b><br>
		RDP = <b>${this.resolucionDePantalla}</b><br>
		RDC = <b>${this.resolucionDeCamara}</b><br>
		Ram = <b>${this.memoriaRam}</b><br>
		RDC Extra = <b>${this.resolucionDeCamaraExtra}</b><br>
		`
	}
}

	// celular1 = new Celulares ("negro", "120g", "5'","hd","2gb" );
	// celular2 = new Celulares ("blanco", "150g", "7'","full hd","8gb" );

	// document.write(`<b>Celular 1 :</b><br>${celular1.getInfo}<br>
	// 				<b>Celular 2: </b><br>${celular2.getInfo}<br>`);


celularAltaGama1 = new CelularesAltaGama ("negro", "120g", "5'","hd","2gb","4gb");
celularAltaGama2 = new CelularesAltaGama ("blanco", "150g", "7'","full hd","8gb","16gb" );

document.write(`<b>Celular Alta Gama 1 :</b><br>${celularAltaGama1.getInfo}<br>
				<b>Celular Alta Gama 2 : </b><br>${celularAltaGama2.getInfo}`);

// Acciones del celular 
/*
	celular1.presionarBotonPrincipal();
	celular1.foto();
	celular1.video();
	celular1.reiniciar();
	celular1.presionarBotonPrincipal();
*/
/*
	celularAltaGama2.foto();
	celularAltaGama2.video();
	celularAltaGama2.presionarBotonPrincipal();
	celularAltaGama2.foto();
	celularAltaGama2.video();
	celularAltaGama2.reiniciar();
	celularAltaGama2.presionarBotonPrincipal();
*/
/*
	celularAltaGama2.foto();
	celularAltaGama2.video();
	celularAltaGama2.reiniciar();
	celularAltaGama2.presionarBotonPrincipal();
*/
