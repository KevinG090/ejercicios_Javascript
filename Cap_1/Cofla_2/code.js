/*
	Ejercicio de "Soy Dalto" cap 1

	Cofla le regala el dinero a un habitante de calle y este personaje
	quiere comprar un boleto de loteria; crear un programa que le indique 
	cuantos boletos puede comprar e indicando lo que sobra si es el caso 

	- Saber cuanto dinero tiene
	- Cual es el costo de cada dinero 
	- Indicar cuantos boletos puede comprar y si le sobra algo 

*/
let Boleta = 2000;

const presupuesto = document.getElementById('number');
const boton = document.querySelector(".boton-comprar");
let respuesta = document.getElementById('text');

const verificador = (dinero) => {
	let verificacion = "";
	if (dinero < Boleta) {
		verificacion = "lo siento, no te alcanza";
	}
	else if (dinero >= Boleta) {
		for(i = 0 ; i < 3 ; i++){
			if (dinero >= Boleta*(i+1) && i < 2 ){
				 verificacion = " te puedes comprar una(s) " + (i+1) + " boleta(s)  y te sobra " + (dinero - Boleta*(i+1)) + " pesos";
			}
			else if (dinero >= Boleta*(i+1) && i >= 2 ){
				verificacion = " te puedes comprar unas " + (i+1) + " boletas  y puedes donar " + (dinero - Boleta*(i+1)) + " pesos";
			}
		}	
	}
	respuesta.value = verificacion;
}
	boton.addEventListener("click",()=>{ // al darle click al boton (es un evento)
		if (presupuesto.value !=""){
			verificador(presupuesto.value);
		}		
	})
