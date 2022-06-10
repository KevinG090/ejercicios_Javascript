let numero1 = prompt("dime un numero");
let numero2 = prompt("otro  numero");
let op = prompt("dime si es suma, resta o multiplicacion");

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

// function operacion(num1,num2,op) {
// 	if ( op == "suma"){
// 		alert(`tu numero es ${numero1+numero2}`);
// 	}
// 	else if ( op == "resta"){
// 		alert(`tu numero es ${numero1-numero2}`);
// 	}
// 	else if ( op == "multiplicacion"){
// 		alert(`tu numero es ${numero1*numero2}`);
// 	}
// 	else{
// 		alert(`lo siento, no se reconoce el operador`);
// 	}
// }

// const operacion = function (num1,num2,op) {
// 	if ( op == "suma"){
// 		alert(`tu numero es ${numero1+numero2}`);
// 	}
// 	else if ( op == "resta"){
// 		alert(`tu numero es ${numero1-numero2}`);
// 	}
// 	else if ( op == "multiplicacion"){
// 		alert(`tu numero es ${numero1*numero2}`);
// 	}
// 	else{
// 		alert(`lo siento, no se reconoce el operador`);
// 	}
// }

const operacion =(num1,num2,op)=> {
	if ( op == "suma"){
		alert(`tu numero es ${numero1+numero2}`);
	}
	else if ( op == "resta"){
		alert(`tu numero es ${numero1-numero2}`);
	}
	else if ( op == "multiplicacion"){
		alert(`tu numero es ${numero1*numero2}`);
	}
	else{
		alert(`lo siento, no se reconoce el operador`);
	}
}

operacion(numero1,numero2,op);
