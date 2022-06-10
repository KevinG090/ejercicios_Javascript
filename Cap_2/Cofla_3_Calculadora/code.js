/*
	Ejercicio de "Soy Dalto" cap 2

	Cofla feliz por haber empezado las clases, volvio a su casa y ya 
	tiene una tarea basica de calculo, ella tiene que hacer un par de 
	ejercicios de matematica que incluyen SUMA , RESTA , MULTIPLICACION
	y DIVISION, realizar una calculadora puede ser mas eficiente

		- crear una calculadora que nos simplifique el trabajo
*/

const sumar = (num1,num2)=>{
	return parseFloat(num1) + parseFloat(num2);
}
const restar = (num1,num2)=>{
	return parseFloat(num1) - parseFloat(num2);
}
const multiplicar = (num1,num2)=>{
	return parseFloat(num1) * parseFloat(num2);
}
const dividir = (num1,num2)=>{
	return parseFloat(num1) / parseFloat(num2);
}

alert("Que operacion deseas realizar. ? ");

i = 0;
while ( i < 1 ){
	let op = prompt(" S = sumar, R = restar, M = multiplicar, D = dividir");

	let num1 = prompt("Escriba un numero ");
	let num2 = prompt("Escriba otro numero ");
	
	op = op.toUpperCase();
	if (op == "S"){
		// i++;
		alert("el resultado de la suma es : " + sumar(num1,num2))	
	}
	else if (op == "R"){
		// i++;
		alert("el resultado de la resta es : " + restar(num1,num2))
	}
	else if (op == "M"){
		// i++;
		alert("el resultado de la multiplicacion es : " + multiplicar(num1,num2))
	}
	else if (op == "D"){
		// i++;
		alert("el resultado de la division es : " + dividir(num1,num2))
	} 
	else  {
		alert("no se reconoce la letra de la operacion, vuelva a intentar");
	}
}