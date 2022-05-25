/*
	Ejercicio de "Soy Dalto" cap 2

	Cofla feliz por haber empezado las clases, volvio a su casa y ya 
	tiene una tarea basica de calculo, ella tiene que hacer un par de 
	ejercicios de matematica que incluyen SUMA , RESTA , MULTIPLICACION
	y DIVISION, realizar una calculadora puede ser mas eficiente

		- crear una calculadora que nos simplifique el trabajo
*/

const sumar = (num1,num2)=>{
	return parseInt(num1) + parseInt(num1);
}
const restar = (num1,num2)=>{
	return parseInt(num1) - parseInt(num1);
}
const multiplicar = (num1,num2)=>{
	return parseInt(num1) * parseInt(num1);
}
const dividir = (num1,num2)=>{
	return parseInt(num1) / parseInt(num1);
}

alert("Que operacion deseas realizar ? ");
op = prompt(" S = sumar, R = restar, M = multiplicar, D = dividir");
