/*
	Ejercicio de "Soy Dalto" cap 4

	Cofla ya esta terminando el primer semestre del primer ciclo, la tarea que le 
	debe realizar es mucho mas avanzada de la que tenia antes, ademas de suma, resta
	miltiplicacion y division , ahora tambien necesita calcular potencias, raices cuadradas
	y cubicas

		- perfeccionar calculadora implementando nuevas funciones

*/
class Calculadora {
	constructor(){
	}
	sumar (num1,num2){
		return parseFloat(num1) + parseFloat(num2);
	}
	restar (num1,num2){
		return parseFloat(num1) - parseFloat(num2);
	}
	multiplicar (num1,num2){
		return parseFloat(num1) * parseFloat(num2);
	}
	dividir (num1,num2){
		return parseFloat(num1) / parseFloat(num2);
	}
	potenciar(num1,exp){
		return parseFloat(num1) ** parseFloat(exp);
	}
	raizCuadrada(num1){
		return Math.sqrt(num1)
	}
	raizCubica(num1){
		return Math.cbrt(num1)
	}

}
const calculadora = new Calculadora();

alert("Que operacion deseas realizar. ? ");

i = 0;
while ( i < 1 ){
	let op = prompt(" S = sumar, R = restar, M = multiplicar, D = dividir, P = potenciar, R1 = raiz cuadrada, R2 = raiz cubica, T = terminar ");
	op = op.toUpperCase();

	if (op == "T"){
		alert("Gracias por usar la calculadora")
		break
	} 
	else{
		if (op == "S" || op == "R" || op == "M" || op == "D" ){
			let num1 = prompt("Escriba un numero ");
			let num2 = prompt("Escriba otro numero ");

			if (op == "S"){
				alert("el resultado de la suma es : " + calculadora.sumar(num1,num2))	
			}
			else if (op == "R"){
				alert("el resultado de la resta es : " + calculadora.restar(num1,num2))
			}
			else if (op == "M"){
				alert("el resultado de la multiplicacion es : " + calculadora.multiplicar(num1,num2))
			}
			else if (op == "D"){
				alert("el resultado de la division es : " + calculadora.dividir(num1,num2))
			} 
			else  {
				alert("no se reconoce la letra de la operacion, vuelva a intentar");
			}
		}
		else if (op == "P" ){
			let num1 = prompt("Escriba un numero ");
			let exp = prompt("Escriba el exponente");
			alert("el resultado de la potenciacion es : " + calculadora.potenciar(num1,exp))
		}
		else if (op == "R1" || op == "R2" ){
			let num1 = prompt("Escriba un numero ");

			if (op == "R1"){
				alert("el resultado de la raiz cuadrada es : " + calculadora.raizCuadrada(num1))
			}
			else if (op == "R2"){
				alert("el resultado de la raiz cubica es : " + calculadora.raizCubica(num1))
			}

		}
	}
}